// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { SanityLocals } from '@sanity/sveltekit';

declare global {
	namespace App {
		interface Locals extends SanityLocals {}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
