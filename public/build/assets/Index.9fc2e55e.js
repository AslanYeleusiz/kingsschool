import{_ as L,A as V}from"./AdminLayout.2dd53075.js";import{L as S,H as P,r as p,o as a,a as i,e as d,w as r,F as m,b as e,g,q as h,v as y,u as k,s as x,m as b,f as v,d as f,t as u,h as T,c as A}from"./app.f66fbad4.js";import{P as D}from"./Pagination.4dcb4cb4.js";const I={components:{AdminLayout:V,Link:S,Pagination:D,Head:P},props:["users","roles","filials"],data(){return{filter:{fio:route().params.fio?route().params.fio:null,tel_num:route().params.tel_num?route().params.tel_num:null,role_id:route().params.role_id?route().params.role_id:null,filial_id:route().params.filial_id?route().params.filial_id:null},loading:0,showModal:0,modalImageSrc:""}},methods:{deleteData(l){Swal.fire({title:"\u0416\u043E\u044E\u0493\u0430 \u0441\u0435\u043D\u0456\u043C\u0434\u0456\u0441\u0456\u0437 \u0431\u0435?",text:"\u049A\u0430\u0439\u0442\u044B\u043F \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u043C\u0435\u0443\u0456 \u043C\u04AF\u043C\u043A\u0456\u043D!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0418\u04D9, \u0436\u043E\u044F\u043C\u044B\u043D!",cancelButtonText:"\u0416\u043E\u049B"}).then(s=>{s.isConfirmed&&this.$inertia.delete(route("admin.users.destroy",l))})},search(){this.loading=1;const l=this.clearParams(this.filter);this.$inertia.get(route("admin.users.index"),l)}}},M=e("head",null,[e("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u049A\u043E\u043B\u0434\u0430\u043D\u0443\u0448\u044B\u043B\u0430\u0440")],-1),N={class:"row mb-2"},U=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"\u049A\u043E\u043B\u0434\u0430\u043D\u0443\u0448\u044B\u043B\u0430\u0440 \u0442\u0456\u0437\u0456\u043C\u0456")],-1),K={class:"col-sm-6"},q={class:"breadcrumb float-sm-right"},F={class:"breadcrumb-item"},H=["href"],j=e("i",{class:"fas fa-dashboard"},null,-1),z=f(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),E=[j,z],G=e("li",{class:"breadcrumb-item active"}," \u049A\u043E\u043B\u0434\u0430\u043D\u0443\u0448\u044B\u043B\u0430\u0440 \u0442\u0456\u0437\u0456\u043C\u0456 ",-1),J={class:"buttons d-flex align-items-center"},O=e("i",{class:"fa fa-plus"},null,-1),Q=f(" \u049A\u043E\u0441\u0443 "),R=e("i",{class:"fa fa-trash"},null,-1),W=f(" \u0424\u0438\u043B\u044C\u0442\u0440\u0434\u0456 \u0442\u0430\u0437\u0430\u043B\u0430\u0443 "),X=e("i",{class:"fa fa-plus"},null,-1),Y=f(" \u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0451 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 "),Z={key:0,class:"spinner-border text-primary mx-3",role:"status"},$=e("span",{class:"sr-only"},"Loading...",-1),ee=[$],te={class:"container-fluid"},se={class:"card"},le={class:"card-body"},ne={class:"row"},oe={class:"col-sm-12"},ae={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},ie=e("tr",{role:"row"},[e("th"),e("th",null,"\u0422\u043E\u043B\u044B\u049B \u0430\u0442\u044B-\u0436\u04E9\u043D\u0456"),e("th",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u04E9\u043C\u0456\u0440\u0456"),e("th",null,"\u0424\u0438\u043B\u0438\u0430\u043B"),e("th",null,"\u0420\u043E\u043B\u044C"),e("th",null,"\u04D8\u0440\u0435\u043A\u0435\u0442")],-1),re={class:"filters"},de=e("td",null,null,-1),ue=e("option",{value:null}," \u0411\u0430\u0440\u043B\u044B\u0493\u044B ",-1),ce=["value"],_e=e("option",{value:null}," \u0411\u0430\u0440\u043B\u044B\u0493\u044B ",-1),me=["value"],he=["onClick"],fe={class:"btn-group btn-group-sm"},pe=e("i",{class:"fas fa-question"},null,-1),be=e("i",{class:"fas fa-edit"},null,-1),ve=["onClick"],ge=e("i",{class:"fas fa-times"},null,-1),ye=[ge];function ke(l,s,_,xe,n,o){const c=p("Link"),C=p("Pagination"),w=p("AdminLayout");return a(),i(m,null,[M,d(w,null,{breadcrumbs:r(()=>[e("div",N,[U,e("div",K,[e("ol",q,[e("li",F,[e("a",{href:l.route("admin.index")},E,8,H)]),G])])])]),header:r(()=>[e("div",J,[d(c,{class:"btn btn-primary",href:l.route("admin.users.create")},{default:r(()=>[O,Q]),_:1},8,["href"]),d(c,{class:"btn btn-danger mx-2",href:l.route("admin.users.index")},{default:r(()=>[R,W]),_:1},8,["href"]),d(c,{class:"btn btn-primary",href:l.route("admin.users.deleted")},{default:r(()=>[X,Y]),_:1},8,["href"]),n.loading?(a(),i("div",Z,ee)):g("",!0)])]),default:r(()=>[e("div",te,[e("div",se,[e("div",le,[e("div",ne,[e("div",oe,[e("table",ae,[e("thead",null,[ie,e("tr",re,[de,e("td",null,[h(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>n.filter.fio=t),class:"form-control",placeholder:"\u0422\u043E\u043B\u044B\u049B \u0430\u0442\u044B-\u0436\u04E9\u043D\u0456",onKeyup:s[1]||(s[1]=k((...t)=>o.search&&o.search(...t),["enter"]))},null,544),[[y,n.filter.fio]])]),e("td",null,[h(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>n.filter.tel_num=t),class:"form-control",placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u04E9\u043C\u0456\u0440\u0456",onKeyup:s[3]||(s[3]=k((...t)=>o.search&&o.search(...t),["enter"]))},null,544),[[y,n.filter.tel_num]])]),e("td",null,[h(e("select",{class:"form-control",onChange:s[4]||(s[4]=b((...t)=>o.search&&o.search(...t),["prevent"])),"onUpdate:modelValue":s[5]||(s[5]=t=>n.filter.filial_id=t),placeholder:"\u0424\u0438\u043B\u0438\u0430\u043B"},[ue,(a(!0),i(m,null,v(_.filials,t=>(a(),i("option",{key:"filial"+t.id,value:t.id},u(t.name),9,ce))),128))],544),[[x,n.filter.filial_id]])]),e("td",null,[h(e("select",{class:"form-control",onChange:s[6]||(s[6]=b((...t)=>o.search&&o.search(...t),["prevent"])),"onUpdate:modelValue":s[7]||(s[7]=t=>n.filter.role_id=t),placeholder:"\u0424\u0438\u043B\u0438\u0430\u043B"},[_e,(a(!0),i(m,null,v(_.roles,t=>(a(),i("option",{key:"role"+t.id,value:t.id},u(t.name),9,me))),128))],544),[[x,n.filter.role_id]])])])]),e("tbody",null,[(a(!0),i(m,null,v(_.users.data,(t,Ce)=>(a(),i("tr",{class:"odd",key:"user"+t.id},[e("td",null,[e("div",{class:"avatar",style:T({backgroundImage:`url(/storage/files/${t.avatar})`}),onClick:B=>l.$page.props.flash.image=t==null?void 0:t.avatar},null,12,he)]),e("td",null,u(t.fio),1),e("td",null,u(t.tel_num),1),e("td",null,u(t.filial.name),1),e("td",null,u(t.role.name),1),e("td",null,[e("div",fe,[t.role_id==4||t.role_id==3?(a(),A(c,{key:0,href:l.route("admin.studentsSubjects.index",t.id),class:"btn btn-success",title:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B"},{default:r(()=>[pe]),_:2},1032,["href"])):g("",!0),d(c,{href:l.route("admin.users.edit",t),class:"btn btn-primary",title:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"},{default:r(()=>[be]),_:2},1032,["href"]),e("button",{onClick:b(B=>o.deleteData(t.id),["prevent"]),class:"btn btn-danger",title:"\u0416\u043E\u044E"},ye,8,ve)])])]))),128))])])])]),d(C,{links:_.users.links},null,8,["links"])])])])]),_:1})],64)}const Ve=L(I,[["render",ke]]);export{Ve as default};
