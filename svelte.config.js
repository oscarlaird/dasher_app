// import adapter from '@sveltejs/adapter-auto';
// import vercel from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			// base: 'https://oscarlaird.github.io/dasher_app'
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
		// adapter: vercel({
		// 	node: '20.x',
		// })
	}
};

export default config;