(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e33e56c"],{"1fe6":function(t,a,e){"use strict";var s=e("64e7"),n=e.n(s);n.a},"624f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"info"},[e("div",{staticClass:"header"},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:t.onClickLeft}}),e("p",[t._v("个人信息")]),e("p")],1),e("ul",{staticClass:"ul-box"},[e("li",{on:{click:function(a){t.imgShow=!0}}},[e("span",[t._v("头像")]),e("span",[e("img",{attrs:{src:t.userinfo.avatar,alt:""}})])]),e("li",{on:{click:t.xjnc}},[e("span",[t._v("昵称")]),e("span",[t._v(t._s(t.name))])]),e("li",{on:{click:t.xjsex}},[e("span",[t._v("性别")]),e("span",[t._v(t._s(t.xb))])]),e("li",{on:{click:t.xsr}},[e("span",[t._v("出生日期")]),e("span",[t._v(t._s(t.sr))])]),e("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.shows,callback:function(a){t.shows=a},expression:"shows"}},[e("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.sjwc,cancel:t.sjqx},model:{value:t.currentDate,callback:function(a){t.currentDate=a},expression:"currentDate"}})],1),e("li",{on:{click:t.city}},[e("span",[t._v("所在城市")]),e("span",[t._v(t._s(t.cs))])]),e("van-popup",{style:{height:"45%"},attrs:{position:"bottom"},model:{value:t.showss,callback:function(a){t.showss=a},expression:"showss"}},[e("van-area",{attrs:{title:"","area-list":t.areaList},on:{change:t.onChange,confirm:t.onConfirm,cancel:t.sjqx}})],1),e("li",{on:{click:t.xuek}},[e("span",[t._v("学科")]),e("span",[t._v(t._s(t.arrsr))])]),e("li",{on:{click:t.nnj}},[e("span",[t._v("年级")]),e("span",[t._v(t._s(t.nj))])]),e("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.showsss,callback:function(a){t.showsss=a},expression:"showsss"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:t.nianj.value,"value-key":"name"},on:{confirm:t.Confirm,cancel:t.sjqx}})],1)],1),e("van-popup",{attrs:{position:"bottom"},model:{value:t.imgShow,callback:function(a){t.imgShow=a},expression:"imgShow"}},[e("ul",{staticClass:"photo"},[e("li",[t._v(" 拍照 "),e("input",{attrs:{type:"file",accept:"image/*",capture:"camera",id:"takePhoto"},on:{change:t.takePhoto}})]),e("li",[t._v(" 从手机相册中选择 "),e("input",{attrs:{type:"file",accept:"image/*",id:"takePhoto"},on:{change:t.takePhoto}})]),e("li",{on:{click:function(a){t.imgShow=!1}}},[t._v("取消")])])])],1)},n=[],i=e("7c15"),o={name:"",props:[],components:{},data(){return{cityShow:!1,imgShow:!1,nickname:"",userinfo:[],cityEdit:[],path:"",userinfo:[],user:[],cs:"",arrsr:"",xk:"",nj:"",xb:"",ssss:"",sr:"",aaa:"",bbb:"",ccc:"",xueke:"",nianj:"",asrsr:[],shows:!1,showss:!1,showsss:!1,minDate:new Date(1995,0,1),maxDate:new Date(2025,0,1),currentDate:new Date,provinceId:"110000",cityId:"110100",areaList:{province_list:{},city_list:{},county_list:{}}}},computed:{},watch:{},methods:{xjnc(){this.$router.push({ssss:"Xjnc",params:{name:this.ssss}})},showPopup(){this.show=!0},async info(){let t=await Object(i["i"])();this.userinfo=t.data.data,console.log(t)},name(){this.nicknameShow=!0},async takePhoto(t){let a=new FormData;a.append("file",t.target.files[0]);let e=await Object(i["a"])(a);console.log(e),200==e.data.code?(this.path=e.data.data.path,console.log(e.data.data.path),await Object(i["b"])({avatar:this.path}),this.info(),this.imgShow=!1):(this.$toast(e.msg),this.imgShow=!1)},showPopup(){this.show=!0},onClickLeft(){this.$router.push("/Footer/Mywd")},async info(){let t=await Object(i["o"])();this.userinfo=t.data.data,this.name=this.userinfo.nickname,console.log(t),3==this.userinfo.sex?this.xb="保密":1==this.userinfo.sex?this.xb="女":0==this.userinfo.sex&&(this.xb="男"),0==this.userinfo.province_name?this.cs="请选择":this.cs=`${this.userinfo.province_name},${this.userinfo.city_name},${this.userinfo.district_name}`,0==this.userinfo.birthday?this.sr="请选择":this.sr=this.userinfo.birthday;let a="",e=[];this.userinfo.attr.forEach(t=>{e.push(t.attr_val_id),a+=t.attr_value+"",console.log(a,e)}),this.asrsr=e,this.arrsr=a},city(){this.showss=!0},async tj(){let{data:t}=await Object(i["c"])(this.userinfo.attr,this.userinfo.avatar,this.sr,this.bbb.id,this.bbb.name,this.ccc.id,this.ccc.name,this.name,this.aaa.id,this.aaa.name,this.xb,this.arrsr,this.asrsr);console.log(t),this.$router.push("/Mywd")},xjnc(){this.$router.push({name:"Xjnc",params:{name:this.name}})},xjsex(){this.$router.push({name:"Sex",params:{name:this.sb}})},xsr(){this.shows=!0},sjwc(t){console.log(t);let a=t.getFullYear(),e=t.getMonth()+1>9?t.getMonth()+1:"0"+(t.getMonth()+1),s=t.getDate()>9?t.getDate():"0"+t.getDate();console.log(a,e,s),this.sr=`${a}-${e}-${s}`,console.log(this.sr),this.shows=!1},sjqx(){this.shows=!1,this.showss=!1,this.showsss=!1},onConfirm(t){console.log(t);let a=[];t.forEach((t,e)=>{a.push(t.name)}),this.aaa=t[0],this.bbb=t[1],this.ccc=t[2],console.log(this.aaa),this.cs=a.join(","),this.showss=!1;let{data:e}=Object(i["c"])(this.aaa.code,this.bbb.code,this.ccc.code)},province(){return Object(i["l"])().then(t=>{let a={};return t.data.data.forEach(t=>{a[t.id]=t.area_name}),this.areaList.province_list=a,Object(i["e"])(this.provinceId).then(t=>{let a={};return t.data.data.forEach(t=>{a[t.id]=t.area_name}),this.areaList.city_list=a,Object(i["f"])(this.cityId).then(t=>{let a={};t.data.data.forEach(t=>{a[t.id]=t.area_name}),this.areaList.county_list=a})})})},onChange(t,a,e){return 0==e?Object(i["e"])(a[e].code).then(t=>{let a={};return t.data.data.forEach(t=>{a[t.id]=t.area_name}),this.areaList.city_list=a,Object(i["f"])(t.data.data[0].id).then(t=>{let a={};t.data.data.forEach(t=>{a[t.id]=t.area_name}),this.areaList.county_list=a})}):1==e?Object(i["f"])(a[1].code).then(t=>{let a={};t.data.data.forEach(t=>{a[t.id]=t.area_name}),this.areaList.county_list=a}):void 0},async attribute(){let{data:t}=await Object(i["d"])();console.log(t),t.data.forEach(a=>{console.log(a),this.xueke=t.data[1],this.nianj=t.data[0],console.log(this.xueke)})},xuek(){this.$router.push({path:"/setinfo",query:this.xueke})},nnj(){this.showsss=!0,console.log(this.nianj)},Confirm(t){console.log(t),this.nj=t.name,this.showsss=!1}},created(){},mounted(){this.info(),this.province(),this.attribute()}},r=o,c=(e("1fe6"),e("9ca4")),h=Object(c["a"])(r,s,n,!1,null,"e796a652",null);a["default"]=h.exports},"64e7":function(t,a,e){},"7c15":function(t,a,e){"use strict";e.d(a,"i",(function(){return i})),e.d(a,"o",(function(){return o})),e.d(a,"n",(function(){return r})),e.d(a,"m",(function(){return c})),e.d(a,"e",(function(){return h})),e.d(a,"l",(function(){return u})),e.d(a,"f",(function(){return l})),e.d(a,"d",(function(){return p})),e.d(a,"p",(function(){return d})),e.d(a,"g",(function(){return f})),e.d(a,"b",(function(){return m})),e.d(a,"c",(function(){return b})),e.d(a,"a",(function(){return w})),e.d(a,"j",(function(){return g})),e.d(a,"h",(function(){return j})),e.d(a,"k",(function(){return v}));var s=e("be3b"),n=e("3b59");function i(){return Object(s["a"])({url:"/api/app/userInfo",method:"GET"})}function o(){return Object(s["a"])({url:"/api/app/userInfo",method:"GET"})}function r(t){return Object(s["a"])({url:"/api/app/user",method:"PUT",data:{nickname:t}})}function c(t){return Object(s["a"])({url:"/api/app/user",method:"PUT",data:{sex:t}})}function h(t){return Object(s["a"])({url:`/api/app/sonArea/${t}?`,method:"GET"})}function u(){return Object(s["a"])({url:"/api/app/sonArea/0?",method:"get"})}function l(t){return Object(s["a"])({url:`/api/app/sonArea/${t}?`,method:"get"})}function p(){return Object(s["a"])({url:"api/app/module/attribute/1?",method:"get"})}function d(t){return Object(s["a"])({url:"/api/app/vip/grade",method:"get"})}function f(t,a){return Object(s["a"])({url:"/api/app/order/downOrder",method:"post",data:{shop_id:t,type:a}})}function m(t){return Object(s["a"])({url:"/api/app/user",method:"put",data:t})}function b(t,a,e){return Object(s["a"])({url:"/api/app/user",method:"put",data:{province_id:t,city_id:a,district_id:e}})}function w(t){return Object(s["a"])({url:"/api/app/public/img",method:"post",data:t})}function g(t){return Object(s["a"])({url:"/api/app/message/classifyMessage",method:"post"})}function j(t){return Object(s["a"])({url:"/api/app/feedback",method:"post",data:t})}function v(t){return Object(s["a"])({url:"/api/app/message/getMessage",method:"post",data:t})}console.log(n["a"].NewGuid().ToString("D"))}}]);
//# sourceMappingURL=chunk-4e33e56c.0ca279f3.js.map