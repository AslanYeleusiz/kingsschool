import{A as k}from"./AdminLayout.20871ad5.js";import{L as V,H as U,a as f,o as d,c as r,f as l,w as g,F as h,d as e,l as _,m as a,v as c,h as v,s as C,q as p,g as b,t as y,e as w}from"./app.b334bc4f.js";import{P as T}from"./Pagination.0c0ca4f9.js";import{V as L}from"./ValidationError.7803fdc6.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";const B={components:{AdminLayout:k,Link:V,Pagination:T,ValidationError:L,Head:U},props:["roles","filials","user"],data(){return{image:{file:"",preview:""},check_iin:!1,iin:this.user.iin}},methods:{warningText(o,t="\u0411\u0430\u0440\u043B\u044B\u049B \u0431\u0430\u0493\u0430\u043D\u0434\u0430\u0440 \u0442\u043E\u043B\u0442\u044B\u0440\u0443 \u049B\u0430\u0436\u0435\u0442!"){Swal.fire({title:o,text:t,icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"\u041E\u043A\u0435\u0439!"})},submit(){if(this.user.iin=this.iin,this.image.file&&(this.user.image=this.image.file),!this.user.role_id)return this.warningText("\u0420\u043E\u043B\u044C \u0442\u0430\u043D\u0434\u0430\u043B\u043C\u0430\u0434\u044B!");if(!this.user.filial_id)return this.warningText("\u0424\u0438\u043B\u0438\u0430\u043B \u0442\u0430\u043D\u0434\u0430\u043B\u043C\u0430\u0434\u044B!");this.user._method="put",this.$inertia.post(route("admin.users.update",this.user.id),this.user,{onError:()=>console.log("An error has occurred"),onSuccess:()=>console.log("The new contact has been saved")})},handleImageUpload(){if(this.image.file=this.$refs.image.files[0],this.image.file){const o=new FileReader;o.onloadend=t=>{this.image.preview=o.result},o.readAsDataURL(this.image.file),this.$refs.image.value=""}else this.user.image="",this.image.file="",this.image.preview=""},checkIin(){this.check_iin=1,axios.get("/admin/check-iin",{params:{iin:this.iin}}).then(o=>{o.data.status==!0&&this.warningText("\u0411\u04B1\u043D\u0434\u0430\u0439 \u0418\u0418\u041D \u0431\u04B1\u0440\u044B\u043D \u0442\u0456\u0440\u043A\u0435\u043B\u0433\u0435\u043D",null),console.log(o.data),this.check_iin=0})}},watch:{iin(o){o.length===12&&this.iin!=this.user.iin&&this.checkIin()}}},S=e("head",null,[e("title",null,"\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C | \u049A\u043E\u043B\u0434\u0430\u043D\u0443\u0448\u044B\u043D\u044B \u04E9\u0437\u0433\u0435\u0440\u0442\u0443")],-1),E={class:"row mb-2"},I=e("div",{class:"col-sm-6"},[e("h1",{class:"m-0"},"\u049A\u043E\u043B\u0434\u0430\u043D\u0443\u0448\u044B\u043D\u044B \u04E9\u0437\u0433\u0435\u0440\u0442\u0443")],-1),N={class:"col-sm-6"},D={class:"breadcrumb float-sm-right"},F={class:"breadcrumb-item"},M=["href"],H=e("i",{class:"fas fa-dashboard"},null,-1),P=w(" \u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442 "),R=[H,P],j={class:"breadcrumb-item"},q=["href"],z=e("i",{class:"fas fa-dashboard"},null,-1),G=w(" \u049A\u043E\u043B\u0434\u0430\u043D\u0443\u0448\u044B\u043B\u0430\u0440 \u0442\u0456\u0437\u0456\u043C\u0456 "),J=[z,G],K=e("li",{class:"breadcrumb-item active"}," \u049A\u043E\u043B\u0434\u0430\u043D\u0443\u0448\u044B\u043D\u044B \u04E9\u0437\u0433\u0435\u0440\u0442\u0443 ",-1),O={class:"container-fluid"},Q={class:"card card-primary"},W={class:"card-body"},X={class:"row"},Y={class:"col-md-4"},Z={class:"form-group"},$=e("label",{for:""},"\u0418\u0418\u041D",-1),ee={class:"row"},se={class:"col-md-4"},te={class:"form-group"},ie=e("label",{for:""},"\u0424\u0430\u043C\u0438\u043B\u0438\u044F",-1),oe={class:"col-md-4"},le={class:"form-group"},ne=e("label",{for:""},"\u0418\u043C\u044F",-1),ae={class:"row"},de={class:"col-md-4"},re={class:"form-group"},ce=e("label",{for:""},"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u044C\u044F",-1),me={class:"col-md-4"},_e={class:"form-group"},ue=e("label",{for:""},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",-1),he={key:0,class:"col-md-4"},fe={class:"form-group"},ge=e("label",{for:""},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F",-1),ve={class:"form-group file-upload"},pe=e("label",{for:""},"\u0421\u0443\u0440\u0435\u0442",-1),be={class:"ml-2"},ye=["src"],we=["src"],xe={class:"file-input",style:{"margin-right":"10px"}},ke=e("label",{for:"image"}," \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C ",-1),Ve={class:"row"},Ue={class:"col-md-4"},Ce={class:"form-group"},Te=e("label",{for:""},"\u0420\u043E\u043B\u044C",-1),Le=e("option",{value:null,hidden:""}," \u0420\u043E\u043B\u044C \u0442\u0430\u04A3\u0434\u0430\u04A3\u044B\u0437 ",-1),Ae=["value"],Be={class:"col-md-4"},Se={class:"form-group"},Ee=e("label",{for:""},"\u0424\u0438\u043B\u043B\u0438\u0430\u043B",-1),Ie=e("option",{value:null,hidden:""}," \u0424\u0438\u043B\u043B\u0438\u0430\u043B \u0442\u0430\u04A3\u0434\u0430\u04A3\u044B\u0437 ",-1),Ne=["value"],De={class:"col-md-4"},Fe={class:"form-group"},Me=e("label",{for:""},"\u049A\u04B1\u043F\u0438\u044F \u0441\u04E9\u0437",-1),He={class:"card-footer"},Pe=e("button",{type:"submit",class:"btn btn-primary mr-1"}," \u0421\u0430\u049B\u0442\u0430\u0443 ",-1);function Re(o,t,i,je,m,u){const n=f("validation-error"),x=f("AdminLayout");return d(),r(h,null,[S,l(x,null,{breadcrumbs:g(()=>[e("div",E,[I,e("div",N,[e("ol",D,[e("li",F,[e("a",{href:o.route("admin.index")},R,8,M)]),e("li",j,[e("a",{href:o.route("admin.users.index")},J,8,q)]),K])])])]),default:g(()=>[e("div",O,[e("div",Q,[e("form",{method:"post",onSubmit:t[13]||(t[13]=_((...s)=>u.submit&&u.submit(...s),["prevent"]))},[e("div",W,[e("div",X,[e("div",Y,[e("div",Z,[$,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>m.iin=s),name:"iin",placeholder:"\u0418\u0418\u041D",maxlength:"12"},null,512),[[c,m.iin]]),l(n,{field:"iin"})])])]),e("div",ee,[e("div",se,[e("div",te,[ie,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>i.user.s_name=s),name:"s_name",placeholder:"\u0424\u0430\u043C\u0438\u043B\u0438\u044F"},null,512),[[c,i.user.s_name]]),l(n,{field:"s_name"})])]),e("div",oe,[e("div",le,[ne,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=s=>i.user.name=s),name:"name",placeholder:"\u0418\u043C\u044F"},null,512),[[c,i.user.name]]),l(n,{field:"name"})])])]),e("div",ae,[e("div",de,[e("div",re,[ce,a(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=s=>i.user.birthday=s),name:"birthday",placeholder:"\u0424\u0430\u043C\u0438\u043B\u0438\u044F"},null,512),[[c,i.user.birthday]]),l(n,{field:"birthday"})])]),e("div",me,[e("div",_e,[ue,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=s=>i.user.tel_num=s),name:"tel_num",placeholder:"\u0418\u043C\u044F"},null,512),[[c,i.user.tel_num]]),l(n,{field:"tel_num"})])]),i.user.role_id==4?(d(),r("div",he,[e("div",fe,[ge,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=s=>i.user.tel_num_family=s),name:"tel_num_family",placeholder:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F"},null,512),[[c,i.user.tel_num_family]]),l(n,{field:"tel_num_family"})])])):v("",!0)]),e("div",ve,[pe,e("div",be,[i.user.avatar&&!m.image.file?(d(),r("img",{key:0,src:o.route("index")+"/storage/files/"+i.user.avatar,height:"300",alt:"image",style:{"padding-bottom":"10px"}},null,8,ye)):v("",!0),a(e("img",{src:m.image.preview,height:"300",style:{"padding-bottom":"10px"}},null,8,we),[[C,m.image.preview]]),e("div",xe,[e("input",{type:"file",hidden:"",name:"image",onChange:t[6]||(t[6]=s=>u.handleImageUpload()),ref:"image",accept:"image/jpeg,image/png",class:"file",id:"image"},null,544),ke])]),l(n,{field:"image"})]),e("div",Ve,[e("div",Ue,[e("div",Ce,[Te,a(e("select",{class:"form-control",onChange:t[7]||(t[7]=_((...s)=>o.search&&o.search(...s),["prevent"])),"onUpdate:modelValue":t[8]||(t[8]=s=>i.user.role_id=s),placeholder:"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456"},[Le,(d(!0),r(h,null,b(i.roles,s=>(d(),r("option",{key:"role"+s.id,value:s.id},y(s.name),9,Ae))),128))],544),[[p,i.user.role_id]]),l(n,{field:"role_id"})])]),e("div",Be,[e("div",Se,[Ee,a(e("select",{class:"form-control",onChange:t[9]||(t[9]=_((...s)=>o.search&&o.search(...s),["prevent"])),"onUpdate:modelValue":t[10]||(t[10]=s=>i.user.filial_id=s),placeholder:"\u0411\u0435\u043B\u0441\u0435\u043D\u0434\u0456"},[Ie,(d(!0),r(h,null,b(i.filials,s=>(d(),r("option",{key:"filial"+s.id,value:s.id},y(s.name),9,Ne))),128))],544),[[p,i.user.filial_id]]),l(n,{field:"filial_id"})])]),e("div",De,[e("div",Fe,[Me,a(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[11]||(t[11]=s=>i.user.real_password=s),name:"real_password",placeholder:"\u049A\u04B1\u043F\u0438\u044F \u0441\u04E9\u0437"},null,512),[[c,i.user.real_password]]),l(n,{field:"real_password"})])])]),e("div",He,[Pe,e("button",{type:"button",class:"btn btn-danger",onClick:t[12]||(t[12]=_(s=>o.back(),["prevent"]))}," \u0410\u0440\u0442\u049B\u0430 ")])])],32)])])]),_:1})],64)}const Oe=A(B,[["render",Re]]);export{Oe as default};