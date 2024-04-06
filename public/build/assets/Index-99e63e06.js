import{_ as y,A as v}from"./AdminLayout-e2a9f783.js";import{L as g,H as k,r as l,o as n,e as a,b as i,w as o,F as u,a as t,h as x,i as L,d as m,t as h}from"./app-76f5f351.js";import{P as w}from"./Pagination-6b5293cb.js";const B={components:{AdminLayout:v,Link:g,Pagination:w,Head:k},props:["courseTypes"],data(){return{loading:0}},methods:{deleteData(s){Swal.fire({title:"Жоюға сенімдісіз бе?",text:"Қайтып қалпына келмеуі мүмкін!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Иә, жоямын!",cancelButtonText:"Жоқ"}).then(d=>{d.isConfirmed&&this.$inertia.delete(route("admin.courseTypes.destroy",s))})}}},C=t("head",null,[t("title",null,"Админ панель | Типы курсов")],-1),T={class:"row mb-2"},A=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"Список типов курса")],-1),N={class:"col-sm-6"},P={class:"breadcrumb float-sm-right"},V={class:"breadcrumb-item"},D=["href"],F=t("i",{class:"fas fa-dashboard"},null,-1),H=m(" Главная страница "),S=[F,H],$=t("li",{class:"breadcrumb-item active"}," Список типов курса ",-1),E={class:"buttons d-flex align-items-center"},I=t("i",{class:"fa fa-plus"},null,-1),j=m(" Добавить "),q={key:0,class:"spinner-border text-primary mx-3",role:"status"},z=t("span",{class:"sr-only"},"Loading...",-1),G=[z],J={class:"container-fluid"},K={class:"card"},M={class:"card-body"},O={class:"row"},Q={class:"col-sm-12"},R={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},U=t("thead",null,[t("tr",{role:"row"},[t("th",null,"№"),t("th",null,"Название"),t("th",null,"Действия")])],-1),W={class:"btn-group btn-group-sm"},X=t("i",{class:"fas fa-edit"},null,-1);function Y(s,d,r,Z,f,tt){const c=l("Link"),b=l("Pagination"),p=l("AdminLayout");return n(),a(u,null,[C,i(p,null,{breadcrumbs:o(()=>[t("div",T,[A,t("div",N,[t("ol",P,[t("li",V,[t("a",{href:s.route("admin.index")},S,8,D)]),$])])])]),header:o(()=>[t("div",E,[i(c,{class:"btn btn-primary mr-2",href:s.route("admin.courseTypes.create")},{default:o(()=>[I,j]),_:1},8,["href"]),f.loading?(n(),a("div",q,G)):x("",!0)])]),default:o(()=>[t("div",J,[t("div",K,[t("div",M,[t("div",O,[t("div",Q,[t("table",R,[U,t("tbody",null,[(n(!0),a(u,null,L(r.courseTypes.data,(e,_)=>(n(),a("tr",{class:"odd",key:"courseType"+e.id},[t("td",null,h(e.from?e.from+_:_+1),1),t("td",null,h(e.name),1),t("td",null,[t("div",W,[i(c,{href:s.route("admin.courseTypes.edit",e),class:"btn btn-primary",title:"Изменить"},{default:o(()=>[X]),_:2},1032,["href"])])])]))),128))])])])]),i(b,{links:r.courseTypes.links},null,8,["links"])])])])]),_:1})],64)}const nt=y(B,[["render",Y]]);export{nt as default};
