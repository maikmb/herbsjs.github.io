(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[519],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||s;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86359:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var a=r(22122),n=r(19756),s=(r(67294),r(3905)),i={id:"whatis",title:"What's a Use Case?",sidebar_label:"What's a Use Case?",slug:"/usecase"},o={unversionedId:"usecase/whatis",id:"usecase/whatis",isDocsHomePage:!1,title:"What's a Use Case?",description:"Conceptually, a use case reflects a single action exposed by the Domain to the end user.",source:"@site/docs/usecase/whatis.md",sourceDirName:"usecase",slug:"/usecase",permalink:"/docs/usecase",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/usecase/whatis.md",version:"current",sidebar_label:"What's a Use Case?",frontMatter:{id:"whatis",title:"What's a Use Case?",sidebar_label:"What's a Use Case?",slug:"/usecase"},sidebar:"sidebar",previous:{title:"Result",permalink:"/docs/usecase/result"},next:{title:"Getting started",permalink:"/docs/entity/getting-started"}},l=[{value:"References",id:"references",children:[]}],c={toc:l};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Conceptually, a use case reflects a single action exposed by the Domain to the end user."),(0,s.kt)("p",null,"For exemple: ",(0,s.kt)("em",{parentName:"p"},"Reopen Ticket"),", ",(0,s.kt)("em",{parentName:"p"},"Reply Message"),", ",(0,s.kt)("em",{parentName:"p"},"Add User")),(0,s.kt)("p",null,"Internally a use case is responsible to control the interaction between entities, repositories and other domain components."),(0,s.kt)("p",null,'From Clean Architecture book: "Use cases orchestrate the flow of data to and from the entities, and direct those entities to use their Critical Business Rules to achieve the goals of the use case." '),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Best Pratices for a Use Case")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Be modeled around business domain"),(0,s.kt)("li",{parentName:"ul"},"Focused on value"),(0,s.kt)("li",{parentName:"ul"},"Keep it simple by telling stories / flows (steps)"),(0,s.kt)("li",{parentName:"ul"},"Be reusable"),(0,s.kt)("li",{parentName:"ul"},"Be testable"),(0,s.kt)("li",{parentName:"ul"},"Have clear acceptance criteria"),(0,s.kt)("li",{parentName:"ul"},"Use Ubiquitous language"),(0,s.kt)("li",{parentName:"ul"},"Avoid implement field ",(0,s.kt)("strong",{parentName:"li"},"validations")," using use cases. Prefer Entities for that."),(0,s.kt)("li",{parentName:"ul"},"Enforce use cases are the only entry point to your Domain")),(0,s.kt)("h3",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164"},"Clean Architecture book")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.ivarjacobson.com/sites/default/files/field_iji_file/article/use-case_2.0_final_rev3.pdf"},"Use Case 2.0")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://www.agilemodeling.com/artifacts/useCaseDiagram.htm"},"Use Case diagram")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://martinfowler.com/eaaCatalog/serviceLayer.html"},"Service Layer"))))}u.isMDXComponent=!0}}]);