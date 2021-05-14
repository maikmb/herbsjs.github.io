(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[532],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return y}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),y=i,f=p["".concat(o,".").concat(y)]||p[y]||c[y]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73729:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return d}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l={id:"features",title:"Features",sidebar_label:"Features",slug:"/entity/features"},s={unversionedId:"entity/features",id:"entity/features",isDocsHomePage:!1,title:"Features",description:"// TODO",source:"@site/docs/entity/features.md",sourceDirName:"entity",slug:"/entity/features",permalink:"/docs/entity/features",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/entity/features.md",version:"current",sidebar_label:"Features",frontMatter:{id:"features",title:"Features",sidebar_label:"Features",slug:"/entity/features"},sidebar:"sidebar",previous:{title:"Getting started",permalink:"/docs/entity/getting-started"},next:{title:"Field Validations",permalink:"/docs/entity/validation"}},o=[{value:"Validation",id:"validation",children:[{value:"Type Validation",id:"type-validation",children:[]},{value:"Custom Validation",id:"custom-validation",children:[]}]},{value:"Serialization",id:"serialization",children:[{value:"fromJSON(value)",id:"fromjsonvalue",children:[]},{value:"JSON.stringify(entity)",id:"jsonstringifyentity",children:[]}]},{value:"Field definition",id:"field-definition",children:[{value:"Scalar types",id:"scalar-types",children:[]},{value:"Entity type",id:"entity-type",children:[]},{value:"List of Entity type",id:"list-of-entity-type",children:[]},{value:"Default value",id:"default-value",children:[]}]},{value:"Method definition",id:"method-definition",children:[]},{value:"Instance Type Check - Entity.isParentOf",id:"instance-type-check---entityisparentof",children:[]},{value:"Entity Type Check - entity.isEntity",id:"entity-type-check---entityisentity",children:[]}],u={toc:o};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"// TODO"),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("p",null,"A value of an field can be validated against the field type or its custom validation."),(0,r.kt)("h3",{id:"type-validation"},"Type Validation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst Plan = \n    entity('Plan', {\n        ...\n        monthlyCost: field(Number),\n    })\n\nconst User = \n    entity('User', {\n        name: field(String),\n        plan: field(Plan)\n    })\n\nconst user = new User()\nuser.name = 42\nuser.plan.monthlyCost = true\nuser.validate() \nuser.errors // { name: [ wrongType: 'String' ], plan: { monthlyCost: [ wrongType: 'Number' ] } }\nuser.isValid() // false\n")),(0,r.kt)("p",null,"You can also simplify you validation method using ",(0,r.kt)("inlineCode",{parentName:"p"},"isValid()")," method that execute validate for you entity and return true/false in a single execution."),(0,r.kt)("h3",{id:"custom-validation"},"Custom Validation"),(0,r.kt)("p",null,"For custom validation Gotu uses Herbs JS ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/suma"},"Suma")," library under the hood. It has no message defined, only error codes."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{ validation: ... }")," to specify a valid Suma validation (sorry) on the field definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        password: field(String, validation: { \n            presence: true, \n            length: { minimum: 6 }\n        })\n    })\n\nconst user = new User()\nuser.password = '1234'\nuser.validate() \nuser.errors // { password: [ { isTooShort: 6 } ] }\nuser.isValid // false\n")),(0,r.kt)("h2",{id:"serialization"},"Serialization"),(0,r.kt)("h3",{id:"fromjsonvalue"},"fromJSON(value)"),(0,r.kt)("p",null,"Returns a new instance of a entity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        name: field(String)\n    })\n\n// from object\nconst user = User.fromJSON({ name: 'Beth'})\n// or string\nconst user = User.fromJSON(`{ \"name\": \"Beth\"}`)\n")),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"fromJSON")," serializes only keys that have been defined in the entity. If you want to add other keys during serialization, use ",(0,r.kt)("inlineCode",{parentName:"p"},".fromJSON(data, { allowExtraKeys: true })"),"."),(0,r.kt)("h3",{id:"jsonstringifyentity"},"JSON.stringify(entity)"),(0,r.kt)("p",null,"To serialize an entity to JSON string use ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"entity.toJSON")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const json = JSON.stringify(user) // { "name": "Beth" }\n')),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"toJSON")," serializes only keys that have been defined in the entity. If you want to add other keys during serialization, use ",(0,r.kt)("inlineCode",{parentName:"p"},"entity.toJSON({ allowExtraKeys: true })"),"."),(0,r.kt)("h2",{id:"field-definition"},"Field definition"),(0,r.kt)("p",null,"A entity field type has a name, type, default value, validation and more."),(0,r.kt)("h3",{id:"scalar-types"},"Scalar types"),(0,r.kt)("p",null,"A field in an entity can be of basic types, the same as those used by JavaScript:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Number"),": double-precision 64-bit binary format IEEE 754 value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String"),": a UTF\u201016 character sequence"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),": true or false"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Date"),": represents a single moment in time in a platform-independent format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        name: field(String),\n        lastAccess: field(Date),\n        accessCount: field(Number),\n        hasAccess: field(Boolean)\n    })\n")),(0,r.kt)("h3",{id:"entity-type"},"Entity type"),(0,r.kt)("p",null,"For complex types, with deep relationship between entities, a field can be of entity type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Plan = \n    entity('Plan', {\n        ...\n        monthlyCost: field(Number),\n    })\n\nconst User = \n    entity('User', {\n        ...\n        plan: field(Plan)\n    })\n")),(0,r.kt)("h3",{id:"list-of-entity-type"},"List of Entity type"),(0,r.kt)("p",null,"For complex types, with deep relationship between entities, a field can contain a list of entity type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Plan = \n    entity('Plan', {\n        ...\n        monthlyCost: field(Number),\n    })\n\nconst User = \n    entity('User', {\n        ...\n        plan: field([Plan])\n    })\n")),(0,r.kt)("h3",{id:"default-value"},"Default value"),(0,r.kt)("p",null,"It is possible to define a default value when an entity instance is initiate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        hasAccess: field(Boolean, { default: false })\n    })\n\n\nconst user = new User()\nuser.hasAccess // false\n")),(0,r.kt)("p",null,"If the default value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," it will call the function and return the value as default value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        hasAccess: field(Boolean, { default: () => false })\n    })\n\n\nconst user = new User()\nuser.hasAccess // false\n")),(0,r.kt)("p",null,"For scalar types a default value is assumed if a default value is not given:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date")),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("p",null,"For entity types the default value is a new instance of that type. It is possible to use ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," as default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        plan: field(Plan, { default: null })\n    })\n\nconst user = new User()\nuser.plan // null\n")),(0,r.kt)("h2",{id:"method-definition"},"Method definition"),(0,r.kt)("p",null,"A method can be defined to create custom behaviour in an entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        role: field(String),\n        hasAccess() { return this.role === \"admin\" },\n    })\n\nconst user = new User()\nconst access = user.hasAccess()\n")),(0,r.kt)("h2",{id:"instance-type-check---entityisparentof"},"Instance Type Check - Entity.isParentOf"),(0,r.kt)("p",null,"Check if a instance is the same type from its parent entity class (similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceOf"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"        const AnEntity = entity('A entity', {})\n        const AnSecondEntity = entity('A second entity', {})\n\n        const instance1 = new AnEntity()\n        const instance2 = new AnSecondEntity()\n        \n        AnEntity.isParentOf(instance1) // true\n        AnEntity.isParentOf(instance2) // false\n")),(0,r.kt)("h2",{id:"entity-type-check---entityisentity"},"Entity Type Check - entity.isEntity"),(0,r.kt)("p",null,"Check if an object is a Gotu Entity class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"        const AnEntity = entity('A entity', {})\n\n        const instance1 = new AnEntity()\n        \n        entity.isEntity(AnEntity) // true\n        entity.isEntity(Object) // false\n")))}d.isMDXComponent=!0}}]);