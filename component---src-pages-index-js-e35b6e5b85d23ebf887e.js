(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),r=(n(144),n(145),n(146),n(7)),s=n.n(r),c=(n(32),n(33)),a=n.n(c),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={width:0,height:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(a()(n)),n}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.updateWindowDimensions=function(){this.setState({height:window.innerHeight})},n.render=function(){return o.a.createElement("div",{id:this.props.id,className:"fadeInMoveUp",style:Object.assign({},d,{fontSize:"4em",width:"100%",height:this.state.height})},"Welcome!")},e}(i.Component),d={display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Staatliches, cursive"},u=l,m=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={width:0,height:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(a()(n)),n}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.updateWindowDimensions=function(){this.setState({height:window.innerHeight})},n.render=function(){return o.a.createElement("div",{id:this.props.id,style:Object.assign({},h,this.props.style,{width:"100%",height:this.state.height})},this.props.children)},e}(i.Component),h={display:"flex",justifyContent:"center",alignItems:"center"},p=m,f=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(u,{id:"banner"}),o.a.createElement(p,{id:"section 1",style:{backgroundColor:"#222222"}},"Section 1"),o.a.createElement(p,{id:"section 2",style:{backgroundColor:"#333333"}},"Section 2"),o.a.createElement(p,{id:"section 3",style:{backgroundColor:"#444444"}},"Section 3"),o.a.createElement(p,{id:"section 4",style:{backgroundColor:"#555555"}},"Section 4"))},e}(i.Component),w=(n(73),n(143)),S={SCROLL_POSITION_CHANGED:"SCROLL_POSITION_CHANGED"},y=n(155),E=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).state={rotate180:!1,rotateback:!1},e.scrollSectionIds=["banner","section 1","section 2","section 3","section 4"],e.nextSection=null,e.componentDidMount=function(){window.addEventListener("scroll",e.handleScroll)},e.componentWillUnmount=function(){window.removeEventListener("scroll",e.handleScroll)},e.handleScroll=Object(y.debounce)(function(){var t=null;e.scrollSectionIds.forEach(function(n,i){var o=document.getElementById(n);null===t&&o.getBoundingClientRect().top>0&&i<e.scrollSectionIds.length&&(t=o)}),null===t?(t=document.getElementById(e.scrollSectionIds[0]),e.setState({rotate180:!0,rotateback:!1})):e.state.rotate180&&e.setState({rotate180:!1,rotateback:!0}),e.nextSection=t},100),e.onClick=function(){null===e.nextSection&&(e.nextSection=document.getElementById(e.scrollSectionIds[1])),e.nextSection.scrollIntoView({behavior:"smooth"})},e}return s()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:v},o.a.createElement("div",{className:this.state.rotate180?"rotate180":this.state.rotateback?"rotateFrom180To0":null},o.a.createElement("i",{className:"material-icons",style:b,onClick:this.onClick},"keyboard_arrow_down")))},e}(o.a.Component),g=Object(w.b)(function(t){return{scrollPosition:t.scroll.position,maxPosition:t.scroll.maxPosition}},function(t){return{changeScrollPosition:function(e){return t(function(t){return{type:S.SCROLL_POSITION_CHANGED,data:{position:t}}}(e))}}})(E),v={width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",bottom:"1em"},b={cursor:"pointer",userSelect:"none"},C=n(141);var I=Object(C.b)({scroll:function(t,e){switch(void 0===t&&(t={position:0,maxPosition:4}),e.type){case S.SCROLL_POSITION_CHANGED:return Object.assign({},t,{position:e.data.position});default:return t}}}),D=Object(C.c)(I);e.default=function(){return o.a.createElement(w.a,{store:D},o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(g,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e35b6e5b85d23ebf887e.js.map