(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[78],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},75793:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"ecosystem",title:"Ecosystem",slug:"/introduction/ecosystem"},s=void 0,c={unversionedId:"introduction/ecosystem",id:"introduction/ecosystem",isDocsHomePage:!1,title:"Ecosystem",description:"There are three primitive herbs libraries that are at Herbs' core, helping modeling your domain and preparing it to expose metadata. To consume these metadata and bring value to your domain there are glue libraries. They create bridges between Herbs core and other libraries already consolidated in the node.js community.",source:"@site/docs/introduction/ecosystem.md",sourceDirName:"introduction",slug:"/introduction/ecosystem",permalink:"/docs/introduction/ecosystem",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/introduction/ecosystem.md",version:"current",frontMatter:{id:"ecosystem",title:"Ecosystem",slug:"/introduction/ecosystem"},sidebar:"sidebar",previous:{title:"Architecture guidelines",permalink:"/docs/introduction/architecture-guidelines"},next:{title:"1. New Project",permalink:"/docs/tutotial/new-project"}},u=[{value:"Herbs Core",id:"herbs-core",children:[]},{value:"Glues",id:"glues",children:[]}],l={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are three primitive herbs libraries that are at Herbs' core, helping modeling your domain and preparing it to expose metadata. To consume these metadata and bring value to your domain there are ",(0,a.kt)("a",{parentName:"p",href:"docs/glues"},"glue")," libraries. They create bridges between Herbs core and other libraries already consolidated in the node.js community."),(0,a.kt)("h2",{id:"herbs-core"},"Herbs Core"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu"},(0,a.kt)("strong",{parentName:"a"},"Gotu")),": Model your business ",(0,a.kt)("a",{parentName:"p",href:"/docs/entity/getting-started"},"entities")," with validation and business rules."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/buchu"},(0,a.kt)("strong",{parentName:"a"},"Buchu")),": Model your ",(0,a.kt)("a",{parentName:"p",href:"/docs/usecase/getting-started"},"use cases")," to be readable, auditable and secure."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/suma"},(0,a.kt)("strong",{parentName:"a"},"Suma")),": It is the base library for value validation used internally by Gotu and Buchu."),(0,a.kt)("h2",{id:"glues"},"Glues"),(0,a.kt)("p",null,"Glues are libraries that consume your domain's metadata and dynamically generate for you a significant part of the infrastructure API on the fly (no code generation), such as REST endpoints and controllers, resolvers and types for GraphQL, specialized repositories, as well as documentation and other features that we haven't even imagined yet."),(0,a.kt)("p",null,"There are some Glues maintained directly by the Herbs core developers, but we believe that the ecosystem is still in its infancy, so we encourage the creation of other Glues and thus help more developers to unlock their domains."),(0,a.kt)("p",null,"To better understand what a Glue is and which ones are ready to use, visit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/glues"},"Glues")," page."))}d.isMDXComponent=!0}}]);