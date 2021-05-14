(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[602],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<s;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53277:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var n=r(22122),a=r(19756),s=(r(67294),r(3905)),l={id:"result",title:"Result",sidebar_label:"Result",slug:"/usecase/result"},i={unversionedId:"usecase/result",id:"usecase/result",isDocsHomePage:!1,title:"Result",description:"Result",source:"@site/docs/usecase/result.md",sourceDirName:"usecase",slug:"/usecase/result",permalink:"/docs/usecase/result",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/usecase/result.md",version:"current",sidebar_label:"Result",frontMatter:{id:"result",title:"Result",sidebar_label:"Result",slug:"/usecase/result"},sidebar:"sidebar",previous:{title:"Steps",permalink:"/docs/usecase/steps"},next:{title:"What's a Use Case?",permalink:"/docs/usecase"}},u=[{value:"Result",id:"result",children:[]},{value:"Ok",id:"ok",children:[]},{value:"Err",id:"err",children:[]}],o={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"result"},"Result"),(0,s.kt)("p",null,"The result instances indicate whether the execution of a function was successful or not. ",(0,s.kt)("inlineCode",{parentName:"p"},"Ok(value)")," representing success and containing a ",(0,s.kt)("inlineCode",{parentName:"p"},"value"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"Err(error)"),", representing error and containing an ",(0,s.kt)("inlineCode",{parentName:"p"},"error")," value."),(0,s.kt)("p",null,"For exemple:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const createList = usecase('Create List', {\n\n    'Check if the List is valid': step(ctx => {\n        ...\n        if (!list.isValid()) return Err(list.errors)\n        return Ok()\n    }),\n")),(0,s.kt)("p",null,"To consume the information:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"/* Execution */\nconst request = { ... }\nconst response = await createList.run(request)\n\n/* Response */\nif (response.isErr)\n    throw new ResponseError(null, { invalidArgs: response.err }) \n    // Or any other behavior for error response\n    \nreturn response.ok // response.ok has the returned value\n")),(0,s.kt)("p",null,"Results are a important run-time metadata to inform Glues about the execution of a use case."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"result.isOk"),": returns if the result is ",(0,s.kt)("inlineCode",{parentName:"p"},"Ok"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"result.isErr"),": returns if the result is ",(0,s.kt)("inlineCode",{parentName:"p"},"Err"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"result.toString()"),": returns the string representation of the result."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"result.toJSON()"),": returns the JSON representation of the result."),(0,s.kt)("h2",{id:"ok"},"Ok"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", where:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"value"),": success value.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"return: ",(0,s.kt)("inlineCode",{parentName:"p"},"Ok")," instance."))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"result.ok"),": returns the success value."),(0,s.kt)("h2",{id:"err"},"Err"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Err(error)"),", where:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"error"),": error value.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"return: ",(0,s.kt)("inlineCode",{parentName:"p"},"Err")," instance."))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"result.err"),": returns the error value."))}p.isMDXComponent=!0}}]);