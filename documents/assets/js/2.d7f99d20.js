(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{185:function(t,e,s){t.exports=s.p+"assets/img/mqshow.0c7d503d.png"},186:function(t,e,s){t.exports=s.p+"assets/img/preview.c2797566.png"},187:function(t,e,s){t.exports=s.p+"assets/img/program-tree.e743634b.png"},188:function(t,e,s){t.exports=s.p+"assets/img/liandaoMQ.b53ffa5b.png"},189:function(t,e,s){t.exports=s.p+"assets/img/sites.6891bf4a.jpg"},220:function(t,e,s){"use strict";s.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"镰刀数据爬虫系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镰刀数据爬虫系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 镰刀数据爬虫系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Author：Leguang")]),this._v(" "),e("p",[this._v("E-Mail："),e("a",{attrs:{href:"mailto:langmanleguang@qq.com"}},[this._v("langmanleguang@qq.com")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"整体框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#整体框架","aria-hidden":"true"}},[this._v("#")]),this._v(" 整体框架")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(186),alt:"Alt text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"程序设计及运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#程序设计及运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 程序设计及运行")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("程序代码：\n"),e("img",{attrs:{src:s(187),alt:"Alt text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("运行环境：python3.6 centos7\n进程管理：supervisor\n运行：服务器克隆代码后安装python依赖库（虚拟环境同）"),e("code",[this._v("pip3 install -r requirements.txt")]),this._v("\n把子进程配置文件拷贝到supervisor的配置文件路径下，通过supervisor管理程序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用工具及数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用工具及数据库","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用工具及数据库")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"rabbitmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq","aria-hidden":"true"}},[this._v("#")]),this._v(" rabbitmq")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("镰刀mq系统的设计及参数如图：\n"),e("img",{attrs:{src:s(188),alt:"Alt text"}}),this._v("\n|注：红色路径表示爬虫源数据的流通；蓝色路径表示一般items数据的流通；绿色路径表示热点数据的流通。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"supervisor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supervisor","aria-hidden":"true"}},[this._v("#")]),this._v(" supervisor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[program:sickle]\ncommand=/usr/bin/python3 /home/nio/sickle/sickle/run_in.py\ndirectory=/home/nio/sickle/sickle\nautostart = true\nautorestart = true\nstartsecs = 5\npriority = 1\nstopasgroup = true\nkillasgroup = true\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("具体文件路径根据实际拷贝的代码文件路径填写。"),e("strong",[this._v("注意因为爬虫部分要翻墙的原因，国内爬取数据运行run_in.py，国外运行run_out.py。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("supervisor常用命令")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("supervisorctl status：查看所有进程的状态\nsupervisorctl stop sickle：停止sickle\nsupervisorctl start sickle：启动sickle\nsupervisorctl restart sickle: 重启sickle\nsupervisorctl update ：配置文件修改后可以使用该命令加载新的配置\nsupervisorctl reload: 重新启动配置中的所有程序\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"日志logging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志logging","aria-hidden":"true"}},[this._v("#")]),this._v(" 日志logging")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("日志分类")]),this._v("\n调度器日志--scheduler.log\n爬虫日志--sickle.log\n数据日志--items.log\n分析源数据日志--parseItem.log\n分析源数据出错日志--parseError.log\n提取热点数据日志--hotItem.log\n提取热点数据出错日志--hotError.log")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[this._v("#")]),this._v(" MySQL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb","aria-hidden":"true"}},[this._v("#")]),this._v(" MongoDB")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[this._v("#")]),this._v(" redis")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"oss对象存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oss对象存储","aria-hidden":"true"}},[this._v("#")]),this._v(" OSS对象存储")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"翻译工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#翻译工具","aria-hidden":"true"}},[this._v("#")]),this._v(" 翻译工具")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Google")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：http://translate.google.cn/translate_a/single")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("params: {\n        'q': text,\n        'sl': 'auto',\n        'tl': 'zh_Ch',\n        'client': 'gtx',\n        'dt': 't',\n        'dj': 1,\n        'ie': 'UTF-8',\n    }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url: http://api.fanyi.baidu.com/api/trans/vip/translate")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("params: {\n        'q': q,\n        'from': 'auto',\n        'to': 'zh',\n        'appid': appid,\n        'salt': salt,\n        'sign': sign\n    }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"网站爬虫spiders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网站爬虫spiders","aria-hidden":"true"}},[this._v("#")]),this._v(" 网站爬虫spiders")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("镰刀数据来源主要分两类：一是爬虫从各个网站爬取而来，二是人工编辑。暂时网站爬取的数据占有效数据的绝大多数，因各个网站数据来源或分类不同暂时把它们分三大类：快讯文章公告爬虫、社交资讯爬虫和转账监控爬虫。\n"),e("img",{attrs:{src:s(189),alt:"Alt text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"快讯文章公告spiders-api接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快讯文章公告spiders-api接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 快讯文章公告spiders API接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("币世界快讯")]),this._v("\n获取是否有新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：http://m.bishijie.com/api/app/getNewNum/?last_newsid=%s\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{'Host': 'm.bishijie.com',\n          'Connection': 'Keep-Alive',\n          'Referer': 'http://m.bishijie.com/kuaixun?fm=082411 ',\n          'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Mobile Safari/537.36'\n            }\n            \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：http://api.bishijie.com/news/?client=android&size=20\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{'Host': 'api.bishijie.com',\n          'User-Agent': 'okhttp/3.8.1'}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("金色财经快讯")]),this._v("\n获取新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://api.jinse.com/v4/live/list?reading=false&_source=m&limit=10&flag=up&id=%s\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{'User-Agent': 手机端浏览器}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("币响快讯")]),this._v("\n获取新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：http://tui.yingshe.com/live/info\nmethod：post")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{'Host': 'tui.yingshe.com',\n          'Connection': 'Keep-Alive',\n         'User-Agent': 手机端浏览器,\n         'Content-Type': 'application/x-www-form-urlencoded'\n     }\npost data：{\n            'p': '1',\n            'type': '1',\n            'unique': '865166020927318'\n        }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("非小号交易所公告")]),this._v("\n获取新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：http://app.fxh.io/api/news/exchange?direction=before&time=0\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{'User-Agent': 'FeiXiaoHao/1.4.1 (iPhone; iOS 11.4.1; Scale/2.00)',\n          'Host': 'app.fxh.io',\n          'Referer': 'm.feixiaohao.com'\n        }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：detailurl(http://m.feixiaohao.com/notice/3606214.html)\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{\n          'User-Agent': 手机端浏览器,\n          'Host': 'm.feixiaohao.com',\n          'Referer': detailurl\n        }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("币牛牛交易所公告")]),this._v("\n获取新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://api.coinbull.one/pc/web/announcement/list?limit=20\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{\n           `User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',\n           'x-app-info': '2.4.0/offical/web',\n           'origin': 'https://www.coinbull.one'\n        }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://api.finbtc.net/app/announcement/detail?id=%s\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{\n          'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',\n          'x-app-info': '2.4.0/offical/web',\n          'origin': 'https://www.coinbull.one'\n        }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("金色财经文章")]),this._v("\n获取新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://api.jinse.com/v6/information/list?catelogue_key=www&limit=20&information_id=0&flag=down&version=9.9.9&_source=m\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{'User-Agent': 手机端浏览器}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：detailurl(https://m.jinse.com/news/bitcoin/284031.html)\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{'User-Agent': 手机端浏览器}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("巴比特文章")]),this._v("\n获取新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://app.blockmeta.com/news?&num=20\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{\n           'User-Agent': '8btc/1.2.3 (com.8btc.bbs; build:47; iOS 11.4.0) Alamofire/4.7.3',\n           'token': 'd7f48d5c2e9787d3cd6224d427f483453f5c4187',\n           'from': 'ios'\n            }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://app.blockmeta.com/news?id=%s\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{\n          'User-Agent': '8btc/1.2.3 (com.8btc.bbs; build:47; iOS 11.4.0) Alamofire/4.7.3',\n          'token': 'd7f48d5c2e9787d3cd6224d427f483453f5c4187',\n          'from': 'ios'\n            }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("火星财经文章")]),this._v("\n获取新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：http://www.huoxing24.com/info/news/shownews\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{\n           'User-Agent': 手机端浏览器,\n           'sign-param': 'eyJwbGF0Zm9ybSI6ImlvcyIsIm5vbmNlIjoiYXNmYXNmZ2FxIiwidGltZXN0YW1wIjoiMTUzNzE3MDYyNDg0MyIsInNpZyI6IjYxMzczZjIxZjY3YmUwM2RhNjE3NWU2NzE5MTgzOGMyIn0='\n            }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：http://www.huoxing24.com/info/news/getbyid?id=%s\nmethod：post")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{\n          'User-Agent': 手机端浏览器,\n          'sign-param': 'eyJwbGF0Zm9ybSI6ImlvcyIsIm5vbmNlIjoiYXNmYXNmZ2FxIiwidGltZXN0YW1wIjoiMTUzNzE3MDYyNDg0MyIsInNpZyI6IjYxMzczZjIxZjY3YmUwM2RhNjE3NWU2NzE5MTgzOGMyIn0='\n            }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("cointelegraph文章")]),this._v("\n获取新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://api.cointelegraph.com/api/v1/mobile/feed?&language=CN&withHtml=1\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{'User-Agent': 手机端浏览器}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("newsnow文章")]),this._v("\n获取新数据（HTML解析）：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://www.newsnow.co.uk/h/Business+&+Finance/Cryptocurrencies\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{\n         'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Mobile Safari/537.36'\n        }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"社交资讯social"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#社交资讯social","aria-hidden":"true"}},[this._v("#")]),this._v(" 社交资讯social")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("币世界币圈项目")]),this._v("\n获取新数据：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：http://iapi.bishijie.com/project/articleList\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：{\n            'User-Agent': 手机端浏览器}`\nparams: 具体加密步骤看代码\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：http://iapi.bishijie.com/iarticle/detail\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：`{\n            'User-Agent': 手机端浏览器}`\nparams: 具体加密步骤看代码\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("微博")]),this._v("\n获取新数据：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://m.weibo.cn/api/container/getIndex?type=uid&containerid=107603%s\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：`{'User-Agent': 手机端浏览器}`\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://m.weibo.cn/statuses/show?id=%s（bid）\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("headers：`{'User-Agent': 手机端浏览器}`\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"转账监控monitors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#转账监控monitors","aria-hidden":"true"}},[this._v("#")]),this._v(" 转账监控monitors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("from blockchain import blockexplorer\nlatest_block_hash = blockexplorer.get_latest_block().hash  # 获取最近区块哈希\nblock = blockexplorer.get_block(latest_block_hash)  # 获取区块信息\ntransactions = block.transactions # 获取区块交易信息\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("chainext监控")]),this._v("\n获取数据：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("url：https://api.chainext.io/v1/largement_alert\nmethod：get")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据分析提取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据分析提取","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据分析提取")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"newsparse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#newsparse","aria-hidden":"true"}},[this._v("#")]),this._v(" NewsParse")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("快讯")]),t._v("\n内容去重——“币响、币世界、金色财经”关键字检测——标题关键字与tag相关词匹配检测\n"),s("strong",[t._v("文章")]),t._v("\n标题关键字与tag相关词匹配检测——“币响、币世界、金色财经”关键字检测——内容去重\n"),s("strong",[t._v("交易所公告")]),t._v("\n币牛牛爬取的交易所公告直接推送\n非小号爬取的需要检测标题关键字与tag相关词匹配\n"),s("strong",[t._v("转账交易")]),t._v("\nchainext中以太坊交易数量小于19999，比特币交易数量小于1999的不推送，其他的都直接推送\n"),s("strong",[t._v("社交资讯")]),t._v("\n直接推送")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"hotparse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hotparse","aria-hidden":"true"}},[this._v("#")]),this._v(" HotParse")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("策略")]),this._v("\n币牛牛爬取的交易所公告热度4\n其他交易所公告中币种上线类型的数据根据交易所热度设置\n快讯中监控关键词“主网”+“上线”根据币种热度设置\n社交资讯中监控关键词“主网”+“上线”根据币种热度设置\n其他的可在管理后台编辑热点")])}],n=s(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("RabbitMQ是一个消息代理 - 一个消息系统的媒介。它可以为你的应用提供一个通用的消息发送和接收平台，并且保证消息在传输过程中的安全。\n"),r("a",{attrs:{href:"http://rabbitmq.mr-ping.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ 中文文档"),r("OutboundLink")],1),t._v("\npython客户端使用 "),r("a",{attrs:{href:"https://pika.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pika"),r("OutboundLink")],1),t._v("\n系统采用“发布/订阅”模式 —— 分发一个消息给多个消费者。\n图示说明：\n"),r("img",{attrs:{src:s(185),alt:"Alt text"}})]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("supervisor是用Python开发的一个client/server服务，是Linux/Unix系统下的一个进程管理工具。可以很方便的监听、启动、停止、重启一个或多个进程。用supervisor管理的进程，当一个进程意外被杀死，supervisor监听到进程死后，会自动将它重启，很方便的做到进程自动恢复的功能，不再需要自己写shell脚本来控制。\n参考文档："),r("a",{attrs:{href:"http://www.supervisord.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("supervisor 文档"),r("OutboundLink")],1),t._v("\n安装好后在/etc/会生成一个supervisord.conf文件及一个supervisord.d文件目录，supervisord.conf是一些默认配置，代码里面supervisorIni路径下有修改后的supervisord.conf，可拷贝使用。supervisord.d目录用来存放用户自定义的进程配置，本系统暂时开启三个子进程，分别是爬取数据的sickle.ini，分析数据的newsparse.ini和提取热点数据的hotparse.ini。可拷贝至supervisord.d目录下进行管理。\n"),r("strong",[t._v("子进程配置：")])]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),r("p",[t._v("使用"),r("a",{attrs:{href:"https://docs.python.org/3.6/library/logging.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("logging模块"),r("OutboundLink")],1),t._v("。\n日志保存在log路径下，按天保存，只保存最近30天的日志。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),r("p",[t._v("使用"),r("a",{attrs:{href:"https://pymysql.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pymysql模块"),r("OutboundLink")],1),t._v("。\n"),r("strong",[t._v("使用数据")]),t._v("\n标签信息及相关词：sickle_tag 币种分析匹配，分析数据时使用\n爬虫数据源：sickle_spider_source Twitter、微博等数据源，根据此数据爬取社交数据\n币种及交易所热度：sickle_spider_heat 提取热点数据时使用")]),t._v(" "),t._m(18),t._v(" "),r("p",[t._v("使用"),r("a",{attrs:{href:"https://github.com/mongodb/mongo-python-driver",target:"_blank",rel:"noopener noreferrer"}},[t._v("pymongo模块"),r("OutboundLink")],1),t._v("。\nMongoDB作为存储数据的数据库使用，所有新闻资讯都保存在MongoDB中。\nNew_raw存储爬虫爬取的原始数据。\nNew_push存储经过分析后的有效数据。\nNews_hot存储热点数据。\nNews_detail存储有详情页的内容详情数据。")]),t._v(" "),t._m(19),t._v(" "),r("p",[t._v("使用"),r("a",{attrs:{href:"https://github.com/andymccurdy/redis-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("redis模块"),r("OutboundLink")],1),t._v("。\nredis用来保存爬虫爬取网站数据的状态。使得已爬取的数据不会再处理，只获取新的数据。")]),t._v(" "),t._m(20),t._v(" "),r("p",[t._v("使用阿里云"),r("a",{attrs:{href:"https://github.com/aliyun/aliyun-oss-python-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("oss2模块"),r("OutboundLink")],1),t._v("。\nOSS对象存储主要保存一些多媒体资源，爬虫中主要是：1、微博视频；2、Twitter用户头像；3、Twitter图片及视频")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),r("ul",[r("li",[r("a",{attrs:{href:"http://fanyi-api.baidu.com/api/trans/product/apidoc",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("百度翻译平台")]),r("OutboundLink")],1)])]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),r("p",[t._v("获取新数据：")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),r("p",[t._v("获取detail数据：")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),r("p",[t._v("获取detail数据：")]),t._v(" "),t._m(49),t._v(" "),t._m(50),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),r("p",[t._v("获取detail数据：")]),t._v(" "),t._m(54),t._v(" "),t._m(55),t._m(56),t._v(" "),t._m(57),t._v(" "),t._m(58),r("p",[t._v("获取detail数据：")]),t._v(" "),t._m(59),t._v(" "),t._m(60),t._m(61),t._v(" "),t._m(62),t._v(" "),t._m(63),r("p",[t._v("获取detail数据：")]),t._v(" "),t._m(64),t._v(" "),t._m(65),t._m(66),t._v(" "),t._m(67),t._v(" "),t._m(68),t._m(69),t._v(" "),t._m(70),t._v(" "),t._m(71),t._m(72),t._v(" "),t._m(73),t._v(" "),t._m(74),t._v(" "),t._m(75),r("p",[t._v("获取detail数据：")]),t._v(" "),t._m(76),t._v(" "),t._m(77),t._m(78),t._v(" "),t._m(79),t._v(" "),t._m(80),r("p",[t._v("获取detail数据：")]),t._v(" "),t._m(81),t._v(" "),t._m(82),r("p",[r("strong",[t._v("Twitter")]),t._v("\n使用Twitter api获取更新，python库用"),r("a",{attrs:{href:"http://docs.tweepy.org/en/v3.5.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tweepy"),r("OutboundLink")],1),t._v("。\n数据获取方法：注册Twitter开发者，获取开发api密钥和token，新建一个list，把要监控Twitter对象添加到list中（add_list_member），获取该list的更新数据（list_timeline）。")]),t._v(" "),t._m(83),t._v(" "),r("p",[r("strong",[t._v("比特币网络监控")]),t._v("\n使用第三方库"),r("a",{attrs:{href:"https://github.com/blockchain/api-v1-client-python/blob/master/docs/blockexplorer.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("blockchain"),r("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(84),t._v(" "),t._m(85),t._v(" "),t._m(86),t._v(" "),t._m(87),t._v(" "),r("p",[t._v("源数据要经过分析过滤提取得到有效数据再给服务器推送。以下整理了数据的分析推送策略。")]),t._v(" "),t._m(88),t._v(" "),t._m(89),t._v(" "),t._m(90),t._v(" "),t._m(91)])},r,!1,null,null,null);e.default=i.exports}}]);