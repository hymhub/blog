"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},l="Node",i={unversionedId:"\u4ee3\u7801\u901f\u67e5/Node",id:"\u4ee3\u7801\u901f\u67e5/Node",title:"Node",description:"\u7ec8\u7aef\u5f69\u8272\u6587\u5b57\u6253\u5370",source:"@site/docs/\u4ee3\u7801\u901f\u67e5/Node.md",sourceDirName:"\u4ee3\u7801\u901f\u67e5",slug:"/\u4ee3\u7801\u901f\u67e5/Node",permalink:"/blog/\u4ee3\u7801\u901f\u67e5/Node",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/blog/\u4ee3\u7801\u901f\u67e5/JavaScript"},next:{title:"Other",permalink:"/blog/\u4ee3\u7801\u901f\u67e5/Other"}},c={},s=[{value:"\u7ec8\u7aef\u5f69\u8272\u6587\u5b57\u6253\u5370",id:"\u7ec8\u7aef\u5f69\u8272\u6587\u5b57\u6253\u5370",level:2},{value:"\u7b80\u6613\u9012\u5f52\u8bfb\u53d6\u6587\u4ef6\u8def\u5f84",id:"\u7b80\u6613\u9012\u5f52\u8bfb\u53d6\u6587\u4ef6\u8def\u5f84",level:2},{value:"\u7b80\u6613\u9012\u5f52\u5220\u9664\u6587\u4ef6\u5939",id:"\u7b80\u6613\u9012\u5f52\u5220\u9664\u6587\u4ef6\u5939",level:2},{value:"\u68c0\u6d4b\u6587\u4ef6/\u6587\u4ef6\u5939\u662f\u5426\u5b58\u5728\u3001\u83b7\u53d6\u6587\u4ef6\u540d\u3001\u540e\u7f00\u540d",id:"\u68c0\u6d4b\u6587\u4ef6\u6587\u4ef6\u5939\u662f\u5426\u5b58\u5728\u83b7\u53d6\u6587\u4ef6\u540d\u540e\u7f00\u540d",level:2},{value:"\u81ea\u52a8\u6839\u636e\u8def\u5f84\u521b\u5efa\u6587\u4ef6\u5939\u548c\u7236\u6587\u4ef6\u5939\uff0c\u5df2\u5b58\u5728\u5219\u76f4\u63a5\u8fd4\u56de",id:"\u81ea\u52a8\u6839\u636e\u8def\u5f84\u521b\u5efa\u6587\u4ef6\u5939\u548c\u7236\u6587\u4ef6\u5939\u5df2\u5b58\u5728\u5219\u76f4\u63a5\u8fd4\u56de",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node"},"Node"),(0,o.kt)("h2",{id:"\u7ec8\u7aef\u5f69\u8272\u6587\u5b57\u6253\u5370"},"\u7ec8\u7aef\u5f69\u8272\u6587\u5b57\u6253\u5370"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'console.blue = (...msg) => console.log("\\x1b[34m%s\\x1b[0m", ...msg);\nconsole.yellow = (...msg) => console.log("\\x1b[33m%s\\x1b[0m", ...msg);\nconsole.red = (...msg) => console.log("\\x1b[31m%s\\x1b[0m", ...msg);\nconsole.green = (...msg) => console.log("\\x1b[32m%s\\x1b[0m", ...msg);\n')),(0,o.kt)("h2",{id:"\u7b80\u6613\u9012\u5f52\u8bfb\u53d6\u6587\u4ef6\u8def\u5f84"},"\u7b80\u6613\u9012\u5f52\u8bfb\u53d6\u6587\u4ef6\u8def\u5f84"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n *\n * @param {string} entry\n * @param {boolean} deep\n * @returns {string[]}\n */\nconst getFilePaths = (entry, deep) => {\n  const result = [];\n  const readDir = (entry) => {\n    const dirInfo = fs.readdirSync(entry);\n    for (let j = 0; j < dirInfo.length; j++) {\n      const item = dirInfo[j]; // item \u5373\u6587\u4ef6/\u6587\u4ef6\u5939\u540d\n      const location = path.join(entry, item);\n      const info = fs.statSync(location);\n      if (info.isDirectory()) {\n        deep && readDir(location);\n      } else {\n        result.push(location);\n      }\n    }\n  };\n  readDir(entry);\n  return result;\n};\n")),(0,o.kt)("h2",{id:"\u7b80\u6613\u9012\u5f52\u5220\u9664\u6587\u4ef6\u5939"},"\u7b80\u6613\u9012\u5f52\u5220\u9664\u6587\u4ef6\u5939"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const deleteFolderRecursive = (folderPath) => {\n  if (fs.existsSync(folderPath)) {\n    fs.readdirSync(folderPath).forEach((file) => {\n      const curPath = path.join(folderPath, file);\n      if (fs.lstatSync(curPath).isDirectory()) {\n        // \u5982\u679c\u662f\u5b50\u6587\u4ef6\u5939\uff0c\u9012\u5f52\u5220\u9664\n        deleteFolderRecursive(curPath);\n      } else {\n        // \u5982\u679c\u662f\u6587\u4ef6\uff0c\u76f4\u63a5\u5220\u9664\n        fs.unlinkSync(curPath);\n      }\n    });\n    // \u5220\u9664\u7a7a\u6587\u4ef6\u5939\n    fs.rmdirSync(folderPath);\n  }\n}\n// \u7b80\u5355\u5185\u7f6e\u65b9\u6cd5\nfs.rmSync(folderPath, { recursive: true })\n")),(0,o.kt)("h2",{id:"\u68c0\u6d4b\u6587\u4ef6\u6587\u4ef6\u5939\u662f\u5426\u5b58\u5728\u83b7\u53d6\u6587\u4ef6\u540d\u540e\u7f00\u540d"},"\u68c0\u6d4b\u6587\u4ef6/\u6587\u4ef6\u5939\u662f\u5426\u5b58\u5728\u3001\u83b7\u53d6\u6587\u4ef6\u540d\u3001\u540e\u7f00\u540d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const filePath = '/path/to/your/file.txt';\nfs.existsSync(filePath) // true|false\npath.basename(filePath) // file.txt\npath.basename(filePath, '.txt') // file\npath.extname(filePath) // .txt\n")),(0,o.kt)("h2",{id:"\u81ea\u52a8\u6839\u636e\u8def\u5f84\u521b\u5efa\u6587\u4ef6\u5939\u548c\u7236\u6587\u4ef6\u5939\u5df2\u5b58\u5728\u5219\u76f4\u63a5\u8fd4\u56de"},"\u81ea\u52a8\u6839\u636e\u8def\u5f84\u521b\u5efa\u6587\u4ef6\u5939\u548c\u7236\u6587\u4ef6\u5939\uff0c\u5df2\u5b58\u5728\u5219\u76f4\u63a5\u8fd4\u56de"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"fs.mkdirSync('aa/bb/cc', { recursive: true })\n")))}d.isMDXComponent=!0}}]);