import{A as u}from"./AdminLayout-4103f48c.js";import{L as h,H as p,a as r,o as b,c as f,d as i,w as c,F as v,e as s,f as d,g as y,v as T,h as l}from"./app-9ffddd28.js";import{P as g}from"./Pagination-53a04694.js";import{V as w}from"./ValidationError-271a82fa.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const V={components:{AdminLayout:u,Link:h,Pagination:g,ValidationError:w,Head:p},data(){return{courseType:{name:null}}},methods:{submit(){this.$inertia.post(route("admin.courseTypes.store"),this.courseType,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},k=s("head",null,[s("title",null,"Админ панель | Курс типін қосу")],-1),A={class:"row mb-2"},L=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"Курс типін қосу")],-1),C={class:"col-sm-6"},B={class:"breadcrumb float-sm-right"},E={class:"breadcrumb-item"},N=["href"],F=s("i",{class:"fas fa-dashboard"},null,-1),H=l(" Басты бет "),M=[F,H],P={class:"breadcrumb-item"},S=["href"],$=s("i",{class:"fas fa-dashboard"},null,-1),D=l(" Курс типін тізімі "),U=[$,D],j=s("li",{class:"breadcrumb-item active"}," Курс типін қосу ",-1),q={class:"container-fluid"},z={class:"card card-primary"},G={class:"card-body"},I={class:"form-group"},J=s("label",{for:""},"Аты",-1),K={class:"card-footer"},O=s("button",{type:"submit",class:"btn btn-primary mr-1"}," Сақтау ",-1);function Q(t,o,R,W,a,n){const m=r("validation-error"),_=r("AdminLayout");return b(),f(v,null,[k,i(_,null,{breadcrumbs:c(()=>[s("div",A,[L,s("div",C,[s("ol",B,[s("li",E,[s("a",{href:t.route("admin.index")},M,8,N)]),s("li",P,[s("a",{href:t.route("admin.courseTypes.index")},U,8,S)]),j])])])]),default:c(()=>[s("div",q,[s("div",z,[s("form",{method:"post",onSubmit:o[2]||(o[2]=d((...e)=>n.submit&&n.submit(...e),["prevent"]))},[s("div",G,[s("div",I,[J,y(s("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=e=>a.courseType.name=e),name:"name",placeholder:"Аты"},null,512),[[T,a.courseType.name]]),i(m,{field:"name"})])]),s("div",K,[O,s("button",{type:"button",class:"btn btn-danger",onClick:o[1]||(o[1]=d(e=>t.back(),["prevent"]))}," Артқа ")])],32)])])]),_:1})],64)}const es=x(V,[["render",Q]]);export{es as default};