import{_ as k,A as U}from"./AdminLayout-e2a9f783.js";import{L as C,H as T,r as v,o as d,e as r,b as n,w as b,F as u,a as e,f as m,g as l,v as c,h as f,p as L,j as y,i as g,z as A,t as p,d as w}from"./app-76f5f351.js";import{P as B}from"./Pagination-6b5293cb.js";import{V as S}from"./ValidationError-94dfb222.js";const E={components:{AdminLayout:U,Link:C,Pagination:B,ValidationError:S,Head:T},props:["roles","filials","user","auth_user"],data(){return{image:{file:"",preview:""},check_iin:!1,iin:this.user.iin}},methods:{warningText(i,t="Все поля должны быть заполнены!"){Swal.fire({title:i,text:t,icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Окей!"})},submit(){if(this.user.iin=this.iin,this.image.file&&(this.user.image=this.image.file),!this.user.role_id)return this.warningText("Роль не выбран!");if(!this.user.filial_id)return this.warningText("Филиал не выбран!");this.user._method="put",this.$inertia.post(route("admin.users.update",this.user.id),this.user,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},handleImageUpload(){if(this.image.file=this.$refs.image.files[0],this.image.file){const i=new FileReader;i.onloadend=t=>{this.image.preview=i.result},i.readAsDataURL(this.image.file),this.$refs.image.value=""}else this.user.image="",this.image.file="",this.image.preview=""},checkIin(){this.check_iin=1,axios.get("/admin/check-iin",{params:{iin:this.iin}}).then(i=>{i.data.status==!0&&this.warningText("Такой ИИН уже был зарегестрирован",null),console.log(i.data),this.check_iin=0})}},watch:{iin(i){i.length===12&&this.iin!=this.user.iin&&this.checkIin()}}},D=e("head",null,[e("title",null,"Админ панель | Изменить пользователя")],-1),I={class:"row mb-2"},M=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"Изменить пользователя")],-1),N={class:"col-sm-6"},F={class:"breadcrumb float-sm-right"},j={class:"breadcrumb-item"},q=["href"],H=e("i",{class:"fas fa-dashboard"},null,-1),P=w(" Главная страница "),R=[H,P],z={class:"breadcrumb-item"},G=["href"],J=e("i",{class:"fas fa-dashboard"},null,-1),K=w(" Список пользователей "),Q=[J,K],W=e("li",{class:"breadcrumb-item active"}," Изменить пользователя ",-1),X={class:"container-fluid"},Y={class:"card card-primary"},Z={class:"card-body"},O={class:"row"},$={class:"col-md-4"},ee={class:"form-group"},se=e("label",{for:""},"ИИН",-1),te={class:"row"},oe={class:"col-md-4"},ie={class:"form-group"},le=e("label",{for:""},"Фамилия",-1),ne={class:"col-md-4"},ae={class:"form-group"},de=e("label",{for:""},"Имя",-1),re={class:"row"},ce={class:"col-md-4"},_e={class:"form-group"},ue=e("label",{for:""},"Дата рожденья",-1),me={class:"col-md-4"},he={class:"form-group"},fe=e("label",{for:""},"Телефон",-1),ge={key:0,class:"col-md-4"},pe={class:"form-group"},ve=e("label",{for:""},"Телефон родителя",-1),be={class:"form-group file-upload"},ye=e("label",{for:""},"Аватар",-1),we={class:"ml-2"},xe=["src"],Ve=["src"],ke={class:"file-input",style:{"margin-right":"10px"}},Ue=e("label",{for:"image"}," Загрузить ",-1),Ce={class:"row"},Te={class:"col-md-4"},Le={class:"form-group"},Ae=e("label",{for:""},"Айди карточки",-1),Be={class:"row"},Se={class:"col-md-4"},Ee={class:"form-group"},De=e("label",{for:""},"Роль",-1),Ie=e("option",{value:null,hidden:""}," Выберите роль ",-1),Me=["value"],Ne={class:"col-md-4"},Fe={class:"form-group"},je=e("label",{for:""},"Филиал",-1),qe=e("option",{value:null,hidden:""}," Выберите филиал ",-1),He=["value"],Pe={class:"col-md-4"},Re={class:"form-group"},ze=e("label",{for:""},"Пароль",-1),Ge=["type"],Je={class:"row"},Ke={class:"col-md-5"},Qe={class:"form-group"},We=e("label",{for:""},"Дата начала обучения",-1),Xe={class:"row"},Ye={class:"col-md-5"},Ze={class:"form-group"},Oe=e("label",{for:""},"Зарплата",-1),$e={class:"input-group mt-3"},es={class:"input-group-prepend"},ss={class:"input-group-text",id:"basic-addon3"},ts=["onUpdate:modelValue"],os=e("div",{class:"input-group-append"},[e("span",{class:"input-group-text"},"%")],-1),is={class:"card-footer"},ls=e("button",{type:"submit",class:"btn btn-primary mr-1"}," Сохранить ",-1);function ns(i,t,o,as,_,h){const a=v("validation-error"),x=v("AdminLayout");return d(),r(u,null,[D,n(x,null,{breadcrumbs:b(()=>[e("div",I,[M,e("div",N,[e("ol",F,[e("li",j,[e("a",{href:i.route("admin.index")},R,8,q)]),e("li",z,[e("a",{href:i.route("admin.users.index")},Q,8,G)]),W])])])]),default:b(()=>[e("div",X,[e("div",Y,[e("form",{method:"post",onSubmit:t[15]||(t[15]=m((...s)=>h.submit&&h.submit(...s),["prevent"]))},[e("div",Z,[e("div",O,[e("div",$,[e("div",ee,[se,l(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>_.iin=s),name:"iin",placeholder:"ИИН",maxlength:"12"},null,512),[[c,_.iin]]),n(a,{field:"iin"})])])]),e("div",te,[e("div",oe,[e("div",ie,[le,l(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>o.user.s_name=s),name:"s_name",placeholder:"Фамилия"},null,512),[[c,o.user.s_name]]),n(a,{field:"s_name"})])]),e("div",ne,[e("div",ae,[de,l(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=s=>o.user.name=s),name:"name",placeholder:"Имя"},null,512),[[c,o.user.name]]),n(a,{field:"name"})])])]),e("div",re,[e("div",ce,[e("div",_e,[ue,l(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=s=>o.user.birthday=s),name:"birthday",placeholder:"Фамилия"},null,512),[[c,o.user.birthday]]),n(a,{field:"birthday"})])]),e("div",me,[e("div",he,[fe,l(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=s=>o.user.tel_num=s),name:"tel_num",placeholder:"Имя"},null,512),[[c,o.user.tel_num]]),n(a,{field:"tel_num"})])]),o.user.role_id==4?(d(),r("div",ge,[e("div",pe,[ve,l(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=s=>o.user.tel_num_family=s),name:"tel_num_family",placeholder:"Телефон родителя"},null,512),[[c,o.user.tel_num_family]]),n(a,{field:"tel_num_family"})])])):f("",!0)]),e("div",be,[ye,e("div",we,[o.user.avatar&&!_.image.file?(d(),r("img",{key:0,src:i.route("index")+"/storage/files/"+o.user.avatar,height:"300",alt:"image",style:{"padding-bottom":"10px"}},null,8,xe)):f("",!0),l(e("img",{src:_.image.preview,height:"300",style:{"padding-bottom":"10px"}},null,8,Ve),[[L,_.image.preview]]),e("div",ke,[e("input",{type:"file",hidden:"",name:"image",onChange:t[6]||(t[6]=s=>h.handleImageUpload()),ref:"image",accept:"image/jpeg,image/png",class:"file",id:"image"},null,544),Ue])]),n(a,{field:"image"})]),e("div",Ce,[e("div",Te,[e("div",Le,[Ae,l(e("input",{type:"number",class:"form-control","onUpdate:modelValue":t[7]||(t[7]=s=>o.user.card_id=s),name:"card_id",placeholder:"Айди"},null,512),[[c,o.user.card_id]]),n(a,{field:"card_id"})])])]),e("div",Be,[e("div",Se,[e("div",Ee,[De,l(e("select",{class:"form-control",onChange:t[8]||(t[8]=m((...s)=>i.search&&i.search(...s),["prevent"])),"onUpdate:modelValue":t[9]||(t[9]=s=>o.user.role_id=s),placeholder:"Белсенді"},[Ie,(d(!0),r(u,null,g(o.roles,s=>(d(),r("option",{key:"role"+s.id,value:s.id},p(s.name),9,Me))),128))],544),[[y,o.user.role_id]]),n(a,{field:"role_id"})])]),e("div",Ne,[e("div",Fe,[je,l(e("select",{class:"form-control",onChange:t[10]||(t[10]=m((...s)=>i.search&&i.search(...s),["prevent"])),"onUpdate:modelValue":t[11]||(t[11]=s=>o.user.filial_id=s),placeholder:"Белсенді"},[qe,(d(!0),r(u,null,g(o.filials,s=>(d(),r("option",{key:"filial"+s.id,value:s.id},p(s.name),9,He))),128))],544),[[y,o.user.filial_id]]),n(a,{field:"filial_id"})])]),e("div",Pe,[e("div",Re,[ze,l(e("input",{type:o.auth_user.role_id!=1?"password":"text",class:"form-control","onUpdate:modelValue":t[12]||(t[12]=s=>o.user.real_password=s),name:"real_password",placeholder:"Пароль"},null,8,Ge),[[A,o.user.real_password]]),n(a,{field:"real_password"})])])]),o.user.role_id==3?(d(),r(u,{key:0},[e("div",Je,[e("div",Ke,[e("div",Qe,[We,l(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[13]||(t[13]=s=>o.user.start_edu_date=s),required:""},null,512),[[c,o.user.start_edu_date]])])])]),e("div",Xe,[e("div",Ye,[e("div",Ze,[Oe,(d(!0),r(u,null,g(o.user.salary_orders,s=>(d(),r("div",$e,[e("div",es,[e("span",ss,p(s.train_type.name),1)]),l(e("input",{type:"number",class:"form-control","onUpdate:modelValue":V=>s.percent=V,"aria-describedby":"basic-addon3",style:{"text-align":"right"},required:""},null,8,ts),[[c,s.percent]]),os]))),256))])])])],64)):f("",!0),e("div",is,[ls,e("button",{type:"button",class:"btn btn-danger",onClick:t[14]||(t[14]=m(s=>i.back(),["prevent"]))}," Назад ")])])],32)])])]),_:1})],64)}const us=k(E,[["render",ns]]);export{us as default};
