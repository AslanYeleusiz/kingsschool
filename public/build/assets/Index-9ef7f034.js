import{_ as y,A as v}from"./AdminLayout-e2a9f783.js";import{L as k,H as x,r as _,o as a,e as i,b as d,w as l,F as f,a as t,t as n,h as C,i as B,d as c,m as w,f as L}from"./app-76f5f351.js";import{P as S}from"./Pagination-6b5293cb.js";const T={components:{AdminLayout:v,Link:k,Pagination:S,Head:x},props:["subjects"],data(){return{loading:0}},mounted(){console.log(this.subjects.data)},methods:{deleteData(s,r){Swal.fire({title:"Уверены, что хотите удалить?",text:"Возможно, что нельзя будет восстановить!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Да, удалю!",cancelButtonText:"Нет"}).then(o=>{o.isConfirmed&&this.$inertia.delete(route("admin.studentsSubjects.destroy",[s,r]))})},getStatusText(s){return s?"Активен":"Не активен"},dublicate(s){Swal.fire({title:"Уверены, что хотите сделать дубликат?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Да, уверен!",cancelButtonText:"Нет"}).then(r=>{r.isConfirmed&&this.$inertia.get(route("admin.subjects.dublicate",s))})},search(){this.loading=1;const s=this.clearParams(this.filter);this.$inertia.get(route("admin.studentsSubjects.index"),s)}}},P=t("head",null,[t("title",null,"Админ панель | Предметы студента")],-1),A={class:"row mb-2"},N={class:"col-sm-6"},V={class:"m-0"},D={class:"col-sm-6"},F={class:"breadcrumb float-sm-right"},H={class:"breadcrumb-item"},z=["href"],E=t("i",{class:"fas fa-dashboard"},null,-1),I=c(" Главная страница "),M=[E,I],$=t("li",{class:"breadcrumb-item active"}," Предметы студента ",-1),q={class:"buttons d-flex align-items-center"},G=t("i",{class:"fa fa-plus"},null,-1),J=c(" Добавить "),K={key:0,class:"spinner-border text-primary mx-3",role:"status"},O=t("span",{class:"sr-only"},"Loading...",-1),Q=[O],R={class:"container-fluid"},U={class:"card"},W={class:"card-body"},X={class:"row"},Y={class:"col-sm-12"},Z={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},j=t("thead",null,[t("tr",{role:"row"},[t("th",null,"№"),t("th",null,"Название"),t("th",null,"Тип курса"),t("th",null,"Тип обучения"),t("th",null,"Цена"),t("th",null,"Группа"),t("th",null,"Преподователь"),t("th",null,"Статус"),t("th",null,"Действия")])],-1),tt={class:"d-flex"},et={key:0},st={key:1},nt=c(" Список студентов "),ot={class:"btn-group btn-group-sm"},at=t("i",{class:"fas fa-edit"},null,-1),it=["onClick"],lt=t("i",{class:"fas fa-times"},null,-1),dt=[lt];function rt(s,r,o,ct,b,h){const u=_("Link"),g=_("Pagination"),p=_("AdminLayout");return a(),i(f,null,[P,d(p,null,{breadcrumbs:l(()=>[t("div",A,[t("div",N,[t("h1",V,"Предметы студента "+n(o.subjects.data[0].user.fio),1)]),t("div",D,[t("ol",F,[t("li",H,[t("a",{href:s.route("admin.index")},M,8,z)]),$])])])]),header:l(()=>[t("div",q,[d(u,{class:"btn btn-primary mr-2",href:s.route("admin.studentsSubjects.create",o.subjects.data[0].user_id)},{default:l(()=>[G,J]),_:1},8,["href"]),b.loading?(a(),i("div",K,Q)):C("",!0)])]),default:l(()=>[t("div",R,[t("div",U,[t("div",W,[t("div",X,[t("div",Y,[t("table",Z,[j,t("tbody",null,[(a(!0),i(f,null,B(o.subjects.data,(e,m)=>(a(),i("tr",{class:"odd",key:"subject"+e.id},[t("td",null,n(e.from?e.from+m:m+1),1),t("td",null,n(e.subject.name),1),t("td",null,n(e.course_type.name),1),t("td",null,n(e.train_type.name),1),t("td",null,[t("span",tt,n(e.price)+" ₸",1)]),e.group?(a(),i("td",et,n(e.group.name),1)):(a(),i("td",st,"Нет группы!")),t("td",null,[c(n(e.teacher.fio)+" / ",1),d(u,{href:s.route("admin.teachers.students",{id:e.teacher_id}),class:"block",title:"Список студентов"},{default:l(()=>[nt]),_:2},1032,["href"])]),t("td",null,[t("span",{class:w(["badge badge-success",{"badge-success":e.enable==1,"badge-danger":e.enable==0}])},n(h.getStatusText(e.enable)),3)]),t("td",null,[t("div",ot,[d(u,{href:s.route("admin.studentsSubjects.edit",[e.user_id,e.id]),class:"btn btn-primary",title:"Изменить"},{default:l(()=>[at]),_:2},1032,["href"]),t("button",{onClick:L(ut=>h.deleteData(e.user_id,e.id),["prevent"]),class:"btn btn-danger",title:"Жою"},dt,8,it)])])]))),128))])])])]),d(g,{links:o.subjects.links},null,8,["links"])])])])]),_:1})],64)}const ft=y(T,[["render",rt]]);export{ft as default};
