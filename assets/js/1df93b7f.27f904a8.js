(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3237],{7093:(e,t,n)=>{var a={"./luv_letter.json":[9151,9151],"./mariage_d'amour.json":[4697,4697],"./my_heart_will_go_on.json":[2334,2334],"./summer.json":[3511,3511],"./the_truth_that_you_leave.json":[8765,8765],"./\u6674\u5929.json":[1124,1124],"./\u6c34\u8fb9\u7684\u963f\u72c4\u4e3d\u5a1c.json":[8523,8523]};function r(e){if(!n.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((()=>n.t(r,19)))}r.keys=()=>Object.keys(a),r.id=7093,e.exports=r},3979:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var a=n(7294),r=n(6010),o=n(9960),i=n(2263),l=n(7452),m=n(7462);const c={features:"features_t9lD"},d={noteBox:"noteBox_w3yj","note-anim":"note-anim_Y0E6",mindFocusBox:"mindFocusBox_tdE6",mindFocus:"mindFocus_AxDs",circle:"circle_qYbo","mind-focus-anim":"mind-focus-anim_gjly","mind-focus-anim-reverse":"mind-focus-anim-reverse_iWeY",codeLife:"codeLife_kTWa",cardBox:"cardBox_rEtZ",cardItem:"cardItem_U8VL",opposite:"opposite_q5MG",codeBg:"codeBg_t7uw"};const u="function bubbleSort(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}\n\nfunction selectionSort(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    let minIndex = i;\n    for (let j = i + 1; j < n; j++) {\n      if (arr[j] < arr[minIndex]) {\n        minIndex = j;\n      }\n    }\n    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];\n  }\n  return arr;\n}\n\nfunction insertionSort(arr) {\n  const n = arr.length;\n  for (let i = 1; i < n; i++) {\n    let key = arr[i];\n    let j = i - 1;\n    while (j >= 0 && arr[j] > key) {\n      arr[j + 1] = arr[j];\n      j--;\n    }\n    arr[j + 1] = key;\n  }\n  return arr;\n}\n\nfunction quickSort(arr) {\n  if (arr.length <= 1) {\n    return arr;\n  }\n  const pivot = arr[arr.length - 1];\n  const left = [];\n  const right = [];\n  for (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] < pivot) {\n      left.push(arr[i]);\n    } else {\n      right.push(arr[i]);\n    }\n  }\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}\n\nfunction mergeSort(arr) {\n  if (arr.length <= 1) {\n    return arr;\n  }\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\n\nfunction merge(left, right) {\n  const merged = [];\n  let i = 0;\n  let j = 0;\n  while (i < left.length && j < right.length) {\n    if (left[i] < right[j]) {\n      merged.push(left[i]);\n      i++;\n    } else {\n      merged.push(right[j]);\n      j++;\n    }\n  }\n  return [...merged, ...left.slice(i), ...right.slice(j)];\n}".split("\n").map((e=>e.replace(/^\s*$/,"\n"))),s=[7,6,5,4,3,2,1,0];function y(){const[e,t]=(0,a.useState)([]),n=(0,a.useRef)(null),r=(0,a.useRef)(0);return(0,a.useEffect)((()=>{let e=0;return function a(){n.current=window.requestAnimationFrame((()=>{Date.now()-r.current>=250&&(r.current=Date.now(),10+ ++e>u.length&&(e=0),t(u.slice(e,e+10))),a()}))}(),()=>{window.cancelAnimationFrame(n.current)}}),[]),a.createElement("div",null,e.map(((e,t)=>a.createElement("div",{key:t,className:d.item},e))))}const p=[{title:"\u97f3\u7b26\u95f4\u7684\u5931\u843d",Svg:function(){return a.createElement("div",{className:d.noteBox},[0,1,2,3,4,5,6].map((e=>{return a.createElement("div",{key:e,style:(t=e,{"--idx":t.toString()})});var t})))},description:a.createElement(a.Fragment,null,"\u4ed6\u66fe\u662f\u97f3\u7b26\u95f4\u7684\u7075\u9b42\u5f8b\u52a8\uff0c\u60a0\u626c\u65cb\u5f8b\u5728\u4ed6\u6307\u5c16\u7efd\u653e\uff0c\u7136\u800c\uff0c\u547d\u8fd0\u7684\u8c03\u5b50\u5374\u8ba9\u4ed6\u5931\u843d\u5728\u821e\u53f0\u4e4b\u5916\uff0c\u4ec5\u7559\u4e0b\u4e00\u4efd\u4e13\u6ce8\u7684\u6280\u827a\uff0c\u5b9b\u5982\u4e00\u53ea\u5b64\u72ec\u7684\u9e1f\u513f\u5728\u5e7f\u9614\u5929\u7a7a\u4e2d\u5bfb\u89c5\u5f52\u5bbf\u3002")},{title:"\u5fc3\u7075\u7684\u7126\u70b9",Svg:function(){return a.createElement("div",{className:d.mindFocusBox},a.createElement("div",{className:d.mindFocus},[0,1,2].map((e=>a.createElement("div",{key:e,className:d.circle})))))},description:a.createElement(a.Fragment,null,"\u4e0d\u8981\u8ba9\u8fc7\u53bb\u7684\u9634\u5f71\u963b\u6321\u5f53\u4e0b\u7684\u9633\u5149\uff0c\u4e5f\u4e0d\u8981\u8ba9\u672a\u6765\u7684\u5e7b\u60f3\u906e\u853d\u5f53\u4e0b\u7684\u771f\u5b9e\uff0c\u5c06\u5fc3\u7075\u7684\u7126\u70b9\u6295\u5c04\u5230\u6b64\u523b\uff0c\u611f\u53d7\u5f53\u4e0b\u7684\u7f8e\u597d\u548c\u751f\u547d\u7684\u8109\u52a8\u3002")},{title:"\u4ee3\u7801\u4eba\u751f",Svg:function(){const e=(0,a.useRef)(null),t=(0,a.useRef)(0);return(0,a.useEffect)((()=>{let n=0;return function a(){e.current=window.requestAnimationFrame((()=>{if(Date.now()-t.current>=500){t.current=Date.now(),++n>255&&(n=0);const e=Number(n).toString(2).split("").reverse().join("");s.forEach((t=>{const n=document.getElementById(`cardItem${t}`);n&&(n.style.transform=`rotateX(${180*Number(e[t]??0)}deg)`)}))}a()}))}(),()=>{window.cancelAnimationFrame(e.current)}}),[]),a.createElement("div",{className:d.codeLife},a.createElement("div",{className:d.codeBg},a.createElement(y,null)),a.createElement("div",{className:d.cardBox},s.map((e=>a.createElement("div",{id:`cardItem${e}`,key:e,className:d.cardItem},a.createElement("div",{className:d.front},"0"),a.createElement("div",{className:d.opposite},"1"))))))},description:a.createElement(a.Fragment,null,"\u751f\u547d\u5982\u4ee3\u7801\uff0c\u6ca1\u6709\u5b8c\u7f8e\u7684\u7a0b\u5e8f\uff0c\u53ea\u6709\u4e0d\u65ad\u4f18\u5316\u7684\u53ef\u80fd\u6027\uff0c\u5728\u4ee3\u7801\u7684\u4e16\u754c\u91cc\uff0c\u6bcf\u4e00\u4e2a bug \u90fd\u662f\u4e00\u6b21\u6210\u957f\u7684\u673a\u4f1a\uff0c\u6bcf\u4e00\u6b21\u91cd\u6784\u90fd\u662f\u4e00\u4e2a\u66f4\u597d\u7684\u81ea\u5df1\u3002")}];function k(e){let{title:t,Svg:n,description:o}=e;return a.createElement("div",{className:(0,r.Z)("col col--4")},a.createElement("div",{className:(0,r.Z)("text--center",c.featureSvg)},a.createElement(n,null)),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,t),a.createElement("p",null,o)))}function b(){return a.createElement("section",{className:c.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},p.map(((e,t)=>a.createElement(k,(0,m.Z)({key:t},e)))))))}const h={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",logoBox:"logoBox_GyS3",logo:"logo_Ukns",playBar:"playBar_fFRe",playBarTip:"playBarTip_jcG6",fadeOut:"fadeOut_EfHH"},f="/blog/piano/",w=["my_heart_will_go_on","the_truth_that_you_leave","luv_letter","mariage_d'amour","summer","\u6674\u5929","\u6c34\u8fb9\u7684\u963f\u72c4\u4e3d\u5a1c"];let E;const g=async e=>{const t=await n(7093)(`./${w[e??Math.floor(Math.random()*w.length)]}.json`);return E=t.default,E};function C(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}const v=[{id:1,name:"C2",keyCode:"49",key:"1",url:f+"a49.mp3",type:"white"},{id:2,name:"C#2",keyCode:"b49",key:"!",url:f+"b49.mp3",type:"black"},{id:3,name:"D2",keyCode:"50",key:"2",url:f+"a50.mp3",type:"white"},{id:4,name:"D#2",keyCode:"b50",key:"@",url:f+"b50.mp3",type:"black"},{id:5,name:"E2",keyCode:"51",key:"3",url:f+"a51.mp3",type:"white"},{id:6,name:"F2",keyCode:"52",key:"4",url:f+"a52.mp3",type:"white"},{id:7,name:"F#2",keyCode:"b52",key:"$",url:f+"b52.mp3",type:"black"},{id:8,name:"G2",keyCode:"53",key:"5",url:f+"a53.mp3",type:"white"},{id:9,name:"G#2",keyCode:"b53",key:"%",url:f+"b53.mp3",type:"black"},{id:10,name:"A2",keyCode:"54",key:"6",url:f+"a54.mp3",type:"white"},{id:11,name:"A#2",keyCode:"b54",key:"^",url:f+"b54.mp3",type:"black"},{id:12,name:"B2",keyCode:"55",key:"7",url:f+"a55.mp3",type:"white"},{id:13,name:"C3",keyCode:"56",key:"8",url:f+"a56.mp3",type:"white"},{id:14,name:"C#3",keyCode:"b56",key:"*",url:f+"b56.mp3",type:"black"},{id:15,name:"D3",keyCode:"57",key:"9",url:f+"a57.mp3",type:"white"},{id:16,name:"D#3",keyCode:"b57",key:"(",url:f+"b57.mp3",type:"black"},{id:17,name:"E3",keyCode:"48",key:"0",url:f+"a48.mp3",type:"white"},{id:18,name:"F3",keyCode:"81",key:"q",url:f+"a81.mp3",type:"white"},{id:19,name:"F#3",keyCode:"b81",key:"Q",url:f+"b81.mp3",type:"black"},{id:20,name:"G3",keyCode:"87",key:"w",url:f+"a87.mp3",type:"white"},{id:21,name:"G#3",keyCode:"b87",key:"W",url:f+"b87.mp3",type:"black"},{id:22,name:"A3",keyCode:"69",key:"e",url:f+"a69.mp3",type:"white"},{id:23,name:"A#3",keyCode:"b69",key:"E",url:f+"b69.mp3",type:"black"},{id:24,name:"B3",keyCode:"82",key:"r",url:f+"a82.mp3",type:"white"},{id:25,name:"C4",keyCode:"84",key:"t",url:f+"a84.mp3",type:"white"},{id:26,name:"C#4",keyCode:"b84",key:"T",url:f+"b84.mp3",type:"black"},{id:27,name:"D4",keyCode:"89",key:"y",url:f+"a89.mp3",type:"white"},{id:28,name:"D#4",keyCode:"b89",key:"Y",url:f+"b89.mp3",type:"black"},{id:29,name:"E4",keyCode:"85",key:"u",url:f+"a85.mp3",type:"white"},{id:30,name:"F4",keyCode:"73",key:"i",url:f+"a73.mp3",type:"white"},{id:31,name:"F#4",keyCode:"b73",key:"I",url:f+"b73.mp3",type:"black"},{id:32,name:"G4",keyCode:"79",key:"o",url:f+"a79.mp3",type:"white"},{id:33,name:"G#4",keyCode:"b79",key:"O",url:f+"b79.mp3",type:"black"},{id:34,name:"A4",keyCode:"80",key:"p",url:f+"a80.mp3",type:"white"},{id:35,name:"A#4",keyCode:"b80",key:"P",url:f+"b80.mp3",type:"black"},{id:36,name:"B4",keyCode:"65",key:"a",url:f+"a65.mp3",type:"white"},{id:37,name:"C5",keyCode:"83",key:"s",url:f+"a83.mp3",type:"white"},{id:38,name:"C#5",keyCode:"b83",key:"S",url:f+"b83.mp3",type:"black"},{id:39,name:"D5",keyCode:"68",key:"d",url:f+"a68.mp3",type:"white"},{id:40,name:"D#5",keyCode:"b68",key:"D",url:f+"b68.mp3",type:"black"},{id:41,name:"E5",keyCode:"70",key:"f",url:f+"a70.mp3",type:"white"},{id:42,name:"F5",keyCode:"71",key:"g",url:f+"a71.mp3",type:"white"},{id:43,name:"F#5",keyCode:"b71",key:"G",url:f+"b71.mp3",type:"black"},{id:44,name:"G5",keyCode:"72",key:"h",url:f+"a72.mp3",type:"white"},{id:45,name:"G#5",keyCode:"b72",key:"H",url:f+"b72.mp3",type:"black"},{id:46,name:"A5",keyCode:"74",key:"j",url:f+"a74.mp3",type:"white"},{id:47,name:"A#5",keyCode:"b74",key:"J",url:f+"b74.mp3",type:"black"},{id:48,name:"B5",keyCode:"75",key:"k",url:f+"a75.mp3",type:"white"},{id:49,name:"C6",keyCode:"76",key:"l",url:f+"a76.mp3",type:"white"},{id:50,name:"C#6",keyCode:"b76",key:"L",url:f+"b76.mp3",type:"black"},{id:51,name:"D6",keyCode:"90",key:"z",url:f+"a90.mp3",type:"white"},{id:52,name:"D#6",keyCode:"b90",key:"Z",url:f+"b90.mp3",type:"black"},{id:53,name:"E6",keyCode:"88",key:"x",url:f+"a88.mp3",type:"white"},{id:54,name:"F6",keyCode:"67",key:"c",url:f+"a67.mp3",type:"white"},{id:55,name:"F#6",keyCode:"b67",key:"C",url:f+"b67.mp3",type:"black"},{id:56,name:"G6",keyCode:"86",key:"v",url:f+"a86.mp3",type:"white"},{id:57,name:"G#6",keyCode:"b86",key:"V",url:f+"b86.mp3",type:"black"},{id:58,name:"A6",keyCode:"66",key:"b",url:f+"a66.mp3",type:"white"},{id:59,name:"A#6",keyCode:"b66",key:"B",url:f+"b66.mp3",type:"black"},{id:60,name:"B6",keyCode:"78",key:"n",url:f+"a78.mp3",type:"white"},{id:61,name:"C7",keyCode:"77",key:"m",url:f+"a77.mp3",type:"white"}],_=()=>{v.forEach(((e,t)=>{document.getElementById(e.name).classList.remove(`key-${t%12+1}-active`)}))},B=e=>{const t=v.find((t=>t.key===e.key));if(!t)return;const n=new MouseEvent(C()?"touchstart":"mousedown",{bubbles:!0,cancelable:!0,view:window,button:0});document.getElementById(t.name).dispatchEvent(n)},j=e=>{const t=v.find((t=>t.key===e.key));if(!t)return;const n=new MouseEvent(C()?"touchend":"mouseup",{bubbles:!0,cancelable:!0,view:window,button:0});document.getElementById(t.name).dispatchEvent(n)},N=(0,a.memo)((function(e){const t=(0,a.useRef)(null),n=(0,a.useRef)({});const o=(e,a)=>{document.getElementById(e.name).classList.add(`key-${a}-active`),function(e){if(n.current[e]){const a=t.current.createBufferSource();a.buffer=n.current[e],a.connect(t.current.destination),a.start()}}(e.name)},i=(0,a.useRef)(),[l,m]=(0,a.useState)(!1),[c,d]=(0,a.useState)(v.map((e=>({...e,load:!1}))));return(0,a.useEffect)((()=>(m(C()),window.playPiano=()=>{clearTimeout(i.current),(e=>{const t=[...e.notes],n=Date.now(),a=C(),r=()=>{0!==t.length?(t.slice(0,20).forEach((e=>{if(Date.now()-n>=1e3*e.time){const n=new MouseEvent(a?"touchstart":"mousedown",{bubbles:!0,cancelable:!0,view:window,button:0}),r=new MouseEvent(a?"touchend":"mouseup",{bubbles:!0,cancelable:!0,view:window,button:0});document.getElementById(e.name)?.dispatchEvent?.(n),setTimeout((()=>{document.getElementById(e.name)?.dispatchEvent?.(r)}),80),t.shift()}})),i.current=setTimeout(r,28)):g(Number(localStorage.getItem("playIndex"))).then((()=>{i.current=setTimeout((()=>{window.playPiano()}),1e3)}))};r()})(E);const e=Number(localStorage.getItem("playIndex"))+1;localStorage.setItem("playIndex",e>=w.length?"0":e.toString())},()=>{clearTimeout(i.current)})),[]),(0,a.useEffect)((()=>{t.current=new(window.AudioContext||window.webkitAudioContext),Promise.all([...v.map((e=>{return a=e.name,r=e.url,new Promise(((e,o)=>{fetch(r).then((e=>e.arrayBuffer())).then((e=>t.current.decodeAudioData(e))).then((t=>{n.current[a]=t,d((e=>e.map((e=>e.name===a?{...e,load:!0}:e)))),e(!0)})).catch((e=>{console.error("Failed to load audio sample:",e),o(e)}))}));var a,r})),g(Number(localStorage.getItem("playIndex")))]).then((()=>{console.log("All audio samples loaded."),e.setPianoIsReady(!0)})).catch((e=>{console.error("Failed to load audio samples:",e)}));const a=C();return a||document.addEventListener("mouseup",_),a&&document.addEventListener("touchend",_),document.addEventListener("keydown",B),document.addEventListener("keyup",j),()=>{a||document.removeEventListener("mouseup",_),a&&document.removeEventListener("touchend",_),document.removeEventListener("keydown",B),document.removeEventListener("keyup",j)}}),[]),a.createElement("div",{className:"piano-box"},a.createElement("section",{className:"piano",id:"piano"},c.map(((e,t)=>a.createElement("button",{id:e.name,style:e.load?void 0:{display:"none"},onMouseDown:l?void 0:()=>o(e,t%12+1),onTouchStart:l?()=>o(e,t%12+1):void 0,key:e.id,type:"button",tabIndex:-1,className:(0,r.Z)("key-"+(t%12+1),{"key-last":t===c.length-1}),title:e.name})))))}));function S(){const{siteConfig:e}=(0,i.Z)(),[t,n]=(0,a.useState)(!1),[l,m]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1);return a.createElement("header",{className:(0,r.Z)(h.heroBanner)},a.createElement("div",{className:"container"},a.createElement("section",{className:h.logoBox},a.createElement("div",{className:h.logo},a.createElement(N,{setPianoIsReady:m}),c?a.createElement("section",{className:(0,r.Z)(h.playBarTip,h.playBar)},a.createElement("p",null,"\u6309\u952e\u6216\u8005\u9f20\u6807\u70b9\u51fb\u53ef\u5f39\u594f\u54e6\uff5e")):a.createElement("section",{className:(0,r.Z)({hide:t||!l},h.playBar)},a.createElement("p",null,"\u594f\u4e50\uff1f\u5237\u65b0\u9875\u9762\u80fd\u5207\u6b4c\uff5e"),a.createElement("div",null,a.createElement("button",{onClick:()=>{n(!0),window.playPiano()}},"\u7ed9\u6715\u5f39\u4e00\u4e2a"),a.createElement("button",{onClick:()=>d(!0)},"\u6211\u8981\u81ea\u5df1\u5f39")))),a.createElement("h1",{className:(0,r.Z)("hero__title")},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:h.buttons},a.createElement(o.Z,{className:"button button--secondary button--lg",to:"/HTML"},"\u9605\u8bfb\u6587\u6863\u2192")))))}function x(){const{siteConfig:e}=(0,i.Z)();return a.createElement(l.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},a.createElement(S,null),a.createElement("main",null,a.createElement(b,null)))}}}]);