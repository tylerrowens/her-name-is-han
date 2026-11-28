import {SANITY_VIEWER_TOKEN} from '$env/static/private';
import {redirect} from '@sveltejs/kit';
import {handlePreviewMode} from '@sanity/sveltekit/preview';
import {client} from '$lib/sanity/client';

const serverClient = client.withConfig({
  token: SANITY_VIEWER_TOKEN
});

export const handle = handlePreviewMode({
  client: serverClient,
  preview: {redirect}
});