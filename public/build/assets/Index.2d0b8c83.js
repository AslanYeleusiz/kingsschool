import{_ as w,A as B}from"./AdminLayout.2dd53075.js";import{L as C,H as x,r as f,o as l,a as i,e as a,w as n,F as m,b as t,g as v,q as p,v as L,u as P,s as T,m as V,f as g,d as r,t as _,h as S}from"./app.f66fbad4.js";import{P as A}from"./Pagination.4dcb4cb4.js";const E={components:{AdminLayout:B,Link:C,Pagination:A,Head:x},props:["teachers","filials","user"],data(){return{filter:{fio:route().params.fio?route().params.fio:null,filial_id:route().params.filial_id?route().params.filial_id:null},loading:0}},methods:{deleteData(e){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(o=>{o.isConfirmed&&this.$inertia.delete(route("admin.teachers.destroy",e))})},dublicate(e){Swal.fire({title:"\u0414\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u049B\u0430 \u0436\u0430\u0441\u0430\u0443\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(o=>{o.isConfirmed&&this.$inertia.get(route("admin.teachers.dublicate",e))})},search(){this.loading=1;const e=this.clearParams(this.filter);this.$inertia.get(route("admin.teachers.index"),e)}}},N=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041C\u04B1\u0493\u0430\u043B\u0456\u043C\u0434\u0435\u0440")],-1),D={class:"row mb-2"},I=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u041C\u04B1\u0493\u0430\u043B\u0456\u043C\u0434\u0435\u0440 \u0442\u0456\u0437\u0456\u043C\u0456")],-1),M={class:"col-sm-6"},F={class:"breadcrumb float-sm-right"},H={class:"breadcrumb-item"},K=["href"],U=t("i",{class:"fas fa-dashboard"},null,-1),j=r(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),q=[U,j],z=t("li",{class:"breadcrumb-item active"}," \u041C\u04B1\u0493\u0430\u043B\u0456\u043C\u0434\u0435\u0440 \u0442\u0456\u0437\u0456\u043C\u0456 ",-1),G={class:"buttons d-flex align-items-center"},J=t("i",{class:"fa fa-plus"},null,-1),O=r(" \u049A\u043E\u0441\u0443 "),Q=t("i",{class:"fa fa-trash"},null,-1),R=r(" \u0424\u0438\u043B\u044C\u0442\u0440\u0434\u0456 \u0442\u0430\u0437\u0430\u043B\u0430\u0443 "),W={class:"container-fluid"},X={class:"card"},Y={class:"card-body"},Z={class:"row"},$={class:"col-sm-12"},tt={class:"table table-hover table-bordered dataTable dtr-inline"},st={role:"row"},et=t("th",null,"\u2116",-1),ot=t("th",null,"\u0424\u0418\u041E",-1),lt=t("th",null,"\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430",-1),it=t("th",null,"\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B",-1),nt=t("th",null,"\u041E\u0442\u0447\u0435\u0442",-1),at={key:0},dt=t("th",null,"\u04D8\u0440\u0435\u043A\u0435\u0442",-1),rt={class:"filters"},ct=t("td",null,null,-1),_t=t("td",null,null,-1),ut=t("td",null,null,-1),ht=t("td",null,null,-1),ft={key:0},mt=t("option",{value:null}," \u0411\u0430\u0440\u043B\u044B\u0493\u044B ",-1),vt=["value"],bt=t("td",null,null,-1),pt={class:"d-flex gap-20"},gt=["onClick"],kt={class:"d-f j-c"},yt={class:"paidBlock"},wt={key:0,class:"paid success"},Bt={key:1,class:"paid danger"},Ct={key:2,class:"paid black"},xt={class:"paid date"},Lt=r(" \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 "),Pt=r(" \u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432 "),Tt={key:0},Vt={class:"btn-group btn-group-sm"},St=t("i",{class:"fas fa-edit"},null,-1);function At(e,o,d,Et,u,h){const c=f("Link"),k=f("Pagination"),y=f("AdminLayout");return l(),i(m,null,[N,a(y,null,{breadcrumbs:n(()=>[t("div",D,[I,t("div",M,[t("ol",F,[t("li",H,[t("a",{href:e.route("admin.index")},q,8,K)]),z])])])]),header:n(()=>[t("div",G,[a(c,{class:"btn btn-primary mr-2",href:e.route("admin.users.create")},{default:n(()=>[J,O]),_:1},8,["href"]),a(c,{class:"btn btn-danger",href:e.route("admin.teachers.index")},{default:n(()=>[Q,R]),_:1},8,["href"])])]),default:n(()=>[t("div",W,[t("div",X,[t("div",Y,[t("div",Z,[t("div",$,[t("table",tt,[t("thead",null,[t("tr",st,[et,ot,lt,it,nt,d.user.role_id<3?(l(),i("th",at,"\u0424\u0438\u043B\u0438\u0430\u043B")):v("",!0),dt]),t("tr",rt,[ct,t("td",null,[p(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>u.filter.fio=s),class:"form-control",placeholder:"\u041F\u043E\u0438\u0441\u043A...",onKeyup:o[1]||(o[1]=P((...s)=>h.search&&h.search(...s),["enter"]))},null,544),[[L,u.filter.fio]])]),_t,ut,ht,d.user.role_id<3?(l(),i("td",ft,[p(t("select",{class:"form-control",onChange:o[2]||(o[2]=V((...s)=>h.search&&h.search(...s),["prevent"])),"onUpdate:modelValue":o[3]||(o[3]=s=>u.filter.filial_id=s),placeholder:"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456"},[mt,(l(!0),i(m,null,g(d.filials,s=>(l(),i("option",{value:s.id},_(s.name),9,vt))),256))],544),[[T,u.filter.filial_id]])])):v("",!0),bt])]),t("tbody",null,[(l(!0),i(m,null,g(d.teachers.data,(s,b)=>(l(),i("tr",{class:"odd",key:"teacher"+s.id},[t("td",null,_(s.from?s.from+b:b+1),1),t("td",null,[t("div",pt,[t("div",{class:"avatar",style:S({backgroundImage:`url(/storage/files/${s.avatar})`}),onClick:Nt=>e.$page.props.flash.image=s==null?void 0:s.avatar},null,12,gt),r(" "+_(s.fio),1)])]),t("td",null,[t("div",kt,[t("div",yt,[s.lastEduPaid.status==1?(l(),i("div",wt," \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")):s.lastEduPaid.status==2?(l(),i("div",Bt,"\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043E")):(l(),i("div",Ct,"\u041F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D\u043E ")),t("div",xt,_(s.lastEduPaid.date),1)])])]),t("td",null,[a(c,{href:e.route("admin.schedule.index",{teacher_id:s.id}),class:"block",title:"\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0447\u0438\u0442\u0435\u043B\u044F"},{default:n(()=>[Lt]),_:2},1032,["href"])]),t("td",null,[a(c,{href:e.route("admin.teachers.students",s.id),class:"block",title:"\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432"},{default:n(()=>[Pt]),_:2},1032,["href"])]),d.user.role_id<3?(l(),i("td",Tt,_(s.filial.name),1)):v("",!0),t("td",null,[t("div",Vt,[a(c,{href:e.route("admin.users.edit",s),class:"btn btn-primary",title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"},{default:n(()=>[St]),_:2},1032,["href"])])])]))),128))])])])]),a(k,{links:d.teachers.links},null,8,["links"])])])])]),_:1})],64)}const Ft=w(E,[["render",At]]);export{Ft as default};
