import{_ as x,A as C}from"./AdminLayout.ecc42e71.js";import{L as S,H as A,r as b,o as c,a as i,e as g,w as k,F as u,b as t,t as s,f as B,d as L,h as y,g as T}from"./app.54586061.js";import{P as N}from"./Pagination.335942dc.js";const R={components:{AdminLayout:C,Link:S,Pagination:N,Head:A},props:["salaries","teacher"],data(){return{isTableExpanded:!0}},methods:{getReport(o,e){this.salaries[e].orders==null&&axios.get(route("admin.teachers.fullReportItem",{id:this.teacher.id,report_id:o})).then(d=>{this.salaries[e].orders=d.data.orders,setTimeout(()=>{this.isTableExpanded=!1},1e3)})},calculateAllPrice(o,e){return this.salaries[e].orders.reduce((h,r)=>h+(o?r.newPrice:r.price),0)},deleteData(o){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(e=>{e.isConfirmed&&this.$inertia.delete(route("admin.teachers.destroy",o))})}}},V=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041F\u043E\u043B\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442")],-1),E={class:"row mb-2"},F={class:"col-sm-6"},D={class:"m-0"},H={class:"col-sm-6"},I={class:"breadcrumb float-sm-right"},$={class:"breadcrumb-item"},z=["href"],q=t("i",{class:"fas fa-dashboard"},null,-1),G=L(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),J=[q,G],K=t("li",{class:"breadcrumb-item active"}," \u041F\u043E\u043B\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442 ",-1),M={class:"container-fluid"},Q={class:"card"},U={class:"card-body"},W={class:"row"},X={class:"col-sm-12"},Y={class:"table table-hover"},Z={"data-widget":"expandable-table","aria-expanded":"false"},P={class:"d-flex justify-content-between"},O=["onClick"],tt={class:"expandable-body"},st={class:"p-0",style:{}},lt={key:0,class:"table table-hover table-bordered table-striped dataTable dtr-inline"},ot=t("thead",null,[t("tr",{role:"row"},[t("th",null,"\u2116"),t("th"),t("th",null,"\u0424\u0418\u041E"),t("th",null,"\u041F\u0440\u0435\u0434\u043C\u0435\u0442"),t("th",{class:"t-c"},"\u0421\u0442\u0430\u0442\u0443\u0441"),t("th",{class:"t-c"},"\u041E\u0431\u0449. \u043A\u043E\u043B-\u0432\u043E \u0437\u0430\u043D\u044F\u0442\u0438\u0439 (\u0447\u0430\u0441\u043E\u0432)"),t("th",{class:"t-c"},"\u041A\u043E\u043B-\u0432\u043E \u043E\u0441\u0442\u0432. \u0437\u0430\u043D\u044F\u0442\u0438\u0439 (\u0447\u0430\u0441\u043E\u0432)"),t("th",{class:"t-c"},"\u041A\u043E\u043B-\u0432\u043E \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u043D\u044F\u0442\u0438\u0439 (\u0447\u0430\u0441\u043E\u0432)"),t("th",{class:"t-c"},"\u041E\u043F\u043B\u0430\u0442\u0430"),t("th",{class:"t-c"},"\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430")]),t("tr",{class:"filters"},[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")])],-1),et={class:"d-f aj-c"},nt=["onClick"],dt={class:"d-f j-c"},ct={class:"paidBlock"},it={class:"paid success d-f aj-c"},at={class:"paid date"},_t={class:"d-f j-c"},ut={class:"paidBlock"},rt={class:"paid success"},ht={class:"paid date"},mt=t("td",null,[t("div",{class:"d-f j-c"},[t("span",{class:"badge badge-success"}," \u0412\u044B\u0434\u0430\u043D\u043E ")])],-1),pt=t("tr",null,[t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td"),t("td")],-1),vt={class:"odd"},ft=t("td",null,null,-1),bt=t("td",null,null,-1),gt=t("td",null,null,-1),kt=t("td",null,null,-1),Bt=t("td",null,null,-1),Lt=t("td",null,null,-1),jt=t("td",null,null,-1),wt=t("td",{class:"t-r"},"\u041E\u0431\u0449\u0435\u0435",-1),xt={class:"d-f j-c"},Ct={class:"paidBlock"},St={class:"paid pd success no-hover"},At={class:"paid date no-hover"},yt=t("td",null,null,-1),Tt={class:"odd"},Nt=t("td",null,null,-1),Rt=t("td",null,null,-1),Vt=t("td",null,null,-1),Et=t("td",null,null,-1),Ft=t("td",null,null,-1),Dt=t("td",null,null,-1),Ht=t("td",null,null,-1),It=t("td",{class:"t-r"},"\u0428\u0442\u0440\u0430\u0444",-1),$t={class:"d-f j-c"},zt={class:"paidBlock px-4"},qt=t("td",null,null,-1),Gt={class:"odd"},Jt=t("td",null,null,-1),Kt=t("td",null,null,-1),Mt=t("td",null,null,-1),Qt=t("td",null,null,-1),Ut=t("td",null,null,-1),Wt=t("td",null,null,-1),Xt=t("td",null,null,-1),Yt=t("td",{class:"t-r"},"\u041F\u0440\u0435\u043C\u0438\u044F",-1),Zt={class:"d-f j-c"},Pt={class:"paidBlock px-4"},Ot=t("td",null,null,-1),ts={class:"odd"},ss=t("td",null,null,-1),ls=t("td",null,null,-1),os=t("td",null,null,-1),es=t("td",null,null,-1),ns=t("td",null,null,-1),ds=t("td",null,null,-1),cs=t("td",null,null,-1),is=t("td",{class:"t-r"},"\u0418\u0442\u043E\u0433",-1),as={class:"d-f j-c"},_s={class:"paidBlock"},us={class:"paid pd success no-hover"},rs={class:"paid date no-hover"},hs=t("td",null,null,-1);function ms(o,e,d,h,r,a){const j=b("Pagination"),w=b("AdminLayout");return c(),i(u,null,[V,g(w,null,{breadcrumbs:k(()=>[t("div",E,[t("div",F,[t("h1",D,"\u041F\u043E\u043B\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442 "+s(d.teacher.fio),1)]),t("div",H,[t("ol",I,[t("li",$,[t("a",{href:o.route("admin.index")},J,8,z)]),K])])])]),default:k(()=>[t("div",M,[t("div",Q,[t("div",U,[t("div",W,[t("div",X,[t("table",Y,[t("tbody",null,[(c(!0),i(u,null,B(d.salaries,(n,_)=>(c(),i(u,null,[t("tr",Z,[t("td",null,[t("div",P,[L(s(n.date)+" ",1),t("button",{onClick:l=>a.getReport(n.id,_),class:"btn btn-primary"}," \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C ",8,O)])])]),t("tr",tt,[t("td",null,[t("div",st,[n.orders?(c(),i("table",lt,[ot,t("tbody",null,[(c(!0),i(u,null,B(n.orders,(l,m)=>{var p,v;return c(),i("tr",{class:"odd",key:"eduPaidOrder"+l.id},[t("td",null,s(l.from?l.from+m:m+1),1),t("td",et,[t("div",{class:"avatar",style:y({backgroundImage:`url(/storage/files/${(p=l.edu_order.user)==null?void 0:p.avatar})`}),onClick:ps=>{var f;return o.$page.props.flash.image=(f=l.edu_order.user)==null?void 0:f.avatar}},null,12,nt)]),t("td",null,s((v=l.edu_order.user)==null?void 0:v.fio),1),t("td",null,s(l.edu_order.subject?l.edu_order.subject.name:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"),1),t("td",null,[t("div",dt,[t("div",ct,[t("div",it,s(l.edu_order.price.toLocaleString()),1),t("div",at,"\u0434\u043E "+s(l.date),1)])])]),t("td",null,s(l.edu_order.hours),1),t("td",null,s(l.remain_hours),1),t("td",null,s(l.completed_hours),1),t("td",null,[t("div",_t,[t("div",ut,[t("div",rt,s(l.price.toLocaleString()),1),t("div",ht,s(l.newPrice.toLocaleString()),1)])])]),mt])}),128)),pt,t("tr",vt,[ft,bt,gt,kt,Bt,Lt,jt,wt,t("td",null,[t("div",xt,[t("div",Ct,[t("div",St,s(a.calculateAllPrice(0,_).toLocaleString()),1),t("div",At,s(a.calculateAllPrice(1,_).toLocaleString()),1)])])]),yt]),t("tr",Tt,[Nt,Rt,Vt,Et,Ft,Dt,Ht,It,t("td",null,[t("div",$t,[t("div",zt,s(n.penalty),1)])]),qt]),t("tr",Gt,[Jt,Kt,Mt,Qt,Ut,Wt,Xt,Yt,t("td",null,[t("div",Zt,[t("div",Pt,s(n.bonus),1)])]),Ot]),t("tr",ts,[ss,ls,os,es,ns,ds,cs,is,t("td",null,[t("div",as,[t("div",_s,[t("div",us,s(a.calculateAllPrice(0,_).toLocaleString()),1),t("div",rs,s(n.price.toLocaleString()),1)])])]),hs])])])):T("",!0)])])])],64))),256))])])])]),g(j,{links:d.salaries.links},null,8,["links"])])])])]),_:1})],64)}const gs=x(R,[["render",ms]]);export{gs as default};