"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[424],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(k,a(a({ref:t},s),{},{components:n})):i.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],c={sidebar_position:3},l="Blocks",d={unversionedId:"guides/blocks",id:"guides/blocks",title:"Blocks",description:"Blocks are reusable definitions used by the INSERT entity, defined in the BLOCKS section.",source:"@site/docs/guides/blocks.md",sourceDirName:"guides",slug:"/guides/blocks",permalink:"/dxf/docs/guides/blocks",editUrl:"https://github.com/tarikjabiri/dxf/docs/guides/blocks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tables",permalink:"/dxf/docs/guides/tables"},next:{title:"Entities",permalink:"/dxf/docs/guides/entities"}},s=[{value:"Creation of blocks",id:"creation-of-blocks",children:[],level:2},{value:"Adding entities to block",id:"adding-entities-to-block",children:[],level:2},{value:"Inserting blocks",id:"inserting-blocks",children:[],level:2}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blocks"},"Blocks"),(0,r.kt)("p",null,"Blocks are reusable definitions used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," entity, defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"BLOCKS")," section."),(0,r.kt)("p",null,"By default two blocks are created: ",(0,r.kt)("inlineCode",{parentName:"p"},"*Model_Space")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*Paper_Space"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," entity cannot use these tow blocks."))),(0,r.kt)("h2",{id:"creation-of-blocks"},"Creation of blocks"),(0,r.kt)("p",null,"To add a block use the convinient function ",(0,r.kt)("inlineCode",{parentName:"p"},"addBlock()"),", it is a factory function that create a block, store it and return a reference to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {addBlock} from '@tarikjabiri/dxf';\n\nconst myBlock = addBlock('myBlock');\n")),(0,r.kt)("h2",{id:"adding-entities-to-block"},"Adding entities to block"),(0,r.kt)("p",null,"To add entities to a block just call the convinient methods to do so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {addBlock, point3d} from '@tarikjabiri/dxf';\n\nconst myBlock = addBlock('myBlock');\nmyBlock.addCircle(point3d(0, 0, 0), 20);\nmyBlock.addLine(point3d(0, 0, 0), point3d(0, 20, 0));\n// and so on ...\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can add all supported entities."))),(0,r.kt)("h2",{id:"inserting-blocks"},"Inserting blocks"),(0,r.kt)("p",null,"To insert a block in th drawing use the convinient methode ",(0,r.kt)("inlineCode",{parentName:"p"},"addInsert()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import DxfWriter, {point3d, addBlock} from '@tarikjabiri/dxf';\n\nconst dxf = new DxfWriter();\n\nconst myBlock = addBlock('myBlock');\nmyBlock.addCircle(point3d(0, 0, 0), 20);\nmyBlock.addLine(point3d(0, 0, 0), point3d(0, 20, 0));\n\n// Inserting the block\ndxf.addInsert(myBlock.name, point3d(0, 0, 0));\n")))}u.isMDXComponent=!0}}]);