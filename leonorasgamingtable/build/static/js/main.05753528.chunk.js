(this.webpackJsonpleonorasgamingtable=this.webpackJsonpleonorasgamingtable||[]).push([[0],{36:function(e,t,n){e.exports=n(80)},41:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,n){},76:function(e,t){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(18),c=n.n(l),i=(n(41),n(42),n(5)),s=n(4),r=n(7),u=n(1),m=(n(43),n(44),n(19)),f=n.n(m),b=n(2),d=n.n(b);var v=function(){var e=f()("wss://revisionexquisite.herokuapp.com/",{autoConnect:!1,transports:["websocket","polling"]}),t=Object(a.useRef)(),n=Object(a.useState)("off"),l=Object(u.a)(n,2),c=l[0],m=l[1],b=Object(a.useState)("off"),v=Object(u.a)(b,2),p=v[0],g=v[1],h=Object(a.useState)(""),j=Object(u.a)(h,2),O=j[0],E=j[1],N=Object(a.useState)("on"),y=Object(u.a)(N,2),k=y[0],S=y[1],w=Object(a.useState)(""),x=Object(u.a)(w,2),C=x[0],M=x[1],T=Object(a.useState)(""),B=Object(u.a)(T,2),P=B[0],L=B[1],H=Object(a.useState)("Write your first sentence please"),D=Object(u.a)(H,2),A=D[0],R=D[1],F=Object(a.useState)([]),W=Object(u.a)(F,2),I=W[0],q=W[1],J=Object(a.useState)(""),G=Object(u.a)(J,2),Q=G[0],X=G[1],$=Object(a.useState)([]),z=Object(u.a)($,2),K=z[0],U=z[1],V=Object(a.useState)([]),Y=Object(u.a)(V,2),Z=Y[0],_=Y[1],ee=Object(a.useState)("off"),te=Object(u.a)(ee,2),ne=(te[0],te[1],Object(a.useState)("off")),ae=Object(u.a)(ne,2),oe=ae[0],le=ae[1],ce=Object(a.useState)("off"),ie=Object(u.a)(ce,2),se=ie[0],re=ie[1],ue=Object(a.useState)(""),me=Object(u.a)(ue,2),fe=me[0],be=me[1],de=Object(a.useState)(""),ve=Object(u.a)(de,2),pe=ve[0],ge=ve[1],he=Object(a.useState)("off"),je=Object(u.a)(he,2),Oe=je[0],Ee=je[1],Ne=Object(a.useState)("off"),ye=Object(u.a)(Ne,2),ke=ye[0],Se=ye[1],we=Object(a.useState)("off"),xe=Object(u.a)(we,2),Ce=xe[0],Me=xe[1],Te=Object(a.useState)(""),Be=Object(u.a)(Te,2),Pe=Be[0],Le=Be[1],He=Object(a.useState)("Welcome dear visitor, what would you like to be called?"),De=Object(u.a)(He,2),Ae=De[0],Re=De[1];Object(a.useEffect)((function(){"off"===p&&ge("on")}),[]),Object(a.useEffect)((function(){C.length>0&&Re("please also Select a spirit guide"),0===C.length&&Re("Welcome dear visitor,what would you like to be called?")}),[C]),Object(a.useEffect)((function(){O.length>0&&(e.connect(),e.on("connect",(function(){e.emit("username",{userName:O,room:fe})}))),e.on("users",(function(e){q(e)})),e.on("message",(function(e){U((function(t){return[].concat(Object(r.a)(t),[e])})),t.current.scrollTop=t.current.scrollHeight})),e.on("connected",(function(e){q((function(t){return[].concat(Object(r.a)(t),[e])}))})),e.on("start",(function(e){_((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.sentences))})),Le(e.currentPlayer),Fe(),e.currentPlayer===O?S("on"):(S("off"),R(""))})),e.on("rejected",(function(){Re("user name already Taken, sorry"),setTimeout((function(){Re("Welcome dear visitor,what would you like to be called?")}),1e3)})),e.on("sentenceBroadcast",(function(e){console.log("newsentence"),console.log(e.text),console.log(e.player),R(e.tail),Le(e.player),_((function(t){return[].concat(Object(r.a)(t),[e.text])})),e.player===O?S("on"):S("off")})),e.on("disconnected",(function(e){q((function(t){return t.filter((function(t){return t.id!==e}))}))}))}),[O]);var Fe=function(){"Leonora"===C||"Max"===C||"Marcel"===C||"Andre"===C||"Rene"===C||"Pablo"===C||"Benjamin"===C?Re("sorry "+C+" is already playing"):fe?C.length>0&&fe.length>0&&(ge("off"),g("on"),Se("on"),setTimeout((function(){Se("off")}),2e3),setTimeout((function(){m("on")}),2e3)):Re("please click on a spirit guide to choose her/him")},We=function(t){t.preventDefault(),t.stopPropagation();var n={message:Q,username:O,room:fe};e.open(),e.emit("send",n),X("")},Ie=d()("invisible",{andreb:"on"===pe,andrebSelected:"1"===fe}),qe=d()("invisible",{rene:"on"===pe,reneSelected:"2"===fe}),Je=d()("invisible",{pablo:"on"===pe,pabloSelected:"3"===fe}),Ge=d()("invisible",{benjamin:"on"===pe,benjaminSelected:"4"===fe}),Qe=d()("invisible",{leonora:"on"===pe,leonoraSelected:"5"===fe}),Xe=d()("invisible",{max:"on"===pe,maxSelected:"6"===fe}),$e=d()("invisible",{andre:"on"===pe,andreSelected:"7"===fe}),ze=d()("invisible",{marcel:"on"===pe,marcelSelected:"8"===fe}),Ke=d()({ghostHeadAndreB:"1"===fe,andreBFall:"1"===fe&&"on"===ke,ghostHeadRene:"2"===fe,reneFall:"2"===fe&&"on"===ke,ghostHeadPablo:"3"===fe,pabloFall:"3"===fe&&"on"===ke,ghostHeadBenjamin:"4"===fe,benjaminFall:"4"===fe&&"on"===ke,ghostHeadLeonora:"5"===fe,leonoraFall:"5"===fe&&"on"===ke,ghostHeadMax:"6"===fe,maxFall:"6"===fe&&"on"===ke,ghostHeadAndre:"7"===fe,andreFall:"7"===fe&&"on"===ke,ghostHeadMarcel:"8"===fe,marcelFall:"8"===fe&&"on"===ke},{rotateHead:"on"===Oe},{flyAway:"on"===Ce}),Ue=["1","2","3","4","5","6","7","8"],Ve=Object(a.useState)({1:"off",2:"off",3:"off",4:"off",5:"off",6:"off",7:"off",8:"off"}),Ye=Object(u.a)(Ve,2),Ze=Ye[0],_e=Ye[1],et=Object(a.useState)({1:"off",2:"off",3:"off",4:"off",5:"off",6:"off",7:"off",8:"off"}),tt=Object(u.a)(et,2),nt=tt[0],at=tt[1],ot=Object(a.useState)(""),lt=Object(u.a)(ot,2),ct=lt[0],it=lt[1],st=function(e){e.stopPropagation(),e.preventDefault(),console.log(e.target.id);var t=e.target.id;be(t),at(Object(s.a)({},t,"on")),console.log(nt),ct.length>0&&(_e(Object(i.a)(Object(i.a)({},Ze),{},Object(s.a)({},ct,"off"))),console.log("nametag "),console.log(Ze)),it(t),console.log("previousedoll"),console.log(ct)},rt=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;_e(Object(i.a)(Object(i.a)({},Ze),{},Object(s.a)({},t,"on")))},ut=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;"on"!==nt[t]&&_e(Object(i.a)(Object(i.a)({},Ze),{},Object(s.a)({},t,"off")))};e.on("nextPlayer",(function(e){console.log(e),console.log(Pe),Le(e),console.log("player and current player"),console.log(Pe),console.log(O),e===O?(S("on"),console.log("turnedon")):(S("off"),console.log("turnedoff"))}));var mt=function(e){var t=e.split(" ");return t.length>5&&(t=t.slice(t.length-5,t.Length)),t.join(" ")};return o.a.createElement("div",{className:"allContainer"},o.a.createElement("div",{className:"rules "+("on"===oe?"":"invisible")},o.a.createElement("div",{className:"rulesContent "+("on"===oe?"visible":"invisible")},o.a.createElement("div",{className:"closeRules",onClick:function(){le("off")}},"X"),o.a.createElement("p",null,"How to play: "),o.a.createElement("p",null,"When this game is played in person, each author writes a sentence",o.a.createElement("br",null),"(or a few sentences) on a piece of paper, then folds the paper so",o.a.createElement("br",null)," that all or some part of what they wrote is obscurred. The next author",o.a.createElement("br",null),"then contributes to the story using only the part of the sentence that is visible below the fold."))),o.a.createElement("div",{className:"on"===pe?"dollsBackDrop":"invisible"}),o.a.createElement("div",{className:"nameInputDiv "+("on"===p?" invisible":"")},o.a.createElement("div",{className:"nameQuestion"},Ae),o.a.createElement("input",{className:"nameinput",type:"text",onChange:function(e){e.preventDefault(),e.stopPropagation(),M(e.target.value)}}),o.a.createElement("input",{type:"submit",onClick:function(){"Leonora"===C||"Max"===C||"Marcel"===C||"Andre"===C||"Rene"===C||"Pablo"===C||"Benjamin"===C?Re("sorry "+C+" is already playing"):fe?C.length>0&&fe.length>0&&E(C):Re("please click on a spirit guide to choose her/him")}})),o.a.createElement("div",{id:Ue[0],className:Ie,onClick:st,onMouseOver:rt,onMouseLeave:ut},o.a.createElement("p",{className:"nameTag "+("on"===Ze[1]?"":"invisible")},"Andre B")),o.a.createElement("div",{id:Ue[1],className:qe,onClick:st,onMouseOver:rt,onMouseLeave:ut},o.a.createElement("p",{className:"nameTag "+("on"===Ze[2]?"":"invisible")},"Rene")),o.a.createElement("div",{id:Ue[2],className:Je,onClick:st,onMouseOver:rt,onMouseLeave:ut},o.a.createElement("p",{className:"nameTag "+("on"===Ze[3]?"":"invisible")},"Pablo")),o.a.createElement("div",{id:Ue[3],className:Ge,onClick:st,onMouseOver:rt,onMouseLeave:ut},o.a.createElement("p",{className:"nameTag "+("on"===Ze[4]?"":"invisible")},"Benjamin")),o.a.createElement("div",{id:Ue[4],className:Qe,onClick:st,onMouseOver:rt,onMouseLeave:ut},o.a.createElement("p",{className:"nameTag "+("on"===Ze[5]?"":"invisible")},"Leonora")),o.a.createElement("div",{id:Ue[5],className:Xe,onClick:st,onMouseOver:rt,onMouseLeave:ut},o.a.createElement("p",{className:"nameTag "+("on"===Ze[6]?"":"invisible")},"max")),o.a.createElement("div",{id:Ue[6],className:$e,onClick:st,onMouseOver:rt,onMouseLeave:ut},o.a.createElement("p",{className:"nameTag "+("on"===Ze[7]?"":"invisible")},"Andre M")),o.a.createElement("div",{id:Ue[7],className:ze,onClick:st,onMouseOver:rt,onMouseLeave:ut},o.a.createElement("p",{className:"nameTag "+("on"===Ze[8]?"":"invisible")},"Marcel")),o.a.createElement("div",{className:"exterior"},o.a.createElement("div",{className:"leftCurtain "+("on"===p?"leftcurtainOn":"")}),o.a.createElement("div",{className:"rightCurtain "+("on"===p?"rightCurtainOn":"")})),o.a.createElement("div",{className:"interior "},o.a.createElement("div",{className:"on"===p?Ke:"invisible"}),o.a.createElement("div",{className:"title "+("on"===c?"titleAnimate":"invisible")},o.a.createElement("div",{className:"on"===c?"titleText":"invisible"},"welcome ",O),o.a.createElement("div",{className:"on"===c?"titleText":"invisible"},o.a.createElement("h1",null,"let's play Exquisite Corpse!")),o.a.createElement("div",{className:"on"===c?"titleText":"invisible"},"current player : ",Pe)),o.a.createElement("div",{className:"table "+("on"===c?"tableAnimate":"invisible")},o.a.createElement("div",{className:"on"===c?"titleText":"invisible"},o.a.createElement("div",{className:"display "},A),o.a.createElement("div",{className:"on"===k?"invisible":""},"please wait your turn"),o.a.createElement("input",{className:"sentenceInput "+("on"===k?"":"invisible"),onChange:function(e){e.preventDefault(),e.stopPropagation(),L(e.target.value)},type:"text",placeholder:"write your sentence please"}),o.a.createElement("button",{className:"submitbutton "+("on"===k?"":"invisible"),onClick:function(){Ee("on");var t=mt(P);console.log(t),e.open(),e.emit("sentence",{sentence:P,room:fe,tail:t}),setTimeout((function(){Ee("off")}),2e3)}},"broadcast Sentence"),o.a.createElement("button",{className:"turnButtom gameButton",onClick:function(t){t.preventDefault(),t.stopPropagation(),e.open(),e.emit("nextPlayer",fe)}},"next player"),o.a.createElement("button",{className:"gameButton"},o.a.createElement("a",{href:"data:text/plain;charset=utf-8, "+Z.join("\n"),download:"poem.txt"},"download story")),o.a.createElement("button",{className:"openRulesButton gameButton",onClick:function(){le("on")}},"see Rules")))),o.a.createElement("div",{className:"sidenavchat "+("on"===c?"visible ":"invisible ")+("on"===se?"largeChat":"")},o.a.createElement("div",{className:"chatWindow "+("on"===se?"visible":"invisible")},K.length?o.a.createElement("div",{ref:t,className:"messageBox "+("on"===se?"onChatbox":"")},K.map((function(e,t){var n=e.user,a=(e.date,e.text);return o.a.createElement("div",{key:t,className:n===O?"toLeft":"toRight"},n,": ",a," ")}))):o.a.createElement("h1",{className:"chat-title"},"Speak")),o.a.createElement("div",null,o.a.createElement("input",{className:"chatBox "+("on"===se?"visible":"invisible"),type:"text",placeholder:"message",value:Q,onChange:function(e){return X(e.currentTarget.value)}}),o.a.createElement("button",{className:"chatbtn "+("on"===se?"":"invisible"),onClick:We},"speak"),o.a.createElement("button",Object(s.a)({className:"chatbtn "+("on"===se?"":"invisible"),onClick:We},"onClick",(function(t){t.preventDefault(),t.stopPropagation(),Me("on"),e.open(),setTimeout((function(){Me("off")}),1e3);var n={message:Q,username:O,room:fe};e.emit("sendToGhost",n),X("")})),"speak with ghost"),o.a.createElement("button",{className:"chatbtn "+("on"===se?"":"invisible"),onClick:function(){re("off")}},"close chat"),o.a.createElement("button",{className:"chatbtn "+("on"===se?"invisible":""),onClick:function(){re("on")}},"open chat"),o.a.createElement("div",{className:"roster "},o.a.createElement("h3",null,"players in the room"),o.a.createElement("ul",{id:"users"},I.map((function(e){var t=e.name,n=e.id;return o.a.createElement("li",{key:n,className:"on"===se?"centeredLi":""},t)})))))))};n(79);var p=function(){return o.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.05753528.chunk.js.map