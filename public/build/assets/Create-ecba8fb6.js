import{A as h}from"./AdminLayout-4103f48c.js";import{L as u,H as b,a as r,o as f,c as p,d as i,w as d,F as v,e as o,f as c,g as y,v as g,h as l}from"./app-9ffddd28.js";import{P as w}from"./Pagination-53a04694.js";import{V as x}from"./ValidationError-271a82fa.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const k={components:{AdminLayout:h,Link:u,Pagination:w,ValidationError:x,Head:b},data(){return{role:{name:null}}},methods:{submit(){this.$inertia.post(route("admin.roles.store"),this.role,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},A=o("head",null,[o("title",null,"Админ панель | Роль қосу")],-1),L={class:"row mb-2"},C=o("div",{class:"col-sm-6"},[o("h1",{class:"m-0"},"Роль қосу")],-1),B={class:"col-sm-6"},E={class:"breadcrumb float-sm-right"},N={class:"breadcrumb-item"},T=["href"],F=o("i",{class:"fas fa-dashboard"},null,-1),H=l(" Басты бет "),M=[F,H],P={class:"breadcrumb-item"},S=["href"],$=o("i",{class:"fas fa-dashboard"},null,-1),D=l(" Роль тізімі "),U=[$,D],j=o("li",{class:"breadcrumb-item active"}," Роль қосу ",-1),q={class:"container-fluid"},z={class:"card card-primary"},G={class:"card-body"},I={class:"form-group"},J=o("label",{for:""},"Аты",-1),K={class:"card-footer"},O=o("button",{type:"submit",class:"btn btn-primary mr-1"}," Сақтау ",-1);function Q(e,s,R,W,a,n){const m=r("validation-error"),_=r("AdminLayout");return f(),p(v,null,[A,i(_,null,{breadcrumbs:d(()=>[o("div",L,[C,o("div",B,[o("ol",E,[o("li",N,[o("a",{href:e.route("admin.index")},M,8,T)]),o("li",P,[o("a",{href:e.route("admin.roles.index")},U,8,S)]),j])])])]),default:d(()=>[o("div",q,[o("div",z,[o("form",{method:"post",onSubmit:s[2]||(s[2]=c((...t)=>n.submit&&n.submit(...t),["prevent"]))},[o("div",G,[o("div",I,[J,y(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>a.role.name=t),name:"name",placeholder:"Аты"},null,512),[[g,a.role.name]]),i(m,{field:"name"})])]),o("div",K,[O,o("button",{type:"button",class:"btn btn-danger",onClick:s[1]||(s[1]=c(t=>e.back(),["prevent"]))}," Артқа ")])],32)])])]),_:1})],64)}const to=V(k,[["render",Q]]);export{to as default};
