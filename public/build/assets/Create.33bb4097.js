import{A as I}from"./AdminLayout.aeeba96b.js";import{L as k,H as w,a as u,o as a,c as n,g as c,w as h,F as p,d as s,j as b,k as d,m as r,f as A,t as f,e as v}from"./app.35591d43.js";import{P as C}from"./Pagination.884e38bb.js";import{V}from"./ValidationError.dc3d0002.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";const L={components:{AdminLayout:I,Link:k,Pagination:C,ValidationError:V,Head:w},props:["classItems"],data(){return{option:{o_tury:null,enable:0},bagyt_id:route().params.bagyt,selectAllClassItems:!1,classIds:[]}},methods:{submit(){this.classIds.length==0?this.option.class_ids=null:this.option.class_ids=this.classIds,this.$inertia.post(route("admin.olimpiadaOption.store",this.bagyt_id),this.option,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}},watch:{selectAllClassItems:{handler(l,o){l?this.classIds=this.classItems.map(i=>i.id):this.classIds=[]}}}},S=s("head",null,[s("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 | \u0411\u0430\u0493\u044B\u0442 \u049B\u043E\u0441\u0443")],-1),B={class:"row mb-2"},E=s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"\u0421\u044B\u043D\u044B\u043F\u0442\u0430\u0440 \u049B\u043E\u0441\u0443")],-1),N={class:"col-sm-6"},U={class:"breadcrumb float-sm-right"},D={class:"breadcrumb-item"},F=["href"],H=s("i",{class:"fas fa-dashboard"},null,-1),M=v(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),O=[H,M],P={class:"breadcrumb-item"},T=["href"],j=s("i",{class:"fas fa-dashboard"},null,-1),q=v(" \u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u0431\u0430\u0493\u044B\u0442 "),z=[j,q],G=s("li",{class:"breadcrumb-item active"},"\u0421\u044B\u043D\u044B\u043F\u0442\u0430\u0440 \u049B\u043E\u0441\u0443",-1),J={class:"container-fluid"},K={class:"card card-primary"},Q={class:"card-body"},R={class:"form-group"},W=s("label",null,"\u0421\u044B\u043D\u044B\u043F\u0442\u0430\u0440",-1),X={class:"ul-li-no-style"},Y=s("label",{class:"ml-1"},"\u0411\u0430\u0440\u043B\u044B\u0493\u044B",-1),Z=["id","value"],$=["for"],ss={class:"form-group"},ts={class:"custom-control custom-switch"},os={class:"custom-control-label",for:"customSwitch2"},es={class:"card-footer"},ls=s("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function is(l,o,i,as,e,m){const _=u("validation-error"),y=u("AdminLayout");return a(),n(p,null,[S,c(y,null,{breadcrumbs:h(()=>[s("div",B,[E,s("div",N,[s("ol",U,[s("li",D,[s("a",{href:l.route("admin.index")},O,8,F)]),s("li",P,[s("a",{href:l.route("admin.olimpiadaOption.index",e.bagyt_id)},z,8,T)]),G])])])]),default:h(()=>[s("div",J,[s("div",K,[s("form",{method:"post",onSubmit:o[4]||(o[4]=b((...t)=>m.submit&&m.submit(...t),["prevent"]))},[s("div",Q,[s("div",R,[W,s("ul",X,[s("li",null,[d(s("input",{type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=t=>e.selectAllClassItems=t)},null,512),[[r,e.selectAllClassItems]]),Y]),(a(!0),n(p,null,A(i.classItems,t=>(a(),n("li",{key:"classItem"+t.id},[d(s("input",{id:"classItem"+t.name,"onUpdate:modelValue":o[1]||(o[1]=g=>e.classIds=g),type:"checkbox",value:t.id},null,8,Z),[[r,e.classIds]]),s("label",{class:"ml-1",for:"classItem"+t.name},f(t.name),9,$)]))),128))]),c(_,{field:"class_ids"})]),s("div",ss,[s("div",ts,[d(s("input",{type:"checkbox","onUpdate:modelValue":o[2]||(o[2]=t=>e.option.enable=t),class:"custom-control-input",id:"customSwitch2","true-value":"1","false-value":"0"},null,512),[[r,e.option.enable]]),s("label",os,"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456 ("+f(e.option.enable==1?"\u0418\u04D9":"\u0416\u043E\u049B")+")",1)]),c(_,{field:"enable"})])]),s("div",es,[ls,s("button",{type:"button",class:"btn btn-danger",onClick:o[3]||(o[3]=b(t=>l.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const _s=x(L,[["render",is]]);export{_s as default};
