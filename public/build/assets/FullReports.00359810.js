import{_ as w,A as x}from"./AdminLayout.4c8d68b7.js";import{L,H as j,r as p,o as c,a as i,e as v,w as f,F as r,b as t,t as s,f as b,d as g,m as C,g as S}from"./app.205b37dc.js";import{P as A}from"./Pagination.ed6170d5.js";const y={components:{AdminLayout:x,Link:L,Pagination:A,Head:j},props:["salaries","teacher"],data(){return{isTableExpanded:!0}},methods:{getReport(o,e){this.salaries[e].orders==null&&axios.get(route("admin.teachers.fullReportItem",{id:this.teacher.id,report_id:o})).then(n=>{this.salaries[e].orders=n.data.orders,setTimeout(()=>{this.isTableExpanded=!1},1e3)})},calculateAllPrice(o,e){return this.salaries[e].orders.reduce((h,u)=>h+(o?u.newPrice:u.price),0)},deleteData(o){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(e=>{e.isConfirmed&&this.$inertia.delete(route("admin.teachers.destroy",o))})}}},T=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041F\u043E\u043B\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442")],-1),N={class:"row mb-2"},R={class:"col-sm-6"},V={class:"m-0"},E={class:"col-sm-6"},F={class:"breadcrumb float-sm-right"},D={class:"breadcrumb-item"},H=["href"],I=t("i",{class:"fas fa-dashboard"},null,-1),P=g(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),z=[I,P],q=t("li",{class:"breadcrumb-item active"}," \u041F\u043E\u043B\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442 ",-1),G={class:"container-fluid"},J={class:"card"},K={class:"card-body"},M={class:"row"},Q={class:"col-sm-12"},U={class:"table table-hover"},W={"data-widget":"expandable-table","aria-expanded":"false"},X={class:"d-flex justify-content-between"},Y=["onClick"],Z={class:"expandable-body"},$={class:"p-0",style:{}},O={key:0,class:"table table-hover table-bordered table-striped dataTable dtr-inline"},tt=t("thead",null,[t("tr",{role:"row"},[t("th",null,"\u2116"),t("th"),t("th",null,"\u0424\u0418\u041E"),t("th",null,"\u041F\u0440\u0435\u0434\u043C\u0435\u0442"),t("th",{class:"t-c"},"\u0421\u0442\u0430\u0442\u0443\u0441"),t("th",{class:"t-c"},"\u0426\u0435\u043D\u0430"),t("th",{class:"t-c"},"\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430")]),t("tr",{class:"filters"},[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")])],-1),st={class:"d-f aj-c"},lt={class:"d-f j-c"},ot={class:"paidBlock"},et=t("div",{class:"paid success"},"\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E",-1),dt={class:"paid date"},nt={class:"d-f j-c"},ct={class:"paidBlock"},it={class:"paid success"},at={class:"paid date"},_t=t("td",null,[t("div",{class:"d-f j-c"},[t("span",{class:"badge badge-success"}," \u0412\u044B\u0434\u0430\u043D\u043E ")])],-1),rt=t("tr",null,[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")],-1),ut={class:"odd"},ht=t("td",null,null,-1),mt=t("td",null,null,-1),pt=t("td",null,null,-1),vt=t("td",null,null,-1),ft=t("td",{class:"t-r"},"\u041E\u0431\u0449\u0435\u0435",-1),bt={class:"d-f j-c"},gt={class:"paidBlock"},kt={class:"paid pd success no-hover"},Bt={class:"paid date no-hover"},wt=t("td",null,null,-1),xt={class:"odd"},Lt=t("td",null,null,-1),jt=t("td",null,null,-1),Ct=t("td",null,null,-1),St=t("td",null,null,-1),At=t("td",{class:"t-r"},"\u0428\u0442\u0440\u0430\u0444",-1),yt={class:"d-f j-c"},Tt={class:"paidBlock px-4"},Nt=t("td",null,null,-1),Rt={class:"odd"},Vt=t("td",null,null,-1),Et=t("td",null,null,-1),Ft=t("td",null,null,-1),Dt=t("td",null,null,-1),Ht=t("td",{class:"t-r"},"\u041F\u0440\u0435\u043C\u0438\u044F",-1),It={class:"d-f j-c"},Pt={class:"paidBlock px-4"},zt=t("td",null,null,-1),qt={class:"odd"},Gt=t("td",null,null,-1),Jt=t("td",null,null,-1),Kt=t("td",null,null,-1),Mt=t("td",null,null,-1),Qt=t("td",{class:"t-r"},"\u0418\u0442\u043E\u0433",-1),Ut={class:"d-f j-c"},Wt={class:"paidBlock"},Xt={class:"paid pd success no-hover"},Yt={class:"paid date no-hover"},Zt=t("td",null,null,-1);function $t(o,e,n,h,u,a){const k=p("Pagination"),B=p("AdminLayout");return c(),i(r,null,[T,v(B,null,{breadcrumbs:f(()=>[t("div",N,[t("div",R,[t("h1",V,"\u041F\u043E\u043B\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442 "+s(n.teacher.fio),1)]),t("div",E,[t("ol",F,[t("li",D,[t("a",{href:o.route("admin.index")},z,8,H)]),q])])])]),default:f(()=>[t("div",G,[t("div",J,[t("div",K,[t("div",M,[t("div",Q,[t("table",U,[t("tbody",null,[(c(!0),i(r,null,b(n.salaries,(d,_)=>(c(),i(r,null,[t("tr",W,[t("td",null,[t("div",X,[g(s(d.date)+" ",1),t("button",{onClick:l=>a.getReport(d.id,_),class:"btn btn-primary"}," \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C ",8,Y)])])]),t("tr",Z,[t("td",null,[t("div",$,[d.orders?(c(),i("table",O,[tt,t("tbody",null,[(c(!0),i(r,null,b(d.orders,(l,m)=>(c(),i("tr",{class:"odd",key:"eduPaidOrder"+l.id},[t("td",null,s(l.from?l.from+m:m+1),1),t("td",st,[t("div",{class:"avatar",style:C({backgroundImage:`url(/storage/files/${l.edu_order.user.avatar})`})},null,4)]),t("td",null,s(l.edu_order.user.fio),1),t("td",null,s(l.edu_order.subject?l.edu_order.subject.name:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"),1),t("td",null,[t("div",lt,[t("div",ot,[et,t("div",dt,s(l.date),1)])])]),t("td",null,[t("div",nt,[t("div",ct,[t("div",it,s(l.price.toLocaleString()),1),t("div",at,s(l.newPrice.toLocaleString()),1)])])]),_t]))),128)),rt,t("tr",ut,[ht,mt,pt,vt,ft,t("td",null,[t("div",bt,[t("div",gt,[t("div",kt,s(a.calculateAllPrice(0,_).toLocaleString()),1),t("div",Bt,s(a.calculateAllPrice(1,_).toLocaleString()),1)])])]),wt]),t("tr",xt,[Lt,jt,Ct,St,At,t("td",null,[t("div",yt,[t("div",Tt,s(d.penalty),1)])]),Nt]),t("tr",Rt,[Vt,Et,Ft,Dt,Ht,t("td",null,[t("div",It,[t("div",Pt,s(d.bonus),1)])]),zt]),t("tr",qt,[Gt,Jt,Kt,Mt,Qt,t("td",null,[t("div",Ut,[t("div",Wt,[t("div",Xt,s(a.calculateAllPrice(0,_).toLocaleString()),1),t("div",Yt,s(d.price.toLocaleString()),1)])])]),Zt])])])):S("",!0)])])])],64))),256))])])])]),v(k,{links:n.salaries.links},null,8,["links"])])])])]),_:1})],64)}const ls=w(y,[["render",$t]]);export{ls as default};