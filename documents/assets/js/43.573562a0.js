(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{225:function(t,e,r){"use strict";r.r(e);var a=r(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("为什么要搞这么个东西？本质还是为了提高效率。如何提高效率？减少重复劳作就能提高效率。如何减少重复劳作？代码复用就能减少重复劳作。如何复用？分两种情况：1.足够抽象，直接能用；2.复制粘贴少量修改。需要我们平时工作中大量的经验总结和代码整体，最后形成一种快速开发能力，自成一体，最后的结果是得出一套 [快速开发框架] ，这样你就可以在这个开发领域里有口饭吃的同时，还能腾出更多的时间去钻研。")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("总体所需要整理的内容较多，分为可见部分的UI和不可见部分的功能整理，还有其他一些有助于提高效率的规约，如：代码风格、命名规范、模板代码、架构模式等。如下图所示：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("作为能iOS开发，其实就是将功能可视化，这就是设计要各种UI组件，如果平时积累的各种优秀的可复用的轮子较多，那在开发过程中就信手拈来了，我个人认为一个功能能不能又快又好的完成，取决于你是否有做过类似的功能，也就是否累积过这些轮子。所以建议平时累积一些成套的UI组件库。推荐以下UI库：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://material.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("谷歌的材料设计"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://qmuiteam.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯QMUI"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ibireme/YYKit",target:"_blank",rel:"noopener noreferrer"}},[t._v("YYKit"),r("OutboundLink")],1)])]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("这部分囊括的东西较多，设计到一个完整的App所需要的各种能力，比如网络、缓存处理、工具类、数据库操作、图片加载、二维码处理等等，这里也需要自己平时点滴累积，这对一个依托于某一平台吃饭的程序员来说是必不可少的。这里推荐一些好的轮子：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/topics/ios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github iOS 主题"),r("OutboundLink")],1)])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("iOS开发其实和其他平台的开发都差不多，默认都是MVC模式，架构模式本质上没有好坏，只有熟不熟和合不合适。选择一种架构模式，比如MVVM、MVP，然后通过多方参考+总结的形式整理出一套适合自己的架构方式，并且明确各层职责和代码实现，最后为后面讲的模板代码做准备。在这里推荐MVVM模式，以下推荐一些MVVM的快速开发框架：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/lovemo/MVVMFramework",target:"_blank",rel:"noopener noreferrer"}},[t._v("MVVMFramework"),r("OutboundLink")],1),t._v("，这其中还有很多有益的文章，可以参考一下。")])]),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("把一个个控件或者独立的功能抽取出来，形成一个能独立被依赖使用的组件，这一部分的累积需要较长时间，但是辛苦是值得的，当然如果有第三方可用的便更好，但不是所有的第三方组件都是恰和你意。")]),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("把项目中的功能独立成一个模块，可用单独运行调试，在打包时合并。这部分也是有利于复用的，在企业里，业务不可能是一沉不变，有的甚至是不断尝试中前行，也就是不断试错，这个时候某一个无法抽取成一个通用组件的那部分代码就可以做成一个模块，引用到其他项目中，或者新业务中。")]),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("没有规矩就不成方圆，强有力的规范为代码质量和开发效率保驾护航。对于我们软件开发而言能遇到的规范无非代码风格，命名规范等。")]),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("代码风格的统一有助于编码和模板代码的定制，也有助于自己和他人后期的维护，这个是苹果官方的IDE有现成的格式化工具，采用默认的即可。这里推荐一篇文章可以看一下："),r("a",{attrs:{href:"https://www.jianshu.com/p/1dcf9ac02a9b",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于iOS代码风格管理的两三事"),r("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("这部分苹果官方有规定，严格按照官方的规定即可："),r("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CodingGuidelines/CodingGuidelines.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coding Guidelines"),r("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(14),t._v(" "),r("p",[t._v("模块代码是为了提高效率，当然还有就是统一风格和降低维护成本，统一到什么程度最好呢？不看代码作者，你很难区分代码是谁写的，详情见 "),r("a",{attrs:{href:"http://39.104.183.163:5506/leguang/documents/blob/master/ASmile/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83/Android/Android%E6%A8%A1%E6%9D%BF%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android模板代码规范"),r("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(15),t._v(" "),r("p",[t._v("以上是我个人对于一个1-3年工作经验的程序员的一些要求，相信在通过这些技能养家糊口的同时又不断的吸收内化，最后进化到无招胜有招的境界。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ios技术栈整理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ios技术栈整理","aria-hidden":"true"}},[this._v("#")]),this._v(" iOS技术栈整理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Author：Leguang")]),this._v(" "),e("p",[this._v("E-Mail："),e("a",{attrs:{href:"mailto:langmanleguang@qq.com"}},[this._v("langmanleguang@qq.com")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[this._v("#")]),this._v(" 概要")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"images/overview.png",alt:"overview"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ui部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui部分","aria-hidden":"true"}},[this._v("#")]),this._v(" UI部分")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"非ui部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非ui部分","aria-hidden":"true"}},[this._v("#")]),this._v(" 非UI部分")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架构","aria-hidden":"true"}},[this._v("#")]),this._v(" 架构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 模式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"组件化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件化","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 规范")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"代码风格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码风格","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码风格")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"命名风格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命名风格","aria-hidden":"true"}},[this._v("#")]),this._v(" 命名风格")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"模板代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板代码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);e.default=i.exports}}]);