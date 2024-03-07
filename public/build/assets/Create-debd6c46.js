import{_ as O,A as j}from"./AdminLayout-40ee1a90.js";import{L as T,H as q,r as V,o as r,e as d,b as h,w as U,F as c,a as e,f as p,g as n,j as y,i as f,v as _,h as g,l as x,t as b,d as k}from"./app-15681a8f.js";import{P}from"./Pagination-43b649e4.js";import{V as D}from"./ValidationError-0be7aedf.js";const S={components:{AdminLayout:j,Link:T,Pagination:P,ValidationError:D,Head:q},props:["roles","filials","trainTypes","courseTypes","subjects","shifts"],data(){return{user:{image:"",role_id:"",filial_id:route().params.filial_id??null,start_date:null},image:{file:"",preview:""},eduOrders:[{subject_id:"",teacher_id:"",shift_id:1,course_type_id:1,train_type_id:1,price:0,start_date:null,end_date:null}],teachers:[],teacherOrders:this.trainTypes,subjectOrders:null,iin:"",check_iin:!1}},methods:{getTeachers(l){axios.get(route("admin.filials.getTeachers",l)).then(o=>{this.teachers=o.data})},warningText(l,o="Барлық бағандар толтыру қажет!"){Swal.fire({title:l,text:o,icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Окей!"})},deleteOrder(l){this.eduOrders.splice(l,1)},calculatePrice(l,o=null){if(!this.eduOrders[l].subject_id)return this.warningText("Предмет не выбран!",null);o?axios.get(`/subject/${this.eduOrders[l].subject_id}/get-subject-order`).then(a=>{this.subjectOrders=a.data,this.eduOrders[l].price=this.subjectOrders.find(w=>w.course_type_id==this.eduOrders[l].course_type_id&&w.shift_id==this.eduOrders[l].shift_id&&w.train_type_id==this.eduOrders[l].train_type_id).price}):this.eduOrders[l].price=this.subjectOrders.find(a=>a.course_type_id==this.eduOrders[l].course_type_id&&a.shift_id==this.eduOrders[l].shift_id&&a.train_type_id==this.eduOrders[l].train_type_id).price},add28Days(l){if(this.eduOrders[l].start_date){const o=new Date(this.eduOrders[l].start_date),a=new Date(o.getTime()+28*24*60*60*1e3);this.eduOrders[l].end_date=a.toISOString().split("T")[0]}else console.error("Введите дату")},addEduOrder(){const l={subject_id:"",teacher_id:"",course_type_id:1,train_type_id:1,shift_id:1,price:0,start_date:null,end_date:null};this.eduOrders.push(l)},submit(){if(this.user.iin=this.iin,this.image.file&&(this.user.image=this.image.file),!this.user.role_id)return this.warningText("Роль тандалмады!");if(!this.user.filial_id)return this.warningText("Филиал тандалмады!");this.user.role_id==4&&(this.user.eduOrders=this.eduOrders),this.user.role_id==3&&(this.user.eduOrders=this.teacherOrders),this.$inertia.post(route("admin.users.store"),this.user,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},handleImageUpload(){if(this.image.file=this.$refs.image.files[0],this.image.file){const l=new FileReader;l.onloadend=o=>{this.image.preview=l.result},l.readAsDataURL(this.image.file),this.$refs.image.value=""}else this.user.image="",this.image.file="",this.image.preview=""},checkIin(){this.check_iin=1,axios.get("/admin/check-iin",{params:{iin:this.iin}}).then(l=>{l.data.status==!0&&this.warningText("Бұндай ИИН бұрын тіркелген",null),console.log(l.data),this.check_iin=0})}},watch:{iin(l){l.length===12&&this.checkIin()}}},L=e("head",null,[e("title",null,"Админ панель | Қолданушы қосу")],-1),A={class:"row mb-2"},B=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"Қолданушы қосу")],-1),E={class:"col-sm-6"},I={class:"breadcrumb float-sm-right"},N={class:"breadcrumb-item"},F=["href"],M=e("i",{class:"fas fa-dashboard"},null,-1),H=k(" Басты бет "),R=[M,H],z={class:"breadcrumb-item"},G=["href"],J=e("i",{class:"fas fa-dashboard"},null,-1),K=k(" Қолданушы тізімі "),Q=[J,K],W=e("li",{class:"breadcrumb-item active"}," Қолданушы қосу ",-1),X={class:"container-fluid"},Y={class:"card card-primary"},Z={class:"card-body"},$={class:"row"},ee={class:"col-md-4"},se={class:"form-group"},te=e("label",{for:""},"Роль",-1),oe=e("option",{value:"",hidden:""}," Роль таңдаңыз ",-1),ie=["value"],le={class:"col-md-4"},re={class:"form-group"},de=e("label",{for:""},"Филлиал",-1),ne=e("option",{value:null,hidden:"",disabled:"",selected:""}," Филлиал таңдаңыз ",-1),ae=["value"],ce={key:0,class:"col-md-4"},_e={class:"form-group"},ue=e("label",{for:""},"Құпия сөз",-1),he={class:"row"},me={class:"col-md-4"},pe={class:"form-group"},fe=e("label",{for:""},"ИИН",-1),ve={class:"col-md-4"},ge={key:0,class:"spinner-border text-primary matop",role:"status"},be={class:"row"},ye={class:"col-md-4"},we={class:"form-group"},Ve=e("label",{for:""},"Фамилия",-1),Ue={class:"col-md-4"},ke={class:"form-group"},Ce=e("label",{for:""},"Имя",-1),Oe={class:"row"},je={class:"col-md-4"},Te={class:"form-group"},qe=e("label",{for:""},"Дата рожденья",-1),xe={class:"col-md-4"},Pe={class:"form-group"},De=e("label",{for:""},"Телефон",-1),Se={key:0,class:"col-md-4"},Le={class:"form-group"},Ae=e("label",{for:""},"Телефон родителя",-1),Be={class:"form-group file-upload"},Ee=e("label",{for:""},"Сурет",-1),Ie={class:"ml-2"},Ne=["src"],Fe=["src"],Me={class:"file-input",style:{"margin-right":"10px"}},He=e("label",{for:"image"}," Загрузить ",-1),Re={key:0,class:"mt-5"},ze=e("hr",null,null,-1),Ge={class:"row"},Je={class:"col-md-4"},Ke={class:"form-group"},Qe=e("label",{for:""},"Предмет",-1),We=["onChange","onUpdate:modelValue"],Xe=e("option",{value:"",hidden:""}," Выбрать ",-1),Ye=["value"],Ze={class:"col-md-4"},$e={class:"form-group"},es=e("label",{for:""},"Преподаватель",-1),ss=["onUpdate:modelValue"],ts=e("option",{value:"",hidden:""}," Выбрать ",-1),os=["value"],is={class:"col-md-4"},ls={class:"form-group"},rs=e("label",{for:""},"Тип посещения",-1),ds=["onUpdate:modelValue","onChange"],ns=e("option",{value:"",hidden:""}," Выбрать ",-1),as=["value"],cs={class:"row"},_s={class:"col-md-4"},us={class:"form-group"},hs=e("label",{for:""},"Курс",-1),ms=["onChange","onUpdate:modelValue"],ps=e("option",{value:null,hidden:""}," Выбрать ",-1),fs=["value"],vs={class:"col-md-4"},gs={class:"form-group"},bs=e("label",{for:""},"Обучение",-1),ys=["onChange","onUpdate:modelValue"],ws=e("option",{value:null,hidden:""}," Выбрать ",-1),Vs=["value"],Us={class:"col-md-4"},ks={class:"form-group"},Cs=e("label",{for:""},"Цена",-1),Os=["onUpdate:modelValue"],js={class:"row"},Ts={class:"col-md-4"},qs={class:"form-group"},xs=e("label",{for:""},"Дата начало обучения",-1),Ps=["onChange","onUpdate:modelValue"],Ds={class:"col-md-4"},Ss={class:"form-group"},Ls=e("label",{for:""},"Дата конца обучения",-1),As=["onUpdate:modelValue"],Bs={class:"d-flex justify-content-end"},Es=["onClick"],Is=e("i",{class:"fas fa-times"},null,-1),Ns=[Is],Fs={class:"row"},Ms={class:"col-md-5"},Hs={class:"form-group"},Rs=e("label",{for:""},"Дата начала обучения",-1),zs={class:"row"},Gs={class:"col-md-5"},Js={class:"form-group"},Ks=e("label",{for:""},"Зарплата",-1),Qs={class:"input-group mt-3"},Ws={class:"input-group-prepend"},Xs={class:"input-group-text",id:"basic-addon3"},Ys=["onUpdate:modelValue"],Zs=e("div",{class:"input-group-append"},[e("span",{class:"input-group-text"},"%")],-1),$s={class:"card-footer mt-5"},et=e("button",{type:"submit",class:"btn btn-success mr-1"}," Сақтау ",-1);function st(l,o,a,w,i,u){const m=V("validation-error"),C=V("AdminLayout");return r(),d(c,null,[L,h(C,null,{breadcrumbs:U(()=>[e("div",A,[B,e("div",E,[e("ol",I,[e("li",N,[e("a",{href:l.route("admin.index")},R,8,F)]),e("li",z,[e("a",{href:l.route("admin.users.index")},Q,8,G)]),W])])])]),default:U(()=>[e("div",X,[e("div",Y,[e("form",{method:"post",onSubmit:o[14]||(o[14]=p((...s)=>u.submit&&u.submit(...s),["prevent"]))},[e("div",Z,[e("div",$,[e("div",ee,[e("div",se,[te,n(e("select",{class:"form-control","onUpdate:modelValue":o[0]||(o[0]=s=>i.user.role_id=s),placeholder:"Белсенді",required:""},[oe,(r(!0),d(c,null,f(a.roles,s=>(r(),d("option",{key:"role"+s.id,value:s.id},b(s.name),9,ie))),128))],512),[[y,i.user.role_id]]),h(m,{field:"role_id"})])]),e("div",le,[e("div",re,[de,n(e("select",{class:"form-control","onUpdate:modelValue":o[1]||(o[1]=s=>i.user.filial_id=s),placeholder:"Белсенді",required:"",onChange:o[2]||(o[2]=p(s=>u.getTeachers(i.user.filial_id),["prevent"]))},[ne,(r(!0),d(c,null,f(a.filials,s=>(r(),d("option",{key:"filial"+s.id,value:s.id},b(s.name),9,ae))),128))],544),[[y,i.user.filial_id]]),h(m,{field:"filial_id"})])]),i.user.role_id!=4?(r(),d("div",ce,[e("div",_e,[ue,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=s=>i.user.real_password=s),name:"real_password",placeholder:"Құпия сөз"},null,512),[[_,i.user.real_password]]),h(m,{field:"real_password"})])])):g("",!0)]),e("div",he,[e("div",me,[e("div",pe,[fe,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=s=>i.iin=s),name:"iin",placeholder:"ИИН",required:"",maxlength:"12"},null,512),[[_,i.iin]]),h(m,{field:"iin"})])]),e("div",ve,[i.check_iin?(r(),d("div",ge)):g("",!0)])]),e("div",be,[e("div",ye,[e("div",we,[Ve,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[5]||(o[5]=s=>i.user.s_name=s),name:"s_name",placeholder:"Фамилия",required:""},null,512),[[_,i.user.s_name]]),h(m,{field:"s_name"})])]),e("div",Ue,[e("div",ke,[Ce,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[6]||(o[6]=s=>i.user.name=s),name:"name",placeholder:"Имя",required:""},null,512),[[_,i.user.name]]),h(m,{field:"name"})])])]),e("div",Oe,[e("div",je,[e("div",Te,[qe,n(e("input",{type:"date",class:"form-control","onUpdate:modelValue":o[7]||(o[7]=s=>i.user.birthday=s),name:"birthday",placeholder:"Фамилия",required:""},null,512),[[_,i.user.birthday]]),h(m,{field:"birthday"})])]),e("div",xe,[e("div",Pe,[De,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[8]||(o[8]=s=>i.user.tel_num=s),name:"tel_num",placeholder:"Номер телефона",required:""},null,512),[[_,i.user.tel_num]]),h(m,{field:"tel_num"})])]),i.user.role_id==4?(r(),d("div",Se,[e("div",Le,[Ae,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[9]||(o[9]=s=>i.user.tel_num_family=s),name:"tel_num_family",placeholder:"Телефон родителя"},null,512),[[_,i.user.tel_num_family]]),h(m,{field:"tel_num_family"})])])):g("",!0)]),e("div",Be,[Ee,e("div",Ie,[i.user.image&&!i.image.file?(r(),d("img",{key:0,src:l.route("index")+"/storage/images/"+i.user.image,height:"300",alt:"image",style:{"padding-bottom":"10px"}},null,8,Ne)):g("",!0),n(e("img",{src:i.image.preview,height:"300",style:{"padding-bottom":"10px"}},null,8,Fe),[[x,i.image.preview]]),e("div",Me,[e("input",{type:"file",hidden:"",name:"image",onChange:o[10]||(o[10]=s=>u.handleImageUpload()),ref:"image",accept:"image/jpeg,image/png",class:"file",id:"image"},null,544),He])]),h(m,{field:"image"})]),i.user.role_id==3||i.user.role_id==4?(r(),d("h2",Re,"Обучение")):g("",!0),i.user.role_id==4?(r(!0),d(c,{key:1},f(i.eduOrders,(s,v)=>(r(),d(c,null,[ze,e("div",Ge,[e("div",Je,[e("div",Ke,[Qe,n(e("select",{class:"form-control",onChange:p(t=>u.calculatePrice(v,!0),["prevent"]),"onUpdate:modelValue":t=>s.subject_id=t,placeholder:"Выбрать",required:""},[Xe,(r(!0),d(c,null,f(a.subjects,t=>(r(),d("option",{key:"subject"+t.id,value:t.id},b(t.name),9,Ye))),128))],40,We),[[y,s.subject_id]])])]),e("div",Ze,[e("div",$e,[es,n(e("select",{class:"form-control","onUpdate:modelValue":t=>s.teacher_id=t,placeholder:"Выбрать",required:""},[ts,(r(!0),d(c,null,f(i.teachers,t=>(r(),d("option",{key:"teacher"+t.id,value:t.id},b(t.fio),9,os))),128))],8,ss),[[y,s.teacher_id]])])]),e("div",is,[e("div",ls,[rs,n(e("select",{class:"form-control","onUpdate:modelValue":t=>s.shift_id=t,onChange:p(t=>u.calculatePrice(v),["prevent"]),placeholder:"Выбрать",required:""},[ns,(r(!0),d(c,null,f(a.shifts,t=>(r(),d("option",{key:"shift"+t.id,value:t.id},b(t.name),9,as))),128))],40,ds),[[y,s.shift_id]])])])]),e("div",cs,[e("div",_s,[e("div",us,[hs,n(e("select",{class:"form-control",onChange:p(t=>u.calculatePrice(v),["prevent"]),"onUpdate:modelValue":t=>s.course_type_id=t,placeholder:"Выбрать",required:""},[ps,(r(!0),d(c,null,f(a.courseTypes,t=>(r(),d("option",{key:"courseType"+t.id,value:t.id},b(t.name),9,fs))),128))],40,ms),[[y,s.course_type_id]])])]),e("div",vs,[e("div",gs,[bs,n(e("select",{class:"form-control",onChange:p(t=>u.calculatePrice(v),["prevent"]),"onUpdate:modelValue":t=>s.train_type_id=t,placeholder:"Выбрать",required:""},[ws,(r(!0),d(c,null,f(a.trainTypes,t=>(r(),d("option",{key:"trainType"+t.id,value:t.id},b(t.name),9,Vs))),128))],40,ys),[[y,s.train_type_id]])])]),e("div",Us,[e("div",ks,[Cs,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t=>s.price=t,name:"eduOrderPrice",placeholder:"Цена"},null,8,Os),[[_,s.price]])])])]),e("div",js,[e("div",Ts,[e("div",qs,[xs,n(e("input",{type:"date",class:"form-control",onChange:p(t=>u.add28Days(v),["prevent"]),"onUpdate:modelValue":t=>s.start_date=t,name:"eduOrderPrice",required:""},null,40,Ps),[[_,s.start_date]])])]),e("div",Ds,[e("div",Ss,[Ls,n(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t=>s.end_date=t,name:"eduOrderPrice",required:""},null,8,As),[[_,s.end_date]])])])]),e("div",Bs,[e("button",{onClick:p(t=>u.deleteOrder(v),["prevent"]),class:"btn btn-danger mt-4"},Ns,8,Es)])],64))),256)):g("",!0),i.user.role_id==4?(r(),d("button",{key:2,onClick:o[11]||(o[11]=p(s=>u.addEduOrder(),["prevent"])),class:"btn btn-primary mt-4"}," + Добавить обучения ")):g("",!0),i.user.role_id==3?(r(),d(c,{key:3},[e("div",Fs,[e("div",Ms,[e("div",Hs,[Rs,n(e("input",{type:"date",class:"form-control","onUpdate:modelValue":o[12]||(o[12]=s=>i.user.start_edu_date=s),required:""},null,512),[[_,i.user.start_edu_date]])])])]),e("div",zs,[e("div",Gs,[e("div",Js,[Ks,(r(!0),d(c,null,f(i.teacherOrders,s=>(r(),d("div",Qs,[e("div",Ws,[e("span",Xs,b(s.name),1)]),n(e("input",{type:"number",class:"form-control","onUpdate:modelValue":v=>s.percent=v,"aria-describedby":"basic-addon3",style:{"text-align":"right"},required:""},null,8,Ys),[[_,s.percent]]),Zs]))),256))])])])],64)):g("",!0),e("div",$s,[et,e("button",{type:"button",class:"btn btn-danger",onClick:o[13]||(o[13]=p(s=>l.back(),["prevent"]))}," Артқа ")])])],32)])])]),_:1})],64)}const rt=O(S,[["render",st]]);export{rt as default};