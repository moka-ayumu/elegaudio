(this.webpackJsonpelegaudio=this.webpackJsonpelegaudio||[]).push([[0],{12:function(e,t,r){},331:function(e,t,r){"use strict";r.r(t);var c=r(1),i=r.n(c),a=r(37),n=r.n(a),s=(r(46),r(4)),o=r(335),l=(r(47),r(48),r(0));var u=function(e){var t=e.src,r=e.width,i=e.height,a=e.barGap,n=void 0===a?1:a,o=e.barWidth,u=void 0===o?3:o,h=e.color,d=void 0===h?"#FFF587":h,j=e.playColor,b=void 0===j?"#FF665A":j,f=e.hoverColor,p=void 0===f?"#FF8C64":f,g=e.origin,O=void 0===g?"bottom":g,x=e.side,m=void 0===x?"side":x,v=e.audioRef,y=Object(c.useRef)(null),w=Object(c.useRef)(null),C=Object(c.useRef)(null),N=Object(c.useRef)(new Audio),R=Object(c.useRef)(new Path2D),F=Object(c.useState)(!1),A=Object(s.a)(F,2),E=A[0],B=A[1],k=Object(c.useState)(!1),G=Object(s.a)(k,2),L=(G[0],G[1]),S=Object(c.useCallback)((function(e,t,c){var a=e.getContext("2d");if(null!==a)switch(a.fillStyle=c,O){case"top":case"bottom":a.fillRect(0,0,r*t,i);break;case"left":case"right":a.fillRect(0,0,r,i*t)}}),[O,r,i]);Object(c.useEffect)((function(){void 0!==v&&(N.current instanceof Audio?N.current=v.current:v.current=N.current)}),[v]),Object(c.useEffect)((function(){N.current.addEventListener("timeupdate",(function(){if(null!==w.current){var e=N.current.currentTime/N.current.duration;T(w.current),S(w.current,e,b),e>=1&&L(!1)}}))}),[S,b]);var W=Object(c.useCallback)((function(e){try{var t=e.slice(0),c=_(y),a=Object(s.a)(c,2),o=a[0],l=a[1],h=_(w),j=Object(s.a)(h,2),b=j[0],f=j[1],p=_(C),g=Object(s.a)(p,2),x=g[0],v=g[1],F="bottom"===O||"top"===O?r/(u+n):i/(u+n);U(o,b,x);var A=new Blob([t],{type:"audio/wav"}),E=URL.createObjectURL(A);N.current.src=E,(new AudioContext).decodeAudioData(t).then((function(e){for(var t=e.getChannelData(0),c=[],a=Math.ceil(e.length/F),s=0;s<e.length;s+=a){var h=t.slice(s,s+a-1);c.push(h.reduce((function(e,t){return Math.abs(e)+Math.abs(t)}))/h.length)}var j=Math.max.apply(Math,c);R.current=new Path2D;for(var b=0,p=c.length;b<p;b++){var g=c[b]/j;switch(O){case"bottom":R.current.rect((u+n)*b,"side"===m?i*(1-g):i*(1-g)/2,u,i*g);break;case"top":R.current.rect((u+n)*b,"side"===m?0:i*(1-g)/2,u,i*g);break;case"left":R.current.rect("side"===m?0:r*(1-g)/2,(u+n)*b,r*g,u);break;case"right":R.current.rect("side"===m?r*(1-g):r*(1-g)/2,(u+n)*b,r*g,u)}}v.clip(R.current,"evenodd"),f.clip(R.current,"evenodd"),l.clip(R.current,"evenodd"),S(o,1,d),B(!0)}))}catch(k){}}),[n,u,O,S,m,d,r,i]),M=Object(c.useCallback)((function(e){e.startsWith("./")&&(e=new URL(e,document.baseURI).href),fetch(e).then((function(e){return e.arrayBuffer()})).then((function(e){W(e)}))}),[W]);Object(c.useEffect)((function(){switch(B(!1),L(!1),N.current.currentTime=0,typeof t){case"string":M(t);break;case"object":t instanceof ArrayBuffer&&W(t)}}),[M,W,t]);var _=function(e){var t=e.current;if(null!==t){var r=t.getContext("2d");if(null!==r)return[t,r];throw new Error("2dctxnull")}throw new Error("canvasnull")},T=function(){for(var e=0,t=arguments.length;e<t;e++)for(var r=e<0||arguments.length<=e?void 0:arguments[e],c=r.getContext("2d"),i=0;i<10;i++)null===c||void 0===c||c.clearRect(0,0,r.width,r.height)},U=function(){for(var e=0,t=arguments.length;e<t;e++){var r=e<0||arguments.length<=e?void 0:arguments[e],c=r.width;r.width=c}};return Object(l.jsxs)("div",{className:"elegaudio_main",children:[E?Object(l.jsx)(l.Fragment,{}):Object(l.jsx)("div",{className:"elegaudio_loading"}),Object(l.jsx)("div",{className:E?"":"eleagudio_disabled",children:Object(l.jsxs)("div",{style:{width:r,height:i,margin:"auto"},onMouseUp:function(e){var t=e.target.getBoundingClientRect(),c="bottom"===O||"top"===O?e.clientX-t.x:e.clientY-t.y;if(c=c<0?0:c,null!==w.current&&null!==C.current){C.current;var a="bottom"===O||"top"===O?c/r:c/i;N.current.currentTime=N.current.duration*a,T(w.current)}},onMouseMove:function(e){var t=e.target.getBoundingClientRect(),c="bottom"===O||"top"===O?e.clientX-t.x:e.clientY-t.y;if(c=c<0?0:c,null!==C.current){var a=C.current,n="bottom"===O||"top"===O?c/r:c/i;T(a),S(a,n,p)}},onMouseLeave:function(e){null!==C.current&&T(C.current)},children:[Object(l.jsx)("canvas",{width:r,height:i,className:"elegaudio_overlayCanvas elegaudio_hoverCanvas",ref:C}),Object(l.jsx)("canvas",{width:r,height:i,className:"elegaudio_overlayCanvas",ref:w}),Object(l.jsx)("canvas",{width:r,height:i,className:"elegaudio_backgroundCanvas",ref:y})]})})]})},h=r(334);r(12);var d=function(e){var t=e.i,r=e.set;return Object(l.jsxs)("div",{className:"range high",children:[Object(l.jsx)("label",{className:"inputTitle",htmlFor:t[0],children:t[0]}),Object(l.jsx)("input",{name:t[0],type:"range",min:"1",max:t[2],defaultValue:t[1],onMouseUp:function(e){r[1](Number(e.target.value))}}),Object(l.jsx)("label",{htmlFor:t[0],children:r[0]})]})};var j=function(e){var t=e.i,r=e.set,c=(Math.random()+1).toString(36).substring(7);return Object(l.jsx)("form",{className:"radio high",onChange:function(e){r[1](e.target.value)},children:t.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{name:c,type:"radio",defaultChecked:e===r[0],id:e,value:e}),Object(l.jsx)("label",{htmlFor:e,children:e})]})}))})};var b=function(e){var t=e.i,r=e.set;return Object(l.jsxs)("div",{className:"color high",children:[Object(l.jsx)("label",{className:"inputTitle",htmlFor:t,children:t}),Object(l.jsx)("input",{name:t,type:"color",value:r[0],onChange:function(e){r[1](e.target.value.toUpperCase())}}),Object(l.jsx)("label",{htmlFor:t,children:r[0]})]})};var f=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),r=t[0],i=t[1],a=Object(c.useState)(!1),n=Object(s.a)(a,2),f=n[0],p=n[1],g=Object(c.useRef)(new Audio),O=Object(c.useState)(1e3),x=Object(c.useState)(80),m=Object(c.useState)(4),v=Object(c.useState)(5),y=Object(c.useState)("bottom"),w=Object(c.useState)("center"),C=Object(c.useState)("#FFF587"),N=Object(c.useState)("#FF665A"),R=Object(c.useState)("#FF8C64");return Object(c.useEffect)((function(){return p(!1)}),[r,O[0],x[0],m[0],v[0],y[0]]),Object(c.useEffect)((function(){g.current.addEventListener("play",(function(){p(!0)})),g.current.addEventListener("pause",(function(){p(!1)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("img",{src:"./logo.png",className:"logo",alt:"logo"}),Object(l.jsxs)("h1",{className:"center",children:["Elegaudio"," ",Object(l.jsx)("a",{href:"https://github.com/moka-ayumu/elegaudio",target:"_blank",rel:"noopener noreferrer",children:"Github"})]}),Object(l.jsx)("h2",{children:"How to import the component"}),Object(l.jsx)(o.a,{language:"typescript",style:h.a,showLineNumbers:!0,children:'import { Elegaudio } from "elegaudio";'}),Object(l.jsx)("h2",{children:"Audio file for examples"}),Object(l.jsx)("input",{type:"file",accept:"audio/*",onChange:function(e){if(null!==e.target.files){var t=e.target.files.item(0);null!==t&&t.type.startsWith("audio/")&&t.arrayBuffer().then((function(e){return i(e)}))}}}),Object(l.jsx)("h2",{children:"Playground"}),Object(l.jsxs)("div",{className:"center flex",children:[Object(l.jsx)(d,{i:["width","1000","1000"],set:O}),Object(l.jsx)(d,{i:["height","80","1000"],set:x}),Object(l.jsx)(d,{i:["barWidth","3","20"],set:m}),Object(l.jsx)(d,{i:["barGap","1","20"],set:v}),Object(l.jsx)(b,{i:"color",set:C}),Object(l.jsx)(b,{i:"playColor",set:N}),Object(l.jsx)(b,{i:"hoverColor",set:R}),Object(l.jsx)(j,{i:["bottom","top","left","right"],set:y}),Object(l.jsx)(j,{i:["side","center"],set:w})]}),Object(l.jsx)(o.a,{language:"jsx",style:h.a,showLineNumbers:!0,children:'<Elegaudio src="./sample.mp3" width={'.concat(O[0],"} height={").concat(x[0],"} barWidth={").concat(m[0],"} barGap={").concat(v[0],'} origin="').concat(y[0],'" side="').concat(w[0],'" color="').concat(C[0],'" hoverColor="').concat(R[0],'" playColor="').concat(N[0],'"/>')}),Object(l.jsx)(u,{src:void 0===r?"./sample.mp3":r,width:O[0],height:x[0],barWidth:m[0],barGap:v[0],origin:y[0],side:w[0],color:C[0],hoverColor:R[0],playColor:N[0],audioRef:g}),Object(l.jsx)("h2",{children:"src"}),Object(l.jsx)("p",{children:"src allowed string as url or ArrayBuffer"}),Object(l.jsx)("p",{children:"Don't try ArrayBuffer.slice in direct. Because it creates a new object for each re-render, it throws an unexpected error."}),Object(l.jsx)(o.a,{language:"jsx",style:h.a,showLineNumbers:!0,wrapLines:!0,lineProps:function(e){return{style:{textDecoration:1===e?"line-through":""}}},children:"<Elegaudio src={arrayBuffer.slice(0)} .../>\n//This can't"}),Object(l.jsx)("h2",{children:"width"}),Object(l.jsx)("p",{children:"type: number"}),Object(l.jsx)("h2",{children:"height"}),Object(l.jsx)("p",{children:"type: number"}),Object(l.jsx)("h2",{children:"barWidth"}),Object(l.jsx)("p",{children:"type: number"}),Object(l.jsx)("h2",{children:"barGap"}),Object(l.jsx)("p",{children:"type: number"}),Object(l.jsx)("h2",{children:"origin"}),Object(l.jsx)("p",{children:'type: "bottom" | "top" | "left" | "right"'}),Object(l.jsx)("h2",{children:"audioRef"}),Object(l.jsxs)("p",{children:["type: React.MutableRefObject","<any>"]}),Object(l.jsx)("p",{children:"This uses the ref of Audio type when inputted. However, if there is no other type of ref or input, it creates its own Audio and returns the corresponding ref."}),Object(l.jsx)("h2",{children:"side"}),Object(l.jsx)("p",{children:'type: "side" | "center"'}),Object(l.jsx)("div",{onClick:function(){f?g.current.pause():g.current.play()},className:"playbtn",children:Object(l.jsx)("svg",{width:"50",height:"50",viewBox:"0 0 500 500",fill:"#9fc0fc",children:f?Object(l.jsxs)("g",{children:[Object(l.jsx)("rect",{x:"120",y:"45",width:"70",height:"426",rx:"20",ry:"20"}),Object(l.jsx)("rect",{x:"320",y:"45",width:"70",height:"426",rx:"20",ry:"20"})]}):Object(l.jsx)("path",{d:"M449.644,224.019a30,30,0,0,1,0,51.962l-316.88,182.95a30,30,0,0,1-45-25.98V67.049a30,30,0,0,1,45-25.981Z"})})}),Object(l.jsx)(o.a,{language:"jsx",style:h.a,showLineNumbers:!0,children:'<Elegaudio src="./sample.mp3" width={80} height={500} barWidth={3} barGap={1} origin="left"/>'}),Object(l.jsxs)("div",{className:"vertical",children:[Object(l.jsx)(u,{src:void 0===r?"./sample.mp3":r,width:80,height:500,barWidth:3,barGap:1,origin:"left",side:"side",audioRef:g}),Object(l.jsx)(u,{src:void 0===r?"./sample.mp3":r,width:80,height:500,barWidth:3,barGap:1,origin:"left",side:"center",audioRef:g})]}),Object(l.jsx)(o.a,{language:"jsx",style:h.a,showLineNumbers:!0,children:'<Elegaudio src="./sample.mp3" width={1000} height={80} barWidth={3} barGap={1} origin="bottom" side="side"/>'}),Object(l.jsx)(u,{src:void 0===r?"./sample.mp3":r,width:1e3,height:80,barWidth:3,barGap:1,origin:"bottom",side:"side",audioRef:g}),Object(l.jsx)(o.a,{language:"jsx",style:h.a,showLineNumbers:!0,children:'<Elegaudio src="./sample.mp3" width={1000} height={80} barWidth={3} barGap={1} origin="bottom" side="center"/>'}),Object(l.jsx)(u,{src:void 0===r?"./sample.mp3":r,width:1e3,height:80,barWidth:3,barGap:1,origin:"bottom",side:"center",audioRef:g}),Object(l.jsx)("h1",{children:"color, playColor, hoverColor"}),Object(l.jsx)("p",{children:"type: string | CanvasGradient | CanvasPattern"}),Object(l.jsx)(o.a,{language:"jsx",style:h.a,showLineNumbers:!0,children:'<Elegaudio src="./sample.mp3" width={1000} height={80} barWidth={3} barGap={1} color="#B4BFBA" playColor="#545957" hoverColor="#98A6A0"/>'}),Object(l.jsx)(u,{src:void 0===r?"./sample.mp3":r,width:1e3,height:80,barWidth:3,barGap:1,color:"#B4BFBA",playColor:"#545957",hoverColor:"#98A6A0",audioRef:g}),Object(l.jsx)("a",{href:"/license.html",target:"_blank",style:{marginTop:"10rem",marginLeft:"auto"},children:"site license"})]})};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){}},[[331,1,2]]]);
//# sourceMappingURL=main.c947564d.chunk.js.map