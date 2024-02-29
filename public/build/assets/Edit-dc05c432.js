import{A}from"./AdminLayout-4103f48c.js";import{L as C,H as E,a as h,o,c as e,d as b,w as p,F as i,e as s,f,g as v,v as y,j as c,t as d,h as g}from"./app-9ffddd28.js";import{P as B}from"./Pagination-53a04694.js";import{V as N}from"./ValidationError-271a82fa.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const T={components:{AdminLayout:A,Link:C,Pagination:B,ValidationError:N,Head:E},props:["subject","courseTypes"],data(){return{orders:this.courseTypes}},methods:{submit(){this.subject.orders=this.orders,this.$inertia.put(route("admin.subjects.update",this.subject.id),this.subject,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},U=s("head",null,[s("title",null,"Админ панель | Пән өзгерту")],-1),D={class:"row mb-2"},F=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"Пән өзгерту")],-1),H={class:"col-sm-6"},M={class:"breadcrumb float-sm-right"},P={class:"breadcrumb-item"},$=["href"],q=s("i",{class:"fas fa-dashboard"},null,-1),z=g(" Басты бет "),G=[q,z],I={class:"breadcrumb-item"},J=["href"],K=s("i",{class:"fas fa-dashboard"},null,-1),O=g(" Пән тізімі "),Q=[K,O],R=s("li",{class:"breadcrumb-item active"}," Пән өзгерту ",-1),W={class:"container-fluid"},X={class:"card card-primary"},Y={class:"card-body"},Z={class:"row"},ss={class:"col-md-4"},ts={class:"form-group"},os=s("label",{for:""},"Аты",-1),es=s("h2",{class:"mt-3"},"Цена",-1),ns=s("hr",null,null,-1),as=s("hr",null,null,-1),rs=s("hr",null,null,-1),is={class:"row ml-4"},ds={class:"form-group"},ls={for:""},cs=["onUpdate:modelValue","onChange"],us={class:"card-footer"},_s=s("button",{type:"submit",class:"btn btn-primary mr-1"}," Сақтау ",-1);function ms(r,n,u,hs,j,_){const k=h("validation-error"),w=h("AdminLayout");return o(),e(i,null,[U,b(w,null,{breadcrumbs:p(()=>[s("div",D,[F,s("div",H,[s("ol",M,[s("li",P,[s("a",{href:r.route("admin.index")},G,8,$)]),s("li",I,[s("a",{href:r.route("admin.subjects.index")},Q,8,J)]),R])])])]),default:p(()=>[s("div",W,[s("div",X,[s("form",{method:"post",onSubmit:n[2]||(n[2]=f((...t)=>_.submit&&_.submit(...t),["prevent"]))},[s("div",Y,[s("div",Z,[s("div",ss,[s("div",ts,[os,v(s("input",{type:"text",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=t=>u.subject.name=t),name:"name",placeholder:"Аты"},null,512),[[y,u.subject.name]]),b(k,{field:"name"})])])]),es,ns,(o(!0),e(i,null,c(j.orders,(t,V)=>(o(),e("div",{key:"order"+t.id,class:"ml-4"},[s("h4",null,d(t.name),1),as,(o(!0),e(i,null,c(t.shifts,(l,L)=>(o(),e("div",{key:"shift"+l.id,class:"ml-4"},[s("h5",null,d(l.name),1),rs,s("div",is,[(o(!0),e(i,null,c(l.trainTypes,(a,x)=>(o(),e("div",{key:"trainType"+a.id,class:"col-md-4"},[s("div",ds,[s("label",ls,d(a.name)+" "+d(a.price),1),v(s("input",{type:"number",class:"form-control","onUpdate:modelValue":m=>a.price=m,placeholder:"8000",onChange:m=>r.logme(V,L,x)},null,40,cs),[[y,a.price]])])]))),128))])]))),128))]))),128))]),s("div",us,[_s,s("button",{type:"button",class:"btn btn-danger",onClick:n[1]||(n[1]=f(t=>r.back(),["prevent"]))}," Артқа ")])],32)])])]),_:1})],64)}const gs=S(T,[["render",ms]]);export{gs as default};
