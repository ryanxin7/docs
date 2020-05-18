module.exports = {
    title: 'Ryan’s Notebook',
    description: '潇洒坦荡，干净纯良',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}],
		['link', {rel: 'stylesheet', href: '/css/style.css'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}

