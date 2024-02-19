import{A as b}from"./AdminLayout.7f820933.js";import{L as f,H as p,a as c,o as v,c as j,f as i,w as r,F as y,d as s,j as l,k as m,v as _,e as u}from"./app.582c0194.js";import{P as g}from"./Pagination.c50e6533.js";import{V as w}from"./ValidationError.8a56aa3c.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const k={components:{AdminLayout:b,Link:f,Pagination:g,ValidationError:w,Head:p},props:["subject"],methods:{submit(){this.$inertia.put(route("admin.subjects.update",this.subject.id),this.subject,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},x=s("head",null,[s("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041F\u04D9\u043D \u04E9\u0437\u0433\u0435\u0440\u0442\u0443")],-1),A={class:"row mb-2"},L=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"\u041F\u04D9\u043D \u04E9\u0437\u0433\u0435\u0440\u0442\u0443")],-1),E={class:"col-sm-6"},B={class:"breadcrumb float-sm-right"},C={class:"breadcrumb-item"},N=["href"],T=s("i",{class:"fas fa-dashboard"},null,-1),F=u(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),H=[T,F],M={class:"breadcrumb-item"},P=["href"],S=s("i",{class:"fas fa-dashboard"},null,-1),U=u(" \u041F\u04D9\u043D \u0442\u0456\u0437\u0456\u043C\u0456 "),D=[S,U],q=s("li",{class:"breadcrumb-item active"}," \u041F\u04D9\u043D \u04E9\u0437\u0433\u0435\u0440\u0442\u0443 ",-1),z={class:"container-fluid"},G={class:"card card-primary"},I={class:"card-body"},J={class:"row"},K={class:"col-md-4"},O={class:"form-group"},Q=s("label",{for:""},"\u0410\u0442\u044B",-1),R={class:"row"},W={class:"col-md-4"},X={class:"form-group"},Y=s("label",{for:""},"\u0411\u0430\u0493\u0430\u0441\u044B",-1),Z={class:"card-footer"},$=s("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function ss(a,t,e,ts,os,n){const d=c("validation-error"),h=c("AdminLayout");return v(),j(y,null,[x,i(h,null,{breadcrumbs:r(()=>[s("div",A,[L,s("div",E,[s("ol",B,[s("li",C,[s("a",{href:a.route("admin.index")},H,8,N)]),s("li",M,[s("a",{href:a.route("admin.subjects.index")},D,8,P)]),q])])])]),default:r(()=>[s("div",z,[s("div",G,[s("form",{method:"post",onSubmit:t[3]||(t[3]=l((...o)=>n.submit&&n.submit(...o),["prevent"]))},[s("div",I,[s("div",J,[s("div",K,[s("div",O,[Q,m(s("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=o=>e.subject.name=o),name:"name",placeholder:"\u0410\u0442\u044B"},null,512),[[_,e.subject.name]]),i(d,{field:"name"})])])]),s("div",R,[s("div",W,[s("div",X,[Y,m(s("input",{type:"number",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=o=>e.subject.price=o),name:"price",placeholder:"8000"},null,512),[[_,e.subject.price]]),i(d,{field:"price"})])])])]),s("div",Z,[$,s("button",{type:"button",class:"btn btn-danger",onClick:t[2]||(t[2]=l(o=>a.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const cs=V(k,[["render",ss]]);export{cs as default};
