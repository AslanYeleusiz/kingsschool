import{_ as D,A as L}from"./AdminLayout-e2a9f783.js";import{L as T,H,r as h,o as n,e as i,b as u,w as d,F as C,a as t,h as P,g as w,v as x,k as B,i as V,d as _,t as r,n as $,f as j}from"./app-76f5f351.js";import{P as A}from"./Pagination-6b5293cb.js";const M={components:{AdminLayout:L,Link:T,Pagination:A,Head:H},props:["orders"],data(){return{filter:{studFio:route().params.studFio?route().params.studFio:null,prepodFio:route().params.prepodFio?route().params.prepodFio:null},loading:0,newGroup:""}},methods:{formatDateTime(o){if(!o)return"";const e=new Date(o),c=`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")} `,m=`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`;return`${c}${m}`},setPaid(o){Swal.fire({title:"Подтвердите оплату",icon:"success",showCancelButton:!0,confirmButtonColor:"#71DD37",cancelButtonColor:"#adb5bd",confirmButtonText:"Подтвердить",cancelButtonText:"Отклонить"}).then(e=>{e.isConfirmed&&this.$inertia.post(route("admin.paidHistories.paid",o))})},deleteData(o){Swal.fire({title:"Уверены, что хотите удалить?",text:"Возможно, что нельзя будет восстановить!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Да, удалю!",cancelButtonText:"Нет"}).then(e=>{e.isConfirmed&&this.$inertia.delete(route("admin.paidHistories.delete",o))})},search(){this.loading=1;const o=this.clearParams(this.filter);this.$inertia.get(route("admin.paidHistories.index"),o)}}},N=t("head",null,[t("title",null,"Админ панель | История платежей студентов")],-1),I={class:"row mb-2"},K=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"История платежей студентов")],-1),U={class:"col-sm-6"},z={class:"breadcrumb float-sm-right"},E={class:"breadcrumb-item"},G=["href"],W=t("i",{class:"fas fa-dashboard"},null,-1),Y=_(" Главная страница "),q=[W,Y],J=t("li",{class:"breadcrumb-item active"}," История платежей студентов ",-1),O={class:"buttons d-flex align-items-center"},Q=t("i",{class:"fa fa-trash"},null,-1),R=_(" Очистить фильтр "),X={key:0,class:"spinner-border text-primary mx-3",role:"status"},Z=t("span",{class:"sr-only"},"Loading...",-1),tt=[Z],st={class:"container-fluid"},et={class:"card"},ot={class:"card-body"},nt={class:"row"},it={class:"col-sm-12"},at={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},lt=t("tr",{role:"row"},[t("th",null,"№"),t("th"),t("th",null,"ФИО"),t("th",null,"Статус"),t("th",null,"Преподаватель"),t("th",null,"Подтверждение"),t("th",null,"Номер телефона"),t("th",null,"Действие")],-1),dt={class:"filters"},rt=t("td",null,null,-1),ct=t("td",null,null,-1),ut=t("td",null,null,-1),_t=t("td",null,null,-1),ht=t("td",null,null,-1),mt={class:"d-f aj-c"},pt=["onClick"],ft={class:"d-f j-c"},vt={class:"paidBlock"},gt={key:0,class:"paid success"},bt={key:1,class:"paid danger"},kt={class:"paid date"},yt=_(" Список студентов "),Ct={class:"d-f j-c"},wt={class:"paidBlock"},xt=["onClick"],Bt={key:1,class:"paid success"},St={class:"d-f j-c"},Ft={class:"tablemask",title:"Написать по Whatsapp"},Dt={class:"btn-group btn-group-sm"},Lt=["onClick"],Tt=t("i",{class:"fas fa-times"},null,-1),Ht=[Tt];function Pt(o,e,c,m,l,a){const p=h("Link"),S=h("Pagination"),F=h("AdminLayout");return n(),i(C,null,[N,u(F,null,{breadcrumbs:d(()=>[t("div",I,[K,t("div",U,[t("ol",z,[t("li",E,[t("a",{href:o.route("admin.index")},q,8,G)]),J])])])]),header:d(()=>[t("div",O,[u(p,{class:"btn btn-danger",href:o.route("admin.paidHistories.index")},{default:d(()=>[Q,R]),_:1},8,["href"]),l.loading?(n(),i("div",X,tt)):P("",!0)])]),default:d(()=>[t("div",st,[t("div",et,[t("div",ot,[t("div",nt,[t("div",it,[t("table",at,[t("thead",null,[lt,t("tr",dt,[rt,ct,t("td",null,[w(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>l.filter.studFio=s),class:"form-control",placeholder:"ФИО студента",onKeyup:e[1]||(e[1]=B((...s)=>a.search&&a.search(...s),["enter"]))},null,544),[[x,l.filter.studFio]])]),ut,t("td",null,[w(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>l.filter.prepodFio=s),class:"form-control",placeholder:"ФИО преподавателя",onKeyup:e[3]||(e[3]=B((...s)=>a.search&&a.search(...s),["enter"]))},null,544),[[x,l.filter.prepodFio]])]),_t,ht])]),t("tbody",null,[(n(!0),i(C,null,V(c.orders.data,(s,f)=>{var v,g,b;return n(),i("tr",{class:"odd",key:"order"+s.id},[t("td",null,r(s.from?s.from+f:f+1),1),t("td",mt,[t("div",{class:"avatar",style:$({backgroundImage:`url(/storage/files/${(v=s.paid_student.user)==null?void 0:v.avatar})`}),onClick:k=>{var y;return o.$page.props.flash.image=(y=s.paid_student.user)==null?void 0:y.avatar}},null,12,pt)]),t("td",null,r((g=s.paid_student.user)==null?void 0:g.fio),1),t("td",null,[t("div",ft,[t("div",vt,[s.status==2?(n(),i("div",gt,"Подтверждено")):(n(),i("div",bt,"Не подтверждено")),t("div",kt,r(a.formatDateTime(s.created_at)),1)])])]),t("td",null,[_(r(s.paid_student.teacher.fio)+" / ",1),u(p,{href:o.route("admin.students.index",{teacher_id:s.paid_student.teacher_id}),class:"block",title:"Список студентов"},{default:d(()=>[yt]),_:2},1032,["href"])]),t("td",null,[t("div",Ct,[t("div",wt,[s.status==1?(n(),i("div",{key:0,class:"paid warning",onClick:k=>a.setPaid(s.id)},"Подтвердить",8,xt)):(n(),i("div",Bt,"Подтверждено"))])])]),t("td",null,[t("div",St,[t("div",Ft,r((b=s.paid_student.user)==null?void 0:b.tel_num),1)])]),t("td",null,[t("div",Dt,[t("button",{onClick:j(k=>a.deleteData(s.id,!0),["prevent"]),class:"btn btn-danger",title:"Жою"},Ht,8,Lt)])])])}),128))])])])]),u(S,{links:c.orders.links},null,8,["links"])])])])]),_:1})],64)}const At=D(M,[["render",Pt]]);export{At as default};
