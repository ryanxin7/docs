(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{439:function(s,n,a){"use strict";a.r(n);var e=a(27),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"keepalived-高可用服务部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived-高可用服务部署"}},[s._v("#")]),s._v(" Keepalived 高可用服务部署")]),s._v(" "),a("p",[s._v("​    Keepalived 软件最早是配合 LVS 负载均衡软件而设计的，用来管理并监控LVS集群系统中各个服务节点的状态，后来又加入了VRRP 协议可以实现高可用的功能。")]),s._v(" "),a("p",[s._v("软件主要是通过 VRRP 协议实现高可用功能的,VRRP 是Virtual Router Redundancy Protocol（虚拟路由器冗余协议）的缩写，VRRP出现的目的就是为了解决静态路由单点故障问题的，它能够保证当个别节点宕机时，整个网络可以不间断地运行")]),s._v(" "),a("h2",{attrs:{id:"一、keepalived-软件工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、keepalived-软件工作原理"}},[s._v("#")]),s._v(" 一、Keepalived 软件工作原理")]),s._v(" "),a("p",[s._v("​")]),s._v(" "),a("p",[s._v("启初 VRRP 的出现是为了解决静态路由的单点故障。VRRP 是用过IP多播的方式实现高可用对之间通信的。工作时主服务器节点发包，备服务器节点接包，当备服务器节点接收不到主服务器节点发的数据包的时候，就启动接管程序接管主服务器节点的资源。备服务器节点可以有多个，通过优先级竞选。优先级数值越大优先级越大。")]),s._v(" "),a("h2",{attrs:{id:"二、keepalived-高可用服务部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、keepalived-高可用服务部署"}},[s._v("#")]),s._v(" 二、Keepalived 高可用服务部署")]),s._v(" "),a("h3",{attrs:{id:"_1-确认反向代理服务是否工作正常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-确认反向代理服务是否工作正常"}},[s._v("#")]),s._v(" 1.确认反向代理服务是否工作正常")]),s._v(" "),a("p",[s._v("在kl1和kl02服务器上测试web服务器是否可以正常（最好有3台反向代理功能的Web服务器）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -H host:www.rxinxin.org "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.10/webserver.html\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -H host:www.rxinxin.org "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.11/webserver.html\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -H host:www.rxinxin.org "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.11/webserver.html\n  systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mariadb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2-在浏览器上测试访问kl1和kl2-域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在浏览器上测试访问kl1和kl2-域名"}},[s._v("#")]),s._v(" 2.在浏览器上测试访问kl1和kl2 域名")]),s._v(" "),a("p",[s._v("解析hosts文件，将域名解析为192.168.10.20，进行测试访问")]),s._v(" "),a("p",[s._v("解析hosts文件，将域名解析为192.168.10.30，进行测试访问")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("测试前同步kl1和kl2的 Nginx 配置文件\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -rp /app/nginx/conf/nginx.conf "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.30:/app/nginx/conf/  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"三、安装-keepalived-服务软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、安装-keepalived-服务软件"}},[s._v("#")]),s._v(" 三、安装 Keepalived 服务软件")]),s._v(" "),a("p",[s._v("第一步：安装软件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y keepalived\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第二步：编写keepalived配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim /etc/keepalived/keepalived.conf\nman keepalived.conf   //查看文件说明信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("配置文件结构：")]),s._v(" "),a("div",{staticClass:"language-bashba line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GLOBAL CONFIGURATION  --- 全局配置\nVRRPD CONFIGURATION   --- vrrp配置\nLVS CONFIGURATION     --- LVS服务相关配置 （可以删掉不用） \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("kl1主 负载均衡器配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("global_defs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    //全局配置\nrouter_id kl1   //定义路由标识信息，相同局域网唯一\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       \nvrrp_instance klg1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  //Vrrp 配置\nstate MASTER    //定义实例中主备状态的角色（MASTER/BACKUP）\ninterface eth0  //设置主备服务器虚拟IP地址放置网卡位置\nvirtual_router_id "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" //虚拟路由ID标识，不同实例不同，主备相同\npriority "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),s._v("   //设置抢占优先级，数值越大越优先\nadvert_int "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  //主备间通讯时间间隔\nauthentication "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  //主备间通过认证建立连接\nauth_type PASS\nauth_pass "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nvirtual_ipaddress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   定义主备服务器之间使用的虚拟IP地址信息\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.60/24 dev eth0 label eth0:1\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n/etc/init.d/keepalived reload  //平滑重启 Keeplived \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("kl2备 负载均衡器配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("global_defs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nrouter_id kl2\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nvrrp_instance klg1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nstate BACKUP\ninterface eth0\nvirtual_router_id "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("\npriority "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nadvert_int "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nauthentication "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nauth_type PASS\nauth_pass "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nvirtual_ipaddress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.60/24 dev eth0 label eth0:1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n/etc/init.d/keepalived reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"四、部署高可用服务时遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、部署高可用服务时遇到的问题"}},[s._v("#")]),s._v(" 四、部署高可用服务时遇到的问题")]),s._v(" "),a("p",[s._v("同时在keepalived高可用集群中，出现了两个虚拟IP地址信息，这种情况就称为脑裂")]),s._v(" "),a("p",[s._v("脑裂情况出现原因：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  1. 心跳线出现问题\n     网卡配置有问题\n     交换设备有问题\n     线缆连接有问题\n  2. 有防火墙软件阻止问题\n  3. virtual_router_id\n     配置数值不正确  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("总之：只要备服务器收不到主服务器发出的组播包，就会成为主服务器，而主服务器资源没有释放，备服务器要篡位就会出现脑裂。")]),s._v(" "),a("h2",{attrs:{id:"五、利用shell脚本实现监控管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、利用shell脚本实现监控管理"}},[s._v("#")]),s._v(" 五、利用shell脚本实现监控管理")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("备设备有 VIP 就是表示不正常\n")])])]),a("ol",[a("li",[s._v("真正实现主备切换")]),s._v(" "),a("li",[s._v("出现脑裂情况了")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#!/bin/bash\ncheck_info=$(ip a|grep -c 192.168.10.60) //定义一个参数为VIP地址 .60\nif [ $check_info -ne 0 ]  //如果等于 0 \nthen\necho "keepalived server error!!!" //打印告警提示 keepalived 服务出现错误\nfi\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"六、nginx反向代理监听虚拟ip地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、nginx反向代理监听虚拟ip地址"}},[s._v("#")]),s._v(" 六、Nginx反向代理监听虚拟IP地址")]),s._v(" "),a("ol",[a("li",[s._v("编写nginx反向代理配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\nlisten      192.168.10.60:80;\nserver_name  www.rxinxin.org;\nroot   html;\nindex  index.html index.htm;\nlocation / {\nproxy_pass http://xinxin;\nproxy_set_header host $host;\nproxy_set_header X-Forwarded-For $remote_addr;\n      }\n}\nserver {\nlisten       192.168.10.60:80;\nserver_name  bbs.rxinxin.org;\nroot   html;\nindex  index.html index.htm;\nlocation / {\nproxy_pass http://xinxin;\nproxy_set_header host $host;\nproxy_set_header X-Forwarded-For $remote_addr;\n     }\n  }\n/application/nginx/sbin/nginx -s stop //Nginx 更改ip 一定要重启\n/application/nginx/sbin/nginx\nnetstat -lntup|grep nginx //查看端口\ntcp        0      0 192.168.10.60:80                 0.0.0.0:*                   LISTEN      53334/nginx  虚拟IP地址\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("br"),s._v(" "),a("p",[s._v("实现监听本地网卡上没有的IP地址")]),s._v(" "),a("p",[a("code",[s._v("echo 'net.ipv4.ip_nonlocal_bind = 1' >>/etc/sysctl.conf 更改内核")])]),s._v(" "),a("p",[a("code",[s._v("sysctl -p")])]),s._v(" "),a("h2",{attrs:{id:"七、将高可用和反向代理服务建立联系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、将高可用和反向代理服务建立联系"}},[s._v("#")]),s._v(" 七、将高可用和反向代理服务建立联系")]),s._v(" "),a("p",[s._v("因为Nginx 反向代理服务处于异常状态下，keepalived服务并没有从主服务器切换到备服务器，所以客户访问网站时反向代理服务一直处于挂了的异常状态导致网站无法正常访问。")]),s._v(" "),a("p",[s._v("实现的目的：Nginx反向代理服务停止，Keepalived服务也停止")]),s._v(" "),a("ol",[a("li",[s._v("编写脚本")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#!/bin/bash\nweb_info=$(ps -ef|grep [n]ginx|wc -l) //当Nginx进程小于2时\nif [ $web_info -lt 2 ]\nthen\n/etc/init.d/keepalived stop   //关闭keepalived 服务\nfi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("2.运行脚本，实现监控nginx服务")]),s._v(" "),a("p",[s._v("编辑keepalived服务配置文件")]),s._v(" "),a("div",{staticClass:"language-vrrp_script check_web { line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#定义一个监控脚本，脚本必须有执行权限\nscript "/server/scripts/check_web.sh"    \n#指定脚本间隔时间\ninterval 2   \n#脚本执行完成，让优先级值和权重值进行运算，从而实现主备切换\t\t\nweight 2                                                                            \n}\ntrack_script {\ncheck_web\n}\t\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("chmod +x check_kls.sh   给予脚本可执行权限")]),s._v(" "),a("h2",{attrs:{id:"八、实现高可用集群架构中双主配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、实现高可用集群架构中双主配置"}},[s._v("#")]),s._v(" 八、实现高可用集群架构中双主配置")]),s._v(" "),a("p",[a("strong",[s._v("互为主备配置配置")])]),s._v(" "),a("p",[s._v("由于企业实际环境，很少等主服务器挂掉才调用备服务器，所以会将Web服务分配给两节点或多个集群并行使用节约成本。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kl1\nvrrp_instance klg1 {\n state MASTER\n interface eth0\n virtual_router_id 31\n priority 150\n advert_int 1\n authentication {\n auth_type PASS\n auth_pass 1111\n    }\nvirtual_ipaddress {\n 192.168.10.60/24 dev eth0 label eth0:1\n    }\n    }\nvrrp_instance klg2 {\n  state BACKUP\n  interface eth0\n  virtual_router_id 32\n  priority 100\n  advert_int 1\n  authentication {\n  auth_type PASS\n  auth_pass 1111\n    }\nvirtual_ipaddress {\n  192.168.10.80/24 dev eth0 label eth0:1\n    }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("  kl2\nvrrp_instance klg1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  state BACKUP\n  interface eth0\n  virtual_router_id "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("\n  priority "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n  advert_int "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  authentication "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  auth_type PASS\n  auth_pass "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  virtual_ipaddress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.60/24 dev eth0 label eth0:1\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  vrrp_instance klg2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    state MASTER\n    interface eth0\n    virtual_router_id "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\n    priority "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),s._v("\n    advert_int "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    authentication "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    auth_type PASS\n    auth_pass "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    virtual_ipaddress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.80/24 dev eth0 label eth0:1\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\t \n\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("最后修改 Nginx 反向代理服务配置文件的监听IP地址信息 完成对 Keepalived 互为主备节点的配置部署。")])])}),[],!1,null,null,null);n.default=t.exports}}]);