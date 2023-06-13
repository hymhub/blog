"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=r.createContext({}),c=function(e){var t=r.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(A.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,A=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),i=a,m=p["".concat(A,".").concat(i)]||p[i]||g[i]||s;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=i;var o={};for(var A in t)hasOwnProperty.call(t,A)&&(o[A]=t[A]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}i.displayName="MDXCreateElement"},3751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={slug:"React Hook \u4e2d useState \u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848",title:"React Hook \u4e2d useState \u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848",authors:["hyminghan"],tags:["React"]},l=void 0,o={permalink:"/blog/blog/React Hook \u4e2d useState \u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848",source:"@site/blog/2021-07-09-React Hook \u4e2d useState \u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848/index.md",title:"React Hook \u4e2d useState \u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848",description:"\u9884\u5148\u4e86\u89e3 setState \u7684\u4e24\u79cd\u4f20\u53c2\u65b9\u5f0f",date:"2021-07-09T00:00:00.000Z",formattedDate:"2021\u5e747\u67089\u65e5",tags:[{label:"React",permalink:"/blog/blog/tags/react"}],readingTime:5.68,hasTruncateMarker:!1,authors:[{name:"hyminghan",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/hymhub",imageURL:"https://github.com/hymhub.png",key:"hyminghan"}],frontMatter:{slug:"React Hook \u4e2d useState \u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848",title:"React Hook \u4e2d useState \u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848",authors:["hyminghan"],tags:["React"]},prevItem:{title:"\u4f7f\u7528 Phaser3 \u5236\u4f5c\u5c0f\u6e38\u620f(500\u884c\u4ee3\u7801\u5b9e\u73b0\u98de\u673a\u5927\u6218)",permalink:"/blog/blog/\u4f7f\u7528 Phaser3 \u5236\u4f5c\u5c0f\u6e38\u620f-500\u884c\u4ee3\u7801\u5b9e\u73b0\u98de\u673a\u5927\u6218"}},A={authorsImageUrls:[void 0]},c=[{value:"\u9884\u5148\u4e86\u89e3 setState \u7684\u4e24\u79cd\u4f20\u53c2\u65b9\u5f0f",id:"\u9884\u5148\u4e86\u89e3-setstate-\u7684\u4e24\u79cd\u4f20\u53c2\u65b9\u5f0f",level:2},{value:"1\u3001\u76f4\u63a5\u4f20\u5165\u65b0\u503c setState(options);",id:"1\u76f4\u63a5\u4f20\u5165\u65b0\u503c-setstateoptions",level:3},{value:"2\u3001\u4f20\u5165\u56de\u8c03\u51fd\u6570 setState(callBack);",id:"2\u4f20\u5165\u56de\u8c03\u51fd\u6570-setstatecallback",level:3},{value:"useState \u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848",id:"usestate-\u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u89e3\u51b3\u65b9\u6848 1\uff08\u63a8\u8350\u4f7f\u7528\uff09\uff1a",id:"\u89e3\u51b3\u65b9\u6848-1\u63a8\u8350\u4f7f\u7528",level:3},{value:"\u89e3\u51b3\u65b9\u6848 2\uff1a",id:"\u89e3\u51b3\u65b9\u6848-2",level:3},{value:"\u89e3\u51b3\u65b9\u6848 3\uff1a",id:"\u89e3\u51b3\u65b9\u6848-3",level:3},{value:"\u7ec8\u6781\u65b9\u6848\uff1a",id:"\u7ec8\u6781\u65b9\u6848",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9884\u5148\u4e86\u89e3-setstate-\u7684\u4e24\u79cd\u4f20\u53c2\u65b9\u5f0f"},"\u9884\u5148\u4e86\u89e3 setState \u7684\u4e24\u79cd\u4f20\u53c2\u65b9\u5f0f"),(0,a.kt)("h3",{id:"1\u76f4\u63a5\u4f20\u5165\u65b0\u503c-setstateoptions"},"1\u3001\u76f4\u63a5\u4f20\u5165\u65b0\u503c setState(options);"),(0,a.kt)("p",null,"\u5217\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [state, setState] = useState(0);\nsetState(state + 1);\n")),(0,a.kt)("h3",{id:"2\u4f20\u5165\u56de\u8c03\u51fd\u6570-setstatecallback"},"2\u3001\u4f20\u5165\u56de\u8c03\u51fd\u6570 setState(callBack);"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [state, setState] = useState(0);\n// prevState \u662f\u6539\u53d8\u4e4b\u524d\u7684 state \u503c\uff0creturn \u8fd4\u56de\u7684\u503c\u4f1a\u4f5c\u4e3a\u65b0\u72b6\u6001\u8986\u76d6 state \u503c\nsetState((prevState) => prevState + 1);\n")),(0,a.kt)("h2",{id:"usestate-\u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848"},"useState \u5f02\u6b65\u56de\u8c03\u83b7\u53d6\u4e0d\u5230\u6700\u65b0\u503c\u53ca\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b setState \u76f4\u63a5\u4f7f\u7528\u4e0a\u8ff0\u7b2c\u4e00\u79cd\u65b9\u5f0f\u4f20\u53c2\u5373\u53ef\uff0c\u4f46\u5728\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\u7b2c\u4e00\u79cd\u65b9\u5f0f\u4f1a\u51fa\u73b0\u5f02\u5e38\uff1b\n\u4f8b\u5982\u5e0c\u671b\u5728\u5f02\u6b65\u56de\u8c03\u6216\u95ed\u5305\u4e2d\u83b7\u53d6\u6700\u65b0\u72b6\u6001\u5e76\u8bbe\u7f6e\u72b6\u6001\uff0c\u6b64\u65f6\u7b2c\u4e00\u79cd\u65b9\u5f0f\u83b7\u53d6\u7684\u72b6\u6001\u4e0d\u662f\u5b9e\u65f6\u7684\uff0cReact \u5b98\u65b9\u6587\u6863\u63d0\u5230\uff1a\u7ec4\u4ef6\u5185\u90e8\u7684\u4efb\u4f55\u51fd\u6570\uff0c\u5305\u62ec\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u548c Effect\uff0c\u90fd\u662f\u4ece\u5b83\u88ab\u521b\u5efa\u7684\u90a3\u6b21\u6e32\u67d3\u4e2d\u88ab\u300c\u770b\u5230\u300d\u7684\uff0c\u6240\u4ee5\u5f15\u7528\u7684\u503c\u4efb\u7136\u662f\u65e7\u7684\uff0c\u6700\u540e\u5bfc\u81f4 setState \u51fa\u73b0\u5f02\u5e38\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState, useEffect } from "react";\n\nconst App = () => {\n  const [arr, setArr] = useState([0]);\n\n  useEffect(() => {\n    console.log(arr);\n  }, [arr]);\n\n  const handleClick = () => {\n    Promise.resolve()\n      .then(() => {\n        setArr([...arr, 1]); // \u6b64\u65f6\u8d4b\u503c\u524d arr \u4e3a\uff1a[0]\n      })\n      .then(() => {\n        setArr([...arr, 2]); // \u6b64\u65f6\u8d4b\u503c\u524d arr \u4e3a\u65e7\u72b6\u6001\u4ecd\u7136\u4e3a\uff1a[0]\n      });\n  };\n\n  return (\n    <>\n      <button onClick={handleClick}>change</button>\n    </>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\uff0cApp \u7ec4\u4ef6\u5b9e\u9645\u4e5f\u662f\u4e2a\u95ed\u5305\u51fd\u6570\uff0chandleClick \u91cc\u9762\u5f15\u7528\u7740 arr\uff0c\u7b2c\u4e00\u6b21 setArr \u540e arr \u7684\u503c\u786e\u5b9e\u66f4\u65b0\u4e86\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u4e0b\u9762\u622a\u56fe\u4e2d\u770b\u5230\uff0c\u4f46\u6b64\u6b21\u6267\u884c\u7684 handleClick \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4f5c\u7528\u57df\u8fd8\u662f\u65e7\u7684\uff0c\u91cc\u9762\u5f15\u7528\u7684 arr \u4ecd\u7136\u4e3a\u65e7\u7684\uff0c\u5bfc\u81f4\u7b2c\u4e8c\u6b21 setArr \u540e\u7ed3\u679c\u4e3a ","[0, 2]","\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8074).Z,width:"98",height:"69"})),(0,a.kt)("p",null,"\u5728 class \u7ec4\u4ef6\u4e2d\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 setState(options, callBack); \u5728 setState \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u56de\u8c03\u51fd\u6570\u4e2d\u518d\u6b21\u8fdb\u884c setState\uff0c\u4e5f\u4e0d\u5b58\u5728\u95ed\u5305\u4f5c\u7528\u57df\u95ee\u9898\uff0c\u4f46\u662f React Hook \u4e2d useState \u79fb\u9664\u4e86 setState \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u800c\u4e14\u82e5\u5d4c\u5957\u592a\u591a\u4e5f\u4e0d\u4f73\uff1b"),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-1\u63a8\u8350\u4f7f\u7528"},"\u89e3\u51b3\u65b9\u6848 1\uff08\u63a8\u8350\u4f7f\u7528\uff09\uff1a"),(0,a.kt)("p",null,"\u5c06\u4e0a\u8ff0\u4ee3\u7801\u4f7f\u7528\u7b2c\u4e8c\u79cd\uff08\u56de\u8c03\uff09\u65b9\u5f0f\u4f20\u53c2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const handleClick = () => {\n  Promise.resolve()\n    .then(() => {\n      // \u8fd9\u91cc\u4e5f\u53ef\u4ee5\u4e0d\u6539\uff0c\u4f7f\u7528\u7b2c\u4e00\u4e2d\u4f20\u53c2\u65b9\u5f0f setArr([...arr, 1]); \u56e0\u4e3a\u8fd9\u91cc\u4e0d\u9700\u8981\u83b7\u53d6\u6700\u65b0\u72b6\u6001\n      setArr((prevState) => [...prevState, 1]);\n    })\n    .then(() => {\n      // \u8fd9\u91cc\u5fc5\u987b\u6539\u6210\u56de\u8c03\u51fd\u6570\u4f20\u53c2\u65b9\u5f0f\uff0c\u5426\u5219\u4f1a\u8bfb\u53d6\u65e7\u72b6\u6001\uff0c\u5bfc\u81f4\u5f02\u5e38\n      setArr((prevState) => [...prevState, 2]);\n    });\n};\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(717).Z,width:"125",height:"70"})),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-2"},"\u89e3\u51b3\u65b9\u6848 2\uff1a"),(0,a.kt)("p",null,"\u4f7f\u7528 useReducer \u4eff\u9020\u7c7b\u7ec4\u4ef6\u4e2d\u7684 forceUpdate \u5b9e\u73b0\u7ec4\u4ef6\u5f3a\u5236\u6e32\u67d3\uff1b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u6b64\u65b9\u6848\u4ec5\u9650\u4e8e\u53ea\u6709\u9875\u9762\u4f9d\u8d56\u8be5\u6570\u636e\u65f6\u9002\u7528\uff0c\u5982\u679c\u6709\u7c7b\u4f3c useEffect \u7b49 hook \u5728\u76d1\u542c\u8be5\u6570\u636e(\u793a\u4f8b\u4e2d\u7684 arr )\u65f6\u65e0\u6cd5\u5b9e\u65f6\u6355\u6349\u5230\u53d8\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState, useReducer } from "react";\n\nconst App = () => {\n  const [arr, setArr] = useState([0]);\n  const [, forceUpdate] = useReducer((x) => x + 1, 0);\n\n  const handleClick = () => {\n    Promise.resolve()\n      .then(() => {\n        arr.push(1); // \u5982\u679c\u8fd9\u91cc\u4e5f\u9700\u8981\u505a\u4e00\u6b21\u6e32\u67d3\u5728\u6539\u53d8\u72b6\u6001\u540e\u8c03\u7528 forceUpdate() \u5373\u53ef\n      })\n      .then(() => {\n        arr.push(2);\n        forceUpdate();\n      });\n  };\n\n  return (\n    <>\n      <h1>{arr.toString()}</h1>\n      <button onClick={handleClick}>change</button>\n    </>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"\u70b9\u51fb\u524d\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1361).Z,width:"167",height:"118"})),(0,a.kt)("p",null,"\u70b9\u51fb\u540e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2824).Z,width:"152",height:"121"})),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-3"},"\u89e3\u51b3\u65b9\u6848 3\uff1a"),(0,a.kt)("p",null,"\u5229\u7528 ref \uff0cstate \u53d1\u751f\u6539\u53d8\u540c\u65f6\u5c06\u503c\u6620\u5c04\u5230 ref\nref \u7684\u6539\u53d8\u4e0d\u4f1a\u89e6\u53d1\u9875\u9762\u66f4\u65b0\uff0c\u4f46\u5728\u5f02\u6b65\u4e2d\u4e00\u5b9a\u80fd\u62ff\u5230\u6700\u65b0\u503c\uff0c\u6240\u4ee5\u9700\u8981\u5728\u9875\u9762\u4e0a\u7528\u5c31\u4f7f\u7528 state\uff0c\u5728\u5f02\u6b65\u903b\u8f91\u4e2d\u7528\u5c31\u4f7f\u7528 ref"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState, useRef, useEffect } from "react";\n\nconst App = () => {\n  const [arr, setArr] = useState([0]);\n  let ref = useRef();\n  useEffect(() => {\n    ref.current = arr;\n    console.log(arr);\n  }, [arr]);\n\n  const handleClick = () => {\n    Promise.resolve()\n      .then(() => {\n        const now = [...ref.current, 1];\n        ref.current = now;\n        setArr(now);\n      })\n      .then(() => {\n        setArr([...ref.current, 2]);\n      });\n  };\n\n  return (\n    <>\n      <h1>{arr.toString()}</h1>\n      <button onClick={handleClick}>change</button>\n    </>\n  );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6145).Z,width:"139",height:"84"})),(0,a.kt)("h3",{id:"\u7ec8\u6781\u65b9\u6848"},"\u7ec8\u6781\u65b9\u6848\uff1a"),(0,a.kt)("p",null,"\u4e0a\u9762\u4f8b 3 \u8fd9\u7c7b\u65b9\u5f0f\u53ef\u4ee5\u81ea\u5df1\u5c01\u88c5\u4e00\u4e2a hooks \u5c06 state \u548c ref \u8fdb\u884c\u5173\u8054\uff0c\u540c\u65f6\u518d\u63d0\u4f9b\u4e00\u4e2a\u65b9\u6cd5\u4f9b\u5f02\u6b65\u4e2d\u83b7\u53d6\u6700\u65b0\u503c\u4f7f\u7528\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const useGetState = (initVal) => {\n  const [state, setState] = useState(initVal);\n  const ref = useRef(initVal);\n  const setStateCopy = (newVal) => {\n    ref.current = newVal;\n    setState(newVal);\n  };\n  const getState = () => ref.current;\n  return [state, setStateCopy, getState];\n};\n\nconst App = () => {\n  const [arr, setArr, getArr] = useGetState([0]);\n  useEffect(() => {\n    console.log(arr);\n  }, [arr]);\n\n  const handleClick = () => {\n    Promise.resolve()\n      .then(() => {\n        setArr([...getArr(), 1]);\n      })\n      .then(() => {\n        setArr([...getArr(), 2]);\n      });\n  };\n\n  return (\n    <>\n      <h1>{arr.toString()}</h1>\n      <button onClick={handleClick}>change</button>\n    </>\n  );\n};\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u770b\u8d77\u6765\u66f4\u52a0\u6613\u4e8e\u9605\u8bfb\uff0c\u5f02\u6b65\u4e2d\u83b7\u53d6\u6700\u65b0\u503c\u5c31\u901a\u8fc7\u8c03\u7528 getArr\uff0c\u540c\u65f6 ahooks \u4e2d\u4e5f\u540c\u6837\u63d0\u4f9b\u4e86\u8fd9\u79cd hooks ",(0,a.kt)("a",{parentName:"p",href:"https://ahooks.js.org/zh-CN/hooks/use-get-state/"},"https://ahooks.js.org/zh-CN/hooks/use-get-state/"),"\uff0c\u6216\u8005\u662f\u53e6\u4e00\u79cd\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://ahooks.js.org/zh-CN/hooks/use-latest/"},"https://ahooks.js.org/zh-CN/hooks/use-latest/"),"\uff0c\u5176\u539f\u7406\u90fd\u5927\u540c\u5c0f\u5f02\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u5728\u9644\u4e0a\u5b98\u65b9\u76f8\u5173\u89e3\u91ca\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function"},"\u4e3a\u4ec0\u4e48\u6211\u4f1a\u5728\u6211\u7684\u51fd\u6570\u4e2d\u770b\u5230\u9648\u65e7\u7684 props \u548c state \uff1f")))}g.isMDXComponent=!0},8074:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABFCAYAAACxDDOAAAAFKUlEQVR4Ae1cv2sUQRTOn6IgGBEiwS4WwYi2miBWChbaGPFHUgQUQYgmNrFJZRP9A5ImVrEJCNcEizTB2treduQLfOHd3NudeXe7d5vdVywzu/P7fe97MzfvcVMXLl4K/kxeBlMOwuRBAAYOREMsggPhQDTDJDTFNDsjzhsj7i0uZZ+uFpfuh6Ojo3BycnKa4h2aNzuzED6v/Q1f3oew/fZfuHnj8Vmfss3h4WGYn184K2uK1tY5j2xGbG1thZWV1TBzbTYpoJevXoeDgx99wrwyfT2sv/gdnjz4dtr+7p03Ye3pz4G+0HZ3b2/ge51CaELfJiAAxsbGRli4dbtUUDs7XwMeuUApeIICYJCX9bS2sryteTMQAAPP8vLzcHn6ap8QKaT9/e9h/cPHvjJoP8CAefq0+ic8WtwO7579GgBCa8t+25xWDgRsO8wSTAwFB62H0Jcf7p7uEQBDMoT1sE9gf+Cewu9dSM1AbG5ulpomCBFaLTdbbtLcE2iaAIYUsra3yPI2501A5GzWMEkAQgqNjOApCRu2tj9obWU/bc5nA5F7fC3abAECjqw4umogQMhd3R+w9mwgcrURR0+5P+S20/aW3LZtqFcpEMP8KJNt8COwixs1FKlSINqgmZNagwNx3u6aJqUpXRnXGdEURszNzQV/Ji8DZ0RTGNEVG9z0dTojnBHus5YsdUY4I5wRY2ME7o1yHT2WunIBbclnm6bca3AKBoLt9Xp9N7G4lT0+Ph6I7mAbXKHHvgyWFaVog2gRPMizHnweuHLHQ4cUy4ZJ4cTSrvBxawxliyNWrGNkA2GJ4tCutONvELgUHCY+DCs0HwaEhrAdeAZjp5RVQKgPIPEA3CJQMXfMBescZgwTEKNEccST04CIwYrbxO8acLHgqcmxWzbuK+cdIBT1M6p30QxEKopDM0nxImGi4HvQHEiahsft+Y72cfwUPIGMDqEGlwmQfaVSRp/Q3RvXB7tjhsd1yt4rB0ITjpwAyrFPxOE2qGNlhKaF0FgAwWC2mCFyLpY8AEAYEACJ21nnHbfHuxmIVBSHJhwOjDKAoDEBdVIgsh+m0MAYULBAhnMCmCIfOfvJScv60UxkTp+yjgmIYaM4MCCElnKFavuGnKzMF2khBMYNlWE8+Ma2KWVgvTilmYu/492qQFof2UDkHl817aA54jFTO+pBQJbgY20cLhBA8OgqQUC5FQjZF/qUbON4o+4P6CcbCA6ak1o0G/0BKPzmgHBz+mebYYKVITQL4DnzsRwwivqrBYgybY0nYqkr20KgZFi8T8h6zGMcmMaqQIBp5A+5sn2P46fSWoBIDerlg/dsDoTfvg5qRZeZ4oxoCiM8gmPyERzAwBnRFEZ02S43ae3OCGeEn5okI50RzghnxNgYYblHstSVC2hLPts05V6DUzAQbFuiOODlg3NJu1qXl38pfwtlo6XZQHQ5igNOITwQYJGnDoqH63AAowk69c0ERNejOMqAwFU8gEgJvKjcDERXozggQJooskMKdVQvXeVApPy3dJtqzpwiP7RcsMxrWgjTUUcUB0GgP1zOwzpv2ZZ5MxBdjOJgEILGBAiyihOfCYguRnHwryviIARqMtKUFZB1i/LZQOQeXzXtoDmij/m8RHHQHPHYyjQGZdT9AeBkA1GEpPbdozjstwa1AKGxQgMM3yx1ZR8exdGQSzIJShvytTCiDYIZ9xociIYwfMqDBzx4YOh7mXGbjXGM56apKaZpHGj7GOnfFc4IZ0RaS7rEpP+tu/hIIy7ZPwAAAABJRU5ErkJggg=="},717:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},1361:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},2824:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},6145:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);