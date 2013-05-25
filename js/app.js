(function(){"use strict";var t="undefined"!=typeof window?window:global;if(typeof t.require!="function"){var e={},n={},r=function(t,e){return{}.hasOwnProperty.call(t,e)},o=function(t,e){var n,r,o=[];n=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var i=0,a=n.length;a>i;i++)r=n[i],".."===r?o.pop():"."!==r&&""!==r&&o.push(r);return o.join("/")},i=function(t){return t.split("/").slice(0,-1).join("/")},a=function(e){return function(n){var r=i(e),a=o(r,n);return t.require(a)}},l=function(t,e){var r={id:t,exports:{}};e(r.exports,a(t),r);var o=n[t]=r.exports;return o},s=function(t){var i=o(t,".");if(r(n,i))return n[i];if(r(e,i))return l(i,e[i]);var a=o(i,"./index");if(r(n,a))return n[a];if(r(e,a))return l(a,e[a]);throw Error('Cannot find module "'+t+'"')},c=function(t,n){if("object"==typeof t)for(var o in t)r(t,o)&&(e[o]=t[o]);else e[t]=n};t.require=s,t.require.define=c,t.require.register=c,t.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","hub.g0v.tw","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("people",{url:"/people",templateUrl:"/partials/people.html",controller:"PeopleCtrl"}).state("tag",{url:"/tag/{tag}",templateUrl:"/partials/tag.html",controller:"TagControl"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/g0v-hackath3n"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams"].concat(function(t,e,n){return t.$state=e,t.$stateParam=n}))}.call(this),function(){function t(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}function e(t,e){for(var n=-1,r=e.length>>>0;++n<r;)if(t===e[n]&&n in e)return!0;return!1}var n=[].slice,r="".replace;angular.module("app.controllers",["ui.state"]).controller({AppCtrl:["$scope","$location","$rootScope","$timeout"].concat(function(t,e,n,r){return t.$location=e,t.$watch("$location.path()",function(e){return e||(e="/"),t.activeNavId=e,t}),t.getClass=function(e){return t.activeNavId.substring(0,e.length===e)?"active":""},r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$state","HackFolder"].concat(function(e,n,r){var o;return t(e,{hasViewMode:function(t){return t.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,open:function(t){return window.open(t.url,t.id),!1},activate:r.activate,HackFolder:r,iframeCallback:function(t){return function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),t.noiframe="fail"===n?!0:!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return r.getIndex(t,!0,function(){})}}),e.$watch("hackId",function(t){return r.getIndex(t,!1,function(){var t,o;return e.$watch("docId",function(t){return t?r.activate(t):void 0}),!e.docId&&(t=(o=r.docs[0])!=null?o.id:void 0)?n.transitionTo("hack.doc",{docId:t,hackId:e.hackId}):void 0})}),e.hackId=(o=n.params.hackId)?o:"g0v-hackath3n",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0})})}).directive("resize",["$window"].concat(function(t){return function(e,n){var r;return r=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,r){var o,i,a;return o=t(r.ngxIframe)(e),i=function(t,e){var n;return n=!function(){try{return t.location=="about:blank"}catch(e){}}(),e&&$.browser.mozilla?o("unsure"):o(n?"ok":"fail")},$(n).load(function(){return clearTimeout(a),i(this.contentWindow,!0)}),a=setTimeout(function(){return i(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,r){var o;return o=t(r.ngxClickMeta),$(n).click(function(t){return t.metaKey&&!o(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).factory({HackFolder:["$http"].concat(function(o){var i,a,l,s,c;return i={},a=[],l=[],c={iframes:i,docs:a,tree:l,activate:function(t,n){function r(t){return t.id}var o,s,c,u,p,d,f,h,g,m,v;for(null==n&&(n=!1),s=function(){var e,n,r,i=[];for(e=0,r=(n=a).length;r>e;++e)o=n[e],o.id===t&&i.push(o);return i}()[0],c=s.type,u=0,d=(p=l).length;d>u;++u)f=p[u],(h=null!=f?(g=f.children)!=null?g.map(r):void 0:void 0)&&e(t,h)&&(f.expand=!0);return m=n?"edit":"view",v=function(){var e;switch(e=[c],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+m+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+m;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+m;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),s.hashtag&&(v+=s.hashtag),(h=i[t])?(h.src=v,h.mode=m,h):i[t]={src:v,doc:s,mode:m}},getIndex:function(e,i,u){return s!==e||i?o.get("https://www.ethercalc.org/_/"+e+"/csv").success(function(o){function i(){try{return JSON.parse(null!=C?C:"{}")}catch(t){}}function p(){var t;switch(t=[w],!1){case void 0!==t[0]:return h||k&&(h=k,k=null),{title:k,type:"dummy",id:"dummy"};case!(U=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:U[1]};case!(U=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:U[1]};case!(U=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:U[1]};case!(U=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:U[1]};case!(U=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:U[1]};case!(U=/https?:\/\/hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",id:U[1]};case!(U=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(w)),icon:"http://g.etfv.co/"+U[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",w):void 0}}function d(t){return t.length}function f(t){var e,r,o,i,a;return e=t.match(/^(.*?)(?::(.*))?$/),r=e[0],o=e[1],i=e[2],a=n.call(e,3),{content:o,"class":null!=i?i:"warning"}}var h,g,m,v,$,b,x,y,w,k,C,E,P,O,_,T,S,U,A,D,q,j,M,F;for(s=e,a.length=0,m=[],v=0,b=($=o.split(/\n/)).length;b>v;++v)x=$[v],x&&(y=x.split(/,/),w=y[0],k=y[1],C=y[2],E=y[3],P=n.call(y,4),k=r.call(k,/^"|"$/g,""),C&&(C=r.call(C,/^"|"$/g,"")),C&&(C=C.replace(/""/g,'"')),E&&(E=r.call(E,/^"|"$/g,"")),y=w.match(/^"?(\s*)(\S+?)?(#\S+)?"?$/),O=y[0],_=y[1],w=y[2],T=y[3],S=t({hashtag:T,url:w,title:k,indent:_.length,opts:i()},p()),S.type!=="dummy"||(y=S.title)!=null&&y.length?m.push(t(t({icon:"img/"+S.type+".png"},S),{tags:((y=(A=S.opts)!=null?A.tags:void 0)!=null?y:[]).concat(((y=null!=E?E.split(","):void 0)!=null?y:[]).filter(d).map(f))})):m.push(null));for(g=m,a.splice.apply(a,[0,a.length].concat(n.call(g.filter(function(t){return null!=t})))),D=0,m=[],v=0,b=($=a).length;b>v;++v)j=v,S=$[v],j>0&&S.indent?(M=a[D],F=(y=M.children)!=null?y:M.children=[],F.push(S),m.push(null)):(D=j,m.push(S));return q=m,q=q.filter(function(t){return null!=t}),q=q.map(function(t){var e,n;return t.children&&(t.expand=(e=(n=t.opts)!=null?n.expand:void 0)!=null?e:t.children.length<5),t}),l.splice.apply(l,[0,l.length].concat(n.call(q))),c.folderTitle=h,u(a)}):u(a)}}})})}.call(this),function(){function t(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}angular.module("hub.g0v.tw",["ui.state","firebase"]).controller({TagControl:["$scope","$state","$location","Hub"].concat(function(e,n,r,o){return e.$watch("$state.params.tag",function(t){return e.tag=t,e.loadDisqus(t)}),t(e,{projects:[{name:"立法院"},{name:"meta"}],people:o.people,loadDisqus:function(t){var e;return console.log("load"),r.host()!=="localhost"?(window.disqus_shortname="g0vhub",window.disqus_identifier="tag-"+t,window.disqus_url="http://hack.g0v.tw/tag/"+t,"undefined"!=typeof DISQUS&&DISQUS.reset({reload:!0,config:function(){return this.page.identifier=window.disqus_identifier,this.page.url=window.disqus_url}}),e=document.getElementById("disqusCommentScript"),e&&(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).removeChild(e),console.log("url",window.disqus_url),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="http://angularjs.disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}(),angular.element(document.getElementById("disqus_thread")).html("")):void 0}})})}).controller({PeopleCtrl:["$scope","$state","Hub","angularFire"].concat(function(e,n,r,o){return e.safeApply=function(t){var n;return n=e.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof t?t():void 0:e.$apply(t)},t(e,{avatar:function(t,e){var n,r;switch(null==e&&(e="medium"),!1){case!((n=t.auth)!=null&&(r=n.github)!=null&&r.username):return"http://avatars.io/github/"+t.auth.github.username+"?size="+e;case!((n=t.auth)!=null&&(r=n.twitter)!=null&&r.username):return"http://avatars.io/github/"+t.auth.twitter.username+"?size="+e;case!((n=t.auth)!=null&&(r=n.github)!=null&&r.username):return"http://avatars.io/github/"+t.auth.github.username+"?size="+e}},remove_tag:function(t,e){var n;return t.tags=function(){var r,o,i,a=[];for(r=0,i=(o=t.tags).length;i>r;++r)n=o[r],n!==e&&a.push(n);return a}()},add_tag:function(t){return t.tags==null&&(t.tags=[]),t.tags.push(e.newtag),e.newtag="",!1},projects:[{name:"立法院"},{name:"meta"}],people:r.people,auth:r.auth,setUsername:r.setUsername,loginAndMerge:r.loginAndMerge,loginAndLink:r.loginAndLink}),e.$on("event:auth-login",function(t,n){var i;return i=n.user,e.safeApply(function(){var t;return t=o(r.root.child("people/"+i.username),e,"user",{}),e.toSetUsername=!1})}),e.$on("event:auth-logout",function(){return e.safeApply(function(){return delete e.user,e.toSetUsername=!1})}),e.$on("event:auth-userNameRequired",function(t,n){var o;return o=n.existing,e.safeApply(function(){var t;return e.toSetUsername=!0,e.usernameInUse=o,e.newUsername=(t=r.authUser)!=null?t.username:void 0})})})}).factory({Hub:["$http","angularFireCollection","$rootScope"].concat(function(e,n,r){var o,i,a,l,s;return o=window.global.config.FIREBASE,i=new Firebase(o),a=n(i.child("people")),l={},s=function(t,e,n){return i.child("people/"+t).once("value",function(t){var o;return o=t.val(),(e||o)&&r.$broadcast("event:auth-userNameRequired",{existing:o}),o?void 0:"function"==typeof n?n():void 0})},l.setUsername=function(t){return l.authUser?s(t,!1,function(){var e,n,o,a,s;return n={displayName:l.authUser.displayName},n.tags=[],n.username=t,e=n,l.authUser.provider==="github"?(n=l.authUser.avatar_url.match(/https:\/\/secure.gravatar.com\/avatar\/(\w+)/),o=n[0],a=n[1],e.avatar="http://avatars.io/gravatar/"+a):e.avatar="http://avatars.io/"+l.authUser.provider+"/"+l.authUser.id,s=i,s.child("auth-map/"+l.authUser.provider+"/"+l.authUser.id).set({username:t}),s.child("people/"+t).set(e),s.child("people/"+t+"/auth/"+l.authUser.provider).set({id:(n=l.authUser).id,username:n.username}),i.child("people/"+t).once("value",function(t){return l.loginUser=t.val(),r.$broadcast("event:auth-login",{user:l.loginUser})})}):void 0},l.loginAndMerge=function(t){return l.authMerge=l.authUser,l.auth.login(t)},l.loginAndLink=function(t){return l.authLink=l.authUser,l.authLinkUser=l.loginUser,l.auth.login(t)},l.auth=new FirebaseAuthClient(i,function(t,e){return t?console.log(t):e?(l.authUser=e,i.child("auth-map/"+e.provider+"/"+e.id).once("value",function(t){var n,o,a,c,u,p;return(n=t.val())!=null&&(o=n.username,n)?(a=i.child("people/"+o),a.once("value",function(t){var e,n,s,c;return(e=l.authMerge)&&(s={},s[e.provider+""]={id:e.id,username:(c=e.username)!=null?c:""},n=s,a.child("auth").update(n),i.child("auth-map/"+e.provider+"/"+e.id).set({username:o}),delete l.authMerge),l.loginUser=t.val(),r.$broadcast("event:auth-login",{user:l.loginUser})})):(c=l.authLink)?(o=l.authLinkUser.username,a=i.child("people/"+o),n={},n[e.provider+""]={id:e.id,username:(p=e.username)!=null?p:""},u=n,a.child("auth").update(u),i.child("auth-map/"+e.provider+"/"+e.id).set({username:o}),n=l.authLink,delete l.authLink,n):s(l.authUser.username,!0)})):r.$broadcast("event:auth-logout")}),t(l,{root:i,people:a,register:function(){var t,e;return t={name:"clkao",github:"clkao",twitter:"clkao",tags:["ly","g0v","hackath3n","livescript"],status:"available"},e=i.child("people/"+t.name),e.once("value",function(n){return n.val()?void 0:e.set(t)})}})})})}.call(this),function(){var t={};t.exports={FIREBASE:"https://g0vhub.firebaseio.com"},window.global||(window.global={}),window.global.config=t.exports}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);