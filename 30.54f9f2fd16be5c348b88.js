(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"/EDb":function(e,t,n){"use strict";n.r(t),n.d(t,"ChatModule",(function(){return ze}));var a=n("ofXK"),s=n("i6JN"),r=n("4aFR"),i=n("+Zd3"),o=n("IVq4"),c=n("FA0J"),l=n("fXoL"),u=n("jhN1"),p=n("Dfz9"),f=n("3Pt+"),g=n("FuSZ"),m=n("b9/t");function d(e,t){if(1&e){var n=l.Xb();l.Wb(0,"div"),l.Wb(1,"span",8),l.hc("click",(function(){l.Cc(n);var e=l.lc().$implicit;return l.lc(2).removeFile(e)})),l.Lc(2,"\xd7"),l.Vb(),l.Vb()}if(2&e){var a=l.lc().$implicit;l.Hc("background-image",a.urlStyle)}}function h(e,t){1&e&&l.Rb(0,"nb-icon",9)}function b(e,t){if(1&e){var n=l.Xb();l.Ub(0),l.Jc(1,d,3,2,"div",6),l.Wb(2,"div"),l.Jc(3,h,1,0,"nb-icon",7),l.Wb(4,"span",8),l.hc("click",(function(){l.Cc(n);var e=t.$implicit;return l.lc(2).removeFile(e)})),l.Lc(5,"\xd7"),l.Vb(),l.Vb(),l.Tb()}if(2&e){var a=t.$implicit;l.Db(1),l.rc("ngIf",a.urlStyle),l.Db(2),l.rc("ngIf",!a.urlStyle)}}function y(e,t){if(1&e&&(l.Wb(0,"div",4),l.Jc(1,b,6,2,"ng-container",5),l.Vb()),2&e){var n=l.lc();l.Db(1),l.rc("ngForOf",n.droppedFiles)}}function v(e,t){if(1&e&&l.Rb(0,"nb-icon",13),2&e){var n=l.lc(2);l.rc("icon",n.buttonIcon)}}function w(e,t){if(1&e&&l.Lc(0),2&e){var n=l.lc(2);l.Mc(n.buttonTitle)}}function F(e,t){if(1&e){var n=l.Xb();l.Wb(0,"button",10),l.hc("click",(function(){return l.Cc(n),l.lc().sendMessage()})),l.Jc(1,v,1,1,"nb-icon",11),l.Jc(2,w,1,1,"ng-template",null,12,l.Kc),l.Vb()}if(2&e){var a=l.zc(3),s=l.lc();l.Ib("with-icon",!s.buttonTitle),l.rc("status",s.getButtonStatus()),l.Db(1),l.rc("ngIf",!s.buttonTitle)("ngIfElse",a)}}var D=function(){function e(e,t){this.cd=e,this.domSanitizer=t,this.status="basic",this.inputFocus=!1,this.inputHover=!1,this.droppedFiles=[],this.imgDropTypes=["image/png","image/jpeg","image/gif"],this.message="",this.messagePlaceholder="Type a message",this.buttonTitle="",this.buttonIcon="paper-plane-outline",this.showButton=!0,this.dropFiles=!1,this.dropFilePlaceholder="Drop file to send",this.send=new l.o,this.fileOver=!1}return e.prototype.onDrop=function(e){var t=this;if(this.dropFiles&&(e.preventDefault(),e.stopPropagation(),this.fileOver=!1,e.dataTransfer&&e.dataTransfer.files))for(var n=function(e){var n=e;if(a.imgDropTypes.includes(e.type)){var s=new FileReader;s.onload=function(e){n.src=e.target.result,n.urlStyle=t.domSanitizer.bypassSecurityTrustStyle("url("+n.src+")"),t.cd.detectChanges()},s.readAsDataURL(e)}a.droppedFiles.push(n)},a=this,s=0,r=e.dataTransfer.files;s<r.length;s++)n(r[s])},e.prototype.removeFile=function(e){var t=this.droppedFiles.indexOf(e);t>=0&&this.droppedFiles.splice(t,1)},e.prototype.onDragOver=function(){this.dropFiles&&(this.fileOver=!0)},e.prototype.onDragLeave=function(){this.dropFiles&&(this.fileOver=!1)},e.prototype.sendMessage=function(){(this.droppedFiles.length||String(this.message).trim().length)&&(this.send.emit({message:this.message,files:this.droppedFiles}),this.message="",this.droppedFiles=[])},e.prototype.setStatus=function(e){this.status!==e&&(this.status=e,this.cd.detectChanges())},e.prototype.getInputStatus=function(){return this.fileOver?this.getHighlightStatus():this.inputFocus||this.inputHover?this.status:"basic"},e.prototype.getButtonStatus=function(){return this.getHighlightStatus()},e.prototype.getHighlightStatus=function(){return"basic"===this.status||"control"===this.status?"primary":this.status},e.\u0275fac=function(t){return new(t||e)(l.Qb(l.h),l.Qb(u.b))},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-form"]],hostVars:2,hostBindings:function(e,t){1&e&&l.hc("drop",(function(e){return t.onDrop(e)}))("dragover",(function(){return t.onDragOver()}))("dragleave",(function(){return t.onDragLeave()})),2&e&&l.Ib("file-over",t.fileOver)},inputs:{message:"message",messagePlaceholder:"messagePlaceholder",buttonTitle:"buttonTitle",buttonIcon:"buttonIcon",showButton:"showButton",dropFiles:"dropFiles",dropFilePlaceholder:"dropFilePlaceholder"},outputs:{send:"send"},decls:4,vars:7,consts:[["class","dropped-files",4,"ngIf"],[1,"message-row"],["nbInput","","fullWidth","","type","text",3,"status","ngModel","placeholder","focus","blur","mouseenter","mouseleave","ngModelChange","keyup.enter"],["nbButton","","class","send-button",3,"status","with-icon","click",4,"ngIf"],[1,"dropped-files"],[4,"ngFor","ngForOf"],[3,"background-image",4,"ngIf"],["icon","file-text-outline","pack","nebular-essentials",4,"ngIf"],[1,"remove",3,"click"],["icon","file-text-outline","pack","nebular-essentials"],["nbButton","",1,"send-button",3,"status","click"],["pack","nebular-essentials",3,"icon",4,"ngIf","ngIfElse"],["title",""],["pack","nebular-essentials",3,"icon"]],template:function(e,t){1&e&&(l.Jc(0,y,2,1,"div",0),l.Wb(1,"div",1),l.Wb(2,"input",2),l.hc("focus",(function(){return t.inputFocus=!0}))("blur",(function(){return t.inputFocus=!1}))("mouseenter",(function(){return t.inputHover=!0}))("mouseleave",(function(){return t.inputHover=!1}))("ngModelChange",(function(e){return t.message=e}))("keyup.enter",(function(){return t.sendMessage()})),l.Vb(),l.Jc(3,F,4,5,"button",3),l.Vb()),2&e&&(l.rc("ngIf",null==t.droppedFiles?null:t.droppedFiles.length),l.Db(2),l.Ib("with-button",t.showButton),l.sc("placeholder",t.fileOver?t.dropFilePlaceholder:t.messagePlaceholder),l.rc("status",t.getInputStatus())("ngModel",t.message),l.Db(1),l.rc("ngIf",t.showButton))},directives:[a.n,p.a,f.a,f.l,f.o,a.m,g.a,m.a],encapsulation:2,changeDetection:0}),e}(),x=n("R0Ic");function O(e,t){if(1&e&&(l.Wb(0,"p",2),l.Lc(1),l.Wb(2,"time"),l.Lc(3),l.mc(4,"date"),l.Vb(),l.Vb()),2&e){var n=l.lc();l.Db(1),l.Nc("",n.sender," "),l.Db(2),l.Mc(l.oc(4,2,n.date,n.dateFormat))}}function I(e,t){if(1&e&&(l.Wb(0,"p",3),l.Lc(1),l.Vb()),2&e){var n=l.lc();l.Db(1),l.Mc(n.message)}}var j=function(){function e(){this.dateFormat="shortTime"}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-message-text"]],inputs:{sender:"sender",message:"message",date:"date",dateFormat:"dateFormat"},decls:2,vars:2,consts:[["class","sender",4,"ngIf"],["class","text",4,"ngIf"],[1,"sender"],[1,"text"]],template:function(e,t){1&e&&(l.Jc(0,O,5,5,"p",0),l.Jc(1,I,2,1,"p",1)),2&e&&(l.rc("ngIf",t.sender||t.date),l.Db(1),l.rc("ngIf",t.message))},directives:[a.n],pipes:[a.e],encapsulation:2,changeDetection:0}),e}(),J=function(){return(J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function M(e,t){if(1&e&&l.Rb(0,"nb-icon",7),2&e){var n=l.lc().$implicit;l.rc("icon",n.icon)}}function S(e,t){if(1&e&&l.Rb(0,"div"),2&e){var n=l.lc().$implicit;l.Hc("background-image",n.urlStyle)}}function z(e,t){if(1&e&&(l.Wb(0,"a",4),l.Jc(1,M,1,1,"nb-icon",5),l.Jc(2,S,1,2,"div",6),l.Vb()),2&e){var n=t.$implicit;l.rc("href",n.url,l.Ec),l.Db(1),l.rc("ngIf",!n.urlStyle&&n.icon),l.Db(1),l.rc("ngIf",n.urlStyle)}}function V(e,t){if(1&e&&(l.Ub(0),l.Wb(1,"div",2),l.Jc(2,z,3,3,"a",3),l.Vb(),l.Tb()),2&e){var n=l.lc();l.Db(2),l.rc("ngForOf",n.readyFiles)}}function P(e,t){if(1&e&&l.Rb(0,"nb-icon",7),2&e){var n=l.lc(2);l.rc("icon",n.readyFiles[0].icon)}}function W(e,t){if(1&e&&l.Rb(0,"div"),2&e){var n=l.lc(2);l.Hc("background-image",n.readyFiles[0].urlStyle)}}function B(e,t){if(1&e&&(l.Ub(0),l.Wb(1,"a",4),l.Jc(2,P,1,1,"nb-icon",5),l.Jc(3,W,1,2,"div",6),l.Vb(),l.Tb()),2&e){var n=l.lc();l.Db(1),l.rc("href",n.readyFiles[0].url,l.Ec),l.Db(1),l.rc("ngIf",!n.readyFiles[0].urlStyle&&n.readyFiles[0].icon),l.Db(1),l.rc("ngIf",n.readyFiles[0].urlStyle)}}var C=function(){function e(e,t){this.cd=e,this.domSanitizer=t,this.dateFormat="shortTime"}return Object.defineProperty(e.prototype,"files",{set:function(e){var t=this;this.readyFiles=(e||[]).map((function(e){var n=t.isImage(e);return J(J({},e),{urlStyle:n&&t.domSanitizer.bypassSecurityTrustStyle("url("+e.url+")"),isImage:n})})),this.cd.detectChanges()},enumerable:!1,configurable:!0}),e.prototype.isImage=function(e){var t=e.type;return!!t&&["image/png","image/jpeg","image/gif"].includes(t)},e.\u0275fac=function(t){return new(t||e)(l.Qb(l.h),l.Qb(u.b))},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-message-file"]],inputs:{message:"message",sender:"sender",date:"date",dateFormat:"dateFormat",files:"files"},decls:4,vars:7,consts:[[3,"sender","date","dateFormat","message"],[4,"ngIf"],[1,"message-content-group"],["target","_blank",3,"href",4,"ngFor","ngForOf"],["target","_blank",3,"href"],[3,"icon",4,"ngIf"],[3,"background-image",4,"ngIf"],[3,"icon"]],template:function(e,t){1&e&&(l.Wb(0,"nb-chat-message-text",0),l.Lc(1),l.Vb(),l.Jc(2,V,3,1,"ng-container",1),l.Jc(3,B,4,3,"ng-container",1)),2&e&&(l.rc("sender",t.sender)("date",t.date)("dateFormat",t.dateFormat)("message",t.message),l.Db(1),l.Nc(" ",t.message," "),l.Db(1),l.rc("ngIf",(null==t.readyFiles?null:t.readyFiles.length)>1),l.Db(1),l.rc("ngIf",1===(null==t.readyFiles?null:t.readyFiles.length)))},directives:[j,a.n,a.m,g.a],encapsulation:2,changeDetection:0}),e}();function q(e,t){if(1&e&&(l.Wb(0,"p",3),l.Lc(1),l.Wb(2,"time"),l.Lc(3),l.mc(4,"date"),l.Vb(),l.Vb()),2&e){var n=l.lc();l.Db(1),l.Nc("",n.sender," "),l.Db(2),l.Mc(l.oc(4,2,n.date,n.dateFormat))}}var k=function(){function e(){this.dateFormat="shortTime"}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-message-quote"]],inputs:{message:"message",sender:"sender",date:"date",dateFormat:"dateFormat",quote:"quote"},decls:5,vars:4,consts:[["class","sender",4,"ngIf"],[1,"quote"],[3,"message"],[1,"sender"]],template:function(e,t){1&e&&(l.Jc(0,q,5,5,"p",0),l.Wb(1,"p",1),l.Lc(2),l.Vb(),l.Wb(3,"nb-chat-message-text",2),l.Lc(4),l.Vb()),2&e&&(l.rc("ngIf",t.sender||t.date),l.Db(2),l.Nc(" ",t.quote," "),l.Db(1),l.rc("message",t.message),l.Db(1),l.Nc(" ",t.message," "))},directives:[a.n,j],pipes:[a.e],encapsulation:2,changeDetection:0}),e}(),R=function(){return function(){}}(),T=function(e){return[e]},N=function(){function e(e){this.dateFormat="shortTime",this.mapKey=e.messageGoogleMapKey}return Object.defineProperty(e.prototype,"file",{get:function(){return{url:"https://maps.googleapis.com/maps/api/staticmap?center="+this.latitude+","+this.longitude+"&zoom=12&size=400x400&key="+this.mapKey,type:"image/png",icon:"location"}},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)(l.Qb(R))},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-message-map"]],inputs:{message:"message",sender:"sender",date:"date",dateFormat:"dateFormat",latitude:"latitude",longitude:"longitude"},decls:1,vars:7,consts:[[3,"files","message","sender","date","dateFormat"]],template:function(e,t){1&e&&l.Rb(0,"nb-chat-message-file",0),2&e&&l.rc("files",l.vc(5,T,t.file))("message",t.message)("sender",t.sender)("date",t.date)("dateFormat",t.dateFormat)},directives:[C],encapsulation:2,changeDetection:0}),e}();function E(e,t){if(1&e&&(l.Ub(0),l.Lc(1),l.Tb()),2&e){var n=l.lc(2);l.Db(1),l.Nc(" ",n.getInitials()," ")}}function H(e,t){if(1&e&&(l.Wb(0,"div",7),l.Jc(1,E,2,1,"ng-container",8),l.Vb()),2&e){var n=l.lc();l.Hc("background-image",n.avatarStyle),l.Db(1),l.rc("ngIf",!n.avatarStyle)}}function _(e,t){if(1&e&&l.Rb(0,"nb-chat-message-file",9),2&e){var n=l.lc();l.rc("sender",n.sender)("date",n.date)("dateFormat",n.dateFormat)("message",n.message)("files",n.files)}}function A(e,t){if(1&e&&l.Rb(0,"nb-chat-message-quote",10),2&e){var n=l.lc();l.rc("sender",n.sender)("date",n.date)("dateFormat",n.dateFormat)("message",n.message)("quote",n.quote)}}function L(e,t){if(1&e&&l.Rb(0,"nb-chat-message-map",11),2&e){var n=l.lc();l.rc("sender",n.sender)("date",n.date)("message",n.message)("latitude",n.latitude)("longitude",n.longitude)}}function K(e,t){if(1&e&&l.Rb(0,"nb-chat-message-text",12),2&e){var n=l.lc();l.rc("sender",n.sender)("date",n.date)("dateFormat",n.dateFormat)("message",n.message)}}var $=function(){function e(e){this.domSanitizer=e,this._reply=!1}return Object.defineProperty(e.prototype,"flyInOut",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"notReply",{get:function(){return!this.reply},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"reply",{get:function(){return this._reply},set:function(e){this._reply=Object(c.a)(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"avatar",{set:function(e){this.avatarStyle=e?this.domSanitizer.bypassSecurityTrustStyle("url("+e+")"):null},enumerable:!1,configurable:!0}),e.prototype.getInitials=function(){return this.sender?this.sender.split(" ").map((function(e){return e.charAt(0)})).splice(0,2).join("").toUpperCase():""},e.\u0275fac=function(t){return new(t||e)(l.Qb(u.b))},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-message"]],hostVars:5,hostBindings:function(e,t){2&e&&(l.Ic("@flyInOut",t.flyInOut),l.Ib("not-reply",t.notReply)("reply",t.reply))},inputs:{reply:"reply",message:"message",sender:"sender",date:"date",dateFormat:"dateFormat",files:"files",quote:"quote",latitude:"latitude",longitude:"longitude",avatar:"avatar",type:"type"},decls:7,vars:5,consts:[["class","avatar",3,"background-image",4,"ngIf"],[1,"message"],[3,"ngSwitch"],[3,"sender","date","dateFormat","message","files",4,"ngSwitchCase"],[3,"sender","date","dateFormat","message","quote",4,"ngSwitchCase"],[3,"sender","date","message","latitude","longitude",4,"ngSwitchCase"],[3,"sender","date","dateFormat","message",4,"ngSwitchDefault"],[1,"avatar"],[4,"ngIf"],[3,"sender","date","dateFormat","message","files"],[3,"sender","date","dateFormat","message","quote"],[3,"sender","date","message","latitude","longitude"],[3,"sender","date","dateFormat","message"]],template:function(e,t){1&e&&(l.Jc(0,H,2,3,"div",0),l.Wb(1,"div",1),l.Ub(2,2),l.Jc(3,_,1,5,"nb-chat-message-file",3),l.Jc(4,A,1,5,"nb-chat-message-quote",4),l.Jc(5,L,1,5,"nb-chat-message-map",5),l.Jc(6,K,1,4,"nb-chat-message-text",6),l.Tb(),l.Vb()),2&e&&(l.rc("ngIf",!t.reply),l.Db(2),l.rc("ngSwitch",t.type),l.Db(1),l.rc("ngSwitchCase","file"),l.Db(1),l.rc("ngSwitchCase","quote"),l.Db(1),l.rc("ngSwitchCase","map"))},directives:[a.n,a.o,a.p,a.q,C,k,N,j],encapsulation:2,data:{animation:[Object(x.l)("flyInOut",[Object(x.i)("in",Object(x.j)({transform:"translateX(0)"})),Object(x.k)("void => *",[Object(x.j)({transform:"translateX(-100%)"}),Object(x.e)(80)]),Object(x.k)("* => void",[Object(x.e)(80,Object(x.j)({transform:"translateX(100%)"}))])])]},changeDetection:0}),e}(),Q=["scrollable"];function U(e,t){if(1&e&&(l.Wb(0,"p",6),l.Lc(1),l.Vb()),2&e){var n=l.lc();l.Db(1),l.Mc(n.noMessagesPlaceholder)}}var X=[[["nb-chat-message"]],[["nb-chat-form"]]],G=["nb-chat-message","nb-chat-form"],Y=function(){function e(){this._status="basic",this.noMessagesPlaceholder="No messages yet.",this._scrollBottom=!0}return Object.defineProperty(e.prototype,"status",{get:function(){return this._status},set:function(e){e||(Object(c.b)("NbChat"),e="basic"),this._status=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scrollBottom",{get:function(){return this._scrollBottom},set:function(e){this._scrollBottom=Object(c.a)(e)},enumerable:!1,configurable:!0}),e.prototype.ngOnChanges=function(e){"status"in e&&this.updateFormStatus()},e.prototype.ngAfterContentInit=function(){this.updateFormStatus()},e.prototype.ngAfterViewInit=function(){var e=this;this.messages.changes.subscribe((function(t){e.messages=t,e.updateView()})),this.updateView()},e.prototype.updateView=function(){this.scrollBottom&&this.scrollListBottom()},e.prototype.scrollListBottom=function(){this.scrollable.nativeElement.scrollTop=this.scrollable.nativeElement.scrollHeight},e.prototype.updateFormStatus=function(){this.chatForm&&this.chatForm.setStatus(this.status)},Object.defineProperty(e.prototype,"tiny",{get:function(){return"tiny"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"small",{get:function(){return"small"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"medium",{get:function(){return"medium"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"large",{get:function(){return"large"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"giant",{get:function(){return"giant"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"primary",{get:function(){return"primary"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"success",{get:function(){return"success"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"info",{get:function(){return"info"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"warning",{get:function(){return"warning"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"danger",{get:function(){return"danger"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"basic",{get:function(){return"basic"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"control",{get:function(){return"control"===this.status},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat"]],contentQueries:function(e,t,n){var a;1&e&&(l.Jb(n,D,!0),l.Jb(n,$,!1)),2&e&&(l.yc(a=l.ic())&&(t.chatForm=a.first),l.yc(a=l.ic())&&(t.messages=a))},viewQuery:function(e,t){var n;1&e&&l.Qc(Q,!0),2&e&&l.yc(n=l.ic())&&(t.scrollable=n.first)},hostVars:24,hostBindings:function(e,t){2&e&&l.Ib("size-tiny",t.tiny)("size-small",t.small)("size-medium",t.medium)("size-large",t.large)("size-giant",t.giant)("status-primary",t.primary)("status-success",t.success)("status-info",t.info)("status-warning",t.warning)("status-danger",t.danger)("status-basic",t.basic)("status-control",t.control)},inputs:{title:"title",size:"size",status:"status",noMessagesPlaceholder:"noMessagesPlaceholder",scrollBottom:"scrollBottom"},features:[l.Bb],ngContentSelectors:G,decls:9,vars:2,consts:[[1,"header"],[1,"scrollable"],["scrollable",""],[1,"messages"],["class","no-messages",4,"ngIf"],[1,"form"],[1,"no-messages"]],template:function(e,t){1&e&&(l.qc(X),l.Wb(0,"div",0),l.Lc(1),l.Vb(),l.Wb(2,"div",1,2),l.Wb(4,"div",3),l.pc(5),l.Jc(6,U,2,1,"p",4),l.Vb(),l.Vb(),l.Wb(7,"div",5),l.pc(8,1),l.Vb()),2&e&&(l.Db(1),l.Mc(t.title),l.Db(5),l.rc("ngIf",!(null!=t.messages&&t.messages.length)))},directives:[a.n],styles:["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;height:100%}"]}),e}(),Z=function(){function e(){}return e.forRoot=function(t){return{ngModule:e,providers:[{provide:R,useValue:t||{}}]}},e.forChild=function(t){return{ngModule:e,providers:[{provide:R,useValue:t||{}}]}},e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)},imports:[[s.a,o.a,i.a,r.a]]}),e}(),ee=n("0AKQ"),te=n("tyNb");function ne(e,t){if(1&e&&l.Rb(0,"nb-chat-message",4),2&e){var n=t.$implicit;l.rc("type",n.type)("message",n.text)("reply",n.reply)("sender",n.user.name)("date",n.date)("files",n.files)("avatar",n.user.avatar)}}function ae(e,t){if(1&e){var n=l.Xb();l.Wb(0,"nb-chat",1),l.Jc(1,ne,1,7,"nb-chat-message",2),l.Wb(2,"nb-chat-form",3),l.hc("send",(function(e){l.Cc(n);var a=t.$implicit;return l.lc().sendMessage(a.messages,e)})),l.Vb(),l.Vb()}if(2&e){var a=t.$implicit;l.rc("title",a.title)("status",a.status),l.Db(1),l.rc("ngForOf",a.messages)}}var se=function(){function e(){this.chats=[{status:"success",title:"Nebular Conversational UI Success",messages:[{text:"Success!",date:new Date,reply:!1,user:{name:"Bot",avatar:"https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png"}}]},{status:"danger",title:"Nebular Conversational UI Danger",messages:[{text:"Danger!",date:new Date,reply:!1,user:{name:"Bot",avatar:"https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png"}}]},{status:"primary",title:"Nebular Conversational UI Primary",messages:[{text:"Primary!",date:new Date,reply:!1,user:{name:"Bot",avatar:"https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png"}}]},{status:"info",title:"Nebular Conversational UI Info",messages:[{text:"Info!",date:new Date,reply:!1,user:{name:"Bot",avatar:"https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png"}}]},{status:"warning",title:"Nebular Conversational UI Warning",messages:[{text:"Warning!",date:new Date,reply:!1,user:{name:"Bot",avatar:"https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png"}}]}]}return e.prototype.sendMessage=function(e,t){e.push({text:t.message,date:new Date,reply:!0,user:{name:"Jonh Doe",avatar:"https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif"}})},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-colors"]],decls:1,vars:1,consts:[["size","small",3,"title","status",4,"ngFor","ngForOf"],["size","small",3,"title","status"],[3,"type","message","reply","sender","date","files","avatar",4,"ngFor","ngForOf"],[3,"send"],[3,"type","message","reply","sender","date","files","avatar"]],template:function(e,t){1&e&&l.Jc(0,ae,3,3,"nb-chat",0),2&e&&l.rc("ngForOf",t.chats)},directives:[a.m,Y,D,$],styles:["nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 500px;\n      margin: 0.5rem 0 2rem 2rem;\n    }"]}),e}();function re(e,t){if(1&e&&l.Rb(0,"nb-chat-message",4),2&e){var n=t.$implicit;l.rc("type",n.type)("message",n.text)("reply",n.reply)("sender",n.user.name)("date",n.date)("files",n.files)("quote",n.quote)("latitude",n.latitude)("longitude",n.longitude)("avatar",n.user.avatar)}}function ie(e,t){if(1&e&&l.Rb(0,"nb-chat-message",4),2&e){var n=t.$implicit;l.rc("type",n.type)("message",n.text)("reply",!n.reply)("sender",n.user.name)("date",n.date)("files",n.files)("quote",n.quote)("latitude",n.latitude)("longitude",n.longitude)("avatar",n.user.avatar)}}var oe=function(){function e(){this.messages=[]}return e.prototype.sendMessage=function(e,t,n,a){var s=e.files?e.files.map((function(e){return{url:e.src,type:e.type,icon:"file-text-outline"}})):[];this.messages.push({text:e.message,date:new Date,reply:a,type:s.length?"file":"text",files:s,user:{name:t,avatar:n}})},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-conversation-showcase"]],decls:6,vars:6,consts:[["title","Jake","size","medium","status","warning"],[3,"type","message","reply","sender","date","files","quote","latitude","longitude","avatar",4,"ngFor","ngForOf"],[3,"showButton","dropFiles","send"],["title","John","size","medium","status","success"],[3,"type","message","reply","sender","date","files","quote","latitude","longitude","avatar"]],template:function(e,t){1&e&&(l.Wb(0,"nb-chat",0),l.Jc(1,re,1,10,"nb-chat-message",1),l.Wb(2,"nb-chat-form",2),l.hc("send",(function(e){return t.sendMessage(e,"Jake","http://www.reactiongifs.com/r/wnd1.gif",!0)})),l.Vb(),l.Vb(),l.Wb(3,"nb-chat",3),l.Jc(4,ie,1,10,"nb-chat-message",1),l.Wb(5,"nb-chat-form",2),l.hc("send",(function(e){return t.sendMessage(e,"John","https://i.gifer.com/no.gif",!1)})),l.Vb(),l.Vb()),2&e&&(l.Db(1),l.rc("ngForOf",t.messages),l.Db(1),l.rc("showButton",!1)("dropFiles",!0),l.Db(2),l.rc("ngForOf",t.messages),l.Db(1),l.rc("showButton",!1)("dropFiles",!0))},directives:[Y,a.m,D,$],styles:["nb-layout-column {\n      display: flex;\n      justify-content: center;\n    }\n    [_nghost-%COMP%] {\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 300px;\n      margin: 1rem;\n    }"]}),e}();function ce(e,t){if(1&e&&l.Rb(0,"nb-chat-message",3),2&e){var n=t.$implicit;l.rc("type",n.type)("message",n.text)("reply",n.reply)("sender",n.user.name)("date",n.date)("files",n.files)("avatar",n.user.avatar)}}var le=function(){function e(){this.messages=[{text:"Drag & drop a file or a group of files.",date:new Date,reply:!0,user:{name:"Bot",avatar:"https://i.gifer.com/no.gif"}}]}return e.prototype.sendMessage=function(e){var t=e.files?e.files.map((function(e){return{url:e.src,type:e.type,icon:"file-text-outline"}})):[];this.messages.push({text:e.message,date:new Date,files:t,type:t.length?"file":"text",reply:!0,user:{name:"Jonh Doe",avatar:"https://i.gifer.com/no.gif"}})},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-drop"]],decls:3,vars:2,consts:[["title","Drag & Drop chat","size","medium"],[3,"type","message","reply","sender","date","files","avatar",4,"ngFor","ngForOf"],[3,"dropFiles","send"],[3,"type","message","reply","sender","date","files","avatar"]],template:function(e,t){1&e&&(l.Wb(0,"nb-chat",0),l.Jc(1,ce,1,7,"nb-chat-message",1),l.Wb(2,"nb-chat-form",2),l.hc("send",(function(e){return t.sendMessage(e)})),l.Vb(),l.Vb()),2&e&&(l.Db(1),l.rc("ngForOf",t.messages),l.Db(1),l.rc("dropFiles",!0))},directives:[Y,a.m,D,$],styles:["nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 500px;\n      height: 80vw;\n    }"]}),e}(),ue=function(){return{url:"http://www.reactiongifs.com/r/wnd1.gif",type:"image/gif"}},pe=function(e){return[e]},fe=function(){return{url:"https://picsum.photos/320/240/?image=387",type:"image/jpeg"}},ge=function(){return{url:"http://google.com",icon:"file-text-outline"}},me=function(e,t,n){return[e,t,n]},de=function(){function e(){this.date=new Date}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-message-type-showcase"]],decls:7,vars:35,consts:[["title","Message Types","size","large"],["message","Gif message","type","file","sender","John Doe","avatar","https://i.gifer.com/no.gif",3,"reply","date","files"],["message","Image message","type","file","sender","John Doe","avatar","https://i.gifer.com/no.gif",3,"reply","date","files"],["message","Map message","type","map","sender","John Doe","avatar","https://i.gifer.com/no.gif",3,"reply","date","latitude","longitude"],["message","File message","type","file","sender","John Doe",3,"reply","date","files","avatar"],["message","Quote message","type","quote","sender","John Doe","quote","Quooted message here","avatar","https://i.gifer.com/no.gif",3,"reply","date"],["message","Group of files message","type","file","sender","John Doe","avatar","https://i.gifer.com/no.gif",3,"reply","date","files"]],template:function(e,t){1&e&&(l.Wb(0,"nb-chat",0),l.Rb(1,"nb-chat-message",1),l.Rb(2,"nb-chat-message",2),l.Rb(3,"nb-chat-message",3),l.Rb(4,"nb-chat-message",4),l.Rb(5,"nb-chat-message",5),l.Rb(6,"nb-chat-message",6),l.Vb()),2&e&&(l.Db(1),l.rc("reply",!0)("date",t.date)("files",l.vc(20,pe,l.uc(19,ue))),l.Db(1),l.rc("reply",!0)("date",t.date)("files",l.vc(23,pe,l.uc(22,fe))),l.Db(1),l.rc("reply",!0)("date",t.date)("latitude",53.914321)("longitude",27.5998355),l.Db(1),l.rc("reply",!0)("date",t.date)("files",l.vc(26,pe,l.uc(25,ge)))("avatar","https://i.gifer.com/no.gif"),l.Db(1),l.rc("reply",!0)("date",t.date),l.Db(1),l.rc("reply",!0)("date",t.date)("files",l.xc(31,me,l.uc(28,ge),l.uc(29,fe),l.uc(30,ue))))},directives:[Y,$],styles:["nb-chat[_ngcontent-%COMP%] {\n      margin: 0 auto;\n      width: 500px;\n    }"]}),e}(),he=[{text:"Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",reply:!1,date:new Date,user:{name:"John Doe",avatar:"https://i.gifer.com/no.gif"}},{text:"Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",reply:!0,date:new Date,user:{name:"John Doe",avatar:"https://i.gifer.com/no.gif"}},{text:"Hello, how are you?",reply:!1,date:new Date,user:{name:"John Doe",avatar:""}},{text:"Hey looks at that pic I just found!",reply:!1,date:new Date,type:"file",files:[{url:"https://i.gifer.com/no.gif",type:"image/jpeg",icon:!1}],user:{name:"John Doe",avatar:""}},{text:"What do you mean by that?",reply:!1,date:new Date,type:"quote",quote:"Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",user:{name:"John Doe",avatar:""}},{text:"Attached is an archive I mentioned",reply:!0,date:new Date,type:"file",files:[{url:"https://i.gifer.com/no.gif",icon:"file-text-outline"}],user:{name:"John Doe",avatar:""}},{text:"Meet me there",reply:!1,date:new Date,type:"map",latitude:40.714728,longitude:-73.998672,user:{name:"John Doe",avatar:""}}],be="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png",ye=["https://media.tenor.com/images/ac287fd06319e47b1533737662d5bfe8/tenor.gif","https://i.gifer.com/no.gif","https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif","http://www.reactiongifs.com/r/wnd1.gif"],ve=["https://picsum.photos/320/240/?image=357","https://picsum.photos/320/240/?image=556","https://picsum.photos/320/240/?image=339","https://picsum.photos/320/240/?image=387","https://picsum.photos/320/240/?image=30","https://picsum.photos/320/240/?image=271"],we=[{regExp:/([H,h]ey)|([H,h]i)/g,answerArray:["Hello!","Yes?","Yes, milord?","What can I do for you?"],type:"text",reply:{text:"",reply:!1,date:new Date,user:{name:"Bot",avatar:be}}},{regExp:/([H,h]elp)/g,answerArray:['No problem! Try sending a message containing word "hey", "image",\n    "gif", "file", "map", "quote", "file group" to see different message components'],type:"text",reply:{text:"",reply:!1,date:new Date,user:{name:"Bot",avatar:be}}},{regExp:/([I,i]mage)|(IMAGE)|([P,p]ic)|(Picture)/g,answerArray:["Hey look at this!","Ready to work","Yes, master."],type:"pic",reply:{text:"",reply:!1,date:new Date,type:"file",files:[{url:"",type:"image/jpeg"}],user:{name:"Bot",avatar:be}}},{regExp:/([G,g]if)|(GIF)/g,type:"gif",answerArray:["No problem","Well done","You got it man"],reply:{text:"",reply:!1,date:new Date,type:"file",files:[{url:"",type:"image/gif"}],user:{name:"Bot",avatar:be}}},{regExp:/([F,f]ile group)|(FILE)/g,type:"group",answerArray:["Take it!","Job Done.","As you wish"],reply:{text:"",reply:!1,date:new Date,type:"file",files:[{url:"http://google.com",icon:"file-text-outline"},{url:"",type:"image/gif"},{url:"",type:"image/jpeg"}],icon:"file-text-outline",user:{name:"Bot",avatar:be}}},{regExp:/([F,f]ile)|(FILE)/g,type:"file",answerArray:["Take it!","Job Done.","As you wish"],reply:{text:"",reply:!1,date:new Date,type:"file",files:[{url:"http://google.com",icon:"file-text-outline"}],icon:"file-text-outline",user:{name:"Bot",avatar:be}}},{regExp:/([M,m]ap)|(MAP)/g,type:"map",answerArray:["Done.","My sight is yours.","I shall be your eyes."],reply:{text:"",reply:!1,date:new Date,type:"map",latitude:53.914321,longitude:27.5998355,user:{name:"Bot",avatar:be}}},{regExp:/([Q,q]uote)|(QUOTE)/g,type:"quote",answerArray:["Quoted!","Say no more.","I gladly obey."],reply:{text:"",reply:!1,date:new Date,type:"quote",quote:"",user:{name:"Bot",avatar:be}}},{regExp:/(.*)/g,answerArray:['Hello there! Try typing "help"'],type:"text",reply:{text:"",reply:!1,date:new Date,user:{name:"Bot",avatar:be}}}],Fe=function(){return(Fe=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},De=function(){function e(){}return e.prototype.loadMessages=function(){return he},e.prototype.loadBotReplies=function(){return we},e.prototype.reply=function(e){var t=this.loadBotReplies().find((function(t){return-1!==e.search(t.regExp)}));return"quote"===t.reply.type&&(t.reply.quote=e),"gif"===t.type&&(t.reply.files[0].url=ye[Math.floor(Math.random()*ye.length)]),"pic"===t.type&&(t.reply.files[0].url=ve[Math.floor(Math.random()*ve.length)]),"group"===t.type&&(t.reply.files[1].url=ye[Math.floor(Math.random()*ye.length)],t.reply.files[2].url=ve[Math.floor(Math.random()*ve.length)]),t.reply.text=t.answerArray[Math.floor(Math.random()*t.answerArray.length)],Fe({},t.reply)},e.\u0275prov=l.Mb({token:e,factory:e.\u0275fac=function(t){return new(t||e)}}),e}();function xe(e,t){if(1&e&&l.Rb(0,"nb-chat-message",3),2&e){var n=t.$implicit;l.rc("type",n.type)("message",n.text)("reply",n.reply)("sender",n.user.name)("date",n.date)("files",n.files)("quote",n.quote)("latitude",n.latitude)("longitude",n.longitude)("avatar",n.user.avatar)}}function Oe(e,t){if(1&e&&l.Rb(0,"nb-chat-message",4),2&e){var n=t.$implicit;l.rc("type",n.type)("message",n.text)("reply",n.reply)("sender",n.user.name)("date",n.date)("files",n.files)("avatar",n.user.avatar)}}function Ie(e,t){if(1&e){var n=l.Xb();l.Wb(0,"nb-chat",1),l.Jc(1,Oe,1,7,"nb-chat-message",2),l.Wb(2,"nb-chat-form",3),l.hc("send",(function(e){l.Cc(n);var a=t.$implicit;return l.lc().sendMessage(a.messages,e)})),l.Vb(),l.Vb()}if(2&e){var a=t.$implicit;l.rc("title",a.title)("size",a.size),l.Db(1),l.rc("ngForOf",a.messages)}}function je(e,t){if(1&e&&l.Rb(0,"nb-chat-message",4),2&e){var n=t.$implicit;l.rc("type",n.type)("message",n.text)("reply",n.reply)("sender",n.user.name)("date",n.date)("files",n.files)("quote",n.quote)("latitude",n.latitude)("longitude",n.longitude)("avatar",n.user.avatar)}}function Je(e,t){if(1&e){var n=l.Xb();l.Wb(0,"nb-chat",1),l.Jc(1,je,1,10,"nb-chat-message",2),l.Wb(2,"nb-chat-form",3),l.hc("send",(function(e){return l.Cc(n),l.lc().sendMessage(e)})),l.Vb(),l.Vb()}if(2&e){var a=t.$implicit,s=l.lc();l.rc("size",a.size)("status",a.status),l.Db(1),l.rc("ngForOf",s.messages)}}var Me=[{path:"chat-colors.component",component:se},{path:"chat-conversation-showcase.component",component:oe},{path:"chat-drop.component",component:le},{path:"chat-message-types-showcase.component",component:de},{path:"chat-showcase.component",component:function(){function e(e){this.chatShowcaseService=e,this.messages=this.chatShowcaseService.loadMessages()}return e.prototype.sendMessage=function(e){var t=this,n=e.files?e.files.map((function(e){return{url:e.src,type:e.type,icon:"file-text-outline"}})):[];this.messages.push({text:e.message,date:new Date,reply:!0,type:n.length?"file":"text",files:n,user:{name:"Jonh Doe",avatar:"https://i.gifer.com/no.gif"}});var a=this.chatShowcaseService.reply(e.message);a&&setTimeout((function(){t.messages.push(a)}),500)},e.\u0275fac=function(t){return new(t||e)(l.Qb(De))},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-showcase"]],features:[l.Cb([De])],decls:3,vars:2,consts:[["title","Nebular Conversational UI","size","large"],[3,"type","message","reply","sender","date","files","quote","latitude","longitude","avatar",4,"ngFor","ngForOf"],[3,"dropFiles","send"],[3,"type","message","reply","sender","date","files","quote","latitude","longitude","avatar"]],template:function(e,t){1&e&&(l.Wb(0,"nb-chat",0),l.Jc(1,xe,1,10,"nb-chat-message",1),l.Wb(2,"nb-chat-form",2),l.hc("send",(function(e){return t.sendMessage(e)})),l.Vb(),l.Vb()),2&e&&(l.Db(1),l.rc("ngForOf",t.messages),l.Db(1),l.rc("dropFiles",!0))},directives:[Y,a.m,D,$],styles:["nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 500px;\n    }"]}),e}()},{path:"chat-sizes.component",component:function(){function e(){this.chats=[{title:"Nebular Conversational UI Small",messages:[{text:"Small!",date:new Date,reply:!0,user:{name:"Bot",avatar:"https://i.gifer.com/no.gif"}}],size:"small"},{title:"Nebular Conversational UI Medium",messages:[{text:"Medium!",date:new Date,reply:!0,user:{name:"Bot",avatar:"https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png"}}],size:"large"}]}return e.prototype.sendMessage=function(e,t){e.push({text:t.message,date:new Date,reply:!0,user:{name:"Jonh Doe",avatar:"https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif"}})},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-sizes"]],decls:1,vars:1,consts:[["status","info",3,"title","size",4,"ngFor","ngForOf"],["status","info",3,"title","size"],[3,"type","message","reply","sender","date","files","avatar",4,"ngFor","ngForOf"],[3,"send"],[3,"type","message","reply","sender","date","files","avatar"]],template:function(e,t){1&e&&l.Jc(0,Ie,3,3,"nb-chat",0),2&e&&l.rc("ngForOf",t.chats)},directives:[a.m,Y,D,$],styles:["nb-layout-column {\n      justify-content: center;\n      display: flex;\n    }\n    nb-chat[_ngcontent-%COMP%] {\n      width: 500px;\n      margin: 0.5rem 0 2rem 2rem;\n    }"]}),e}()},{path:"chat-test.component",component:function(){function e(){this.messages=[],this.sizes=["tiny","small","medium","large","giant"],this.statuses=["primary","success","info","warning","danger"],this.chats=this.prepareChats()}return e.prototype.prepareChats=function(){var e=this,t=[];return this.statuses.forEach((function(n){e.sizes.forEach((function(e){t.push({size:e,status:n})}))})),t},e.prototype.sendMessage=function(e){this.messages.push({text:e.message,date:new Date,reply:!0,user:{name:"Jonh Doe",avatar:"https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif"}})},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Kb({type:e,selectors:[["nb-chat-test"]],decls:1,vars:1,consts:[[3,"size","status",4,"ngFor","ngForOf"],[3,"size","status"],[3,"type","message","reply","sender","date","files","quote","latitude","longitude","avatar",4,"ngFor","ngForOf"],[3,"send"],[3,"type","message","reply","sender","date","files","quote","latitude","longitude","avatar"]],template:function(e,t){1&e&&l.Jc(0,Je,3,3,"nb-chat",0),2&e&&l.rc("ngForOf",t.chats)},directives:[a.m,Y,D,$],encapsulation:2}),e}()}],Se=function(){function e(){}return e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)},imports:[[te.g.forChild(Me)],te.g]}),e}(),ze=function(){function e(){}return e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)},imports:[[a.c,Z.forRoot(),ee.a,Se]]}),e}()}}]);