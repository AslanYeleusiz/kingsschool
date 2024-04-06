import{_ as p,A as g}from"./AdminLayout.994209b6.js";import{L as v,H as y,r as n,o as i,a as l,e as o,w as a,F as m,b as t,g as k,d as h,t as u}from"./app.4e924e2d.js";import{P as w}from"./Pagination.04e26066.js";const x={components:{AdminLayout:g,Link:v,Pagination:w,Head:y},props:["filials"],data(){return{filter:{name:route().params.name?route().params.name:null},loading:0}},methods:{deleteData(s){Swal.fire({title:"\u0423\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C?",text:"\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0447\u0442\u043E \u043D\u0435\u043B\u044C\u0437\u044F \u0431\u0443\u0434\u0435\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0414\u0430, \u0443\u0434\u0430\u043B\u044E!",cancelButtonText:"\u041D\u0435\u0442"}).then(r=>{r.isConfirmed&&this.$inertia.delete(route("admin.filials.destroy",s))})},search(){this.loading=1;const s=this.clearParams(this.filter);this.$inertia.get(route("admin.filials.index"),s)}}},B=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0424\u0438\u043B\u0438\u0430\u043B\u044B")],-1),L={class:"row mb-2"},C=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u0421\u043F\u0438\u0441\u043E\u043A \u0444\u0438\u043B\u0438\u0430\u043B\u043E\u0432")],-1),P={class:"col-sm-6"},A={class:"breadcrumb float-sm-right"},T={class:"breadcrumb-item"},$=["href"],N=t("i",{class:"fas fa-dashboard"},null,-1),V=h(" \u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 "),D=[N,V],F=t("li",{class:"breadcrumb-item active"}," \u0421\u043F\u0438\u0441\u043E\u043A \u0444\u0438\u043B\u0438\u0430\u043B\u043E\u0432 ",-1),H={class:"buttons d-flex align-items-center"},S=t("i",{class:"fa fa-plus"},null,-1),E=h(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C "),I={class:"container-fluid"},j={class:"card"},q={class:"card-body"},z={class:"row"},G={class:"col-sm-12"},J={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},K=t("thead",null,[t("tr",{role:"row"},[t("th",null,"\u2116"),t("th",null,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),t("th",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F")])],-1),M={class:"btn-group btn-group-sm"},O=t("i",{class:"fas fa-edit"},null,-1);function Q(s,r,d,R,U,W){const c=n("Link"),f=n("Pagination"),b=n("AdminLayout");return i(),l(m,null,[B,o(b,null,{breadcrumbs:a(()=>[t("div",L,[C,t("div",P,[t("ol",A,[t("li",T,[t("a",{href:s.route("admin.index")},D,8,$)]),F])])])]),header:a(()=>[t("div",H,[o(c,{class:"btn btn-primary mr-2",href:s.route("admin.filials.create")},{default:a(()=>[S,E]),_:1},8,["href"])])]),default:a(()=>[t("div",I,[t("div",j,[t("div",q,[t("div",z,[t("div",G,[t("table",J,[K,t("tbody",null,[(i(!0),l(m,null,k(d.filials.data,(e,_)=>(i(),l("tr",{class:"odd",key:"filial"+e.id},[t("td",null,u(e.from?e.from+_:_+1),1),t("td",null,u(e.name),1),t("td",null,[t("div",M,[o(c,{href:s.route("admin.filials.edit",e),class:"btn btn-primary",title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"},{default:a(()=>[O]),_:2},1032,["href"])])])]))),128))])])])]),o(f,{links:d.filials.links},null,8,["links"])])])])]),_:1})],64)}const tt=p(x,[["render",Q]]);export{tt as default};
