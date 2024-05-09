import{_ as h,A as u}from"./AdminLayout-a3b7c70b.js";import{L as b,H as f,r,o as p,e as v,b as i,w as d,F as y,a as o,f as c,g,v as w,d as l}from"./app-d2a1545d.js";import{P as x}from"./Pagination-9a7fdb59.js";import{V}from"./ValidationError-2bb79556.js";const k={components:{AdminLayout:u,Link:b,Pagination:x,ValidationError:V,Head:f},props:["role"],methods:{submit(){this.$inertia.put(route("admin.roles.update",this.role.id),this.role,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},A=o("head",null,[o("title",null,"Админ панель | Изменить роль")],-1),L={class:"row mb-2"},E=o("div",{class:"col-sm-6"},[o("h1",{class:"m-0"},"Изменить название роли")],-1),B={class:"col-sm-6"},C={class:"breadcrumb float-sm-right"},N={class:"breadcrumb-item"},T=["href"],F=o("i",{class:"fas fa-dashboard"},null,-1),H=l(" Главная страница "),M=[F,H],P={class:"breadcrumb-item"},S=["href"],$=o("i",{class:"fas fa-dashboard"},null,-1),D=l(" Список ролей "),U=[$,D],j=o("li",{class:"breadcrumb-item active"}," Изменить название роли ",-1),q={class:"container-fluid"},z={class:"card card-primary"},G={class:"card-body"},I={class:"form-group"},J=o("label",{for:""},"Название",-1),K={class:"card-footer"},O=o("button",{type:"submit",class:"btn btn-primary mr-1"}," Сохранить ",-1);function Q(e,s,a,R,W,n){const m=r("validation-error"),_=r("AdminLayout");return p(),v(y,null,[A,i(_,null,{breadcrumbs:d(()=>[o("div",L,[E,o("div",B,[o("ol",C,[o("li",N,[o("a",{href:e.route("admin.index")},M,8,T)]),o("li",P,[o("a",{href:e.route("admin.roles.index")},U,8,S)]),j])])])]),default:d(()=>[o("div",q,[o("div",z,[o("form",{method:"post",onSubmit:s[2]||(s[2]=c((...t)=>n.submit&&n.submit(...t),["prevent"]))},[o("div",G,[o("div",I,[J,g(o("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>a.role.name=t),name:"name",placeholder:"Название"},null,512),[[w,a.role.name]]),i(m,{field:"name"})])]),o("div",K,[O,o("button",{type:"button",class:"btn btn-danger",onClick:s[1]||(s[1]=c(t=>e.back(),["prevent"]))}," Назад ")])],32)])])]),_:1})],64)}const so=h(k,[["render",Q]]);export{so as default};
