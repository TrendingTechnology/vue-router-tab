(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{293:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("Vue Router Tab 是基于 Vue.js 和 Vue Router 的路由页签组件，用来实现多页签页面的管理。")]),t._v(" "),r("h3",{attrs:{id:"包含的功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#包含的功能"}},[t._v("#")]),t._v(" 包含的功能")]),t._v(" "),r("p",[t._v("✅ 响应路由变化来打开或切换页签")]),t._v(" "),r("p",[t._v("✅ 页签右键菜单操作")]),t._v(" "),r("p",[t._v("✅ "),r("RouterLink",{attrs:{to:"/zh/guide/essentials/rule.html"}},[t._v("页签规则")]),t._v("配置")],1),t._v(" "),r("p",[t._v("✅ 内置页签和页面"),r("RouterLink",{attrs:{to:"/zh/guide/advanced/transition.html"}},[t._v("过渡效果")]),t._v("，支持自定义配置")],1),t._v(" "),r("p",[t._v("✅ "),r("RouterLink",{attrs:{to:"/zh/guide/advanced/slot.html"}},[t._v("自定义页签模板")])],1),t._v(" "),r("p",[t._v("✅ "),r("RouterLink",{attrs:{to:"/zh/guide/advanced/initial-tabs.html"}},[t._v("初始页签数据")]),t._v("，进入页面时默认显示的页签")],1),t._v(" "),r("p",[t._v("✅ "),r("RouterLink",{attrs:{to:"/zh/guide/advanced/restore.html"}},[t._v("页签刷新还原")]),t._v("，在浏览器刷新后恢复页签")],1),t._v(" "),r("p",[t._v("✅ "),r("RouterLink",{attrs:{to:"/zh/guide/essentials/operate.html#重置页签"}},[t._v("页签重置")]),t._v("，重置页签到初始状态")],1),t._v(" "),r("p",[t._v("✅ "),r("RouterLink",{attrs:{to:"/zh/guide/advanced/dynamic-tab-info.html"}},[t._v("动态更新页签信息")]),t._v(" (标题/图标/提示)")],1),t._v(" "),r("p",[t._v("✅ "),r("RouterLink",{attrs:{to:"/zh/guide/essentials/iframe.html"}},[t._v("iframe 页签嵌入外部网站")])],1),t._v(" "),r("p",[t._v("✅ "),r("RouterLink",{attrs:{to:"/zh/guide/advanced/page-leave.html"}},[t._v("页签页面离开 (页签关闭/刷新/替换) 前确认")])],1),t._v(" "),r("p",[t._v("✅ "),r("RouterLink",{attrs:{to:"/zh/guide/essentials/i18n.html"}},[t._v("多语言支持")])],1),t._v(" "),r("h3",{attrs:{id:"主流多页签方案的缺陷"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主流多页签方案的缺陷"}},[t._v("#")]),t._v(" 主流多页签方案的缺陷")]),t._v(" "),r("p",[t._v("目前主流的 "),r("code",[t._v("Vue.js")]),t._v(" 多页签方案（"),r("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/tags-view.html#%E5%BF%AB%E6%8D%B7%E5%AF%BC%E8%88%AA-%E6%A0%87%E7%AD%BE%E6%A0%8F%E5%AF%BC%E8%88%AA",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),r("OutboundLink")],1),t._v("），是基于 "),r("code",[t._v("<keep-alive>")]),t._v(" 和 "),r("code",[t._v("<router-view>")]),t._v(" 组件实现的。由于通过组件的 "),r("code",[t._v("name")]),t._v(" 来控制缓存，该方案存在以下缺陷：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("配置繁杂：需要同时配置 route 和 页面组件的 "),r("code",[t._v("name")]),t._v(" 并保持一致，还要确保 "),r("code",[t._v("name")]),t._v(" 不重复")])]),t._v(" "),r("li",[r("p",[t._v("同一个页面组件难以在不同的路由页签中独立缓存，不利于组件的复用")])]),t._v(" "),r("li",[r("p",[t._v("页面缓存难以清理，需要通过各种钩子来更新页面数据")])]),t._v(" "),r("li",[r("p",[t._v("无法定制页签打开的规则")])])]),t._v(" "),r("p",[t._v("另外还看到一种方案，是弃用 Vue Router，自行实现路由和缓存控制。该方案需要使用其提供的 API 来控制页签打开和切换，对于现有的 Vue Router 项目引入改动量比较大。")]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"vue-router-tab-的优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-tab-的优势"}},[t._v("#")]),t._v(" Vue Router Tab 的优势")]),t._v(" "),r("p",[t._v("针对现存方案的各种问题，Vue Router Tab 定制开发了 "),r("code",[t._v("<router-alive>")]),t._v(" 缓存组件来控制路由页面缓存（感兴趣的朋友可以看看："),r("RouterLink",{attrs:{to:"/zh/guide/solutions.html"}},[t._v("问题与解决方案")]),t._v("）。")],1),t._v(" "),r("p",[t._v("除了解决了其他方案的不足，Vue Router Tab 还拥有以下优势：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Vue Router Tab 是完全响应 Vue Router 路由的。使用熟悉的 "),r("code",[t._v("<router-link>")]),t._v(" 或者 "),r("code",[t._v("router.push")]),t._v(" 等 api 即可方便的打开和切换页签，您可以使用 Vue Router 的完整功能。")])]),t._v(" "),r("li",[r("p",[t._v("Vue Router Tab 只依赖 Vue.js 和 Vue Router 。不会引入额外的依赖。")])]),t._v(" "),r("li",[r("p",[t._v("配置简单，引入组件后通过路由的 "),r("code",[t._v("meta")]),t._v(" 配置页签信息即可")])]),t._v(" "),r("li",[r("p",[t._v("可以方便的定制页签的打开规则，精准控制路由页签")])]),t._v(" "),r("li",[r("p",[t._v("丰富的选项提供你可能需要的额外功能和自定义配置")])]),t._v(" "),r("li",[r("p",[t._v("提供完善的文档说明、代码示例和 Demo 演示")])])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"浏览器支持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器支持"}},[t._v("#")]),t._v(" 浏览器支持")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"IE / Edge",width:"24px",height:"24px"}}),r("OutboundLink")],1),r("br"),t._v("IE / Edge")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"}}),r("OutboundLink")],1),r("br"),t._v("Firefox")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"}}),r("OutboundLink")],1),r("br"),t._v("Chrome")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"}}),r("OutboundLink")],1),r("br"),t._v("Safari")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png",alt:"iOS Safari",width:"24px",height:"24px"}}),r("OutboundLink")],1),r("br"),t._v("iOS Safari")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"}}),r("OutboundLink")],1),r("br"),t._v("Opera")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("IE10, IE11, Edge")]),t._v(" "),r("td",[t._v("last 2 versions")]),t._v(" "),r("td",[t._v("last 2 versions")]),t._v(" "),r("td",[t._v("last 2 versions")]),t._v(" "),r("td",[t._v("last 2 versions")]),t._v(" "),r("td",[t._v("last 2 versions")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);