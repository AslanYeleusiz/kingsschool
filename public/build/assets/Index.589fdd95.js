import{A as s}from"./AdminLayout.2b8c430b.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as n,o as r,b as d,w as i,d as e,e as l}from"./app.d8511840.js";const m={components:{AdminLayout:s},mounted(){this.$nextTick(()=>{console.log("Next tick executed");const t=$(this.$refs.calendar);t.datetimepicker({format:"L",inline:!0}),t.on("change.datetimepicker",function(o){console.log(o.date.format("YYYY-MM-DD"))})})},methods:{toggleCollapse(){},removeCard(){}}},_={class:"card bg-gradient-success"},p=e("div",{class:"card-header border-0"},[e("h3",{class:"card-title"},[e("i",{class:"far fa-calendar-alt"}),l(" Calendar ")])],-1),f={class:"card-body pt-0"},u={ref:"calendar"};function h(t,o,x,g,k,v){const a=n("AdminLayout");return r(),d(a,null,{default:i(()=>[e("div",_,[p,e("div",f,[e("div",u,null,512)])])]),_:1})}const A=c(m,[["render",h]]);export{A as default};