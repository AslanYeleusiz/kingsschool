import{_ as y,A as g}from"./AdminLayout-a3b7c70b.js";import{L as w,H as O,r as j,o as r,e as i,b as V,w as v,F as u,a as e,f as a,g as n,j as c,i as _,v as m,l as x,t as h,d as b}from"./app-d2a1545d.js";import{P as k}from"./Pagination-9a7fdb59.js";import{V as C}from"./ValidationError-2bb79556.js";const P={components:{AdminLayout:g,Link:w,Pagination:k,ValidationError:C,Head:O},props:["edu_order","trainTypes","courseTypes","subjects","teachers","shifts","user_id"],data(){return{eduOrder:{price:this.edu_order.price},teacherOrders:this.trainTypes,subjectOrders:null}},methods:{calculatePrice(d=null){if(!this.edu_order.subject_id)return this.warningText("Предмет не выбран!",null);d?axios.get(`/subject/${this.edu_order.subject_id}/get-subject-order`).then(s=>{this.subjectOrders=s.data,this.eduOrder.price=this.subjectOrders.find(o=>o.course_type_id==this.edu_order.course_type_id&&o.shift_id==this.edu_order.shift_id&&o.train_type_id==this.edu_order.train_type_id).price}):this.eduOrder.price=this.subjectOrders.find(s=>s.course_type_id==this.edu_order.course_type_id&&s.shift_id==this.edu_order.shift_id&&s.train_type_id==this.edu_order.train_type_id).price},warningText(d,s="Барлық бағандар толтыру қажет!"){Swal.fire({title:d,text:s,icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Окей!"})},add28Days(){if(this.edu_order.start_date){const d=new Date(this.edu_order.start_date),s=new Date(d.getTime()+28*24*60*60*1e3);this.edu_order.end_date=s.toISOString().split("T")[0]}else console.error("Введите дату")},submit(){this.edu_order.price=this.eduOrder.price,this.$inertia.put(route("admin.studentsSubjects.update",[this.user_id,this.edu_order.id]),this.edu_order,{onError:()=>console.log("An errors has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},logme(d,s,o){console.log(d+" "+s+" "+o)}}},S=e("head",null,[e("title",null,"Админ панель | Изменить предмет")],-1),T={class:"row mb-2"},U=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"Изменить предмет")],-1),q={class:"col-sm-6"},D={class:"breadcrumb float-sm-right"},A={class:"breadcrumb-item"},B=["href"],L=e("i",{class:"fas fa-dashboard"},null,-1),E=b(" Главная страница "),M=[L,E],N={class:"breadcrumb-item"},F=["href"],H=e("i",{class:"fas fa-dashboard"},null,-1),I=b(" Предметы студента "),z=[H,I],G=e("li",{class:"breadcrumb-item active"}," Изменить предмет ",-1),J={class:"container-fluid"},K={class:"card card-primary"},Q={class:"card-body"},R={class:"row"},W={class:"col-md-4"},X={class:"form-group"},Y=e("label",{for:""},"Предмет",-1),Z=e("option",{value:"",disabled:"",selected:"",hidden:""}," Выбрать ",-1),$=["value"],ee={class:"col-md-4"},te={class:"form-group"},se=e("label",{for:""},"Преподаватель",-1),oe=e("option",{value:"",hidden:""}," Выбрать ",-1),de=["value"],re={class:"col-md-4"},ie={class:"form-group"},ne=e("label",{for:""},"Тип посещения",-1),le=e("option",{value:"",hidden:""}," Выбрать ",-1),ae=["value"],ue={class:"row"},ce={class:"col-md-4"},_e={class:"form-group"},he=e("label",{for:""},"Курс",-1),me=e("option",{value:null,hidden:""}," Выбрать ",-1),fe=["value"],ve={class:"col-md-4"},be={class:"form-group"},pe=e("label",{for:""},"Обучение",-1),ye=e("option",{value:null,hidden:""}," Выбрать ",-1),ge=["value"],we={class:"col-md-4"},Oe={class:"form-group"},je=e("label",{for:""},"Цена",-1),Ve={class:"row"},xe={class:"col-md-4"},ke={class:"form-group"},Ce=e("label",{for:""},"Дата начало обучения",-1),Pe={class:"col-md-4"},Se={class:"form-group"},Te=e("label",{for:""},"Дата конца обучения",-1),Ue={class:"col-md-4"},qe={class:"form-group"},De=e("label",{for:""},"Количество часов",-1),Ae={class:"form-group"},Be={class:"custom-control custom-switch"},Le=e("label",{class:"custom-control-label",for:"customSwitchA"},"Активный предмет",-1),Ee={class:"card-footer"},Me=e("button",{type:"submit",class:"btn btn-primary mr-1"}," Сақтау ",-1);function Ne(d,s,o,Fe,f,l){const p=j("AdminLayout");return r(),i(u,null,[S,V(p,null,{breadcrumbs:v(()=>[e("div",T,[U,e("div",q,[e("ol",D,[e("li",A,[e("a",{href:d.route("admin.index")},M,8,B)]),e("li",N,[e("a",{href:d.route("admin.studentsSubjects.index",this.user_id)},z,8,F)]),G])])])]),default:v(()=>[e("div",J,[e("div",K,[e("form",{method:"post",onSubmit:s[16]||(s[16]=a((...t)=>l.submit&&l.submit(...t),["prevent"]))},[e("div",Q,[e("div",R,[e("div",W,[e("div",X,[Y,n(e("select",{class:"form-control",onChange:s[0]||(s[0]=a(t=>l.calculatePrice(!0),["prevent"])),"onUpdate:modelValue":s[1]||(s[1]=t=>o.edu_order.subject_id=t),required:""},[Z,(r(!0),i(u,null,_(o.subjects,t=>(r(),i("option",{key:"subject"+t.id,value:t.id},h(t.name),9,$))),128))],544),[[c,o.edu_order.subject_id]])])]),e("div",ee,[e("div",te,[se,n(e("select",{class:"form-control","onUpdate:modelValue":s[2]||(s[2]=t=>o.edu_order.teacher_id=t),placeholder:"Выбрать",required:""},[oe,(r(!0),i(u,null,_(o.teachers,t=>(r(),i("option",{key:"teacher"+t.id,value:t.id},h(t.fio),9,de))),128))],512),[[c,o.edu_order.teacher_id]])])]),e("div",re,[e("div",ie,[ne,n(e("select",{class:"form-control","onUpdate:modelValue":s[3]||(s[3]=t=>o.edu_order.shift_id=t),onChange:s[4]||(s[4]=a(t=>l.calculatePrice(!0),["prevent"])),placeholder:"Выбрать",required:""},[le,(r(!0),i(u,null,_(o.shifts,t=>(r(),i("option",{key:"shift"+t.id,value:t.id},h(t.name),9,ae))),128))],544),[[c,o.edu_order.shift_id]])])])]),e("div",ue,[e("div",ce,[e("div",_e,[he,n(e("select",{class:"form-control",onChange:s[5]||(s[5]=a(t=>l.calculatePrice(!0),["prevent"])),"onUpdate:modelValue":s[6]||(s[6]=t=>o.edu_order.course_type_id=t),placeholder:"Выбрать",required:""},[me,(r(!0),i(u,null,_(o.courseTypes,t=>(r(),i("option",{key:"courseType"+t.id,value:t.id},h(t.name),9,fe))),128))],544),[[c,o.edu_order.course_type_id]])])]),e("div",ve,[e("div",be,[pe,n(e("select",{class:"form-control",onChange:s[7]||(s[7]=a(t=>l.calculatePrice(!0),["prevent"])),"onUpdate:modelValue":s[8]||(s[8]=t=>o.edu_order.train_type_id=t),placeholder:"Выбрать",required:""},[ye,(r(!0),i(u,null,_(o.trainTypes,t=>(r(),i("option",{key:"trainType"+t.id,value:t.id},h(t.name),9,ge))),128))],544),[[c,o.edu_order.train_type_id]])])]),e("div",we,[e("div",Oe,[je,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[9]||(s[9]=t=>f.eduOrder.price=t),name:"eduOrderPricePrice",placeholder:"Цена"},null,512),[[m,f.eduOrder.price]])])])]),e("div",Ve,[e("div",xe,[e("div",ke,[Ce,n(e("input",{type:"date",class:"form-control",onChange:s[10]||(s[10]=a(t=>l.add28Days(),["prevent"])),"onUpdate:modelValue":s[11]||(s[11]=t=>o.edu_order.start_date=t),name:"eduOrderPrice",required:""},null,544),[[m,o.edu_order.start_date]])])]),e("div",Pe,[e("div",Se,[Te,n(e("input",{type:"date",class:"form-control","onUpdate:modelValue":s[12]||(s[12]=t=>o.edu_order.end_date=t),name:"eduOrderPrice",required:""},null,512),[[m,o.edu_order.end_date]])])]),e("div",Ue,[e("div",qe,[De,n(e("input",{type:"number",class:"form-control","onUpdate:modelValue":s[13]||(s[13]=t=>o.edu_order.hours=t),name:"hours",required:""},null,512),[[m,o.edu_order.hours]])])])]),e("div",Ae,[e("div",Be,[n(e("input",{type:"checkbox","onUpdate:modelValue":s[14]||(s[14]=t=>o.edu_order.enable=t),class:"custom-control-input",id:"customSwitchA","true-value":"1","false-value":"0"},null,512),[[x,o.edu_order.enable]]),Le])])]),e("div",Ee,[Me,e("button",{type:"button",class:"btn btn-danger",onClick:s[15]||(s[15]=a(t=>d.back(),["prevent"]))}," Артқа ")])],32)])])]),_:1})],64)}const Je=y(P,[["render",Ne]]);export{Je as default};
