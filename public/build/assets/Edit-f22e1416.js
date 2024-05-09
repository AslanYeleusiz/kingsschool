import{_ as A,A as C}from"./AdminLayout-a3b7c70b.js";import{L as E,H as B,r as h,o as e,e as o,b,w as p,F as i,a as s,f,g as v,v as y,i as c,t as d,d as g}from"./app-d2a1545d.js";import{P as N}from"./Pagination-9a7fdb59.js";import{V as S}from"./ValidationError-2bb79556.js";const T={components:{AdminLayout:C,Link:E,Pagination:N,ValidationError:S,Head:B},props:["subject","courseTypes"],data(){return{orders:this.courseTypes}},methods:{submit(){this.subject.orders=this.orders,this.$inertia.put(route("admin.subjects.update",this.subject.id),this.subject,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},U=s("head",null,[s("title",null,"Админ панель | Изменить данные предмета")],-1),D={class:"row mb-2"},F=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"Изменить данные предмета")],-1),H={class:"col-sm-6"},M={class:"breadcrumb float-sm-right"},P={class:"breadcrumb-item"},$=["href"],q=s("i",{class:"fas fa-dashboard"},null,-1),z=g(" Главная страница "),G=[q,z],I={class:"breadcrumb-item"},J=["href"],K=s("i",{class:"fas fa-dashboard"},null,-1),O=g(" Список предметов "),Q=[K,O],R=s("li",{class:"breadcrumb-item active"}," Изменить данные предмета ",-1),W={class:"container-fluid"},X={class:"card card-primary"},Y={class:"card-body"},Z={class:"row"},ss={class:"col-md-4"},ts={class:"form-group"},es=s("label",{for:""},"Аты",-1),os=s("h2",{class:"mt-3"},"Цена",-1),ns=s("hr",null,null,-1),as=s("hr",null,null,-1),rs=s("hr",null,null,-1),is={class:"row ml-4"},ds={class:"form-group"},ls={for:""},cs=["onUpdate:modelValue","onChange"],us={class:"card-footer"},_s=s("button",{type:"submit",class:"btn btn-primary mr-1"}," Сохранить ",-1);function ms(r,n,u,hs,j,_){const k=h("validation-error"),w=h("AdminLayout");return e(),o(i,null,[U,b(w,null,{breadcrumbs:p(()=>[s("div",D,[F,s("div",H,[s("ol",M,[s("li",P,[s("a",{href:r.route("admin.index")},G,8,$)]),s("li",I,[s("a",{href:r.route("admin.subjects.index")},Q,8,J)]),R])])])]),default:p(()=>[s("div",W,[s("div",X,[s("form",{method:"post",onSubmit:n[2]||(n[2]=f((...t)=>_.submit&&_.submit(...t),["prevent"]))},[s("div",Y,[s("div",Z,[s("div",ss,[s("div",ts,[es,v(s("input",{type:"text",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=t=>u.subject.name=t),name:"name",placeholder:"Аты"},null,512),[[y,u.subject.name]]),b(k,{field:"name"})])])]),os,ns,(e(!0),o(i,null,c(j.orders,(t,V)=>(e(),o("div",{key:"order"+t.id,class:"ml-4"},[s("h4",null,d(t.name),1),as,(e(!0),o(i,null,c(t.shifts,(l,L)=>(e(),o("div",{key:"shift"+l.id,class:"ml-4"},[s("h5",null,d(l.name),1),rs,s("div",is,[(e(!0),o(i,null,c(l.trainTypes,(a,x)=>(e(),o("div",{key:"trainType"+a.id,class:"col-md-4"},[s("div",ds,[s("label",ls,d(a.name)+" "+d(a.price),1),v(s("input",{type:"number",class:"form-control","onUpdate:modelValue":m=>a.price=m,placeholder:"8000",onChange:m=>r.logme(V,L,x)},null,40,cs),[[y,a.price]])])]))),128))])]))),128))]))),128))]),s("div",us,[_s,s("button",{type:"button",class:"btn btn-danger",onClick:n[1]||(n[1]=f(t=>r.back(),["prevent"]))}," Назад ")])],32)])])]),_:1})],64)}const ys=A(T,[["render",ms]]);export{ys as default};