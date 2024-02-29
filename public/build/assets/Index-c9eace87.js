import{A as G}from"./AdminLayout-4103f48c.js";import{L,H as T,a as B,o as l,c as n,d as g,w as f,F as v,e as t,t as a,b as j,i as _,g as m,m as x,v as p,k as y,j as C,h as b,n as S,l as V,f as P}from"./app-9ffddd28.js";import{P as A}from"./Pagination-53a04694.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const N={components:{AdminLayout:G,Link:L,Pagination:A,Head:T},props:["orders","groups","user","teacher"],data(){return{filter:{studFio:route().params.studFio?route().params.studFio:null,subj:route().params.subj?route().params.subj:null,prepodFio:route().params.prepodFio?route().params.prepodFio:null,phone:route().params.phone?route().params.phone:null},loading:0,newGroup:"",allPrice:0,newAllPrice:0}},methods:{calculatePrice(d,o){return this.orders.data.reduce((h,u)=>d==2&&u.lastEduPaid.status==3||u.lastEduPaid&&u.lastEduPaid.status==d?h+(o?u.newPrice:u.price):h,0)},calculateAllPrice(d){return this.orders.data.reduce((e,h)=>e+(d?h.newPrice:h.price),0)},checkStudents(){return this.user.role_id==1?!1:this.orders.data.every(d=>d.group_id!==null)==!1},setNewGroup(d,o=null){this.$inertia.put(route("admin.students.update",d),{name:this.newGroup,groupId:o})},setGroup(d,o=null){this.orders.data.find(e=>e.id==d).group_id==0?this.newGroup="":this.setNewGroup(d,o)},setPaid(d,o){if(o)Swal.fire({title:"Подтвердите оплату",icon:"success",showCancelButton:!0,confirmButtonColor:"#71DD37",cancelButtonColor:"#adb5bd",confirmButtonText:"Подтвердить",cancelButtonText:"Отклонить"}).then(e=>{e.isConfirmed&&this.$inertia.post(route("admin.students.paid",d))});else{if(this.orders.data.find(h=>h.id==d).lastEduPaid.is_paid)return Swal.fire({title:"Невозможно!",text:"Оплата не может быть отменена, так как зарплата была выдана учителю!",icon:"error"});Swal.fire({title:"Отменить оплату?",icon:"error",showCancelButton:!0,confirmButtonColor:"#71DD37",cancelButtonColor:"#adb5bd",confirmButtonText:"Подтвердить",cancelButtonText:"Отклонить"}).then(h=>{h.isConfirmed&&this.$inertia.post(route("admin.students.deletePaid",d))})}},search(){this.loading=1;const d=this.clearParams(this.filter);this.$inertia.get(route("admin.students.index"),d)},deleteData(d){Swal.fire({title:"Жоюға сенімдісіз бе?",text:"Қайтып қалпына келмеуі мүмкін!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Иә, жоямын!",cancelButtonText:"Жоқ"}).then(o=>{o.isConfirmed&&this.$inertia.delete(route("admin.groups.destroy",d))})},deleteDataAtGroup(d){Swal.fire({title:"Удалить ученика из группы?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Да!",cancelButtonText:"Нет"}).then(o=>{o.isConfirmed&&this.$inertia.delete(route("admin.groups.destroyOrder",d))})}}},U=t("head",null,[t("title",null,"Админ панель | Студенты")],-1),I={class:"row mb-2"},K={class:"col-sm-6"},M={class:"m-0"},H={class:"col-sm-6"},z={class:"breadcrumb float-sm-right"},O={class:"breadcrumb-item"},R=["href"],W=t("i",{class:"fas fa-dashboard"},null,-1),q=b(" Басты бет "),J=[W,q],Q=t("li",{class:"breadcrumb-item active"}," Студенты ",-1),X={class:"buttons d-flex align-items-center"},Y=t("i",{class:"fa fa-plus"},null,-1),Z=b(" Қосу "),$=t("i",{class:"fa fa-trash"},null,-1),tt=b(" Фильтрді тазалау "),st=b(" Отчёт для выдачи зарплаты "),et=b(" Полный отчёт "),lt={key:3,class:"ml-2 badge badge-danger"},ot={class:"container-fluid"},nt={class:"card"},dt={class:"card-body"},it={class:"row"},at={class:"col-sm-12"},ct={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},ut={role:"row"},rt=t("th",null,"№",-1),_t=t("th",null,null,-1),ht=t("th",null,"ФИО",-1),ft=t("th",null,"Предмет",-1),mt=t("th",null,"Статус",-1),vt={key:0},kt=t("th",null,"Номер телефона",-1),pt={key:1},bt={key:2},gt={class:"filters"},yt=t("td",null,null,-1),Ct=t("td",null,null,-1),Pt={key:0},wt={key:1},Bt={key:2},jt=t("td",null,null,-1),xt={class:"d-f aj-c"},St={class:"d-f j-c"},Ft={class:"paidBlock"},Et=["onClick"],Gt=["onClick"],Lt=["onClick"],Tt={class:"paid date"},Vt={key:0},At={class:"d-f j-c"},Dt={class:"tablemask",title:"Написать по Whatsapp"},Nt={key:1},Ut={class:"d-f j-c"},It={class:"paidBlock"},Kt={key:0,class:"paid success no-hover"},Mt=["onClick"],Ht=["onClick"],zt={class:"paid date no-hover"},Ot={key:0},Rt=["onChange","onUpdate:modelValue"],Wt=t("option",{value:null,hidden:""}," Выбрать ",-1),qt=t("option",{value:0}," + Добавить группу ",-1),Jt=["value"],Qt={key:1},Xt=["onFocusout"],Yt={class:"btn-group btn-group-sm"},Zt=t("i",{class:"fas fa-edit"},null,-1),$t={class:"odd"},ts=t("td",null,null,-1),ss=t("td",null,null,-1),es=t("td",null,null,-1),ls=t("td",null,null,-1),os=t("td",null,null,-1),ns=t("td",null,null,-1),ds=t("td",null,"Оплачено",-1),is={class:"d-f j-c"},as={class:"paidBlock"},cs={class:"paid success no-hover"},us={class:"paid date no-hover"},rs=t("td",null,null,-1),_s=t("td",null,null,-1),hs={class:"odd"},fs=t("td",null,null,-1),ms=t("td",null,null,-1),vs=t("td",null,null,-1),ks=t("td",null,null,-1),ps=t("td",null,null,-1),bs=t("td",null,null,-1),gs=t("td",null,"Не оплачено",-1),ys={class:"d-f j-c"},Cs={class:"paidBlock"},Ps={class:"paid pd danger no-hover"},ws={class:"paid date no-hover"},Bs=t("td",null,null,-1),js=t("td",null,null,-1),xs={class:"odd"},Ss=t("td",null,null,-1),Fs=t("td",null,null,-1),Es=t("td",null,null,-1),Gs=t("td",null,null,-1),Ls=t("td",null,null,-1),Ts=t("td",null,null,-1),Vs=t("td",null,"Общее",-1),As={class:"d-f j-c"},Ds={class:"paidBlock"},Ns={class:"paid pd danger no-hover"},Us={class:"paid date no-hover"},Is=t("td",null,null,-1),Ks=t("td",null,null,-1),Ms={key:0,class:"container-fluid"},Hs={class:"card"},zs={class:"card-body"},Os=t("h2",{class:"mb-3"},"Группы",-1),Rs={class:"row"},Ws={class:"col-sm-12"},qs=["data-target"],Js={class:"d-flex center"},Qs={class:"d-flex gap-20"},Xs={class:"mr-3 modul_name"},Ys=["onClick"],Zs=t("i",{class:"fas fa-times"},null,-1),$s=[Zs],te=t("span",{class:"arrow mr-3"},"▼",-1),se=["id"],ee={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},le=t("thead",null,[t("tr",{role:"row"},[t("th",null,"№"),t("th"),t("th",null,"ФИО"),t("th",null,"Предмет"),t("th",null,"Статус"),t("td")])],-1),oe={class:"d-f aj-c"},ne={class:"d-f j-c"},de={class:"paidBlock"},ie=["onClick"],ae=["onClick"],ce=["onClick"],ue={class:"paid date"},re={class:"d-f j-b"},_e=t("div",null,null,-1),he=["onClick"],fe=t("i",{class:"fas fa-times"},null,-1),me=[fe];function ve(d,o,e,h,u,i){const k=B("Link"),F=B("Pagination"),E=B("AdminLayout");return l(),n(v,null,[U,g(E,null,{breadcrumbs:f(()=>{var s;return[t("div",I,[t("div",K,[t("h1",M,"Студенты "+a((s=e.teacher)==null?void 0:s.fio),1)]),t("div",H,[t("ol",z,[t("li",O,[t("a",{href:d.route("admin.index")},J,8,R)]),Q])])])]}),header:f(()=>[t("div",X,[e.user.role_id==1||e.user.role_id==2?(l(),j(k,{key:0,class:"btn btn-primary mr-2",href:d.route("admin.users.create")},{default:f(()=>[Y,Z]),_:1},8,["href"])):_("",!0),g(k,{class:"btn btn-danger",href:d.route("admin.students.index")},{default:f(()=>[$,tt]),_:1},8,["href"]),e.groups?(l(),j(k,{key:1,class:"btn btn-success ml-2",href:d.route("admin.teachers.reports",e.teacher.id)},{default:f(()=>[st]),_:1},8,["href"])):_("",!0),e.groups?(l(),j(k,{key:2,class:"btn btn-success ml-2",href:d.route("admin.teachers.fullReports",e.teacher.id)},{default:f(()=>[et]),_:1},8,["href"])):_("",!0),i.checkStudents()?(l(),n("div",lt,[t("h3",null,a(e.groups?"Ваши":"Некоторые")+" студенты не распределены по группам",1)])):_("",!0)])]),default:f(()=>[t("div",ot,[t("div",nt,[t("div",dt,[t("div",it,[t("div",at,[t("table",ct,[t("thead",null,[t("tr",ut,[rt,_t,ht,ft,mt,e.user.role_id<3?(l(),n("th",vt,"Преподаватель")):_("",!0),kt,e.user.role_id<3?(l(),n("th",pt,"Цена")):_("",!0),e.groups?(l(),n("th",bt,"Группа")):_("",!0),m(t("th",null,null,512),[[x,e.user.role_id==1||e.user.role_id==2]])]),t("tr",gt,[yt,Ct,t("td",null,[m(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>u.filter.studFio=s),class:"form-control",placeholder:"Студент ФИО",onKeyup:o[1]||(o[1]=y((...s)=>i.search&&i.search(...s),["enter"]))},null,544),[[p,u.filter.studFio]])]),t("td",null,[m(t("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>u.filter.subj=s),class:"form-control",placeholder:"Предмет",onKeyup:o[3]||(o[3]=y((...s)=>i.search&&i.search(...s),["enter"]))},null,544),[[p,u.filter.subj]])]),e.user.role_id<3?(l(),n("td",Pt)):_("",!0),t("td",null,[m(t("input",{"onUpdate:modelValue":o[4]||(o[4]=s=>u.filter.prepodFio=s),class:"form-control",placeholder:"Преподаватель ФИО",onKeyup:o[5]||(o[5]=y((...s)=>i.search&&i.search(...s),["enter"]))},null,544),[[p,u.filter.prepodFio]])]),e.user.role_id<3?(l(),n("td",wt,[m(t("input",{"onUpdate:modelValue":o[6]||(o[6]=s=>u.filter.phone=s),class:"form-control",placeholder:"Номер телефона",onKeyup:o[7]||(o[7]=y((...s)=>i.search&&i.search(...s),["enter"]))},null,544),[[p,u.filter.phone]])])):_("",!0),e.groups?(l(),n("td",Bt)):_("",!0),jt])]),t("tbody",null,[(l(!0),n(v,null,C(e.orders.data,(s,c)=>(l(),n("tr",{class:"odd",key:"order"+s.id},[t("td",null,a(s.from?s.from+c:c+1),1),t("td",xt,[t("div",{class:"avatar",style:S({backgroundImage:`url(/storage/files/${s.user.avatar})`})},null,4)]),t("td",null,a(s.user.fio),1),t("td",null,a(s.subject?s.subject.name:"Нет данных"),1),t("td",null,[t("div",St,[t("div",Ft,[s.lastEduPaid.status==1?(l(),n("div",{key:0,class:"paid success",onClick:r=>i.setPaid(s.id,0)},"Оплачено",8,Et)):s.lastEduPaid.status==2?(l(),n("div",{key:1,class:"paid danger",onClick:r=>i.setPaid(s.id,1)},"Не оплачено",8,Gt)):(l(),n("div",{key:2,class:"paid black",onClick:r=>i.setPaid(s.id,1)},"Просрочено ",8,Lt)),t("div",Tt,a(s.lastEduPaid.date),1)])])]),e.user.role_id<3?(l(),n("td",Vt,a(s.teacher.fio),1)):_("",!0),t("td",null,[t("div",At,[t("div",Dt,a(s.user.tel_num),1)])]),e.user.role_id<3?(l(),n("td",Nt,[t("div",Ut,[t("div",It,[s.lastEduPaid.status==1?(l(),n("div",Kt,a(s.price.toLocaleString()),1)):s.lastEduPaid.status==2?(l(),n("div",{key:1,class:"paid pd danger no-hover",onClick:r=>i.setPaid(s.id,1)},a(s.price.toLocaleString()),9,Mt)):(l(),n("div",{key:2,class:"paid pd black no-hover",onClick:r=>i.setPaid(s.id,1)},a(s.price.toLocaleString()),9,Ht)),t("div",zt,a(s.newPrice.toLocaleString()),1)])])])):_("",!0),e.groups?(l(),n(v,{key:2},[e.groups&&s.group_id!=0?(l(),n("td",Ot,[m(t("select",{class:"form-control",onChange:P(r=>i.setGroup(s.id,s.group_id),["prevent"]),"onUpdate:modelValue":r=>s.group_id=r,placeholder:"Белсенді"},[Wt,qt,(l(!0),n(v,null,C(e.groups,r=>(l(),n("option",{value:r.id},a(r.name),9,Jt))),256))],40,Rt),[[V,s.group_id]])])):(l(),n("td",Qt,[m(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[8]||(o[8]=r=>u.newGroup=r),onFocusout:r=>i.setNewGroup(s.id)},null,40,Xt),[[p,u.newGroup]])]))],64)):_("",!0),m(t("td",null,[t("div",Yt,[g(k,{href:d.route("admin.users.edit",s.id),class:"btn btn-primary",title:"Изменить"},{default:f(()=>[Zt]),_:2},1032,["href"])])],512),[[x,e.user.role_id==1||e.user.role_id==2]])]))),128)),t("tr",$t,[ts,ss,es,ls,os,ns,ds,t("td",null,[t("div",is,[t("div",as,[t("div",cs,a(i.calculatePrice(1,0)),1),t("div",us,a(i.calculatePrice(1,1)),1)])])]),rs,_s]),t("tr",hs,[fs,ms,vs,ks,ps,bs,gs,t("td",null,[t("div",ys,[t("div",Cs,[t("div",Ps,a(i.calculatePrice(2,0)),1),t("div",ws,a(i.calculatePrice(2,1)),1)])])]),Bs,js]),t("tr",xs,[Ss,Fs,Es,Gs,Ls,Ts,Vs,t("td",null,[t("div",As,[t("div",Ds,[t("div",Ns,a(i.calculateAllPrice(0)),1),t("div",Us,a(i.calculateAllPrice(1)),1)])])]),Is,Ks])])])])]),g(F,{links:e.orders.links},null,8,["links"])])])]),e.groups?(l(),n("div",Ms,[t("div",Hs,[t("div",zs,[Os,t("div",Rs,[t("div",Ws,[(l(!0),n(v,null,C(e.groups,s=>(l(),n("div",{class:"module",key:"group"+s.id},[t("div",{class:"module-header","data-toggle":"collapse","data-target":"#moduleContent_"+s.id},[t("div",Js,[t("div",Qs,[t("h4",Xs,a(s.name),1),t("div",{class:"btn-group btn-group-sm",onClick:o[9]||(o[9]=P(()=>{},["stop"]))},[t("button",{onClick:P(c=>i.deleteData(s.id,!0),["prevent"]),class:"btn btn-danger",title:"Жою"},$s,8,Ys)])]),te])],8,qs),t("div",{id:"moduleContent_"+s.id,class:"module-content collapse show"},[t("table",ee,[le,t("tbody",null,[(l(!0),n(v,null,C(e.orders.data,(c,r)=>(l(),n("tr",{class:"odd",key:"grouporder"+c.id},[c.group_id==s.id?(l(),n(v,{key:0},[t("td",null,a(c.from?c.from+r:r+1),1),t("td",oe,[t("div",{class:"avatar",style:S({backgroundImage:`url(/storage/files/${c.user.avatar})`})},null,4)]),t("td",null,a(c.user.fio),1),t("td",null,a(c.subject?c.subject.name:"Нет данных"),1),t("td",null,[t("div",ne,[t("div",de,[c.lastEduPaid.status==1?(l(),n("div",{key:0,class:"paid success",onClick:w=>i.setPaid(c.id,0)}," Оплачено",8,ie)):c.lastEduPaid.status==2?(l(),n("div",{key:1,class:"paid danger",onClick:w=>i.setPaid(c.id,1)},"Не оплачено",8,ae)):(l(),n("div",{key:2,class:"paid black",onClick:w=>i.setPaid(c.id,1)},"Просрочено ",8,ce)),t("div",ue,a(c.lastEduPaid.date),1)])])]),t("td",null,[t("div",re,[_e,t("button",{onClick:P(w=>i.deleteDataAtGroup(c.id),["prevent"]),class:"btn btn-danger",title:"Жою"},me,8,he)])])],64)):_("",!0)]))),128))])])],8,se)]))),128))])])])])])):_("",!0)]),_:1})],64)}const ye=D(N,[["render",ve]]);export{ye as default};
