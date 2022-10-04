import { defineConfig, DefaultTheme } from 'vitepress';

const ogDescription = 'Next Generation Frontend Tooling';
const ogImage = 'https://vitejs.dev/og-image.png';
const ogTitle = 'Vite';
const ogUrl = 'https://vitejs.dev';

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || '';
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev';

const deployType = (() => {
	switch (deployURL) {
		case 'https://main--vite-docs-main.netlify.app':
			return 'main';
		case '':
			return 'local';
		default:
			return 'release';
	}
})();
const additionalTitle = ((): string => {
	switch (deployType) {
		case 'main':
			return ' (main branch)';
		case 'local':
			return ' (local)';
		case 'release':
			return '';
	}
})();
const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
	switch (deployType) {
		case 'main':
		case 'local':
			return [
				{
					text: 'Vite 3 Docs (release)',
					link: 'https://vitejs.dev',
				},
				{
					text: 'Vite 2 Docs',
					link: 'https://v2.vitejs.dev',
				},
			];
		case 'release':
			return [
				{
					text: 'Vite 2 Docs',
					link: 'https://v2.vitejs.dev',
				},
			];
	}
})();

export default defineConfig({
	title: `Better-Vant-Ui${additionalTitle}`,
	description: 'Better-Vant-Ui',

	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:title', content: ogTitle }],
		['meta', { property: 'og:image', content: ogImage }],
		['meta', { property: 'og:url', content: ogUrl }],
		['meta', { property: 'og:description', content: ogDescription }],
		['meta', { name: 'twitter:card', content: 'summary_large_image' }],
		['meta', { name: 'twitter:site', content: '@vite_js' }],
		['meta', { name: 'theme-color', content: '#646cff' }],
	],

	vue: {
		reactivityTransform: true,
	},

	themeConfig: {
		logo: '/logo.svg',

		// editLink: {
		// 	pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
		// 	text: 'Suggest changes to this page',
		// },

		socialLinks: [
			// { icon: 'twitter', link: 'https://twitter.com/vite_js' },
			// { icon: 'discord', link: 'https://chat.vitejs.dev' },
			{ icon: 'github', link: 'https://github.com/vitejs/vite' },
		],

		// algolia: {
		// 	appId: '7H67QR5P0A',
		// 	apiKey: 'deaab78bcdfe96b599497d25acc6460e',
		// 	indexName: 'vitejs',
		// 	searchParameters: {
		// 		facetFilters: ['tags:en'],
		// 	},
		// },

		carbonAds: {
			code: 'CEBIEK3N',
			placement: 'vitejsdev',
		},

		// localeLinks: {
		// 	text: 'English',
		// 	items: [
		// 		{ text: '简体中文', link: 'https://cn.vitejs.dev' },
		// 		{ text: '日本語', link: 'https://ja.vitejs.dev' },
		// 		{ text: 'Español', link: 'https://es.vitejs.dev' },
		// 	],
		// },

		footer: {
			message: `Released under the MIT License. (${commitRef})`,
			copyright: 'Copyright © 2022-present GengHH',
		},

		nav: [
			{
				text: 'Guide',
				link: '/guide/introduce',
				activeMatch: '/guide/introduce',
			},
			// { text: 'Config', link: '/config/', activeMatch: '/config/' },
			{
				text: 'Component',
				link: '/component/button',
				activeMatch: '/component/button',
			},
			{
				text: 'Version',
				items: versionLinks,
			},
		],
		sidebar: {
			'/component/': [
				{
					text: 'Component',
					items: [
						// {
						// 	text: 'introduce',
						// 	link: '/component/',
						// },
						{
							text: 'button',
							link: '/component/button',
						},
						{
							text: 'picker',
							link: '/component/picker',
						},
					],
				},
				// {
				// 	text: 'Guide',
				// 	items: [
				// 		{
				// 			text: 'Why',
				// 			link: '/guide/why',
				// 		},
				// 	],
				// },
				// {
				// 	text: 'APIs',
				// 	items: [
				// 		{
				// 			text: 'Plugin API',
				// 			link: '/component/api-plugin',
				// 		},
				// 	],
				// },
			],
			'/guide/': [
				{
					text: 'Guide',
					items: [
						{
							text: 'introduce',
							link: '/guide/introduce',
						},
						{
							text: 'why',
							link: '/guide/why',
						},
					],
				},
			],
		},
	},
});
