!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";r.r(t),r.d(t,"t",(function(){return i})),r.d(t,"makeSprite",(function(){return n}));const i={text:e=>({type:"text",props:e}),circle:e=>({type:"circle",props:e}),rectangle:e=>({type:"rectangle",props:e}),line:e=>({type:"line",props:e}),image:e=>({type:"image",props:e}),spriteSheet:e=>({type:"spriteSheet",props:e})};function n(e){return t=>({type:"custom",spriteObj:e,props:t})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isWebInput=function(e){return"keysDown"in e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(8),n=r(0),o=r(3),s=[n.t.text({color:"black",text:"Loading..."})];i.renderCanvas(o.Game(o.gameProps),s,{imageFileNames:["bird.png"],audioFileNames:["boop.wav"]},"scale-up")},function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(4),s=r(7);t.Game=n.makeSprite({init:function(e){var t=e.device.storage.getStore();return{view:"menu",attempt:0,highScore:Number(t.highScore||"0")}},render:function(e){var t=e.state,r=e.updateState,n=e.device,a="menu"===t.view;return[o.Level({id:"level-"+t.attempt,paused:a,gameOver:function(e){r((function(t){var r=t.highScore;return e>r&&(r=e,n.storage.setStore({highScore:String(r)})),i(i({},t),{view:"menu",highScore:r})}))}}),a?s.Menu({id:"menu",highScore:t.highScore,start:function(){r((function(e){return i(i({},e),{view:"level",attempt:e.attempt+1})}))}}):null]}}),t.gameProps={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}}},function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),n=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,n++)i[n]=o[s];return i};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s=r(5),a=r(1),c=r(6);function p(e){var t=(e.size.height+2*e.size.heightMargin-2*c.pipeGap)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}function h(e,t){return e.x>t.x-t.width/2&&e.x<t.x+t.width/2&&e.y>t.y-t.height/2&&e.y<t.y+t.height/2}t.Level=o.makeSprite({init:function(e){var t=e.device;return{birdY:10,birdGravity:-12,pipes:e.props.paused?[]:[p(t)],score:0}},loop:function(e){var t=e.props,r=e.state,o=e.device;if(t.paused)return r;var d=o.inputs,u=r.birdGravity,l=r.birdY,g=r.pipes,f=r.score;return l-=u+=.8,(d.pointer.justPressed||a.isWebInput(d)&&d.keysJustPressed[" "])&&(u=-12),g[g.length-1].x<140&&(g=n(g,[p(o)]).filter((function(e){return e.x>-(o.size.width+o.size.widthMargin+c.pipeWidth)}))),function(e,t,r){if(e-s.birdHeight/2<-(t.height/2+t.heightMargin)||e+s.birdHeight/2>t.height/2+t.heightMargin)return!0;for(var i=function(r){if(r.x>0+s.birdWidth/2+c.pipeWidth/2||r.x<0-s.birdWidth/2-c.pipeWidth/2)return"continue";var i=c.getPipeYPositions(t,r.gapY),n=i.yUpperTop,o=i.yUpperBottom,a=i.yLowerTop,p=i.yLowerBottom,d={x:r.x,y:(n+o)/2,width:c.pipeWidth,height:n-o},u={x:r.x,y:(a+p)/2,width:c.pipeWidth,height:a-p};return[{x:0+s.birdWidth/2,y:e+s.birdHeight/2},{x:0+s.birdWidth/2,y:e-s.birdHeight/2},{x:0,y:e+s.birdHeight/2},{x:0,y:e-s.birdHeight/2},{x:0-s.birdWidth/2,y:e+s.birdHeight/2},{x:0-s.birdWidth/2,y:e-s.birdHeight/2}].some((function(e){return h(e,d)||h(e,u)}))?{value:!0}:void 0},n=0,o=r;n<o.length;n++){var a=o[n],p=i(a);if("object"==typeof p)return p.value}return!1}(l,o.size,g)&&(o.audio("boop.wav").play(),t.gameOver(r.score)),{birdGravity:u,birdY:l,pipes:g=g.map((function(e){var t=e.passed;return!t&&e.x<0-s.birdWidth/2-c.pipeWidth/2&&(t=!0,f++),i(i({},e),{passed:t,x:e.x-2})})),score:f}},render:function(e){var t=e.state,r=e.device,i=r.size;return n([o.t.rectangle({color:"#add8e6",width:i.width+2*i.widthMargin,height:i.height+2*i.heightMargin}),s.Bird({id:"bird",position:{x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)}})],t.pipes.map((function(e,t){return c.Pipe({id:"pipe-"+t,pipe:e,position:{x:e.x,y:0}})})),[o.t.text({text:"Score: "+t.score,color:"white",position:{x:-r.size.width/2+10,y:r.size.height/2+r.size.heightMargin-80},anchorX:-1})])}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0);t.birdWidth=50,t.birdHeight=40,t.Bird=i.makeSprite({render:function(){return[i.t.image({testId:"bird",fileName:"bird.png",width:t.birdWidth,height:t.birdHeight})]}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0);function n(e,r){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:r+t.pipeGap/2,yLowerTop:r-t.pipeGap/2,yLowerBottom:-e.height/2-e.heightMargin}}t.pipeWidth=40,t.pipeGap=170,t.Pipe=i.makeSprite({render:function(e){var r=e.props,o=n(e.device.size,r.pipe.gapY),s=o.yUpperTop,a=o.yUpperBottom,c=o.yLowerTop,p=o.yLowerBottom;return[i.t.rectangle({color:"green",width:t.pipeWidth,height:s-a,position:{x:0,y:(s+a)/2}}),i.t.rectangle({color:"green",width:t.pipeWidth,height:c-p,position:{x:0,y:(c+p)/2}})]}}),t.getPipeYPositions=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),n=r(1);t.Menu=i.makeSprite({render:function(e){var t=e.props,r=e.device.inputs;return(r.pointer.justReleased||n.isWebInput(r)&&r.keysJustPressed[" "])&&t.start(),[i.t.text({text:n.isWebInput(r)?"Click or Space Bar to Start":"Tap to Start",color:"white",position:{x:0,y:100}}),i.t.text({text:"High score: "+t.highScore,font:{name:"Courier",size:24},color:"white",position:{x:0,y:150}})]}})},function(e,t,r){"use strict";function i(e,t,r,o,p,h){const d=a(t.position),u=e.getSprites(t,r,d,o,p,h),l=[],g=u.filter(s).map(t=>{const o={...t,props:{...t.props,position:c(d,t.props.position)}};if("custom"===o.type){l.push(o.props.id);let t=!1;return e.childContainers[o.props.id]||(t=!0,e.childContainers[o.props.id]=n(o,r,e.prevTime)),i(e.childContainers[o.props.id],o.props,r,t,p,h)}return[o]});return Object.keys(e.childContainers).forEach(t=>{l.includes(t)||delete e.childContainers[t]}),g.reduce((e,t)=>e.concat(t),[])}r.r(t),r.d(t,"renderCanvas",(function(){return y}));function n(e,t,r){const{spriteObj:i,props:n}=e,o=t(n.position),s=[],a=e=>{s.push(e)};let c;return i.init&&(c=i.init({props:n,device:o,updateState:a})),{state:c,childContainers:{},prevTime:r,currentLag:0,getSprites(e,t,r,n,o,c){const p=c-this.prevTime;this.prevTime=c,this.currentLag+=p;const h=t(r);let d=0;if(this.state=s.reduce((e,t)=>t(e),this.state),s.length=0,!n&&i.loop){for(;this.currentLag>=1/60*1e3;)this.state=i.loop({props:e,state:this.state,device:h,updateState:a}),this.currentLag-=1/60*1e3;d=this.currentLag/(1/60*1e3)}let u=i[o];u||(u="renderPXL"===o&&i.renderXL?i.renderXL:i.render);const l=u({props:e,state:this.state,device:h,updateState:a,extrapolateFactor:d});return this.state=s.reduce((e,t)=>t(e),this.state),s.length=0,l}}}function o(e,t){const r=e.deviceHeight>e.deviceWidth;let i,n=!1;return"portrait"in t?(i=r?t.portrait:t.landscape,n=!0):i=t,i.minHeightXL&&e.deviceHeight>=i.minHeightXL||i.minWidthXL&&e.deviceWidth>=i.minWidthXL?n&&r?"renderPXL":"renderXL":n&&r?"renderP":"render"}function s(e){return null!==e}function a(e){return e?{...e,rotation:e.rotation||0}:{x:0,y:0,rotation:0}}function c(e,t){if(!t)return e;const{x:r,y:i,rotation:n}=a(t),o=Math.PI/180,s=-e.rotation*o;return{x:Math.round(e.x+r*Math.cos(s)-i*Math.sin(s))||0,y:Math.round(e.y+r*Math.sin(s)+i*Math.cos(s))||0,rotation:e.rotation+n}}let p={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function h(e){if(!e)return p;const t=e.x,r=e.y,{x:i,y:n}=p.pointer,o=Math.PI/180,s=-(e.rotation||0)*o;return{...p,pointer:{...p.pointer,x:(i-t)*Math.cos(s)+(n-r)*Math.sin(s),y:-(i-t)*Math.sin(s)+(n-r)*Math.cos(s)}}}function d(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),p.keysDown[e.key]=!0,p.keysJustPressed[e.key]=!0}function u(e){delete p.keysDown[e.key]}const l=Math.PI/180,g=(e,t)=>({circle(r,i){e.save();const n=r*t.anchorX,o=r*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*l),e.scale(t.scaleX,t.scaleY),e.translate(-n,o),e.beginPath(),e.arc(0,0,Math.round(r),0,2*Math.PI),e.globalAlpha=t.opacity,e.fillStyle=i,e.fill(),e.closePath(),e.restore()},rectangle(r,i,n){e.save();const o=r/2*t.anchorX,s=i/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*l),e.scale(t.scaleX,t.scaleY),e.translate(-o,s),e.globalAlpha=t.opacity,e.fillStyle=n,e.fillRect(-r/2,-i/2,r,i),e.closePath(),e.restore()},line(r,i,n){if(r.length<2)return;e.save();const[[o,s],...a]=r,{width:c,height:p}=function(e){if(e.length<2)return{width:0,height:0};let t=Number.MAX_SAFE_INTEGER,r=-Number.MAX_SAFE_INTEGER,i=Number.MAX_SAFE_INTEGER,n=-Number.MAX_SAFE_INTEGER;return e.forEach(([e,o])=>{e>r&&(r=e),e<t&&(t=e),o>n&&(n=o),o<i&&(i=o)}),{width:r-t,height:n-i}}(r),h=c/2*t.anchorX,d=p/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*l),e.scale(t.scaleX,t.scaleY),e.translate(-h,d),e.globalAlpha=t.opacity,e.strokeStyle=n,e.lineWidth=i,e.beginPath(),e.moveTo(o,-s),a.forEach(([t,r])=>{e.lineTo(t,-r)}),e.stroke(),e.restore()},text(r,i,n){e.save();const o=`${r.size}px ${r.name}`;e.font=o,e.textBaseline="middle",e.textAlign="center";const{width:s}=e.measureText(i),a=r.size,c=s/2*t.anchorX,p=a/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*l),e.scale(t.scaleX,t.scaleY),e.translate(-c,p),e.font=o,e.textBaseline="middle",e.textAlign="center",e.globalAlpha=t.opacity,e.fillStyle=n,e.fillText(i,0,0),e.restore()},image(r,i,n){e.save();const o=i/2*t.anchorX,s=n/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*l),e.scale(t.scaleX,t.scaleY),e.translate(-o,s),e.globalAlpha=t.opacity,e.drawImage(r,-i/2,-n/2,i,n),e.restore()},spriteSheet(r,i,n,o,s,a){e.save();const c=s/2*t.anchorX,p=a/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*l),e.scale(t.scaleX,t.scaleY),e.translate(-c,p),e.globalAlpha=t.opacity;const h=r.width/i,d=r.height/n,u=o%i,g=Math.floor(o/i)%n;e.drawImage(r,u*h,g*d,h,d,-s/2,-a/2,s,a),e.restore()}});let f;function v(e,t,r,i){let n;if("portrait"in i){n=t>e?i.portrait:i.landscape}else n=i;const{width:o,height:s,maxWidthMargin:a=0,maxHeightMargin:c=0}=n;if("game-coords"===r)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};const p=o/s;if(p>e/t){const r=e,i=r/p,n=i/s*c,a=Math.min(t,i+2*n);return{width:o,height:s,widthMargin:0,heightMargin:(a-i)/2*(s/i),deviceWidth:r,deviceHeight:a}}{const r=t,i=r*p,n=i/o*a,c=Math.min(e,i+2*n);return{width:o,height:s,widthMargin:(c-i)/2*(o/i),heightMargin:0,deviceWidth:c,deviceHeight:r}}}const m={name:"sans-serif",size:12};function y(e,t=[],r={},s="game-coords",a,c){var h;const l=a||document.createElement("canvas");a||document.body.appendChild(l);const y=l.getContext("2d",{alpha:!1});let x=!0;let b,M,S,P,L;function E(t){if(b&&(y.restore(),document.removeEventListener("pointerdown",M),document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",P),!0===t))return;const r=function(e,t,r,i){const n=v(e,t,r,i);return f=n,n}((null==c?void 0:c.width)||window.innerWidth,(null==c?void 0:c.height)||window.innerHeight,s,e.props.size);l.width=r.deviceWidth,l.height=r.deviceHeight;const i=e.props.defaultFont||m,n=function(e,{width:t,height:r,widthMargin:i,heightMargin:n,deviceWidth:o,deviceHeight:s},a,c){e.save();const p=Math.min(o/t,s/r),h=t+2*i,d=r+2*n;return e.translate(o/2,s/2),e.scale(p,p),{scale:p,render:t=>{e.clearRect(-o/2/p,-s/2/p,o/p,s/p),e.fillStyle="white",e.fillRect(-h/2/p,-d/2/p,h/p,d/p),t.forEach(t=>{var r,i,n;const o=t.props.position||{x:0,y:0};(function(e,t,r,i){switch(e.type){case"text":return()=>t.text(e.props.font||i,e.props.text,e.props.color);case"circle":return()=>t.circle(e.props.radius,e.props.color);case"rectangle":return()=>t.rectangle(e.props.width,e.props.height,e.props.color);case"line":return()=>t.line(e.props.path,e.props.thickness,e.props.color);case"image":return()=>t.image(r[e.props.fileName],e.props.width,e.props.height);case"spriteSheet":return()=>t.spriteSheet(r[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}})(t,g(e,{x:o.x,y:-o.y,rotation:o.rotation||0,opacity:null!==(r=t.props.opacity)&&void 0!==r?r:1,scaleX:null!==(i=t.props.scaleX)&&void 0!==i?i:1,scaleY:null!==(n=t.props.scaleY)&&void 0!==n?n:1,anchorX:t.props.anchorX||0,anchorY:t.props.anchorY||0}),a,c)()})}}}(y,r,T,i);L=n.scale,W.ref=n.render;const o=(({canvasOffsetLeft:e,widthMargin:t,scale:r,width:i})=>n=>(n.clientX-e)/r-t-i/2)({canvasOffsetLeft:l.offsetLeft,width:r.width,widthMargin:r.widthMargin,scale:L}),a=(({canvasOffsetTop:e,heightMargin:t,scale:r,height:i})=>n=>-(n.clientY-e)/r+t+i/2)({canvasOffsetTop:l.offsetTop,height:r.height,heightMargin:r.heightMargin,scale:L}),h=(e,t)=>e>r.width/2+r.widthMargin||e<-r.width/2-r.widthMargin||t>r.height/2+r.heightMargin||t<-r.height/2+r.heightMargin;M=e=>{const t=o(e),r=a(e);h(t,r)?x=!1:(x=!0,function(e,t){p.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,r))},S=e=>{const t=o(e),r=a(e);h(t,r)||function(e,t){p.pointer.x=e,p.pointer.y=t}(t,r)},P=e=>{const t=o(e),r=a(e);h(t,r)||function(e,t){p.pointer.justPressed=!1,p.pointer.pressed=!1,p.pointer.justReleased=!0,p.pointer.x=e,p.pointer.y=t}(t,r)},document.addEventListener("pointerdown",M,!1),document.addEventListener("pointermove",S,!1),document.addEventListener("pointerup",P,!1),b=r}document.addEventListener("keydown",e=>{x&&d(e)},!1),document.addEventListener("keyup",e=>{x&&u(e)},!1),window.addEventListener("resize",E,!1);const j={},T={},k={getGetDevice:w(j,v((null==c?void 0:c.width)||window.innerWidth,(null==c?void 0:c.height)||window.innerHeight,s,e.props.size))},W={ref:null};E();const{initTextures:O,getNextFrameTextures:_}=function(e,t,r){const s=t||game.Game(game.gameProps),a=e.getGetDevice(),c=a(s.props.position),p=n(s,a,0),h=r||s.props.size,d=o(c.size,h);return{initTextures:i(p,s.props,a,!0,d,0),getNextFrameTextures(t){const r=e.getGetDevice(),n=o(r(s.props.position).size,h);return i(p,s.props,r,!1,n,t)}}}(k,e);let X=null,z=0;function A(e){var t;null===(t=W.ref)||void 0===t||t.call(W,e),z=window.requestAnimationFrame(e=>{null===X&&(X=e-1/60),A(_(e-X)),p={keysDown:p.keysDown,keysJustPressed:{},pointer:{...p.pointer,justPressed:!1,justReleased:!1}}})}return null===(h=W.ref)||void 0===h||h.call(W,t),{cleanup:function(){l.width=l.width,a||document.body.removeChild(l),window.cancelAnimationFrame(z),document.removeEventListener("keydown",d,!1),document.removeEventListener("keyup",u,!1),window.removeEventListener("resize",E,!1),E(!0)},loadPromise:(async()=>{const e=[];(r.audioFileNames||[]).forEach(t=>{j[t]=new Audio(t),e.push(new Promise((e,r)=>{j[t].addEventListener("canplaythrough",e),j[t].addEventListener("error",r)})),j[t].load()}),(r.imageFileNames||[]).forEach(t=>{T[t]=new Image,e.push(new Promise((e,r)=>{T[t].addEventListener("load",e),T[t].addEventListener("error",r),T[t].src=t}))}),await Promise.all(e)})().then(()=>{const e=()=>{document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(j).forEach(e=>{e.muted=!0,e.play().then(()=>{e.pause(),e.muted=!1})})};document.addEventListener("keydown",e,!1),document.addEventListener("pointerdown",e,!1),A(O)}),audioElements:j}}function w(e,t){const r={log:console.log,random:Math.random,timeout:(e,t)=>setTimeout(e,t),audio:t=>{function r(r){let i=e[t];if(!i)throw Error("Cannot find audio file "+t);return r&&i.currentTime>0&&i.currentTime<i.duration&&(i=new Audio(t)),i}return{getPosition:()=>r(!1).currentTime,play:(e,t)=>{const i=r(!0);i.play(),e&&(i.currentTime=e),t&&(i.loop=!0)},pause:()=>{r(!1).pause()}}},network:{get:(e,t)=>{fetch(e).then(e=>e.json()).then(t)},post:(e,t,r)=>{fetch(e,{method:"POST",body:JSON.stringify(t)}).then(e=>e.json()).then(r)},put:(e,t,r)=>{fetch(e,{method:"PUT",body:JSON.stringify(t)}).then(e=>e.json()).then(r)},delete:(e,t)=>{fetch(e,{method:"DELETE"}).then(e=>e.json()).then(t)}},storage:{getStore:()=>{var e;const t={};for(let r=0;r<localStorage.length;r++){const i=localStorage.key(r);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:e=>{Object.entries(e).forEach(([e,t])=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,t)})}}};return()=>{const e={...r,size:f||t,now:()=>new Date};return t=>({...e,inputs:h(t)})}}}]);