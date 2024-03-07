import{_ as w,A as x}from"./AdminLayout-e8e41296.js";import{L,H as j,r as p,o as c,e as i,b as v,w as b,F as r,a as t,t as s,i as f,d as g,n as C,h as S}from"./app-b12180b4.js";import{P as A}from"./Pagination-e22e1c16.js";const y={components:{AdminLayout:x,Link:L,Pagination:A,Head:j},props:["salaries","teacher"],data(){return{isTableExpanded:!0}},methods:{getReport(o,e){this.salaries[e].orders==null&&axios.get(route("admin.teachers.fullReportItem",{id:this.teacher.id,report_id:o})).then(n=>{this.salaries[e].orders=n.data.orders,setTimeout(()=>{this.isTableExpanded=!1},1e3)})},calculateAllPrice(o,e){return this.salaries[e].orders.reduce((h,u)=>h+(o?u.newPrice:u.price),0)},deleteData(o){Swal.fire({title:"Жоюға сенімдісіз бе?",text:"Қайтып қалпына келмеуі мүмкін!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Иә, жоямын!",cancelButtonText:"Жоқ"}).then(e=>{e.isConfirmed&&this.$inertia.delete(route("admin.teachers.destroy",o))})}}},T=t("head",null,[t("title",null,"Админ панель | Полный отчёт")],-1),N={class:"row mb-2"},R={class:"col-sm-6"},V={class:"m-0"},E={class:"col-sm-6"},F={class:"breadcrumb float-sm-right"},D={class:"breadcrumb-item"},H=["href"],I=t("i",{class:"fas fa-dashboard"},null,-1),P=g(" Басты бет "),z=[I,P],q=t("li",{class:"breadcrumb-item active"}," Полный отчёт ",-1),G={class:"container-fluid"},J={class:"card"},K={class:"card-body"},M={class:"row"},Q={class:"col-sm-12"},U={class:"table table-hover"},W={"data-widget":"expandable-table","aria-expanded":"false"},X={class:"d-flex justify-content-between"},Y=["onClick"],Z={class:"expandable-body"},$={class:"p-0",style:{}},O={key:0,class:"table table-hover table-bordered table-striped dataTable dtr-inline"},tt=t("thead",null,[t("tr",{role:"row"},[t("th",null,"№"),t("th"),t("th",null,"ФИО"),t("th",null,"Предмет"),t("th",{class:"t-c"},"Статус"),t("th",{class:"t-c"},"Цена"),t("th",{class:"t-c"},"Зарплата")]),t("tr",{class:"filters"},[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")])],-1),st={class:"d-f aj-c"},lt={class:"d-f j-c"},ot={class:"paidBlock"},et=t("div",{class:"paid success"},"Оплачено",-1),dt={class:"paid date"},nt={class:"d-f j-c"},ct={class:"paidBlock"},it={class:"paid success"},at={class:"paid date"},_t=t("td",null,[t("div",{class:"d-f j-c"},[t("span",{class:"badge badge-success"}," Выдано ")])],-1),rt=t("tr",null,[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")],-1),ut={class:"odd"},ht=t("td",null,null,-1),mt=t("td",null,null,-1),pt=t("td",null,null,-1),vt=t("td",null,null,-1),bt=t("td",{class:"t-r"},"Общее",-1),ft={class:"d-f j-c"},gt={class:"paidBlock"},kt={class:"paid pd success no-hover"},Bt={class:"paid date no-hover"},wt=t("td",null,null,-1),xt={class:"odd"},Lt=t("td",null,null,-1),jt=t("td",null,null,-1),Ct=t("td",null,null,-1),St=t("td",null,null,-1),At=t("td",{class:"t-r"},"Штраф",-1),yt={class:"d-f j-c"},Tt={class:"paidBlock px-4"},Nt=t("td",null,null,-1),Rt={class:"odd"},Vt=t("td",null,null,-1),Et=t("td",null,null,-1),Ft=t("td",null,null,-1),Dt=t("td",null,null,-1),Ht=t("td",{class:"t-r"},"Премия",-1),It={class:"d-f j-c"},Pt={class:"paidBlock px-4"},zt=t("td",null,null,-1),qt={class:"odd"},Gt=t("td",null,null,-1),Jt=t("td",null,null,-1),Kt=t("td",null,null,-1),Mt=t("td",null,null,-1),Qt=t("td",{class:"t-r"},"Итог",-1),Ut={class:"d-f j-c"},Wt={class:"paidBlock"},Xt={class:"paid pd success no-hover"},Yt={class:"paid date no-hover"},Zt=t("td",null,null,-1);function $t(o,e,n,h,u,a){const k=p("Pagination"),B=p("AdminLayout");return c(),i(r,null,[T,v(B,null,{breadcrumbs:b(()=>[t("div",N,[t("div",R,[t("h1",V,"Полный отчёт "+s(n.teacher.fio),1)]),t("div",E,[t("ol",F,[t("li",D,[t("a",{href:o.route("admin.index")},z,8,H)]),q])])])]),default:b(()=>[t("div",G,[t("div",J,[t("div",K,[t("div",M,[t("div",Q,[t("table",U,[t("tbody",null,[(c(!0),i(r,null,f(n.salaries,(d,_)=>(c(),i(r,null,[t("tr",W,[t("td",null,[t("div",X,[g(s(d.date)+" ",1),t("button",{onClick:l=>a.getReport(d.id,_),class:"btn btn-primary"}," Показать ",8,Y)])])]),t("tr",Z,[t("td",null,[t("div",$,[d.orders?(c(),i("table",O,[tt,t("tbody",null,[(c(!0),i(r,null,f(d.orders,(l,m)=>(c(),i("tr",{class:"odd",key:"eduPaidOrder"+l.id},[t("td",null,s(l.from?l.from+m:m+1),1),t("td",st,[t("div",{class:"avatar",style:C({backgroundImage:`url(/storage/files/${l.edu_order.user.avatar})`})},null,4)]),t("td",null,s(l.edu_order.user.fio),1),t("td",null,s(l.edu_order.subject?l.edu_order.subject.name:"Нет данных"),1),t("td",null,[t("div",lt,[t("div",ot,[et,t("div",dt,s(l.date),1)])])]),t("td",null,[t("div",nt,[t("div",ct,[t("div",it,s(l.price.toLocaleString()),1),t("div",at,s(l.newPrice.toLocaleString()),1)])])]),_t]))),128)),rt,t("tr",ut,[ht,mt,pt,vt,bt,t("td",null,[t("div",ft,[t("div",gt,[t("div",kt,s(a.calculateAllPrice(0,_).toLocaleString()),1),t("div",Bt,s(a.calculateAllPrice(1,_).toLocaleString()),1)])])]),wt]),t("tr",xt,[Lt,jt,Ct,St,At,t("td",null,[t("div",yt,[t("div",Tt,s(d.penalty),1)])]),Nt]),t("tr",Rt,[Vt,Et,Ft,Dt,Ht,t("td",null,[t("div",It,[t("div",Pt,s(d.bonus),1)])]),zt]),t("tr",qt,[Gt,Jt,Kt,Mt,Qt,t("td",null,[t("div",Ut,[t("div",Wt,[t("div",Xt,s(a.calculateAllPrice(0,_).toLocaleString()),1),t("div",Yt,s(d.price.toLocaleString()),1)])])]),Zt])])])):S("",!0)])])])],64))),256))])])])]),v(k,{links:n.salaries.links},null,8,["links"])])])])]),_:1})],64)}const ls=w(y,[["render",$t]]);export{ls as default};
