(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[4],{295:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(34),r=a(35),o=a(38),l=a(37),s=a(0),c=a.n(s),u=a(10),i=a(12),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(s,t);var a=Object(l.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),s}(c.a.Component);return Object(i.b)(m)(t)}},296:function(e,t,a){e.exports={info:"ProfileInfo_info__3dsdE",contacts:"ProfileInfo_contacts__3y62P",mainPhoto:"ProfileInfo_mainPhoto__1Fgjo",contact:"ProfileInfo_contact__1N3gp",fromSummeryError:"ProfileInfo_fromSummeryError__S39fU"}},300:function(e,t,a){e.exports={MyPostsWrap:"MyPosts_MyPostsWrap__2llrm",buttonAddPost:"MyPosts_buttonAddPost__2V_3z",post:"MyPosts_post__38Ltf"}},301:function(e,t,a){e.exports={item:"Post_item__ihtu9"}},302:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a(35),o=a(38),l=a(37),s=a(0),c=a.n(s),u=a(99),i=a(296),m=a.n(i),p=a(40),f=function(e){var t=Object(s.useState)(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],o=Object(s.useState)(e.status),l=Object(u.a)(o,2),i=l[0],m=l[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("b",null,"Status"),":"," ",c.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"--------")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},onBlur:function(){r(!1),e.updateStatus(i)},autoFocus:!0,value:i})))},d=a(110),b=a.n(d),E=a(131),h=a(27),v=Object(E.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"save")),n&&c.a.createElement("div",{className:m.a.fromSummeryError},n),c.a.createElement(c.a.Fragment,null,c.a.createElement("b",null,"Full name"),": ",Object(h.c)("Full name","fullName",[],h.a)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",Object(h.c)("About me","aboutMe",[],h.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),":",Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),":"," ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(h.c)(e,"contacts."+e,[],h.a)))}))))})),P=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return c.a.createElement("div",null,a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"edit")),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",t.aboutMe||"Tell about you"),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),":"," ",Object.keys(t.contacts).map((function(e){return c.a.createElement(g,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},g=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),": ",a)},j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,r=e.isOwner,o=e.savePhoto,l=e.saveProfile,i=Object(s.useState)(!1),d=Object(u.a)(i,2),E=d[0],h=d[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.info},c.a.createElement("img",{src:t.photos.large||b.a,className:m.a.mainPhoto}),r&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),E?c.a.createElement(v,{initialValues:t,profile:t,onSubmit:function(e){l(e).then((function(){h(!1)}))}}):c.a.createElement(P,{goToEditMode:function(){h(!0)},profile:t,isOwner:r}),c.a.createElement(f,{status:a,updateStatus:n})))},O=a(41),y=a(300),k=a.n(y),_=a(301),S=a.n(_),w=function(e){return c.a.createElement("div",{className:S.a.item},c.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,c.a.createElement("div",{className:S.a.item},c.a.createElement("span",null,"like "),e.likesCount,c.a.createElement("button",null,c.a.createElement("img",{src:"https://www.clipartkey.com/mpngs/m/278-2785465_heart-clipart-jpeg-red-heart-emoji-png.png"}))))},A=a(89),M=a(66),N=Object(M.a)(10),F=Object(E.a)({form:"profileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(A.a,{name:"newPostText",component:h.b,placeholder:"Post message",validate:[M.c,N]})),c.a.createElement("div",{className:k.a.buttonAddPost},c.a.createElement("button",null,"Add post")))})),I=c.a.memo((function(e){console.log("RENDER");var t=Object(O.a)(e.posts).reverse().map((function(e){return c.a.createElement(w,{message:e.message,key:e.id,id:e.id,likesCount:e.likesCount})}));return c.a.createElement("div",{className:k.a.MyPostsWrap},c.a.createElement("h3",null,"My posts"),c.a.createElement(F,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:k.a.posts},t))})),C=a(97),T=a(12),x=Object(T.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(C.a)(t))}}}))(I),J=function(e){return c.a.createElement("div",null,c.a.createElement(j,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),c.a.createElement(x,null))},D=a(10),U=a(9),V=(a(295),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(J,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})))}}]),a}(c.a.Component));t.default=Object(U.d)(Object(T.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:C.d,getStatus:C.c,updateStatus:C.g,savePhoto:C.e,saveProfile:C.f}),D.f)(V)}}]);
//# sourceMappingURL=4.685eb69b.chunk.js.map