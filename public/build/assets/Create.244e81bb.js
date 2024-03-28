import{_ as L,A}from"./AdminLayout.4b3ec41f.js";import{L as B,H as E,r as b,o as t,a as n,e as p,w as f,F as l,b as s,q as v,f as g,s as y,g as u,t as i,d as k}from"./app.eed87f0d.js";import{P as N}from"./Pagination.9af6a32b.js";import{V as S}from"./ValidationError.be820b2b.js";const T={components:{AdminLayout:A,Link:B,Pagination:N,ValidationError:S,Head:E},props:["courseTypes"],data(){return{subject:{name:null},orders:this.courseTypes}},methods:{submit(){this.subject.orders=this.orders,this.$inertia.post(route("admin.subjects.store"),this.subject,{onError:()=>console.log("An errors has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},logme(r,o,m){console.log(r+" "+o+" "+m)}}},U=s("head",null,[s("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442")],-1),D={class:"row mb-2"},F=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442")],-1),H={class:"col-sm-6"},M={class:"breadcrumb float-sm-right"},P={class:"breadcrumb-item"},q=["href"],$=s("i",{class:"fas fa-dashboard"},null,-1),z=k(" \u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 "),G=[$,z],I={class:"breadcrumb-item"},J=["href"],K=s("i",{class:"fas fa-dashboard"},null,-1),O=k(" \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432 "),Q=[K,O],R=s("li",{class:"breadcrumb-item active"}," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442 ",-1),W={class:"container-fluid"},X={class:"card card-primary"},Y={class:"card-body"},Z={class:"row"},ss={class:"col-md-4"},os={class:"form-group"},es=s("label",{for:""},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",-1),ts=s("h2",{class:"mt-3"},"\u0426\u0435\u043D\u0430",-1),ns=s("hr",null,null,-1),rs=s("hr",null,null,-1),as=s("hr",null,null,-1),ls={class:"row ml-4"},is={class:"form-group"},cs={for:""},ds=["onUpdate:modelValue","onChange"],_s={class:"card-footer"},us=s("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ",-1);function ms(r,o,m,hs,c,d){const w=b("validation-error"),V=b("AdminLayout");return t(),n(l,null,[U,p(V,null,{breadcrumbs:f(()=>[s("div",D,[F,s("div",H,[s("ol",M,[s("li",P,[s("a",{href:r.route("admin.index")},G,8,q)]),s("li",I,[s("a",{href:r.route("admin.subjects.index")},Q,8,J)]),R])])])]),default:f(()=>[s("div",W,[s("div",X,[s("form",{method:"post",onSubmit:o[2]||(o[2]=v((...e)=>d.submit&&d.submit(...e),["prevent"]))},[s("div",Y,[s("div",Z,[s("div",ss,[s("div",os,[es,g(s("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=e=>c.subject.name=e),name:"name",placeholder:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,512),[[y,c.subject.name]]),p(w,{field:"name"})])])]),ts,ns,(t(!0),n(l,null,u(c.orders,(e,j)=>(t(),n("div",{key:"order"+e.id,class:"ml-4"},[s("h4",null,i(e.name),1),rs,(t(!0),n(l,null,u(e.shifts,(_,x)=>(t(),n("div",{key:"shift"+_.id,class:"ml-4"},[s("h5",null,i(_.name),1),as,s("div",ls,[(t(!0),n(l,null,u(_.trainTypes,(a,C)=>(t(),n("div",{key:"trainType"+a.id,class:"col-md-4"},[s("div",is,[s("label",cs,i(a.name)+" "+i(a.price),1),g(s("input",{type:"number",class:"form-control","onUpdate:modelValue":h=>a.price=h,placeholder:"8000",onChange:h=>d.logme(j,x,C)},null,40,ds),[[y,a.price]])])]))),128))])]))),128))]))),128))]),s("div",_s,[us,s("button",{type:"button",class:"btn btn-danger",onClick:o[1]||(o[1]=v(e=>r.back(),["prevent"]))}," \u041D\u0430\u0437\u0430\u0434 ")])],32)])])]),_:1})],64)}const gs=L(T,[["render",ms]]);export{gs as default};
