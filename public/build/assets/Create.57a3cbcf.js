import{A as y}from"./AdminLayout.a8bbea2e.js";import{L as g,H as V,a as w,o as d,c as n,f as C,w as v,F as u,d as e,t as i,l as a,g as h,m as c,v as f,q as m,e as _}from"./app.88ee6f0d.js";import{P as U}from"./Pagination.f28bb70d.js";import{V as L}from"./ValidationError.907eb506.js";import{_ as T}from"./_plugin-vue_export-helper.cdc0426e.js";const j={components:{AdminLayout:y,Link:g,Pagination:U,ValidationError:L,Head:V},props:["schedules","date","day","subjects","teachers","courseTypes","trainTypes","shifts"],data(){return{schedule:{start_time:null,end_time:null,subject_id:null,teacher_id:null,shift_id:1,course_type_id:1,train_type_id:1,date:this.date,day:route().params.day},days:["\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0412\u0442\u043E\u0440\u043D\u0438\u043A","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041F\u044F\u0442\u043D\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043E\u0442\u0430","\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u0438\u0435"]}},methods:{submit(){this.$inertia.post(route("admin.schedule.store"),this.schedule,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})}}},k=e("head",null,[e("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u049B\u043E\u0441\u0443")],-1),A={class:"row mb-2"},S={class:"col-sm-6"},q={class:"m-0"},B={class:"col-sm-6"},E={class:"breadcrumb float-sm-right"},M={class:"breadcrumb-item"},N=["href"],D=e("i",{class:"fas fa-dashboard"},null,-1),F=_(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),H=[D,F],P={class:"breadcrumb-item"},z=["href"],G=e("i",{class:"fas fa-dashboard"},null,-1),I=_(" \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0442\u0456\u0437\u0456\u043C\u0456 "),J=[G,I],K=e("li",{class:"breadcrumb-item active"}," \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u049B\u043E\u0441\u0443 ",-1),O={class:"container-fluid"},Q={class:"card card-primary"},R={class:"card-body"},W={class:"table table-hover table-bordered table-striped dataTable dtr-inline"},X=e("thead",null,[e("tr",null,[e("th",null,"\u0412\u0440\u0435\u043C\u044F"),e("th",null,"\u041F\u0440\u0435\u0434\u043C\u0435\u0442"),e("th",null,"\u0423\u0447\u0438\u0442\u0435\u043B\u044C"),e("th",null,"\u041A\u0443\u0440\u0441"),e("th",null,"\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u044F")])],-1),Y={class:"row mt-5"},Z={class:"col-md-3"},x={class:"form-group"},$=e("label",{for:""},[_("\u041D\u0430\u0447\u0430\u043B\u043E "),e("span",{class:"red"},"*")],-1),ee={class:"col-md-3"},se={class:"form-group"},te=e("label",{for:""},[_("\u041A\u043E\u043D\u0435\u0446 "),e("span",{class:"red"},"*")],-1),oe={class:"col-md-3"},le={class:"form-group"},de=e("label",{for:""},"\u0422\u0438\u043F",-1),ne=e("option",{value:1}," \u0414\u043D\u0435\u0432\u043D\u043E\u0439 ",-1),ie=e("option",{value:2}," \u0412\u0435\u0447\u0435\u0440\u043D\u044B\u0439 ",-1),re=[ne,ie],ae={class:"row"},ce={class:"col-md-4"},ue={class:"form-group"},_e=e("label",{for:""},[_("\u041F\u0440\u0435\u0434\u043C\u0435\u0442 "),e("span",{class:"red"},"*")],-1),he=e("option",{value:null,hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),me=["value"],pe={class:"col-md-4"},ve={class:"form-group"},fe=e("label",{for:""},[_("\u0423\u0447\u0438\u0442\u0435\u043B\u044C "),e("span",{class:"red"},"*")],-1),be=e("option",{value:null,hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),ye=["value"],ge={class:"row"},Ve={class:"col-md-4"},we={class:"form-group"},Ce=e("label",{for:""},"\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430",-1),Ue=e("option",{value:null,hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),Le=["value"],Te={class:"col-md-4"},je={class:"form-group"},ke=e("label",{for:""},"\u0422\u0438\u043F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",-1),Ae=e("option",{value:null,hidden:""}," \u0412\u044B\u0431\u0440\u0430\u0442\u044C ",-1),Se=["value"],qe={class:"card-footer"},Be=e("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function Ee(l,t,r,Me,o,p){const b=w("AdminLayout");return d(),n(u,null,[k,C(b,null,{breadcrumbs:v(()=>[e("div",A,[e("div",S,[e("h1",q,"\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F "+i(o.days[r.day-1])+" "+i(r.date),1)]),e("div",B,[e("ol",E,[e("li",M,[e("a",{href:l.route("admin.index")},H,8,N)]),e("li",P,[e("a",{href:l.route("admin.schedule.index")},J,8,z)]),K])])])]),default:v(()=>[e("div",O,[e("div",Q,[e("form",{method:"post",onSubmit:t[13]||(t[13]=a((...s)=>p.submit&&p.submit(...s),["prevent"]))},[e("div",R,[e("table",W,[X,e("tbody",null,[(d(!0),n(u,null,h(r.schedules,s=>(d(),n("tr",null,[e("td",null,i(s.start_time)+" - "+i(s.end_time),1),e("td",null,i(s.subject.name),1),e("td",null,i(s.teacher.fio),1)]))),256))])]),e("div",Y,[e("div",Z,[e("div",x,[$,c(e("input",{type:"time",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>o.schedule.start_time=s),required:""},null,512),[[f,o.schedule.start_time]])])]),e("div",ee,[e("div",se,[te,c(e("input",{type:"time",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>o.schedule.end_time=s),required:""},null,512),[[f,o.schedule.end_time]])])]),e("div",oe,[e("div",le,[de,c(e("select",{class:"form-control",onChange:t[2]||(t[2]=a((...s)=>l.search&&l.search(...s),["prevent"])),"onUpdate:modelValue":t[3]||(t[3]=s=>o.schedule.shift_id=s),placeholder:"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456"},re,544),[[m,o.schedule.shift_id]])])])]),e("div",ae,[e("div",ce,[e("div",ue,[_e,c(e("select",{class:"form-control",onChange:t[4]||(t[4]=a((...s)=>l.search&&l.search(...s),["prevent"])),"onUpdate:modelValue":t[5]||(t[5]=s=>o.schedule.subject_id=s),placeholder:"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456"},[he,(d(!0),n(u,null,h(r.subjects,s=>(d(),n("option",{value:s.id},i(s.name),9,me))),256))],544),[[m,o.schedule.subject_id]])])]),e("div",pe,[e("div",ve,[fe,c(e("select",{class:"form-control",onChange:t[6]||(t[6]=a((...s)=>l.search&&l.search(...s),["prevent"])),"onUpdate:modelValue":t[7]||(t[7]=s=>o.schedule.teacher_id=s),placeholder:"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456"},[be,(d(!0),n(u,null,h(r.teachers,s=>(d(),n("option",{value:s.id},i(s.fio),9,ye))),256))],544),[[m,o.schedule.teacher_id]])])])]),e("div",ge,[e("div",Ve,[e("div",we,[Ce,c(e("select",{class:"form-control",onChange:t[8]||(t[8]=a((...s)=>l.search&&l.search(...s),["prevent"])),"onUpdate:modelValue":t[9]||(t[9]=s=>o.schedule.course_type_id=s),placeholder:"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456"},[Ue,(d(!0),n(u,null,h(r.courseTypes,s=>(d(),n("option",{value:s.id},i(s.name),9,Le))),256))],544),[[m,o.schedule.course_type_id]])])]),e("div",Te,[e("div",je,[ke,c(e("select",{class:"form-control",onChange:t[10]||(t[10]=a((...s)=>l.search&&l.search(...s),["prevent"])),"onUpdate:modelValue":t[11]||(t[11]=s=>o.schedule.train_type_id=s),placeholder:"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456"},[Ae,(d(!0),n(u,null,h(r.trainTypes,s=>(d(),n("option",{value:s.id},i(s.name),9,Se))),256))],544),[[m,o.schedule.train_type_id]])])])])]),e("div",qe,[Be,e("button",{type:"button",class:"btn btn-danger",onClick:t[12]||(t[12]=a(s=>l.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])],32)])])]),_:1})],64)}const ze=T(j,[["render",Ee]]);export{ze as default};