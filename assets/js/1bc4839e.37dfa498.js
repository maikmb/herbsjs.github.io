(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[893],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52454:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return c}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),i={id:"suma2text",title:"Suma2text",sidebar_label:"Suma2text",slug:"/glues/suma2text"},l={unversionedId:"glues/suma2text",id:"glues/suma2text",isDocsHomePage:!1,title:"Suma2text",description:"CI build codecov",source:"@site/docs/glues/suma2text.md",sourceDirName:"glues",slug:"/glues/suma2text",permalink:"/docs/glues/suma2text",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/glues/suma2text.md",version:"current",sidebar_label:"Suma2text",frontMatter:{id:"suma2text",title:"Suma2text",sidebar_label:"Suma2text",slug:"/glues/suma2text"},sidebar:"sidebar",previous:{title:"Herbs2rpl",permalink:"/docs/glues/herbs2rpl"},next:{title:"Herbs-snippets",permalink:"/docs/glues/herbs-snippets"}},o=[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]},{value:"TODO",id:"todo",children:[{value:"Contribute",id:"contribute",children:[]},{value:"The Herb",id:"the-herb",children:[]},{value:"License",id:"license",children:[]}]}],u={toc:o};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://github.com/herbsjs/suma2text/workflows/CI%20build/badge.svg",alt:"CI build"})," ",(0,s.kt)("a",{parentName:"p",href:"https://codecov.io/gh/herbsjs/suma2text"},(0,s.kt)("img",{parentName:"a",src:"https://codecov.io/gh/herbsjs/suma2text/branch/master/graph/badge.svg",alt:"codecov"}))),(0,s.kt)("p",null,"suma2text it's a tool to parse error codes to string, you can use in all your solution."),(0,s.kt)("p",null,"Suma and suma2text native, you can translate all suma error codes, one by one or all entity error array."),(0,s.kt)("h3",{id:"installing"},"Installing"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ npm install suma2text\n")),(0,s.kt)("h3",{id:"using"},"Using"),(0,s.kt)("p",null,"If your use is simple, you can just require suma2text, and execute this configure function, by default the language will be English from the united states (ISO CODE en-US)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const suma2text = require('suma2text')()\n\nconst suma2text.toText({ notDefined: true })\n/*\n    Not defined\n*/\n")),(0,s.kt)("p",null,"You also can add a different language or customize the existing, just pass the following parameters on require function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const suma2text = require('suma2text')({\n    useDefault: 'ts-ME',\n    languages: [{\n            name: 'ts-ME',\n            definitions: {\n                types: [\n                    { key: 'Number',  translation: 'Numeric' },\n                    { key: 'String',  translation: 'Characters'}\n                ]\n                codes: [\n                    { key: 'cantBeEmpty', translation: 'Wont should be empty' },\n                    { key: 'wrongType', translation: 'Please the value correct is {0}' }\n                ]\n            }\n        },\n        {\n            name: 'en-US',\n            definitions: {\n                types: [\n                    { key: 'Number', translation: 'Digit' },\n                    { key: 'String', translation: 'Char Array' }\n                ],\n                codes: [\n                    { key: 'cantBeEmpty', translation: 'Wont should be empty' },\n                    { key: 'wrongType', translation: 'The value correct is {0}'}\n                ]\n            }\n        }\n    ]\n})\n\n//fully custumized language\nconst suma2text.toText({ wrongType: String }, 'ts-ME')\n/*\n   Please the value correct is Characters\n*/\nconst suma2text.toText({ notGreaterThan: 10 }, 'ts-ME')\n/*\n   Will be thrown a not implemented code exception\n*/\n\n//existing language, but some custumization\nconst suma2text.toText({ wrongType: String }, 'en-US')\n/*\n   The value correct is Char Array\n*/\nconst suma2text.toText({ notGreaterThan: 10 }, 'en-US')\n/*\n   Not greater than 10\n*/\n\n")),(0,s.kt)("p",null,"But, the perfect choice is to use whit herbs.js, all suma codes are integrated into here, and we made for it, you can pass all your validation in a suma2text class, validate, and just show the results in your presentation layer, let's see how."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const User =\n    entity('User', {\n        name: field(String),\n        plan: field(Plan)\n    })\n\nconst user = new User()\nuser.name = 42\nuser.plan.monthlyCost = true\nuser.validate()\nuser.errors // { name: [ {wrongType: 'String'} ], plan: { monthlyCost: [ {wrongType: 'Number'}  } }\n\nconst suma2text = require('suma2text')()\n\nconst englishUserErrors = suma2text.errorsToText(user.errors)\n/*\n    {\n        name: ['Wrong type, the correct type is String']\n        plan: {\n            monthlyCost: ['Wrong type, the correct type is Plan']\n        }\n    }\n*/\nconst portugueseUserErrors = suma2text.errorsToText(user.errors, 'pt-BR')\n/*\n    {\n        name: ['Foi definido um tipo incorreto, o valor esperado era Texto']\n        plan: {\n            monthlyCost: ['Foi definido um tipo incorreto, o valor esperado era Plan']\n        }\n    }\n*/\n")),(0,s.kt)("h2",{id:"todo"},"TODO"),(0,s.kt)("p",null,"Language localisation:"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Arabic"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Bangla"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Chinese"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Dutch"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","English ('en-US')"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","French"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","German"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Italian"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Korean"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Portuguese ('pt-BR')"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Spanish"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Swedish   "),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tamil")),(0,s.kt)("p",null,"Text Formatting:"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Primitive types"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Strings types"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Number types "),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Date Type and formating style"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","User Class instances types")),(0,s.kt)("h3",{id:"contribute"},"Contribute"),(0,s.kt)("p",null,"Come with us to make an awesome ",(0,s.kt)("em",{parentName:"p"},"suma2text"),"."),(0,s.kt)("p",null,"Now, if you do not have the technical knowledge and also have intended to help us, do not feel shy, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/suma2text/issues"},"click here")," to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)"),(0,s.kt)("p",null,"If you would like to help contribute to this repository, please see ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/suma2text/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING")),(0,s.kt)("h3",{id:"the-herb"},"The Herb"),(0,s.kt)("p",null,"suma2text suma2text has been used historically to relieve congestion from upper respiratory infections and colds and for wound healing. It is very popular for treating varicose veins and memory loss."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.herbslist.net/"},"https://www.herbslist.net/")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Centella_asiatica"},"https://en.wikipedia.org/wiki/Centella_asiatica")),(0,s.kt)("h3",{id:"license"},"License"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"suma2text")," is released under the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/suma2text/blob/master/LICENSE.md"},"MIT license")))}c.isMDXComponent=!0}}]);