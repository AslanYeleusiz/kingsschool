import{A as O}from"./AdminLayout-4103f48c.js";import{L as y,H as g,a as j,o as i,c as n,d as w,w as f,F as c,e,f as u,g as l,l as _,j as h,v as p,t as m,h as v}from"./app-9ffddd28.js";import{P as V}from"./Pagination-53a04694.js";import{V as x}from"./ValidationError-271a82fa.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const T={components:{AdminLayout:O,Link:y,Pagination:V,ValidationError:x,Head:g},props:["trainTypes","courseTypes","subjects","teachers","shifts","user_id"],data(){return{eduOrder:{subject_id:"",teacher_id:"",shift_id:1,course_type_id:1,train_type_id:1,price:0,start_date:null,end_date:null},teacherOrders:this.trainTypes,subjectOrders:null}},methods:{calculatePrice(r=null){if(!this.eduOrder.subject_id)return this.warningText("Предмет не выбран!",null);r?axios.get(`/subject/${this.eduOrder.subject_id}/get-subject-order`).then(s=>{this.subjectOrders=s.data,this.eduOrder.price=this.subjectOrders.find(d=>d.course_type_id==this.eduOrder.course_type_id&&d.shift_id==this.eduOrder.shift_id&&d.train_type_id==this.eduOrder.train_type_id).price}):this.eduOrder.price=this.subjectOrders.find(s=>s.course_type_id==this.eduOrder.course_type_id&&s.shift_id==this.eduOrder.shift_id&&s.train_type_id==this.eduOrder.train_type_id).price},warningText(r,s="Барлық бағандар толтыру қажет!"){Swal.fire({title:r,text:s,icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Окей!"})},add28Days(){if(this.eduOrder.start_date){const r=new Date(this.eduOrder.start_date),s=new Date(r.getTime()+28*24*60*60*1e3);this.eduOrder.end_date=s.toISOString().split("T")[0]}else console.error("Введите дату")},submit(){this.$inertia.post(route("admin.studentsSubjects.store",this.user_id),this.eduOrder,{onError:()=>console.log("An errors has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},logme(r,s,d){console.log(r+" "+s+" "+d)}}},k=e("head",null,[e("title",null,"Админ панель | Добавить предмет")],-1),P={class:"row mb-2"},S=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"Добавить предмет")],-1),D={class:"col-sm-6"},U={class:"breadcrumb float-sm-right"},q={class:"breadcrumb-item"},B=["href"],L=e("i",{class:"fas fa-dashboard"},null,-1),A=v(" Главная страница "),E=[L,A],M={class:"breadcrumb-item"},N=["href"],F=e("i",{class:"fas fa-dashboard"},null,-1),H=v(" Предметы студента "),I=[F,H],z=e("li",{class:"breadcrumb-item active"}," Добавить предмет ",-1),G={class:"container-fluid"},J={class:"card card-primary"},K={class:"card-body"},Q={class:"row"},R={class:"col-md-4"},W={class:"form-group"},X=e("label",{for:""},"Предмет",-1),Y=e("option",{value:"",disabled:"",selected:"",hidden:""}," Выбрать ",-1),Z=["value"],$={class:"col-md-4"},ee={class:"form-group"},te=e("label",{for:""},"Преподаватель",-1),se=e("option",{value:"",hidden:""}," Выбрать ",-1),oe=["value"],re={class:"col-md-4"},de={class:"form-group"},ie=e("label",{for:""},"Тип посещения",-1),ne=e("option",{value:"",hidden:""}," Выбрать ",-1),le=["value"],ae={class:"row"},ue={class:"col-md-4"},ce={class:"form-group"},_e=e("label",{for:""},"Курс",-1),he=e("option",{value:null,hidden:""}," Выбрать ",-1),me=["value"],pe={class:"col-md-4"},fe={class:"form-group"},ve=e("label",{for:""},"Обучение",-1),be=e("option",{value:null,hidden:""}," Выбрать ",-1),Oe=["value"],ye={class:"col-md-4"},ge={class:"form-group"},je=e("label",{for:""},"Цена",-1),we={class:"row"},Ve={class:"col-md-4"},xe={class:"form-group"},Ce=e("label",{for:""},"Дата начало обучения",-1),Te={class:"col-md-4"},ke={class:"form-group"},Pe=e("label",{for:""},"Дата конца обучения",-1),Se={class:"card-footer"},De=e("button",{type:"submit",class:"btn btn-primary mr-1"}," Сақтау ",-1);function Ue(r,s,d,qe,o,a){const b=j("AdminLayout");return i(),n(c,null,[k,w(b,null,{breadcrumbs:f(()=>[e("div",P,[S,e("div",D,[e("ol",U,[e("li",q,[e("a",{href:r.route("admin.index")},E,8,B)]),e("li",M,[e("a",{href:r.route("admin.studentsSubjects.index",this.user_id)},I,8,N)]),z])])])]),default:f(()=>[e("div",G,[e("div",J,[e("form",{method:"post",onSubmit:s[14]||(s[14]=u((...t)=>a.submit&&a.submit(...t),["prevent"]))},[e("div",K,[e("div",Q,[e("div",R,[e("div",W,[X,l(e("select",{class:"form-control",onChange:s[0]||(s[0]=u(t=>a.calculatePrice(!0),["prevent"])),"onUpdate:modelValue":s[1]||(s[1]=t=>o.eduOrder.subject_id=t),required:""},[Y,(i(!0),n(c,null,h(d.subjects,t=>(i(),n("option",{key:"subject"+t.id,value:t.id},m(t.name),9,Z))),128))],544),[[_,o.eduOrder.subject_id]])])]),e("div",$,[e("div",ee,[te,l(e("select",{class:"form-control","onUpdate:modelValue":s[2]||(s[2]=t=>o.eduOrder.teacher_id=t),placeholder:"Выбрать",required:""},[se,(i(!0),n(c,null,h(d.teachers,t=>(i(),n("option",{key:"teacher"+t.id,value:t.id},m(t.fio),9,oe))),128))],512),[[_,o.eduOrder.teacher_id]])])]),e("div",re,[e("div",de,[ie,l(e("select",{class:"form-control","onUpdate:modelValue":s[3]||(s[3]=t=>o.eduOrder.shift_id=t),onChange:s[4]||(s[4]=u(t=>a.calculatePrice(),["prevent"])),placeholder:"Выбрать",required:""},[ne,(i(!0),n(c,null,h(d.shifts,t=>(i(),n("option",{key:"shift"+t.id,value:t.id},m(t.name),9,le))),128))],544),[[_,o.eduOrder.shift_id]])])])]),e("div",ae,[e("div",ue,[e("div",ce,[_e,l(e("select",{class:"form-control",onChange:s[5]||(s[5]=u(t=>a.calculatePrice(),["prevent"])),"onUpdate:modelValue":s[6]||(s[6]=t=>o.eduOrder.course_type_id=t),placeholder:"Выбрать",required:""},[he,(i(!0),n(c,null,h(d.courseTypes,t=>(i(),n("option",{key:"courseType"+t.id,value:t.id},m(t.name),9,me))),128))],544),[[_,o.eduOrder.course_type_id]])])]),e("div",pe,[e("div",fe,[ve,l(e("select",{class:"form-control",onChange:s[7]||(s[7]=u(t=>a.calculatePrice(),["prevent"])),"onUpdate:modelValue":s[8]||(s[8]=t=>o.eduOrder.train_type_id=t),placeholder:"Выбрать",required:""},[be,(i(!0),n(c,null,h(d.trainTypes,t=>(i(),n("option",{key:"trainType"+t.id,value:t.id},m(t.name),9,Oe))),128))],544),[[_,o.eduOrder.train_type_id]])])]),e("div",ye,[e("div",ge,[je,l(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[9]||(s[9]=t=>o.eduOrder.price=t),name:"eduOrderPrice",placeholder:"Цена"},null,512),[[p,o.eduOrder.price]])])])]),e("div",we,[e("div",Ve,[e("div",xe,[Ce,l(e("input",{type:"date",class:"form-control",onChange:s[10]||(s[10]=u(t=>a.add28Days(),["prevent"])),"onUpdate:modelValue":s[11]||(s[11]=t=>o.eduOrder.start_date=t),name:"eduOrderPrice",required:""},null,544),[[p,o.eduOrder.start_date]])])]),e("div",Te,[e("div",ke,[Pe,l(e("input",{type:"date",class:"form-control","onUpdate:modelValue":s[12]||(s[12]=t=>o.eduOrder.end_date=t),name:"eduOrderPrice",required:""},null,512),[[p,o.eduOrder.end_date]])])])])]),e("div",Se,[De,e("button",{type:"button",class:"btn btn-danger",onClick:s[13]||(s[13]=u(t=>r.back(),["prevent"]))}," Артқа ")])],32)])])]),_:1})],64)}const Ne=C(T,[["render",Ue]]);export{Ne as default};
