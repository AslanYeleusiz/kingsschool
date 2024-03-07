import{_ as x,A as B}from"./AdminLayout.4c8d68b7.js";import{L as D,H as T,r as h,o as i,a,e as f,w as v,F as u,b as t,l as c,v as p,q as b,p as g,k as _,f as m,t as r,m as V,d as y}from"./app.205b37dc.js";import{P as L}from"./Pagination.ed6170d5.js";const P={components:{AdminLayout:B,Link:D,Pagination:L,Head:T},props:["users","roles","filials"],data(){return{filter:{fio:route().params.fio?route().params.fio:null,tel_num:route().params.tel_num?route().params.tel_num:null,role_id:route().params.role_id?route().params.role_id:null,filial_id:route().params.filial_id?route().params.filial_id:null},loading:0}},methods:{deleteData(o){Swal.fire({title:"\u049A\u0430\u0439\u0442\u0430\u0440\u0443\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u0435\u0434\u0456!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(l=>{l.isConfirmed&&this.$inertia.delete(route("admin.users.activate",o))})},removeData(o){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(l=>{l.isConfirmed&&this.$inertia.delete(route("admin.users.remove",o))})},search(){this.loading=1;const o=this.clearParams(this.filter);this.$inertia.get(route("admin.users.deleted"),o)}}},S=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438")],-1),A={class:"row mb-2"},U=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438")],-1),K={class:"col-sm-6"},M={class:"breadcrumb float-sm-right"},N={class:"breadcrumb-item"},F=["href"],H=t("i",{class:"fas fa-dashboard"},null,-1),q=y(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),z=[H,q],E={class:"breadcrumb-item"},I=["href"],j=t("i",{class:"fas fa-dashboard"},null,-1),G=y(" \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 "),J=[j,G],O=t("li",{class:"breadcrumb-item active"}," \u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 ",-1),Q={class:"container-fluid"},R={class:"card"},W={class:"card-body"},X={class:"row"},Y={class:"col-sm-12"},Z={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},$=t("tr",{role:"row"},[t("th"),t("th",null,"\u0422\u043E\u043B\u044B\u049B \u0430\u0442\u044B-\u0436\u04E9\u043D\u0456"),t("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u04E9\u043C\u0456\u0440\u0456"),t("th",null,"\u0424\u0438\u043B\u0438\u0430\u043B"),t("th",null,"\u0420\u043E\u043B\u044C"),t("th",null,"\u04D8\u0440\u0435\u043A\u0435\u0442")],-1),tt={class:"filters"},et=t("td",null,null,-1),lt=t("option",{value:null}," \u0411\u0430\u0440\u043B\u044B\u0493\u044B ",-1),st=["value"],ot=t("option",{value:null}," \u0411\u0430\u0440\u043B\u044B\u0493\u044B ",-1),nt=["value"],it={class:"btn-group btn-group-sm"},at=["onClick"],rt=t("i",{class:"fas fa-undo"},null,-1),dt=[rt],ut=["onClick"],ct=t("i",{class:"fas fa-times"},null,-1),_t=[ct];function mt(o,l,d,ht,n,s){const C=h("Pagination"),k=h("AdminLayout");return i(),a(u,null,[S,f(k,null,{breadcrumbs:v(()=>[t("div",A,[U,t("div",K,[t("ol",M,[t("li",N,[t("a",{href:o.route("admin.index")},z,8,F)]),t("li",E,[t("a",{href:o.route("admin.users.index")},J,8,I)]),O])])])]),default:v(()=>[t("div",Q,[t("div",R,[t("div",W,[t("div",X,[t("div",Y,[t("table",Z,[t("thead",null,[$,t("tr",tt,[et,t("td",null,[c(t("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>n.filter.fio=e),class:"form-control",placeholder:"\u0422\u043E\u043B\u044B\u049B \u0430\u0442\u044B-\u0436\u04E9\u043D\u0456",onKeyup:l[1]||(l[1]=b((...e)=>s.search&&s.search(...e),["enter"]))},null,544),[[p,n.filter.fio]])]),t("td",null,[c(t("input",{"onUpdate:modelValue":l[2]||(l[2]=e=>n.filter.tel_num=e),class:"form-control",placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u04E9\u043C\u0456\u0440\u0456",onKeyup:l[3]||(l[3]=b((...e)=>s.search&&s.search(...e),["enter"]))},null,544),[[p,n.filter.tel_num]])]),t("td",null,[c(t("select",{class:"form-control",onChange:l[4]||(l[4]=_((...e)=>s.search&&s.search(...e),["prevent"])),"onUpdate:modelValue":l[5]||(l[5]=e=>n.filter.filial_id=e),placeholder:"\u0424\u0438\u043B\u0438\u0430\u043B"},[lt,(i(!0),a(u,null,m(d.filials,e=>(i(),a("option",{key:"filial"+e.id,value:e.id},r(e.name),9,st))),128))],544),[[g,n.filter.filial_id]])]),t("td",null,[c(t("select",{class:"form-control",onChange:l[6]||(l[6]=_((...e)=>s.search&&s.search(...e),["prevent"])),"onUpdate:modelValue":l[7]||(l[7]=e=>n.filter.role_id=e),placeholder:"\u0424\u0438\u043B\u0438\u0430\u043B"},[ot,(i(!0),a(u,null,m(d.roles,e=>(i(),a("option",{key:"role"+e.id,value:e.id},r(e.name),9,nt))),128))],544),[[g,n.filter.role_id]])])])]),t("tbody",null,[(i(!0),a(u,null,m(d.users.data,(e,ft)=>(i(),a("tr",{class:"odd",key:"user"+e.id},[t("td",null,[t("div",{class:"avatar",style:V({backgroundImage:`url(/storage/files/${e.avatar})`})},null,4)]),t("td",null,r(e.fio),1),t("td",null,r(e.tel_num),1),t("td",null,r(e.filial.name),1),t("td",null,r(e.role.name),1),t("td",null,[t("div",it,[t("button",{onClick:_(w=>s.deleteData(e.id),["prevent"]),class:"btn btn-danger",title:"\u049A\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u0442\u0456\u0440\u0443"},dt,8,at),t("button",{onClick:_(w=>s.removeData(e.id),["prevent"]),class:"btn btn-danger",title:"\u0416\u043E\u044E"},_t,8,ut)])])]))),128))])])])]),f(C,{links:d.users.links},null,8,["links"])])])])]),_:1})],64)}const gt=x(P,[["render",mt]]);export{gt as default};
