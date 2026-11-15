import { createHash } from 'node:crypto';
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, fetch }) => {
	const form = await request.formData().catch(() => null);
	const emailInput = form?.get('email');
	const email = typeof emailInput === 'string' ? emailInput.trim().toLowerCase() : '';

	if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ ok: false, message: 'Enter a valid email address.' }, { status: 400 });
	}

	const {
		MAILCHIMP_API_KEY: apiKey,
		MAILCHIMP_AUDIENCE_ID: audienceId,
		MAILCHIMP_SERVER_PREFIX: serverPrefix
	} = env;

	const errorMessage = 'Newsletter signup is temporarily unavailable. Please try again.';

	if (!apiKey || !audienceId || !serverPrefix) {
		console.error('Missing Mailchimp environment variables');
		return json({ ok: false, message: errorMessage }, { status: 503 });
	}

	const subscriberHash = createHash('md5').update(email).digest('hex');
	const memberUrl =
		`https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

	const source = form?.get('source');
	const tags = source === 'home' || source === 'footer' ? [`website-${source}`] : undefined;

	try {
		const response = await fetch(memberUrl, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email_address: email,
				status_if_new: 'subscribed',
				tags
			})
		});

		const result = (await response.json()) as { status?: string; title?: string };

		if (!response.ok) {
			console.error('Mailchimp signup failed', response.status, result.title);
			return json({ ok: false, message: errorMessage }, { status: 502 });
		}

		if (result.status === 'pending') {
			return json({ ok: true, message: 'Check your inbox to confirm your subscription.' });
		}

		if (result.status === 'subscribed') {
			return json({ ok: true, message: 'You’re subscribed!' });
		}

		return json(
			{ ok: false, message: 'We couldn’t subscribe this address. Try another email.' },
			{ status: 422 }
		);
	} catch {
		console.error('Could not complete Mailchimp signup request');
		return json({ ok: false, message: errorMessage }, { status: 502 });
	}
};