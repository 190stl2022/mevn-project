"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[153],{6153:function(e,s,r){r.r(s),r.d(s,{default:function(){return P}});var l=r(3396),t=r(9242),o=r(7139);const a={class:"container-md",style:{"margin-top":"64px"}},n={class:"col-md-6"},i={key:0,class:"alert alert-danger",role:"alert"},u=(0,l._)("h1",{class:"h3 mb-3 font-weight-normal"},"會員註冊",-1),d={class:"mb-2"},c=(0,l._)("label",{for:"inputUsername",class:"sr-only"},"姓名：",-1),p={class:"mb-2"},m=(0,l._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),b={class:"mb-2"},w=(0,l._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),_={class:"mb-2"},f=(0,l._)("label",{for:"role"},"身份",-1),h=(0,l._)("option",{selected:"",disabled:""},"請選擇身份",-1),g=(0,l._)("option",{value:"student"},"學生",-1),v=(0,l._)("option",{value:"instructor"},"講師",-1),y=[h,g,v],k=(0,l._)("div",{class:"text-end mt-4"},[(0,l._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"註冊")],-1);function M(e,s,r,h,g,v){return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("form",{class:"row justify-content-center",onSubmit:s[4]||(s[4]=(0,t.iM)(((...e)=>v.signup&&v.signup(...e)),["prevent"]))},[(0,l._)("div",n,[g.errorMsg?((0,l.wg)(),(0,l.iD)("div",i,(0,o.zw)(g.errorMsg),1)):(0,l.kq)("",!0),u,(0,l._)("div",d,[c,(0,l.wy)((0,l._)("input",{type:"text",id:"inputUsername",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=e=>g.user.username=e)},null,512),[[t.nr,g.user.username]])]),(0,l._)("div",p,[m,(0,l.wy)((0,l._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":s[1]||(s[1]=e=>g.user.email=e)},null,512),[[t.nr,g.user.email]])]),(0,l._)("div",b,[w,(0,l.wy)((0,l._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":s[2]||(s[2]=e=>g.user.password=e)},null,512),[[t.nr,g.user.password]])]),(0,l._)("div",_,[f,(0,l.wy)((0,l._)("select",{id:"role",class:"form-select mb-3","onUpdate:modelValue":s[3]||(s[3]=e=>g.user.role=e)},y,512),[[t.bM,g.user.role]])]),k])],32)])}r(7658);var U={data(){return{user:{username:"",email:"",password:"",role:""},errorMsg:""}},methods:{signup(){const e="https://mevn-curd.onrender.com/api/user/register";this.$http.post(e,this.user).then((e=>{console.log(e),window.alert("註冊成功，您現在將被導向登入頁面"),this.$router.push("/login")})).catch((e=>{this.errorMsg=e.response.data}))}}},E=r(89);const q=(0,E.Z)(U,[["render",M]]);var P=q}}]);
//# sourceMappingURL=153.2c1c11d4.js.map