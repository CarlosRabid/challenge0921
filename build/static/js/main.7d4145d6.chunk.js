(this.webpackJsonpchallenge0921=this.webpackJsonpchallenge0921||[]).push([[0],{133:function(e,t,a){e.exports=a(182)},138:function(e,t,a){},154:function(e,t,a){},159:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),i=(a(138),a(16)),c=a(17),s=a(19),u=a(18),m=a(44),d=a(11),h=a(33),g=a(14),p=a(45),f=a(118),v=a(4),b=a(227),E=a(228),O=a(65),w=a(120),k=a(116),j=a.n(k),y=a(111),C=a(72),N=a(119),L=a(112),S=a.n(L),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleMenu=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n.state={anchorEl:null},n.handleMenu=n.handleMenu.bind(Object(C.a)(n)),n}return Object(c.a)(a,[{key:"autoCloseChildren",value:function(e){var t,a=this.props.children,n=[],r=Object(y.a)(a);try{for(r.s();!(t=r.n()).done;){var l=t.value;l.props.autoclose?n.push(o.a.createElement("div",{onClick:this.handleClose,key:l},l)):n.push(l)}}catch(i){r.e(i)}finally{r.f()}return n}},{key:"render",value:function(){var e=this.props.classes,t=this.state.anchorEl,a=Boolean(t);return o.a.createElement("div",{className:e.buttonCollapse},o.a.createElement(w.a,{onClick:this.handleMenu},o.a.createElement(S.a,{style:{color:"white"}})),o.a.createElement(N.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:this.handleClose},this.autoCloseChildren()))}}]),a}(o.a.Component),I=Object(v.a)((function(e){var t;return{buttonCollapse:(t={},Object(g.a)(t,e.breakpoints.up("sm"),{display:"none"}),Object(g.a)(t,"margin","10px"),Object(g.a)(t,"boxShadow","none"),t)}}))(x),F=Object(v.a)((function(e){var t;return{root:{position:"absolute",right:0},buttonBar:(t={},Object(g.a)(t,e.breakpoints.down("xs"),{display:"none"}),Object(g.a)(t,"margin","10px"),Object(g.a)(t,"paddingLeft","16px"),Object(g.a)(t,"right",0),Object(g.a)(t,"position","relative"),Object(g.a)(t,"width","100%"),Object(g.a)(t,"background","transparent"),t)}}))((function(e){return o.a.createElement("div",{className:e.classes.root},o.a.createElement(I,null,e.render(!0)),o.a.createElement("div",{className:e.classes.buttonBar,id:"toolbar"},e.render(!1)))})),B=a(223),M=a(183),P=a(224),D=a(225),U=a(226),W=a(243),R=a(229),T=a(230),A=a(114),z=a.n(A),G=a(115),H=a.n(G),J=a(231),Y=a(232),Z=(a(154),{menuButton:{marginLeft:-12,marginRight:20}});var q=Object(v.a)(Z)((function(e){var t=Z,a=o.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(f.a)(a,2),r=n[0],l=n[1];function i(){e.logOut()}var c,s=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(p.a)(Object(p.a)({},r),{},Object(g.a)({},e,t)))}};return o.a.createElement("div",null,o.a.createElement(b.a,{position:"fixed",style:{background:"#166088"}},o.a.createElement(W.a,{open:r.left,onClose:s("left",!1)},(c="left",o.a.createElement("div",{className:t.list,role:"presentation",onClick:s(c,!1),onKeyDown:s(c,!1)},o.a.createElement(B.a,null,o.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"black"}},o.a.createElement(M.a,{button:!0,key:"home"},o.a.createElement(P.a,null,o.a.createElement(z.a,null)),o.a.createElement(D.a,{primary:"Home"}))),o.a.createElement(m.b,{to:"/form",style:{textDecoration:"none",color:"black"}},o.a.createElement(M.a,{button:!0,key:"repo"},o.a.createElement(P.a,null,o.a.createElement(H.a,null)),o.a.createElement(D.a,{primary:"Repo"})))),o.a.createElement(U.a,null)))),o.a.createElement(E.a,null,o.a.createElement(w.a,{color:"inherit","aria-label":"Menu",onClick:s("left",!0)},o.a.createElement(j.a,null)),o.a.createElement(O.a,{variant:"h6",color:"inherit"},"''     Login Task Challenge 2021    ''"),o.a.createElement(F,{render:function(e){return e?[o.a.createElement(R.a,{key:"logout",onClick:i,autoclose:!0},"Logout")]:[o.a.createElement(T.a,{key:"logout",color:"inherit",onClick:i,className:"menuButton"},"Logout")]}}),o.a.createElement("div",{className:"language-toggle"},o.a.createElement(J.a,{control:o.a.createElement(Y.a,{checked:"es"===e.lng,onChange:e.changeLanguage}),label:"es"===e.lng?"English":"Espa\xf1ol"})))),o.a.createElement(E.a,null))})),K=(a(96),a(233)),V=a(234),X=a(236),$=a(235),Q=Object(K.a)({card:{maxWidth:345},media:{height:140},button:{padding:8}});function _(e){var t=Q();return o.a.createElement("div",{className:"individualCardLanding"},o.a.createElement(V.a,{className:t.card},o.a.createElement($.a,null,o.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.d.title),o.a.createElement(O.a,{variant:"body2",color:"textSecondary",component:"p"},e.d.description)),o.a.createElement(X.a,null,o.a.createElement(m.b,{to:e.d.link,style:{textDecoration:"none",color:"black"}},o.a.createElement("div",{className:"landingButton"},o.a.createElement(T.a,{size:"small",color:"default",variant:"outlined"},e.d.button))))))}var ee=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={user:{},users:[]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.t;if(!this.props.isLoggedIn())return o.a.createElement(d.a,{to:"/"});var t=[{title:e("Repositories"),description:e("Repo details."),link:"/form",button:e("Check Details")}];return o.a.createElement("div",{className:"landing-container"},t.map((function(e){return o.a.createElement(_,{d:e,key:e.link})})))}}]),a}(n.Component),te=Object(h.b)("translation")(ee),ae=(a(159),a(246)),ne=a(244),oe={Robert:"TSDqmaPu",Isabelle:"ngEyYWTp",Guest1:"3fv9fZGL",Guest2:"zwvY5Tjt",Guest3:"wZXaHrxF"},re=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value;e.setState(Object(g.a)({},a.name,n))},e.login=function(){e.state.userName&&oe[e.state.userName]===e.state.password?(e.state.rememberMe&&localStorage.setItem("isLoggedIn",!0),e.props.updateUser(e.state.userName)):alert("One\xa0of\xa0the\xa0following\xa0was\xa0not\xa0correct")},e.state={userName:"",password:"",rememberMe:!1},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(V.a,{className:"logincontainer",style:{maxWidth:345}},o.a.createElement($.a,{className:"loginInnerContainer"},o.a.createElement(ae.a,{id:"outlined-name",label:"Username",name:"userName",margin:"normal",variant:"outlined",type:"string",value:this.state.userName,onChange:this.handleChange}),o.a.createElement(ae.a,{id:"outlined-name",type:"password",name:"password",label:"Password",margin:"normal",variant:"outlined",value:this.state.password,onChange:this.handleChange})),o.a.createElement("div",{className:"cardActionsContainer"},o.a.createElement("div",null,o.a.createElement(J.a,{control:o.a.createElement(ne.a,{value:this.state.rememberMe,checked:this.state.rememberMe,onChange:this.handleChange,color:"default",type:"checkbox",name:"rememberMe"}),label:"Remember me"})),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.login,className:"signinButton"}," LOGIN "))))}}]),a}(n.Component),le=a(41),ie=a.n(le),ce=a(60),se=(a(88),a(245)),ue=a(240),me=a(117),de=a.n(me),he=a(248),ge=a(239),pe=a(242),fe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClose=function(){var e=Object(ce.a)(ie.a.mark((function e(t){var a,o;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t.target.value)){e.next=10;break}return n.fields[a],o=Object(p.a)({},n.state.selectedField),e.next=6,n.props.handleFieldxInput({selectedField:o});case 6:n.setState({selectedField:o}),n.hideMenu(),e.next=11;break;case 10:return e.abrupt("return",n.hideMenu());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.showMenu=function(){n.setState({showMenu:!0})},n.hideMenu=Object(ce.a)(ie.a.mark((function e(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(p.a)({},n.state.showMenu),null,e.next=4,n.setState({showMenu:null});case 4:case"end":return e.stop()}}),e)}))),n.state={locationLatitude:"",locationLongitude:"",showMenu:!1,selectedField:""},n.fields={Opt1:{name:"Playa El Toro",latitude:7.530178,longitude:-80.003034},Opt2:{name:"Playa El Arenal",latitude:7.559493,longitude:-80.019275},Opt3:{name:"Playa Lagarto",latitude:7.506391,longitude:-79.999284}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"menuplaya"},o.a.createElement(ge.a,{variant:"outlined",value:this.state.selectedField},o.a.createElement(he.a,{style:{color:"white"},htmlFor:"menuplayascont"},"   ",this.state.selectedField?this.state.selectedFIeld:e("Options")),o.a.createElement(pe.a,{value:this.state.selectedField,labelWidth:60,onChange:this.handleClose},o.a.createElement("option",{value:null}," - "),o.a.createElement("option",{value:"Opt1",onClick:this.handleClose},e("Option 1")),o.a.createElement("option",{value:"Opt2",onClick:this.handleClose},e("Option 2")),o.a.createElement("option",{value:"Opt3",onClick:this.handleClose},e("Option 3"))))))}}]),a}(n.Component),ve=Object(h.b)("translation")(fe),be=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleInput=function(t){return e.props.handleComments(t.target.value)},e.state={comments:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.t;return o.a.createElement("div",{id:"comments"},o.a.createElement(ae.a,{id:"commentaries",name:"comments",label:e("Comments"),style:{marginLeft:"1vw",color:"white"},placeholder:e("Add notes..."),multiline:!0,rowsMax:"2",margin:"normal",InputLabelProps:{shrink:!0,style:{color:"white"}},variant:"outlined",onChange:this.handleInput,color:"#ffffff"}))}}]),a}(n.Component),Ee=Object(h.b)("translation")(be),Oe=a(97),we=window.location.host.includes("localhost")?"http://localhost:7777":"",ke=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleFieldxInput=function(){var e=Object(ce.a)(ie.a.mark((function e(t){var a;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(p.a)({},n.state.selectedField),a=t.selectedField,e.next=4,n.setState({selectedField:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleComments=function(e){var t=Object(p.a)({},n.state.comments);t=e,n.setState({comments:t})},n.submitNewForm=function(){var e=Object(ce.a)(ie.a.mark((function e(t){var a,o,r;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.firstName||localStorage.getItem("firstName"),n.state.lastName||localStorage.getItem("lastName"),a={observation:{comments:n.state.comments}},!navigator.onLine){e.next=12;break}return e.next=6,Oe.post("".concat(we,"/mega-form"),a);case 6:o=e.sent,console.log(o),console.log("new information saved!"),alert("Successfully submitted"),e.next=17;break;case 12:(r=JSON.parse(localStorage.getItem("savedForms")||"[]")).push(a),localStorage.setItem("savedForms",JSON.stringify(r)),console.log("Saved form locally for later post"),alert("Cannot submit, will try again later");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleExpandClick=function(e){n.setState({showFpart:!0})},n.state={locationLatitude:"",locationLongitude:"",selectedField:"",firstName:null,lastName:null,date:null,time:"",comments:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.t;return this.props.isLoggedIn()?o.a.createElement("div",{id:"formContainer"},o.a.createElement("h1",null,e("Repository Detailed Information")),o.a.createElement("div",{id:"beachButton"},o.a.createElement(ve,{handleFieldxInput:this.handleFieldxInput})),o.a.createElement("br",null),o.a.createElement(se.a,{className:"shift"},o.a.createElement(ue.a,{expandIcon:o.a.createElement(de.a,null),"aria-controls":"panel1c-content",id:"shift"},o.a.createElement("div",{className:"helptext"},o.a.createElement(O.a,{className:"Shift",variant:"h6",component:"h6"},e("Shift"))))),o.a.createElement(Ee,{handleComments:this.handleComments}),o.a.createElement(T.a,{variant:"contained",style:{backgroundColor:"#09bc8a",opacity:.9,marginLeft:"0.2em",marginTop:"0.1em"},size:"medium",className:"submit",onClick:this.submitNewForm,margin:"normal"},e(" Submit "))):o.a.createElement(d.a,{to:"/"})}}]),a}(n.Component),je=Object(h.b)("translation")(ke),ye=(a(180),a(181),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"turtle-wrapper"},o.a.createElement("section",{class:"turtle-loader-container"},o.a.createElement("div",{class:"turtle-loaderhead"}),o.a.createElement("div",{class:"legs-01"}),o.a.createElement("div",{class:"legs-02"}),o.a.createElement("div",{class:"tail"}),o.a.createElement("div",{class:"shell"},o.a.createElement("div",null))))}}]),a}(n.Component)),Ce=a(97),Ne=window.location.host.includes("localhost")?"http://localhost:7777":"",Le=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).updateUser=function(t){e.setState({userName:t})},e.updateNavBar=function(t){e.setState({location:t})},e.changeLanguage=function(){var t=e.props.i18n;return"en"===e.state.lng?(t.changeLanguage("es"),e.setState({lng:"es"})):(t.changeLanguage("en"),e.setState({lng:"en"}))},e.isLoggedIn=function(){return localStorage.getItem("isLoggedIn")||e.state.userName},e.logOut=function(){e.setState({isLoggedIn:!1,userName:"",lng:"en"}),localStorage.removeItem("isLoggedIn")},e.state={location:"",userName:"",lng:"en",loadingData:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(navigator.onLine){var t=JSON.parse(localStorage.getItem("savedForms")||"[]");if(t.length<1)return void this.setState({loadingData:!1});Ce.post("".concat(Ne,"/mega-forms"),t).then((function(t){localStorage.removeItem("savedForms"),console.log("Sent saved forms to DB"),e.setState({loadingData:!1})}))}else console.log("there isnt anything sooo..."),this.setState({loadingData:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(q,{location:this.state.location,logOut:this.logOut,name:this.state.userName,updateNavBar:this.updateNavBar,lng:this.state.lng,changeLanguage:this.changeLanguage}),this.state.loadingData?o.a.createElement(ye,null):null,o.a.createElement(d.b,{path:"/",exact:!0,render:function(){return e.isLoggedIn()?o.a.createElement(d.a,{to:"/home"}):o.a.createElement(re,{updateUser:e.updateUser})}}),o.a.createElement(d.b,{path:"/home",exact:!0,render:function(){return o.a.createElement(te,{updateNavBar:e.updateNavBar,isLoggedIn:e.isLoggedIn})}}),o.a.createElement(d.b,{path:"/form",exact:!0,render:function(){return o.a.createElement(je,{updateNavBar:e.updateNavBar,isLoggedIn:e.isLoggedIn,saveForm:e.saveForm})}}))))}}]),a}(n.Component),Se=Object(h.b)("translation")(Le),xe=a(91);xe.a.use(h.a).init({resources:{en:{translation:{"Please Log in Below":"Please Log in Below","User Name":"User Name",Password:"Password",Login:"Login",Logout:"Logout",Home:"Home",Form:"Form"}},es:{translation:{"Please Log in Below":"Por favor inicie sesi\xf3n","User Name":"Usuario",Password:"Contrase\xf1a",Login:"Ingresar",Logout:"Cerrar Sesi\xf3n",Home:"Panel",Form:"Formulario"}}},lng:"en",keySeparator:!1,interpolation:{escapeValue:!1},fallbackOnEmpty:!0});xe.a;var Ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(Se,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ie?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Fe(t,e)}))}}()},88:function(e,t,a){},96:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.7d4145d6.chunk.js.map