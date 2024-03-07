import{_ as u,A as h}from"./AdminLayout.4c8d68b7.js";import{L as p,H as b,r,o as f,a as v,e as i,w as d,F as y,b as s,k as c,l as T,v as g,d as l}from"./app.205b37dc.js";import{P as k}from"./Pagination.ed6170d5.js";import{V as w}from"./ValidationError.135a32c1.js";const x={components:{AdminLayout:h,Link:p,Pagination:k,ValidationError:w,Head:b},props:["courseType"],methods:{submit(){this.$inertia.put(route("admin.courseTypes.update",this.courseType.id),this.courseType,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},V=s("head",null,[s("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041A\u0443\u0440\u0441 \u0442\u0438\u043F\u0456\u043D \u04E9\u0437\u0433\u0435\u0440\u0442\u0443")],-1),A={class:"row mb-2"},L=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"\u041A\u0443\u0440\u0441 \u0442\u0438\u043F\u0456\u043D \u04E9\u0437\u0433\u0435\u0440\u0442\u0443")],-1),E={class:"col-sm-6"},B={class:"breadcrumb float-sm-right"},C={class:"breadcrumb-item"},N=["href"],F=s("i",{class:"fas fa-dashboard"},null,-1),H=l(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),M=[F,H],P={class:"breadcrumb-item"},S=["href"],$=s("i",{class:"fas fa-dashboard"},null,-1),D=l(" \u041A\u0443\u0440\u0441 \u0442\u0438\u043F\u0456\u043D \u0442\u0456\u0437\u0456\u043C\u0456 "),U=[$,D],j=s("li",{class:"breadcrumb-item active"}," \u041A\u0443\u0440\u0441 \u0442\u0438\u043F\u0456\u043D \u04E9\u0437\u0433\u0435\u0440\u0442\u0443 ",-1),q={class:"container-fluid"},z={class:"card card-primary"},G={class:"card-body"},I={class:"form-group"},J=s("label",{for:""},"\u0410\u0442\u044B",-1),K={class:"card-footer"},O=s("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function Q(e,o,a,R,W,n){const m=r("validation-error"),_=r("AdminLayout");return f(),v(y,null,[V,i(_,null,{breadcrumbs:d(()=>[s("div",A,[L,s("div",E,[s("ol",B,[s("li",C,[s("a",{href:e.route("admin.index")},M,8,N)]),s("li",P,[s("a",{href:e.route("admin.courseTypes.index")},U,8,S)]),j])])])]),default:d(()=>[s("div",q,[s("div",z,[s("form",{method:"post",onSubmit:o[2]||(o[2]=c((...t)=>n.submit&&n.submit(...t),["prevent"]))},[s("div",G,[s("div",I,[J,T(s("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>a.courseType.name=t),name:"name",placeholder:"\u0410\u0442\u044B"},null,512),[[g,a.courseType.name]]),i(m,{field:"name"})])]),s("div",K,[O,s("button",{type:"button",class:"btn btn-danger",onClick:o[1]||(o[1]=c(t=>e.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const os=u(x,[["render",Q]]);export{os as default};