(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){e.exports=n.p+"fd0812fc934e6da360ba454152ea7c7b.png"},140:function(e,t,n){e.exports=n.p+"65ba468be6f374d5f8df041da88086de.png"},141:function(e,t,n){"use strict";var o=n(19),r=n.n(o),a=n(20),i=n.n(a),c=n(21),u=n.n(c),s=n(22),l=n.n(s),p=n(23),d=n.n(p),f=n(0),h=n.n(f),m=(n(123),n(124),n(139)),v=n.n(m),E=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),u()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"header-logo"},h.a.createElement("img",{src:v.a}),h.a.createElement("span",null,"McKonalds"))}}]),t}(h.a.Component),_=n(156),y=(n(125),function(e){function t(){return i()(this,t),l()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),u()(t,[{key:"render",value:function(){return h.a.createElement("ul",{className:"header-menu"},h.a.createElement(_.a,{to:"/"},h.a.createElement("li",null,"首页")),h.a.createElement(_.a,{to:"/work"},h.a.createElement("li",null,"工作")),h.a.createElement(_.a,{to:"/like"},h.a.createElement("li",null,"好玩")))}}]),t}(h.a.Component)),b=(n(126),n(140)),g=n.n(b),w=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),u()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"about-me"},h.a.createElement(_.a,{to:"/me"},h.a.createElement("img",{className:"about-me-png",alt:"关于我",src:g.a})))}}]),t}(h.a.Component);function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=void 0,r=void 0,a=void 0,i=function(){return setTimeout(function(){o=null,n||(e.apply(r,a),r=a=null)},t)};return function(){if(o)clearTimeout(o),o=i();else{o=i();for(var t=arguments.length,c=Array(t),u=0;u<t;u++)c[u]=arguments[u];n?e.apply(this,c):(r=this,a=c)}}}var x=function(e){function t(e){i()(this,t);var n=l()(this,(t.__proto__||r()(t)).call(this,e));return n.MouseEnter=k(function(e){n.setState({top:!1})},200),n.MouseLeave=k(function(e){n.state.scroll||n.setState({top:!0})},200),n.state={top:!0,scroll:!1,fixed:e.fixed},n.debounceScroll=k(function(){n.setState({top:!1})},40),n.debounceNoScroll=k(function(){n.setState({top:!0})},40),n}return d()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){(document.documentElement.scrollTop||document.body.scrollTop)>100?(e.setState({scroll:!0}),e.debounceScroll()):(e.setState({scroll:!1}),e.debounceNoScroll())}}},{key:"render",value:function(){var e=this.state,t=e.top,n=e.fixed;return h.a.createElement("div",{className:"header "+(!t||n?"header-active":""),onMouseEnter:this.MouseEnter.bind(this),onMouseLeave:this.MouseLeave.bind(this)},h.a.createElement(E,null),h.a.createElement(y,null),!t||n?h.a.createElement(w,null):"")}}]),t}(h.a.Component),T=(n(127),function(e){function t(){return i()(this,t),l()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),u()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"footer"},"我是一个可爱的尾部")}}]),t}(h.a.Component)),N=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),u()(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return h.a.createElement(f.Fragment,null,h.a.createElement(x,{fixed:this.props.fixed}),this.props.children,this.props.noFoot?"":h.a.createElement(T,null))}}]),t}(h.a.Component);t.a=N},143:function(e,t,n){"use strict";var o=n(151),r=n.n(o),a=n(152),i=n.n(a),c=n(153),u=n.n(c),s=n(154),l=n.n(s),p="application/json; charset=UTF-8",d="POST",f=function(e){return e.startsWith("http://")||e.startsWith("https://"),e},h=function(){return{Accept:p,"Content-Type":p}},m=function(e){return e.then(function(e){return function(e){if(u()(200,e.status))return e.json();throw new Error(e.status)}(e)}).catch(function(e){throw new Error("服务器发生未知错误")})};t.a={get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h();if(t){var o=[];i()(t).forEach(function(e){return o.push(e+"="+t[e])}),-1===e.search(/\?/)?e+="?"+o.join("&"):e+="&"+o.join("&")}var r=l()(f(e),{method:"GET",headers:n});return m(r)},postForm:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h(),o=l()(f(e),{method:d,headers:n,body:t});return m(o)},postJSON:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h(),o=l()(f(e),{method:d,headers:n,body:r()(t)});return m(o)}}},186:function(e,t,n){"use strict";n.r(t);var o=n(19),r=n.n(o),a=n(20),i=n.n(a),c=n(21),u=n.n(c),s=n(22),l=n.n(s),p=n(23),d=n.n(p),f=n(0),h=n.n(f),m=n(141),v=n(31),E=(n(128),n(144)),_=n.n(E),y=n(145),b=n.n(y),g=n(143),w=function(e){return{type:"LIST_DATA",payload:e}},k=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.props.getTodoList()}},{key:"render",value:function(){var e=this.props.todo;return e.login,e.name,console.log(this.props.todo,"this.props.todo"),h.a.createElement(m.a,null,h.a.createElement("div",{className:"content"}),h.a.createElement("div",{className:"content-index"},"这是第一屏"),h.a.createElement("div",{className:"content-index content-index-s"},"这是第二屏"),h.a.createElement("div",{className:"content-index content-index-t"},"这是第三屏"))}}]),t}(h.a.Component);t.default=Object(v.b)(function(e){return{todo:e.todoListReducer.listData}},{getTodoList:function(e,t){return function(){var e=b()(_.a.mark(function e(n){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://api.github.com/users/hanfengmi").then(function(e){n(w(e))});case 3:t(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}},e,void 0,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()}})(k)}}]);