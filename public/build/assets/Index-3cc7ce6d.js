import{A as B}from"./AdminLayout-4103f48c.js";import{L,H as V,a as p,o as a,c as i,d,w as r,F as m,e,i as g,g as f,v as y,k,l as x,f as b,j as v,h,t as u,n as P,b as S}from"./app-9ffddd28.js";import{P as T}from"./Pagination-53a04694.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const D={components:{AdminLayout:B,Link:L,Pagination:T,Head:V},props:["users","roles","filials"],data(){return{filter:{fio:route().params.fio?route().params.fio:null,tel_num:route().params.tel_num?route().params.tel_num:null,role_id:route().params.role_id?route().params.role_id:null,filial_id:route().params.filial_id?route().params.filial_id:null},loading:0}},methods:{deleteData(l){Swal.fire({title:"Жоюға сенімдісіз бе?",text:"Қайтып қалпына келмеуі мүмкін!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Иә, жоямын!",cancelButtonText:"Жоқ"}).then(s=>{s.isConfirmed&&this.$inertia.delete(route("admin.users.destroy",l))})},search(){this.loading=1;const l=this.clearParams(this.filter);this.$inertia.get(route("admin.users.index"),l)}}},N=e("head",null,[e("title",null,"Админ панель | Қолданушылар")],-1),U={class:"row mb-2"},I=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"Қолданушылар тізімі")],-1),K={class:"col-sm-6"},M={class:"breadcrumb float-sm-right"},j={class:"breadcrumb-item"},F=["href"],H=e("i",{class:"fas fa-dashboard"},null,-1),q=h(" Басты бет "),z=[H,q],E=e("li",{class:"breadcrumb-item active"}," Қолданушылар тізімі ",-1),G={class:"buttons d-flex align-items-center"},J=e("i",{class:"fa fa-plus"},null,-1),O=h(" Қосу "),Q=e("i",{class:"fa fa-trash"},null,-1),R=h(" Фильтрді тазалау "),W=e("i",{class:"fa fa-plus"},null,-1),X=h(" Удаленныё пользователи "),Y={key:0,class:"spinner-border text-primary mx-3",role:"status"},Z=e("span",{class:"sr-only"},"Loading...",-1),$=[Z],ee={class:"container-fluid"},te={class:"card"},se={class:"card-body"},le={class:"row"},ne={class:"col-sm-12"},oe={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},ae=e("tr",{role:"row"},[e("th"),e("th",null,"Толық аты-жөні"),e("th",null,"Телефон нөмірі"),e("th",null,"Филиал"),e("th",null,"Роль"),e("th",null,"Әрекет")],-1),ie={class:"filters"},re=e("td",null,null,-1),de=e("option",{value:null}," Барлығы ",-1),ue=["value"],ce=e("option",{value:null}," Барлығы ",-1),_e=["value"],me={class:"btn-group btn-group-sm"},fe=e("i",{class:"fas fa-question"},null,-1),he=e("i",{class:"fas fa-edit"},null,-1),pe=["onClick"],be=e("i",{class:"fas fa-times"},null,-1),ve=[be];function ge(l,s,_,ye,n,o){const c=p("Link"),w=p("Pagination"),C=p("AdminLayout");return a(),i(m,null,[N,d(C,null,{breadcrumbs:r(()=>[e("div",U,[I,e("div",K,[e("ol",M,[e("li",j,[e("a",{href:l.route("admin.index")},z,8,F)]),E])])])]),header:r(()=>[e("div",G,[d(c,{class:"btn btn-primary",href:l.route("admin.users.create")},{default:r(()=>[J,O]),_:1},8,["href"]),d(c,{class:"btn btn-danger mx-2",href:l.route("admin.users.index")},{default:r(()=>[Q,R]),_:1},8,["href"]),d(c,{class:"btn btn-primary",href:l.route("admin.users.deleted")},{default:r(()=>[W,X]),_:1},8,["href"]),n.loading?(a(),i("div",Y,$)):g("",!0)])]),default:r(()=>[e("div",ee,[e("div",te,[e("div",se,[e("div",le,[e("div",ne,[e("table",oe,[e("thead",null,[ae,e("tr",ie,[re,e("td",null,[f(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>n.filter.fio=t),class:"form-control",placeholder:"Толық аты-жөні",onKeyup:s[1]||(s[1]=k((...t)=>o.search&&o.search(...t),["enter"]))},null,544),[[y,n.filter.fio]])]),e("td",null,[f(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>n.filter.tel_num=t),class:"form-control",placeholder:"Телефон нөмірі",onKeyup:s[3]||(s[3]=k((...t)=>o.search&&o.search(...t),["enter"]))},null,544),[[y,n.filter.tel_num]])]),e("td",null,[f(e("select",{class:"form-control",onChange:s[4]||(s[4]=b((...t)=>o.search&&o.search(...t),["prevent"])),"onUpdate:modelValue":s[5]||(s[5]=t=>n.filter.filial_id=t),placeholder:"Филиал"},[de,(a(!0),i(m,null,v(_.filials,t=>(a(),i("option",{key:"filial"+t.id,value:t.id},u(t.name),9,ue))),128))],544),[[x,n.filter.filial_id]])]),e("td",null,[f(e("select",{class:"form-control",onChange:s[6]||(s[6]=b((...t)=>o.search&&o.search(...t),["prevent"])),"onUpdate:modelValue":s[7]||(s[7]=t=>n.filter.role_id=t),placeholder:"Филиал"},[ce,(a(!0),i(m,null,v(_.roles,t=>(a(),i("option",{key:"role"+t.id,value:t.id},u(t.name),9,_e))),128))],544),[[x,n.filter.role_id]])])])]),e("tbody",null,[(a(!0),i(m,null,v(_.users.data,(t,ke)=>(a(),i("tr",{class:"odd",key:"user"+t.id},[e("td",null,[e("div",{class:"avatar",style:P({backgroundImage:`url(/storage/files/${t.avatar})`})},null,4)]),e("td",null,u(t.fio),1),e("td",null,u(t.tel_num),1),e("td",null,u(t.filial.name),1),e("td",null,u(t.role.name),1),e("td",null,[e("div",me,[t.role_id==4?(a(),S(c,{key:0,href:l.route("admin.studentsSubjects.index",t.id),class:"btn btn-success",title:"Предметы"},{default:r(()=>[fe]),_:2},1032,["href"])):g("",!0),d(c,{href:l.route("admin.users.edit",t),class:"btn btn-primary",title:"Изменить"},{default:r(()=>[he]),_:2},1032,["href"]),e("button",{onClick:b(xe=>o.deleteData(t.id),["prevent"]),class:"btn btn-danger",title:"Жою"},ve,8,pe)])])]))),128))])])])]),d(w,{links:_.users.links},null,8,["links"])])])])]),_:1})],64)}const Ve=A(D,[["render",ge]]);export{Ve as default};
