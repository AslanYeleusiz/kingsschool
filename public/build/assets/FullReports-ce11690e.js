import{A as j}from"./AdminLayout-4103f48c.js";import{L as w,H as x,a as p,o as c,c as i,d as v,w as f,F as r,e as t,t as s,j as b,h as g,n as L,i as C}from"./app-9ffddd28.js";import{P as S}from"./Pagination-53a04694.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const y={components:{AdminLayout:j,Link:w,Pagination:S,Head:x},props:["salaries","teacher"],data(){return{isTableExpanded:!0}},methods:{getReport(l,e){this.salaries[e].orders==null&&axios.get(route("admin.teachers.fullReportItem",{id:this.teacher.id,report_id:l})).then(n=>{this.salaries[e].orders=n.data.orders,setTimeout(()=>{this.isTableExpanded=!1},1e3)})},calculateAllPrice(l,e){return this.salaries[e].orders.reduce((h,u)=>h+(l?u.newPrice:u.price),0)},deleteData(l){Swal.fire({title:"Жоюға сенімдісіз бе?",text:"Қайтып қалпына келмеуі мүмкін!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Иә, жоямын!",cancelButtonText:"Жоқ"}).then(e=>{e.isConfirmed&&this.$inertia.delete(route("admin.teachers.destroy",l))})}}},T=t("head",null,[t("title",null,"Админ панель | Полный отчёт")],-1),N={class:"row mb-2"},R={class:"col-sm-6"},V={class:"m-0"},E={class:"col-sm-6"},F={class:"breadcrumb float-sm-right"},D={class:"breadcrumb-item"},H=["href"],I=t("i",{class:"fas fa-dashboard"},null,-1),P=g(" Басты бет "),z=[I,P],q=t("li",{class:"breadcrumb-item active"}," Полный отчёт ",-1),G={class:"container-fluid"},J={class:"card"},K={class:"card-body"},M={class:"row"},Q={class:"col-sm-12"},U={class:"table table-hover"},W={"data-widget":"expandable-table","aria-expanded":"false"},X={class:"d-flex justify-content-between"},Y=["onClick"],Z={class:"expandable-body"},$={class:"p-0",style:{}},O={key:0,class:"table table-hover table-bordered table-striped dataTable dtr-inline"},tt=t("thead",null,[t("tr",{role:"row"},[t("th",null,"№"),t("th"),t("th",null,"ФИО"),t("th",null,"Предмет"),t("th",{class:"t-c"},"Статус"),t("th",{class:"t-c"},"Цена"),t("th",{class:"t-c"},"Зарплата")]),t("tr",{class:"filters"},[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")])],-1),st={class:"d-f aj-c"},ot={class:"d-f j-c"},lt={class:"paidBlock"},et=t("div",{class:"paid success"},"Оплачено",-1),dt={class:"paid date"},nt={class:"d-f j-c"},ct={class:"paidBlock"},it={class:"paid success"},at={class:"paid date"},_t=t("td",null,[t("div",{class:"d-f j-c"},[t("span",{class:"badge badge-success"}," Выдано ")])],-1),rt=t("tr",null,[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")],-1),ut={class:"odd"},ht=t("td",null,null,-1),mt=t("td",null,null,-1),pt=t("td",null,null,-1),vt=t("td",null,null,-1),ft=t("td",{class:"t-r"},"Общее",-1),bt={class:"d-f j-c"},gt={class:"paidBlock"},kt={class:"paid pd success no-hover"},Bt={class:"paid date no-hover"},jt=t("td",null,null,-1),wt={class:"odd"},xt=t("td",null,null,-1),Lt=t("td",null,null,-1),Ct=t("td",null,null,-1),St=t("td",null,null,-1),At=t("td",{class:"t-r"},"Штраф",-1),yt={class:"d-f j-c"},Tt={class:"paidBlock px-4"},Nt=t("td",null,null,-1),Rt={class:"odd"},Vt=t("td",null,null,-1),Et=t("td",null,null,-1),Ft=t("td",null,null,-1),Dt=t("td",null,null,-1),Ht=t("td",{class:"t-r"},"Премия",-1),It={class:"d-f j-c"},Pt={class:"paidBlock px-4"},zt=t("td",null,null,-1),qt={class:"odd"},Gt=t("td",null,null,-1),Jt=t("td",null,null,-1),Kt=t("td",null,null,-1),Mt=t("td",null,null,-1),Qt=t("td",{class:"t-r"},"Итог",-1),Ut={class:"d-f j-c"},Wt={class:"paidBlock"},Xt={class:"paid pd success no-hover"},Yt={class:"paid date no-hover"},Zt=t("td",null,null,-1);function $t(l,e,n,h,u,a){const k=p("Pagination"),B=p("AdminLayout");return c(),i(r,null,[T,v(B,null,{breadcrumbs:f(()=>[t("div",N,[t("div",R,[t("h1",V,"Полный отчёт "+s(n.teacher.fio),1)]),t("div",E,[t("ol",F,[t("li",D,[t("a",{href:l.route("admin.index")},z,8,H)]),q])])])]),default:f(()=>[t("div",G,[t("div",J,[t("div",K,[t("div",M,[t("div",Q,[t("table",U,[t("tbody",null,[(c(!0),i(r,null,b(n.salaries,(d,_)=>(c(),i(r,null,[t("tr",W,[t("td",null,[t("div",X,[g(s(d.date)+" ",1),t("button",{onClick:o=>a.getReport(d.id,_),class:"btn btn-primary"}," Показать ",8,Y)])])]),t("tr",Z,[t("td",null,[t("div",$,[d.orders?(c(),i("table",O,[tt,t("tbody",null,[(c(!0),i(r,null,b(d.orders,(o,m)=>(c(),i("tr",{class:"odd",key:"eduPaidOrder"+o.id},[t("td",null,s(o.from?o.from+m:m+1),1),t("td",st,[t("div",{class:"avatar",style:L({backgroundImage:`url(/storage/files/${o.edu_order.user.avatar})`})},null,4)]),t("td",null,s(o.edu_order.user.fio),1),t("td",null,s(o.edu_order.subject?o.edu_order.subject.name:"Нет данных"),1),t("td",null,[t("div",ot,[t("div",lt,[et,t("div",dt,s(o.date),1)])])]),t("td",null,[t("div",nt,[t("div",ct,[t("div",it,s(o.price.toLocaleString()),1),t("div",at,s(o.newPrice.toLocaleString()),1)])])]),_t]))),128)),rt,t("tr",ut,[ht,mt,pt,vt,ft,t("td",null,[t("div",bt,[t("div",gt,[t("div",kt,s(a.calculateAllPrice(0,_).toLocaleString()),1),t("div",Bt,s(a.calculateAllPrice(1,_).toLocaleString()),1)])])]),jt]),t("tr",wt,[xt,Lt,Ct,St,At,t("td",null,[t("div",yt,[t("div",Tt,s(d.penalty),1)])]),Nt]),t("tr",Rt,[Vt,Et,Ft,Dt,Ht,t("td",null,[t("div",It,[t("div",Pt,s(d.bonus),1)])]),zt]),t("tr",qt,[Gt,Jt,Kt,Mt,Qt,t("td",null,[t("div",Ut,[t("div",Wt,[t("div",Xt,s(a.calculateAllPrice(0,_).toLocaleString()),1),t("div",Yt,s(d.price.toLocaleString()),1)])])]),Zt])])])):C("",!0)])])])],64))),256))])])])]),v(k,{links:n.salaries.links},null,8,["links"])])])])]),_:1})],64)}const ls=A(y,[["render",$t]]);export{ls as default};
