"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[182],{1182:function(r,e,s){s.r(e),s.d(e,{default:function(){return k}});var t=s(3396),a=s(9242),n=s(7139);const o={class:"container-md",style:{"margin-top":"64px"}},l={class:"col-md-6"},i={key:0,class:"alert alert-danger",role:"alert"},u=(0,t._)("h1",{class:"h3 mb-3 font-weight-normal"},"會員登入",-1),c={class:"mb-2"},d=(0,t._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),p={class:"mb-2"},m=(0,t._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),g=(0,t._)("div",{class:"text-end mt-4"},[(0,t._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function w(r,e,s,w,h,f){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,a.iM)(((...r)=>f.signin&&f.signin(...r)),["prevent"]))},[(0,t._)("div",l,[h.errorMsg?((0,t.wg)(),(0,t.iD)("div",i,(0,n.zw)(h.errorMsg),1)):(0,t.kq)("",!0),u,(0,t._)("div",c,[d,(0,t.wy)((0,t._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=r=>h.user.email=r)},null,512),[[a.nr,h.user.email]])]),(0,t._)("div",p,[m,(0,t.wy)((0,t._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=r=>h.user.password=r)},null,512),[[a.nr,h.user.password]])]),g])],32)])}s(7658);var h=s(2578),f=s(5639);const b=(0,f.Z)();var v={data(){return{user:{email:"",password:""},errorMsg:""}},methods:{signin(){const r="https://mevn-curd.onrender.com/user/login";this.$http.post(r,this.user).then((r=>{localStorage.setItem("user",JSON.stringify(r.data)),console.log(JSON.parse(localStorage.getItem("user")).user),b.currentUser=JSON.parse(localStorage.getItem("user")).user,window.alert("登入成功，您現在將被重新導向個人頁面"),this.$router.push("/profile")})).catch((r=>{this.errorMsg=r.response.data}))}},computed:{...(0,h.rn)(f.Z,["currentUser"])}},y=s(89);const _=(0,y.Z)(v,[["render",w]]);var k=_}}]);
//# sourceMappingURL=182.8f106a98.js.map