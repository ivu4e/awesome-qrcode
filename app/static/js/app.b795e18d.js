(function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],p=0,d=[];p<l.length;p++)i=l[p],n[i]&&d.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,l=1;l<o.length;l++){var s=o[l];0!==n[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("64a9"),n=o.n(r);n.a},"0765":function(e,t,o){"use strict";var r=o("a6a6"),n=o.n(r);n.a},"0ab2":function(e,t,o){e.exports=o.p+"img/logo.528852a8.gif"},"0e5b":function(e,t,o){},2950:function(e,t,o){},"3ca5":function(e,t,o){"use strict";var r=o("0e5b"),n=o.n(r);n.a},"40a9":function(e,t,o){"use strict";var r=o("2950"),n=o.n(r);n.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("el-row",[o("el-col",{attrs:{offset:4,span:16}},[o("app-info")],1)],1),o("el-row",[o("el-col",{attrs:{offset:4,span:16}},[o("generator")],1)],1)],1)},a=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{attrs:{src:o("0ab2"),alt:"Awesome QRCode",width:"200px"}}),r("h1",[e._v("Awesome QR Code")])])}],s={name:"app-info",data:function(){return{}}},c=s,u=o("2877"),p=Object(u["a"])(c,i,l,!1,null,null,null),d=p.exports,f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-tabs",{attrs:{type:"border-card"},model:{value:e.activePane,callback:function(t){e.activePane=t},expression:"activePane"}},[o("el-tab-pane",{attrs:{label:"Text",name:"normal"}},[o("normal-generator")],1),o("el-tab-pane",{attrs:{label:"Static Picture",name:"picture"}},[o("picture-generator")],1),o("el-tab-pane",{attrs:{label:"Gif",name:"gif"}},[o("gif-generator")],1)],1)],1)},m=[],g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v("\n    Text QR Code Generator\n  ")]),o("el-row",[o("el-col",{attrs:{span:14}},[o("el-form",{ref:"normal-form",attrs:{model:e.formModel,"label-width":"150px","label-position":"top",rules:e.formRule,size:"small"}},[o("el-form-item",{attrs:{label:"Text",prop:"text"}},[o("el-tooltip",{attrs:{placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("p",[o("b",[e._v("Supported Characters:")])]),o("p",[e._v("1. Numbers: 0-9")]),o("p",[e._v("2. Letters: a-z, A-Z")]),o("p",[e._v("3. Common punctuations: · , . : ; + - * / \\ ~ ! @ # $ % ^ & ` ' = < > [ ] ( ) ? _ { } | and  (space) ")])]),o("el-input",{model:{value:e.formModel.text,callback:function(t){e.$set(e.formModel,"text",t)},expression:"formModel.text"}})],1)],1)],1),o("el-button",{attrs:{type:"primary"},on:{click:e.generate}},[e._v("Generate")])],1)],1),o("result-dialog",{ref:"result-dialog",on:{done:e.onResultDialogClose}})],1)},v=[],h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{visible:e.visible,title:e.title,"close-on-press-escape":!1,"close-on-click-modal":!1,center:!0,"show-close":!1,width:"400px"}},[o("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.generating,expression:"generating"}]},[o("el-col",{attrs:{offset:4,span:16}},[o("img",{attrs:{src:e.qrcode.url,width:"100%"}})])],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.doClose}},[e._v("Close")]),o("el-button",{attrs:{type:"primary",disabled:!e.success},on:{click:e.doDownload}},[e._v("Download")])],1)],1)},b=[],_=(o("34ef"),o("28a5"),o("4917"),o("bc3a")),x=function(e,t,o){_.post("/qrcode/normal",{text:e}).then(function(e){var r=e.data;0===r.code?t(e.data):o(e.data)}).catch(function(e){o(e)})},w=function(e,t,o){_.post("/qrcode/picture",e).then(function(e){var r=e.data;0===r.code?t(e.data):o(e.data)}).catch(function(e){o(e)})},M=function(e,t,o){_.post("/qrcode/gif",e).then(function(e){var r=e.data;0===r.code?t(e.data):o(e.data)}).catch(function(e){o(e)})},y={name:"result-dialog",data:function(){return{visible:!1,title:"Generating...",generating:!0,qrcode:{url:"https://http.cat/404"},success:!1}},methods:{showNormal:function(e){var t=this;this.visible=!0,this.generating=!0,x(e.text,function(e){t.success=!0,t.title="Generate succeed!",t.$message.success("Success!"),t.qrcode.url="data:image/png;base64,"+e.url,t.generating=!1},function(e){t.$message.error("ERROR! "+JSON.stringify(e))})},showPicture:function(e){var t=this;this.visible=!0,this.generating=!0,w(e,function(e){t.success=!0,t.title="Generate succeed!",t.$message.success("Success!"),t.qrcode.url="data:image/png;base64,"+e.url,t.generating=!1},function(e){t.$message.error("ERROR! "+JSON.stringify(e))})},showGif:function(e){var t=this;this.visible=!0,this.generating=!0,M(e,function(e){t.success=!0,t.title="Generate succeed!",t.$message.success("Success!"),t.qrcode.url="data:image/gif;base64,"+e.url,t.generating=!1},function(e){t.$message.error("ERROR! "+JSON.stringify(e))})},doClose:function(){this.qrcode.url="https://http.cat/404",this.visible=!1,this.generating=!1,!0===this.success&&this.$emit("done")},doDownload:function(){var e=".png";this.qrcode.url.indexOf("image/gif")>0&&(e=".gif");var t=new Date,o="awesome-qrcode_".concat(t.getFullYear(),"_").concat(t.getMonth(),"_").concat(t.getDate(),"_").concat(t.getHours(),"_").concat(t.getMinutes(),"_").concat(t.getSeconds()).concat(e);this.saveAsImg(o,this.qrcode.url)},saveAsImg:function(e,t){var o=document.createElement("a");o.download=e,o.href=t;var r=navigator.userAgent,n=r.match(/MSIE\s([\d.]+)/)||r.match(/Trident\/.+?rv:(([\d.]+))/),a=r.match(/Edge\/([\d.]+)/);if("function"!==typeof MouseEvent||n||a)if(window.navigator.msSaveOrOpenBlob){var i=atob(t.split(",")[1]),l=i.length,s=new Uint8Array(l);while(l--)s[l]=i.charCodeAt(l);var c=new Blob([s]);window.navigator.msSaveOrOpenBlob(c,e)}else{var u='<body style="margin:0;"><img src="'+t+'" style="max-width:100%;" title="'+e+'" /></body>',p=window.open();p.document.write(u)}else{var d=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});o.dispatchEvent(d)}}}},C=y,F=Object(u["a"])(C,h,b,!1,null,null,null),R=F.exports,$={components:{ResultDialog:R},data:function(){return{formModel:{text:""},formRule:{text:[{required:!0,message:"Text is required to generate QR Code!"}]},generating:!1}},methods:{generate:function(){var e=this;this.$refs["normal-form"].validate(function(t){!0===t&&e.$refs["result-dialog"].showNormal(e.formModel)})},onResultDialogClose:function(){this.formModel.text=null}}},O=$,q=(o("0765"),Object(u["a"])(O,g,v,!1,null,"5bd3282c",null)),G=q.exports,P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v("Picture QR Code Generator")]),o("el-row",[o("el-col",{attrs:{span:14}},[o("el-form",{ref:"picture-form",attrs:{model:e.formModel,"label-width":"150px","label-position":"top",rules:e.formRule,size:"small"}},[o("el-form-item",{attrs:{label:"Text",prop:"text"}},[o("el-tooltip",{attrs:{placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("p",[o("b",[e._v("Supported Characters:")])]),o("p",[e._v("1. Numbers: 0-9")]),o("p",[e._v("2. Letters: a-z, A-Z")]),o("p",[e._v("3. Common punctuations: · , . : ; + - * / \\ ~ ! @ # $ % ^ & ` ' = < > [ ] ( ) ? _ { } | and (space)")])]),o("el-input",{model:{value:e.formModel.text,callback:function(t){e.$set(e.formModel,"text",t)},expression:"formModel.text"}})],1)],1),o("el-form-item",{attrs:{label:"Background Picture",prop:"picFile"}},[o("el-tooltip",{attrs:{placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("p",[e._v("1. Use a nearly square picture instead of a rectangle one.")])]),o("el-upload",{ref:"pic-upload",attrs:{drag:"","auto-upload":!1,action:"/qrcode/picture","on-change":e.onFileChange,accept:"image/jpeg,image/png,application/x-bmp","list-type":"picture","file-list":e.picFileList}},[o("i",{staticClass:"el-icon-upload"}),o("div",{staticClass:"el-upload__text"},[e._v("\n                Drop your image file here，or\n                "),o("em",[e._v("Click to upload")])]),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Only .jpg/.png/.bmp file supported!")])])],1)],1)],1)],1)],1),o("el-button",{attrs:{type:"primary"},on:{click:e.generate}},[e._v("Generate")]),o("result-dialog",{ref:"result-dialog",on:{done:e.onResultDialogClose}})],1)},S=[],k={components:{ResultDialog:R},data:function(){return{formModel:{text:"",picFile:null},formRule:{text:[{required:!0,message:"Text is required to generate QR Code!"}],picFile:{required:!0,message:"Picture file is required to generate QR Code!"}},picFileList:[]}},methods:{generate:function(){var e=this;this.$refs["picture-form"].validate(function(t){if(!0===t){var o=new FormData;o.append("text",e.formModel.text),o.append("file",e.formModel.picFile.raw),e.$refs["result-dialog"].showPicture(o)}})},onResultDialogClose:function(){this.formModel.text=null,this.formModel.picFile=null,this.picFileList=[],this.$refs["pic-upload"].clearFiles()},onFileChange:function(e,t){t||(this.formModel.picFile=null),e?(this.formModel.picFile=e,this.$refs["picture-form"].validateField("picFile")):this.formModel.picFile=null}}},D=k,j=(o("40a9"),Object(u["a"])(D,P,S,!1,null,"028efa8a",null)),E=j.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v("Gif QR Code Generator")]),o("el-row",[o("el-col",{attrs:{span:14}},[o("el-form",{ref:"gif-form",attrs:{model:e.formModel,"label-width":"150px","label-position":"top",rules:e.formRule,size:"small"}},[o("el-form-item",{attrs:{label:"Text",prop:"text"}},[o("el-tooltip",{attrs:{placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("p",[o("b",[e._v("Supported Characters:")])]),o("p",[e._v("1. Numbers: 0-9")]),o("p",[e._v("2. Letters: a-z, A-Z")]),o("p",[e._v("3. Common punctuations: · , . : ; + - * / \\ ~ ! @ # $ % ^ & ` ' = < > [ ] ( ) ? _ { } | and (space)")])]),o("el-input",{model:{value:e.formModel.text,callback:function(t){e.$set(e.formModel,"text",t)},expression:"formModel.text"}})],1)],1),o("el-form-item",{attrs:{label:"Background Gif Picture",prop:"picFile"}},[o("el-tooltip",{attrs:{placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("p",[e._v("1. Required.")]),o("p",[e._v("2. Must select a .gif file")])]),o("el-upload",{ref:"gif-upload",attrs:{drag:"","auto-upload":!1,action:"/qrcode/gif","on-change":e.onFileChange,accept:"image/gif","list-type":"picture","file-list":e.picFileList}},[o("i",{staticClass:"el-icon-upload"}),o("div",{staticClass:"el-upload__text"},[e._v("\n                Drop your image file here，or\n                "),o("em",[e._v("Click to upload")])]),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Only .gif file supported!")])])],1)],1)],1)],1)],1),o("el-button",{attrs:{type:"primary"},on:{click:e.generate}},[e._v("Generate")]),o("result-dialog",{ref:"result-dialog",on:{done:e.onResultDialogClose}})],1)},A=[],N={components:{ResultDialog:R},data:function(){return{formModel:{text:"",picFile:null},formRule:{text:[{required:!0,message:"Text is required to generate QR Code!"}],picFile:{required:!0,message:"Picture file is required to generate QR Code!"}},picFileList:[]}},methods:{generate:function(){var e=this;this.$refs["gif-form"].validate(function(t){if(!0===t){var o=new FormData;o.append("text",e.formModel.text),o.append("file",e.formModel.picFile.raw),e.$refs["result-dialog"].showGif(o)}})},onResultDialogClose:function(){this.formModel.text=null,this.formModel.picFile=null,this.picFileList=[],this.$refs["gif-upload"].clearFiles()},onFileChange:function(e,t){t||(this.formModel.picFile=null),e?(this.formModel.picFile=e,this.$refs["gif-form"].validateField("picFile")):this.formModel.picFile=null}}},Q=N,L=(o("3ca5"),Object(u["a"])(Q,T,A,!1,null,"7bb66686",null)),z=L.exports,B={name:"generator",components:{NormalGenerator:G,PictureGenerator:E,GifGenerator:z},data:function(){return{activePane:"normal"}}},J=B,I=Object(u["a"])(J,f,m,!1,null,null,null),Z=I.exports,U={name:"app",components:{AppInfo:d,Generator:Z}},H=U,Y=(o("034f"),Object(u["a"])(H,n,a,!1,null,null,null)),K=Y.exports,V=o("5c96"),W=o.n(V);o("0fae");r["default"].config.productionTip=!1,r["default"].use(W.a),new r["default"]({render:function(e){return e(K)}}).$mount("#app")},"64a9":function(e,t,o){},a6a6:function(e,t,o){}});
//# sourceMappingURL=app.b795e18d.js.map