import{A as b}from"./AdminLayout.2c9fbdd1.js";import{L as p,H as g,a,o as i,c as l,f as n,w as e,F as _,d as t,g as v,e as u,t as m}from"./app.42928c33.js";import{P as x}from"./Pagination.55b09bd7.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const k={components:{AdminLayout:b,Link:p,Pagination:x,Head:g},props:["roles"],data(){return{filter:{name:route().params.name?route().params.name:null},loading:0}},methods:{deleteData(s){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(r=>{r.isConfirmed&&this.$inertia.delete(route("admin.roles.destroy",s))})},search(){this.loading=1;const s=this.clearParams(this.filter);this.$inertia.get(route("admin.roles.index"),s)}}},w=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0420\u043E\u043B\u044C")],-1),B={class:"row mb-2"},L=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u0420\u043E\u043B\u044C \u0442\u0456\u0437\u0456\u043C\u0456")],-1),C={class:"col-sm-6"},P={class:"breadcrumb float-sm-right"},A={class:"breadcrumb-item"},T=["href"],$=t("i",{class:"fas fa-dashboard"},null,-1),D=u(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),N=[$,D],V=t("li",{class:"breadcrumb-item active"}," \u0420\u043E\u043B\u044C \u0442\u0456\u0437\u0456\u043C\u0456 ",-1),F={class:"buttons d-flex align-items-center"},H=t("i",{class:"fa fa-plus"},null,-1),I=u(" \u049A\u043E\u0441\u0443 "),S={class:"container-fluid"},E={class:"card"},j={class:"card-body"},q={class:"row"},z={class:"col-sm-12"},G={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},J=t("thead",null,[t("tr",{role:"row"},[t("th",null,"ID"),t("th",null,"\u0410\u0442\u044B"),t("th",null,"\u04D8\u0440\u0435\u043A\u0435\u0442")])],-1),K={class:"btn-group btn-group-sm"},M=t("i",{class:"fas fa-edit"},null,-1);function O(s,r,d,Q,R,U){const c=a("Link"),h=a("Pagination"),f=a("AdminLayout");return i(),l(_,null,[w,n(f,null,{breadcrumbs:e(()=>[t("div",B,[L,t("div",C,[t("ol",P,[t("li",A,[t("a",{href:s.route("admin.index")},N,8,T)]),V])])])]),header:e(()=>[t("div",F,[n(c,{class:"btn btn-primary mr-2",href:s.route("admin.roles.create")},{default:e(()=>[H,I]),_:1},8,["href"])])]),default:e(()=>[t("div",S,[t("div",E,[t("div",j,[t("div",q,[t("div",z,[t("table",G,[J,t("tbody",null,[(i(!0),l(_,null,v(d.roles.data,(o,W)=>(i(),l("tr",{class:"odd",key:"role"+o.id},[t("td",null,m(o.id),1),t("td",null,m(o.name),1),t("td",null,[t("div",K,[n(c,{href:s.route("admin.roles.edit",o),class:"btn btn-primary",title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"},{default:e(()=>[M]),_:2},1032,["href"])])])]))),128))])])])]),n(h,{links:d.roles.links},null,8,["links"])])])])]),_:1})],64)}const st=y(k,[["render",O]]);export{st as default};
