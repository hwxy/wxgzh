(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(n,e,t){"use strict";var o=t(6),i=t(130),a=t.n(i),r=(t(94),t(95)),l=t.n(r),s=t(164),A=t.n(s);t.d(e,"a",function(){return p});var c=a.a.create({baseURL:window.location.origin}),p=(a.a.CancelToken,function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c.post(n,Object(o.a)({},e))});c.interceptors.request.use(function(n){return l.a.loading("loading...",0,function(){},!0),n},function(n){return Promise.reject(n)}),c.interceptors.response.use(function(n){var e=n.data;return l.a.hide(),e},function(n){if(n.response){var e=n.response,t=e.data,o="error: ".concat(JSON.stringify(t)),i=A()(e,"bodyJson.errorMessage");if(i&&(o="".concat(i)),[401].includes(e.status))return l.a.fail("\u65e0\u6743\u9650"),window.location.href="/spa/login",void setTimeout(function(){l.a.hide()},2e3);404===e.status&&(o="\u670d\u52a1\u6682\u4e0d\u53ef\u7528. eror: 404"),500===e.status&&(o="\u670d\u52a1\u6682\u4e0d\u53ef\u7528. eror: 500"),502===e.status&&(o="\u670d\u52a1\u6682\u4e0d\u53ef\u7528. eror: 502"),504===e.status&&(o="\u8bf7\u6c42\u8d85\u65f6. eror: 504"),l.a.fail("\u8bf7\u6c42\u9519\u8bef. error: ".concat(o))}else l.a.fail("\u8bf7\u6c42\u9519\u8bef");throw setTimeout(function(){l.a.hide()},2e3),n})},281:function(n,e,t){var o=t(282);"string"===typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(17)(o,i);o.locals&&(n.exports=o.locals)},282:function(n,e,t){(e=n.exports=t(16)(!0)).push([n.i,".text-ell {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.clearmid {\n  height: 100%;\n  width: 0;\n  display: inline-block;\n  vertical-align: middle; }\n\n.clearfix::after {\n  display: block;\n  height: 0;\n  overflow: hidden;\n  clear: both;\n  content: ''; }\n\n.abs-c {\n  position: absolute !important;\n  z-index: 20;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.mall-login_container__1BmdZ {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: white; }\n\n.mall-login_tip__iZYWA {\n  display: flex;\n  padding: 10px;\n  background: #fdf6ec;\n  align-items: center; }\n\n.mall-login_tip__message__25ttT {\n  font-size: 12px;\n  color: #666666;\n  margin-right: 10px; }\n\n.mall-login_tip__btn__1EEuo {\n  padding: 2px 4px;\n  border-radius: 4px;\n  border: 1px solid #108ee9;\n  color: #108ee9;\n  font-size: 12px; }\n\n.mall-login_login-content__1wCWZ {\n  position: absolute;\n  width: 100%;\n  margin-top: 15vh; }\n\n.mall-login_other-login__3Z85D {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 30vh; }\n\n.mall-login_login-header__2rVxL {\n  display: flex;\n  align-items: center; }\n\n.mall-login_header__tip__1I4-C {\n  width: 200px;\n  text-align: center;\n  color: #999;\n  font-size: 16px; }\n\n.mall-login_header__line__u7WZo {\n  flex: 1 1;\n  height: 1px;\n  background: #ddd; }\n\n.mall-login_login__application__32oS6 {\n  display: flex;\n  justify-content: space-around;\n  font-size: 35px;\n  line-height: 0.7em; }\n\n.mall-login_application__3WzHe {\n  text-align: center;\n  margin-top: 20px; }\n\n.mall-login_application__tip__1yOzj {\n  font-size: 16px; }\n\n.mall-login_qqLoginBtn__12dCq {\n  display: none; }\n","",{version:3,sources:["/Users/huhu/hu/wx/wxgzh/wxgzh/react/src/asset/sass/tool/index.scss","/Users/huhu/hu/wx/wxgzh/wxgzh/react/src/asset/sass/views/mall-login.module.scss"],names:[],mappings:"AACA;EAEI,oBAAmB;EACnB,iBAAgB;EAChB,wBAAuB,EAAA;;AAJ3B;EAQI,aAAY;EACZ,SAAQ;EACR,sBAAqB;EACrB,uBAAsB,EAAA;;AAX1B;EAgBM,eAAc;EACd,UAAS;EACT,iBAAgB;EAChB,YAAW;EACX,YAAW,EAAA;;AApBjB;EAyBI,8BAA6B;EAC7B,YAAW;EACX,UAAS;EACT,SAAQ;EACR,yCAAgC;UAAhC,iCAAgC,EAAA;;AC7BpC;EACE,mBAAkB;EAClB,aAAY;EACZ,YAAW;EACX,kBAAiB,EAAA;;AAEnB;EACE,cAAa;EACb,cAAa;EACb,oBAAmB;EACnB,oBAAmB,EAAA;;AAGrB;EACE,gBAAe;EACf,eAAc;EACd,mBAAkB,EAAA;;AAGpB;EACE,iBAAgB;EAChB,mBAAkB;EAClB,0BAAyB;EACzB,eAAc;EACd,gBAAe,EAAA;;AAGjB;EACE,mBAAkB;EAClB,YAAW;EACX,iBAAgB,EAAA;;AAGlB;EACE,mBAAkB;EAClB,YAAW;EACX,YAAW;EACX,aAAY,EAAA;;AAGd;EACE,cAAa;EACb,oBAAmB,EAAA;;AAGrB;EACE,aAAY;EACZ,mBAAkB;EAClB,YAAW;EACX,gBAAe,EAAA;;AAGjB;EACE,UAAO;EACP,YAAW;EACX,iBAAgB,EAAA;;AAGlB;EACE,cAAa;EACb,8BAA6B;EAC7B,gBAAe;EACf,mBAAkB,EAAA;;AAGpB;EACE,mBAAkB;EAClB,iBAAgB,EAAA;;AAGlB;EACE,gBAAe,EAAA;;AAGjB;EACE,cAAa,EAAA",file:"mall-login.module.scss",sourcesContent:["// \u5de5\u5177\u6837\u5f0f\n:global{\n  .text-ell {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .clearmid {\n    height: 100%;\n    width: 0;\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  .clearfix {\n    &::after{\n      display: block;\n      height: 0;\n      overflow: hidden;\n      clear: both;\n      content: '';\n    }\n  }\n\n  .abs-c{\n    position: absolute !important;\n    z-index: 20;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}","@import '@/asset/sass/_var.scss';@import '@/asset/sass/tool/index.scss';\n.container{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: white;\n}\n.tip {\n  display: flex;\n  padding: 10px;\n  background: #fdf6ec;\n  align-items: center;\n}   \n\n.tip__message{\n  font-size: 12px;\n  color: #666666;\n  margin-right: 10px;\n}\n\n.tip__btn{\n  padding: 2px 4px;\n  border-radius: 4px;\n  border: 1px solid #108ee9;\n  color: #108ee9;\n  font-size: 12px;\n}\n\n.login-content{\n  position: absolute;\n  width: 100%;\n  margin-top: 15vh;\n}\n\n.other-login {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 30vh;\n}\n\n.login-header {  \n  display: flex;\n  align-items: center;\n}\n\n.header__tip {\n  width: 200px;\n  text-align: center;\n  color: #999;\n  font-size: 16px;\n}\n\n.header__line {\n  flex: 1;\n  height: 1px;\n  background: #ddd;\n}\n\n.login__application {\n  display: flex;\n  justify-content: space-around;\n  font-size: 35px;\n  line-height: 0.7em;\n}\n\n.application {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.application__tip {\n  font-size: 16px;\n}\n\n.qqLoginBtn{\n  display: none;\n}"],sourceRoot:""}]),e.locals={container:"mall-login_container__1BmdZ",tip:"mall-login_tip__iZYWA",tip__message:"mall-login_tip__message__25ttT",tipMessage:"mall-login_tip__message__25ttT",tip__btn:"mall-login_tip__btn__1EEuo",tipBtn:"mall-login_tip__btn__1EEuo","login-content":"mall-login_login-content__1wCWZ",loginContent:"mall-login_login-content__1wCWZ","other-login":"mall-login_other-login__3Z85D",otherLogin:"mall-login_other-login__3Z85D","login-header":"mall-login_login-header__2rVxL",loginHeader:"mall-login_login-header__2rVxL",header__tip:"mall-login_header__tip__1I4-C",headerTip:"mall-login_header__tip__1I4-C",header__line:"mall-login_header__line__u7WZo",headerLine:"mall-login_header__line__u7WZo",login__application:"mall-login_login__application__32oS6",loginApplication:"mall-login_login__application__32oS6",application:"mall-login_application__3WzHe",application__tip:"mall-login_application__tip__1yOzj",applicationTip:"mall-login_application__tip__1yOzj",qqLoginBtn:"mall-login_qqLoginBtn__12dCq"}},324:function(n,e,t){var o,i;!function(a){if(void 0===(i="function"===typeof(o=a)?o.call(e,t,e,n):o)||(n.exports=i),!0,n.exports=a(),!!0){var r=window.Cookies,l=window.Cookies=a();l.noConflict=function(){return window.Cookies=r,l}}}(function(){function n(){for(var n=0,e={};n<arguments.length;n++){var t=arguments[n];for(var o in t)e[o]=t[o]}return e}function e(n){return n.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function i(){}function a(e,t,a){if("undefined"!==typeof document){"number"===typeof(a=n({path:"/"},i.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var r=JSON.stringify(t);/^[\{\[]/.test(r)&&(t=r)}catch(A){}t=o.write?o.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var l="";for(var s in a)a[s]&&(l+="; "+s,!0!==a[s]&&(l+="="+a[s].split(";")[0]));return document.cookie=e+"="+t+l}}function r(n,t){if("undefined"!==typeof document){for(var i={},a=document.cookie?document.cookie.split("; "):[],r=0;r<a.length;r++){var l=a[r].split("="),s=l.slice(1).join("=");t||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var A=e(l[0]);if(s=(o.read||o)(s,A)||e(s),t)try{s=JSON.parse(s)}catch(c){}if(i[A]=s,n===A)break}catch(c){}}return n?i[n]:i}}return i.set=a,i.get=function(n){return r(n,!1)},i.getJSON=function(n){return r(n,!0)},i.remove=function(e,t){a(e,"",n(t,{expires:-1}))},i.defaults={},i.withConverter=t,i}(function(){})})},68:function(n,e,t){"use strict";t.r(e);t(114);var o=t(115),i=t.n(o),a=(t(156),t(158)),r=t.n(a),l=(t(160),t(161)),s=t.n(l),A=(t(94),t(95)),c=t.n(A),p=t(76),d=t(78),g=t(80),_=t(79),u=t(81),h=t(0),m=t.n(h),E=t(331),f=t(281),C=t.n(f),B=t(136),x=t(324),w=t.n(x).a,v=function(n){function e(){var n,t;Object(p.a)(this,e);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=Object(g.a)(this,(n=Object(_.a)(e)).call.apply(n,[this].concat(i)))).state={account:"",accountError:!1,password:"",passwordError:!1,inputType:"password"},t.onLogin=function(){var n=t.state,e=n.account,o=n.password,i=t.props.history,a=t.accountVaild(e),r=t.passwordVaild(o);if(!a||!r)return a||t.setState({accountError:!0}),void(r||t.setState({passwordError:!0}));Object(B.a)("/api/login",{phone:e,password:o}).then(function(n){if(n){var t=n.status,o=n.message;2==t&&(w.set("phone",e,{expires:7,path:""}),w.set("sessionToken",n.token,{expires:7,path:""}),i.push("/shopping")),c.a.info(o)}})},t.accountVaild=function(n){return/^1[3456789]\d{9}$/.test(n)},t.onAccountChange=function(n){var e=t.accountVaild(n);t.setState({accountError:!e}),t.setState({account:n})},t.onAccountErrorClick=function(){c.a.info("\u8bf7\u8f93\u5165\u89c4\u8303\u624b\u673a\u53f7")},t.passwordVaild=function(n){return/\d{6,12}$/.test(n)},t.onPassWordChange=function(n){var e=t.passwordVaild(n);t.setState({passwordError:!e}),t.setState({password:n})},t.onPassWordErrorClick=function(){c.a.info("\u8bf7\u8f93\u51656\u523012\u4f4d\u5bc6\u7801")},t.onRegister=function(){t.props.history.push("/register")},t.renderEye=function(){return m.a.createElement("div",{className:"icon-99",onClick:function(){var n=t.state.inputType;t.setState({inputType:"password"==n?"text":"password"})}})},t}return Object(u.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){var n=this.state,e=n.accountError,t=n.passwordError,o=n.inputType;return m.a.createElement("div",{className:C.a.container},m.a.createElement("form",null,m.a.createElement("div",{className:C.a.tip},m.a.createElement("span",{className:C.a.tip__message},"\u6ca1\u6709\u8d26\u53f7\uff1f"),m.a.createElement("span",{className:C.a.tip__btn,onClick:this.onRegister},"\u7533\u8bf7")),m.a.createElement("div",{className:C.a.loginContent},m.a.createElement(s.a,{error:e,onChange:this.onAccountChange,clear:!0,placeholder:"\u624b\u673a\u53f7/\u90ae\u7bb1",onErrorClick:this.onAccountErrorClick},m.a.createElement("span",{className:"fz20"},"\u8d26\u53f7")),m.a.createElement(s.a,{error:t,onChange:this.onPassWordChange,placeholder:"\u8bf7\u8f93\u51656-20\u4f4d\u5bc6\u7801",type:o,maxLength:20,clear:!0,extra:this.renderEye(),onErrorClick:this.onPassWordErrorClick},m.a.createElement("span",{className:"fz20"},"\u5bc6\u7801")),m.a.createElement(i.a,{size:"lg"},m.a.createElement(r.a,{onClick:this.onLogin,type:"primary",size:"large",className:"mt30"},"\u767b\u5f55")))))}}]),e}(m.a.Component);e.default=Object(E.a)(v)}}]);
//# sourceMappingURL=Login.413d1d42.chunk.js.map