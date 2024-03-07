import{_ as y,A as g}from"./AdminLayout.4c8d68b7.js";import{L as O,H as w,r as j,o as r,a as i,e as V,w as v,F as u,b as e,k as a,l as n,p as _,f as c,v as m,t as h,d as b}from"./app.205b37dc.js";import{P as k}from"./Pagination.ed6170d5.js";import{V as x}from"./ValidationError.135a32c1.js";const P={components:{AdminLayout:g,Link:O,Pagination:k,ValidationError:x,Head:w},props:["edu_order","trainTypes","courseTypes","subjects","teachers","shifts","user_id"],data(){return{eduOrder:{price:this.edu_order.price},teacherOrders:this.trainTypes,subjectOrders:null}},methods:{calculatePrice(d=null){if(!this.edu_order.subject_id)return this.warningText("\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D!",null);d?axios.get(`/subject/${this.edu_order.subject_id}/get-subject-order`).then(s=>{this.subjectOrders=s.data,this.eduOrder.price=this.subjectOrders.find(o=>o.course_type_id==this.edu_order.course_type_id&&o.shift_id==this.edu_order.shift_id&&o.train_type_id==this.edu_order.train_type_id).price}):this.eduOrder.price=this.subjectOrders.find(s=>s.course_type_id==this.edu_order.course_type_id&&s.shift_id==this.edu_order.shift_id&&s.train_type_id==this.edu_order.train_type_id).price},warningText(d,s="\u0411\u0430\u0440\u043B\u044B\u049B \u0431\u0430\u0493\u0430\u043D\u0434\u0430\u0440 \u0442\u043E\u043B\u0442\u044B\u0440\u0443 \u049B\u0430\u0436\u0435\u0442!"){Swal.fire({title:d,text:s,icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"\u041E\u043A\u0435\u0439!"})},add28Days(){if(this.edu_order.start_date){const d=new Date(this.edu_order.start_date),s=new Date(d.getTime()+28*24*60*60*1e3);this.edu_order.end_date=s.toISOString().split("T")[0]}else console.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443")},submit(){this.edu_order.price=this.eduOrder.price,this.$inertia.put(route("admin.studentsSubjects.update",[this.user_id,this.edu_order.id]),this.edu_order,{onError:()=>console.log("An errors has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},logme(d,s,o){console.log(d+" "+s+" "+o)}}},T=e("head",null,[e("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442")],-1),C={class:"row mb-2"},S=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442")],-1),D={class:"col-sm-6"},U={class:"breadcrumb float-sm-right"},q={class:"breadcrumb-item"},B=["href"],L=e("i",{class:"fas fa-dashboard"},null,-1),A=b(" \u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 "),E=[L,A],M={class:"breadcrumb-item"},N=["href"],F=e("i",{class:"fas fa-dashboard"},null,-1),H=b(" \u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 "),I=[F,H],z=e("li",{class:"breadcrumb-item active"}," \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442 ",-1),G={class:"container-fluid"},J={class:"card card-primary"},K={class:"card-body"},Q={class:"row"},R={class:"col-md-4"},W={class:"form-group"},X=e("label",{for:""},"\u041F\u0440\u0435\u0434\u043C\u0435\u0442",-1),Y=e("option",{value:"",disabled:"",selected:"",hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),Z=["value"],$={class:"col-md-4"},ee={class:"form-group"},te=e("label",{for:""},"\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C",-1),se=e("option",{value:"",hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),oe=["value"],de={class:"col-md-4"},re={class:"form-group"},ie=e("label",{for:""},"\u0422\u0438\u043F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F",-1),ne=e("option",{value:"",hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),le=["value"],ae={class:"row"},ue={class:"col-md-4"},_e={class:"form-group"},ce=e("label",{for:""},"\u041A\u0443\u0440\u0441",-1),he=e("option",{value:null,hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),me=["value"],fe={class:"col-md-4"},ve={class:"form-group"},be=e("label",{for:""},"\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",-1),pe=e("option",{value:null,hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),ye=["value"],ge={class:"col-md-4"},Oe={class:"form-group"},we=e("label",{for:""},"\u0426\u0435\u043D\u0430",-1),je={class:"row"},Ve={class:"col-md-4"},ke={class:"form-group"},xe=e("label",{for:""},"\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",-1),Pe={class:"col-md-4"},Te={class:"form-group"},Ce=e("label",{for:""},"\u0414\u0430\u0442\u0430 \u043A\u043E\u043D\u0446\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",-1),Se={class:"card-footer"},De=e("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function Ue(d,s,o,qe,f,l){const p=j("AdminLayout");return r(),i(u,null,[T,V(p,null,{breadcrumbs:v(()=>[e("div",C,[S,e("div",D,[e("ol",U,[e("li",q,[e("a",{href:d.route("admin.index")},E,8,B)]),e("li",M,[e("a",{href:d.route("admin.studentsSubjects.index",this.user_id)},I,8,N)]),z])])])]),default:v(()=>[e("div",G,[e("div",J,[e("form",{method:"post",onSubmit:s[14]||(s[14]=a((...t)=>l.submit&&l.submit(...t),["prevent"]))},[e("div",K,[e("div",Q,[e("div",R,[e("div",W,[X,n(e("select",{class:"form-control",onChange:s[0]||(s[0]=a(t=>l.calculatePrice(!0),["prevent"])),"onUpdate:modelValue":s[1]||(s[1]=t=>o.edu_order.subject_id=t),required:""},[Y,(r(!0),i(u,null,c(o.subjects,t=>(r(),i("option",{key:"subject"+t.id,value:t.id},h(t.name),9,Z))),128))],544),[[_,o.edu_order.subject_id]])])]),e("div",$,[e("div",ee,[te,n(e("select",{class:"form-control","onUpdate:modelValue":s[2]||(s[2]=t=>o.edu_order.teacher_id=t),placeholder:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",required:""},[se,(r(!0),i(u,null,c(o.teachers,t=>(r(),i("option",{key:"teacher"+t.id,value:t.id},h(t.fio),9,oe))),128))],512),[[_,o.edu_order.teacher_id]])])]),e("div",de,[e("div",re,[ie,n(e("select",{class:"form-control","onUpdate:modelValue":s[3]||(s[3]=t=>o.edu_order.shift_id=t),onChange:s[4]||(s[4]=a(t=>l.calculatePrice(!0),["prevent"])),placeholder:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",required:""},[ne,(r(!0),i(u,null,c(o.shifts,t=>(r(),i("option",{key:"shift"+t.id,value:t.id},h(t.name),9,le))),128))],544),[[_,o.edu_order.shift_id]])])])]),e("div",ae,[e("div",ue,[e("div",_e,[ce,n(e("select",{class:"form-control",onChange:s[5]||(s[5]=a(t=>l.calculatePrice(!0),["prevent"])),"onUpdate:modelValue":s[6]||(s[6]=t=>o.edu_order.course_type_id=t),placeholder:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",required:""},[he,(r(!0),i(u,null,c(o.courseTypes,t=>(r(),i("option",{key:"courseType"+t.id,value:t.id},h(t.name),9,me))),128))],544),[[_,o.edu_order.course_type_id]])])]),e("div",fe,[e("div",ve,[be,n(e("select",{class:"form-control",onChange:s[7]||(s[7]=a(t=>l.calculatePrice(!0),["prevent"])),"onUpdate:modelValue":s[8]||(s[8]=t=>o.edu_order.train_type_id=t),placeholder:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",required:""},[pe,(r(!0),i(u,null,c(o.trainTypes,t=>(r(),i("option",{key:"trainType"+t.id,value:t.id},h(t.name),9,ye))),128))],544),[[_,o.edu_order.train_type_id]])])]),e("div",ge,[e("div",Oe,[we,n(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[9]||(s[9]=t=>f.eduOrder.price=t),name:"eduOrderPricePrice",placeholder:"\u0426\u0435\u043D\u0430"},null,512),[[m,f.eduOrder.price]])])])]),e("div",je,[e("div",Ve,[e("div",ke,[xe,n(e("input",{type:"date",class:"form-control",onChange:s[10]||(s[10]=a(t=>l.add28Days(),["prevent"])),"onUpdate:modelValue":s[11]||(s[11]=t=>o.edu_order.start_date=t),name:"eduOrderPrice",required:""},null,544),[[m,o.edu_order.start_date]])])]),e("div",Pe,[e("div",Te,[Ce,n(e("input",{type:"date",class:"form-control","onUpdate:modelValue":s[12]||(s[12]=t=>o.edu_order.end_date=t),name:"eduOrderPrice",required:""},null,512),[[m,o.edu_order.end_date]])])])])]),e("div",Se,[De,e("button",{type:"button",class:"btn btn-danger",onClick:s[13]||(s[13]=a(t=>d.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const Me=y(P,[["render",Ue]]);export{Me as default};
