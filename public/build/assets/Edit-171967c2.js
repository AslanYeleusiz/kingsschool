import{A as V}from"./AdminLayout-4103f48c.js";import{L as k,H as U,a as f,o as d,c as r,d as l,w as g,F as h,e,f as _,g as n,v as c,i as v,m as C,l as p,j as b,p as T,t as y,h as w}from"./app-9ffddd28.js";import{P as L}from"./Pagination-53a04694.js";import{V as A}from"./ValidationError-271a82fa.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const S={components:{AdminLayout:V,Link:k,Pagination:L,ValidationError:A,Head:U},props:["roles","filials","user","auth_user"],data(){return{image:{file:"",preview:""},check_iin:!1,iin:this.user.iin}},methods:{warningText(o,t="Барлық бағандар толтыру қажет!"){Swal.fire({title:o,text:t,icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Окей!"})},submit(){if(this.user.iin=this.iin,this.image.file&&(this.user.image=this.image.file),!this.user.role_id)return this.warningText("Роль тандалмады!");if(!this.user.filial_id)return this.warningText("Филиал тандалмады!");this.user._method="put",this.$inertia.post(route("admin.users.update",this.user.id),this.user,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},handleImageUpload(){if(this.image.file=this.$refs.image.files[0],this.image.file){const o=new FileReader;o.onloadend=t=>{this.image.preview=o.result},o.readAsDataURL(this.image.file),this.$refs.image.value=""}else this.user.image="",this.image.file="",this.image.preview=""},checkIin(){this.check_iin=1,axios.get("/admin/check-iin",{params:{iin:this.iin}}).then(o=>{o.data.status==!0&&this.warningText("Бұндай ИИН бұрын тіркелген",null),console.log(o.data),this.check_iin=0})}},watch:{iin(o){o.length===12&&this.iin!=this.user.iin&&this.checkIin()}}},E=e("head",null,[e("title",null,"Админ панель | Қолданушыны өзгерту")],-1),D={class:"row mb-2"},I=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"Қолданушыны өзгерту")],-1),M={class:"col-sm-6"},N={class:"breadcrumb float-sm-right"},F={class:"breadcrumb-item"},j=["href"],H=e("i",{class:"fas fa-dashboard"},null,-1),P=w(" Басты бет "),R=[H,P],q={class:"breadcrumb-item"},z=["href"],G=e("i",{class:"fas fa-dashboard"},null,-1),J=w(" Қолданушылар тізімі "),K=[G,J],O=e("li",{class:"breadcrumb-item active"}," Қолданушыны өзгерту ",-1),Q={class:"container-fluid"},W={class:"card card-primary"},X={class:"card-body"},Y={class:"row"},Z={class:"col-md-4"},$={class:"form-group"},ee=e("label",{for:""},"ИИН",-1),se={class:"row"},te={class:"col-md-4"},ie={class:"form-group"},oe=e("label",{for:""},"Фамилия",-1),le={class:"col-md-4"},ne={class:"form-group"},ae=e("label",{for:""},"Имя",-1),de={class:"row"},re={class:"col-md-4"},ce={class:"form-group"},me=e("label",{for:""},"Дата рожденья",-1),_e={class:"col-md-4"},ue={class:"form-group"},he=e("label",{for:""},"Телефон",-1),fe={key:0,class:"col-md-4"},ge={class:"form-group"},ve=e("label",{for:""},"Телефон родителя",-1),pe={class:"form-group file-upload"},be=e("label",{for:""},"Сурет",-1),ye={class:"ml-2"},we=["src"],xe=["src"],Ve={class:"file-input",style:{"margin-right":"10px"}},ke=e("label",{for:"image"}," Загрузить ",-1),Ue={class:"row"},Ce={class:"col-md-4"},Te={class:"form-group"},Le=e("label",{for:""},"Роль",-1),Ae=e("option",{value:null,hidden:""}," Роль таңдаңыз ",-1),Be=["value"],Se={class:"col-md-4"},Ee={class:"form-group"},De=e("label",{for:""},"Филлиал",-1),Ie=e("option",{value:null,hidden:""}," Филлиал таңдаңыз ",-1),Me=["value"],Ne={class:"col-md-4"},Fe={class:"form-group"},je=e("label",{for:""},"Құпия сөз",-1),He=["type"],Pe={class:"row"},Re={class:"col-md-4"},qe={class:"form-group"},ze=e("label",{for:""},"Дата начало обучения",-1),Ge={class:"card-footer"},Je=e("button",{type:"submit",class:"btn btn-primary mr-1"}," Сақтау ",-1);function Ke(o,t,i,Oe,m,u){const a=f("validation-error"),x=f("AdminLayout");return d(),r(h,null,[E,l(x,null,{breadcrumbs:g(()=>[e("div",D,[I,e("div",M,[e("ol",N,[e("li",F,[e("a",{href:o.route("admin.index")},R,8,j)]),e("li",q,[e("a",{href:o.route("admin.users.index")},K,8,z)]),O])])])]),default:g(()=>[e("div",Q,[e("div",W,[e("form",{method:"post",onSubmit:t[14]||(t[14]=_((...s)=>u.submit&&u.submit(...s),["prevent"]))},[e("div",X,[e("div",Y,[e("div",Z,[e("div",$,[ee,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>m.iin=s),name:"iin",placeholder:"ИИН",maxlength:"12"},null,512),[[c,m.iin]]),l(a,{field:"iin"})])])]),e("div",se,[e("div",te,[e("div",ie,[oe,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>i.user.s_name=s),name:"s_name",placeholder:"Фамилия"},null,512),[[c,i.user.s_name]]),l(a,{field:"s_name"})])]),e("div",le,[e("div",ne,[ae,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=s=>i.user.name=s),name:"name",placeholder:"Имя"},null,512),[[c,i.user.name]]),l(a,{field:"name"})])])]),e("div",de,[e("div",re,[e("div",ce,[me,n(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=s=>i.user.birthday=s),name:"birthday",placeholder:"Фамилия"},null,512),[[c,i.user.birthday]]),l(a,{field:"birthday"})])]),e("div",_e,[e("div",ue,[he,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=s=>i.user.tel_num=s),name:"tel_num",placeholder:"Имя"},null,512),[[c,i.user.tel_num]]),l(a,{field:"tel_num"})])]),i.user.role_id==4?(d(),r("div",fe,[e("div",ge,[ve,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=s=>i.user.tel_num_family=s),name:"tel_num_family",placeholder:"Телефон родителя"},null,512),[[c,i.user.tel_num_family]]),l(a,{field:"tel_num_family"})])])):v("",!0)]),e("div",pe,[be,e("div",ye,[i.user.avatar&&!m.image.file?(d(),r("img",{key:0,src:o.route("index")+"/storage/files/"+i.user.avatar,height:"300",alt:"image",style:{"padding-bottom":"10px"}},null,8,we)):v("",!0),n(e("img",{src:m.image.preview,height:"300",style:{"padding-bottom":"10px"}},null,8,xe),[[C,m.image.preview]]),e("div",Ve,[e("input",{type:"file",hidden:"",name:"image",onChange:t[6]||(t[6]=s=>u.handleImageUpload()),ref:"image",accept:"image/jpeg,image/png",class:"file",id:"image"},null,544),ke])]),l(a,{field:"image"})]),e("div",Ue,[e("div",Ce,[e("div",Te,[Le,n(e("select",{class:"form-control",onChange:t[7]||(t[7]=_((...s)=>o.search&&o.search(...s),["prevent"])),"onUpdate:modelValue":t[8]||(t[8]=s=>i.user.role_id=s),placeholder:"Белсенді"},[Ae,(d(!0),r(h,null,b(i.roles,s=>(d(),r("option",{key:"role"+s.id,value:s.id},y(s.name),9,Be))),128))],544),[[p,i.user.role_id]]),l(a,{field:"role_id"})])]),e("div",Se,[e("div",Ee,[De,n(e("select",{class:"form-control",onChange:t[9]||(t[9]=_((...s)=>o.search&&o.search(...s),["prevent"])),"onUpdate:modelValue":t[10]||(t[10]=s=>i.user.filial_id=s),placeholder:"Белсенді"},[Ie,(d(!0),r(h,null,b(i.filials,s=>(d(),r("option",{key:"filial"+s.id,value:s.id},y(s.name),9,Me))),128))],544),[[p,i.user.filial_id]]),l(a,{field:"filial_id"})])]),e("div",Ne,[e("div",Fe,[je,n(e("input",{type:i.auth_user.role_id!=1?"password":"text",class:"form-control","onUpdate:modelValue":t[11]||(t[11]=s=>i.user.real_password=s),name:"real_password",placeholder:"Құпия сөз"},null,8,He),[[T,i.user.real_password]]),l(a,{field:"real_password"})])])]),e("div",Pe,[e("div",Re,[e("div",qe,[ze,n(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[12]||(t[12]=s=>i.user.start_edu_date=s),required:""},null,512),[[c,i.user.start_edu_date]])])])]),e("div",Ge,[Je,e("button",{type:"button",class:"btn btn-danger",onClick:t[13]||(t[13]=_(s=>o.back(),["prevent"]))}," Артқа ")])])],32)])])]),_:1})],64)}const $e=B(S,[["render",Ke]]);export{$e as default};