import{A as g}from"./AdminLayout.20871ad5.js";import{L as y,H as x,a as u,o as d,c as r,f as a,w as o,F as f,d as t,h as k,m as w,v as B,p as C,g as L,e as l,t as b,u as T,l as P}from"./app.b334bc4f.js";import{P as V}from"./Pagination.0c0ca4f9.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";const D={components:{AdminLayout:g,Link:y,Pagination:V,Head:x},props:["teachers"],data(){return{filter:{name:route().params.name?route().params.name:null},loading:0}},methods:{deleteData(s){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(n=>{n.isConfirmed&&this.$inertia.delete(route("admin.teachers.destroy",s))})},dublicate(s){Swal.fire({title:"\u0414\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u049B\u0430 \u0436\u0430\u0441\u0430\u0443\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(n=>{n.isConfirmed&&this.$inertia.get(route("admin.teachers.dublicate",s))})},search(){this.loading=1;const s=this.clearParams(this.filter);this.$inertia.get(route("admin.teachers.index"),s)}}},N=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u041C\u04B1\u0493\u0430\u043B\u0456\u043C\u0434\u0435\u0440")],-1),S={class:"row mb-2"},I=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u041C\u04B1\u0493\u0430\u043B\u0456\u043C\u0434\u0435\u0440 \u0442\u0456\u0437\u0456\u043C\u0456")],-1),F={class:"col-sm-6"},H={class:"breadcrumb float-sm-right"},K={class:"breadcrumb-item"},M=["href"],z=t("i",{class:"fas fa-dashboard"},null,-1),E=l(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),U=[z,E],$=t("li",{class:"breadcrumb-item active"}," \u041C\u04B1\u0493\u0430\u043B\u0456\u043C\u0434\u0435\u0440 \u0442\u0456\u0437\u0456\u043C\u0456 ",-1),j={class:"buttons d-flex align-items-center"},q=t("i",{class:"fa fa-plus"},null,-1),G=l(" \u049A\u043E\u0441\u0443 "),J=t("i",{class:"fa fa-trash"},null,-1),O=l(" \u0424\u0438\u043B\u044C\u0442\u0440\u0434\u0456 \u0442\u0430\u0437\u0430\u043B\u0430\u0443 "),Q={key:0,class:"spinner-border text-primary mx-3",role:"status"},R=t("span",{class:"sr-only"},"Loading...",-1),W=[R],X={class:"container-fluid"},Y={class:"card"},Z={class:"card-body"},tt={class:"row"},et={class:"col-sm-12"},st={class:"table table-hover table-bordered dataTable dtr-inline"},nt=t("tr",{role:"row"},[t("th",null,"\u2116"),t("th",null,"\u0424\u0418\u041E"),t("th",null,"\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430"),t("th",null,"\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B"),t("th",null,"\u041E\u0442\u0447\u0435\u0442"),t("th",null,"\u04D8\u0440\u0435\u043A\u0435\u0442")],-1),ot={class:"filters"},at=t("td",null,null,-1),lt=t("td",null,null,-1),it={class:"d-flex gap-20"},dt=t("td",null,null,-1),rt=t("td",null,[t("div",{class:"block"}," \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")],-1),ct=l(" \u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432 "),_t={class:"btn-group btn-group-sm"},ut=t("i",{class:"fas fa-edit"},null,-1),ht=["onClick"],mt=t("i",{class:"fas fa-times"},null,-1),ft=[mt];function bt(s,n,h,pt,c,_){const i=u("Link"),p=u("Pagination"),v=u("AdminLayout");return d(),r(f,null,[N,a(v,null,{breadcrumbs:o(()=>[t("div",S,[I,t("div",F,[t("ol",H,[t("li",K,[t("a",{href:s.route("admin.index")},U,8,M)]),$])])])]),header:o(()=>[t("div",j,[a(i,{class:"btn btn-primary mr-2",href:s.route("admin.teachers.create")},{default:o(()=>[q,G]),_:1},8,["href"]),a(i,{class:"btn btn-danger",href:s.route("admin.teachers.index")},{default:o(()=>[J,O]),_:1},8,["href"]),c.loading?(d(),r("div",Q,W)):k("",!0)])]),default:o(()=>[t("div",X,[t("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[t("table",st,[t("thead",null,[nt,t("tr",ot,[at,t("td",null,[w(t("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>c.filter.name=e),class:"form-control",placeholder:"\u0410\u0442\u044B",onKeyup:n[1]||(n[1]=C((...e)=>_.search&&_.search(...e),["enter"]))},null,544),[[B,c.filter.name]])]),lt])]),t("tbody",null,[(d(!0),r(f,null,L(h.teachers.data,(e,m)=>(d(),r("tr",{class:"odd",key:"teacher"+e.id},[t("td",null,b(e.from?e.from+m:m+1),1),t("td",null,[t("div",it,[t("div",{class:"avatar",style:T({backgroundImage:`url(/storage/files/${e.avatar})`})},null,4),l(" "+b(e.fio),1)])]),dt,rt,t("td",null,[a(i,{href:s.route("admin.students.index",{teacher_id:e.id}),class:"block",title:"\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432"},{default:o(()=>[ct]),_:2},1032,["href"])]),t("td",null,[t("div",_t,[a(i,{href:s.route("admin.teachers.edit",e),class:"btn btn-primary",title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"},{default:o(()=>[ut]),_:2},1032,["href"]),t("button",{onClick:P(vt=>_.deleteData(e.id),["prevent"]),class:"btn btn-danger",title:"\u0416\u043E\u044E"},ft,8,ht)])])]))),128))])])])]),a(p,{links:h.teachers.links},null,8,["links"])])])])]),_:1})],64)}const wt=A(D,[["render",bt]]);export{wt as default};