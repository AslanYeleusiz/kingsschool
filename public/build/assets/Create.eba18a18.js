import{A as x}from"./AdminLayout.aeeba96b.js";import{L as w,H as C,a as y,o as i,c as n,g as d,w as p,F as u,d as s,j as f,k as c,v as g,l as A,f as v,m,i as S,t as h,p as L,q as U,e as k}from"./app.35591d43.js";import{P as B}from"./Pagination.884e38bb.js";import{V as M}from"./ValidationError.dc3d0002.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const E={components:{AdminLayout:x,Link:w,Pagination:B,ValidationError:M,Head:C},props:["katysushylar","classItems"],data(){return{classIds:[],typeIds:[],selectAllClassItems:!1,bagyt:{o_katysushy_idd:null,o_bagyty:null,enable:0,bagyt:null},types:["\u041E\u0431\u043B\u044B\u0441\u0442\u044B\u049B","\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u043B\u044B\u049B","\u0425\u0430\u043B\u044B\u049B\u0430\u0440\u0430\u043B\u044B\u049B"]}},methods:{submit(){this.classIds.length==0?this.bagyt.class_ids=null:this.bagyt.class_ids=this.classIds,this.typeIds.length==0?this.bagyt.type_ids=null:this.bagyt.type_ids=this.typeIds,this.$inertia.post(route("admin.olimpiadaBagyty.store"),this.bagyt,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}},watch:{selectAllClassItems:{handler(a,e){a?this.classIds=this.classItems.map(_=>_.id):this.classIds=[]}}}},l=a=>(L("data-v-facdb5b4"),a=a(),U(),a),T=l(()=>s("head",null,[s("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u0431\u0430\u0493\u044B\u0442 \u049B\u043E\u0441\u0443")],-1)),D={class:"row mb-2"},F=l(()=>s("div",{class:"col-sm-6"},[s("h1",{class:"m-0"},"\u0411\u0430\u0493\u044B\u0442 \u049B\u043E\u0441\u0443")],-1)),H={class:"col-sm-6"},P={class:"breadcrumb float-sm-right"},j={class:"breadcrumb-item"},q=["href"],z=l(()=>s("i",{class:"fas fa-dashboard"},null,-1)),G=k(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),J=[z,G],K={class:"breadcrumb-item"},O=["href"],Q=l(()=>s("i",{class:"fas fa-dashboard"},null,-1)),R=k(" \u041E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430 \u0431\u0430\u0493\u044B\u0442 \u0442\u0456\u0437\u0456\u043C\u0456 "),W=[Q,R],X=l(()=>s("li",{class:"breadcrumb-item active"}," \u0411\u0430\u0493\u044B\u0442 \u049B\u043E\u0441\u0443 ",-1)),Y={class:"container-fluid"},Z={class:"card card-primary"},$={class:"card-body"},ss={class:"form-group"},ts=l(()=>s("label",{for:""},"\u049A\u044B\u0441\u049B\u0430 \u0430\u0442\u0430\u0443\u044B",-1)),es={class:"form-group"},os=l(()=>s("label",{for:""},"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",-1)),ls=l(()=>s("option",{hidden:"",value:null}," \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0442\u0430\u043D\u0434\u0430\u04A3\u044B\u0437 ",-1)),as=["value"],is={class:"form-group"},ns=l(()=>s("label",{for:""},"\u0422\u043E\u043B\u044B\u049B \u0430\u0442\u044B",-1)),ds={key:0,class:"form-group"},cs=l(()=>s("label",null,"\u0421\u044B\u043D\u044B\u043F\u0442\u0430\u0440",-1)),rs={class:"ul-li-no-style"},_s=l(()=>s("label",{class:"ml-1"},"\u0411\u0430\u0440\u043B\u044B\u0493\u044B",-1)),us=["id","value"],ms=["for"],hs={class:"form-group"},bs={class:"custom-control custom-switch"},ys={class:"custom-control-label",for:"customSwitch2"},ps={class:"card-footer"},fs=l(()=>s("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1));function gs(a,e,_,vs,o,b){const r=y("validation-error"),I=y("AdminLayout");return i(),n(u,null,[T,d(I,null,{breadcrumbs:p(()=>[s("div",D,[F,s("div",H,[s("ol",P,[s("li",j,[s("a",{href:a.route("admin.index")},J,8,q)]),s("li",K,[s("a",{href:a.route("admin.olimpiadaBagyty.index")},W,8,O)]),X])])])]),default:p(()=>[s("div",Y,[s("div",Z,[s("form",{method:"post",onSubmit:e[7]||(e[7]=f((...t)=>b.submit&&b.submit(...t),["prevent"]))},[s("div",$,[s("div",ss,[ts,c(s("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>o.bagyt.bagyt=t),name:"bagyt",placeholder:"\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456 \u043C\u0435\u043D \u04D9\u0434\u0435\u0431\u0438\u0435\u0442\u0456"},null,512),[[g,o.bagyt.bagyt]]),d(r,{field:"bagyt"})]),s("div",es,[os,c(s("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.bagyt.o_katysushy_idd=t),class:"form-control",placeholder:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"},[ls,(i(!0),n(u,null,v(_.katysushylar,t=>(i(),n("option",{value:t.idd,key:"category"+t.idd},h(t.o_katysushy),9,as))),128))],512),[[A,o.bagyt.o_katysushy_idd]]),d(r,{field:"o_katysushy_idd"})]),s("div",is,[ns,c(s("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>o.bagyt.o_bagyty=t),name:"o_bagyty",placeholder:"\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456 \u043C\u0435\u043D \u04D9\u0434\u0435\u0431\u0438\u0435\u0442\u0456 \u043F\u04D9\u043D\u0456 \u0431\u043E\u0439\u044B\u043D\u0448\u0430 \u04B1\u0441\u0442\u0430\u0437\u0434\u0430\u0440 \u0430\u0440\u0430\u0441\u044B\u043D\u0434\u0430\u0493\u044B \u043E\u043B\u0438\u043C\u043F\u0438\u0430\u0434\u0430"},null,512),[[g,o.bagyt.o_bagyty]]),d(r,{field:"o_bagyty"})]),o.bagyt.o_katysushy_idd==3?(i(),n("div",ds,[cs,s("ul",rs,[s("li",null,[c(s("input",{type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=t=>o.selectAllClassItems=t)},null,512),[[m,o.selectAllClassItems]]),_s]),(i(!0),n(u,null,v(_.classItems,t=>(i(),n("li",{key:"classItem"+t.id},[c(s("input",{id:"classItem"+t.name,"onUpdate:modelValue":e[4]||(e[4]=V=>o.classIds=V),type:"checkbox",value:t.id},null,8,us),[[m,o.classIds]]),s("label",{class:"ml-1",for:"classItem"+t.name},h(t.name),9,ms)]))),128))]),d(r,{field:"class_ids"})])):S("",!0),s("div",hs,[s("div",bs,[c(s("input",{type:"checkbox","onUpdate:modelValue":e[5]||(e[5]=t=>o.bagyt.enable=t),class:"custom-control-input",id:"customSwitch2","true-value":"1","false-value":"0"},null,512),[[m,o.bagyt.enable]]),s("label",ys,"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456 ("+h(o.bagyt.enable==1?"\u0418\u04D9":"\u0416\u043E\u049B")+")",1)]),d(r,{field:"active"})])]),s("div",ps,[fs,s("button",{type:"button",class:"btn btn-danger",onClick:e[6]||(e[6]=f(t=>a.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const Cs=N(E,[["render",gs],["__scopeId","data-v-facdb5b4"]]);export{Cs as default};
