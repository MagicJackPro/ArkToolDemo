(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{246:function(e,t,a){"use strict";var n=a(25);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(43)),r=a(35),o=n(a(119));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.makeStyles)(e,(0,i.default)({defaultTheme:o.default},t))};t.default=l},329:function(e,t,a){"use strict";var n=a(330),i="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var a,r,o,l,s,c=!1;t||(t={}),t.debug;try{if(r=n(),o=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(a){a.stopPropagation(),t.format&&(a.preventDefault(),a.clipboardData.clearData(),a.clipboardData.setData(t.format,e))}),document.body.appendChild(s),o.selectNodeContents(s),l.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(u){try{window.clipboardData.setData(t.format||"text",e),c=!0}catch(u){a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:i),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(o):l.removeAllRanges()),s&&document.body.removeChild(s),r()}return c}},330:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},420:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(24)).default)(i.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=r},668:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),o=a.n(r),l=(a(3),a(4)),s=a(6),c=o.a.forwardRef(function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,s=e.classes,c=e.className,u=Object(i.a)(e,["disableSpacing","classes","className"]);return o.a.createElement("div",Object(n.a)({className:Object(l.a)(s.root,c,!r&&s.spacing),ref:t},u))});t.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(c)},742:function(e){e.exports={"002_amiya":["1+","1","2","winter1"],"004_mon3tr":["1"],"009_12fce":["1"],"010_chen":["1","2","nian2"],"017_huang":["1","2"],"101_sora":["1","2","summer1"],"102_texas":["1","2","winter1"],"103_angel":["1","2","kfc1","wild1"],"105_emperor":["1"],"106_franka":["1","2"],"107_liskam":["1","2","nian1","nian2"],"108_silent":["1","2","sweep1"],"109_fmout":["1","2"],"110_deepcl":["1","2"],"112_siege":["1","2","wild2"],"115_headbr":["1","2"],"117_myrrh":["1","2","wild1"],"118_yuki":["1","2"],"120_hibisc":["1","nian1"],"121_lava":["1"],"122_beagle":["1"],"123_fang":["1","winter1"],"124_kroos":["1","witch1"],"126_shotst":["1","2"],"127_estell":["1","2"],"128_plosis":["1","2"],"129_bluep":["1","2"],"130_doberm":["1","2"],"131_flameb":["1","2"],"133_mm":["1","2"],"134_ifrit":["1","2","kfc1","summer1"],"136_hsguma":["1","2"],"137_brownb":["1","2"],"140_whitew":["1","2"],"141_nights":["1","2"],"143_ghost":["1","2","winter1"],"144_red":["1","2"],"145_prove":["1","2"],"147_shining":["1","2","summer1"],"148_nearl":["1","2"],"149_scave":["1","2"],"1505_frstar":["1"],"150_snakek":["1","2","wild1"],"151_myrtle":["1","2"],"155_tiger":["1","2"],"158_milu":["1","2","wild2"],"163_hpsts":["1","2"],"164_nightm":["1","2"],"166_skfire":["1","2","summer1"],"171_bldsk":["1","2","witch1"],"172_svrash":["1","2","snow1"],"173_slchan":["1","2","wild1"],"174_slbell":["1","2","snow1"],"179_cgbird":["1","2","witch1"],"180_amgoat":["1","2"],"181_flower":["1","2","daily1"],"183_skgoat":["1","2"],"185_frncat":["1","2"],"187_ccheal":["1","2"],"188_helage":["1","2"],"190_clour":["1","2"],"192_falco":["1"],"193_frostl":["1","2"],"195_glassb":["1","2"],"196_sunbr":["1","2","summer1"],"198_blackd":["1","2","winter1"],"199_yak":["1","2","summer1"],"2014_nian":["1","2"],"201_moeshd":["1","2","kfc1"],"202_demkni":["1","2"],"204_platnm":["1","2"],"208_melan":["1","epoque1"],"209_ardign":["1","snow1"],"210_stward":["1"],"211_adnach":["1"],"212_ansel":["1","summer1"],"213_mostma":["1","2"],"215_mantic":["1","2"],"219_meteo":["1","2","sweep1"],"220_grani":["1","2"],"225_haak":["1","2"],"226_hmau":["1","2"],"230_savage":["1","2"],"235_jesica":["1","2","nian1","nian2","sweep1","wild2"],"236_rope":["1","2","witch1"],"237_gravel":["1","2"],"240_wyvern":["1"],"241_panda":["1","2","marthe1"],"242_otter":["1","2"],"243_waaifu":["1","2"],"248_mgllan":["1","2"],"253_greyy":["1","2"],"260_durnar":["1","2"],"261_sddrag":["1","2"],"263_skadi":["1","2"],"274_astesi":["1","2"],"275_breeze":["1","2"],"277_sqrrel":["1","2"],"278_orchid":["1"],"279_excu":["1","2"],"281_popka":["1"],"282_catap":["1"],"283_midn":["1"],"284_spot":["1","otaku1"],"285_medic2":["1"],"286_cast3":["1","summer1"],"289_gyuki":["1","2"],"290_vigna":["1","2","summer1"],"291_aglina":["1","2"],"298_susuro":["1","2"],"302_glaze":["1","2"],"308_swire":["1","2","nian2"],"325_bison":["1","2"],"326_glacus":["1","2"],"340_shwaz":["1","2","snow1"],"348_ceylon":["1","2"],"355_ethan":["1","2"],"356_broca":["1","2"],"367_swllow":["1","2"],"383_snsant":["1","2"],"500_noirc":["1"],"501_durin":["1"],"502_nblade":["1"],"503_rang":["1"]}},743:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(24)).default)(i.default.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.default=r},744:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(24)).default)(i.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.default=r},883:function(e,t,a){"use strict";a.r(t);var n=a(78),i=a(73),r=a(34),o=a(76),l=a(74),s=a(75),c=a(0),u=a.n(c),d=a(77),h=a.n(d),p=a(742),g=a(246),m=a.n(g);function f(e,t,a,n,i,r){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return function(e,t,a,n,i){for(var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=n.length,l=Math.floor(o/2),s=r||new Float32Array(t*a*4),c=i?1:0,u=0;u<a;u++)for(var d=0;d<t;d++){for(var h=u,p=d,g=4*(u*t+d),m=0,f=0,v=0,y=0,_=0;_<o;_++){var b=4*(h*t+Math.min(t-1,Math.max(0,p+_-l))),x=n[_];m+=e[b]*x,f+=e[b+1]*x,v+=e[b+2]*x,y+=e[b+3]*x}s[g]=m,s[g+1]=f,s[g+2]=v,s[g+3]=y+c*(255-y)}return s}(function(e,t,a,n,i){for(var r=n.length,o=Math.floor(r/2),l=new Float32Array(t*a*4),s=i?1:0,c=0;c<a;c++)for(var u=0;u<t;u++){for(var d=c,h=u,p=4*(c*t+u),g=0,m=0,f=0,v=0,y=0;y<r;y++){var _=4*(Math.min(a-1,Math.max(0,d+y-o))*t+h),b=n[y];g+=e[_]*b,m+=e[_+1]*b,f+=e[_+2]*b,v+=e[_+3]*b}l[p]=g,l[p+1]=m,l[p+2]=f,l[p+3]=v+s*(255-v)}return l}(e,t,a,i,r),t,a,n,r,o)}for(var v=a(602),y=a(63),_=a(329),b=a.n(_),x=a(30),w=a(605),k=a(607),E=a(668),S=a(495),C=a(606),z=a(744),A=a.n(z),I=a(743),j=a.n(I),O=a(420),M=a.n(O),N=a(86),R=new Array(19),D=0,L=R.length;D<L;D++)R[D]=2<<D;var H={38:0,40:1,37:2,39:3,75:0,74:1,72:2,76:3,87:0,83:1,65:2,68:3};if(window.navigator.msPointerEnabled)var P="MSPointerDown",T="MSPointerMove",W="MSPointerUp";else P="touchstart",T="touchmove",W="touchend";var B=["#eee4da","#ede0c8","#f2b179","#f59563","#f67c5f","#f65e3b","#edcc61","#edc850","#edc53f","#edc22e","#edad00","#b2e8a1","#92ed83","#83ed79","#60ed70","#9bcded","#71a9ed","#5991ed","#5975ed","#4c50ed"],U=[.8,.65,.55,.39,.3,.25],G=h()(function(e){return{root:{position:"absolute",top:0,left:0,width:"".concat(480,"px"),height:"".concat(480,"px"),zIndex:2,"&>div":{zIndex:2,transition:"top ".concat(155,"ms ease, left ").concat(155,"ms ease")},"&>div[appear]":{animationName:"$appear",animationDuration:"".concat(124,"ms")},"&>div[upgrade]":{animationName:"$upgrade",animationDuration:"".concat(170,"ms")}},"@keyframes appear":{"0%":{opacity:0,transform:"scale(0, 0)"},"100%":{opacity:1,transform:"scale(1, 1)"}},"@keyframes upgrade":{"0%":{opacity:0,transform:"scale(0, 0)"},"62%":{opacity:1,transform:"scale(1.2, 1.2)"},"100%":{opacity:1,transform:"scale(1, 1)"}}}})(function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.refer;return u.a.createElement("div",{ref:a,className:t.root})}}]),t}(u.a.PureComponent)),Q={gallery:{display:"flex",flexWrap:"wrap",fontSize:"50px !important",width:"560px",margin:"10px auto","&>div":{margin:"5px",width:"60px",height:"60px",position:"relative",overflow:"hidden",borderRadius:"5px"}},mask:{position:"absolute",top:0,left:0,background:"rgba(0,0,0,0.75)",height:"100%",width:"100%",borderRadius:"6px",zIndex:20},gameover:{fontSize:"60px",fontWeight:"bold",height:"60px",lineHeight:"60px",color:"#faf8ef",marginTop:"170px",textAlign:"center","&:after":{content:'"Game Over"'}},win:{fontSize:"50px",fontWeight:"bold",height:"50px",lineHeight:"50px",color:"#faf8ef",marginTop:"170px",textAlign:"center",userSelect:"none"},lower:{width:"100%",display:"flex",justifyContent:"center",marginTop:"20px","& div":{backgroundColor:"rgba(255,255,255,0.3)",margin:"8px",borderRadius:"3px",height:"36px",width:"115px",textAlign:"center",lineHeight:"36PX",fontSize:"18px",fontWeight:"400",color:"#fff"},"& div[text]":{"&:before":{content:"attr(text)"}}}},V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).intiBackgroundCells(),a.initGalleryCells(),a.cells=[],a.progress=0,a._progress=-1,a.newCells(),a.newCells(),a.state={gameover:!1,win:!1,end:!1,gg:!1,endless:!1},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"reset",value:function(){var e=this;this.cells.forEach(function(t){return e.container.removeChild(t.dom)}),this.cells=[],this.newCells(),this.newCells(),this.progress=0,this._progress=-1,this.updateCells(),this.setState({gameover:!1,win:!1,end:!1,gg:!1,endless:!1})}},{key:"componentDidMount",value:function(){this.updateCells(),this.attachEvent(),this.props.bindHandle&&this.props.bindHandle(this),this.windowBind()}},{key:"componentWillUnmount",value:function(){var e=this;this.windowUnbind(),this.props.bindHandle&&this.props.bindHandle(null),this.cells.forEach(function(t){return e.container.removeChild(t.dom)}),document.removeEventListener("keydown",this.keydownEvent)}},{key:"attachEvent",value:function(){var e,t,a=this;this.keydownEvent=function(e){var t=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,n=H[e.which];t||void 0!==n&&(e.preventDefault(),a.alignCells(n))},document.addEventListener("keydown",this.keydownEvent),this.container.addEventListener(P,function(a){!window.navigator.msPointerEnabled&&a.touches.length>1||a.targetTouches.length>1||(window.navigator.msPointerEnabled?(e=a.pageX,t=a.pageY):(e=a.touches[0].clientX,t=a.touches[0].clientY),a.preventDefault())}),this.container.addEventListener(T,function(e){e.preventDefault()}),this.container.addEventListener(W,function(n){if(!(!window.navigator.msPointerEnabled&&n.touches.length>0||n.targetTouches.length>0)){var i,r;window.navigator.msPointerEnabled?(i=n.pageX,r=n.pageY):(i=n.changedTouches[0].clientX,r=n.changedTouches[0].clientY);var o=i-e,l=Math.abs(o),s=r-t,c=Math.abs(s);Math.max(l,c)>10&&a.alignCells(l>c?o>0?3:2:s>0?1:0)}})}},{key:"intiBackgroundCells",value:function(){this.backgroundCells=[];for(var e=0;e<this.props.game_size;e++)for(var t=0;t<this.props.game_size;t++)this.backgroundCells.push(u.a.createElement("div",{key:"cell_".concat(e,"_").concat(t),x:e,y:t,block:"",bg:""}))}},{key:"initGalleryCells",value:function(){var e=this;this.galleryCells=[],this.bgLoader=[],this.galleryDom=new Array(R.length);for(var t=function(t){e.galleryCells.push(u.a.createElement("div",{ref:function(a){return e.galleryDom[t]=a},key:t,value:R[t],blur:""})),e.bgLoader.push(u.a.createElement("div",{key:t,value:R[t]}))},a=0;a<R.length;a++)t(a)}},{key:"windowBind",value:function(){var e=this;window.game={},window.game.help="Restart - game.restart() \nUp - game.u()\nDown - game.d()\nLeft - game.l()\nRight - game.f()\n",window.game.restart=function(){return e.reset()},window.game.u=function(){return e.alignCells(0)},window.game.d=function(){return e.alignCells(1)},window.game.l=function(){return e.alignCells(2)},window.game.r=function(){return e.alignCells(3)}}},{key:"windowUnbind",value:function(){window.game=null}},{key:"newCells",value:function(){var e=Math.floor((this.props.game_size_2-this.cells.length)*Math.random());this.cells.sort(function(e,t){return e.position-t.position}),this.cells.forEach(function(t){t.position<=e&&e++});var t={position:e,value:0,x:this.props._x[e],y:this.props._y[e]};return this.cells.push(t),t}},{key:"isDead",value:function(){var e=this.getRows();if(e.forEach(function(e){return e.sort(function(e,t){return e.x-t.x})}),!Z(e))return!1;var t=this.getColumn();return t.forEach(function(e){return e.sort(function(e,t){return e.y-t.y})}),!!Z(t)}},{key:"alignCells",value:function(e){var t=this;if(!this.freeze&&!this.state.gg){this.freeze=!0,this.cells.length>=this.props.game_size_2&&this.isDead()&&this.setState({gameover:!0,gg:!0});for(var a=e<2?this.getColumn():this.getRows(),n=1===e||3===e,i=e<2?function(e,t){return e.y-t.y}:function(e,t){return e.x-t.x},r=e<2?function(e,t){return e.y=t}:function(e,t){return e.x=t},o=n?function(e,a){return r(e,t.props.game_size-1-a)}:r,l=0;l<this.props.game_size;l++){var s=a[l].sort(i);J(s,n);for(var c=0,u=0;u<s.length;u++){var d=n?s.length-u-1:u;s[d].merged?o(s[d],c-1):(o(s[d],c),c++)}}this.cells.forEach(function(e){e.position=t.props.game_size*e.y+e.x,e.upgrade&&t.cells.push({x:e.x,y:e.y,position:e.position,value:e.value+1,anime:!0})}),this.updateCells(!0)}}},{key:"updateCells",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];setTimeout(function(){return e.freeze=!1},50);var a=this.cells.filter(function(e){return e.merged||e.upgrade}),n=this.cells.findIndex(function(e){return e.dom&&(e._x!==e.x||e._y!==e.y)})>-1;if(this.cells.forEach(function(t){t.value>e.progress&&(e.progress=t.value),t.dom?(t._x=t.x,t._y=t.y,t.dom.setAttribute("x",t.x),t.dom.setAttribute("y",t.y),(t.merged||t.upgrade)&&(t.dom.style.zIndex=t.upgrade?"3 !important":null,setTimeout(function(){e.container.removeChild(t.dom),t.dom=null},232.5))):e.addCell(t,Boolean(t.anime),n?77.5:0)}),a.forEach(function(t){t.upgrade=null,e.cells.splice(e.cells.indexOf(t),1)}),t&&n)for(var i=0;i<this.props.difficulty;i++)if(this.cells.length<this.props.game_size_2){var r=this.newCells();this.addCell(r,!1,n?77.5:0)}this.progress>this._progress&&(this.galleryDom.forEach(function(t,a){t&&a<=e.progress&&t.removeAttribute("blur")}),this._progress=this._progress),!this.state.endless&&this.progress>=this.props.ending&&(this.props.ending>=10&&4===this.props.game_size&&(localStorage.getItem("pa")||Object(N.b)()),this.setState({win:!0,gg:!0})),this.progress>=R.length-1&&this.setState({end:!0,gg:!0})}},{key:"addCell",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e.dom=document.createElement("div"),e.dom.setAttribute("value",R[e.value]),e.dom.setAttribute("block",""),e.dom.setAttribute(a?"upgrade":"appear",""),e.dom.setAttribute("x",e.x),e.dom.setAttribute("y",e.y),e._x=e.x,e._y=e.y,e.dom.style.zIndex="4 !important",setTimeout(function(){t.container.appendChild(e.dom),setTimeout(function(){e.dom.style.zIndex=null},170)},n)}},{key:"getRows",value:function(){for(var e=new Array(this.props.game_size),t=0;t<this.props.game_size;t++)e[t]=[];return this.cells.forEach(function(t){return e[t.y].push(t)}),e}},{key:"getColumn",value:function(){for(var e=new Array(this.props.game_size),t=0;t<this.props.game_size;t++)e[t]=[];return this.cells.forEach(function(t){return e[t.x].push(t)}),e}},{key:"render",value:function(){var e=this,t=this.props.classes;return u.a.createElement("div",{className:t.root},u.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"5px 0 10px 0"}},u.a.createElement("div",{style:{display:"flex",margin:"0 10px"}},u.a.createElement("input",{ref:function(t){return e.number_check=t},type:"checkbox",onClick:function(t){e.number_check_handle(t.target.checked)}}),"\u6570\u5b57"),u.a.createElement("div",{style:{display:"flex",margin:"0 10px"}},u.a.createElement("input",{ref:function(t){return e.glass_check=t},type:"checkbox",onClick:function(t){e.glass_check_handle(t.target.checked)}}),"\u900f\u660e\u5b57\u4f53 (\u624b\u673a\u53caSafari\u7528\u6237\u614e\u7528)")),u.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},u.a.createElement("div",{className:t.container},this.backgroundCells,u.a.createElement(G,{refer:function(t){return e.container=t}}),this.state.gg&&u.a.createElement("div",{className:t.mask},this.state.gameover&&u.a.createElement("div",{className:t.gameover}),this.state.win&&u.a.createElement("div",{className:t.win},"\u7406\u667a\u56de\u590d\u5b8c\u6210"),this.state.end&&u.a.createElement("div",{className:t.win},"\u7406\u667a\u6ea2\u51fa"),u.a.createElement("div",{className:t.lower},this.state.gameover&&u.a.createElement("div",{text:"Try Again",onClick:function(){return e.reset()}}),this.state.win&&u.a.createElement("div",{text:"Continue",onClick:function(){return e.continue()}}),u.a.createElement("div",{text:"New Game",onClick:function(){return e.props.restart()}}))))),u.a.createElement("div",{className:t.gallery,number:""},this.galleryCells.filter(function(t,a){return a<=e.props.ending||e.state.endless})),u.a.createElement("div",{style:{overflow:"hidden",height:"0",width:"0",position:"relative"}},this.bgLoader))}},{key:"glass_check_handle",value:function(e){if(e){if(this.number_check.checked||(this.number_check.checked=!0,this.number_check_handle(!0)),!this.container.hasAttribute("glass")){var t=document.createAttribute("glass");this.container.setAttributeNode(t)}}else this.container.removeAttribute("glass")}},{key:"number_check_handle",value:function(e){if(e&&!this.container.hasAttribute("number")){var t=document.createAttribute("number");this.container.setAttributeNode(t),this.glass_check.disabled=!1}else e||(this.container.removeAttribute("number"),this.glass_check.disabled=!0)}},{key:"continue",value:function(){this.setState({gg:!1,win:!1,gameover:!1,endless:!0})}}]),t}(u.a.PureComponent);function F(e){var t=e.game_size,a=e._x,n=e._y,i=e.styles,r=e.difficulty,o=e.ending,l=e.restart,s=e.bindHandle,c=t*t,d=m()(i)();return u.a.createElement(V,{ending:o,game_size:t,game_size_2:c,_x:a,_y:n,difficulty:r,classes:d,restart:l,bindHandle:s})}var X=new Array(R.length).join(" ").split(" ").map(function(e,t){return U[R[t].toString().length-1]}),K={};R.forEach(function(e,t){return K['& [value="'.concat(e,'"]')]={fontSize:"calc(".concat((100*X[t]).toFixed(0),"%)"),backgroundColor:B[t]}});var Y={3:1,4:1,5:2,6:3},q=Object.keys(p);q.sort(function(e,t){return e.localeCompare(t)});var $={header:{display:"flex",justifyContent:"space-between",width:"".concat(480,"px"),margin:"5px auto","&>div":{display:"flex",alignItems:"center"},"& div[button]":{"&:before":{content:"attr(button)"},display:"flex",border:"1px solid #000",borderRadius:"2px",padding:"1px 3px",margin:"5px 5px 5px 0px",whiteSpace:"nowrap !important",userSelect:"none","&:active":{color:"#fff",background:"#000"}},"&>div>span:first-child":{marginRight:"10px"}},customWrap:{width:"480px",margin:"5px auto"},customIconContainer:Object(n.a)({display:"flex",flexWrap:"wrap",fontSize:"70px",userSelect:"none","& div[icon]":{width:"70px",height:"70px",lineHeight:"70px",margin:"5px",borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",fontWeight:"bold",color:"#fff",textShadow:"0 2px 4px #000",position:"relative"},"& img":{position:"absolute",width:"100%",height:"100%",lineHeight:"100%",top:0,left:0,zIndex:1},"&>div[value]:after":{content:"attr(value)",position:"absolute",width:"100%",textAlign:"center",height:"100%",top:0,left:0,zIndex:2}},K),iconWrap:{display:"flex",justifyContent:"center",flexWrap:"wrap",userSelect:"none","&>div":{margin:"5px",width:"60px",height:"60px",borderRadius:"5px",overflow:"hidden"},"& img":{width:"60px",height:"60px"},"& div[chosen]":{boxShadow:"0 2px 6px 2px rgba(0, 0, 0, 0.80)"}},dialogHeader:{border:"3px dashed #333",padding:"10px",margin:"0 16px 16px 16px","&>div":{marginRight:"20px !important"},"& div[chosen=false]":{opacity:"0.6"},"& div[chosen=true]":{boxShadow:"0 2px 6px 2px rgba(0, 0, 0, 0.80)",opacity:"1 !important"}},empty:{border:"3px solid #333",opacity:"0.6","&>svg":{height:"50%",width:"50%",fill:"#333"},"&:hover":{opacity:1}},loading:{width:"".concat(480,"px"),height:"40px",background:"rgb(255, 255, 255, 0)",borderRadius:"6px",marginTop:"80px",lineHeight:"".concat(40,"px"),color:"rgba(0,0,0,1)",justifyContent:"center",fontSize:"36px",fontWeight:"bold","&:after":{animation:"$breath 3.2s linear 0s infinite",content:'"LOADING"'}},"@keyframes breath":{"0%":{content:'"LOADING\xa0\xa0\xa0"'},"25%":{content:'"LOADING.\xa0\xa0"'},"50%":{content:'"LOADING..\xa0"'},"75%":{content:'"LOADING..."'},"100%":{content:'"LOADING..."'}}};t.default=h()($)(function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).handleClose=function(){a.setState({open:!1})},a.okHandle=function(){a.choiced[a.state.currentValue]=a.state.dialogSelect,a.choicedSub[a.state.currentValue]=p[a.state.dialogSelect]&&p[a.state.dialogSelect][a.state.dialogSelectSub]?a.state.dialogSelectSub:0,a.handleClose()},a.state={appStyle:null,difficulty:1,ending:10,redirect:null,custom:!1,open:!1,currentValue:"",dialogSelect:null,dialogSelectSub:null},a.choiced=new Array(R.length),a.choicedSub=new Array(R.length),a.game_size=4,a._redirect=null,a.iconQuery=null,a.iconSet=null;var n=a.props.location;if(n&&""!==n.search){var r=new URLSearchParams(n.search).get("game");r&&(a.iconQuery=r)}return a.newStyle(a.iconQuery),a.refresh=0,a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"intiBlurredImage",value:function(){var e=this;this.canvas=document.createElement("canvas"),this.canvas.width=80,this.canvas.height=80,this.ctx=this.canvas.getContext("2d"),this.blurredImage=new Array(R.length);for(var t=function(t){var a=new Image;a.src="./img/avatars/".concat(e.icon[t],".png"),a.onload=function(){return e.doBlur(a,t)}},a=0;a<R.length;a++)t(a)}},{key:"newStyle",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])e=this.iconSet;else if(t)e=this.parseIconQuery(t),this.iconSet=e,this.iconQuery=t;else{var a=Object.keys(p).sort(function(){return.5-Math.random()});e=new Array(R.length);for(var i=[],r=0,o=R.length;r<o;r++){var l=a[r],s=parseInt(a[r].split("_")[0]).toString(36),c=p[a[r]][Math.floor(p[a[r]].length*Math.random())];e[r]="char_"+l+"_"+c,i[r]=s+"_"+c}var u=Object(y.compressToBase64)(i.join(",")).replace(/\//g,"-").replace(/\+/g,"_").replace(/=/g,"");this.iconQuery=u,this.iconSet=e}for(var d=this.game_size,h=d*d,g=464/d-16,m=new Array(h),f=new Array(h),v=0;v<d;v++)for(var _=0;_<d;_++)m[v+_*d]=v,f[v+_*d]=_;var b={};R.forEach(function(t,a){b['& [value="'.concat(t,'"]:before')]={content:'""',backgroundImage:'url("./img/avatars/'.concat(e[a],'.png")')},b['& [glass] [value="'.concat(t,'"]:after')]={backgroundImage:'url("./img/avatars/'.concat(e[a],'.png")')}});for(var x={},w=0;w<d;w++)x['& [x="'.concat(w,'"]')]={left:"".concat(16+w*(g+16),"px")},x['& [y="'.concat(w,'"]')]={top:"".concat(16+w*(g+16),"px")};this._x=m,this._y=f,this.icon=e,this.appStyle=Object(n.a)({root:Object(n.a)({"& [bg]":{background:"rgba(238, 228, 218, 0.35)",zIndex:1},"& [block]":{borderRadius:"5px",height:"".concat(g,"px"),width:"".concat(g,"px")},"& [value]:before":{borderRadius:"5px",height:"100%",width:"100%",position:"absolute",top:0,left:0,backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"100% 100%"},"& [x],[y]":{top:0,left:0,position:"absolute",borderRadius:"5px"},"& [number]>[value]:after":{content:"attr(value)",height:"100%",width:"100%",position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"".concat(g,"px"),fontWeight:"bold",color:"rgba(255,255,255,0.6)"},"& [glass]>[value]:after":{filter:"drop-shadow(0px 0px 3px black) drop-shadow(1px 1px 2px black) drop-shadow(-1px -1px 2px black)",opacity:.8,backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"".concat(g,"px ").concat(g,"px"),"-webkitBackgroundClip":"text",backgroundClip:"text",color:"transparent"},"& [number]":{fontSize:"".concat(g,"px")}},x,b,K),container:{width:"".concat(480,"px"),height:"".concat(480,"px"),background:"rgb(187, 173, 160)",borderRadius:"6px",padding:"".concat(16,"px"),position:"relative"}},Q),this.intiBlurredImage()}},{key:"createIconQuery",value:function(e,t){for(var a=new Array(R.length),n=0,i=a.length;n<i;n++)if(e[n]){var r=parseInt(e[n].split("_")[0]).toString(36);a[n]=r+"_"+t[n]}else a[n]="";return Object(y.compressToBase64)(a.join(",")).replace(/\//g,"-").replace(/\+/g,"_").replace(/=/g,"")}},{key:"parseIconQuery",value:function(e){var t=e.replace(/_/g,"+").replace(/-/g,"/");t+=e.length%4>0?new Array(5-e.length%4).join("="):"";for(var a=Object(y.decompressFromBase64)(t),n=Object.keys(p),i=a.split(","),r=Array(R.length),o=Array(i.length),l=function(e,t){if(""===i[e])return r[e]=null,o[e]=null,"continue";var a=i[e].split("_"),l=("000"+parseInt(a[0],36).toFixed(0)).substr(-3),s=n.find(function(e){return e.startsWith(l)}),c=p[s].includes(a[1])?a[1]:p[s][Math.floor(p[s].length*Math.random())];r[e]="char_"+s+"_"+c,o[e]=s},s=0,c=i.length;s<c;s++)l(s);if(i.length<R.length||r.includes(null)){for(var u=0,d=i.length;u<d;u++)o[u]&&n.splice(n.indexOf(o[u]),1);n.sort(function(e,t){return.5-Math.random()});for(var h=0,g=R.length;h<g;h++)if(!r[h]){var m=p[n[h]][Math.floor(p[n[h]].length*Math.random())];r[h]="char_"+n[h]+"_"+m}}return r}},{key:"doBlur",value:function(e,t){this.ctx.fillStyle=B[t],this.ctx.beginPath(),this.ctx.rect(0,0,this.canvas.width,this.canvas.height),this.ctx.fill(),this.ctx.drawImage(e,0,0,this.canvas.width,this.canvas.height);var a=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),n=this.ctx.createImageData(this.canvas.width,this.canvas.height);!function(e,t,a,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if((n=Math.abs(n))<=1)throw new Error("Diameter should be greater than 1.");for(var r=n/2,o=Math.ceil(n)+(1-Math.ceil(n)%2),l=new Float32Array(o),s=(r+.5)/3,c=s*s,u=1/Math.sqrt(2*Math.PI*c),d=-1/(2*s*s),h=0,p=Math.floor(o/2),g=0;g<o;g++){var m=g-p,v=u*Math.exp(m*m*d);l[g]=v,h+=v}for(var y=0;y<l.length;y++)l[y]/=h;f(e,t,a,l,l,!1,i)}(a.data,a.width,a.height,40,n.data);for(var i=0;i<n.data.length;i+=4)n.data[i]*=.5,n.data[i+1]*=.5,n.data[i+2]*=.5;if(this.ctx.putImageData(n,0,0),this.blurredImage[t]=this.canvas.toDataURL(),this.blurredImage.findIndex(function(e){return!e})<0){for(var r=0;r<this.blurredImage.length;r++)this.appStyle.gallery['& [blur][value="'.concat(R[r],'"]:before')]={backgroundImage:'url("'.concat(this.blurredImage[r],'") !important')};this.setState({appStyle:this.appStyle,difficulty:this.difficulty})}}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.difficulty=this.state.difficulty,this.willRedirect=this._redirect!==this.state.redirect,this.willRedirect&&(this._redirect=this.state.redirect),u.a.createElement(u.a.Fragment,null,this.willRedirect&&u.a.createElement(x.a,{to:this.state.redirect}),u.a.createElement(w.a,{open:this.state.open,onClose:this.okHandle,scroll:"body"},u.a.createElement(C.a,null,"Select Icon"),u.a.createElement(k.a,null,u.a.createElement("div",{className:t.customIconContainer+" "+t.dialogHeader},u.a.createElement("div",{value:R[this.state.currentValue],icon:""}),this.state.dialogSelect&&u.a.createElement("div",{style:{display:"flex"}},p[this.state.dialogSelect].map(function(t,a){return u.a.createElement("div",{key:"./img/avatars/char_".concat(e.state.dialogSelect,"_").concat(t,".png"),chosen:e.state.dialogSelectSub===a?"true":"false",icon:"",value:R[e.state.currentValue],onClick:function(){return e.setState({dialogSelectSub:a})}},u.a.createElement("img",{src:"./img/avatars/char_".concat(e.state.dialogSelect,"_").concat(t,".png")}))}),u.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.setState({dialogSelect:null,dialogSelectSub:0})}},u.a.createElement(M.a,null)))),u.a.createElement("div",{className:t.iconWrap},q.map(function(t){return u.a.createElement("div",{key:t,style:{background:e.state.dialogSelect===t?B[e.state.currentValue]:B[e.choiced.indexOf(t)]},chosen:e.state.dialogSelect===t?"":null,onClick:function(){return e.setState({dialogSelect:t})}},u.a.createElement("img",{src:"./img/avatars/char_".concat(t,"_1.png")}))}))),u.a.createElement(E.a,null,u.a.createElement(S.a,{onClick:this.handleClose,color:"primary"},"Cancel"),u.a.createElement(S.a,{onClick:this.okHandle,color:"primary"},"Ok"))),u.a.createElement("div",{className:t.header},u.a.createElement("div",null,u.a.createElement("div",{button:"New Game",onClick:function(){return e.restart()}}),u.a.createElement("div",{button:"Restart",onClick:function(){e.gameHandle&&e.gameHandle.reset()}})),u.a.createElement("div",null,u.a.createElement("div",{button:"Random Tiles",onClick:function(){e.newStyle(),e.props.location.pathname===e.props.match.path&&""===e.props.location.search||e.setState({redirect:e.props.match.path})}}),u.a.createElement("div",{button:"Custom Tiles",onClick:function(){return e.setState({custom:!e.state.custom})}}),u.a.createElement("div",{button:"Copy Link",onClick:function(){return ee()}}))),u.a.createElement("div",{className:t.header},u.a.createElement("div",null,u.a.createElement("span",null,"\u68cb\u76d8\u5927\u5c0f"),u.a.createElement(v.a,{value:this.game_size,onChange:function(t){return e.game_size_handle(t.target.value)},style:{width:"50px",minWidth:"50px",fontSize:"12px"}},[3,4,5,6].map(function(e,t){return u.a.createElement("option",{key:e,value:e},e)}))),u.a.createElement("div",null,u.a.createElement("span",null,"\u76ee\u6807"),u.a.createElement(v.a,{value:this.state.ending,onChange:function(t){return e.setState({ending:t.target.value})},style:{width:"80px",minWidth:"80px",fontSize:"12px"}},[9,10,11,12,13,14,15].map(function(e){return u.a.createElement("option",{key:e,value:e},R[e])}))),u.a.createElement("div",null,u.a.createElement("span",null,"\u96be\u5ea6"),u.a.createElement(v.a,{value:this.state.difficulty,onChange:function(t){return e.setState({difficulty:t.target.value})},style:{width:"50px",minWidth:"50px",fontSize:"12px"}},[1,2,3].map(function(t){return t<=Y[e.game_size]?u.a.createElement("option",{key:t,value:t},t):null})))),this.state.custom&&u.a.createElement("div",{className:t.customIconContainer+" "+t.customWrap},R.map(function(t,a){return u.a.createElement("div",{key:t,value:t,icon:"",onClick:function(){return e.openDialog(a)}},e.choiced[a]&&u.a.createElement("img",{src:"./img/avatars/char_".concat(e.choiced[a],"_").concat(p[e.choiced[a]][e.choicedSub[a]],".png")}))}),u.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.applyCustom()}},u.a.createElement(j.a,null)),u.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.copyCustomLink()}},u.a.createElement(A.a,null)),u.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.setState({custom:!1})}},u.a.createElement(M.a,null))),!this.state.appStyle&&u.a.createElement("div",{className:t.header},u.a.createElement("div",{className:t.loading})),this.state.appStyle&&u.a.createElement(F,{key:"".concat(this.game_size,"_").concat(this.refresh),difficulty:this.state.difficulty,game_size:this.game_size,ending:this.state.ending,_x:this._x,_y:this._y,styles:this.state.appStyle,restart:function(){return e.restart()},bindHandle:function(t){return e.gameHandle=t}}))}},{key:"openDialog",value:function(e){this.setState({open:!0,currentValue:e,dialogSelect:this.choiced[e],dialogSelectSub:this.choicedSub[e]?this.choicedSub[e]:0})}},{key:"copyCustomLink",value:function(){var e=this,t=this.choicedSub.map(function(t,a){return e.choiced[a]?p[e.choiced[a]][t]:null});ee(this.createIconQuery(this.choiced,t))}},{key:"applyCustom",value:function(){var e=this;alert("Apply custom setting.\nUnassigned tiles will be assigned randomly.");var t=this.choicedSub.map(function(t,a){return e.choiced[a]?p[e.choiced[a]][t]:null}),a=this.createIconQuery(this.choiced,t);this.newStyle(a)}},{key:"game_size_handle",value:function(e){this.game_size=e,this.state.difficulty>Y[this.game_size]&&(this.difficulty=Y[this.game_size]),this.newStyle(null,!0)}},{key:"restart",value:function(){this.refresh=10-this.refresh,this.newStyle()}}]),t}(u.a.PureComponent));function J(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])for(var t=e.length-1;t>0;t--)e[t].merged||e[t].value!==e[t-1].value||(e[t].upgrade=!0,e[t-1].merged=!0);else for(var a=0;a<e.length-1;a++)e[a].merged||e[a].value!==e[a+1].value||(e[a].upgrade=!0,e[a+1].merged=!0)}function Z(e){for(var t=0;t<e.length;t++)for(var a=1;a<e[t].length;a++)if(e[t][a].value===e[t][a-1].value)return!1;return!0}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=window.location.origin+window.location.pathname+"#/2048"+(e?"?game="+e:"");b()(t),alert("Game Link: "+t+"\nCopied.")}}}]);