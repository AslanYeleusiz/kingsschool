import{A as v}from"./AdminLayout-4103f48c.js";import{L as x,a as m,o as n,b as f,w as b,e,c,t as d,F as i,j as p,i as u,h as _,f as C}from"./app-9ffddd28.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const L={props:["user"],components:{AdminLayout:v,Link:x},data(){return{days:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресение"],currentDate:route().params.date??"",schedules:null,startweekdate:null,endweekdate:null}},mounted(){this.$nextTick(()=>{console.log("Next tick executed");const o=$(this.$refs.calendar);o.datetimepicker({format:"L",inline:!0}),o.on("change.datetimepicker",s=>{this.toggleCollapse(s.date.format("YYYY-MM-DD"))})});var t=new Date,l=t.getDay(),r=l===0?7:l;console.log(r),this.toggleCollapse(t.toISOString().slice(0,10))},methods:{toggleCollapse(t){console.log(t),this.currentDate=t;let r=new URLSearchParams(window.location.search).get("teacher_id");axios.get(route("admin.schedule.getSchedule"),{params:{date:this.currentDate,teacher_id:r??null}}).then(o=>{this.schedules=o.data.schedules,this.startweekdate=o.data.startweekdate,this.endweekdate=o.data.endweekdate})},deleteData(t){Swal.fire({title:"Жоюға сенімдісіз бе",text:"Қайтып қалпына келмеуі мүмкін!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Иә, жоямын!",cancelButtonText:"Болдырмау"}).then(l=>{l.isConfirmed&&this.$inertia.delete(route("admin.schedule.destroy",t))})}}},B={class:"card bg-gradient-success"},S=e("div",{class:"card-header border-0"},[e("h3",{class:"card-title"},[e("i",{class:"far fa-calendar-alt"}),_(" Calendar ")])],-1),T={class:"card-body pt-0"},j={ref:"calendar"},A={key:0,class:"container-fluid"},N={class:"card"},Y={class:"card-body"},M={class:"mb-3"},O={class:"row"},P={class:"col-sm-12"},V={class:"table table-hover"},F={"data-widget":"expandable-table","aria-expanded":"true"},I={class:"d-flex justify-content-between"},W=_(" Изменить "),E={class:"expandable-body"},R={class:"p-0",style:{}},U={class:"table mt-2 mb-3 table-hover table-bordered table-striped dataTable dtr-inline"},q={class:"btn-group btn-group-sm"},z=["onClick"],G=e("i",{class:"fas fa-trash"},null,-1),H=[G];function J(t,l,r,o,s,k){const g=m("Link"),y=m("AdminLayout");return n(),f(y,null,{default:b(()=>[e("div",B,[S,e("div",T,[e("div",j,null,512)])]),s.schedules?(n(),c("div",A,[e("div",N,[e("div",Y,[e("h3",M,d(s.startweekdate+"-"+s.endweekdate),1),e("div",O,[e("div",P,[e("table",V,[e("tbody",null,[(n(!0),c(i,null,p(s.days,(w,h)=>(n(),c(i,null,[e("tr",F,[e("td",null,[e("div",I,[_(d(w)+" ",1),r.user.role_id==1||r.user.role_id==2?(n(),f(g,{key:0,href:t.route("admin.schedule.create",{date:s.startweekdate,day:h+1}),class:"btn btn-primary",title:"Өзгерту"},{default:b(()=>[W]),_:2},1032,["href"])):u("",!0)])])]),e("tr",E,[e("td",null,[e("div",R,[e("table",U,[e("tbody",null,[(n(!0),c(i,null,p(s.schedules,a=>(n(),c("tr",{class:"odd",key:"schedule"+a.id},[a.day==h+1?(n(),c(i,{key:0},[e("td",null,d(a.start_time)+" - "+d(a.end_time),1),e("td",null,d(a.subject.name),1),e("td",null,d(a.teacher.fio),1),e("td",null,d(a.group?a.group.name:"Вне группы"),1),e("td",null,[e("div",q,[e("button",{onClick:C(K=>k.deleteData(a.id),["prevent"]),class:"btn btn-danger",title:"Жою"},H,8,z)])])],64)):u("",!0)]))),128))])])])])])],64))),256))])])])])])])])):u("",!0)]),_:1})}const ee=D(L,[["render",J]]);export{ee as default};