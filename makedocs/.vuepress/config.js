module.exports = {
	title: 'KeePass Owl',
	description: 'A KeePass 2.x extension for Chrome and Firefox',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
				'ga': 'UA-142593158-1'
      }
    ]
	],
	themeConfig: {
    nav: [
      { text: 'Documentation', link: '/documentation/getstarted' },
      { text: 'Privacy Policy', link: '/privacy-policy' },
      { text: 'Source Code', link: 'https://github.com/Athena-Software/Owl' }
		],
		sidebar: [
      {
        title: 'End-User Documentation',   // required
        path: '/documentation/getstarted',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
					'/documentation/getstarted',
					'/documentation/settings',
        ]
			},
			{
				title: 'Developer Documentation',   // required
        path: '/documentation/developers/about',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
					'/documentation/developers/about'
				]
      },
      {
        title: 'Privacy Policy',
        path: 'privacy-policy',
        collapsable: false,
        sidebarDepth: 1
      }
		]
  },
	base: '/Owl/'
}