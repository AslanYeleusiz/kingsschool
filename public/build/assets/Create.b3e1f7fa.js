import{A as g}from"./AdminLayout.7f820933.js";import{L as x,H as j,a as d,o as e,c as n,f as l,w as _,F as r,d as s,j as m,k as w,v as k,g as u,t as h,e as b}from"./app.582c0194.js";import{P as L}from"./Pagination.c50e6533.js";import{V as T}from"./ValidationError.8a56aa3c.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const A={components:{AdminLayout:g,Link:x,Pagination:L,ValidationError:T,Head:j},props:["courseTypes","trainTypes"],data(){return{subject:{name:null},shifts:[{id:1,name:"\u0414\u043D\u0435\u0432\u043D\u043E\u0439"},{id:2,name:"\u0412\u0435\u0447\u0435\u0440\u043D\u0438\u0439"}]}},methods:{submit(){this.$inertia.post(route("admin.subjects.store"),this.subject,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},C=s("head",null,[s("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041F\u04D9\u043D \u049B\u043E\u0441\u0443")],-1),B={class:"row mb-2"},E=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"\u041F\u04D9\u043D \u049B\u043E\u0441\u0443")],-1),N={class:"col-sm-6"},S={class:"breadcrumb float-sm-right"},D={class:"breadcrumb-item"},F=["href"],H=s("i",{class:"fas fa-dashboard"},null,-1),M=b(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),P=[H,M],U={class:"breadcrumb-item"},q=["href"],z=s("i",{class:"fas fa-dashboard"},null,-1),G=b(" \u041F\u04D9\u043D \u0442\u0456\u0437\u0456\u043C\u0456 "),I=[z,G],J=s("li",{class:"breadcrumb-item active"}," \u041F\u04D9\u043D \u049B\u043E\u0441\u0443 ",-1),K={class:"container-fluid"},O={class:"card card-primary"},Q={class:"card-body"},R={class:"row"},W={class:"col-md-4"},X={class:"form-group"},Y=s("label",{for:""},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",-1),Z=s("h2",{class:"mt-3"},"\u0426\u0435\u043D\u0430",-1),$=s("hr",null,null,-1),ss={class:"ml-4"},ts=s("hr",null,null,-1),os={class:"ml-4"},es=s("hr",null,null,-1),ns={class:"card-footer"},as=s("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function is(a,t,f,rs,i,c){const p=d("validation-error"),v=d("AdminLayout");return e(),n(r,null,[C,l(v,null,{breadcrumbs:_(()=>[s("div",B,[E,s("div",N,[s("ol",S,[s("li",D,[s("a",{href:a.route("admin.index")},P,8,F)]),s("li",U,[s("a",{href:a.route("admin.subjects.index")},I,8,q)]),J])])])]),default:_(()=>[s("div",K,[s("div",O,[s("form",{method:"post",onSubmit:t[2]||(t[2]=m((...o)=>c.submit&&c.submit(...o),["prevent"]))},[s("div",Q,[s("div",R,[s("div",W,[s("div",X,[Y,w(s("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=o=>i.subject.name=o),name:"name",placeholder:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,512),[[k,i.subject.name]]),l(p,{field:"name"})])])]),Z,$,(e(!0),n(r,null,u(f.courseTypes,(o,cs)=>(e(),n("div",ss,[s("h4",null,h(o.name),1),ts,(e(!0),n(r,null,u(i.shifts,(y,ds)=>(e(),n("div",os,[s("h5",null,h(y.name),1),es]))),256))]))),256))]),s("div",ns,[as,s("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=m(o=>a.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const bs=V(A,[["render",is]]);export{bs as default};
