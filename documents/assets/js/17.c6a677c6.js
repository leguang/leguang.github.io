(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{208:function(t,a,v){"use strict";v.r(a);var _=v(0),e=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"mol交易系统接口文档"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mol交易系统接口文档","aria-hidden":"true"}},[t._v("#")]),t._v(" MOL交易系统接口文档")]),t._v(" "),v("blockquote",[v("p",[t._v("Author：Leguang")]),t._v(" "),v("p",[t._v("E-Mail："),v("a",{attrs:{href:"mailto:langmanleguang@qq.com"}},[t._v("langmanleguang@qq.com")])])]),t._v(" "),v("h2",{attrs:{id:"业务简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#业务简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 业务简介")]),t._v(" "),v("p",[t._v("本模块设计成一个通用的、独立的模块，以后所有业务中与链进行交互都使用该模块完成，用户提现实际上是我们从链上某个地址打币给用户的地址，充值实际上是用户的地址打币到链上指定账户。")]),t._v(" "),v("h3",{attrs:{id:"项目url预览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目url预览","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目url预览")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.imgur.com/PHCHX6N.png",alt:""}})]),t._v(" "),v("p",[t._v("站在数据的角度，若想满足各大模块的功能需求，可以将接口分成如下几类：")]),t._v(" "),v("blockquote",[v("p",[t._v("base url：https://api.xxx.com/path/")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("分类")]),t._v(" "),v("th",[t._v("接口地址")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("充值chain/deposit")]),t._v(" "),v("td",[t._v("https://api.xxx.com/path/v1/c")]),t._v(" "),v("td",[t._v("amount、fromAccount、toAccount、currency、block")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("提现chain/withdraw")]),t._v(" "),v("td",[t._v("https://api.xxx.com/path/v1/chain/withdraw")]),t._v(" "),v("td",[t._v("currency、amount")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("MOL（积分）记录chain/records")]),t._v(" "),v("td",[t._v("https://api.xxx.com/path/v1/chain/records")]),t._v(" "),v("td",[t._v("type")])])])]),t._v(" "),v("hr"),t._v(" "),v("h4",{attrs:{id:"充值chain-deposit（从mol链到mol积分）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#充值chain-deposit（从mol链到mol积分）","aria-hidden":"true"}},[t._v("#")]),t._v(" 充值chain/deposit（从MOL链到MOL积分）")]),t._v(" "),v("p",[v("s",[t._v("该接口用于告诉后台用户已经打币给官方指定地址了，让官方去确认，后台就可以利用hash这个参数结合blocks_info这个action去查询后对比。")])]),t._v(" "),v("p",[t._v("之后大家一起商议后，认为该方案不合理，有双花风险，因为看了nano的链的代码逻辑：双花的块都会放到链上，但是最后有一个会失效，然后从链上删除。因为考虑到在短时间内是无法通过hash块来确定一定是支付成功的，所以还是得后台收账后，并且5分钟内无误则可认为是真实转账。因此相应界面也得更改：客户端存入成功界面得提示5分钟后确认等字样。")]),t._v(" "),v("blockquote",[v("p",[t._v("地址：https://api.xxx.com/path/v1/chain/deposit")])]),t._v(" "),v("h5",{attrs:{id:"请求头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求头","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("POST /path/v1/chain/deposit\nAccept: application/json\nContent-Type: application/json;charset=UTF-8\nToken: token_G34G34G34G34G35G5\nAppVersion: 1.1.1\nPlatform: Android\n")])])]),v("h5",{attrs:{id:"参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n    "amount": "50",\n    "fromAccount": "mol_114x611xyehnj767bmxia1d67m3kqrtukxtdxkcptf4mzj8sea4ru779i78h",\n    "toAccount": "mol_34qdk454gaxhic3w3a9i7pzn3hhkhxpaqgqg7gp3syupyf5gp9mmdsqg5zca",\n    "currency": "MOL",\n    "block": "{\\"type\\":\\"state\\",\\"account\\":\\"mol_15tcgzxmwg1d7rs91gc58um8y5jpz85g7iikdemnzimyrm5w6rw7krpeuxec\\",\\"previous\\":\\"65FA210BF9578C8CA0C1F5BECAF2EAE70C2D6B8CFDC839F897E11C6DB6CAE8F3\\",\\"representative\\":\\"mol_3ytentj15q44he4c778317r868wdttwufp96fsccjux4tuqc59ojgrwn6d4w\\",\\"balance\\":\\"1731194500000000000000000000000\\",\\"link\\":\\"0F4A77FB3E380B2E3270394336E66F0E36F986E2C2125B274FC27EC4C7C26385\\",\\"signature\\":\\"7310F2E1C0BB32F668796C92CDD564CE88214F6C065615EC821CEE1CFA124A1CFBEE4F0584FD488CCF8AC0AC1EA0E5574FA4D137CB0E2A433956C7839EEB0B04\\",\\"work\\":\\"5bdbe26964c621d0\\"}"\n}\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("params")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("amount")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("充值总额")])]),t._v(" "),v("tr",[v("td",[t._v("from")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("用户的打款地址")])]),t._v(" "),v("tr",[v("td",[t._v("to")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("官方的收款地址")])]),t._v(" "),v("tr",[v("td",[t._v("currency")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("单位或币种，暂时固定填MOL")])]),t._v(" "),v("tr",[v("td",[t._v("block")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("就是平时转账时，使用process这个action来处理block块时所需要的参数")])])])]),t._v(" "),v("h5",{attrs:{id:"响应头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应头","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应头")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("HTTP/1.1 200 OK\nContent-Type:application/json; charset=utf-8\n")])])]),v("h5",{attrs:{id:"响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n    "message": "居然被你充值成功了",\n    "code": 200\n}\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("uid")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("该条数据的唯一ID")])])])]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"提现chain-withdraw（从mol积分币到mol链）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提现chain-withdraw（从mol积分币到mol链）","aria-hidden":"true"}},[t._v("#")]),t._v(" 提现chain/withdraw（从MOL积分币到MOL链）")]),t._v(" "),v("p",[t._v("这个接口可以被设计成一个通用的、独立的模块，以后所有业务中的撒给用户的币都以积分形式表达，用该接口让用户提现，从MOL积分币换成MOL链上的真实币。")]),t._v(" "),v("blockquote",[v("p",[t._v("地址：https://api.xxx.com/path/v1/chain/withdraw")])]),t._v(" "),v("h5",{attrs:{id:"请求头-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求头-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("POST /path/v1/chain/withdraw\nAccept: application/json\nContent-Type: application/json;charset=UTF-8\nToken: token_G34G34G34G34G35G5\nAppVersion: 1.1.1\nPlatform: Android\n")])])]),v("h5",{attrs:{id:"参数-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n    "amount": "50",\n    "currency": "MOL"\n}\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("params")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("是否必须")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("amount")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("提现额度，允许从积分币到MOL链上的币提现多少通过该参数控制，非raw类型，不传表示默认，默认表示全部提现")])]),t._v(" "),v("tr",[v("td",[t._v("currency")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("默认传MOL（大写）")])])])]),t._v(" "),v("h5",{attrs:{id:"响应头-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应头-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应头")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("HTTP/1.1 200 OK\nContent-Type:application/json; charset=utf-8\nCache-Control: no-store\nPragma: no-cache\n")])])]),v("h5",{attrs:{id:"响应-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n    "message": "居然被你提现成功了",\n    "code": 200,\n    "data": {\n        "uid": "235235235"\n    }\n}\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("是否必须")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("message")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("code")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("data.uid")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("该次提现生成的提现记录uid，可通过这个查询到该条提现记录")])])])]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"mol（积分形式）提现记录chain-records"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mol（积分形式）提现记录chain-records","aria-hidden":"true"}},[t._v("#")]),t._v(" MOL（积分形式）提现记录chain/records")]),t._v(" "),v("p",[t._v("这个接口可以被设计成一个通用的、独立的模块，以后所有业务中的撒给用户的币都以积分形式表达，用该接口查询提现记录。")]),t._v(" "),v("blockquote",[v("p",[t._v("地址：https://api.xxx.com/path/v1/chain/records")])]),t._v(" "),v("h5",{attrs:{id:"请求头-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求头-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("GET /path/v1/chain/records\nAccept: application/json\nContent-Type: application/json;charset=UTF-8\nToken: token_G34G34G34G34G35G5\nAppVersion: 1.1.1\nPlatform: Android\n")])])]),v("h5",{attrs:{id:"参数-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),v("p",[t._v("?type=deposit&keyword=热点&sort=des&page=0&pageSize=20")]),t._v(" "),v("blockquote",[v("p",[t._v("此处type这个参数，本来想定义值为send和receive，但是发现这两个词意表达是具有相对方向性的，并无法表达到底是固定哪一方给哪一方打款，因此改用deposit和withdraw。")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("params")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("是否必须")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("keyword")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("sort")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("page")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("pageSize")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("用于区分记录类型，不传表示默认，默认表示获取全部类型的记录，值为deposit表示充值记录（用户地址打款给官方指定地址），值为withdraw表示提现记录（官方指定地址打款给用户地址）。")])])])]),t._v(" "),v("h5",{attrs:{id:"响应头-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应头-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应头")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("HTTP/1.1 200 OK\nContent-Type:application/json; charset=utf-8\nCache-Control: no-store\nPragma: no-cache\n")])])]),v("h5",{attrs:{id:"响应-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n    "message": "居然被你查询成功了",\n    "code": 200,\n    "page": 0,\n    "pageSize": 20,\n    "first": "https://...",\n    "next": "https://...",\n    "previous": "https://...",\n    "last": "https://...",\n    "data": [\n        {\n            "uid": "235235235",\n            "content": "提现到钱包",\n            "amount": "+50",\n            "image": "http://a3.peoplecdn.cn/fbcba40035ae5f2ad90c19abe58560a2.jpg",\n            "currency": "MOL",\n            "time": "2018-04-23 17:38:44",\n            "state": "申请中",\n            "address": "mol_15tcgzxmwg1d7rs91gc58um8y5jpz85g7iikdemnzimyrm5w6rw7krpeuxec",\n            "type": "applying"\n        },\n        {\n            "uid": "235235235",\n            "content": "提现到钱包",\n            "amount": "+50",\n            "image": "http://a3.peoplecdn.cn/fbcba40035ae5f2ad90c19abe58560a2.jpg",\n            "currency": "MOL",\n            "time": "2018-04-23 17:38:44",\n            "state": "已到账",\n            "address": "mol_15tcgzxmwg1d7rs91gc58um8y5jpz85g7iikdemnzimyrm5w6rw7krpeuxec",\n            "type": "received"\n        }\n    ]\n}\n')])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("是否必须")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("message")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("code")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("page")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("pageSize")]),t._v(" "),v("td",[t._v("int")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("first")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("next")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("previous")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("last")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("同上")])]),t._v(" "),v("tr",[v("td",[t._v("data")]),t._v(" "),v("td",[t._v("object")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("当前接口的具体数据由该JSON对象承载")])]),t._v(" "),v("tr",[v("td",[t._v("data.uid")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("提现记录主键")])]),t._v(" "),v("tr",[v("td",[t._v("data.content")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("提现记录标题名称")])]),t._v(" "),v("tr",[v("td",[t._v("data.amount")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("提现记录总额")])]),t._v(" "),v("tr",[v("td",[t._v("data.image")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("提现记录图标，可以不用这个")])]),t._v(" "),v("tr",[v("td",[t._v("data.currency")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("提现记录币种标识")])]),t._v(" "),v("tr",[v("td",[t._v("data.time")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("提现记录时间")])]),t._v(" "),v("tr",[v("td",[t._v("data.state")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("提现记录状态，数据库改积分数值几乎的秒级的，而从积分到链上，会有一段确认时间，因此需要设计一个状态来给用户展示，两种状态：申请中，已到账")])]),t._v(" "),v("tr",[v("td",[t._v("data.address")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("提现地址（提现的收款地址）")])]),t._v(" "),v("tr",[v("td",[t._v("data.type")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("提现记录状态判断值，根据这个参数来判断当前状态，值为applying表示申请中，值为received表示已到账")])])])]),t._v(" "),v("hr")])}],!1,null,null,null);a.default=e.exports}}]);