(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{222:function(e,t,a){e.exports=a(418)},384:function(e,t,a){},418:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(216),c=a.n(l),i=a(5),s=a(4),o=(r.a.createElement("h4",{style:{color:"red"}},"Hello world"),Object(s.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-extended white"},r.a.createElement("div",{className:"nav-length nav-wrapper"},r.a.createElement(i.c,{to:"/",style:{fontSize:"5em",fontFamily:"Abril Fatface",marginTop:"20px"},className:"brand-logo center jam-heading black-text flow-text"},"ARHT PI PR\xc8W"),r.a.createElement("ul",{className:"right"},e.auth.uid?r.a.createElement("li",null,r.a.createElement(i.b,{style:{paddingLeft:"0px"},to:"/profile/".concat(e.auth.uid),className:"thumb-link"},r.a.createElement("i",{className:"material-icons grey-text "},r.a.createElement("img",{className:"nav-image",src:e.profile.profileImage,alt:"profile"})))):r.a.createElement("li",null,r.a.createElement(i.b,{style:{paddingLeft:"0px"},to:"/signin",className:"thumb-link"},r.a.createElement("i",{className:"material-icons grey-text "},"account_circle"))))),r.a.createElement("div",{className:"nav-content"},r.a.createElement("div",{className:"center"},r.a.createElement(i.c,{to:"/"},r.a.createElement("span",{className:"nav-item"},"HOME")),r.a.createElement(i.c,{to:"/contributors"},r.a.createElement("span",{className:"nav-item"},"WALL OF CONTRIBUTORS"))))))})),m=a(34),u=function(e){var t=e.article,a=t.postedDate.toDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+" "+a.getDate()+", "+a.getFullYear();return console.log(n),r.a.createElement("div",null,r.a.createElement("div",{className:"card z-depth-0 horizontal"},r.a.createElement("div",{className:"card-stacked"},r.a.createElement("div",{className:"card-content",style:{padding:"6px 6px 6px 12px"}},r.a.createElement(i.b,{className:"black-text",to:"/article/".concat(t.id)},r.a.createElement("p",{style:{fontWeight:"700",fontSize:"22px"}},t.title)),r.a.createElement("p",{className:"block-text grey-text"},t.description)),r.a.createElement("div",{className:"card-action",style:{padding:"8px 16px"}},r.a.createElement("p",{style:{margin:"0px",fontSize:"11px"}},"Published on ",n),r.a.createElement("p",{style:{margin:"0px",fontSize:"12px"}},"By ",t.author)))))},p=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card-panel black"},r.a.createElement("h3",{className:"white-text",style:{fontFamily:"Abril Fatface"}},"Important Informations"),r.a.createElement("span",{className:"white-text"},"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.")),r.a.createElement("div",{className:"card-panel blue"},r.a.createElement("h3",{className:"white-text",style:{fontFamily:"Abril Fatface"}},"Important Informations"),r.a.createElement("span",{className:"white-text"},"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.")))},d=a(22),h=a(10),f=Object(h.d)(Object(s.b)(function(e){return{articles:e.firestore.ordered.articles}}),Object(d.firestoreConnect)([{collection:"articles"}]))(function(e){if(void 0===e.articles)return r.a.createElement("div",{className:"loader preloader-wrapper center active"},r.a.createElement("div",{className:"spinner-layer spinner-blue-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"}))));var t=e.articles.map(function(e){return r.a.createElement(u,{key:e.id,article:e})});return r.a.createElement("div",null,r.a.createElement("header",{className:"header-img"}),r.a.createElement("div",{className:"blog-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 l7"},r.a.createElement("h3",{style:{marginTop:"15px",fontFamily:"Abril Fatface"}},"Latest"),t),r.a.createElement("div",{className:"col s12 l5 blog-sidebar"},r.a.createElement(p,null)))))}),E=function(e){var t=e.user;return r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-contents"},r.a.createElement("img",{style:{marginBottom:"0"},className:"profile-image",src:t.profileImage,alt:"contri-img"}),r.a.createElement("h6",{className:"center"},t.username))))},g=Object(h.d)(Object(s.b)(function(e,t){return{users:e.firestore.ordered.users}}),Object(d.firestoreConnect)([{collection:"users"}]))(function(e){if(void 0===e.users)return r.a.createElement("div",{className:"loader preloader-wrapper center active"},r.a.createElement("div",{className:"spinner-layer spinner-blue-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"}))));var t=e.users.filter(function(e){return e.articleCount>=2}).map(function(e){return console.log(e.id),r.a.createElement("div",{className:"col align-center",key:e.id},r.a.createElement(E,{user:e}))});return r.a.createElement("div",{style:{width:"90%",margin:"0 auto"}},r.a.createElement("div",{className:"contianer center contri-section"},r.a.createElement("h4",{style:{fontFamily:"Abril Fatface"}},"Contributors"),r.a.createElement("div",{className:"row"},t)))}),b=Object(s.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}},function(e){return{logout:function(){e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})}).catch(function(t){e({type:"LOGOUT_ERROR",err:t})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper black"},r.a.createElement("span",null,r.a.createElement("span",{className:"left profile-nav-title",style:{fontWeight:"400",paddingLeft:"10px",fontSize:"2em"}},"Hey! ",e.profile.username," ")," ",e.auth.uid?r.a.createElement("button",{onClick:function(){return e.logout(e.logout)},className:"logout-btn btn black-text white"},"Logout"):null),r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(i.c,{to:e.url},"About")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"".concat(e.url,"/articles")},"Your Articles")),r.a.createElement("li",{style:{paddingRight:"20px"}},r.a.createElement(i.b,{to:"".concat(e.url,"/newarticle")},r.a.createElement("button",{className:"waves-effect waves-light btn black-text white"},"New Article")))))),r.a.createElement("nav",{className:"mobile-profile-nav"},r.a.createElement("div",{className:"nav-wrapper black"},r.a.createElement("div",{className:"profile-nav-items"}," ",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.c,{to:e.url},"About")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"".concat(e.url,"/articles")},"Your Articles")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"".concat(e.url,"/newarticle")},r.a.createElement("button",{style:{paddingLeft:"10px",paddingRight:"10px"},className:"waves-effect waves-light btn black-text white"},"New Article"))))))))}),v=a(15),N=a(16),y=a(19),x=a(17),w=a(18),O=Object(s.b)(null,function(e){return{removeArticle:function(t){e(function(e){return function(t,a,n){var r=n.getFirestore,l=n.getFirebase,c=r(),i=l().auth().currentUser.uid,s=a().firebase.profile.articleCount;console.log(e),c.collection("articles").doc(e).delete().then(function(){return c.collection("users").doc(i).update({articleCount:s-1})}).then(function(){t({type:"ARTICLE_DELETE_SUCCESSFUL"})}).then(function(){t({type:"ARTICLE_DELETE_ERROR"})})}}(t))}}})(function(e){var t=e.article.postedDate.toDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear();return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h4",{className:"catd-title",style:{marginTop:"0"}},e.article.title),r.a.createElement("p",null,e.article.description)),r.a.createElement("div",{className:"card-action",style:{padding:"8px 16px"}},r.a.createElement("p",{className:"grey-text"},"published on ",a),r.a.createElement("button",{onClick:function(){return e.removeArticle(e.article.id)},className:"black btn white-text"},"Delete"))))}),S=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card-panel black"},r.a.createElement("span",{className:"white-text"},e.data.content)))},C=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){this.props.firestore.setListener({collection:"articles"})}},{key:"render",value:function(){var e=this;if(void 0===this.props.articles)return r.a.createElement("div",{className:"loader preloader-wrapper center active"},r.a.createElement("div",{className:"spinner-layer spinner-blue-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"}))));var t=this.props.articles.filter(function(t){return t.authorId===e.props.firebase._.authUid}),a=t.length?t.map(function(e){return r.a.createElement(O,{key:e.id,article:e})}):r.a.createElement("div",null,r.a.createElement("h5",{style:{fontSize:"1.2em"}},"No Articles"),r.a.createElement("h6",{className:"grey-text",style:{fontSize:"1em"}},"Click on NEW ARTICLE to pusblish your first article"));return r.a.createElement("div",{className:"container",style:{width:"90%",marginTop:"30px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 l7"},r.a.createElement("h4",null,"Your Articles"),a),r.a.createElement("div",{className:"col s12 l5"},r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Notifications"),[{id:1,content:"You get featured in the contributors section once you publish 2 articles."},{id:2,content:"This WebApp is still in Beta version."}].map(function(e){return r.a.createElement(S,{key:e.id,data:e})})))))}}]),t}(r.a.Component),j=Object(h.d)(Object(s.b)(function(e){return{articles:e.firestore.ordered.articles}}),Object(d.firestoreConnect)([{collection:"articles",orderBy:["postedDate","desc"]}]))(C),I=a(30),T=a(219),R=a.n(T),k=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",content:"",author:"",header:"",file:{}},a.handleFileUpload=function(e){var t=e.target.files[0],n=R.a.storage().ref().child(e.target.files[0].name);n.put(t).then(function(e){n.getDownloadURL().then(function(e){a.setState({header:e})})})},a.handleChange=function(e){var t,n=a.props.profile.username;a.setState((t={},Object(I.a)(t,e.target.id,e.target.value),Object(I.a)(t,"author",n),t))},a.handleSubmit=function(e){e.preventDefault(),a.props.newArticle(a.state),a.setState({title:"",description:"",content:"",author:"",header:""}),a.props.history.push("/profile/".concat(a.props.auth.uid,"/articles"))},a}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return console.log(this.state.header),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card newarticle-card",style:{marginTop:"30px"}},r.a.createElement("div",{className:"card-contents"},r.a.createElement("div",{className:"cont"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("button",{className:"btn black white-text right",style:{marginTop:"20px"}},"Publish"),r.a.createElement("h4",{style:{paddingTop:"30px",marginBottom:"0",fontSize:"18px"}},"Title"),r.a.createElement("div",{className:"input-field col s12",style:{marginTop:"0"}},r.a.createElement("input",{value:this.state.title,id:"title",onChange:this.handleChange,style:{fontSize:"22px",fontWeight:"700"},type:"text",className:"validate",required:!0})),r.a.createElement("h4",{style:{paddingTop:"30px",marginBottom:"0",fontSize:"18px"}},"Description"),r.a.createElement("div",{className:"input-field col s12",style:{marginTop:"0"}},r.a.createElement("textarea",{value:this.state.description,id:"description",onChange:this.handleChange,style:{height:"80px"},className:"materialize-textarea grey-text",required:!0})),r.a.createElement("h4",{style:{paddingTop:"30px",marginBottom:"0",fontSize:"18px"}},"Image (if any)"),r.a.createElement("div",{style:{position:"absolute",top:"40%",left:"50%"},className:" center file-field input-field"},r.a.createElement("div",{className:"btn black logout-btn change-btn"},r.a.createElement("span",{className:"change-btn-font"},"Edit"),r.a.createElement("input",{type:"file",onChange:this.handleFileUpload})),r.a.createElement("div",{className:"file-path-wrapper"},r.a.createElement("input",{style:{width:"0"},className:"file-path validate",type:"text"}))),r.a.createElement("h4",{style:{paddingTop:"30px",marginBottom:"0",fontSize:"15px"}},"Article content"),r.a.createElement("div",{className:"input-field col s12",style:{marginTop:"0"}},r.a.createElement("textarea",{value:this.state.content,id:"content",onChange:this.handleChange,style:{height:"200px",marginBottom:"20px"},className:"materialize-textarea",required:!0},r.a.createElement("br",null))))))))))}}]),t}(n.Component),A=Object(s.b)(function(e){return{profile:e.firebase.profile,articleError:e.blog.articleError,auth:e.firebase.auth}},function(e){return{newArticle:function(t){e(function(e){return function(t,a,n){var r=n.getFirebase,l=(0,n.getFirestore)(),c=r();console.log(c.auth().currentUser.profile);var i=c.auth().currentUser.uid,s=a().firebase.profile.articleCount;l.collection("articles").doc().set({authorId:i,title:e.title,description:e.description,content:e.content,postedDate:new Date,author:e.author,header:e.header}).then(function(e){return console.log(e),l.collection("users").doc(i).update({articleCount:s+1})}).then(function(){t({type:"ARTICLEPOST_SUCCESS"})}).catch(function(e){t({type:"ARTICLEPOST_ERROR".err})})}}(t))}}})(k),F=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).state={allow:"no"},a}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this;return this.state.allow||this.props.profile.firstTime?(console.log(this.props.profile),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card yo-card about-card center",style:{marginTop:"10px",marginRight:"-20px",marginLeft:"0"}},r.a.createElement("div",{className:"card-contents"},r.a.createElement("div",{className:"container"},!1===this.props.auth.emailVerified?r.a.createElement("p",{className:"red-text"},"Verify your email "):null,r.a.createElement("img",{className:"profile-image",src:this.props.profile.profileImage,alt:"profile-img"}),r.a.createElement("div",{className:"card-title",style:{fontSize:"22px"}},this.props.profile.username),r.a.createElement("p",{style:{width:"50%$"}},this.props.profile.bio),r.a.createElement(i.b,{to:"".concat(this.props.match.url,"/editprofile")},r.a.createElement("button",{className:"btn center black"},"Edit Profile"))),!1===this.props.auth.emailVerified?r.a.createElement("button",{className:"black btn",style:{marginTop:"10px"},onClick:function(){return e.props.verifyemail()}},"Verify email"):null))))):r.a.createElement(m.a,{to:"".concat(this.props.match.url,"/editprofile")})}}]),t}(r.a.Component),L=Object(s.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}},function(e){return{verifyemail:function(){e(function(e,t,a){(0,a.getFirebase)().auth().currentUser.sendEmailVerification({url:"http://localhost:3000/"}).then(function(){console.log("working")}).catch(function(){console.log("nope")})})}}})(F),U=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).state={bio:a.props.profile.bio,username:a.props.profile.username,file:{},img:""},a.handleFileUpload=function(e){a.setState({file:e.target.files[0]})},a.handleSubmit=function(e){e.preventDefault(),a.props.save(a.state),a.setState({bio:"",username:"",file:{}}),a.props.history.push("/profile/".concat(a.props.auth.uid))},a.handleBio=function(e){a.setState({bio:e.target.value})},a.handleUsername=function(e){a.setState({username:e.target.value})},a}return Object(w.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){this.setState({img:this.props.profile.profileImage})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card yo-card about-card center edit-profile-card",style:{marginTop:"30px"}},r.a.createElement("div",{className:"card-contents"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("img",{className:"profile-image",src:this.props.profile.profileImage,alt:"edit-img"}),r.a.createElement("div",{style:{top:"80%",width:"15%",margin:"auto",padding:"10px"},className:" center file-field input-field"},r.a.createElement("div",{className:"btn logout-btn change-btn"},r.a.createElement("span",{className:"change-btn-font"},"Edit Image"),r.a.createElement("input",{type:"file",onChange:this.handleFileUpload})),r.a.createElement("div",{className:"file-path-wrapper"},r.a.createElement("input",{style:{width:"0"},className:"file-path validate",type:"text"}))),r.a.createElement("div",{className:"card-title"},this.props.profile.username),r.a.createElement("div",{className:"input-field col s12",style:{marginTop:"0"}},r.a.createElement("h4",{style:{paddingTop:"10px",marginBottom:"0",marginTop:"0px",fontSize:"15px"}},"Your username"),r.a.createElement("textarea",{value:this.state.username,id:"bio",onChange:this.handleUsername,className:"materialize-textarea grey-text",required:!0})),r.a.createElement("div",{className:"input-field col s12",style:{marginTop:"0"}},r.a.createElement("h4",{style:{paddingTop:"10px",marginBottom:"0",marginTop:"0px",fontSize:"15px"}},"Your Bio"),r.a.createElement("textarea",{value:this.state.bio,id:"bio",onChange:this.handleBio,className:"materialize-textarea grey-text",required:!0})),r.a.createElement("button",{style:{margin:"20px 20px"},className:"btn black"},"Save"))))))))}}]),t}(n.Component),D=Object(s.b)(function(e){return{profile:e.firebase.profile,auth:e.firebase.auth}},function(e){return{save:function(t){e(function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,c=a().firebase.auth.uid,i=l(),s=r();s.storage().ref().child("profileImg/".concat(c)).put(e.file).then(function(e){console.log("image uploaded")}).then(function(){return s.storage().ref().child("profileImg/".concat(c)).getDownloadURL().then(function(t){return console.log(t),i.collection("users").doc(c).set({profileImage:t,bio:e.bio,firstTime:"nope",username:e.username})})}).then(function(){console.log("yooy")}).catch(function(e){console.log(e)})}}(t))}}})(U),z=Object(s.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.match.url;return console.log(t),e.auth.uid?r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(b,{url:t}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/profile/:id",component:L}),r.a.createElement(m.b,{path:"".concat(t,"/articles"),component:j}),r.a.createElement(m.b,{path:"".concat(t,"/newarticle"),component:A}),r.a.createElement(m.b,{path:"".concat(t,"/editprofile"),component:D})))):r.a.createElement(m.a,{to:"/arht"})}),_=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.changeHandle=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.submitHandle=function(e){e.preventDefault(),a.props.signin(a.state)},a}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(m.a,{to:"profile/".concat(this.props.auth.uid)}):r.a.createElement("div",null,r.a.createElement("div",{className:"container cred-card",style:{width:"50%",position:"absolute",left:"25%"}},r.a.createElement("div",{className:"card yo-card about-card card-length",style:{marginTop:"30px"}},r.a.createElement("div",{className:"card-contents"},r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"cred-card-align"},r.a.createElement("h4",{style:{fontFamily:"Abril Fatface",paddingTop:"50px",paddingBottom:"10px"}},"Signin."),r.a.createElement("form",{onSubmit:this.submitHandle},this.props.authError?r.a.createElement("p",{className:"red-text"},this.props.authError.code):null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.changeHandle,className:"auth-input validate",id:"email",type:"email"}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.changeHandle,className:"auth-input validate",id:"password",type:"password"}),r.a.createElement("label",{htmlFor:"password"},"Password")),r.a.createElement("button",{style:{marginBottom:"20px"},type:"submit",className:"black btn waves-effect waves-light"},"Signin")),r.a.createElement(i.b,{to:"/signup"},r.a.createElement("span",{className:" black-text signup-text"},"New? Signup"))))))))}}]),t}(n.Component),B=Object(s.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth,profile:e.firebase.profile}},function(e){return{signin:function(t){e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",err:e})})}}(t))}}})(_),P=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signup(a.state)},a}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(m.a,{to:"profile/".concat(this.props.auth.uid)}):r.a.createElement("div",null,r.a.createElement("div",{className:"container cred-card",style:{width:"50%",position:"absolute",left:"25%"}},r.a.createElement("div",{className:"card yo-card about-card card-length-signup",style:{marginTop:"30px"}},r.a.createElement("div",{className:"card-contents"},r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"cred-card-align"},r.a.createElement("h4",{className:"signup-txt",style:{fontFamily:"Abril Fatface",paddingTop:"50px",paddingBottom:"10px"}},"Signup."),this.props.signupauthError?r.a.createElement("p",{className:"red-text"},this.props.signupauthError):null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.handleChange,className:"auth-input",id:"username",type:"text"}),r.a.createElement("label",{htmlFor:"username"},"Name")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.handleChange,className:"auth-input validate",id:"email",type:"email"}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.handleChange,className:"auth-input validate",id:"password",type:"password"}),r.a.createElement("label",{htmlFor:"password"},"Password")),r.a.createElement("button",{style:{marginBottom:"20px"},type:"submit",className:"black btn waves-effect waves-light"},"Signup")),r.a.createElement(i.b,{to:"/signin"},r.a.createElement("span",{className:"signup-text black-text"},"Not new? Signin"))))))))}}]),t}(n.Component),W=Object(s.b)(function(e){return{auth:e.firebase.auth,signupauthError:e.auth.signupauthError}},function(e){return{signup:function(t){e(function(e){return console.log(e.username),function(t,a,n){var r=n.getFirebase,l=n.getFirestore,c=r(),i=l();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return i.collection("users").doc(t.user.uid).set({username:e.username,joinDate:new Date,firstTime:null,profileImage:e.profileImage,articleCount:0})}).then(function(){c.auth().currentUser.sendEmailVerification({url:"http://localhost:3000/"}).then(function(){console.log("email link sent")}).catch(function(e){console.log("email link error")})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(P),G=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props.match.params.articleId;if(void 0===this.props.articles)return r.a.createElement("div",{className:"loader preloader-wrapper center active"},r.a.createElement("div",{className:"spinner-layer spinner-blue-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"}))));var t=this.props.articles.filter(function(t){return t.id===e}),a=t.length?t.map(function(e){console.log(e);var t=e.header;return r.a.createElement("div",{key:e.id,style:{paddingTop:"20px",paddingBottom:"20px"}},r.a.createElement("header",{className:"header-single",style:{backgroundImage:"url("+t+")"}}),r.a.createElement("h4",{style:{fontWeight:"700"}},e.title),r.a.createElement("p",{className:"grey-text",style:{color:"#999999",fontWeight:"600",fontSize:"22px"}},e.description),r.a.createElement("p",{className:"left-align display-linebreak",style:{fontSize:"18px"}},e.content))}):r.a.createElement("h1",null,"loading");return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card yo-card article-card about-card center edit-profile-card",style:{marginTop:"30px"}},r.a.createElement("div",{className:"card-contents"},r.a.createElement("div",{className:"container",syle:{marginTop:"20px",marginBottom:"20px"}},a)))))}}]),t}(n.Component),M=Object(h.d)(Object(d.firestoreConnect)([{collection:"articles"}]),Object(s.b)(function(e){return{articles:e.firestore.ordered.articles}}))(G);var H=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:f}),r.a.createElement(m.b,{path:"/contributors",component:g}),r.a.createElement(m.b,{path:"/profile/:uid",component:z}),r.a.createElement(m.b,{path:"/signin",component:B}),r.a.createElement(m.b,{path:"/signup",component:W}),r.a.createElement(m.b,{path:"/article/:articleId",component:M}))))};a(384),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(48),Y={signinauthError:null,signupauthError:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login success"),e;case"LOGIN_ERROR":return console.log("signin error",t.err),Object(J.a)({},e,{authError:t.err});case"SIGNUP_SUCCESS":return console.log("signup successful"),e;case"SIGNUP_ERROR":return console.log("Signup error",t.err),Object(J.a)({},e,{signupauthError:t.err.code});default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"PROFILE_EDIT_SUCCESS":return console.log("profile edit success"),e;case"PROFILE_EDIT_ERROR":return console.log("profile edit fail"),e;default:return e}},K={articleError:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARTICLEPOST_SUCCESS":return console.log("posted"),Object(J.a)({},e,{articleError:"Article Published"});case"ARTICLEPOST_ERROR":return console.log(t.err),Object(J.a)({},e,{articleError:t.err.code});case"ARTICLE_DELETE_SUCCESS":return console.log("article deleted"),e;case"ARTICLE_DELETE_ERROR":return console.log("aerticle delete error"),e;default:return e}},Q=a(64),X=Object(h.c)({auth:q,profile:V,blog:$,firebase:d.firebaseReducer,firestore:Q.firestoreReducer}),Z=a(221),ee=a(137),te=a.n(ee);a(415),a(416),a(417);te.a.initializeApp({apiKey:"AIzaSyCy5xwUfKGdNL3CzygyhnE5fT5MzuPrN14",authDomain:"login-44df9.firebaseapp.com",databaseURL:"https://login-44df9.firebaseio.com",projectId:"login-44df9",storageBucket:"login-44df9.appspot.com",messagingSenderId:"114965926115",appId:"1:114965926115:web:87fbc95174dbefc69175d6"});var ae=te.a,ne=Object(h.e)(X,Object(h.d)(Object(h.a)(Z.a.withExtraArgument({getFirestore:Q.getFirestore,getFirebase:d.getFirebase})),Object(Q.reduxFirestore)(ae),Object(d.reactReduxFirebase)(ae,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));ne.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(s.a,{store:ne},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[222,1,2]]]);