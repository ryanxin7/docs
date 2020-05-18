const moment = require('moment');

moment.locale("zh-cn");

module.exports = {

    title: 'Ryan’s Notebook',
    description: '潇洒坦荡，干净纯良',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}],
		['link', {rel: 'stylesheet', href: '/css/style.css'}]
    ],
	plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {

          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
		lastUpdated: '更新时间', 
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


 



