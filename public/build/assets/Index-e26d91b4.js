import{_ as D,A as F}from"./AdminLayout-40ee1a90.js";import{L,H as V,r as B,o as l,e as o,b as w,w as f,F as v,a as t,t as a,c as x,h as r,g as m,l as S,v as p,k as g,i as P,d as C,n as E,m as A,f as y}from"./app-15681a8f.js";import{P as K}from"./Pagination-43b649e4.js";const U={components:{AdminLayout:F,Link:L,Pagination:K,Head:V},props:["orders","groups","user","teacher"],data(){return{filter:{studFio:route().params.studFio?route().params.studFio:null,subj:route().params.subj?route().params.subj:null,prepodFio:route().params.prepodFio?route().params.prepodFio:null,phone:route().params.phone?route().params.phone:null},loading:0,newGroup:"",allPrice:0,newAllPrice:0}},methods:{calculatePrice(d,n){return this.orders.data.reduce((h,u)=>d==2&&u.lastEduPaid.status==3||u.lastEduPaid&&u.lastEduPaid.status==d?h+(n?u.newPrice:u.price):h,0)},calculateAllPrice(d){return this.orders.data.reduce((s,h)=>s+(d?h.newPrice:h.price),0)},checkStudents(){return this.user.role_id==1?!1:this.orders.data.every(d=>d.group_id!==null)==!1},setNewGroup(d){this.$inertia.put(route("admin.students.update",d),{name:this.newGroup})},setGroup(d,n){axios.post(`/admin/students/${d}/setGroups`,{group_ids:n}).then(s=>{console.log(s.data)})},setPaid(d,n){if(n)Swal.fire({title:"Подтвердите оплату",icon:"success",showCancelButton:!0,confirmButtonColor:"#71DD37",cancelButtonColor:"#adb5bd",confirmButtonText:"Подтвердить",cancelButtonText:"Отклонить"}).then(s=>{s.isConfirmed&&this.$inertia.post(route("admin.students.paid",d))});else{if(this.orders.data.find(h=>h.id==d).lastEduPaid.is_paid)return Swal.fire({title:"Невозможно!",text:"Оплата не может быть отменена, так как зарплата была выдана учителю!",icon:"error"});Swal.fire({title:"Отменить оплату?",icon:"error",showCancelButton:!0,confirmButtonColor:"#71DD37",cancelButtonColor:"#adb5bd",confirmButtonText:"Подтвердить",cancelButtonText:"Отклонить"}).then(h=>{h.isConfirmed&&this.$inertia.post(route("admin.students.deletePaid",d))})}},search(){this.loading=1;const d=this.clearParams(this.filter);this.$inertia.get(route("admin.students.index"),d)},deleteData(d){Swal.fire({title:"Жоюға сенімдісіз бе?",text:"Қайтып қалпына келмеуі мүмкін!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Иә, жоямын!",cancelButtonText:"Жоқ"}).then(n=>{n.isConfirmed&&this.$inertia.delete(route("admin.groups.destroy",d))})},deleteDataAtGroup(d,n){Swal.fire({title:"Удалить ученика из группы?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Да!",cancelButtonText:"Нет"}).then(s=>{s.isConfirmed&&this.$inertia.delete(route("admin.groups.destroyOrder",{id:d,groupId:n}))})},deleteDataStudent(d){Swal.fire({title:"Жоюға сенімдісіз бе?",text:"Қайтып қалпына келмеуі мүмкін!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Иә, жоямын!",cancelButtonText:"Жоқ"}).then(n=>{n.isConfirmed&&this.$inertia.delete(route("admin.students.destroy",d))})}}},N=t("head",null,[t("title",null,"Админ панель | Студенты")],-1),I={class:"row mb-2"},M={class:"col-sm-6"},H={class:"m-0"},z={class:"col-sm-6"},O={class:"breadcrumb float-sm-right"},R={class:"breadcrumb-item"},W=["href"],q=t("i",{class:"fas fa-dashboard"},null,-1),J=C(" Басты бет "),Q=[q,J],X=t("li",{class:"breadcrumb-item active"}," Студенты ",-1),Y={class:"buttons d-flex align-items-center"},Z=t("i",{class:"fa fa-plus"},null,-1),$=C(" Қосу "),tt=t("i",{class:"fa fa-trash"},null,-1),et=C(" Фильтрді тазалау "),st=C(" Отчёт для выдачи зарплаты "),lt=C(" Полный отчёт "),ot={key:3,class:"ml-2 badge badge-danger"},nt={class:"container-fluid"},dt={class:"card"},it={class:"card-body"},at={class:"row"},ct={class:"col-sm-12"},ut={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},rt={role:"row"},_t=t("th",null,"№",-1),ht=t("th",null,null,-1),ft=t("th",null,"ФИО",-1),mt=t("th",null,"Предмет",-1),vt=t("th",null,"Статус",-1),kt={key:0},bt=t("th",null,"Номер телефона",-1),pt={key:1},gt={key:2},yt={class:"filters"},Ct=t("td",null,null,-1),wt=t("td",null,null,-1),Pt={key:0},Bt={key:1},xt={key:2},jt=t("td",null,null,-1),St={class:"d-f aj-c"},Et={class:"d-f j-c"},Gt={class:"paidBlock"},Tt=["onClick"],Dt=["onClick"],Ft=["onClick"],Lt={class:"paid date"},Vt={key:0},At={class:"d-f j-c"},Kt={class:"tablemask",title:"Написать по Whatsapp"},Ut={key:1},Nt={class:"d-f j-c"},It={class:"paidBlock"},Mt={key:0,class:"paid success no-hover"},Ht=["onClick"],zt=["onClick"],Ot={class:"paid date no-hover"},Rt={key:0},Wt={class:"dropdown"},qt=t("div",{class:"tablemask"},"Выбрать группу",-1),Jt={class:"dropdown-content"},Qt=["onClick"],Xt={class:"form-group form-check item"},Yt=["id","value","onUpdate:modelValue","onChange"],Zt=["for"],$t={key:1},te=["onKeyup"],ee={class:"btn-group btn-group-sm"},se=t("i",{class:"fas fa-edit"},null,-1),le=["onClick"],oe=t("i",{class:"fas fa-times"},null,-1),ne=[oe],de={key:0,class:"odd"},ie=t("td",null,null,-1),ae=t("td",null,null,-1),ce=t("td",null,null,-1),ue=t("td",null,null,-1),re=t("td",null,null,-1),_e=t("td",null,null,-1),he=t("td",null,"Оплачено",-1),fe={class:"d-f j-c"},me={class:"paidBlock"},ve={class:"paid success no-hover"},ke={class:"paid date no-hover"},be=t("td",null,null,-1),pe=t("td",null,null,-1),ge={key:1,class:"odd"},ye=t("td",null,null,-1),Ce=t("td",null,null,-1),we=t("td",null,null,-1),Pe=t("td",null,null,-1),Be=t("td",null,null,-1),xe=t("td",null,null,-1),je=t("td",null,"Не оплачено",-1),Se={class:"d-f j-c"},Ee={class:"paidBlock"},Ge={class:"paid pd danger no-hover"},Te={class:"paid date no-hover"},De=t("td",null,null,-1),Fe=t("td",null,null,-1),Le={key:2,class:"odd"},Ve=t("td",null,null,-1),Ae=t("td",null,null,-1),Ke=t("td",null,null,-1),Ue=t("td",null,null,-1),Ne=t("td",null,null,-1),Ie=t("td",null,null,-1),Me=t("td",null,"Общее",-1),He={class:"d-f j-c"},ze={class:"paidBlock"},Oe={class:"paid pd success no-hover"},Re={class:"paid date no-hover"},We=t("td",null,null,-1),qe=t("td",null,null,-1),Je={key:0,class:"container-fluid"},Qe={class:"card"},Xe={class:"card-body"},Ye=t("h2",{class:"mb-3"},"Группы",-1),Ze={class:"row"},$e={class:"col-sm-12"},ts=["data-target"],es={class:"d-flex center"},ss={class:"d-flex gap-20"},ls={class:"mr-3 modul_name"},os=["onClick"],ns=t("i",{class:"fas fa-times"},null,-1),ds=[ns],is=t("span",{class:"arrow mr-3"},"▼",-1),as=["id"],cs={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},us=t("thead",null,[t("tr",{role:"row"},[t("th",null,"№"),t("th"),t("th",null,"ФИО"),t("th",null,"Предмет"),t("th",null,"Статус"),t("td")])],-1),rs={class:"d-f aj-c"},_s={class:"d-f j-c"},hs={class:"paidBlock"},fs=["onClick"],ms=["onClick"],vs=["onClick"],ks={class:"paid date"},bs={class:"d-f j-b"},ps=t("div",null,null,-1),gs=["onClick"],ys=t("i",{class:"fas fa-times"},null,-1),Cs=[ys];function ws(d,n,s,h,u,i){const b=B("Link"),G=B("Pagination"),T=B("AdminLayout");return l(),o(v,null,[N,w(T,null,{breadcrumbs:f(()=>{var e;return[t("div",I,[t("div",M,[t("h1",H,"Студенты "+a((e=s.teacher)==null?void 0:e.fio),1)]),t("div",z,[t("ol",O,[t("li",R,[t("a",{href:d.route("admin.index")},Q,8,W)]),X])])])]}),header:f(()=>[t("div",Y,[s.user.role_id==1||s.user.role_id==2?(l(),x(b,{key:0,class:"btn btn-primary mr-2",href:d.route("admin.users.create")},{default:f(()=>[Z,$]),_:1},8,["href"])):r("",!0),w(b,{class:"btn btn-danger",href:d.route("admin.students.index")},{default:f(()=>[tt,et]),_:1},8,["href"]),s.groups?(l(),x(b,{key:1,class:"btn btn-success ml-2",href:d.route("admin.teachers.reports",s.teacher.id)},{default:f(()=>[st]),_:1},8,["href"])):r("",!0),s.groups?(l(),x(b,{key:2,class:"btn btn-success ml-2",href:d.route("admin.teachers.fullReports",s.teacher.id)},{default:f(()=>[lt]),_:1},8,["href"])):r("",!0),i.checkStudents()?(l(),o("div",ot,[t("h3",null,a(s.groups?"Ваши":"Некоторые")+" студенты не распределены по группам",1)])):r("",!0)])]),default:f(()=>[t("div",nt,[t("div",dt,[t("div",it,[t("div",at,[t("div",ct,[t("table",ut,[t("thead",null,[t("tr",rt,[_t,ht,ft,mt,vt,s.user.role_id<3?(l(),o("th",kt,"Преподаватель")):r("",!0),bt,s.user.role_id<3?(l(),o("th",pt,"Цена")):r("",!0),s.groups?(l(),o("th",gt,"Группа")):r("",!0),m(t("th",null,null,512),[[S,s.user.role_id==1||s.user.role_id==2]])]),t("tr",yt,[Ct,wt,t("td",null,[m(t("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>u.filter.studFio=e),class:"form-control",placeholder:"Студент ФИО",onKeyup:n[1]||(n[1]=g((...e)=>i.search&&i.search(...e),["enter"]))},null,544),[[p,u.filter.studFio]])]),t("td",null,[m(t("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>u.filter.subj=e),class:"form-control",placeholder:"Предмет",onKeyup:n[3]||(n[3]=g((...e)=>i.search&&i.search(...e),["enter"]))},null,544),[[p,u.filter.subj]])]),s.user.role_id<3?(l(),o("td",Pt)):r("",!0),t("td",null,[m(t("input",{"onUpdate:modelValue":n[4]||(n[4]=e=>u.filter.prepodFio=e),class:"form-control",placeholder:"Преподаватель ФИО",onKeyup:n[5]||(n[5]=g((...e)=>i.search&&i.search(...e),["enter"]))},null,544),[[p,u.filter.prepodFio]])]),s.user.role_id<3?(l(),o("td",Bt,[m(t("input",{"onUpdate:modelValue":n[6]||(n[6]=e=>u.filter.phone=e),class:"form-control",placeholder:"Номер телефона",onKeyup:n[7]||(n[7]=g((...e)=>i.search&&i.search(...e),["enter"]))},null,544),[[p,u.filter.phone]])])):r("",!0),s.groups?(l(),o("td",xt)):r("",!0),jt])]),t("tbody",null,[(l(!0),o(v,null,P(s.orders.data,(e,c)=>(l(),o("tr",{class:"odd",key:"order"+e.id},[t("td",null,a(e.from?e.from+c:c+1),1),t("td",St,[t("div",{class:"avatar",style:E({backgroundImage:`url(/storage/files/${e.user.avatar})`})},null,4)]),t("td",null,a(e.user.fio),1),t("td",null,a(e.subject?e.subject.name:"Нет данных"),1),t("td",null,[t("div",Et,[t("div",Gt,[e.lastEduPaid.status==1?(l(),o("div",{key:0,class:"paid success",onClick:_=>i.setPaid(e.id,0)},"Оплачено",8,Tt)):e.lastEduPaid.status==2?(l(),o("div",{key:1,class:"paid danger",onClick:_=>i.setPaid(e.id,1)},"Не оплачено",8,Dt)):(l(),o("div",{key:2,class:"paid black",onClick:_=>i.setPaid(e.id,1)}," Просрочено ",8,Ft)),t("div",Lt,a(e.lastEduPaid.date),1)])])]),s.user.role_id<3?(l(),o("td",Vt,a(e.teacher.fio),1)):r("",!0),t("td",null,[t("div",At,[t("div",Kt,a(e.user.tel_num),1)])]),s.user.role_id<3?(l(),o("td",Ut,[t("div",Nt,[t("div",It,[e.lastEduPaid.status==1?(l(),o("div",Mt,a(e.price.toLocaleString()),1)):e.lastEduPaid.status==2?(l(),o("div",{key:1,class:"paid pd danger no-hover",onClick:_=>i.setPaid(e.id,1)},a(e.price.toLocaleString()),9,Ht)):(l(),o("div",{key:2,class:"paid pd black no-hover",onClick:_=>i.setPaid(e.id,1)},a(e.price.toLocaleString()),9,zt)),t("div",Ot,a(e.newPrice.toLocaleString()),1)])])])):r("",!0),s.groups?(l(),o(v,{key:2},[e.newGroup==0?(l(),o("td",Rt,[t("div",Wt,[qt,t("div",Jt,[t("div",{class:"pb-3 px-2 newgroup item",onClick:_=>e.newGroup=1},"Добавить группу",8,Qt),(l(!0),o(v,null,P(s.groups,(_,k)=>(l(),o("div",Xt,[m(t("input",{type:"checkbox",class:"form-check-input",id:"group_"+k+"_"+c,value:_.id,"onUpdate:modelValue":j=>e.group_ids=j,onChange:y(j=>i.setGroup(e.id,e.group_ids),["prevent"])},null,40,Yt),[[A,e.group_ids]]),t("label",{class:"form-check-label",for:"group_"+k+"_"+c},a(_.name),9,Zt)]))),256))])])])):(l(),o("td",$t,[m(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[8]||(n[8]=_=>u.newGroup=_),onKeyup:g(_=>i.setNewGroup(e.id),["enter"]),placeholder:"Введите имя группы"},null,40,te),[[p,u.newGroup]])]))],64)):r("",!0),m(t("td",null,[t("div",ee,[w(b,{href:d.route("admin.users.edit",e.user_id),class:"btn btn-primary",title:"Изменить"},{default:f(()=>[se]),_:2},1032,["href"]),t("button",{onClick:y(_=>i.deleteDataStudent(e.id),["prevent"]),class:"btn btn-danger",title:"Жою"},ne,8,le)])],512),[[S,s.user.role_id==1||s.user.role_id==2]])]))),128)),s.user.role_id<3?(l(),o("tr",de,[ie,ae,ce,ue,re,_e,he,t("td",null,[t("div",fe,[t("div",me,[t("div",ve,a(i.calculatePrice(1,0)),1),t("div",ke,a(i.calculatePrice(1,1)),1)])])]),be,pe])):r("",!0),s.user.role_id<3?(l(),o("tr",ge,[ye,Ce,we,Pe,Be,xe,je,t("td",null,[t("div",Se,[t("div",Ee,[t("div",Ge,a(i.calculatePrice(2,0)),1),t("div",Te,a(i.calculatePrice(2,1)),1)])])]),De,Fe])):r("",!0),s.user.role_id<3?(l(),o("tr",Le,[Ve,Ae,Ke,Ue,Ne,Ie,Me,t("td",null,[t("div",He,[t("div",ze,[t("div",Oe,a(i.calculateAllPrice(0)),1),t("div",Re,a(i.calculateAllPrice(1)),1)])])]),We,qe])):r("",!0)])])])]),w(G,{links:s.orders.links},null,8,["links"])])])]),s.groups?(l(),o("div",Je,[t("div",Qe,[t("div",Xe,[Ye,t("div",Ze,[t("div",$e,[(l(!0),o(v,null,P(s.groups,e=>(l(),o("div",{class:"module",key:"group"+e.id},[t("div",{class:"module-header","data-toggle":"collapse","data-target":"#moduleContent_"+e.id},[t("div",es,[t("div",ss,[t("h4",ls,a(e.name),1),t("div",{class:"btn-group btn-group-sm",onClick:n[9]||(n[9]=y(()=>{},["stop"]))},[t("button",{onClick:y(c=>i.deleteData(e.id,!0),["prevent"]),class:"btn btn-danger",title:"Жою"},ds,8,os)])]),is])],8,ts),t("div",{id:"moduleContent_"+e.id,class:"module-content collapse show"},[t("table",cs,[us,t("tbody",null,[(l(!0),o(v,null,P(s.orders.data,(c,_)=>(l(),o("tr",{class:"odd",key:"grouporder"+c.id},[c.group_ids.includes(e.id)?(l(),o(v,{key:0},[t("td",null,a(c.from?c.from+_:_+1),1),t("td",rs,[t("div",{class:"avatar",style:E({backgroundImage:`url(/storage/files/${c.user.avatar})`})},null,4)]),t("td",null,a(c.user.fio),1),t("td",null,a(c.subject?c.subject.name:"Нет данных"),1),t("td",null,[t("div",_s,[t("div",hs,[c.lastEduPaid.status==1?(l(),o("div",{key:0,class:"paid success",onClick:k=>i.setPaid(c.id,0)}," Оплачено",8,fs)):c.lastEduPaid.status==2?(l(),o("div",{key:1,class:"paid danger",onClick:k=>i.setPaid(c.id,1)},"Не оплачено",8,ms)):(l(),o("div",{key:2,class:"paid black",onClick:k=>i.setPaid(c.id,1)},"Просрочено ",8,vs)),t("div",ks,a(c.lastEduPaid.date),1)])])]),t("td",null,[t("div",bs,[ps,t("button",{onClick:y(k=>i.deleteDataAtGroup(c.id,e.id),["prevent"]),class:"btn btn-danger",title:"Жою"},Cs,8,gs)])])],64)):r("",!0)]))),128))])])],8,as)]))),128))])])])])])):r("",!0)]),_:1})],64)}const js=D(U,[["render",ws]]);export{js as default};