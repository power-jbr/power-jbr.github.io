(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-267dcb0c"],{"2e39":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box"},[a("van-nav-bar",{attrs:{title:"确认订单","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._l(t.list,(function(s,i){return a("div",{key:i,staticClass:"cont"},[a("p",[t._v(t._s(s.title))]),a("span",[t._v(t._s((s.price/100).toFixed(2)))]),a("p",{staticClass:"sk"},[t._v("授课老师:"+t._s(s.teacher_name))])])})),t._m(0),t._l(t.list,(function(s){return a("div",{key:s.id,staticClass:"money"},[a("div",{staticClass:"spprice"},[t._v(" 商品金额 "),a("span",[a("img",{attrs:{src:i("875b"),alt:""}}),t._v(" "+t._s((s.price/100).toFixed(2))+" ")])]),a("div",{staticClass:"yhprice"},[t._v(" 优惠券金额 "),a("span",[a("img",{attrs:{src:i("875b"),alt:""}}),t._v(" "+t._s(0)+" ")])]),a("div",{staticClass:"hj"},[t._v(" 合计 "),a("span",[a("img",{attrs:{src:i("875b"),alt:""}}),t._v(" "+t._s((s.price/100).toFixed(2))+" ")])]),a("footer",[a("ul",[a("li",[a("p",[t._v(" 实付价格 "),a("span",[a("img",{attrs:{src:i("875b"),alt:""}}),t._v(" "+t._s((t.price/100).toFixed(2))+" ")])])]),a("li"),a("li",[a("button",{on:{click:function(s){return t.tj()}}},[t._v("提交订单")])])])]),a("van-overlay",{attrs:{show:t.show},on:{click:function(s){t.show=!1}}},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"block",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"ts"},[a("p",[t._v("提示")]),a("p",{on:{click:function(s){t.show=!1}}},[t._v("X")])]),a("div",{staticClass:"tsz"},[a("p",{staticClass:"txt"},[t._v(t._s(t.txt))])]),a("div",{staticClass:"btn"},[a("button",{on:{click:function(s){t.show=!1}}},[t._v("取消")]),a("button",{on:{click:function(s){return t.cz()}}},[t._v("去充值")])])])])])],1)}))],2)},c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"q"},[i("div",{staticClass:"yhq"},[t._v("优惠券")]),i("div",{staticClass:"wky"},[t._v("无可用")])])}],o={data(){return{xid:0,list:[],price:0,show:!1,txt:""}},created(){},mounted(){this.xid=this.$route.query.id,console.log(this.xid),this.List()},methods:{onClickLeft(){this.$router.go(-1)},async List(){let{data:t}=await this.$Axios.post("/api/app/order/shopInfo",{shop_id:this.xid,type:5});console.log(t),this.list.push(t.data.info),console.log(this.list),this.price=this.list[0].price},async tj(){let{data:t}=await this.$Axios.post("/api/app/order/downOrder",{shop_id:this.xid,type:"5",user_coupon_id:0});console.log(t),this.txt=t.data.msg,this.show=!0},cz(){this.show=!1,this.$router.push("/mycurrency")}}},n=o,e=(i("ed8d"),i("9ca4")),r=Object(e["a"])(n,a,c,!1,null,"3e7caee9",null);s["default"]=r.exports},b9b2:function(t,s,i){},ed8d:function(t,s,i){"use strict";var a=i("b9b2"),c=i.n(a);c.a}}]);
//# sourceMappingURL=chunk-267dcb0c.6632db0c.js.map