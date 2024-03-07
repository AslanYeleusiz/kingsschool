import{_ as y,A as k}from"./AdminLayout.4c8d68b7.js";import{L as v,H as B,r as u,o as a,a as i,e as l,w as d,F as m,b as t,t as n,g as C,f as w,d as c,k as x}from"./app.205b37dc.js";import{P as L}from"./Pagination.ed6170d5.js";const S={components:{AdminLayout:k,Link:v,Pagination:L,Head:B},props:["subjects"],data(){return{loading:0}},mounted(){console.log(this.subjects.data)},methods:{deleteData(s,r){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(o=>{o.isConfirmed&&this.$inertia.delete(route("admin.studentsSubjects.destroy",[s,r]))})},dublicate(s){Swal.fire({title:"\u0414\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u049B\u0430 \u0436\u0430\u0441\u0430\u0443\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(r=>{r.isConfirmed&&this.$inertia.get(route("admin.subjects.dublicate",s))})},search(){this.loading=1;const s=this.clearParams(this.filter);this.$inertia.get(route("admin.studentsSubjects.index"),s)}}},T=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430")],-1),P={class:"row mb-2"},A={class:"col-sm-6"},N={class:"m-0"},V={class:"col-sm-6"},D={class:"breadcrumb float-sm-right"},F={class:"breadcrumb-item"},H=["href"],$=t("i",{class:"fas fa-dashboard"},null,-1),E=c(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),I=[$,E],M=t("li",{class:"breadcrumb-item active"}," \u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 ",-1),q={class:"buttons d-flex align-items-center"},z=t("i",{class:"fa fa-plus"},null,-1),G=c(" \u049A\u043E\u0441\u0443 "),J={key:0,class:"spinner-border text-primary mx-3",role:"status"},K=t("span",{class:"sr-only"},"Loading...",-1),O=[K],Q={class:"container-fluid"},R={class:"card"},U={class:"card-body"},W={class:"row"},X={class:"col-sm-12"},Y={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},Z=t("thead",null,[t("tr",{role:"row"},[t("th",null,"\u2116"),t("th",null,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),t("th",null,"\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430"),t("th",null,"\u0422\u0438\u043F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"),t("th",null,"\u0426\u0435\u043D\u0430"),t("th",null,"\u0413\u0440\u0443\u043F\u043F\u0430"),t("th",null,"\u04D8\u0440\u0435\u043A\u0435\u0442")]),t("tr",{class:"filters"},[t("td"),t("td"),t("td"),t("td"),t("td")])],-1),j={class:"d-flex"},tt={key:0},et={key:1},st=c(" \u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432 "),nt={class:"btn-group btn-group-sm"},ot=t("i",{class:"fas fa-edit"},null,-1),at=["onClick"],it=t("i",{class:"fas fa-times"},null,-1),dt=[it];function lt(s,r,o,rt,f,b){const _=u("Link"),p=u("Pagination"),g=u("AdminLayout");return a(),i(m,null,[T,l(g,null,{breadcrumbs:d(()=>[t("div",P,[t("div",A,[t("h1",N,"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 "+n(o.subjects.data[0].user.fio),1)]),t("div",V,[t("ol",D,[t("li",F,[t("a",{href:s.route("admin.index")},I,8,H)]),M])])])]),header:d(()=>[t("div",q,[l(_,{class:"btn btn-primary mr-2",href:s.route("admin.studentsSubjects.create",o.subjects.data[0].user_id)},{default:d(()=>[z,G]),_:1},8,["href"]),f.loading?(a(),i("div",J,O)):C("",!0)])]),default:d(()=>[t("div",Q,[t("div",R,[t("div",U,[t("div",W,[t("div",X,[t("table",Y,[Z,t("tbody",null,[(a(!0),i(m,null,w(o.subjects.data,(e,h)=>(a(),i("tr",{class:"odd",key:"subject"+e.id},[t("td",null,n(e.from?e.from+h:h+1),1),t("td",null,n(e.subject.name),1),t("td",null,n(e.course_type.name),1),t("td",null,n(e.train_type.name),1),t("td",null,[t("span",j,n(e.price)+" \u20B8",1)]),e.group?(a(),i("td",tt,n(e.group.name),1)):(a(),i("td",et,"\u041D\u0435\u0442 \u0433\u0440\u0443\u043F\u043F\u044B!")),t("td",null,[c(n(e.teacher.fio)+" / ",1),l(_,{href:s.route("admin.teachers.students",{id:e.teacher_id}),class:"block",title:"\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432"},{default:d(()=>[st]),_:2},1032,["href"])]),t("td",null,[t("div",nt,[l(_,{href:s.route("admin.studentsSubjects.edit",[e.user_id,e.id]),class:"btn btn-primary",title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"},{default:d(()=>[ot]),_:2},1032,["href"]),t("button",{onClick:x(ct=>b.deleteData(e.user_id,e.id),["prevent"]),class:"btn btn-danger",title:"\u0416\u043E\u044E"},dt,8,at)])])]))),128))])])])]),l(p,{links:o.subjects.links},null,8,["links"])])])])]),_:1})],64)}const mt=y(S,[["render",lt]]);export{mt as default};
