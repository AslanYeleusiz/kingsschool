import{_ as L,A as V}from"./AdminLayout.994209b6.js";import{L as B,H as P,r as f,o as i,a as r,e as c,w as d,F as m,b as t,h as T,f as _,s as p,x as b,u as w,q as v,g as y,d as g,t as o}from"./app.4e924e2d.js";import{P as U}from"./Pagination.04e26066.js";const A={components:{AdminLayout:V,Link:B,Pagination:U,Head:P},props:["expenses","types","filials"],data(){return{filter:{name:route().params.name?route().params.name:null,type_id:route().params.type_id?route().params.type_id:null,fio:route().params.fio?route().params.fio:null,filial_id:route().params.filial_id?route().params.filial_id:null,date:route().params.date?route().params.date:null},loading:0}},methods:{deleteData(a){Swal.fire({title:"\u0423\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C?",text:"\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0447\u0442\u043E \u043D\u0435\u043B\u044C\u0437\u044F \u0431\u0443\u0434\u0435\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0414\u0430, \u0443\u0434\u0430\u043B\u044E!",cancelButtonText:"\u041D\u0435\u0442"}).then(l=>{l.isConfirmed&&this.$inertia.delete(route("admin.expenses.destroy",a))})},search(){this.loading=1;const a=this.clearParams(this.filter);this.$inertia.get(route("admin.expenses.index"),a)}}},D=t("head",null,[t("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0420\u0430\u0441\u0445\u043E\u0434\u044B")],-1),K={class:"row mb-2"},N=t("div",{class:"col-sm-6"},[t("h1",{class:"m-0"},"\u0420\u0430\u0441\u0445\u043E\u0434\u044B")],-1),M={class:"col-sm-6"},S={class:"breadcrumb float-sm-right"},F={class:"breadcrumb-item"},H=["href"],q=t("i",{class:"fas fa-dashboard"},null,-1),E=g(" \u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 "),I=[q,E],j=t("li",{class:"breadcrumb-item active"}," \u0420\u0430\u0441\u0445\u043E\u0434\u044B ",-1),z={class:"buttons d-flex align-items-center"},G=t("i",{class:"fa fa-plus"},null,-1),J=g(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C "),O=t("i",{class:"fa fa-trash"},null,-1),Q=g(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440 "),R={key:0,class:"spinner-border text-primary mx-3",role:"status"},W=t("span",{class:"sr-only"},"Loading...",-1),X=[W],Y={class:"container-fluid"},Z={class:"card"},$={class:"card-body"},tt={class:"row"},et={class:"col-sm-12"},lt={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},st=t("tr",{role:"row"},[t("th",null,"\u2116"),t("th",null,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),t("th",null,"\u0422\u0438\u043F"),t("th",null,"\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440"),t("th",null,"\u0424\u0438\u043B\u0438\u0430\u043B"),t("th",null,"\u0414\u0430\u0442\u0430"),t("th",null,"\u0421\u0443\u043C\u043C\u0430"),t("th",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F")],-1),nt={class:"filters"},ot=t("td",null,null,-1),at=t("option",{value:null}," \u0412\u0441\u0435 ",-1),it=["value"],rt=t("option",{value:null}," \u0412\u0441\u0435 ",-1),dt=["value"],ut=t("td",null,null,-1),ct=t("td",null,null,-1),_t=t("td",null,null,-1),mt={class:"btn-group btn-group-sm"},ht=t("i",{class:"fas fa-edit"},null,-1),ft=["onClick"],pt=t("i",{class:"fas fa-times"},null,-1),bt=[pt];function vt(a,l,u,yt,s,n){const h=f("Link"),x=f("Pagination"),C=f("AdminLayout");return i(),r(m,null,[D,c(C,null,{breadcrumbs:d(()=>[t("div",K,[N,t("div",M,[t("ol",S,[t("li",F,[t("a",{href:a.route("admin.index")},I,8,H)]),j])])])]),header:d(()=>[t("div",z,[c(h,{class:"btn btn-primary mr-2",href:a.route("admin.expenses.create")},{default:d(()=>[G,J]),_:1},8,["href"]),c(h,{class:"btn btn-danger",href:a.route("admin.expenses.index")},{default:d(()=>[O,Q]),_:1},8,["href"]),s.loading?(i(),r("div",R,X)):T("",!0)])]),default:d(()=>[t("div",Y,[t("div",Z,[t("div",$,[t("div",tt,[t("div",et,[t("table",lt,[t("thead",null,[st,t("tr",nt,[ot,t("td",null,[_(t("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>s.filter.name=e),class:"form-control",placeholder:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",onKeyup:l[1]||(l[1]=b((...e)=>n.search&&n.search(...e),["enter"]))},null,544),[[p,s.filter.name]])]),t("td",null,[_(t("select",{class:"form-control",onChange:l[2]||(l[2]=v((...e)=>n.search&&n.search(...e),["prevent"])),"onUpdate:modelValue":l[3]||(l[3]=e=>s.filter.type_id=e)},[at,(i(!0),r(m,null,y(u.types,e=>(i(),r("option",{key:e.id,value:e.id},o(e.name),9,it))),128))],544),[[w,s.filter.type_id]])]),t("td",null,[_(t("input",{"onUpdate:modelValue":l[4]||(l[4]=e=>s.filter.fio=e),class:"form-control",placeholder:"\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C \u0424\u0418\u041E",onKeyup:l[5]||(l[5]=b((...e)=>n.search&&n.search(...e),["enter"]))},null,544),[[p,s.filter.fio]])]),t("td",null,[_(t("select",{class:"form-control",onChange:l[6]||(l[6]=v((...e)=>n.search&&n.search(...e),["prevent"])),"onUpdate:modelValue":l[7]||(l[7]=e=>s.filter.filial_id=e)},[rt,(i(!0),r(m,null,y(u.filials,e=>(i(),r("option",{key:"filial"+e.id,value:e.id},o(e.name),9,dt))),128))],544),[[w,s.filter.filial_id]])]),t("td",null,[_(t("input",{"onUpdate:modelValue":l[8]||(l[8]=e=>s.filter.date=e),class:"form-control",placeholder:"\u0414\u0430\u0442\u0430",onKeyup:l[9]||(l[9]=b((...e)=>n.search&&n.search(...e),["enter"]))},null,544),[[p,s.filter.date]])]),ut,ct,_t])]),t("tbody",null,[(i(!0),r(m,null,y(u.expenses.data,(e,k)=>(i(),r("tr",{class:"odd",key:"expense"+e.id},[t("td",null,o(e.from?e.from+k:k+1),1),t("td",null,o(e.name),1),t("td",null,o(u.types[e.type_id-1].name),1),t("td",null,o(e.user.fio),1),t("td",null,o(e.filial.name),1),t("td",null,o(e.date),1),t("td",null,o(e.summa),1),t("td",null,[t("div",mt,[c(h,{href:a.route("admin.expenses.edit",e),class:"btn btn-primary",title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"},{default:d(()=>[ht]),_:2},1032,["href"]),t("button",{onClick:v(gt=>n.deleteData(e.id),["prevent"]),class:"btn btn-danger",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"},bt,8,ft)])])]))),128))])])])]),c(x,{links:u.expenses.links},null,8,["links"])])])])]),_:1})],64)}const Ct=L(A,[["render",vt]]);export{Ct as default};
