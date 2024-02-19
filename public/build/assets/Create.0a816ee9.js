import{A as u}from"./AdminLayout.7f820933.js";import{L as h,H as p,a as r,o as b,c as f,f as i,w as d,F as v,d as s,j as c,k as y,v as T,e as l}from"./app.582c0194.js";import{P as g}from"./Pagination.c50e6533.js";import{V as k}from"./ValidationError.8a56aa3c.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";const x={components:{AdminLayout:u,Link:h,Pagination:g,ValidationError:k,Head:p},data(){return{trainType:{name:null}}},methods:{submit(){this.$inertia.post(route("admin.trainTypes.store"),this.trainType,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},V=s("head",null,[s("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F")],-1),A={class:"row mb-2"},L=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F")],-1),C={class:"col-sm-6"},B={class:"breadcrumb float-sm-right"},E={class:"breadcrumb-item"},N=["href"],F=s("i",{class:"fas fa-dashboard"},null,-1),H=l(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),M=[F,H],P={class:"breadcrumb-item"},S=["href"],$=s("i",{class:"fas fa-dashboard"},null,-1),j=l(" \u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0438\u043F\u043E\u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F "),D=[$,j],U=s("li",{class:"breadcrumb-item active"}," \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0438\u043F\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F ",-1),q={class:"container-fluid"},z={class:"card card-primary"},G={class:"card-body"},I={class:"form-group"},J=s("label",{for:""},"\u0410\u0442\u044B",-1),K={class:"card-footer"},O=s("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function Q(e,t,R,W,a,n){const m=r("validation-error"),_=r("AdminLayout");return b(),f(v,null,[V,i(_,null,{breadcrumbs:d(()=>[s("div",A,[L,s("div",C,[s("ol",B,[s("li",E,[s("a",{href:e.route("admin.index")},M,8,N)]),s("li",P,[s("a",{href:e.route("admin.trainTypes.index")},D,8,S)]),U])])])]),default:d(()=>[s("div",q,[s("div",z,[s("form",{method:"post",onSubmit:t[2]||(t[2]=c((...o)=>n.submit&&n.submit(...o),["prevent"]))},[s("div",G,[s("div",I,[J,y(s("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=o=>a.trainType.name=o),name:"name",placeholder:"\u0410\u0442\u044B"},null,512),[[T,a.trainType.name]]),i(m,{field:"name"})])]),s("div",K,[O,s("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=c(o=>e.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const os=w(x,[["render",Q]]);export{os as default};
