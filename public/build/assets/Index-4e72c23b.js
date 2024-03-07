import{_ as L,A as V}from"./AdminLayout-40ee1a90.js";import{L as B,H as P,r as f,o as a,e as r,b as c,w as d,F as m,a as t,h as T,g as _,v as p,k as b,j as w,f as v,i as y,d as g,t as o}from"./app-15681a8f.js";import{P as U}from"./Pagination-43b649e4.js";const A={components:{AdminLayout:V,Link:B,Pagination:U,Head:P},props:["expenses","types","filials"],data(){return{filter:{name:route().params.name?route().params.name:null,type_id:route().params.type_id?route().params.type_id:null,fio:route().params.fio?route().params.fio:null,filial_id:route().params.filial_id?route().params.filial_id:null},loading:0}},methods:{deleteData(i){Swal.fire({title:"Жоюға сенімдісіз бе?",text:"Қайтып қалпына келмеуі мүмкін!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Иә, жоямын!",cancelButtonText:"Жоқ"}).then(l=>{l.isConfirmed&&this.$inertia.delete(route("admin.expenses.destroy",i))})},search(){this.loading=1;const i=this.clearParams(this.filter);this.$inertia.get(route("admin.expenses.index"),i)}}},D=t("head",null,[t("title",null,"Админ панель | Расходы")],-1),K={class:"row mb-2"},N=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"Расходы")],-1),M={class:"col-sm-6"},S={class:"breadcrumb float-sm-right"},F={class:"breadcrumb-item"},H=["href"],j=t("i",{class:"fas fa-dashboard"},null,-1),E=g(" Басты бет "),I=[j,E],q=t("li",{class:"breadcrumb-item active"}," Расходы ",-1),z={class:"buttons d-flex align-items-center"},G=t("i",{class:"fa fa-plus"},null,-1),J=g(" Қосу "),O=t("i",{class:"fa fa-trash"},null,-1),Q=g(" Фильтрді тазалау "),R={key:0,class:"spinner-border text-primary mx-3",role:"status"},W=t("span",{class:"sr-only"},"Loading...",-1),X=[W],Y={class:"container-fluid"},Z={class:"card"},$={class:"card-body"},tt={class:"row"},et={class:"col-sm-12"},lt={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},st=t("tr",{role:"row"},[t("th",null,"№"),t("th",null,"Название"),t("th",null,"Тип"),t("th",null,"Администратор"),t("th",null,"Филиал"),t("th",null,"Дата"),t("th",null,"Сумма"),t("th",null,"Действия")],-1),nt={class:"filters"},ot=t("td",null,null,-1),it=t("option",{value:null}," Барлығы ",-1),at=["value"],rt=t("option",{value:null}," Барлығы ",-1),dt=["value"],ut=t("td",null,null,-1),ct=t("td",null,null,-1),_t=t("td",null,null,-1),mt={class:"btn-group btn-group-sm"},ht=t("i",{class:"fas fa-edit"},null,-1),ft=["onClick"],pt=t("i",{class:"fas fa-times"},null,-1),bt=[pt];function vt(i,l,u,yt,s,n){const h=f("Link"),C=f("Pagination"),x=f("AdminLayout");return a(),r(m,null,[D,c(x,null,{breadcrumbs:d(()=>[t("div",K,[N,t("div",M,[t("ol",S,[t("li",F,[t("a",{href:i.route("admin.index")},I,8,H)]),q])])])]),header:d(()=>[t("div",z,[c(h,{class:"btn btn-primary mr-2",href:i.route("admin.expenses.create")},{default:d(()=>[G,J]),_:1},8,["href"]),c(h,{class:"btn btn-danger",href:i.route("admin.expenses.index")},{default:d(()=>[O,Q]),_:1},8,["href"]),s.loading?(a(),r("div",R,X)):T("",!0)])]),default:d(()=>[t("div",Y,[t("div",Z,[t("div",$,[t("div",tt,[t("div",et,[t("table",lt,[t("thead",null,[st,t("tr",nt,[ot,t("td",null,[_(t("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>s.filter.name=e),class:"form-control",placeholder:"Название",onKeyup:l[1]||(l[1]=b((...e)=>n.search&&n.search(...e),["enter"]))},null,544),[[p,s.filter.name]])]),t("td",null,[_(t("select",{class:"form-control",onChange:l[2]||(l[2]=v((...e)=>n.search&&n.search(...e),["prevent"])),"onUpdate:modelValue":l[3]||(l[3]=e=>s.filter.type_id=e)},[it,(a(!0),r(m,null,y(u.types,e=>(a(),r("option",{key:e.id,value:e.id},o(e.name),9,at))),128))],544),[[w,s.filter.type_id]])]),t("td",null,[_(t("input",{"onUpdate:modelValue":l[4]||(l[4]=e=>s.filter.fio=e),class:"form-control",placeholder:"Преподаватель ФИО",onKeyup:l[5]||(l[5]=b((...e)=>n.search&&n.search(...e),["enter"]))},null,544),[[p,s.filter.fio]])]),t("td",null,[_(t("select",{class:"form-control",onChange:l[6]||(l[6]=v((...e)=>n.search&&n.search(...e),["prevent"])),"onUpdate:modelValue":l[7]||(l[7]=e=>s.filter.filial_id=e)},[rt,(a(!0),r(m,null,y(u.filials,e=>(a(),r("option",{key:"filial"+e.id,value:e.id},o(e.name),9,dt))),128))],544),[[w,s.filter.filial_id]])]),t("td",null,[_(t("input",{"onUpdate:modelValue":l[8]||(l[8]=e=>s.filter.name=e),class:"form-control",placeholder:"Дата",onKeyup:l[9]||(l[9]=b((...e)=>n.search&&n.search(...e),["enter"]))},null,544),[[p,s.filter.name]])]),ut,ct,_t])]),t("tbody",null,[(a(!0),r(m,null,y(u.expenses.data,(e,k)=>(a(),r("tr",{class:"odd",key:"expense"+e.id},[t("td",null,o(e.from?e.from+k:k+1),1),t("td",null,o(e.name),1),t("td",null,o(u.types[e.type_id-1].name),1),t("td",null,o(e.user.fio),1),t("td",null,o(e.filial.name),1),t("td",null,o(e.date),1),t("td",null,o(e.summa),1),t("td",null,[t("div",mt,[c(h,{href:i.route("admin.expenses.edit",e),class:"btn btn-primary",title:"Изменить"},{default:d(()=>[ht]),_:2},1032,["href"]),t("button",{onClick:v(gt=>n.deleteData(e.id),["prevent"]),class:"btn btn-danger",title:"Жою"},bt,8,ft)])])]))),128))])])])]),c(C,{links:u.expenses.links},null,8,["links"])])])])]),_:1})],64)}const xt=L(A,[["render",vt]]);export{xt as default};