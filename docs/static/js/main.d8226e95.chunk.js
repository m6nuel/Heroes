(this.webpackJsonpheroesapp=this.webpackJsonpheroesapp||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(21),r=n.n(c),s=n(3),o=n(27),i=n(4),l=n(14),d=n.n(l),u=n(19),j=n(22),m=n.n(j),b="[Auth] Login",p="[Auth] Logout",h="[Auth] Check",O="[Modal] Open Search",x="[Modal] Close Search",f="[ModalInfo] Open Info",g="[ModalInfo] Close Info",v="[Heroes] Search",N="[Heroe] Equipo",y="[Heroe] Eliminado",w=function(e){return{type:b,payload:{logueado:e}}},k=function(){return{type:p,payload:{logueado:!1}}},E=n(28),I=n.n(E),S=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://superheroapi.com/api.php/10227697953733690/search/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){return{type:v,payload:{heroes:e}}},A=n(20),C=n.n(A),M=function(){return{type:x,payload:{openModal:!1}}},R=n(1),H={content:{color:"black",top:"50%",left:"50%",right:"auto",bottom:"auto"}};C.a.setAppElement("#root");var F=function(){var e=Object(s.c)((function(e){return e.modalInfo})).modalInfo,t=localStorage.getItem("heroeDetalle"),n=JSON.parse(t),a=Object(s.b)();return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(C.a,{isOpen:e,onRequestClose:function(){a({type:g,payload:{modalInfo:!1}})},style:H,closeTimeoutMS:200,className:"modal-info bg-ligth",overlayClassName:"modal-fondo",children:n&&Object(R.jsxs)("div",{className:"row g-0",children:[Object(R.jsx)("h1",{children:"Informacion del Heroe"}),Object(R.jsx)("div",{className:"col-md-6",children:Object(R.jsx)("img",{src:n.image.url,className:"img-fluid rounded-start",alt:"..."})}),Object(R.jsx)("div",{className:"col-md-6",children:Object(R.jsxs)("div",{className:"card-body",children:[Object(R.jsxs)("p",{className:"card-text",children:["Nombre:           ",n.name," "]}),Object(R.jsxs)("p",{className:"card-text",children:["Peso:             ",n.appearance.weight[1]]}),Object(R.jsxs)("p",{className:"card-text",children:["Altura:           ",n.appearance.height[1],"  "]}),Object(R.jsxs)("p",{className:"card-text",children:["Alias:            ",n.biography.aliases[0]]}),Object(R.jsxs)("p",{className:"card-text",children:["Lugar de Trabajo: ",n.work.occupation]})]})})]})})})},_=n(6),D=n(13),J=function(e){var t=e.id,n=e.connections,a=e.appearance,c=e.biography,r=e.image,o=e.name,i=e.powerstats,l=e.work,d=Object(s.b)(),u={id:t,connections:n,appearance:a,biography:c,image:r,name:o,powerstats:i,work:l};return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{className:"card mr-3 m-3 col-3",children:[Object(R.jsx)("h5",{className:"card-title",children:o}),Object(R.jsx)("img",{src:r.url,className:"card-img-top",alt:"..."}),Object(R.jsx)("div",{className:"card-body",children:Object(R.jsx)("p",{className:"card-text",children:c.alignment})}),Object(R.jsx)("button",{className:"btn btn-primary m-3",onClick:function(){d({type:N,payload:{heroesEquipo:u}}),d(M())},children:" Agregar al equipo "})]})})},B={content:{color:"black",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};C.a.setAppElement("#root");var L=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.modal})).openModal,n=Object(s.c)((function(e){return e.search})).heroes;return Object(R.jsxs)(C.a,{isOpen:t,onRequestClose:function(){e(M())},style:B,closeTimeoutMS:200,className:"modal bg-dark justify-content-center",overlayClassName:"modal-fondo",children:[Object(R.jsx)(D.d,{initialValues:{heroe:""},validate:function(e){var t={};return e.heroe?e.heroe:t.heroe="Ingrese el heroe a buscar",t},onSubmit:function(t){var n=t.heroe;e(function(e){return function(){var t=Object(u.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{S(e).then((function(e){var t=e.data.results;t?(n(q(t)),localStorage.setItem("heroes",JSON.stringify(t))):I.a.fire("Heroe No encontrado")}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))},children:function(){return Object(R.jsx)("div",{children:Object(R.jsxs)(D.c,{children:[Object(R.jsxs)("div",{className:"container form-group input-group mb-3 g-4",children:[Object(R.jsx)("button",{type:"submit",className:"input-group-text btn btn-primary",children:" Buscar Heroes "}),Object(R.jsx)(D.b,{type:"text",className:"form-control",placeholder:"Buscar Heroe",name:"heroe",autoComplete:"off"})]}),Object(R.jsx)(D.a,{className:"alert alert-danger",name:"heroe",component:"div"})]})})}}),Object(R.jsx)("div",{className:"row row-cols-1 row-cols-md-4 justify-content-center",children:n.map((function(e){return Object(R.jsx)(J,Object(_.a)({},e),e.id)}))})]})},T=function(){var e=Object(s.b)(),t=function(){e({type:O,payload:{openModal:!0}})},n=Object(s.c)((function(e){return e.equipo})).heroesEquipo;return 6===n.length&&I.a.fire("Equipo completo"),Object(R.jsx)(R.Fragment,{children:n.length<=5?Object(R.jsx)("button",{className:"btn btn-primary",onClick:t,children:"Buscar Heroes"}):Object(R.jsx)("button",{disabled:!0,className:"btn btn-primary",onClick:t,children:"Buscar Heroes"})})},P=function(e){var t=e.id,n=e.connections,a=e.appearance,c=e.biography,r=e.image,o=e.name,i=e.powerstats,l=e.work,d=Object(s.b)(),u={id:t,connections:n,appearance:a,biography:c,image:r,name:o,powerstats:i,work:l};return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)("div",{className:"card m-2 bg-dark",children:Object(R.jsxs)("div",{className:"col",children:[Object(R.jsxs)("span",{className:"card-title",children:[" ",o," "]}),Object(R.jsx)("img",{src:r.url,className:"card-img",alt:o}),Object(R.jsxs)("div",{className:"col-md-12",children:[Object(R.jsxs)("div",{className:"card-text",children:[" intelligence: ",i.intelligence," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Strength:     ",i.strength," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Speed:        ",i.speed," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Durability:   ",i.durability," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Power:        ",i.power," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Combat:       ",i.combat," "]}),Object(R.jsx)("button",{className:"btn btn-primary col-6",onClick:function(){d(function(e){return{type:f,payload:{modalInfo:!0,heroe:e}}}(u)),localStorage.setItem("heroeDetalle",JSON.stringify(u))},children:"Detalles"}),Object(R.jsx)("button",{className:"btn btn-danger col-6",onClick:function(){d(function(e){return{type:y,payload:{heroesEquipo:e}}}(u.id))},children:"Eliminar"})]})]})})})},Z=function(){var e=Object(s.c)((function(e){return e.equipo})).heroesEquipo;return Object(R.jsxs)(R.Fragment,{children:["  ",Object(R.jsx)("div",{className:"container-sm",children:Object(R.jsx)("div",{className:"row row-cols-1 row-cols-md-3 cards-columns",children:e.map((function(e){return Object(R.jsx)(P,Object(_.a)({className:"container-sm"},e),e.id)}))})})]})},V=function(){var e=Object(s.b)();return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(R.jsxs)("div",{className:"container-fluid",children:[Object(R.jsx)("span",{className:"navbar-brand",href:"#",children:"Heroes App"}),Object(R.jsx)("button",{className:"btn btn-danger text-end",onClick:function(){e((function(e){localStorage.clear(),e(k())}))},children:" Salir "})]})})})},$=function(){var e=Object(s.c)((function(e){return e.equipo.heroesEquipo})),t=e.map((function(e){return e.powerstats.intelligence})).map((function(e){return Number(e)})).reduceRight((function(e,t){return e+t}),0),n=e.map((function(e){return e.powerstats.strength})).map((function(e){return Number(e)})).reduceRight((function(e,t){return e+t}),0),a=e.map((function(e){return e.powerstats.speed})).map((function(e){return Number(e)})).reduceRight((function(e,t){return e+t}),0),c=e.map((function(e){return e.powerstats.durability})).map((function(e){return Number(e)})).reduceRight((function(e,t){return e+t}),0),r=e.map((function(e){return e.powerstats.power})).map((function(e){return Number(e)})).reduceRight((function(e,t){return e+t}),0),o=e.map((function(e){return e.powerstats.combat})).map((function(e){return Number(e)})).reduceRight((function(e,t){return e+t}),0);return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{className:"col-md-12 m-5",children:[Object(R.jsxs)("div",{className:"powerStats",children:["Intelligence:  ",t/e.length," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Strength:      ",n/e.length," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Speed:         ",a/e.length," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Durability:    ",c/e.length," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Power:         ",r/e.length," "]}),Object(R.jsxs)("div",{className:"card-text",children:[" Combat:        ",o/e.length," "]})]})})},X=function(){return Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)(V,{}),Object(R.jsx)(L,{}),Object(R.jsx)("div",{className:"col-1",children:Object(R.jsx)(T,{})}),Object(R.jsx)("div",{className:" col-6 ",children:Object(R.jsx)(Z,{className:"col"})}),Object(R.jsxs)("div",{className:"col-4",children:[Object(R.jsx)("h3",{children:" powerstats promedios del Equipo "}),Object(R.jsx)($,{})]}),Object(R.jsx)(F,{})]})},z=function(){var e=Object(s.b)();return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(D.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email Requerido",e.password?/[A-Za-z\d$@$!%*?&]{4,6}/i.test(e.password)||(t.password="La clave debe ser tener mas de 4 caracteres"):t.password="contrase\xf1a Requerida",t},onSubmit:function(t){var n=t.email,a=t.password;e(function(e,t){return function(){var n=Object(u.a)(d.a.mark((function n(a){var c,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.post("http://challenge-react.alkemy.org/",{email:e,password:t});case 3:c=n.sent,(r=c.data.token)&&localStorage.setItem("token",r),a(w(!!r)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Credenciales Incorrectas");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,a))},children:function(e){var t=e.errors;return Object(R.jsx)("div",{className:"modal-dialog text-center",children:Object(R.jsx)("div",{className:"col-sm-8 main-seccion ",children:Object(R.jsxs)("div",{className:"modal-content shadow-lg p-3 mb-5 bg-body rounded",children:[Object(R.jsx)("div",{className:"col-12 shadow-sm p-1 mb-1 bg-body rounded",children:Object(R.jsx)("h2",{className:"shadow-sm p-3 mb-1 bg-dark text-primary rounded",children:" Ingresar "})}),Object(R.jsxs)(D.c,{className:"col-12",children:[Object(R.jsxs)("div",{className:"form-group m-4",children:[Object(R.jsx)(D.b,{type:"email",className:"form-control shadow-lg p-2 mb-0 bg-body rounded",placeholder:"Email",name:"email"}),Object(R.jsx)(D.a,{name:"email",component:function(){return Object(R.jsxs)("div",{className:"text-start text-danger",children:[" ",t.email," "]})}})]}),Object(R.jsxs)("div",{className:"form-group m-4",children:[Object(R.jsx)(D.b,{type:"password",className:"form-control shadow-lg p-2 mt-5 mb-0 bg-body rounded",placeholder:"Contrase\xf1a",name:"password"}),Object(R.jsx)(D.a,{name:"password",component:function(){return Object(R.jsxs)("div",{className:"text-start text-danger",children:[" ",t.password," "]})}})]}),Object(R.jsx)("div",{className:"form-group m-4",children:Object(R.jsx)("button",{type:"submit",className:"btn btn-primary mt-5 shadow-p-3 rounded col-8",children:" Ingresar "})})]})]})})})}})})},U=n(31),G=["isAuthenticated","component"],K=function(e){var t=e.isAuthenticated,n=e.component,a=Object(U.a)(e,G);return Object(R.jsx)(i.b,Object(_.a)(Object(_.a)({},a),{},{component:function(e){return t?Object(R.jsx)(n,Object(_.a)({},e)):Object(R.jsx)(i.a,{to:"/login"})}}))},Q=["isAuthenticated","component"],W=function(e){var t=e.isAuthenticated,n=e.component,a=Object(U.a)(e,Q);return Object(R.jsx)(i.b,Object(_.a)(Object(_.a)({},a),{},{component:function(e){return t?Object(R.jsx)(i.a,{to:"/"}):Object(R.jsx)(n,Object(_.a)({},e))}}))},Y=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.logueado})).check;return Object(a.useEffect)((function(){var t=localStorage.getItem("token");t&&e(w(!!t));var n=localStorage.getItem("heroes");n&&e(q(JSON.parse(n)))}),[e]),Object(R.jsx)("div",{children:Object(R.jsx)(o.a,{children:Object(R.jsx)("div",{children:Object(R.jsxs)(i.d,{children:[Object(R.jsx)(W,{path:"/login",component:z,isAuthenticated:t}),Object(R.jsx)(K,{exact:!0,isAuthenticated:t,path:"/",component:X}),Object(R.jsx)(i.a,{to:"/login"})]})})})})},ee=n(23),te=n(54),ne={logueado:!1,check:!1},ae=n(55),ce={heroesEquipo:[]},re={openModal:!1},se={modalInfo:!1},oe={heroes:[]},ie=Object(ee.b)({logueado:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{logueado:t.payload.logueado,check:!0};case h:case p:return{check:!1};default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{openModal:!0};case x:return{openModal:!1};default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;return t.type===v?{heroes:t.payload.heroes}:e},equipo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(_.a)(Object(_.a)({},e),{},{heroesEquipo:[].concat(Object(ae.a)(e.heroesEquipo),[t.payload.heroesEquipo])});case y:return{heroesEquipo:e.heroesEquipo.filter((function(e){return e.id!==t.payload.heroesEquipo}))};default:return e}},modalInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{modalInfo:!0};case g:return{modalInfo:!1};default:return e}}}),le="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.c,de=Object(ee.d)(ie,le(Object(ee.a)(te.a))),ue=function(){return Object(R.jsx)(s.a,{store:de,children:Object(R.jsx)(Y,{})})};n(103);r.a.render(Object(R.jsx)(ue,{}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.d8226e95.chunk.js.map