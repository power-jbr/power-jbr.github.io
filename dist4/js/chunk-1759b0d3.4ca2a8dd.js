(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1759b0d3"],{"0600":function(t,e,a){},"3e43":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{attrs:{id:"topls"}},[a("van-search",{attrs:{shape:"round",background:"white",placeholder:"请输入搜索关键词"},on:{focus:t.tozhis},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("div",{attrs:{id:"tly_bigbox"}},[a("div",{attrs:{id:"tly_leftbox"}},[a("van-sidebar",{model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.alllist,(function(e,s){return a("van-sidebar-item",{key:s,attrs:{title:e.name},on:{click:function(a){return t.change(e.id)}}})})),1)],1),a("div",{attrs:{id:"tly_rightbox"}},t._l(t.showlist,(function(e,s){return a("div",{key:s},[a("p",{staticClass:"tly_title"},[t._v(t._s(e.name))]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=e.bank,expression:"item.bank != ''"}],staticClass:"tly_titlebox"},t._l(e.bank,(function(s,i){return a("span",{key:i,on:{click:function(a){return t.tothis(e.id,s.id)}}},[t._v(t._s(s.name))])})),0)])})),0)])])},i=[],n=a("a593"),o=a("445a"),l=a("0139"),r=a("df03");n["default"].use(r["a"]),n["default"].use(o["a"]),n["default"].use(l["a"]);var c={data(){return{activeKey:-1,showlist:[],value:"",alllist:[]}},mounted(){this.$store.commit("changeleftarrows",!0),this.quest(),localStorage.removeItem("showlist")},methods:{async change(t){let{data:e}=await this.$Axios.get("/api/app/wap/quesBank/"+t);this.showlist=e.data},onSearch(){console.log(1111)},tothis(t,e){window.localStorage.setItem("thisname",e),this.$router.push({path:"/footer/Myexercise/showclass",query:{name:"/"+t+"/"+e}})},async quest(){let{data:t}=await this.$Axios.get("/api/app/wap/classify");this.alllist=t.data},tozhis(){this.$router.push("/footer/Myexercise/seek")}}},u=c,d=(a("9d99"),a("9ca4")),h=Object(d["a"])(u,s,i,!1,null,"c3750f8a",null);e["default"]=h.exports},"9d99":function(t,e,a){"use strict";var s=a("0600"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-1759b0d3.4ca2a8dd.js.map