const moment = require('moment');
const secret = require("./secret");
moment.locale("zh-cn");

module.exports = {

    title: 'Ryan’s Notebook',
    description: '潇洒坦荡，干净纯良',
    dest: 'docs/.vuepress/dist',
    port: '8080',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}],
		['link', {rel: 'stylesheet', href: '/css/style.css'}]
    ],
  	plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp) => moment(timestamp).format("LLLL")
      },
      '@vssue/vuepress-plugin-vssue': {
       platform: 'github-v4',
       owner: 'ryanxin7',
       repo: 'docs',
       clientId: 'secret.clientId',
       clientSecret: 'secret.clientSecret',
       autoCreateIssue: true          
      },
      '@vuepress/back-to-top': true
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
		lastUpdated: '更新时间', 
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
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



 



