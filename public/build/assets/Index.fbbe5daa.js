import{A as T}from"./AdminLayout.6a6b1706.js";import{L as j,H as D,a as p,o as s,c as n,f as v,w as h,F as r,d as t,b as S,h as u,m,u as w,v as B,p as L,g as b,e as C,t as _,q as x,s as V,l as k}from"./app.70dc3908.js";import{P as E}from"./Pagination.9293b879.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const A={components:{AdminLayout:T,Link:j,Pagination:E,Head:D},props:["orders","groups","user"],data(){return{filter:{name:route().params.name?route().params.name:null},loading:0,newGroup:""}},methods:{checkStudents(){return this.orders.data.every(l=>l.group_id!==null)==!1},setNewGroup(l,d=null){this.$inertia.put(route("admin.students.update",l),{name:this.newGroup,groupId:d})},setGroup(l,d=null){this.orders.data.find(o=>o.id==l).group_id==0?this.newGroup="":this.setNewGroup(l,d)},setPaid(l,d){d?Swal.fire({title:"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043E\u043F\u043B\u0430\u0442\u0443",icon:"success",showCancelButton:!0,confirmButtonColor:"#71DD37",cancelButtonColor:"#adb5bd",confirmButtonText:"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",cancelButtonText:"\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"}).then(o=>{o.isConfirmed&&this.$inertia.post(route("admin.students.paid",l))}):Swal.fire({title:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443?",icon:"error",showCancelButton:!0,confirmButtonColor:"#71DD37",cancelButtonColor:"#adb5bd",confirmButtonText:"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",cancelButtonText:"\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"}).then(o=>{o.isConfirmed&&this.$inertia.post(route("admin.students.deletePaid",l))})},search(){this.loading=1;const l=this.clearParams(this.filter);this.$inertia.get(route("admin.students.index"),l)},deleteData(l){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(d=>{d.isConfirmed&&this.$inertia.delete(route("admin.groups.destroy",l))})},deleteDataAtGroup(l){Swal.fire({title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0447\u0435\u043D\u0438\u043A\u0430 \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0414\u0430!",cancelButtonText:"\u041D\u0435\u0442"}).then(d=>{d.isConfirmed&&this.$inertia.delete(route("admin.groups.destroyOrder",l))})}}},I=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0421\u0442\u0443\u0434\u0435\u043D\u0442\u044B")],-1),F={class:"row mb-2"},U=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u044B")],-1),M={class:"col-sm-6"},H={class:"breadcrumb float-sm-right"},K={class:"breadcrumb-item"},q=["href"],z=t("i",{class:"fas fa-dashboard"},null,-1),O=C(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),W=[z,O],J=t("li",{class:"breadcrumb-item active"}," \u0421\u0442\u0443\u0434\u0435\u043D\u0442\u044B ",-1),Q={class:"buttons d-flex align-items-center"},R=t("i",{class:"fa fa-plus"},null,-1),X=C(" \u049A\u043E\u0441\u0443 "),Y=t("i",{class:"fa fa-trash"},null,-1),Z=C(" \u0424\u0438\u043B\u044C\u0442\u0440\u0434\u0456 \u0442\u0430\u0437\u0430\u043B\u0430\u0443 "),$={key:1,class:"ml-2 badge badge-danger"},tt=t("h3",null,"\u0412\u0430\u0448\u0438 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u044B \u043D\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u0433\u0440\u0443\u043F\u043F\u0430\u043C",-1),et=[tt],st={class:"container-fluid"},nt={class:"card"},ot={class:"card-body"},lt={class:"row"},it={class:"col-sm-12"},dt={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},at={role:"row"},ct=t("th",null,"\u2116",-1),ut=t("th",null,null,-1),_t=t("th",null,"\u0424\u0418\u041E",-1),rt=t("th",null,"\u041F\u0440\u0435\u0434\u043C\u0435\u0442",-1),ht=t("th",null,"\u0421\u0442\u0430\u0442\u0443\u0441",-1),mt={key:0},ft=t("th",null,"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",-1),vt={key:1},bt={key:2},kt={class:"filters"},gt=t("td",null,null,-1),yt=t("td",null,null,-1),pt=t("td",null,null,-1),Ct={key:0},wt=t("td",null,null,-1),Bt={key:1},xt={key:2},Pt=t("td",null,null,-1),Gt={class:"d-f aj-c"},Tt={class:"d-f j-c"},jt={class:"paidBlock"},Dt=["onClick"],St=["onClick"],Lt=["onClick"],Vt={class:"paid date"},Et={key:0},Nt={class:"d-f j-c"},At={class:"tablemask",title:"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E Whatsapp"},It={key:1},Ft={key:0},Ut=["onChange","onUpdate:modelValue"],Mt=t("option",{value:null,hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),Ht=t("option",{value:0}," + \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 ",-1),Kt=["value"],qt={key:1},zt=["onFocusout"],Ot={class:"btn-group btn-group-sm"},Wt=t("i",{class:"fas fa-edit"},null,-1),Jt={key:0,class:"container-fluid"},Qt={class:"card"},Rt={class:"card-body"},Xt=t("h2",{class:"mb-3"},"\u0413\u0440\u0443\u043F\u043F\u044B",-1),Yt={class:"row"},Zt={class:"col-sm-12"},$t=["data-target"],te={class:"d-flex center"},ee={class:"d-flex gap-20"},se={class:"mr-3 modul_name"},ne=["onClick"],oe=t("i",{class:"fas fa-times"},null,-1),le=[oe],ie=t("span",{class:"arrow mr-3"},"\u25BC",-1),de=["id"],ae={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},ce=t("thead",null,[t("tr",{role:"row"},[t("th",null,"\u2116"),t("th"),t("th",null,"\u0424\u0418\u041E"),t("th",null,"\u041F\u0440\u0435\u0434\u043C\u0435\u0442"),t("th",null,"\u0421\u0442\u0430\u0442\u0443\u0441"),t("td")])],-1),ue={class:"d-f aj-c"},_e={class:"d-f j-c"},re={class:"paidBlock"},he=["onClick"],me=["onClick"],fe=["onClick"],ve={class:"paid date"},be={class:"d-f j-b"},ke=t("div",null,null,-1),ge=["onClick"],ye=t("i",{class:"fas fa-times"},null,-1),pe=[ye];function Ce(l,d,o,we,f,c){const g=p("Link"),P=p("Pagination"),G=p("AdminLayout");return s(),n(r,null,[I,v(G,null,{breadcrumbs:h(()=>[t("div",F,[U,t("div",M,[t("ol",H,[t("li",K,[t("a",{href:l.route("admin.index")},W,8,q)]),J])])])]),header:h(()=>[t("div",Q,[o.user.role_id==1||o.user.role_id==2?(s(),S(g,{key:0,class:"btn btn-primary mr-2",href:l.route("admin.users.create")},{default:h(()=>[R,X]),_:1},8,["href"])):u("",!0),v(g,{class:"btn btn-danger",href:l.route("admin.students.index")},{default:h(()=>[Y,Z]),_:1},8,["href"]),c.checkStudents()?(s(),n("div",$,et)):u("",!0)])]),default:h(()=>[t("div",st,[t("div",nt,[t("div",ot,[t("div",lt,[t("div",it,[t("table",dt,[t("thead",null,[t("tr",at,[ct,ut,_t,rt,ht,o.user.role_id<3?(s(),n("th",mt,"\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C")):u("",!0),ft,o.user.role_id<3?(s(),n("th",vt,"\u0426\u0435\u043D\u0430")):u("",!0),o.groups?(s(),n("th",bt,"\u0413\u0440\u0443\u043F\u043F\u0430")):u("",!0),m(t("th",null,null,512),[[w,o.user.role_id==1||o.user.role_id==2]])]),t("tr",kt,[gt,yt,t("td",null,[m(t("input",{"onUpdate:modelValue":d[0]||(d[0]=e=>f.filter.fio=e),class:"form-control",placeholder:"\u0424\u0418\u041E",onKeyup:d[1]||(d[1]=L((...e)=>c.search&&c.search(...e),["enter"]))},null,544),[[B,f.filter.fio]])]),pt,o.user.role_id<3?(s(),n("td",Ct)):u("",!0),wt,o.user.role_id<3?(s(),n("td",Bt)):u("",!0),o.groups?(s(),n("td",xt)):u("",!0),Pt])]),t("tbody",null,[(s(!0),n(r,null,b(o.orders.data,(e,i)=>(s(),n("tr",{class:"odd",key:"order"+e.id},[t("td",null,_(e.from?e.from+i:i+1),1),t("td",Gt,[t("div",{class:"avatar",style:x({backgroundImage:`url(/storage/files/${e.user.avatar})`})},null,4)]),t("td",null,_(e.user.fio),1),t("td",null,_(e.subject?e.subject.name:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"),1),t("td",null,[t("div",Tt,[t("div",jt,[e.lastEduPaid.status==1?(s(),n("div",{key:0,class:"paid success",onClick:a=>c.setPaid(e.id,0)},"\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E",8,Dt)):e.lastEduPaid.status==2?(s(),n("div",{key:1,class:"paid danger",onClick:a=>c.setPaid(e.id,1)},"\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043E",8,St)):(s(),n("div",{key:2,class:"paid black",onClick:a=>c.setPaid(e.id,1)},"\u041F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D\u043E ",8,Lt)),t("div",Vt,_(e.lastEduPaid.date),1)])])]),o.user.role_id<3?(s(),n("td",Et,_(e.teacher.fio),1)):u("",!0),t("td",null,[t("div",Nt,[t("div",At,_(e.user.tel_num),1)])]),o.user.role_id<3?(s(),n("td",It,_(e.price),1)):u("",!0),o.groups?(s(),n(r,{key:2},[o.groups&&e.group_id!=0?(s(),n("td",Ft,[m(t("select",{class:"form-control",onChange:k(a=>c.setGroup(e.id,e.group_id),["prevent"]),"onUpdate:modelValue":a=>e.group_id=a,placeholder:"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456"},[Mt,Ht,(s(!0),n(r,null,b(o.groups,a=>(s(),n("option",{value:a.id},_(a.name),9,Kt))),256))],40,Ut),[[V,e.group_id]])])):(s(),n("td",qt,[m(t("input",{type:"text",class:"form-control","onUpdate:modelValue":d[2]||(d[2]=a=>f.newGroup=a),onFocusout:a=>c.setNewGroup(e.id)},null,40,zt),[[B,f.newGroup]])]))],64)):u("",!0),m(t("td",null,[t("div",Ot,[v(g,{href:l.route("admin.users.edit",e),class:"btn btn-primary",title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"},{default:h(()=>[Wt]),_:2},1032,["href"])])],512),[[w,o.user.role_id==1||o.user.role_id==2]])]))),128))])])])]),v(P,{links:o.orders.links},null,8,["links"])])])]),o.groups?(s(),n("div",Jt,[t("div",Qt,[t("div",Rt,[Xt,t("div",Yt,[t("div",Zt,[(s(!0),n(r,null,b(o.groups,e=>(s(),n("div",{class:"module",key:"group"+e.id},[t("div",{class:"module-header","data-toggle":"collapse","data-target":"#moduleContent_"+e.id},[t("div",te,[t("div",ee,[t("h4",se,_(e.name),1),t("div",{class:"btn-group btn-group-sm",onClick:d[3]||(d[3]=k(()=>{},["stop"]))},[t("button",{onClick:k(i=>c.deleteData(e.id,!0),["prevent"]),class:"btn btn-danger",title:"\u0416\u043E\u044E"},le,8,ne)])]),ie])],8,$t),t("div",{id:"moduleContent_"+e.id,class:"module-content collapse show"},[t("table",ae,[ce,t("tbody",null,[(s(!0),n(r,null,b(o.orders.data,(i,a)=>(s(),n("tr",{class:"odd",key:"grouporder"+i.id},[i.group_id==e.id?(s(),n(r,{key:0},[t("td",null,_(i.from?i.from+a:a+1),1),t("td",ue,[t("div",{class:"avatar",style:x({backgroundImage:`url(/storage/files/${i.user.avatar})`})},null,4)]),t("td",null,_(i.user.fio),1),t("td",null,_(i.subject?i.subject.name:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"),1),t("td",null,[t("div",_e,[t("div",re,[i.lastEduPaid.status==1?(s(),n("div",{key:0,class:"paid success",onClick:y=>c.setPaid(i.id,0)},"\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E",8,he)):i.lastEduPaid.status==2?(s(),n("div",{key:1,class:"paid danger",onClick:y=>c.setPaid(i.id,1)},"\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043E",8,me)):(s(),n("div",{key:2,class:"paid black",onClick:y=>c.setPaid(i.id,1)},"\u041F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D\u043E ",8,fe)),t("div",ve,_(i.lastEduPaid.date),1)])])]),t("td",null,[t("div",be,[ke,t("button",{onClick:k(y=>c.deleteDataAtGroup(i.id),["prevent"]),class:"btn btn-danger",title:"\u0416\u043E\u044E"},pe,8,ge)])])],64)):u("",!0)]))),128))])])],8,de)]))),128))])])])])])):u("",!0)]),_:1})],64)}const Te=N(A,[["render",Ce]]);export{Te as default};
