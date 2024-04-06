import{_ as b,A as p}from"./AdminLayout-e2a9f783.js";import{L as g,H as v,r as a,o as i,e as l,b as n,w as e,F as _,a as t,i as x,d as m,t as u}from"./app-76f5f351.js";import{P as y}from"./Pagination-6b5293cb.js";const k={components:{AdminLayout:p,Link:g,Pagination:y,Head:v},props:["roles"],data(){return{filter:{name:route().params.name?route().params.name:null},loading:0}},methods:{deleteData(s){Swal.fire({title:"Уверены, что хотите удалить?",text:"Возможно, что нельзя будет восстановить!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Да, удалю!",cancelButtonText:"Нет"}).then(r=>{r.isConfirmed&&this.$inertia.delete(route("admin.roles.destroy",s))})},search(){this.loading=1;const s=this.clearParams(this.filter);this.$inertia.get(route("admin.roles.index"),s)}}},w=t("head",null,[t("title",null,"Админ панель | Роль")],-1),B={class:"row mb-2"},L=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"Список ролей")],-1),C={class:"col-sm-6"},P={class:"breadcrumb float-sm-right"},A={class:"breadcrumb-item"},T=["href"],$=t("i",{class:"fas fa-dashboard"},null,-1),D=m(" Главная страница "),N=[$,D],V=t("li",{class:"breadcrumb-item active"}," Список ролей ",-1),F={class:"buttons d-flex align-items-center"},H=t("i",{class:"fa fa-plus"},null,-1),I=m(" Добавить "),S={class:"container-fluid"},E={class:"card"},j={class:"card-body"},q={class:"row"},z={class:"col-sm-12"},G={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},J=t("thead",null,[t("tr",{role:"row"},[t("th",null,"ID"),t("th",null,"Название"),t("th",null,"Действия")])],-1),K={class:"btn-group btn-group-sm"},M=t("i",{class:"fas fa-edit"},null,-1);function O(s,r,d,Q,R,U){const c=a("Link"),h=a("Pagination"),f=a("AdminLayout");return i(),l(_,null,[w,n(f,null,{breadcrumbs:e(()=>[t("div",B,[L,t("div",C,[t("ol",P,[t("li",A,[t("a",{href:s.route("admin.index")},N,8,T)]),V])])])]),header:e(()=>[t("div",F,[n(c,{class:"btn btn-primary mr-2",href:s.route("admin.roles.create")},{default:e(()=>[H,I]),_:1},8,["href"])])]),default:e(()=>[t("div",S,[t("div",E,[t("div",j,[t("div",q,[t("div",z,[t("table",G,[J,t("tbody",null,[(i(!0),l(_,null,x(d.roles.data,(o,W)=>(i(),l("tr",{class:"odd",key:"role"+o.id},[t("td",null,u(o.id),1),t("td",null,u(o.name),1),t("td",null,[t("div",K,[n(c,{href:s.route("admin.roles.edit",o),class:"btn btn-primary",title:"Изменить"},{default:e(()=>[M]),_:2},1032,["href"])])])]))),128))])])])]),n(h,{links:d.roles.links},null,8,["links"])])])])]),_:1})],64)}const tt=b(k,[["render",O]]);export{tt as default};
