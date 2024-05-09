import{_ as S,A as x}from"./AdminLayout-a3b7c70b.js";import{L as A,H as C,r as f,o as n,e as c,b as g,w as k,F as u,a as t,t as s,i as L,d as j,n as y,h as T}from"./app-d2a1545d.js";import{P as N}from"./Pagination-9a7fdb59.js";const R={components:{AdminLayout:x,Link:A,Pagination:N,Head:C},props:["salaries","teacher"],data(){return{isTableExpanded:!0}},methods:{getReport(e,i){this.salaries[i].orders==null&&axios.get(route("admin.teachers.fullReportItem",{id:this.teacher.id,report_id:e})).then(d=>{this.salaries[i].orders=d.data.orders,setTimeout(()=>{this.isTableExpanded=!1},1e3)})},calculateAllPrice(e,i){return this.salaries[i].orders.reduce((r,h)=>r+(e?h.newPrice:h.price),0)}}},V=t("head",null,[t("title",null,"Админ панель | Полный отчёт")],-1),E={class:"row mb-2"},F={class:"col-sm-6"},H={class:"m-0"},I={class:"col-sm-6"},z={class:"breadcrumb float-sm-right"},D={class:"breadcrumb-item"},$=["href"],q=t("i",{class:"fas fa-dashboard"},null,-1),G=j(" Главная страница "),J=[q,G],K=t("li",{class:"breadcrumb-item active"}," Полный отчёт ",-1),M={class:"container-fluid"},Q={class:"card"},U={class:"card-body"},W={class:"row"},X={class:"col-sm-12"},Y={class:"table table-hover"},Z={"data-widget":"expandable-table","aria-expanded":"false"},P={class:"d-flex justify-content-between"},O=["onClick"],tt={class:"expandable-body"},st={class:"p-0",style:{}},lt={key:0,class:"table table-hover table-bordered table-striped dataTable dtr-inline"},ot=t("thead",null,[t("tr",{role:"row"},[t("th",null,"№"),t("th"),t("th",null,"ФИО"),t("th",null,"Предмет"),t("th",{class:"t-c"},"Статус"),t("th",{class:"t-c"},"Общ. кол-во занятий (часов)"),t("th",{class:"t-c"},"Кол-во оств. занятий (часов)"),t("th",{class:"t-c"},"Кол-во пройденных занятий (часов)"),t("th",{class:"t-c"},"Оплата"),t("th",{class:"t-c"},"Зарплата")]),t("tr",{class:"filters"},[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")])],-1),et={class:"d-f aj-c"},dt=["onClick"],nt={class:"d-f j-c"},ct={class:"paidBlock"},it={class:"paid success d-f aj-c"},_t={class:"paid date"},at={class:"d-f j-c"},ut={class:"paidBlock"},ht={class:"paid success"},rt={class:"paid date"},pt=t("td",null,[t("div",{class:"d-f j-c"},[t("span",{class:"badge badge-success"}," Выдано ")])],-1),mt=t("tr",null,[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")],-1),vt={class:"odd"},bt=t("td",null,null,-1),ft=t("td",null,null,-1),gt=t("td",null,null,-1),kt=t("td",null,null,-1),Lt=t("td",null,null,-1),jt=t("td",null,null,-1),wt=t("td",null,null,-1),Bt=t("td",{class:"t-r"},"Общее",-1),St={class:"d-f j-c"},xt={class:"paidBlock"},At={class:"paid pd success no-hover"},Ct={class:"paid date no-hover"},yt=t("td",null,null,-1),Tt={class:"odd"},Nt=t("td",null,null,-1),Rt=t("td",null,null,-1),Vt=t("td",null,null,-1),Et=t("td",null,null,-1),Ft=t("td",null,null,-1),Ht=t("td",null,null,-1),It=t("td",null,null,-1),zt=t("td",{class:"t-r"},"Штраф",-1),Dt={class:"d-f j-c"},$t={class:"paidBlock px-4"},qt=t("td",null,null,-1),Gt={class:"odd"},Jt=t("td",null,null,-1),Kt=t("td",null,null,-1),Mt=t("td",null,null,-1),Qt=t("td",null,null,-1),Ut=t("td",null,null,-1),Wt=t("td",null,null,-1),Xt=t("td",null,null,-1),Yt=t("td",{class:"t-r"},"Премия",-1),Zt={class:"d-f j-c"},Pt={class:"paidBlock px-4"},Ot=t("td",null,null,-1),ts={class:"odd"},ss=t("td",null,null,-1),ls=t("td",null,null,-1),os=t("td",null,null,-1),es=t("td",null,null,-1),ds=t("td",null,null,-1),ns=t("td",null,null,-1),cs=t("td",null,null,-1),is=t("td",{class:"t-r"},"Итог",-1),_s={class:"d-f j-c"},as={class:"paidBlock"},us={class:"paid pd success no-hover"},hs={class:"paid date no-hover"},rs=t("td",null,null,-1);function ps(e,i,d,r,h,_){const w=f("Pagination"),B=f("AdminLayout");return n(),c(u,null,[V,g(B,null,{breadcrumbs:k(()=>[t("div",E,[t("div",F,[t("h1",H,"Полный отчёт "+s(d.teacher.fio),1)]),t("div",I,[t("ol",z,[t("li",D,[t("a",{href:e.route("admin.index")},J,8,$)]),K])])])]),default:k(()=>[t("div",M,[t("div",Q,[t("div",U,[t("div",W,[t("div",X,[t("table",Y,[t("tbody",null,[(n(!0),c(u,null,L(d.salaries,(o,a)=>(n(),c(u,null,[t("tr",Z,[t("td",null,[t("div",P,[j(s(o.date)+" ",1),t("button",{onClick:l=>_.getReport(o.id,a),class:"btn btn-primary"}," Показать ",8,O)])])]),t("tr",tt,[t("td",null,[t("div",st,[o.orders?(n(),c("table",lt,[ot,t("tbody",null,[(n(!0),c(u,null,L(o.orders,(l,p)=>{var m,v;return n(),c("tr",{class:"odd",key:"eduPaidOrder"+l.id},[t("td",null,s(l.from?l.from+p:p+1),1),t("td",et,[t("div",{class:"avatar",style:y({backgroundImage:`url(/storage/files/${(m=l.edu_order.user)==null?void 0:m.avatar})`}),onClick:ms=>{var b;return e.$page.props.flash.image=(b=l.edu_order.user)==null?void 0:b.avatar}},null,12,dt)]),t("td",null,s((v=l.edu_order.user)==null?void 0:v.fio),1),t("td",null,s(l.edu_order.subject?l.edu_order.subject.name:"Нет данных"),1),t("td",null,[t("div",nt,[t("div",ct,[t("div",it,s(l.edu_order.price.toLocaleString()),1),t("div",_t,"до "+s(l.date),1)])])]),t("td",null,s(l.edu_order.hours),1),t("td",null,s(l.remain_hours),1),t("td",null,s(l.completed_hours),1),t("td",null,[t("div",at,[t("div",ut,[t("div",ht,s(l.price.toLocaleString()),1),t("div",rt,s(l.newPrice.toLocaleString()),1)])])]),pt])}),128)),mt,t("tr",vt,[bt,ft,gt,kt,Lt,jt,wt,Bt,t("td",null,[t("div",St,[t("div",xt,[t("div",At,s(_.calculateAllPrice(0,a).toLocaleString()),1),t("div",Ct,s(_.calculateAllPrice(1,a).toLocaleString()),1)])])]),yt]),t("tr",Tt,[Nt,Rt,Vt,Et,Ft,Ht,It,zt,t("td",null,[t("div",Dt,[t("div",$t,s(o.penalty),1)])]),qt]),t("tr",Gt,[Jt,Kt,Mt,Qt,Ut,Wt,Xt,Yt,t("td",null,[t("div",Zt,[t("div",Pt,s(o.bonus),1)])]),Ot]),t("tr",ts,[ss,ls,os,es,ds,ns,cs,is,t("td",null,[t("div",_s,[t("div",as,[t("div",us,s(_.calculateAllPrice(0,a).toLocaleString()),1),t("div",hs,s(o.price.toLocaleString()),1)])])]),rs])])])):T("",!0)])])])],64))),256))])])])]),g(w,{links:d.salaries.links},null,8,["links"])])])])]),_:1})],64)}const gs=S(R,[["render",ps]]);export{gs as default};