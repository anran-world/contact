import{a as H,r as u,o as h,c as _,F as y,b as S,d as l,w as s,e as i,p as N,f as R,g as d,h as U,t as A,i as F,j as E,n as I,k as j,l as G,v as P,m as z,q as K}from"./vendor.45448395.js";const M=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))b(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&b(r)}).observe(document,{childList:!0,subtree:!0});function k(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function b(o){if(o.ep)return;o.ep=!0;const a=k(o);fetch(o.href,a)}};M();const J="https://blog.3kla.xyz",W=3e3,V=H.create({baseURL:J,timeout:W});V.interceptors.request.use(t=>(t.headers["Content-Type"]="application/json",t),t=>t);V.interceptors.response.use(t=>t.data,t=>t);function T(t){return V({url:"/api/get",params:t})}function Y(t){return V({method:"post",url:"/api/add",data:t})}function Q(t){return V({method:"post",url:"/api/update",data:t})}var D=(t,e)=>{for(const[k,b]of e)t[k]=b;return t};const X={props:{mobile:Boolean,dataSource:Array,searchFiled:String},inject:["reload"],data(){return{dynamicValidateForm:{title:"",addFlag:!1,editFlag:!1,children:[{key:1,title:"",url:"",search:""}]},input:{title:"",url:"",search:""},editValue:"",count:0,password:void 0,dialogVisible:!1,remoteDataSource:void 0}},methods:{async login(){if(!this.password){this.$notify.warning({message:"\u8BF7\u8F93\u5165\u6697\u53F7\uFF01",position:"top-left"});return}if(this.password==="default"){this.$notify.warning({message:"\u8BF7\u52FF\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF01",position:"top-left"});return}if((await T({user:this.password})).status==="err"){const e={user:this.password,data:JSON.stringify(this.dataSource)};console.log("[ type data.data ]",typeof e.data),(await Y(e)).status!=="err"?(this.$notify.success({message:"\u521B\u5EFA\u6210\u529F",position:"top-left"}),localStorage.setItem("user",this.password),this.reload()):this.$notify.error()}else this.$notify.success({message:"\u767B\u5F55\u6210\u529F\uFF0C\u4EE5\u540E\u7684\u4EE5\u540E\u5747\u53EF\u514D\u767B\u5F55\u54E6\uFF01",position:"top-left"}),localStorage.setItem("user",this.password),this.reload()},cancel(){localStorage.clear(),this.$notify.success({message:"\u5DF2\u9000\u51FA, \u5237\u65B0\u5373\u53EF",position:"top-left"}),this.reload()},addFolder(){this.dialogVisible=!0},addHandle(t){t.editFlag=!1,t.addFlag=!0},upHandle(t,e){if(e===0){this.$notify.warning({message:"\u5DF2\u662F\u6700\u524D\u4E00\u9879\uFF01",position:"top-left"});return}this.dataSource.splice(e,1),this.dataSource.splice(e-1,0,t),this.$emit("change")},editHandle(t){t.addFlag=!1,this.editValue=t.title,t.editFlag=!0},downHandle(t,e){if(e===this.dataSource.length-1){this.$notify.warning({message:"\u5DF2\u662F\u6700\u540E\u4E00\u9879\uFF01",position:"top-left"});return}this.dataSource.splice(e,1),this.dataSource.splice(e+1,0,t),this.$emit("change")},deleteHandle(t,e){t.banDelete||(this.dataSource.splice(e,1),this.$emit("change"))},closeSingle(t,e){t.splice(e,1),this.$emit("change")},submitForm(){let t=!0;if(this.dynamicValidateForm.children.forEach(e=>{(!e.title||!e.url)&&(t=!1)}),t&&this.dynamicValidateForm.title)this.dialogVisible=!1,this.dataSource.push(this.dynamicValidateForm);else{this.$notify.warning({message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",position:"top-left"});return}this.$emit("change")},removeDomain(t){const e=this.dynamicValidateForm.children.indexOf(t);e!==-1&&this.dynamicValidateForm.children.splice(e,1)},addDomain(){this.dynamicValidateForm.children.push({key:Date.now(),title:"",url:"",search:""})},openUrl(t){this.searchFiled?window.open(`${t.search}${this.searchFiled}`):window.open(t.url)},openAllUrl(t){t&&t.children.forEach(e=>{window.open(e.url)})},openAllSearchUrl(t){if(!this.searchFiled){this.$notify.warning({message:"\u5173\u952E\u8BCD\u4E0D\u80FD\u4E3A\u7A7A\u54E6\uFF01",position:"top-left"});return}t&&t.children.forEach(e=>{e.search&&window.open(`${e.search}${this.searchFiled}`)})},addFlagOk(t){if(!this.input.title||!this.input.url){this.$notify.warning({message:"\u6807\u9898\u3001\u7F51\u5740\u4E0D\u80FD\u4E3A\u7A7A\uFF01",position:"top-left"});return}t.children.push(this.input),t.addFlag=!1,t.editFlag=!1,this.input={title:"",url:"",search:""}},editFlagOk(t){t.title=this.editValue,t.addFlag=!1,t.editFlag=!1,this.editValue="",this.$emit("change")},editFlagCancel(t){t.addFlag=!1,t.editFlag=!1}}},g=t=>(N("data-v-6ede8982"),t=t(),R(),t),Z={class:"folder-content-pc animated fadeIn"},ee={class:"card-header",style:{}},te={class:"card-header-title"},le={class:"after-hover animated fadeIn"},se=g(()=>i("i",{class:"iconfont icon-plus-icon"},null,-1)),oe=g(()=>i("i",{class:"iconfont icon-arrow-up-2-icon"},null,-1)),ae=["onClick"],ne=g(()=>i("i",{class:"iconfont icon-blocks-icon"},null,-1)),ie=g(()=>i("i",{class:"iconfont icon-loupe-icon"},null,-1)),ce=g(()=>i("i",{class:"iconfont icon-arrow-down-2-icon"},null,-1)),re=g(()=>i("i",{class:"iconfont icon-close-icon"},null,-1)),de={class:"card-content"},ue=d("\u786E\u5B9A"),pe=d("\u53D6\u6D88"),he=d("\u786E\u5B9A"),me=d("\u53D6\u6D88"),fe=g(()=>i("div",{class:"warning animated fadeIn"},"\u6807\u7B7E\u4E0A\u53F3\u51FB\uFF0C\u53EF\u5220\u9664\u5355\u4E2A\u6807\u7B7E",-1)),_e=g(()=>i("div",{class:"card-header",style:{}},[i("div",{class:"card-header-title-diy"},"\u81EA\u5B9A\u4E49")],-1)),ge={class:"card-content card-content-diy"},we=g(()=>i("div",{style:{margin:"0 0 10px",color:"#c0c4cc","font-size":"12px","letter-spacing":"3px","white-space":"wrap"}},"\u521B\u5EFA\u4E00\u4E2A\u6697\u53F7\uFF0C\u53EF\u4E91\u7AEF\u4FDD\u5B58\u60A8\u7684\u66F4\u6539",-1)),ke=d("\u786E\u5B9A"),ve=d("\u9000\u51FA"),ye=["onClick"],be=d("\u52A0\u4E00\u884C"),Ce=d("\u4FDD\u5B58"),Ve=d("\u53D6\u6D88"),Fe=d("\u65B0\u589E\u6587\u4EF6\u5939");function Se(t,e,k,b,o,a){const r=u("el-button"),f=u("el-tooltip"),p=u("el-input"),v=u("el-tag"),m=u("el-scrollbar"),$=u("el-card"),C=u("el-form-item"),q=u("el-form"),L=u("el-popover");return h(),_("div",Z,[(h(!0),_(y,null,S(k.dataSource,(n,w)=>(h(),U($,{class:"box-card-pc",shadow:"hover",key:w},{header:s(()=>[i("div",ee,[i("div",te,A(n.title),1),i("div",le,[l(f,{class:"item",content:"\u6DFB\u52A0\u7F51\u5740",placement:"top"},{default:s(()=>[l(r,{onClick:c=>a.addHandle(n),class:"clear-btn"},{default:s(()=>[se]),_:2},1032,["onClick"])]),_:2},1024),l(f,{class:"item",content:"\u4E0A\u79FB\u6587\u4EF6\u5939",placement:"top"},{default:s(()=>[l(r,{onClick:c=>a.upHandle(n,w),class:"clear-btn"},{default:s(()=>[oe]),_:2},1032,["onClick"])]),_:2},1024),l(f,{class:"item",content:"\u7F16\u8F91\u6587\u4EF6\u5939",placement:"top"},{default:s(()=>[l(r,{class:"clear-btn"},{default:s(()=>[i("i",{class:"iconfont icon-edit-icon",onClick:c=>a.editHandle(n)},null,8,ae)]),_:2},1024)]),_:2},1024),l(f,{class:"item",content:"\u5168\u90E8\u6253\u5F00",placement:"top"},{default:s(()=>[l(r,{onClick:c=>a.openAllUrl(n),class:"clear-btn"},{default:s(()=>[ne]),_:2},1032,["onClick"])]),_:2},1024),l(f,{class:"item",content:"\u4ECE\u4EE5\u4E0B\u7F51\u7AD9\uFF0C\u641C\u7D22\u4E0A\u65B9\u8F93\u5165\u7684\u5173\u952E\u8BCD",placement:"top"},{default:s(()=>[l(r,{onClick:c=>a.openAllSearchUrl(n),class:"clear-btn"},{default:s(()=>[ie]),_:2},1032,["onClick"])]),_:2},1024),l(f,{class:"item",content:"\u4E0B\u79FB\u6587\u4EF6\u5939",placement:"top"},{default:s(()=>[l(r,{onClick:c=>a.downHandle(n,w),class:"clear-btn"},{default:s(()=>[ce]),_:2},1032,["onClick"])]),_:2},1024),l(f,{class:"item",content:"\u5220\u9664\u6587\u4EF6\u5939",placement:"top"},{default:s(()=>[l(r,{onClick:c=>a.deleteHandle(n,w),class:"clear-btn"},{default:s(()=>[re]),_:2},1032,["onClick"])]),_:2},1024)])])]),default:s(()=>[l(m,{height:"300px"},{default:s(()=>[i("div",de,[n.addFlag?(h(),_(y,{key:0},[l(p,{class:"input",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:"",modelValue:o.input.title,"onUpdate:modelValue":e[0]||(e[0]=c=>o.input.title=c)},null,8,["modelValue"]),l(p,{class:"input",placeholder:"\u8BF7\u8F93\u5165\u7F51\u5740",clearable:"",modelValue:o.input.url,"onUpdate:modelValue":e[1]||(e[1]=c=>o.input.url=c)},null,8,["modelValue"]),l(p,{class:"input",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u7F51\u5740",clearable:"",modelValue:o.input.search,"onUpdate:modelValue":e[2]||(e[2]=c=>o.input.search=c)},null,8,["modelValue"]),l(v,{class:"btn",onClick:c=>a.addFlagOk(n)},{default:s(()=>[ue]),_:2},1032,["onClick"]),l(v,{class:"btn",onClick:c=>n.addFlag=!1},{default:s(()=>[pe]),_:2},1032,["onClick"])],64)):F("",!0),n.editFlag?(h(),_(y,{key:1},[l(p,{class:"input",placeholder:"\u4FEE\u6539\u6807\u9898",clearable:"",modelValue:o.editValue,"onUpdate:modelValue":e[3]||(e[3]=c=>o.editValue=c)},null,8,["modelValue"]),l(v,{class:"btn",onClick:c=>a.editFlagOk(n)},{default:s(()=>[he]),_:2},1032,["onClick"]),l(v,{class:"btn",onClick:c=>a.editFlagCancel(n)},{default:s(()=>[me]),_:2},1032,["onClick"])],64)):F("",!0),n.children?(h(),_(y,{key:2},[(h(!0),_(y,null,S(n.children,(c,x)=>(h(),U(v,{key:x,class:"item",onContextmenu:E(B=>a.closeSingle(n.children,x),["prevent","stop"]),onClick:B=>a.openUrl(c)},{default:s(()=>[d(A(c.title),1)]),_:2},1032,["onContextmenu","onClick"]))),128)),fe],64)):F("",!0)])]),_:2},1024)]),_:2},1024))),128)),l($,{class:"box-card-pc",shadow:"hover"},{header:s(()=>[_e]),default:s(()=>[i("div",ge,[we,l(p,{class:"item-input","show-password":"",placeholder:"8\u4F4D\u4EE5\u4E0A\u6700\u4F73",modelValue:o.password,"onUpdate:modelValue":e[4]||(e[4]=n=>o.password=n)},null,8,["modelValue"]),l(r,{class:"item item-diy",onClick:a.login,type:"success"},{default:s(()=>[ke]),_:1},8,["onClick"]),l(r,{class:"item item-diy",onClick:a.cancel,type:"info"},{default:s(()=>[ve]),_:1},8,["onClick"]),l(L,{trigger:"manual",placement:"top",class:"popover-form",width:400,visible:o.dialogVisible},{reference:s(()=>[l(r,{class:"item item-diy",onClick:a.addFolder,type:"warning"},{default:s(()=>[Fe]),_:1},8,["onClick"])]),default:s(()=>[l(q,{inline:"",ref:"dynamicValidateForm",model:o.dynamicValidateForm,"label-width":"auto",class:"form-dynamic"},{default:s(()=>[l(C,{label:"\u6587\u4EF6\u5939\u6807\u9898",required:""},{default:s(()=>[l(p,{modelValue:o.dynamicValidateForm.title,"onUpdate:modelValue":e[5]||(e[5]=n=>o.dynamicValidateForm.title=n),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u5939\u6807\u9898"},null,8,["modelValue"])]),_:1}),(h(!0),_(y,null,S(o.dynamicValidateForm.children,(n,w)=>(h(),_(y,{key:n.key},[l(C,{label:`\u540D\u79F0${w+1}`,required:""},{default:s(()=>[l(p,{modelValue:n.title,"onUpdate:modelValue":c=>n.title=c,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6807\u7B7E\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),l(C,{label:`\u7F51\u5740${w+1}`,required:"",class:"form-item-display"},{default:s(()=>[l(p,{modelValue:n.url,"onUpdate:modelValue":c=>n.url=c,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u7F51\u5740"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),l(C,{label:`\u641C\u7D22\u5730\u5740${w+1}`,class:"form-item-display"},{default:s(()=>[l(p,{modelValue:n.search,"onUpdate:modelValue":c=>n.search=c,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u542B\u641C\u7D22\u53C2\u6570\u7684\u7F51\u5740"},null,8,["modelValue","onUpdate:modelValue"]),i("i",{class:"iconfont icon-close-circle-icon",onClick:c=>a.removeDomain(n)},null,8,ye)]),_:2},1032,["label"])],64))),128)),l(C,null,{default:s(()=>[l(r,{onClick:a.addDomain,type:"success"},{default:s(()=>[be]),_:1},8,["onClick"]),l(r,{type:"primary",onClick:a.submitForm},{default:s(()=>[Ce]),_:1},8,["onClick"]),l(r,{onClick:e[6]||(e[6]=n=>o.dialogVisible=!1),type:"warning"},{default:s(()=>[Ve]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])]),_:1})])}var $e=D(X,[["render",Se],["__scopeId","data-v-6ede8982"]]);const xe={name:"App",components:{Folder:$e},data(){return{isDefault:!0,arrowShow:!0,affixToTopPx:0,affixToTop:!1,tempUser:"",max:0,isRouteAlive:!0,value:0,colorArr:[""],mobile:window.innerWidth<720,avatarImg:"https://cdn.jsdelivr.net/gh/anran-world/contact@master/\u6559\u7A0B\u5B58\u56FE/Anran\u6742\u8D27\u94FA - 24\u5C0F\u65F6\u5168\u5929\u670D\u52A1.r01wc7o6jmo.png",searchFiled:"",dataSource:void 0}},async created(){localStorage.getItem("user")&&(this.isDefault=!1),this.tempUser=localStorage.getItem("user")||"default";const t=await T({user:this.tempUser});this.dataSource=t.data},mounted(){this.affixToTopPx=this.$refs.affix.offsetTop-10,window.addEventListener("scroll",this.scrollListener)},provide(){return{reload:this.reload}},methods:{reload(){this.isDefault=!1,this.isRouteAlive=!1,this.$nextTick(()=>{this.isRouteAlive=!0})},engineClick(t){if(!this.searchFiled){this.$notify.warning({message:"\u5173\u952E\u8BCD\u4E0D\u80FD\u4E3A\u7A7A\u54E6\uFF01",position:"top-left"});return}const e=this.searchFiled;switch(t){case"Google":window.open(`https://www.google.com/search?q=${e}`);break;case"Baidu":window.open(`https://www.baidu.com/s?wd=${e}`);break;case"Bing":window.open(`https://www.bing.com/search?q=${e}`);break;case"Duck":window.open(`https://duckduckgo.com/?q=${e}`);break;case"Goobe":window.open(`https://goobe.io/search.aspx?k=${e}`);break;case"All":window.open(`https://www.google.com/search?q=${e}`),window.open(`https://www.bing.com/search?q=${e}`),window.open(`https://duckduckgo.com/?q=${e}`),window.open(`https://goobe.io/search.aspx?k=${e}`),window.open(`https://www.baidu.com/s?wd=${e}`);break}},scrollListener(){this.affixToTop=window.pageYOffset>this.affixToTopPx,this.arrowShow=window.pageYOffset<50},async dataSourceChange(){if(this.tempUser==="default")return;const t={user:localStorage.getItem("user"),data:JSON.stringify(this.dataSource)};await Q(t)},addFolder(t){this.mobile=!t}},destroyed(){window.removeEventListener("scroll",this.scrollListener)}},Ue={key:0},Ae={class:"avatar"},Ie=["src"],Te=i("div",{class:"slogon"},[i("img",{src:"https://cdn.jsdelivr.net/gh/anran-world/contact@master/\u6559\u7A0B\u5B58\u56FE/6f8cc2516cfe4ef4b9aa0c534c739979.5ya6fbnzcog0.PNG"})],-1),De={class:"search"},Oe=d("\u4E00\u8D77\u641C"),qe={class:"search-engine"},Le=d("\u8C37\u6B4C"),Be=d("\u767E\u5EA6"),He=d("\u5FC5\u5E94"),Ne=d("Duck"),Re=d("Goobe"),Ee=i("div",{class:"scroll-down"},[i("i",{class:"fa fa-angle-up scroll-down-effects"})],-1),je={class:"arrow-animation animated fadeOutUp infinite"},Ge=i("i",{class:"iconfont icon-arrow-up-1-icon"},null,-1),Pe=[Ge],ze={class:"bookmark"},Ke=i("div",{class:"footer"},null,-1);function Me(t,e,k,b,o,a){const r=u("el-button"),f=u("el-input"),p=u("folder"),v=u("el-backtop");return o.isRouteAlive?(h(),_("div",Ue,[i("div",{class:I(o.mobile?"search-section-m":"search-section-pc")},[i("div",Ae,[i("img",{src:o.avatarImg,class:"avatar-img"},null,8,Ie)]),Te,i("div",{class:I(o.affixToTop?"affix":"normal"),ref:"affix"},[i("div",De,[l(f,{clearable:"",autofocus:"",onKeyup:e[1]||(e[1]=j(m=>a.engineClick("Baidu"),["enter"])),modelValue:o.searchFiled,"onUpdate:modelValue":e[2]||(e[2]=m=>o.searchFiled=m),placeholder:"\u8BF7\u5148\u8F93\u5165\u5173\u952E\u8BCD\uFF0C\u70B9\u51FB\u4E0B\u65B9\u5F15\u64CE\u5373\u53EF\uFF0C\u9ED8\u8BA4\u56DE\u8F66\u767E\u5EA6",class:"search-input","prefix-icon":"el-icon-search"},{append:s(()=>[l(r,{class:"search-btn",onClick:e[0]||(e[0]=m=>a.engineClick("All"))},{default:s(()=>[Oe]),_:1})]),_:1},8,["modelValue"])]),i("div",qe,[l(r,{class:"search-engine-item",type:"danger",onClick:e[3]||(e[3]=m=>a.engineClick("Google")),style:{}},{default:s(()=>[Le]),_:1}),l(r,{class:"search-engine-item",type:"primary",onClick:e[4]||(e[4]=m=>a.engineClick("Baidu"))},{default:s(()=>[Be]),_:1}),l(r,{class:"search-engine-item",type:"success",onClick:e[5]||(e[5]=m=>a.engineClick("Bing"))},{default:s(()=>[He]),_:1}),l(r,{class:"search-engine-item",type:"warning",onClick:e[6]||(e[6]=m=>a.engineClick("Duck"))},{default:s(()=>[Ne]),_:1}),l(r,{class:"search-engine-item",type:"info",onClick:e[7]||(e[7]=m=>a.engineClick("Goobe"))},{default:s(()=>[Re]),_:1})]),Ee],2),G(i("div",je,Pe,512),[[P,o.arrowShow]]),i("div",ze,[l(p,{class:"folder",mobile:o.mobile,searchFiled:o.searchFiled,onAddFolder:a.addFolder,onChange:a.dataSourceChange,dataSource:o.dataSource},null,8,["mobile","searchFiled","onAddFolder","onChange","dataSource"])]),Ke],2),l(v)])):F("",!0)}var Je=D(xe,[["render",Me]]);const O=z(Je);O.use(K);O.mount("#app");
