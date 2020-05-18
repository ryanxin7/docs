(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{369:function(t,e,r){"use strict";r.r(e);var a=r(43),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"linux-基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux-基础"}},[t._v("#")]),t._v(" Linux 基础")]),t._v(" "),r("p",[t._v("Linux，全称GNU/Linux，是一套免费使用和自由传播的"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E7%B1%BBUNIX/9032872",target:"_blank",rel:"noopener noreferrer"}},[t._v("类UNIX"),r("OutboundLink")],1),t._v("操作系统，其内核由"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E6%9E%97%E7%BA%B3%E6%96%AF%C2%B7%E6%9C%AC%E7%BA%B3%E7%AC%AC%E5%85%8B%E7%89%B9%C2%B7%E6%89%98%E7%93%A6%E5%85%B9/1034429",target:"_blank",rel:"noopener noreferrer"}},[t._v("林纳斯·本纳第克特·托瓦兹"),r("OutboundLink")],1),t._v("于1991年第一次释出，它主要受到Minix和Unix思想的启发，是一个基于"),r("a",{attrs:{href:"https://baike.baidu.com/item/POSIX",target:"_blank",rel:"noopener noreferrer"}},[t._v("POSIX"),r("OutboundLink")],1),t._v("和Unix的多用户、"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E5%A4%9A%E4%BB%BB%E5%8A%A1/1011764",target:"_blank",rel:"noopener noreferrer"}},[t._v("多任务"),r("OutboundLink")],1),t._v("、支持"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E5%A4%9A%E7%BA%BF%E7%A8%8B/1190404",target:"_blank",rel:"noopener noreferrer"}},[t._v("多线程"),r("OutboundLink")],1),t._v("和多"),r("a",{attrs:{href:"https://baike.baidu.com/item/CPU",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPU"),r("OutboundLink")],1),t._v("的操作系统。它能运行主要的Unix工具软件、应用程序和网络协议。它支持"),r("a",{attrs:{href:"https://baike.baidu.com/item/32%E4%BD%8D/5812218",target:"_blank",rel:"noopener noreferrer"}},[t._v("32位"),r("OutboundLink")],1),t._v("和"),r("a",{attrs:{href:"https://baike.baidu.com/item/64%E4%BD%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("64位"),r("OutboundLink")],1),t._v("硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。Linux有上百种不同的发行版，如基于社区开发的"),r("a",{attrs:{href:"https://baike.baidu.com/item/debian/748667",target:"_blank",rel:"noopener noreferrer"}},[t._v("debian"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://baike.baidu.com/item/archlinux/10857530",target:"_blank",rel:"noopener noreferrer"}},[t._v("archlinux"),r("OutboundLink")],1),t._v("，和基于商业开发的[Red Hat Enterprise Linux](https://baike.baidu.com/item/Red Hat Enterprise Linux/10770503)、"),r("a",{attrs:{href:"https://baike.baidu.com/item/SUSE/60409",target:"_blank",rel:"noopener noreferrer"}},[t._v("SUSE"),r("OutboundLink")],1),t._v("、[oracle linux](https://baike.baidu.com/item/oracle  linux/6876458)等。")]),t._v(" "),r("h2",{attrs:{id:"一、操作系统的基本知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、操作系统的基本知识"}},[t._v("#")]),t._v(" 一、操作系统的基本知识")]),t._v(" "),r("p",[t._v("一般而言，现代计算机计算机系统是一个复杂的系统，故若程序员需要掌握该系统的每一个细节例如如何通过代码去调用音响等这些事情，那可能不再编写代码了，这种情况会严重影响程序员的开发效率。")]),t._v(" "),r("p",[t._v("并且管理这些部件并加以优化使用，是一件极富挑战性的工作，于是，计算安装了一层软件（系统软件），称为操作系统。它的任务就是为用户程序提供一个更好、更简单、更清晰的计算机模型，并管理刚才提到的所有设备。")]),t._v(" "),r("h3",{attrs:{id:"_1-linux-介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux-介绍"}},[t._v("#")]),t._v(" 1. linux 介绍")]),t._v(" "),r("p",[r("strong",[t._v("Linux")]),t._v(" 是一个多用户多任务的操作系统，也是一款自由软件，拥有良好的用户界面，支持多种处理器架构，移植方便。严格的来讲，Linux 并不算是一个操作系统，只是一个 Linux 系统中的"),r("strong",[t._v("内核")]),t._v("，即计算机软件与硬件通讯之间的平台。")]),t._v(" "),r("h4",{attrs:{id:"_1-1-gun协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-gun协议"}},[t._v("#")]),t._v(" 1.1 GUN协议")]),t._v(" "),r("p",[t._v("Linux的全称是GNU/Linux，这才算是一个真正意义上的Linux系统。")]),t._v(" "),r("p",[t._v("设计原则：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("    1）所有的东西都是文件，所以管理简单\n    2）所有操作系统配置数据都存储在正文文件中\n    3）每个操作系统命令或应用程序很小，只完成单一功能\n    4）避免使用俘获用户的接口，很少交互命令，应用程序由vi编辑器等完成交互\n    5）多个程序串接在一起完成复杂任务\n")])])]),r("h1",{attrs:{id:"二、linux-常用命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、linux-常用命令"}},[t._v("#")]),t._v(" 二、Linux 常用命令")]),t._v(" "),r("p",[t._v("1、"),r("strong",[t._v("pwd")]),t._v(" 返回当前工作目录，直接输入 pwd 即可，后面不带参数。")]),t._v(" "),r("p",[t._v("2、"),r("strong",[t._v("ls")]),t._v(" 即英文单词list的缩写，列出指定目录的所有文件名或者文件夹名（默认为当前工作目录下），")]),t._v(" "),r("p",[t._v("其选项如下：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("-a")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("显示指定目录下所有子目录与文件，包括隐藏文件")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("-i")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("以列表方式显示文件的详细信息")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("-h")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("配合 -i 以人性化方式显示文件大小")])])])]),t._v(" "),r("p",[t._v("3、"),r("strong",[t._v("cd")]),t._v("  切换工作目录；")]),t._v(" "),r("p",[t._v("在使用Unix/Linux的时候，经常需要更换工作目录。cd命令可以帮助用户切换工作目录。Linux所有的目录和文件名大小写敏感cd后面可跟绝对路径，也可以跟相对路径。如果省略目录，则默认切换到当前用户的主目录。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("命令")]),t._v(" "),r("th",[t._v("含义")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("cd")]),t._v(" "),r("td",[t._v("切换到当前用户的主目录，用户登录的使用，默认的目录就是用户的主目录。")])]),t._v(" "),r("tr",[r("td",[t._v("cd ~")]),t._v(" "),r("td",[t._v("切换到当前用户的主目录")])]),t._v(" "),r("tr",[r("td",[t._v("cd .")]),t._v(" "),r("td",[t._v("切换到当前目录")])])])]),t._v(" "),r("p",[t._v("![](C:\\Users\\xinxi\\Desktop\\期末考试 2020春\\1328034-20180704191623328-304845393.png)")]),t._v(" "),r("h2",{attrs:{id:"三、文件权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、文件权限"}},[t._v("#")]),t._v(" 三、文件权限")]),t._v(" "),r("p",[t._v("在Linux操作系统上，有些文件很重要，这些文件只有系统或经过授权的用户才能使用，这样才能保护系统的安全。因为有一些文件是只有部分指定的人才能存取，以免不小心被他人删除或修改，因此文件的安全管理是非常重要的。为了防止未授权用户访问你的 文件，可以在文件和目录上设置权限位。还可以设定文件在创建时所具有的缺省权限。")])])}),[],!1,null,null,null);e.default=n.exports}}]);