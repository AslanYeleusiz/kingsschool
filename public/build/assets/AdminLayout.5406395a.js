import{L as S,r as u,o as a,a as i,b as e,d as b,t as f,e as c,w as k,F as v,f as D,n as h,g as p,h as F,p as I,i as T,j as C,k as z,c as Y,T as P,l as w}from"./app.24e8fd2a.js";const m=(s,t)=>{const r=s.__vccOpts||s;for(const[_,l]of t)r[_]=l;return r},R={components:{Link:S},data(){return{currentDate:new Date}}},X={class:"main-footer"},j=b("kingsschool.kz"),M=b("."),O=b(" \u0411\u0430\u0440\u043B\u044B\u049B \u049B\u04B1\u049B\u044B\u049B\u0442\u0430\u0440 \u049B\u043E\u0440\u0493\u0430\u043B\u0493\u0430\u043D. ");function N(s,t,r,_,l,o){const d=u("Link");return a(),i("footer",X,[e("strong",null,[b("\u0410\u0432\u0442\u043E\u0440\u043B\u044B\u049B \u049B\u04B1\u049B\u044B\u049B \xA9 "+f(l.currentDate.getFullYear())+" ",1),c(d,{href:"/"},{default:k(()=>[j]),_:1}),M]),O])}const E=m(R,[["render",N]]),A={},V={class:"main-header navbar navbar-expand navbar-white navbar-light"},Z=e("ul",{class:"navbar-nav"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link","data-widget":"pushmenu",href:"#",role:"button"},[e("i",{class:"fas fa-bars"})])]),e("li",{class:"nav-item d-none d-sm-inline-block"},[e("a",{href:"/admin",class:"nav-link"},"\u0411\u0430\u0441\u0442\u044B \u0431\u0435\u0442")])],-1),H=e("ul",{class:"navbar-nav ml-auto"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link","data-widget":"fullscreen",href:"#",role:"button"},[e("i",{class:"fas fa-expand-arrows-alt"})])])],-1),q=[Z,H];function K(s,t){return a(),i("nav",V,q)}const Q=m(A,[["render",K]]),U="/build/assets/logo.0f19b0d3.svg",W={components:{Link:S},data(){return{menu_items:[{name:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",font:"fa-home",route_name:"admin.index",menu_active:["admin.index"],role:[1,2]},{name:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",font:"fas fa-bars",menu_active:["admin.users","admin.students","admin.teachers"],role:[1,2],route_name:"",childs_items:[{name:"\u041E\u0431\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",font:"fa-users",route_name:"admin.users.index",menu_active:["admin.users","admin.eduOrders"],role:[1,2]},{name:"\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u044B",font:"fa-graduation-cap",route_name:"admin.students.index",menu_active:["admin.students"],role:[1,2,3]},{name:"\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438",font:"fa-chalkboard-teacher",route_name:"admin.teachers.index",menu_active:["admin.teachers"],role:[1,2]}]},{name:"\u041C\u043E\u0438 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u044B",font:"fa-graduation-cap",route_name:"admin.students.index",menu_active:["admin.students"],role:[3]},{name:"\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F",font:"fa-calendar-alt",route_name:"admin.schedule.index",menu_active:["admin.schedule"],role:[1,2,3]},{name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439",font:"fa-file-invoice-dollar",route_name:"admin.paidHistories.index",menu_active:["admin.paidHistories"],role:[1,2]},{name:"\u0420\u0430\u0441\u0445\u043E\u0434\u044B",font:"fa-file-invoice-dollar",route_name:"admin.expenses.index",menu_active:["admin.expenses"],role:[1,2]},{name:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B",font:"fa-book",route_name:"admin.subjects.index",menu_active:["admin.subjects"],role:[1,2]},{name:"\u0422\u0438\u043F\u044B",font:"fa-solid fa-list",menu_active:["admin.trainTypes","admin.courseTypes","admin.roles","admin.filials"],role:[1],route_name:"",childs_items:[{name:"\u0422\u0438\u043F\u044B \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",font:"fa-university",route_name:"admin.trainTypes.index",menu_active:["admin.trainTypes"]},{name:"\u0422\u0438\u043F\u044B \u041A\u0443\u0440\u0441\u043E\u0432",font:"fa-laptop-code",route_name:"admin.courseTypes.index",menu_active:["admin.courseTypes"]},{name:"\u0420\u043E\u043B\u0438",font:"fa-dice-four",route_name:"admin.roles.index",menu_active:["admin.roles"]},{name:"\u0424\u0438\u043B\u0438\u0430\u043B",font:"fa-hotel",route_name:"admin.filials.index",menu_active:["admin.filials"]}]},{name:"\u041B\u043E\u0433\u0438",font:"fa-solid fa-list",route_name:"admin.logs.index",menu_active:["admin.logs"],role:[1]}]}},mounted(){$('[data-widget="treeview"]').each(function(){adminlte.Treeview._jQueryInterface.call($(this),"init")})},computed:{currentRoute(){let s=route().current().split(".");return s.pop(),s.join(".")}}},G={class:"main-sidebar sidebar-dark-primary elevation-4"},J=e("a",{href:"/admin",class:"brand-link"},[e("span",{class:"d-flex align-items-center justify-content-between"},[e("span",{class:"d-flex align-items-center"},[e("img",{src:U,alt:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",class:"brand-image img-circle elevation-3",style:{opacity:".8"}}),e("span",{class:"brand-text font-weight-light"},"King`s School")]),e("a",{class:"nav-link w-auto","data-widget":"pushmenu",href:"#",role:"button"},[e("i",{class:"fas fa-bars"})])])],-1),ee={class:"sidebar"},se={class:"user-panel mt-3 pb-3 mb-3 d-flex"},te={class:"image"},ne=["src"],ae={class:"info"},oe={href:"#",class:"d-block"},ie={class:"mt-2"},re={class:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false"},le=e("i",{class:"right fas fa-angle-left"},null,-1),ce={class:"nav nav-treeview"},de={key:1,class:"nav-item"},ue={class:"nav-item"},_e=["href"],me=e("i",{class:"nav-icon fas fa-sign-out-alt"},null,-1),fe=e("p",null,"\u0428\u044B\u0493\u0443",-1),he=[me,fe];function pe(s,t,r,_,l,o){const d=u("Link");return a(),i("aside",G,[J,e("div",ee,[e("div",se,[e("div",te,[e("img",{src:"../../../storage/files/"+s.$page.props.auth.user.avatar,class:"img-circle elevation-2",alt:"User Image",style:{width:"35px",height:"35px"}},null,8,ne)]),e("div",ae,[e("a",oe,f(s.$page.props.auth.user.fio),1)])]),e("nav",ie,[e("ul",re,[(a(!0),i(v,null,D(l.menu_items,(n,y)=>(a(),i(v,{key:"menu_item"+y},[n.role.includes(s.$page.props.auth.user.role_id)?(a(),i(v,{key:0},[n.childs_items?(a(),i("li",{key:0,class:h(["nav-item",{"menu-open":n.menu_active.includes(o.currentRoute)}])},[e("a",{href:"#",class:h(["nav-link",{active:n.menu_active.includes(o.currentRoute)}])},[e("i",{class:h(["nav-icon fas fa-solid",[n.font]])},null,2),e("p",null,[b(f(n.name)+" ",1),le])],2),e("ul",ce,[(a(!0),i(v,null,D(n.childs_items,(g,x)=>(a(),i("li",{class:"nav-item ml-2",key:"child"+x},[c(d,{href:s.route(g.route_name),class:h(["nav-link",{active:g.menu_active.includes(o.currentRoute)}])},{default:k(()=>[e("i",{class:h(["nav-icon fas",g.font])},null,2),e("p",null,f(g.name),1)]),_:2},1032,["href","class"])]))),128))])],2)):(a(),i("li",de,[c(d,{href:s.route(n.route_name),class:h(["nav-link",{active:n.menu_active.includes(o.currentRoute)}])},{default:k(()=>[e("i",{class:h(["nav-icon fas",n.font])},null,2),e("p",null,f(n.name),1)]),_:2},1032,["href","class"])]))],64)):p("",!0)],64))),128)),e("li",ue,[e("a",{class:"nav-link",href:s.route("logout")},he,8,_e)])])])])])}const ge=m(W,[["render",pe]]),ve={},$e={key:0,class:"row justify-content-center pt-3"},be={class:"col-md-11"},ke={class:"alert alert-danger",role:"alert"},ye=e("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"\xD7")],-1),xe={key:1,class:"row justify-content-center pt-3"},we={class:"col-md-11"},De={class:"alert alert-danger",role:"alert"},Le=e("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"\xD7")],-1),ze={key:2,class:"row justify-content-center pt-3"},Se={class:"col-md-11"},Be={class:"alert alert-success",role:"alert"},Fe=e("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"\xD7")],-1),Ie=e("i",{class:"icon fa fa-check"},null,-1);function Te(s,t){return a(),i(v,null,[s.$page.props.flash.message?(a(),i("div",$e,[e("div",be,[e("div",ke,[ye,e("ul",null,[e("li",null,f(s.$page.props.flash.message),1)])])])])):p("",!0),Object.keys(s.$page.props.errors).length?(a(),i("div",xe,[e("div",we,[e("div",De,[Le,e("ul",null,[(a(!0),i(v,null,D(s.$page.props.errors,(r,_)=>(a(),i("li",{key:"error "+_},f(r),1))),128))])])])])):p("",!0),s.$page.props.flash.success?(a(),i("div",ze,[e("div",Se,[e("div",Be,[Fe,e("h4",null,[Ie,b(f(s.$page.props.flash.success),1)])])])])):p("",!0)],64)}const Ce=m(ve,[["render",Te]]);const Ye={},Pe={class:"loading-spinner"},Re=e("div",{class:"spinner-border text-primary",role:"status"},null,-1),Xe=[Re];function je(s,t){return a(),i("div",Pe,Xe)}const Me=m(Ye,[["render",je]]),Oe={},Ne={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ee=e("rect",{x:"21.8186",width:"3.08556",height:"30.8556",rx:"1.54278",transform:"rotate(45 21.8186 0)",fill:""},null,-1),Ae=e("rect",{x:"24",y:"21.8182",width:"3.08556",height:"30.8556",rx:"1.54278",transform:"rotate(135 24 21.8182)",fill:""},null,-1),Ve=[Ee,Ae];function Ze(s,t){return a(),i("svg",Ne,Ve)}const He=m(Oe,[["render",Ze]]);const qe={components:{ex:He}},Ke={class:"btn my_btn"};function Qe(s,t,r,_,l,o){const d=u("ex");return a(),i("button",Ke,[c(d)])}const Ue=m(qe,[["render",Qe],["__scopeId","data-v-2c0ebd61"]]),We="/build/assets/expand.8bb089ea.svg",Ge="/build/assets/zoom_in.eebafdef.svg",Je="/build/assets/zoom_out.1a7515a7.svg";const es={components:{exitBtn:Ue},data(){return{zoomLevel:80,maxZoom:200,minZoom:50,backgroundPositionX:50,backgroundPositionY:50,isDragging:!1,startDragX:0,startDragY:0}},methods:{zoomIn(){this.zoomLevel<this.maxZoom&&(this.zoomLevel+=10)},zoomOut(){this.zoomLevel>this.minZoom&&(this.zoomLevel-=10)},startDrag(s){this.isDragging=!0,this.startDragX=s.clientX,this.startDragY=s.clientY},drag(s){if(this.isDragging){const t=s.clientX-this.startDragX,r=s.clientY-this.startDragY;this.backgroundPositionX+=t/this.$refs.modal.offsetWidth*100*(this.zoomLevel>=100?-1:1),this.backgroundPositionY+=r/this.$refs.modal.offsetHeight*100,this.startDragX=s.clientX,this.startDragY=s.clientY}},endDrag(){this.isDragging=!1},toggleFullscreen(){const s=this.$refs.modal;document.fullscreenElement?document.exitFullscreen():s.requestFullscreen().catch(t=>{console.error("Failed to enable fullscreen mode",t)})},closeModal(){this.$refs.modal,document.fullscreenElement&&document.exitFullscreen(),this.$page.props.flash.image=null}}},L=s=>(I("data-v-a369dfbb"),s=s(),T(),s),ss={class:"navbar"},ts=L(()=>e("img",{src:We,alt:""},null,-1)),ns=[ts],as=L(()=>e("img",{src:Ge,alt:""},null,-1)),os=[as],is=L(()=>e("img",{src:Je,alt:""},null,-1)),rs=[is];function ls(s,t,r,_,l,o){const d=u("exitBtn");return s.$page.props.flash.image?(a(),i("div",{key:0,class:"cstmodal",style:F({backgroundImage:"url(/storage/files/"+s.$page.props.flash.image+")",backgroundSize:"calc(100% + "+(l.zoomLevel-100)+"%)",backgroundPosition:l.backgroundPositionX+"% "+l.backgroundPositionY+"%"}),ref:"modal",onMousedown:t[4]||(t[4]=(...n)=>o.startDrag&&o.startDrag(...n)),onMousemove:t[5]||(t[5]=(...n)=>o.drag&&o.drag(...n)),onMouseup:t[6]||(t[6]=(...n)=>o.endDrag&&o.endDrag(...n))},[e("div",ss,[e("button",{onClick:t[0]||(t[0]=(...n)=>o.toggleFullscreen&&o.toggleFullscreen(...n)),class:"btn"},ns),e("button",{onClick:t[1]||(t[1]=(...n)=>o.zoomIn&&o.zoomIn(...n)),class:"btn"},os),e("button",{onClick:t[2]||(t[2]=(...n)=>o.zoomOut&&o.zoomOut(...n)),class:"btn"},rs),c(d,{onClick:t[3]||(t[3]=n=>o.closeModal())})])],36)):p("",!0)}const cs=m(es,[["render",ls],["__scopeId","data-v-a369dfbb"]]);const ds={components:{Footer:E,NavBar:Q,SideBar:ge,ResultMessage:Ce,LoadingSpinner:Me,imagePopup:cs},mounted(){this.init()},computed:{headerSlot(){return Boolean(this.$slots.header)}},methods:{init(){let s=".preloader";setTimeout(()=>{let t=$(s);t&&(t.css("height",4),setTimeout(()=>{t.children().hide()},200))},2e3)}},setup(){const s=C(!1);return z.Inertia.on("start",()=>{s.value=!0}),z.Inertia.on("finish",()=>{s.value=!1}),{isLoading:s}}},us={class:"wrapper",style:{overflow:"auto"}},_s={class:"content-wrapper"},ms={class:"content-header"},fs={class:"container-fluid"},hs={class:"content"},ps={key:0,class:"container-fluid"},gs={class:"row"},vs={class:"col-12"},$s={class:"card"},bs={class:"card-body"};function ks(s,t,r,_,l,o){const d=u("LoadingSpinner"),n=u("NavBar"),y=u("SideBar"),g=u("imagePopup"),x=u("ResultMessage"),B=u("Footer");return a(),i("div",us,[c(P,{name:"fade"},{default:k(()=>[_.isLoading?(a(),Y(d,{key:0})):p("",!0)]),_:1}),c(n),c(y),c(g),e("div",_s,[c(x),e("div",ms,[e("div",fs,[w(s.$slots,"breadcrumbs")])]),e("section",hs,[o.headerSlot?(a(),i("div",ps,[e("div",gs,[e("div",vs,[e("div",$s,[e("div",bs,[w(s.$slots,"header")])])])])])):p("",!0),w(s.$slots,"default")])]),c(B)])}const xs=m(ds,[["render",ks]]);export{xs as A,m as _};
