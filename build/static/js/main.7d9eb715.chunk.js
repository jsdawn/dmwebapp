(this.webpackJsonpdmwebapp=this.webpackJsonpdmwebapp||[]).push([[0],{107:function(e,t,n){e.exports=n(205)},112:function(e,t,n){},113:function(e,t){window._getQueryBySearch=function(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=e.search.substr(1).match(n);return null!=a?unescape(a[2]):null}},187:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),i=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(98),l=n.n(o),u=(n(112),n(113),n(9)),s=n(10),h=n(12),d=n(11),p=n(13),m=n(18),f=n(67),v=n(26);var g=["/404","/auth"],b=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.config,a=e.channel,r=t.pathname,i=n.find((function(e){return e.path===r}));if(i&&i.redirect)return c.a.createElement(v.a,{to:i.redirect});if(!i||!i.component)return c.a.createElement(v.a,{to:"/404"});var o=i.component;return a||g.includes(r)?c.a.createElement(v.b,{exact:!0,path:r,component:o}):c.a.createElement(v.a,{to:{pathname:"/auth",state:{redirect:r}}})}}]),t}(a.Component),E=Object(m.b)((function(e){return{channel:e.channel}}))(b),y=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"404 File not found")}}]),t}(a.Component),O=function(e){return{type:"SET_CHANNEL",value:e}},j=n(51),w=n.n(j);w.a.interceptors.request.use((function(e){var t=localStorage.getItem("channel");return e.headers.Authorization=t?JSON.parse(t).channel_token:"",e}));var k=function(e,t,n){n=n||"GET";var a=""+e;return new Promise("POST"===n?function(e,n){w.a.post(a,t).then((function(t){e(t.data)})).catch((function(e){n(e)}))}:function(e,n){w.a.get(a,{params:t}).then((function(t){e(t.data)})).catch((function(e){n(e)}))})},S=function(e,t,n,a,c){var r={};r.page=a||1,r.size=c||20,r.category_id=e||0,t&&(r.test_type=t),n&&(r.flag=n);return k("http://api.diggmind.com/api/v2/test/list",r)};var _=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"auth...")}},{key:"componentDidMount",value:function(){this.fetchChannel()}},{key:"fetchChannel",value:function(){var e,t=this;k("http://api.diggmind.com/api/v1/wx/channelData",{channel_id:e||1}).then((function(e){var n=e.data?e.data.channel:null;n.channel_key=e.data.channel_key,n.channel_token=e.data.channel_token,n.channel_token_expire=e.data.channel_token_expire,t.props.setChannel(n);var a=t.props.location.state?t.props.location.state.redirect:"/";t.props.history.push({pathname:a})}))}}]),t}(a.Component),I=Object(m.b)((function(e){return{}}),(function(e){return{setChannel:function(t){return e(O(t))}}}))(_);var C=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("p",null,"\u6211\u662f\u9996\u9875"),c.a.createElement("button",{onClick:function(){e.props.history.push("tests")}},"\u524d\u5f80\u5217\u8868 (",this.props.tests.length,")"))}},{key:"componentDidMount",value:function(){}}]),t}(a.Component),x=Object(m.b)((function(e){return{tests:e.tests}}))(C),D=(n(137),n(101)),N=n.n(D),T=(n(176),n(42)),M=n.n(T),L=(n(185),n(71)),z=n.n(L),R=(n(187),n(188),n(102)),A=n.n(R),B=(n(193),n(72)),H=n.n(B),P=n(104),J=n.n(P);var W=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).copyPublicId=function(){if(J()("DiggMind",111)){H.a.success(c.a.createElement("div",null,c.a.createElement("p",null,"\u5df2\u4e3a\u60a8\u590d\u5236 "),c.a.createElement("p",null,"\u3010DiggMind\u3011\u516c\u4f17\u53f7ID"),c.a.createElement("p",null,"\u8bf7\u524d\u5f80\u5fae\u4fe1\u300c\u7c98\u8d34\u300d\u641c\u7d22")),13)}else{H.a.offline(c.a.createElement("div",null,c.a.createElement("p",null,"\u8bf7\u524d\u5f80\u5fae\u4fe1 \u641c\u7d22\uff1a"),c.a.createElement("p",null,"\u516c\u4f17\u53f7\uff1aDiggMind")),3)}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(A.a,{style:{position:"fixed",top:0,left:0,width:"100%",zIndex:100},marqueeProps:{loop:!0,style:{padding:"0 15px 0 8px"}},mode:"link",action:c.a.createElement("span",{style:{color:"#108ee9",cursor:"pointer",fontWeight:600},onClick:this.copyPublicId},"\u53bb\u770b\u770b")},"\u8be5\u6d4b\u8bc4\u6765\u6e90\uff1a\u5fae\u4fe1\u516c\u4f17\u53f7 \u3010DiggMind\u3011\uff0c\u5173\u6ce8\u516c\u4f17\u53f7 \u6316\u6398\u81ea\u6211\uff0c\u8ba4\u8bc6\u81ea\u6211\u3002")}}]),t}(a.Component),F=Object(m.b)((function(e){return{}}))(W),G=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={testId:0,detail:null},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"fetchDetail",value:function(){var e,t=this;this.state.testId<=0||(e=this.state.testId,k("http://api.diggmind.com/api/v2/test/detail",{test_id:e})).then((function(e){t.setState({detail:e.data})}))}},{key:"componentDidMount",value:function(){var e=window._getQueryBySearch(this.props.location,"id");this.setState({testId:e})}},{key:"componentDidUpdate",value:function(e,t){t.testId!==this.state.testId&&this.fetchDetail(this.state.testId)}},{key:"render",value:function(){var e=this.state.detail;return e?c.a.createElement("div",{className:"test-detail has-notice-bar"},c.a.createElement(F,null),c.a.createElement(N.a,{size:"lg"},c.a.createElement(z.a,{size:"lg"}),c.a.createElement(M.a,null,c.a.createElement(M.a.Header,{title:e.title,thumb:e.pic,thumbStyle:{width:"25%",marginRight:"10px"}}),c.a.createElement(M.a.Body,null,c.a.createElement("div",{className:"detail-content",dangerouslySetInnerHTML:{__html:e.content}})),c.a.createElement(M.a.Footer,{content:e.like_num+"\u6536\u85cf",extra:e.tested_num+"\u6d4b\u8fc7"})),c.a.createElement(z.a,{size:"lg"}))):c.a.createElement("div",null,"\u52a0\u8f7d...")}}]),t}(a.Component),q=(n(66),n(50)),Q=n.n(q),$=(n(196),n(73)),U=n.n($),K=(n(203),n(204),function(e){var t=e.row,n=e.handleItem;return c.a.createElement("div",{className:"am-list-item am-list-item-top"},c.a.createElement("div",{className:"am-list-thumb"},c.a.createElement("img",{src:t.pic,alt:""})),c.a.createElement("div",{className:"am-list-line am-list-line-multiple",onClick:function(){n(t.id)}},c.a.createElement("div",{className:"am-list-content"},t.title,c.a.createElement("div",{className:"am-list-brief"},t.brief?t.brief:"\u5ba2\u5b98\u8fdb\u6765\u770b\u770b \u5416")),c.a.createElement("div",{className:"am-list-extra"},t.like_num,"\u6536\u85cf")))});var V=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).onEndReached=function(){!n.state.upLoading&&n.state.hasMore&&n.fetchList()},n.fetchList=function(){n.setState({upLoading:!0,page:n.state.page+1});var e=n.state,t=e.categoryId,a=e.testType,c=e.flag,r=e.page,i=e.size;S(t,a,c,r,i).then((function(e){var t=e.data;n.setState({upLoading:!1,list:n.state.list.concat(t),hasMore:t.length>=i})}))},n.handleItem=function(e){n.props.history.push("/details?id=".concat(e))};var a=new U.a.DataSource({rowHasChanged:function(e,t){return e!==t}});return n.state={dataSource:a,list:[],upLoading:!1,hasMore:!0,categoryId:0,testType:null,flag:null,page:0,size:10},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.list,a=t.dataSource,r=t.hasMore,i=t.size,o=function(){return c.a.createElement("div",{style:{padding:10,textAlign:"center"}},r?c.a.createElement(Q.a,{type:"loading"}):"- \u5b8c -")};return c.a.createElement("div",{className:"tests-page has-notice-bar"},c.a.createElement(F,null),n&&n.length?c.a.createElement(U.a,{dataSource:a.cloneWithRows(n),renderRow:function(t,n,a){return c.a.createElement(K,{row:t,handleItem:e.handleItem})},pageSize:i,renderFooter:function(){return c.a.createElement(o,null)},onEndReached:function(){return e.onEndReached()},onEndReachedThreshold:20,useBodyScroll:!0}):n&&n.rows&&!n.rows.length?c.a.createElement("div",null,c.a.createElement("p",null,"\u6682\u65e0\u6570\u636e")):null)}}]),t}(a.Component),X=[{path:"/404",component:y},{path:"/auth",component:I},{path:"/",redirect:"/tests"},{path:"/home",component:x,auth:!0},{path:"/tests",component:Object(m.b)((function(e){return{}}),(function(e){return{}}))(V)},{path:"/details",component:G}],Y=function(){return c.a.createElement(f.a,null,c.a.createElement(v.d,null,c.a.createElement(E,{config:X})))},Z=n(25),ee=n(106),te=window.localStorage,ne={tests:["\u6d4b\u8bd51","\u6d4b\u8bd52"],channel:te.getItem("channel")||null},ae=Object(Z.c)({tests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.tests,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TESTS":var n=new Array(t.value);return e.concat(n);case"TOGGLE_TESTS":return t.value;default:return e}},channel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.channel,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHANNEL":return te.setItem("channel",JSON.stringify(t.value)),t.value;default:return e}}}),ce=Object(Z.e)(ae,Object(Z.d)(Object(Z.a)(ee.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})),re=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(m.a,{store:ce},c.a.createElement(Y,null))}}]),t}(a.Component);l.a.attach(document.body),i.a.render(c.a.createElement(re,{glo:"gggg"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[107,1,2]]]);
//# sourceMappingURL=main.7d9eb715.chunk.js.map