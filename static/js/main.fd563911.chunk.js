(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/auroroa.4e90c596.jpg"},102:function(e,t,a){e.exports=a.p+"static/media/auroroa (1).c6b6b9e7.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/birkeland.d58ed151.jpg"},104:function(e,t,a){e.exports=a.p+"static/media/ring_current.02e25e01.jpg"},105:function(e,t,a){e.exports=a.p+"static/media/ring_current (1).c2e8bedb.jpg"},106:function(e,t,a){e.exports=a.p+"static/media/radiation_belt.ce42d2ec.jpg"},107:function(e,t,a){e.exports=a.p+"static/media/radiation_belt (1).feba72c9.jpg"},110:function(e,t,a){e.exports=a(210)},113:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);a(111),a(113);var n=a(0),r=a(60),s=a(221),i=a(222),l=a(11),o=a(12),c=a(14),u=a(13),d=a(15),m=a(25),h=(a(96),a(7)),g=a(211),p=a(212),f=a(213),b=a(223),v=a(214),w=a(215),E=a(216),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(h.a)(Object(h.a)(a))),a.state={isOpen:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return n.createElement("div",null,n.createElement(g.a,{color:"dark",dark:!0,expand:"md"},n.createElement(p.a,{href:"/",className:""},n.createElement("div",{className:"brand"})),n.createElement(f.a,{onClick:this.toggle}),n.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},n.createElement(v.a,{className:"ml-auto",navbar:!0},n.createElement(w.a,null,n.createElement(E.a,{href:"/iowa-planeterrella"},"Home")),n.createElement(w.a,null,n.createElement(E.a,{href:"/iowa-planeterrella/aurora"},"Aurora")),n.createElement(w.a,null,n.createElement(E.a,{href:"/iowa-planeterrella/van-allen-radiation-belts"},"Van Allen Radiation Belts")),n.createElement(w.a,null,n.createElement(E.a,{href:"/iowa-planeterrella/stellar-ring-current"},"Stellar Ring Current")),n.createElement(w.a,null,n.createElement(E.a,{href:"/iowa-planeterrella/history"},"History"))))))}}]),t}(n.Component),S=(a(204),a(217)),O=a(218),C=a(219),N=a(17),k=a.n(N),I=a(31),j=a(61),P=a.n(j),U=a(32),x=a.n(U),A=a(33),V=a.n(A),B=a(34),T=a.n(B),M=a(41),H=a.n(M),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChangeEmail=function(){var e=Object(I.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({email:t.target.value});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleChangePassword=function(){var e=Object(I.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({password:t.target.value});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,r=t.password;return n.createElement("div",{id:"sign-up",className:this.props.isHidden?"controls":"hide"},n.createElement(P.a,null,n.createElement(x.a,null,n.createElement(V.a,{className:"control-selection-labels",for:"signInEmail"},"Email"),n.createElement(T.a,{type:"email",name:"email",id:"signInEmail",placeholder:"Enter Your Email ...",onChange:function(t){e.handleChangeEmail(t)}})),n.createElement(x.a,null,n.createElement(V.a,{className:"control-selection-labels",for:"signInPassword"},"Password"),n.createElement(T.a,{type:"password",name:"password",id:"signInPassword",placeholder:"Enter Your Password ...",onChange:function(t){e.handleChangePassword(t)}}))),n.createElement(H.a,{id:"join-btn",className:"control-btn",onClick:function(){return e.props.showControls(a,r)}},"Sign In"),n.createElement("div",{className:"link",onClick:this.props.signUpLink},"Register"))}}]),t}(n.Component),_=a(80),R=a.n(_),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChangeEmail=function(){var e=Object(I.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({email:t.target.value});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleChangePassword=function(){var e=Object(I.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({password:t.target.value});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleChangeConfirm=function(){var e=Object(I.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({confirmPassword:t.target.value});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",confirmPassword:"",validate:{emailState:"",confirmPasswordState:""}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"validateEmail",value:function(e){var t=this.state.validate;/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?t.emailState="success":t.emailState="fail",this.setState({validate:t})}},{key:"validateConfirmationPassword",value:function(e){var t=this.state.validate;e.target.value!==this.state.password?(t.confirmPasswordState="fail",this.setState({validate:t})):(t.confirmPasswordState="success",this.setState({validate:t}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.validate,r=t.email,s=t.password;return n.createElement("div",{id:"sign-up",className:this.props.isHidden?"controls":"hide"},n.createElement(P.a,null,n.createElement(x.a,null,n.createElement(V.a,{className:"control-selection-labels",for:"email"},"Email"),n.createElement(T.a,{type:"email",name:"email",id:"email",placeholder:"Enter Your Email ...",value:this.state.email,valid:"success"===this.state.validate.emailState,invalid:"fail"===this.state.validate.emailState,onChange:function(t){e.handleChangeEmail(t),e.validateEmail(t)}})),n.createElement(x.a,null,n.createElement(V.a,{className:"control-selection-labels",for:"password"},"Password"),n.createElement(T.a,{type:"password",name:"password",id:"password",placeholder:"Enter Your Password ...",value:this.state.password,onChange:function(t){e.handleChangePassword(t)}})),n.createElement(x.a,null,n.createElement(V.a,{className:"control-selection-labels",for:"confirm-password"},"Confirm Password"),n.createElement(T.a,{type:"password",name:"confirm-password",id:"confirm-password",placeholder:"Re-enter Your Password ...",value:this.state.confirmPassword,valid:"success"===this.state.validate.confirmPasswordState,invalid:"fail"===this.state.validate.confirmPasswordState,onChange:function(t){e.handleChangeConfirm(t),e.validateConfirmationPassword(t)}}),n.createElement(R.a,{valid:!0},"Valid"),n.createElement(R.a,null,"Passwords do not match."))),n.createElement(H.a,{id:"join-btn",className:"control-btn",onClick:function(){return e.props.signUpUser(a,r,s)}},"Sign Up"),n.createElement("div",{className:"link",onClick:this.props.signInLink},"Already have an account? Sign In."))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("div",{id:"sign-up",className:this.props.isHidden?"controls":"hide"},n.createElement(H.a,{className:"control-btn",onClick:function(){return e.props.verifyEmail()}},"Resend Verification Email"))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).db_ref=a.props.db.ref(),a.db=a.props.db,a.interval=null,a.onVoltageChange=function(e){a.setState({voltageControl:e.target.value}),a.db_ref.update({Voltage_Control2:e.target.value})},a.onCurrentChange=function(e){a.setState({currentControl:e.target.value}),a.db_ref.update({Current_Control2:e.target.value})},a.onHVChange=function(e){a.setState({hvValue:e.target.value}),a.db_ref.update({inhibit2:e.target.value}),0==e.target.value?a.setState({hvOnOff:"Off",enableControls:!1}):1==e.target.value&&a.setState({hvOnOff:"On",enableControls:!0})},a.onAirPressureChange=function(e){a.setState({airPressureValue:e.target.value}),0==e.target.value?(a.setState({airPressure:"Low"}),a.db_ref.update({air_pressure:"Low"})):1==e.target.value&&(a.setState({airPressure:"High"}),a.db_ref.update({air_pressure:"High"}))},a.onModeSelection=function(e){var t=e.target.value;"Aurora"!=t&&"Belt"!=t&&"Ring"!=t||(a.setState({mode:t}),a.db_ref.update({mode:t}),"Aurora"==t?(document.getElementById("aurora-btn").className="selected-btn top btn btn-secondary",document.getElementById("belt-btn").className="button btn btn-secondary",document.getElementById("ring-btn").className="button bottom btn btn-secondary"):"Belt"==t?(document.getElementById("aurora-btn").className="button top btn btn-secondary",document.getElementById("belt-btn").className="selected-btn btn btn-secondary",document.getElementById("ring-btn").className="button bottom btn btn-secondary"):"Ring"==t&&(document.getElementById("aurora-btn").className="button top btn btn-secondary",document.getElementById("belt-btn").className="button btn btn-secondary",document.getElementById("ring-btn").className="selected-btn bottom btn btn-secondary"))},a.state={airPressure:"Low",airPressureValue:0,current:0,currentControl:0,enableButtons:!1,enableControls:!1,hvOnOff:"Off",hvValue:0,mode:"aurora",showSignUp:!0,showSignIn:!1,showControls:!1,showVerify:!1,successFailMessage:"",voltage:0,voltageControl:0,queue2:[]},a.signInUser=a.signInUser.bind(Object(h.a)(Object(h.a)(a))),a.showSignInOnClick=a.showSignInOnClick.bind(Object(h.a)(Object(h.a)(a))),a.showSignUpOnClick=a.showSignUpOnClick.bind(Object(h.a)(Object(h.a)(a))),a.showVerifyOnClick=a.showVerifyOnClick.bind(Object(h.a)(Object(h.a)(a))),a.resendVerifyOnClick=a.resendVerifyOnClick.bind(Object(h.a)(Object(h.a)(a))),a.signUpUser=a.signUpUser.bind(Object(h.a)(Object(h.a)(a))),a.signOutUser=a.signOutUser.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.readVoltage(),this.readCurrent(),window.addEventListener("beforeunload",function(){e.signOutUser()})}},{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"clearTimer",value:function(){clearInterval(this.interval)}},{key:"readVoltage",value:function(){var e=this;this.db.ref("voltage").on("value",function(t){console.log(typeof t.val()),"number"===typeof t.val()&&e.setState({voltage:t.val()})})}},{key:"readCurrent",value:function(){var e=this;this.db.ref("current").on("value",function(t){console.log(typeof t.val()),"number"===typeof t.val()&&e.setState({current:t.val()})})}},{key:"resetControls",value:function(){this.db_ref.update({Voltage_Control2:0,Current_Control2:0,inhibit2:0,air_pressure:"Low"})}},{key:"showSignInOnClick",value:function(){this.setState({showSignUp:!1,showVerify:!1,showSignIn:!0})}},{key:"showSignUpOnClick",value:function(){this.setState({showSignIn:!1,showVerify:!1,showSignUp:!0})}},{key:"showVerifyOnClick",value:function(){this.setState({showSignIn:!1,showVerify:!0,showSignUp:!1})}},{key:"resendVerifyOnClick",value:function(){var e=m.auth().currentUser;e.sendEmailVerification().then(function(){console.log("Success"),this.signInHelper(e.email)}.bind(this)).catch(function(){this.setState({successFailMessage:"Error sending verification email."})}.bind(this))}},{key:"signUpUser",value:function(e,t,a){var n=e.emailState,r=e.confirmPasswordState;"true"==localStorage.getItem("isLoggedIn")?this.setState({successFailMessage:"Already Signed In. Enjoy learning from the other tabs."}):n&&r?m.auth().createUserWithEmailAndPassword(t,a).then(function(){var e=m.auth().currentUser;e.emailVerified?(localStorage.setItem("User",t),localStorage.setItem("isLoggedIn","true"),this.setState({successFailMessage:"Successfully Signed Up",showSignUp:!1,showSignIn:!0})):(e.sendEmailVerification().then(function(){}).catch(function(e){console.log("Error sending verification email. Error: "+e)}),this.setState({successFailMessage:"Check your email to verfiy account. Refresh when finished.",showSignUp:!1,showVerify:!0}))}.bind(this)).catch(function(e){var t=e.code,a=e.message;console.log("Error Code "+t+": "+a),this.setState({successFailMessage:a})}.bind(this)):this.setState({successFailMessage:"Incorrect email/password"})}},{key:"signInHelper",value:function(e){if(m.auth().currentUser.emailVerified){localStorage.setItem("User",e),localStorage.setItem("isLoggedIn","true");var t=this.props.db.ref("queue2/");t.once("value").then(function(e){localStorage.setItem("queue2",JSON.stringify(e.val()))});var a=JSON.parse(localStorage.getItem("queue2")),n=Object.keys(a).length;t.push(e),2==++n?(this.setState({enableButtons:!0}),this.startTimer("control",10)):(n-=2,this.startTimer("queue",10*n)),this.setState({successFailMessage:"Successfully Signed In",showControls:!0,showSignIn:!1,showSignUp:!1})}else this.showVerifyOnClick(),this.resendVerifyOnClick()}},{key:"signInUser",value:function(e,t){"true"==localStorage.getItem("isLoggedIn")?this.setState({successFailMessage:"Already Signed In. Enjoy learning from the other tabs."}):""!==e&&""!==t?m.auth().signInWithEmailAndPassword(e,t).then(function(){this.signInHelper(e)}.bind(this)).catch(function(e){var t=e.code,a=e.message;console.log("Error Code "+t+": "+a),this.setState({successFailMessage:a})}.bind(this)):this.setState({successFailMessage:"Input email/password"})}},{key:"startTimer",value:function(e,t){var a=localStorage.getItem("User"),n={isControl:"control"==e,done:!1},r=new Date;r.setMinutes(r.getMinutes()+t),this.interval=setInterval(function(){var e=(new Date).getTime(),t=r.getTime()-e,s=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3);n.isControl?document.getElementById("video-label").innerHTML=s+" min "+i+" sec left":document.getElementById("video-label").innerHTML="Approximately "+s+" min "+i+" sec until your turn",this.props.db.ref("queue2/").once("value").then(function(e){localStorage.setItem("queue2",JSON.stringify(e.val()))});var l=JSON.parse(localStorage.getItem("queue2"));(t<0||l[Object.keys(l)[1]]==a&&!n.isControl)&&(clearInterval(this.interval),this.interval=null,n.isControl?(n.isControl=!1,n.done=!0,this.setState({enableButtons:!1}),this.signOutUser()):(n.isControl=!0,n.done=!0,l[Object.keys(l)[1]]==a?(this.setState({enableButtons:!0}),this.startTimer("control",10)):document.getElementById("video-label").innerHTML="Please Wait ..."))}.bind(this),1e3)}},{key:"signOutUser",value:function(){console.log("Sign out"),this.clearTimer(),this.resetControls();var e=!1,t=localStorage.getItem("User");if(m.auth().signOut().then(function(){}).catch(function(t){var a=t.code,n=t.message;console.log("Error Code "+a+": "+n),e=!0}),e)document.getElementById("success-fail-message").innerHTML="Error Signing Out - Try Again Later";else{localStorage.setItem("isLoggedIn","false"),document.getElementById("video-label").innerHTML="Sign In to Control the Planeterrella",document.getElementById("success-fail-message").innerHTML="Successfully Signed Out",this.setState({enableButtons:!1,showControls:!1,showSignIn:!0,showSignUp:!1}),this.props.db.ref("queue2/").once("value").then(function(e){localStorage.setItem("queue2",JSON.stringify(e.val()))});var a=JSON.parse(localStorage.getItem("queue2")),n="";if(Object.keys(a).length>1){for(var r in a)a[r]==t&&(n=r);delete a[n]}this.props.db.ref().update({queue2:a})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.airPressure,r=t.airPressureValue,s=t.current,i=t.currentControl,l=t.hvOnOff,o=t.hvValue,c=t.voltageControl,u=t.voltage,d=t.enableButtons,m=t.enableControls,h=!1;"true"==localStorage.getItem("isLoggedIn")&&(h=!0);return n.createElement("div",{className:"video-section"},n.createElement(S.a,{className:"video-row"},n.createElement(O.a,{className:"control-col",md:9},n.createElement("div",{className:"video control-box"},n.createElement("div",{className:"video-iframe"},n.createElement("iframe",{className:"iframe",src:"https://www.youtube.com/embed/live_stream?channel=UCz5EIMgaHer46dex0YKjB-Q&autoplay=1",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"})),n.createElement(S.a,{className:"label-row"},n.createElement(O.a,{className:"queue-info"},n.createElement("div",{className:"video-label-row"},n.createElement("p",{id:"video-label",className:"video-label"},"Sign In to Control the Planeterrella"),n.createElement("p",{className:"warning"},"Do not refresh the page"))),n.createElement(O.a,{className:"queue-info",xs:"5"},n.createElement("p",{className:"latency-message"},"Video latancy and quality can be adjusted using the gear icon. Please allow up to 10 seconds for changes to appear."))))),n.createElement(O.a,{className:"control-col",md:3},n.createElement("div",{className:"control-box"},n.createElement("h2",{className:"heading control"},"CONTROLS"),n.createElement("h4",{id:"success-fail-message",className:"success-fail-message"},this.state.successFailMessage),n.createElement(F,{isHidden:!h&&this.state.showSignUp,signInLink:this.showSignInOnClick,signUpUser:this.signUpUser}),n.createElement(q,{isHidden:!h&&this.state.showVerify,verifyEmail:this.resendVerifyOnClick}),n.createElement(L,{isHidden:!h&&this.state.showSignIn,signUpLink:this.showSignUpOnClick,showControls:this.signInUser}),n.createElement("div",{id:"controls",className:this.state.showControls||h?"controls":"hide"},n.createElement("h4",{className:"control-selection-labels"},"High Voltage Power"),n.createElement("div",{className:"slider-container"},n.createElement("form",{className:"slider-box power"},n.createElement("input",{type:"range",min:"0",max:"1",value:o,className:"slider",onChange:this.onHVChange,disabled:!d})),n.createElement("div",{className:"slider-label"},l)),n.createElement("h4",{className:"control-selection-labels"},"Select Mode"),n.createElement("div",{className:"mode-select"},n.createElement(C.a,{id:"aurora-btn",className:"button top",value:"Aurora",onClick:this.onModeSelection,disabled:!d||!m},"Aurora"),n.createElement(C.a,{id:"belt-btn",className:"button",value:"Belt",onClick:this.onModeSelection,disabled:!d||!m},"Van Allen Belt"),n.createElement(C.a,{id:"ring-btn",className:"button bottom",value:"Ring",onClick:this.onModeSelection,disabled:!d||!m},"Stellar Ring Current")),n.createElement("h4",{className:"control-selection-labels"},"Voltage"),n.createElement("div",{className:"slider-container"},n.createElement("form",{className:"slider-box"},n.createElement("input",{type:"range",min:"0",max:"70",value:c,className:m?"slider":"disabled-slider",onChange:this.onVoltageChange,disabled:!d||!m})),n.createElement("div",{className:"slider-label"},u," V")),n.createElement("h4",{className:"control-selection-labels"},"Air Pressure"),n.createElement("div",{className:"slider-container"},n.createElement("form",{className:"slider-box power"},n.createElement("input",{type:"range",min:"0",max:"1",value:r,className:m?"slider":"disabled-slider",onChange:this.onAirPressureChange,disabled:!d||!m})),n.createElement("div",{className:"slider-label"},a)),n.createElement("h4",{className:"control-selection-labels"},"Current"),n.createElement("div",{className:"slider-container"},n.createElement("form",{className:"slider-box"},n.createElement("input",{type:"range",min:"0",max:"15",value:i,className:m?"slider":"disabled-slider",onChange:this.onCurrentChange,disabled:!d||!m})),n.createElement("div",{className:"slider-label"},s," mA")),n.createElement(C.a,{className:"control-btn",onClick:function(){return e.signOutUser()}},"Sign Out"))))))}}]),t}(n.Component),Y=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("div",null,n.createElement("div",{className:"footer"},n.createElement("div",{className:"univ-logo"}),n.createElement("h4",{className:"acknowledge"},"Acknowledgements"),n.createElement("div",{className:"footer-info"},n.createElement(S.a,{className:"footer-row"},n.createElement(O.a,{md:2},n.createElement("div",{className:"nsf-logo"})),n.createElement(O.a,{md:4},n.createElement("p",{className:"footer-support-desc"},"Construction of the Iowa Planeterrella was supported by the US National Science Foundation under grant No. PHY-1453736. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the view of the National Science Foundation.")),n.createElement(O.a,{md:6},n.createElement("h5",{className:"learn-more"},"Learn More"),n.createElement("a",{href:"https://www2.physics.uiowa.edu/~sbaalrud/index.html",className:"footer-link"},"Fundamental Plasma Theory Group"),n.createElement("a",{href:"https://www2.physics.uiowa.edu/~sbaalrud/iplaneterrella.html",className:"footer-link"},"Iowa Planeterrella"),n.createElement("a",{href:"https://www.facebook.com/planeterrella/",className:"footer-link"},"Like Us On Facebook"),n.createElement("a",{href:"http://planeterrella.osug.fr/spip.php?article232",className:"footer-link"},"All Planeterrellas"))))))}}]),t}(n.PureComponent),z=a(220),K=a(101),W=a.n(K),D=a(102),Z=a.n(D),G=a(103),$=a.n(G),Q=a(104),X=a.n(Q),ee=a(105),te=a.n(ee),ae=a(106),ne=a.n(ae),re=a(107),se=a.n(re),ie=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.infoProps,t=e.title,a=e.imageInfo,r=e.text,s=null,i=null;switch(t){case"Aurora":s=W.a,i=Z.a;break;case"Van Allen Radiation Belts":s=ne.a,i=se.a;break;case"Stellar Ring Current":s=X.a,i=te.a;break;default:s=$.a}return n.createElement("div",{className:"info-section"},n.createElement(z.a,null,n.createElement(S.a,{className:"info-rows"},n.createElement(O.a,{md:7},n.createElement("h2",{className:"heading"},t),n.createElement("p",{className:"paragraph"},n.createElement("strong",null,a)),n.createElement("p",{className:"paragraph"},r)),n.createElement(O.a,{className:"info-img-col",md:5},n.createElement("div",{className:"info-img-wrapper"},n.createElement("img",{id:"image-1",src:s,className:"info-img-top"}),n.createElement("img",{id:"image-2",src:i,className:"info-img-bottom"}))))))}}]),t}(n.Component),le={title:"Aurora",imageInfo:"(top) The aurora Borealis in a photograph taken from the international space station. Image credit: NASA. (bottom) Photograph of the aurora demonstration in the Iowa Planeterrella.",text:"\n\nAurora are created when the solar wind (a stream of charged particles coming from the Sun) becomes trapped by the Earth's magnetic field and can be deflected into the Earth's upper atmosphere toward the magnetic poles. The Earth is constantly in the flow of the solar wind, but when it\u2019s stronger than usual, due to a solar storm or a solar flare, then the wind can be more powerful and cause the aurora to extend to lower latitudes.The most powerful auroral event in modern times took place on August 28 - September 2, 1859 and was called the Carrington Event. If a similar event occurred today, it would cause widespread damage to modern technologies including satellites, power systems, and telecommunications. This threat has generated an increased interest in space weather forecasting.Aurora are also present on other planets with magnetic fields and atmospheres. For example, they have been observed on Jupiter and Saturn."},oe={title:"Van Allen Radiation Belts",imageInfo:"(top) Photo of the Van Allen radiation belts taken in the ultraviolet spectrum by the IMAGE satellite. Courtesy of NASA. (bottom) The Van Allen radiation belt demonstration using the Iowa Planeterrella.",text:"\n\nThe Van Allen radiation belts are layers of energetic charged particles held in place by the Earth\u2019s magnetic field. These particles are thought to come from the solar wind and cosmic rays (very high-energy particles that come from outside the solar system). In 1958, the US launched Explorer 1; it\u2019s first man-made satellite. This spacecraft carried the Iowa Cosmic Ray instrument, which was designed by University of Iowa Physics and Astronomy Professor James Van Allen. This instrument was the first to detect the radiation belts, which are now named in his honor."},ce={title:"Stellar Ring Current",imageInfo:"(left) Supernova Remnant 1987a (an exploded star), which displays the stellar ring current phenomenon. Image courtesy of NASA. (right) A demonstration of stellar ring currents using the Iowa Planeterrella.",text:"\n\nA stellar ring current takes place when a star sends electrons all around itself and the magnetic field turns the electrons towards the equator, perpendicular to the magnetic axis of the star. While these do not take place at our Sun, this interesting phenomenon does occur near other classes of stars."},ue={title:"History",imageInfo:"Kristian Birkeland operating the first terrella experiment. Image in the public domain, from wikipedia.",text:"\n\nA century ago, Norwegian scientist Kristian Birkeland (1867-1917) hypothesized that the aurora on Earth are caused by plasma streaming out from the Sun that gets trapped in the Earth\u2019s magnetic field, causing currents in the polar regions of the upper atmosphere. To test this hypothesis, Birkeland led the \u201cNorwegian Polar Expedition\u201d from 1899 to 1900, which provided the first evidence (using ground based magnetic field measurements) of the current patterns in the polar region. Today, these are knows as the Birkeland currents. The existence of Birkeland currents was debated scientifically until a direct measurement was made in 1963 from the Navy satellite 1963-38C. \n\nUpon returning from his expedition, Birkeland designed the \u201cTerrella\u201d experiment to study the interaction of plasma and magnetic fields in and effort to better understand the physics associated with the Earth-Sun interaction. Birkeland also made several other major contributions to science and technology. He invented the coil gun, and was the first to develop an industrial-scale method for nitrogen fixation from air (the Birkeland-Eyde process). Nitrogen fixation is the essential process needed to produce ammonia for farm fertilizer. Birkeland was nominated for a Nobel prize seven times. Learn more about Kristian Birkeland here."},de=m.initializeApp({apiKey:"AIzaSyAkHCx7BgKyYlZgToo2hZgM2g61RrKZYcU",authDomain:"ui-planeterrella.firebaseapp.com",databaseURL:"https://ui-planeterrella.firebaseio.com",projectId:"ui-planeterrella",storageBucket:"<BUCKET>.appspot.com",messagingSenderId:"433273184604"}).database(),me=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"App"},n.createElement(y,null),n.createElement("div",{className:"planeterrella-banner"},n.createElement("div",{className:"planeterrella-img"})),n.createElement(i.a,{exact:!0,path:"/",render:function(e){return n.createElement(J,Object.assign({},e,{db:de}))}}),n.createElement(i.a,{path:"/iowa-planeterrella/aurora",render:function(e){return n.createElement(ie,Object.assign({},e,{infoProps:le}))}}),n.createElement(i.a,{path:"/iowa-planeterrella/van-allen-radiation-belts",render:function(e){return n.createElement(ie,Object.assign({},e,{infoProps:oe}))}}),n.createElement(i.a,{path:"/iowa-planeterrella/stellar-ring-current",render:function(e){return n.createElement(ie,Object.assign({},e,{infoProps:ce}))}}),n.createElement(i.a,{path:"/iowa-planeterrella/history",render:function(e){return n.createElement(ie,Object.assign({},e,{infoProps:ue}))}}),n.createElement(Y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.render(n.createElement(s.a,null,n.createElement(i.a,{path:"iowa-planeterrella/",component:me})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[110,2,1]]]);
//# sourceMappingURL=main.fd563911.chunk.js.map