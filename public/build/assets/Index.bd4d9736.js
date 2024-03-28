import{_ as y,A as g}from"./AdminLayout.4b3ec41f.js";import{L as v,H as k,r as l,o as n,a,e as i,w as o,F as u,b as t,h as x,g as L,d as m,t as h}from"./app.eed87f0d.js";import{P as w}from"./Pagination.9af6a32b.js";const B={components:{AdminLayout:g,Link:v,Pagination:w,Head:k},props:["courseTypes"],data(){return{loading:0}},methods:{deleteData(s){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(d=>{d.isConfirmed&&this.$inertia.delete(route("admin.courseTypes.destroy",s))})}}},C=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0422\u0438\u043F\u044B \u043A\u0443\u0440\u0441\u043E\u0432")],-1),T={class:"row mb-2"},A=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0438\u043F\u043E\u0432 \u043A\u0443\u0440\u0441\u0430")],-1),N={class:"col-sm-6"},P={class:"breadcrumb float-sm-right"},V={class:"breadcrumb-item"},D=["href"],F=t("i",{class:"fas fa-dashboard"},null,-1),H=m(" \u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 "),S=[F,H],$=t("li",{class:"breadcrumb-item active"}," \u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0438\u043F\u043E\u0432 \u043A\u0443\u0440\u0441\u0430 ",-1),E={class:"buttons d-flex align-items-center"},I=t("i",{class:"fa fa-plus"},null,-1),j=m(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C "),q={key:0,class:"spinner-border text-primary mx-3",role:"status"},z=t("span",{class:"sr-only"},"Loading...",-1),G=[z],J={class:"container-fluid"},K={class:"card"},M={class:"card-body"},O={class:"row"},Q={class:"col-sm-12"},R={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},U=t("thead",null,[t("tr",{role:"row"},[t("th",null,"\u2116"),t("th",null,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),t("th",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F")])],-1),W={class:"btn-group btn-group-sm"},X=t("i",{class:"fas fa-edit"},null,-1);function Y(s,d,r,Z,f,tt){const c=l("Link"),b=l("Pagination"),p=l("AdminLayout");return n(),a(u,null,[C,i(p,null,{breadcrumbs:o(()=>[t("div",T,[A,t("div",N,[t("ol",P,[t("li",V,[t("a",{href:s.route("admin.index")},S,8,D)]),$])])])]),header:o(()=>[t("div",E,[i(c,{class:"btn btn-primary mr-2",href:s.route("admin.courseTypes.create")},{default:o(()=>[I,j]),_:1},8,["href"]),f.loading?(n(),a("div",q,G)):x("",!0)])]),default:o(()=>[t("div",J,[t("div",K,[t("div",M,[t("div",O,[t("div",Q,[t("table",R,[U,t("tbody",null,[(n(!0),a(u,null,L(r.courseTypes.data,(e,_)=>(n(),a("tr",{class:"odd",key:"courseType"+e.id},[t("td",null,h(e.from?e.from+_:_+1),1),t("td",null,h(e.name),1),t("td",null,[t("div",W,[i(c,{href:s.route("admin.courseTypes.edit",e),class:"btn btn-primary",title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"},{default:o(()=>[X]),_:2},1032,["href"])])])]))),128))])])])]),i(b,{links:r.courseTypes.links},null,8,["links"])])])])]),_:1})],64)}const nt=y(B,[["render",Y]]);export{nt as default};
