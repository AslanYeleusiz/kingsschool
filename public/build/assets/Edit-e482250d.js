import{_ as h,A as u}from"./AdminLayout-a3b7c70b.js";import{L as f,H as b,r as n,o as p,e as v,b as r,w as d,F as y,a as s,f as l,g,v as w,d as c}from"./app-d2a1545d.js";import{P as x}from"./Pagination-9a7fdb59.js";import{V}from"./ValidationError-2bb79556.js";const k={components:{AdminLayout:u,Link:f,Pagination:x,ValidationError:V,Head:b},props:["filial"],methods:{submit(){this.$inertia.put(route("admin.filials.update",this.filial.id),this.filial,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},A=s("head",null,[s("title",null,"Админ панель | Изменить название филиала")],-1),L={class:"row mb-2"},E=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"Изменить название филиала")],-1),B={class:"col-sm-6"},C={class:"breadcrumb float-sm-right"},N={class:"breadcrumb-item"},T=["href"],F=s("i",{class:"fas fa-dashboard"},null,-1),H=c(" Главная страница "),M=[F,H],P={class:"breadcrumb-item"},S=["href"],$=s("i",{class:"fas fa-dashboard"},null,-1),D=c(" Список филиалов "),U=[$,D],j=s("li",{class:"breadcrumb-item active"}," Изменить название филиала ",-1),q={class:"container-fluid"},z={class:"card card-primary"},G={class:"card-body"},I={class:"form-group"},J=s("label",{for:""},"Название",-1),K={class:"card-footer"},O=s("button",{type:"submit",class:"btn btn-primary mr-1"}," Сохранить ",-1);function Q(e,t,a,R,W,i){const m=n("validation-error"),_=n("AdminLayout");return p(),v(y,null,[A,r(_,null,{breadcrumbs:d(()=>[s("div",L,[E,s("div",B,[s("ol",C,[s("li",N,[s("a",{href:e.route("admin.index")},M,8,T)]),s("li",P,[s("a",{href:e.route("admin.filials.index")},U,8,S)]),j])])])]),default:d(()=>[s("div",q,[s("div",z,[s("form",{method:"post",onSubmit:t[2]||(t[2]=l((...o)=>i.submit&&i.submit(...o),["prevent"]))},[s("div",G,[s("div",I,[J,g(s("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=o=>a.filial.name=o),name:"name",placeholder:"Название"},null,512),[[w,a.filial.name]]),r(m,{field:"name"})])]),s("div",K,[O,s("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=l(o=>e.back(),["prevent"]))}," Назад ")])],32)])])]),_:1})],64)}const ts=h(k,[["render",Q]]);export{ts as default};
