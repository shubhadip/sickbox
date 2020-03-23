!function(e){function t(t){for(var r,a,o=t[0],i=t[1],l=t[2],s=0,c=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(S,a)&&S[a]&&c.push(S[a][0]),S[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(t);c.length;)c.shift()();return D.push.apply(D,l||[]),n()}function n(){for(var e,t=0;t<D.length;t++){for(var n=D[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==S[o]&&(r=!1)}r&&(D.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(f[n]=t[n]);0==--v&&0===b&&N()}(e,t),r&&r(e,t)};var a,o=!0,i="dd8ab1e72f8564c018b6",l={},s=[],c=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:_,apply:j,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:l[e]};return a=void 0,t}var d=[],p="idle";function h(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,f,g,v=0,b=0,y={},E={},w={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,h("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return h("idle"),null;E={},y={},w=e.c,g=e.h,h("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in f={},S)x(n);return"prepare"===p&&0===b&&0===v&&N(),t}));var t}function x(e){w[e]?(E[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):y[e]=!0}function N(){h("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return j(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in f)Object.prototype.hasOwnProperty.call(f,n)&&t.push(O(n));e.resolve(t)}}function j(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,o,c;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),i=a.id,l=a.chain;if((o=C[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:l,moduleId:i};for(var s=0;s<o.parents.length;s++){var c=o.parents[s],u=C[c];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:l.concat([c]),moduleId:i,parentId:c};-1===t.indexOf(c)&&(u.hot._acceptedDependencies[i]?(n[c]||(n[c]=[]),d(n[c],[i])):(delete n[c],t.push(c),r.push({chain:l.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],b={},y=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var E in f)if(Object.prototype.hasOwnProperty.call(f,E)){var _;c=O(E);var x=!1,N=!1,j=!1,k="";switch((_=f[E]?u(c):{type:"disposed",moduleId:E}).chain&&(k="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(x=new Error("Aborted because of self decline: "+_.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(x=new Error("Aborted because "+c+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(_),N=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),j=!0;break;default:throw new Error("Unexception type "+_.type)}if(x)return h("abort"),Promise.reject(x);if(N)for(c in b[c]=f[c],d(v,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,c)&&(m[c]||(m[c]=[]),d(m[c],_.outdatedDependencies[c]));j&&(d(v,[_.moduleId]),b[c]=y)}var D,V=[];for(r=0;r<v.length;r++)c=v[r],C[c]&&C[c].hot._selfAccepted&&b[c]!==y&&V.push({module:c,errorHandler:C[c].hot._selfAccepted});h("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete S[e]}(e)}));for(var P,T,R=v.slice();R.length>0;)if(c=R.pop(),o=C[c]){var L={},M=o.hot._disposeHandlers;for(a=0;a<M.length;a++)(n=M[a])(L);for(l[c]=L,o.hot.active=!1,delete C[c],delete m[c],a=0;a<o.children.length;a++){var I=C[o.children[a]];I&&((D=I.parents.indexOf(c))>=0&&I.parents.splice(D,1))}}for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=C[c]))for(T=m[c],a=0;a<T.length;a++)P=T[a],(D=o.children.indexOf(P))>=0&&o.children.splice(D,1);for(c in h("apply"),i=g,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var H=null;for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=C[c])){T=m[c];var U=[];for(r=0;r<T.length;r++)if(P=T[r],n=o.hot._acceptedDependencies[P]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(T)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:T[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<V.length;r++){var F=V[r];c=F.module,s=[c];try{A(c)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||H||(H=n),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||H||(H=e)}}return H?(h("fail"),Promise.reject(H)):(h("idle"),new Promise((function(e){e(v)})))}var C={},k={2:0},S={2:0},D=[];function A(t){if(C[t])return C[t].exports;var n=C[t]={i:t,l:!1,exports:{},hot:u(t),parents:(c=s,s=[],c),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=C[e];if(!t)return A;var n=function(n){return t.hot.active?(C[n]?-1===C[n].parents.indexOf(e)&&C[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&h("prepare"),b++,A.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===p&&(y[e]||x(e),0===b&&0===v&&N())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.e=function(e){var t=[];k[e]?t.push(k[e]):0!==k[e]&&{0:1,1:1}[e]&&t.push(k[e]=new Promise((function(t,n){for(var r=e+".css",a=A.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=(c=o[i]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){var c;if((l=(c=s[i]).getAttribute("data-href"))===r||l===a)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete k[e],u.parentNode.removeChild(u),n(o)},u.href=a,document.getElementsByTagName("head")[0].appendChild(u)})).then((function(){k[e]=0})));var n=S[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=S[e]=[t,r]}));t.push(n[2]=r);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,A.nc&&o.setAttribute("nonce",A.nc),o.src=function(e){return A.p+""+({0:"About",1:"Contact"}[e]||e)+".js"}(e);var i=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(l);var n=S[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}S[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},A.m=e,A.c=C,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/sickbox/",A.oe=function(e){throw console.error(e),e},A.h=function(){return i};var V=window.webpackJsonp=window.webpackJsonp||[],P=V.push.bind(V);V.push=t,V=V.slice();for(var T=0;T<V.length;T++)t(V[T]);var R=P;D.push([48,3]),n()}({16:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(40),a=n.n(r),o=function(){return a.a.get("https://jsonplaceholder.typicode.com/todos/").then((function(e){return e}))}},19:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return validationHandler}));var required=function(e){return null!=e&&(!("object"==typeof e&&!Object.keys(e).length)&&(("string"!=typeof e||""!=e.trim())&&!(e.constructor===Array&&e.length<=0)))},email=function(e){return"string"==typeof e&&""===e||new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@([a-z\d]{1,}[a-z+\d_-]*)(([.][a-z]{2,}){1,})$/i).test(e)},mobile=function(e){return"string"==typeof e&&""===e||new RegExp(/^[6-9][\d]{9}$/).test(e)},integer=function(e){return new RegExp(/^\d+$/g).test(e)},stringToRegex=function(regexString){return/^\/.*\/[gimuy]*$/.test(regexString)?eval(regexString):new RegExp(regexString)},regex=function(e,t){return stringToRegex(e).test(t)},inverse_regex=function(e,t){return!stringToRegex(e).test(t)},maxValue=function(e,t){return!(!isNaN(e)&&!isNaN(t))||!(parseFloat(t)>parseFloat(e))},minLength=function(e,t){return!!t&&t.toString().trim().length>=e},maxLength=function(e,t){return!t||t.toString().length<=e},minValue=function(e,t){return!(!isNaN(e)&&!isNaN(t))||!(parseFloat(t)<parseFloat(e))},panNumber=function(e){return null==e||""===e||/[A-Z]{5}[0-9]{4}[A-Z]{1}/i.test(e)},aadharNumber=function(e){return null==e||""===e||/^\d{12}$/.test(e)},gstIN=function(e){return null==e||""===e||/^[\d]{2}[A-Z]{5}[\d]{4}[A-Z]{1}[A-Z\d]{1}[Zz]{1}[A-Z\d]{1}$/i.test(e)},alphaNumeric=function(e){if(!e)return!0;return!!/^[a-z0-9]+$/i.test(e)},alphaNumericWithSpace=function(e){if(!e)return!0;return!!/^[a-z0-9\s]+$/i.test(e)},multipleOf=function(e,t){return t%e==0},validationRules={integer:integer,email:email,mobile:mobile,required:required,regex:regex,inverse_regex:inverse_regex,maxValue:maxValue,minValue:minValue,minLength:minLength,maxLength:maxLength,pan:panNumber,aadhar:aadharNumber,gstin:gstIN,alphaNumeric:alphaNumeric,alphaNumericWithSpace:alphaNumericWithSpace,multipleOf:multipleOf},ValidationMessages={required:"Please enter this value",email:"Invalid email id",mobile:"Invalid mobile no",integer:"Please enter a valid intege value",regex:"Please enter a valid value",inverse_regex:"Please enter a valid value",maxValue:"Value exceeds the maximum value allowed.",minValue:"Value is less than the minimum value allowed.",maxLength:"Character limit exceeded.",minLength:"Not enough characters entered.",pan:"Expected format AAAAA5555A",aadhar:"Expected format 555555555555",gstin:"Expected format 22AAAAA0000A1Z5",pincode:"Please enter a valid 6 digit PIN code",alphaNumeric:"Please enter only alphabets and numbers.",alphaNumericWithSpace:"Invalid Characters.",multipleOf:"Please enter the value which is multiple of a desired number."},callValidator=function(e,t,n){var r=!0;switch(e){case"regex":case"inverse_regex":r=validationRules[e](t.expression,n);break;case"maxValue":r=validationRules[e](t.maxValue,n);break;case"minValue":r=validationRules[e](t.minValue,n);break;case"customHandler":r=t.customHandler(n);break;case"minLength":r=validationRules[e](t.minLength,n);break;case"maxLength":r=validationRules[e](t.maxLength,n);break;case"multipleOf":r=validationRules[e](t.multiple,n);break;default:validationRules[e]&&(r=validationRules[e](n))}return r},validationHandler=function(e,t){var n={isValid:!0,message:""};if("[object Array]"!==Object.prototype.toString.call(t))throw new Error("validationArray should be an array (In Validations.ts)");for(var r=0;r<t.length;r++){if("string"==typeof t[r])n.isValid=validationRules[t[r]](e),n.message="",0==n.isValid&&(n.message=ValidationMessages[t[r]]);else{if("object"!=typeof t[r])throw new Error("Valdiation rules can only be of type string or object");if(!t[r].hasOwnProperty("name"))throw new Error("Validation object must have name key");n.isValid=callValidator(t[r].name,t[r],e),n.message="",0==n.isValid&&(t[r].hasOwnProperty("message")?n.message=t[r].message:n.message=ValidationMessages[t[r].name])}if(0==n.isValid)break}return n}},22:function(e,t,n){"use strict";(function(e){var r=n(2),a=n(0),o=n(9),i=n(18),l=n(16),s=n(41),c=n(47),u=n(42),d=(n(78),n(77)),p=[{title:"Amazon Movie Rental",desc:"Included in the box is a gift card for one movie rental from Amazon.",altTag:"Amazon Movie Rental",imgUrl:"https://cdn.shopify.com/s/files/1/2225/6647/files/12_660x275.png"},{title:"Thermometer",desc:"You know the old hand on the forehead trick doesn't cut it",altTag:"Thermometer",imgUrl:"https://cdn.shopify.com/s/files/1/2225/6647/files/10_660x275.png"},{title:"Emergen-C",desc:"Immune boosting Vitamin C, B Vitamins, and Electrolytes. It's never too late.",altTag:"Emergen-C",imgUrl:"https://cdn.shopify.com/s/files/1/2225/6647/files/6_660x275.png"},{title:"Hot Cocoa",desc:'Because not all drinks needs to be "healthy" when you are sick.',altTag:"Hot Cocoa",imgUrl:"https://cdn.shopify.com/s/files/1/2225/6647/files/4_660x275.png"},{title:"Saltines + Chicken Noodle Soup",desc:"What's a sick day without some chicken noodle soup and some Saltines in the mix? ",altTag:"Saltines + Chicken Noodle Soup",imgUrl:"https://cdn.shopify.com/s/files/1/2225/6647/files/chickensoupsaltinecombo_660x275.png?v=1511142309"},{title:"Ginger Drops",desc:"Feeling queasy? These ginger candies are a safe and tasty fix.",altTag:"Ginger Drops",imgUrl:"https://cdn.shopify.com/s/files/1/2225/6647/files/11_660x275.png"}],h=["ginger ale","herbal tea","breath mints","tissues","cough drops"],m=function(e){function t(t){var n=e.call(this,t)||this;return n.renderSections=function(){return p.map((function(e){return a.createElement(s.a,{altTag:e.altTag,title:e.title,desc:e.desc,url:e.imgUrl,key:e.altTag})}))},n.state={email:""},n}return Object(r.b)(t,e),t.prototype.componentDidMount=function(){this.props.todos.length||Object(l.a)()},t.prototype.handleClick=function(){},t.prototype.handleChange=function(){},t.prototype.render=function(){var e=this;return a.createElement(a.Fragment,null,a.createElement("section",{className:"hcontainer"},a.createElement("div",{className:"container"},a.createElement("div",{className:"hcontainer-banner"},a.createElement("div",{className:"wrapper"},a.createElement("h1",{className:"heading"},"The Sick Day Survival Kit"),a.createElement("p",{className:"sub-heading"},"Everything you need to make it through a sick day.")),a.createElement("div",{className:""},a.createElement("img",{className:"product-img",alt:"sickbox-product",src:d.default})))),a.createElement("div",{className:"content container"},a.createElement("h1",null,"Whats Inside"),this.renderSections()),a.createElement("div",{className:"title-wrapper container"},a.createElement("hr",null),a.createElement("section",null,a.createElement("p",null,"And So much More"),a.createElement("ul",null,h.map((function(e){return a.createElement("li",{key:e},e)})))),a.createElement("hr",null)),a.createElement("div",{className:"subscribe container"},a.createElement("section",null,a.createElement("h1",null,"Health Tips & Discounts"),a.createElement("p",{className:"desc"},"Subscribe to our newsletter to get discounts and tips to stay healthy."," "),a.createElement("article",null,a.createElement(u.a,{value:this.state.email,onChange:function(){return e.handleChange},placeholder:"your@email.com"}),a.createElement(c.a,{title:"Subscribe",onClick:function(){return e.handleClick}}))))))},t}(a.Component);t.a=Object(o.hot)(e)(Object(i.b)((function(e){return{todos:e.todo.list}}),null)(m))}).call(this,n(13)(e))},26:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),i=n(18),l=n(11),s=n(39),c=Object(l.c)({auth:function(e,t){switch(void 0===e&&(e={}),t.type){case"auth_user":return Object(r.a)(Object(r.a)({},e),{authenticated:!0});case"logout_user":return Object(r.a)(Object(r.a)({},e),{authenticated:!1});case"auth_error":return Object(r.a)(Object(r.a)({},e),{error:t.payload});default:return Object(r.a)({},e)}},todo:function(e,t){switch(void 0===e&&(e={list:[]}),t.type){case"todos":return Object(r.a)(Object(r.a)({},e),{list:Object(r.c)(t.payload)});default:return Object(r.a)({},e)}},common:function(e,t){return void 0===e&&(e={isMobile:!1,isBot:!1}),t.type,Object(r.a)({},e)}}),u=(window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,[s.a]),d=window&&window.__PRELOADED_STATE__||{};delete window.__PRELOADED_STATE__;var p=Object(l.e)(c,d,l.a.apply(void 0,u)),h=(n(56),n(45)),m=n(14),f=n.n(m),g=n(22),v=n(16),b=function(){return o.a.createElement("div",null,"Loading...")},y=f()({loader:function(){return n.e(0).then(n.bind(null,83))},loading:b,modules:["./../components/about/About"],webpack:function(){return[83]}}),E=f()({loader:function(){return n.e(1).then(n.bind(null,84))},loading:b,modules:["./../components/contacts/Contact"],webpack:function(){return[84]}}),w=[{component:g.a,path:"/",exact:!0,loadData:v.a},{component:y,path:"/about"},{component:E,path:"/contact"},{component:g.a,path:"*",loadData:v.a}],O=n(43),_=n(44),x=function(e){function t(t){return e.call(this,t)||this}return Object(r.b)(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement(i.a,{store:p},o.a.createElement("main",null,o.a.createElement(O.a,null),Object(h.a)(w),o.a.createElement(_.a,null))))},t}(a.Component);t.a=x},41:function(e,t,n){"use strict";(function(e){var r=n(0),a=n(9);n(73);t.a=Object(a.hot)(e)((function(e){var t=e.url||"https://cdn.shopify.com/s/files/1/2225/6647/files/12_660x275.png";return r.createElement("section",{className:"homebox-wrapper"},r.createElement("img",{src:t,alt:e.altTag}),r.createElement("article",null,r.createElement("p",{className:"title"},e.title),r.createElement("p",{className:"desc"},e.desc)))}))}).call(this,n(13)(e))},42:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n(10),i=n(19),l=(n(76),function(e){function t(t){var n=e.call(this,t)||this;return n.inputRef=a.createRef(),n.onKeyUp=function(e){n.props.onKeyUp&&n.props.onKeyUp(e)},n.onKeyDown=function(e){n.props.onKeyDown&&n.props.onKeyDown(e),13===e.keyCode&&n.onEnterPress(e)},n.onEnterPress=function(e){n.props.onEnterPress&&n.props.onEnterPress()},n.state={value:t.value,isValid:!0,validationMsg:"",isShowErrors:!1},n.handleChange=n.handleChange.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n}return Object(r.b)(t,e),t.prototype.componentWillReceiveProps=function(e){this.setState({value:e.value})},t.prototype.componentDidMount=function(){this.props.focusOnMount&&this.focus()},t.prototype.handleChange=function(e){var t,n=e.target.value;this.props.capitalize&&n&&(n=n.toUpperCase()),t=Object(i.a)(n,this.props.validations),this.setState({value:n,isValid:t.isValid,validationMsg:t.message,isShowErrors:!1},(function(){this.props.onChange&&this.props.onChange(n,t)}))},t.prototype.handleFocus=function(e){this.setState({isFocused:!0}),this.props.onFocus&&this.props.onFocus()},t.prototype.handleBlur=function(e){var t,n=!1;!0===this.props.isValidateOnBlur&&(n=!0),t=Object(i.a)(this.state.value,this.props.validations),this.setState({isValid:t.isValid,validationMsg:t.message,isShowErrors:n,isFocused:!1},(function(){this.props.onBlur&&this.props.onBlur(this.state.value),this.state.isValid&&this.props.onValid&&this.props.onValid(this.state.value)}))},t.prototype.showValidations=function(){this.setState({isShowErrors:!0})},t.prototype.getValue=function(){return this.state.value},t.prototype.isValid=function(e){var t;void 0===e&&(e=!1);var n=Object(r.c)(this.props.validations);if(this.props.maxLength){var a=this.state.value&&this.state.value.length-this.props.maxLength;n.push({name:"maxLength",message:"Character limit exceeded by "+a+", only "+this.props.maxLength+" characters allowed.",maxLength:this.props.maxLength})}return t=Object(i.a)(this.state.value,n),e&&this.setState({isShowErrors:!0,isValid:t.isValid,validationMsg:t.message}),t.isValid},t.prototype.focus=function(){this.props.disabled||(o.findDOMNode(this.refs.text).focus(),this.handleFocus())},t.prototype.blur=function(){this.props.disabled||(o.findDOMNode(this.refs.text).blur(),this.handleBlur())},t.prototype.render=function(){var e=this.state,t=e.value,n=void 0===t?"":t,r=e.isFocused,o=e.isShowErrors,i=e.isValid,l=this.props,s=l.prefixText,c=l.customClass,u=l.ellipsisOnOverflow,d=l.prefixParentClass,p=(new Date).getTime().toString(),h=""!==n&&null!=n||r||s,m=h?"w--text_input--label-minimized":"w--text_input--label-full",f=!1===i&&!0===o,g="w--text_input "+(r?"is_focused":"")+" "+c+"\n\t\t\t"+(f?"has-error":"")+"\n\t\t\t"+(u?"text_ellipsis":"")+"\n\t\t\t"+d;return a.createElement("div",{className:g},a.createElement("div",null,a.createElement("label",{className:"w--text_input--label "+m,htmlFor:p},h?this.props.label:"")),s?a.createElement("span",{className:"input-prefix"},s):null,a.createElement("input",{id:p,ref:this.inputRef,type:"text",tabIndex:0,value:n,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyUp:this.onKeyUp,onKeyDown:this.onKeyDown,disabled:this.props.disabled,className:this.props.customInputClass?this.props.customInputClass:"",spellCheck:!1,maxLength:this.props.maxLength,readOnly:this.props.readOnly,placeholder:this.props.placeholder}),this.props.description?a.createElement("label",{className:"text-description "+(r?"reveal":"")},h?"":this.props.description):null,a.createElement("hr",null),f?a.createElement("div",{className:"error-label "+this.props.errorClass},this.state.validationMsg):null)},t.defaultProps={value:"",label:"",customClass:"",placeholder:"",isValidateOnBlur:!0,validations:[],errorClass:"",disabled:!1,ellipsisOnOverflow:!1,capitalize:!1,focusOnMount:!1,readOnly:!1},t}(a.Component));t.a=l},43:function(e,t,n){"use strict";(function(e){var r=n(2),a=n(0),o=n(9),i=(n(80),n(79)),l=function(e){function t(t){return e.call(this,t)||this}return Object(r.b)(t,e),t.prototype.componentDidMount=function(){},t.prototype.render=function(){return a.createElement("header",{className:"header-container"},a.createElement("div",{className:"container"},a.createElement("div",{className:"wrapper"},a.createElement("div",{className:"mobile-ham"},a.createElement("span",{className:"icon"})),a.createElement("div",{className:"logo"},a.createElement("span",null,a.createElement("img",{alt:"logo",src:i.default}))),a.createElement("div",{className:"cart"},a.createElement("span",{className:"icon_bag"})))))},t}(a.Component);t.a=Object(o.hot)(e)(l)}).call(this,n(13)(e))},44:function(e,t,n){"use strict";(function(e){var r=n(2),a=n(0),o=n(9),i=(n(81),function(e){function t(t){return e.call(this,t)||this}return Object(r.b)(t,e),t.prototype.componentDidMount=function(){},t.prototype.render=function(){return a.createElement("footer",{className:"footer-container"},a.createElement("section",{className:"container"},a.createElement("section",{className:"container order"},a.createElement("div",null,a.createElement("p",{className:"heads"},"Customer Service"),a.createElement("ul",{className:"values"},a.createElement("li",null,"Contact Us"),a.createElement("li",null,"Track Order"),a.createElement("li",null,"Cancel Order")))),a.createElement("section",{className:"container company"},a.createElement("div",null,a.createElement("p",{className:"heads"},"Company"),a.createElement("ul",{className:"values"},a.createElement("li",null,"About Us"),a.createElement("li",null,"Terms & Conditions"),a.createElement("li",null,"Blog")))),a.createElement("section",{className:"container social"},a.createElement("div",null,a.createElement("p",{className:"heads"},"Connect With Us"),a.createElement("ul",{className:"values"},a.createElement("li",null,a.createElement("i",{className:"icon_facebook"})),a.createElement("li",null,a.createElement("i",{className:"icon_twitter"})),a.createElement("li",null,a.createElement("i",{className:"icon_instagram_new"})),a.createElement("li",null,a.createElement("i",{className:"icon_snapchat"})),a.createElement("li",null,a.createElement("i",{className:"icon_pinterest"})),a.createElement("li",null,a.createElement("i",{className:"icon_apple"})))))))},t}(a.Component));t.a=Object(o.hot)(e)(i)}).call(this,n(13)(e))},47:function(e,t,n){"use strict";var r=n(2),a=n(0),o=function(e){function t(t){return e.call(this,t)||this}return Object(r.b)(t,e),t.prototype.render=function(){var e=this.props.customClass;return a.createElement("div",{className:"w--spinner "+(e||"")},a.createElement("div",{className:"bounce1"}),a.createElement("div",{className:"bounce2"}),a.createElement("div",{className:"bounce3"}))},t}(a.Component),i=(n(75),function(e){function t(t){var n=e.call(this,t)||this;return n.btnRef=a.createRef(),n}return Object(r.b)(t,e),t.prototype.focus=function(){},t.prototype.render=function(){var e=this,t=this.props,n=t.title,r=t.type,i=void 0===r?"":r,l=t.customClass,s=void 0===l?"":l,c=t.disabled,u=void 0!==c&&c,d=t.disableOnLoading,p=t.theme,h="w--button "+s+" "+i+" "+(p?"w--button--"+p:""),m="string"==typeof n?n.toString():"",f="loading"===i,g=u||d&&f;return a.createElement("button",{ref:this.btnRef,disabled:g,title:m,onClick:function(t){return e.props.onClick&&e.props.onClick(t,e.props.customValueAttr)},className:h},f?a.createElement(o,null):n)},t.defaultProps={title:"Submit",disableOnLoading:!1},t}(a.Component));t.a=i},48:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n(10),a=n(25),o=n(14),i=n.n(o),l=n(26),s=e.env.GH__PAGES;console.log(s),i.a.preloadReady().then((function(){r.hydrate(t.createElement(a.a,null,t.createElement(l.a,null)),document.getElementById("app"))}))}.call(this,n(27))},56:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t),t.default=n.p+"15ac2a44bbf5d25a474e0b82d51b3a9d.png"},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t),t.default=n.p+"fda0326fe78eae053ebd0c7005a87c41.png"},80:function(e,t,n){},81:function(e,t,n){}});
//# sourceMappingURL=main.js.map