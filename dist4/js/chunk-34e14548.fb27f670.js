(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34e14548"],{"55ed":function(s,t,i){"use strict";var n=i("6206"),a=i.n(n);a.a},6206:function(s,t,i){},bed1:function(s,t,i){"use strict";i.r(t);var n=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"box"},[i("div",{staticClass:"user"},[i("div",{staticClass:"user_icon"},[i("div",{staticClass:"head"},[i("section",[i("div",{on:{click:s.grxx}},[i("img",{attrs:{src:s.list.avatar}}),i("span",[s._v(s._s(s.list.nickname))]),i("van-icon",{attrs:{name:"edit"}}),i("h4",[s._v("去约课")])],1)]),i("div",{staticClass:"info"},[i("ul",[i("li",{on:{click:s.tsk}},[i("h3",[s._v(s._s(s.kcNum))]),i("p",[s._v("我的特色课")]),i("span",[s._v("已购特色课程的学习")])]),i("li",{on:{click:s.ydy}},[i("h3",[s._v(s._s(s.oto))]),i("p",[s._v("一对一辅导")]),i("span",[s._v("我的一对一老师辅导")])]),i("li",{on:{click:s.xxb}},[i("h3",[s._v(s._s(s.integral.toFixed(2)))]),i("p",[s._v("剩余学习币")]),i("span",[s._v("查看剩余学习币")])])])])])]),i("div",{staticClass:"yao"},[i("div",[i("van-icon",{attrs:{name:"point-gift"}}),s._m(0),i("i"),i("i"),i("i"),i("van-icon",{attrs:{name:"arrow"}})],1)]),i("ul",{staticClass:"menu"},[i("li",[i("p",{staticClass:"menu-title"},[s._v("课程相关")]),i("div",{staticClass:"menu-box"},[i("div",{on:{click:function(t){return s.jbr_gz()}}},[i("span",{staticClass:"iconfont van-icon icn"},[s._v("")]),i("p",[s._v("关注的老师")])]),i("div",{on:{click:function(t){return s.jbr_sc()}}},[i("span",{staticClass:"iconfont van-icon icn"},[s._v("")]),i("p",[s._v("我的收藏")])])])]),i("li",[i("p",{staticClass:"menu-title"},[s._v("订单相关")]),i("div",{staticClass:"menu-box"},[i("div",[i("span",{staticClass:"iconfont van-icon ion",on:{click:function(t){return s.qbdd(1)}}},[s._v("")]),i("p",[s._v("课程订单")])]),i("div",[i("span",{staticClass:"iconfont van-icon ion",on:{click:function(t){return s.qbdd(2)}}},[s._v("")]),i("p",[s._v("会员订单")])]),i("div",[i("span",{staticClass:"iconfont van-icon ion",on:{click:function(t){return s.qbdd(3)}}},[s._v("")]),i("p",[s._v("约课订单")])])])]),i("li",[i("p",{staticClass:"menu-title"},[s._v("我的账户")]),i("div",{staticClass:"menu-box"},[i("div",[i("span",{staticClass:"iconfont van-icon iin",on:{click:s.yh}},[s._v("")]),i("p",[s._v("优惠卷")])]),i("div",[i("span",{staticClass:"iconfont van-icon iin",on:{click:s.xxk}},[s._v("")]),i("p",[s._v("学习卡")])]),i("div",[i("span",{staticClass:"iconfont van-icon iin",on:{click:s.svip}},[s._v("")]),i("p",[s._v("会员")])])])]),i("li",{staticClass:"lit"},[i("p",{staticClass:"menu-title"},[s._v("自助服务")]),i("div",{staticClass:"menu-box"},[i("div",[i("span",{staticClass:"iconfont van-icon inn",on:{click:s.myxx}},[s._v("")]),i("p",[s._v("我的消息")])]),i("div",[i("span",{staticClass:"iconfont van-icon inn",on:{click:s.yjfk}},[s._v("")]),i("p",[s._v("意见反馈")])]),i("div",[i("span",{staticClass:"iconfont van-icon inn",on:{click:s.kf}},[s._v("")]),i("p",[s._v("在线客服")])]),i("div",[i("van-icon",{attrs:{name:"setting-o inn"},on:{click:s.tcsz}}),i("p",[s._v("设置")])],1)])])])])])},a=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("section",[i("p",[s._v("邀请好友注册APP，享多重好礼")]),i("span",[s._v("限时特惠，多邀多得")])])}],c={name:"",props:[],components:{},data(){return{flag:!1,list:JSON.parse(sessionStorage.getItem("user")),jsq:"",kcNum:0,integral:0,oto:0}},computed:{},methods:{xxb(){this.$router.push("/mycurrency")},svip(){console.log(1),this.$router.push("/vip")},ydy(){this.$store.state.act=2,this.$router.push("/footer/myask")},tsk(){this.$router.push("/mycoures")},qbdd(s){this.jsq=s,this.$router.push({name:"Order",params:{v:this.jsq}})},yh(){this.$router.push("/coupon")},kf(){this.$router.push("/xinfen")},xxk(){this.$router.push("/card")},grxx(){this.$router.push("/info")},jbr_gz(){this.$router.push("/gzls")},jbr_sc(){this.$router.push("/scls")},myxx(){this.$router.push("/message")},yjfk(){this.$router.push("/feedback")},tcsz(){this.$router.push("/options")},async num(){let{data:s}=await this.$Axios.get("/api/app/getUCenterInfo");console.log(s),this.kcNum=s.data.courses,this.integral=s.data.integral,this.oto=s.data.oto}},created(){},mounted(){this.num()}},o=c,e=(i("55ed"),i("9ca4")),r=Object(e["a"])(o,n,a,!1,null,"115f9255",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-34e14548.fb27f670.js.map