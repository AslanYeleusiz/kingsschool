import{_ as b,A as f}from"./AdminLayout-a3b7c70b.js";import{L as v,H as x,r as y,o as i,e as d,b as g,w as l,F as c,a as s,f as _,g as a,v as m,j as w,i as V,t as k,d as u}from"./app-d2a1545d.js";import{P as L}from"./Pagination-9a7fdb59.js";import{V as A}from"./ValidationError-2bb79556.js";const C={props:["types"],components:{AdminLayout:f,Link:v,Pagination:L,ValidationError:A,Head:x},data(){return{expenses:{name:null,summa:null,type_id:null}}},methods:{submit(){this.$inertia.post(route("admin.expenses.store"),this.expenses,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},S=s("head",null,[s("title",null,"Админ панель | Добавить расход")],-1),q={class:"row mb-2"},B=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"Добавить расход")],-1),E={class:"col-sm-6"},M={class:"breadcrumb float-sm-right"},N={class:"breadcrumb-item"},T=["href"],U=s("i",{class:"fas fa-dashboard"},null,-1),D=u(" Главная страница "),F=[U,D],H={class:"breadcrumb-item"},P=["href"],j=s("i",{class:"fas fa-dashboard"},null,-1),z=u(" Расходы "),G=[j,z],I=s("li",{class:"breadcrumb-item active"}," Добавить расход ",-1),J={class:"container-fluid"},K={class:"card card-primary"},O={class:"card-body"},Q={class:"row"},R={class:"col-md-4"},W=s("label",{for:""},"Название",-1),X={class:"row"},Y={class:"col-md-4"},Z={class:"input-group mt-3"},$=s("div",{class:"input-group-prepend"},[s("span",{class:"input-group-text"},"Сумма")],-1),ss=s("div",{class:"input-group-append"},[s("span",{class:"input-group-text"},"₸")],-1),es={class:"row mt-2"},os={class:"col-md-4"},ts={class:"form-group"},ns=s("label",{for:""},"Типы расхода",-1),is=s("option",{value:null,hidden:"",disabled:"",selected:""}," Выберите тип расхода ",-1),ds=["value"],as={class:"card-footer"},rs=s("button",{type:"submit",class:"btn btn-primary mr-1"}," Сохранить ",-1);function ls(n,o,p,cs,t,r){const h=y("AdminLayout");return i(),d(c,null,[S,g(h,null,{breadcrumbs:l(()=>[s("div",q,[B,s("div",E,[s("ol",M,[s("li",N,[s("a",{href:n.route("admin.index")},F,8,T)]),s("li",H,[s("a",{href:n.route("admin.expenses.index")},G,8,P)]),I])])])]),default:l(()=>[s("div",J,[s("div",K,[s("form",{method:"post",onSubmit:o[4]||(o[4]=_((...e)=>r.submit&&r.submit(...e),["prevent"]))},[s("div",O,[s("div",Q,[s("div",R,[W,a(s("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=e=>t.expenses.name=e),name:"name",placeholder:"Название",required:""},null,512),[[m,t.expenses.name]])])]),s("div",X,[s("div",Y,[s("div",Z,[$,a(s("input",{type:"number",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=e=>t.expenses.summa=e),"aria-describedby":"basic-addon3",required:""},null,512),[[m,t.expenses.summa]]),ss])])]),s("div",es,[s("div",os,[s("div",ts,[ns,a(s("select",{class:"form-control","onUpdate:modelValue":o[2]||(o[2]=e=>t.expenses.type_id=e),required:""},[is,(i(!0),d(c,null,V(p.types,e=>(i(),d("option",{key:e.id,value:e.id},k(e.name),9,ds))),128))],512),[[w,t.expenses.type_id]])])])])]),s("div",as,[rs,s("button",{type:"button",class:"btn btn-danger",onClick:o[3]||(o[3]=_(e=>n.back(),["prevent"]))}," Назад ")])],32)])])]),_:1})],64)}const hs=b(C,[["render",ls]]);export{hs as default};
