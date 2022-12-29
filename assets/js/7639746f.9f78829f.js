"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2374,486],{68971:(e,t,n)=>{n.d(t,{P:()=>r});var a=n(67294);function r(){const e=function(){const e=(0,a.useRef)(!1);return(0,a.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}();return(0,a.useCallback)((t=>function(){e.current&&t.apply(this,arguments)}),[])}},4882:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(67294),r=n(68971),o=n(8100),l=n(71406);function c(e,t,n){void 0===n&&(n=!1);const c=(0,l.E)(),i=(0,r.P)(),[s,u]=(0,a.useState)(!1),[d,m]=(0,a.useState)(),[p,h]=(0,a.useState)(),g=(0,a.useRef)(e),f=(0,a.useRef)(t),E=(0,a.useRef)(!1);(0,a.useEffect)((()=>{g.current=e,f.current=t,u(!1),m(void 0),h(void 0),E.current=!1}),[t,(0,o.wE)([e])]);return{data:p,loading:s,error:d,run:(0,a.useCallback)((()=>{!n||c.validated?E.current||(u(!0),h(void 0),m(void 0),E.current=!0,f.current(g.current).then(i(h)).catch(i(m)).finally(i((()=>{u(!1),E.current=!1})))):c.login()}),[c])}}},17366:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var a=n(88242),r=n(67294),o=n(75345),l=n(85214),c=n(58402),i=n(81719),s=n(26432),u=n(61802),d=n(4534),m=n(13142),p=n(44797),h=n(71406);function g(e){let{value:t,onChange:n,onAction:a}=e;const[o,i,m]=function(e){const[t,n]=(0,r.useState)(e),a=(0,r.useRef)(t);return(0,r.useEffect)((()=>{a.current=t}),[t]),[t,n,a]}(E.normal),[g,b]=(0,r.useState)(-1),[w,x]=(0,r.useState)(-1),[Z,k]=(0,r.useState)(""),[S,C]=(0,r.useState)(""),N=(0,r.useRef)(null),{validating:A,validated:I}=(0,h.E)(),T=(0,s.Z)((e=>{n(e.target.value)})),R=(0,r.useCallback)((e=>{if(k(e.key),x(e.target.selectionStart??-1),m.current!==E.normal)switch(e.key){case"ArrowDown":case"ArrowUp":case"Tab":case"Enter":e.preventDefault()}else"Enter"===e.key&&(null==a||a())}),[a]),P=(0,s.Z)((()=>{i(E.normal),b(-1),x(-1),C(""),k("")}));(0,r.useEffect)((()=>{switch(o){case E.normal:break;case E.user:case E.repo:{const e=t.substring(g,w+1);if(/^[a-z\d]$/.test(Z))C(e);else{switch(Z){case"ArrowUp":return M((e=>(e-1+F.length)%F.length)),void k("a");case"ArrowDown":return M((e=>(e+1)%F.length)),void k("a");case"Tab":case"Enter":return z(),void P()}"Backspace"===Z&&e.includes(o)?C(e):P()}}}}),[o,Z,t,g,w]);const B=(0,d.Z)(S,{wait:200,trailing:!0,leading:!1}),{data:F}=f(o,B),[L,M]=(0,r.useState)(0),z=(0,r.useCallback)((()=>{(0,u.Rw)(F[L])||o===E.repo&&n(`${t.substring(0,g)}${F[L].fullName} ${t.substring(w+1)}`)}),[t,o,L,F,g,w]);return(0,r.useEffect)((()=>{L>=F.length&&M(F.length-1)}),[F]),r.createElement(r.Fragment,null,r.createElement(y,{fullWidth:!0,disabled:A&&!I,ref:N,value:t,onChange:T,onKeyDown:R,onBlur:P}),r.createElement(c.Z,{open:o!==E.normal,anchorEl:N.current},r.createElement(v,null,r.createElement(l.Z,null,F.map(((e,t)=>o===E.repo?(0,p.Ph)({},e,L===t):(0,p.Ro)({},e,L===t)))))))}const f=function(e,t){return(0,m.h)(e===E.repo?"repo":"user",e===E.normal?"":t)};var E;!function(e){e.normal="^",e.repo="/",e.user="@"}(E||(E={}));const y=(0,i.ZP)(o.ZP)`
  background-color: white;
  color: black;
  border-radius: 6px;
  font-size: 20px;
  padding: 14px;
  line-height: 1;
`,v=(0,i.ZP)("div")`
  background-color: #3c3c3c;
  border-radius: 6px;
`;var b=n(61953),w=n(36336),x=n(29630),Z=n(87462),k=n(4882),S=n(84191);async function C(e){return await S.po.post("/explorer/answer-question/",{question:e},{withCredentials:!0})}async function N(e){return await S.po.get("/explorer/get-query-result/",{params:{executionId:e},withCredentials:!0,wsApi:!0})}async function A(e){return await S.po.post("/explorer/generate-chart/",e,{withCredentials:!0})}function I(e){return"waiting"===e.execution.status}var T=n(44008),R=n(74065),P=n(47028),B=n(29618),F=n(19604),L=n(70754),M=n(70983),z=n(96812),Q=n(6571),q=n(47135);function W(e){let{status:t,title:n,defaultExpanded:a,extra:o,error:l,children:c}=e;return r.createElement(j,{className:(0,u.Rw)(l)?t:"error",defaultExpanded:a},r.createElement(B.Z,{expandIcon:r.createElement(Q.Z,null)},r.createElement(H,null,"loading"===t?r.createElement(L.Z,{size:16}):"success"===t?r.createElement(M.Z,{color:"success",fontSize:"inherit"}):r.createElement(z.Z,{color:"disabled",fontSize:"inherit"}),r.createElement(O,null,n),(0,u.N6)(o)?r.createElement(r.Fragment,null,r.createElement(U,null),r.createElement(D,null,o)):void 0)),r.createElement(P.Z,null,(0,u.Rw)(l)?c:r.createElement(F.Z,{severity:"error"},(0,q.e$)(l))))}const j=(0,i.ZP)(R.Z)`
  border-radius: 6px;
  border: 1px solid;
  border-image-source: linear-gradient(116.45deg, rgba(89, 95, 236, 0.5) 0%, rgba(200, 182, 252, 0.1) 96.73%);
  background: linear-gradient(0deg, #24232C, #24232C), linear-gradient(116.45deg, rgba(89, 95, 236, 0.5) 0%, rgba(200, 182, 252, 0.1) 96.73%);
  padding: 12px;
  margin-top: 24px;
  transform: translateY(20px);
  opacity: 0;
  transition: all .5s ease;

  &:before {
    display: none;
  }

  &.loading {
    transform: initial;
    opacity: 0.4;
  }

  &.success {
    transform: initial;
    opacity: 1;
  }

  &.error {
    transform: initial;
    opacity: 1;
  }
`,H=(0,i.ZP)("h2")`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
`,D=(0,i.ZP)("span")`
  color: #d7d7d7;
  font-weight: normal;
`,O=(0,i.ZP)("span")`
  margin-left: 8px;
`,U=(0,i.ZP)("span")`
  flex: 1;
`;var V=n(14850),$=n(60338),_=n(68023),G=n(33989),Y=n(31281),J=n(8690),K=n(27240),X=n(76395);function ee(e){let{chartName:t,title:n,x:a,y:o,data:l}=e;const c=(0,r.useMemo)((()=>({dataset:{id:"raw",source:l},grid:{},series:{type:"line",datasetId:"raw",encode:{x:a,y:o}},legend:{},title:{text:n},xAxis:{type:"category"},yAxis:{type:"value"}})),[t,n,a,o]);return r.createElement($.ZP,{height:400,option:c})}(0,_.D)([G.N,Y.N,J.N,K.N,X.N]);var te=n(38180);function ne(e){let{chartName:t,title:n,x:a,y:o,data:l}=e;const c=(0,r.useMemo)((()=>({dataset:{id:"raw",source:l},grid:{},series:{type:"bar",datasetId:"raw",encode:{x:a,y:o}},legend:{},title:{text:n},xAxis:{type:"category"},yAxis:{type:"value"}})),[t,n,a,o]);return r.createElement($.ZP,{height:400,option:c})}(0,_.D)([te.N,Y.N,J.N,K.N,X.N]);var ae=n(44731),re=n(81284),oe=n(19594),le=n(61702);function ce(e){let{chartName:t,title:n,id:a,data:o}=e;return r.createElement(l.Z,null,o.map(((e,t)=>r.createElement(re.ZP,{key:t},r.createElement(oe.Z,null,r.createElement(ae.Z,{src:`https://github.com/${e[a]}.png`})),r.createElement(le.Z,null,e[a])))))}function ie(e){let{chartName:t,title:n,repo_name:a,data:o}=e;return r.createElement(l.Z,null,o.map(((e,t)=>r.createElement(re.ZP,{key:t},r.createElement(oe.Z,null,r.createElement(ae.Z,{src:`https://github.com/${e[a].split("/")[0]}.png`})),r.createElement(le.Z,null,e[a])))))}function se(e){switch(e.chartName){case"LineChart":return r.createElement(ee,e);case"BarChart":return r.createElement(ne,e);case"PersonalCard":return r.createElement(ce,e);case"RepoCard":return r.createElement(ie,e);default:return null}}const ue=(0,r.forwardRef)((function(e,t){let{search:n}=e;const{data:a,loading:o,run:l,error:c}=(0,k.c)(n,C,!0),{data:i,loading:s,run:d,error:m}=(0,k.c)(null==a?void 0:a.execution.id,N,!0);(0,r.useEffect)((()=>{"function"==typeof t?t({run:l}):(0,u.nf)(t)&&(t.current={run:l})}),[]),(0,r.useEffect)((()=>{(0,u.nf)(a)&&I(a)&&(0,u.Rw)(c)&&d()}),[a,c]),(0,r.useEffect)((()=>{if((0,u.nf)(i)&&I(i)&&(0,u.Rw)(m)){const e=setTimeout(d,1e3);return()=>{clearTimeout(e)}}}),[i,m]);const p=(0,r.useMemo)((()=>o?"loading":(0,u.Rw)(a)?"pending":"success"),[o,a]),h=(0,r.useMemo)((()=>{if((0,u.nf)(a))return(0,T.WU)(a.sql)}),[a]),g=(0,r.useMemo)((()=>(0,u.nf)(a)&&!I(a)?a:(0,u.nf)(i)&&!I(i)?i:void 0),[a,i]),f=(0,r.useMemo)((()=>!(0,u.Rw)(a)&&(!o&&(!!I(a)&&((0,u.Rw)(i)||I(i))))),[g,a,i,o,s]),E=(0,r.useMemo)((()=>f?"loading":(0,u.Rw)(g)?"pending":"success"),[g,f]),y=(0,r.useMemo)((()=>(0,u.Rw)(g)?"Waiting execution...":`${g.data.length} results in ${g.spent} seconds`),[g]),v=(0,r.useMemo)((()=>{if(!(0,u.Rw)(g))return g.execution.engines.length>0?"Run with "+g.execution.engines.join(", "):void 0}),[g]),{data:b,loading:w,error:x,run:S}=(0,k.c)({question:n,data:null==g?void 0:g.data},A,!0);(0,r.useEffect)((()=>{(0,u.N6)(n)&&(0,u.nf)(null==g?void 0:g.data)&&S()}),[n,null==g?void 0:g.data]);const R=(0,r.useMemo)((()=>w?"Drawing chart...":"Chart view"),[w]),P=(0,r.useMemo)((()=>w?"loading":(0,u.nf)(b)?"success":"pending"),[w,b]);return r.createElement(r.Fragment,null,r.createElement(W,{status:p,title:"Your AI generated SQL Query",error:c},r.createElement(V.Z,{language:"sql"},h)),r.createElement(W,{status:E,title:y,extra:v,error:m},r.createElement("pre",null,JSON.stringify(null==g?void 0:g.data,void 0,2))),r.createElement(W,{status:P,title:R,error:x,defaultExpanded:!0},(0,u.nf)(b)&&(0,u.nf)(g)?r.createElement(se,(0,Z.Z)({},b,{data:g.data})):void 0))}));var de=n(95309);const me=["Similar projects like @facebook/react","MySQL alternative projects","Top 10 TypeScript projects this month","The trending open source projects recently","The most popular web3 projects","Star history of @supabase/supabase","Contributors in @pingcap/tidb","The most popular programming languages 2022","Top forked front-end projects","The most popular repos about ChatGPT","The most watched projects by Chinese developers","Geographic distribution of @kubernetes/kubernetes contributors"];function pe(e){let{onSelect:t}=e;return r.createElement(l.Z,{dense:!0,disablePadding:!0,sx:{mx:"auto",width:"max-content"}},me.map(((e,n)=>r.createElement(re.ZP,{key:n},r.createElement(de.Z,{onClick:()=>t(e)},r.createElement(le.Z,null,e))))))}function he(){return r.createElement(r.Fragment,null,r.createElement(x.Z,{variant:"h2",textAlign:"center"},"FAQ"),r.createElement(ge,null,"How do I use this tool?"),r.createElement(fe,null,"You can start with selecting a popular query from the query wall or directly input a short text query statement to the search box. OpenAI will translate your question into Structured Query Language (SQL), and we will use the generated SQL to query in the database and return the results."),r.createElement(ge,null,"Why the answer do not turn out to my intended?"),r.createElement(fe,null,"We use the text completion provided by OpenAI to translate the text into Structured Query Language (SQL), and the final output depends on the accuracy of the generated SQL. If the final query result does not meet your expectation, please shorten your input statement and using more concise and clear short words for AI recognition."),r.createElement(ge,null,'Why is the output show "No Results Found"?'),r.createElement(fe,null,"Unfortunately, we do not have any useful GitHub insights for you. Usually, there are three situations that cause the answer not to be found:",r.createElement("ol",null,r.createElement("li",null,"AI cannot recognize your text and cannot generate SQLs"),r.createElement("li",null,"AI misunderstand your text and generate wrong/bad SQLs"),r.createElement("li",null,'Data restrictions. We currently use repositories that have had active events in the past year as our demo source(approximately 1.2 billion rows of data). So if you want to ask a question about "dormant" repositories and developers, we will not be able to pass on more useful information.')),r.createElement("br",null),"The potential solution for 1,2 is describe your question with short, specific and normal words, then try again."))}const ge=(0,i.ZP)("h3")`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`,fe=(0,i.ZP)("div")`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #929292;
  margin-bottom: 48px;
`;var Ee,ye,ve;function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},be.apply(this,arguments)}const we=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",be({width:43,height:24,viewBox:"0 0 43 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,Ee||(Ee=r.createElement("rect",{x:.25,y:.25,width:42.5,height:23.5,rx:11.75,stroke:"url(#a)",strokeWidth:.5})),ye||(ye=r.createElement("path",{d:"M10.057 16V7.273h3.051c.608 0 1.11.105 1.504.315.395.207.69.487.882.84.194.349.29.737.29 1.163 0 .375-.067.685-.2.929-.13.244-.304.437-.52.58a2.364 2.364 0 0 1-.695.315v.085c.267.017.536.11.806.281.27.17.495.415.677.733.182.318.273.708.273 1.168 0 .437-.1.83-.298 1.18-.2.35-.513.627-.942.831-.429.205-.987.307-1.675.307h-3.153Zm1.057-.938h2.096c.69 0 1.18-.133 1.47-.4.293-.27.44-.597.44-.98 0-.296-.076-.568-.226-.818a1.635 1.635 0 0 0-.644-.606c-.278-.153-.608-.23-.989-.23h-2.147v3.034Zm0-3.954h1.96c.318 0 .605-.063.86-.188.26-.124.464-.3.614-.528.154-.227.23-.494.23-.801 0-.384-.133-.709-.4-.976-.267-.27-.69-.405-1.27-.405h-1.994v2.898Zm9.355 5.028c-.63 0-1.174-.139-1.632-.417a2.803 2.803 0 0 1-1.052-1.176c-.244-.506-.367-1.094-.367-1.765 0-.67.123-1.261.367-1.772.247-.514.59-.915 1.031-1.202.443-.29.96-.435 1.551-.435.341 0 .678.057 1.01.17.332.114.635.3.908.555.273.253.49.588.652 1.005.162.418.243.932.243 1.543v.426h-5.046v-.87h4.023c0-.369-.074-.698-.222-.988a1.67 1.67 0 0 0-.622-.686 1.742 1.742 0 0 0-.946-.251c-.4 0-.747.1-1.04.298-.29.196-.512.452-.669.767a2.253 2.253 0 0 0-.234 1.014v.58c0 .494.085.913.256 1.257.173.34.413.6.72.78a2.11 2.11 0 0 0 1.07.264c.264 0 .502-.037.715-.11.216-.077.402-.191.559-.342.156-.153.277-.344.362-.57l.971.272c-.102.33-.274.62-.515.87-.242.246-.54.44-.895.579a3.318 3.318 0 0 1-1.198.204Zm7.087-6.681v.852h-3.392v-.852h3.392Zm-2.403-1.569h1.005v6.239c0 .284.042.497.124.64a.64.64 0 0 0 .324.28c.133.046.274.069.422.069.11 0 .201-.006.272-.017l.17-.034.205.903a2.046 2.046 0 0 1-.285.077 2.102 2.102 0 0 1-.465.042c-.284 0-.562-.06-.835-.183a1.66 1.66 0 0 1-.673-.558c-.176-.25-.264-.566-.264-.946V7.886Zm5.842 8.267c-.415 0-.791-.078-1.13-.234a1.938 1.938 0 0 1-.805-.686c-.198-.301-.298-.665-.298-1.091 0-.375.074-.679.222-.912.147-.236.345-.42.592-.554.247-.133.52-.233.818-.298.301-.068.604-.122.908-.162.398-.051.72-.09.967-.115.25-.029.432-.075.546-.14.116-.066.174-.18.174-.342v-.034c0-.42-.115-.747-.345-.98-.227-.233-.572-.35-1.035-.35-.48 0-.857.106-1.13.316-.272.21-.464.435-.575.673l-.954-.34c.17-.398.397-.708.681-.93.287-.224.6-.38.938-.468.34-.091.676-.137 1.006-.137.21 0 .451.026.724.077.276.048.541.15.797.303.258.153.473.384.643.694.17.31.256.725.256 1.245V16h-1.006v-.886h-.05a1.77 1.77 0 0 1-.342.456c-.159.162-.37.3-.635.413-.264.114-.586.17-.967.17Zm.153-.903c.398 0 .733-.078 1.006-.234a1.595 1.595 0 0 0 .835-1.385v-.92c-.042.05-.136.097-.28.14-.143.04-.308.075-.495.106a22.444 22.444 0 0 1-.963.128 3.84 3.84 0 0 0-.733.166 1.263 1.263 0 0 0-.546.337c-.136.148-.204.35-.204.605 0 .35.129.614.387.793.262.176.593.264.993.264Z",fill:"url(#b)"})),ve||(ve=r.createElement("defs",null,r.createElement("linearGradient",{id:"a",x1:0,y1:24,x2:45.606,y2:24,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#5667FF"}),r.createElement("stop",{offset:1,stopColor:"#A168FF"})),r.createElement("linearGradient",{id:"b",x1:9,y1:17,x2:37.636,y2:17,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#5667FF"}),r.createElement("stop",{offset:1,stopColor:"#A168FF"})))))};var xe=n(39731),Ze=n(20486);function ke(){const[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)(null),[l]=(0,xe.h9)("explore-data");return l?r.createElement(a.Z,null,r.createElement(w.Z,{maxWidth:"lg",sx:{pt:8}},r.createElement(x.Z,{variant:"h1",textAlign:"center"},"Data Explorer",r.createElement(Se,null)),r.createElement(x.Z,{variant:"body2",textAlign:"center",mt:1,mb:2,color:"#7C7C7C"},"Quickly get insights from your GitHub data with our easy-to-use Query Tool."),r.createElement(g,{value:e,onChange:t,onAction:null==n?void 0:n.run})),(0,u.N6)(e)?r.createElement(w.Z,{maxWidth:"lg",sx:{pb:8}},r.createElement(ue,{search:e,ref:o})):r.createElement(b.Z,{py:4},r.createElement(pe,{onSelect:t})),r.createElement(w.Z,{maxWidth:"lg",sx:{pb:8}},r.createElement(he,null))):r.createElement(Ze.default,null)}const Se=(0,i.ZP)(we)`
  margin-left: 8px;
`},8106:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86010),o=n(95999);const l={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function c(e){let{code:t,className:n}=e;const[c,i]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),u=(0,a.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),i(!0),s.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":c?(0,o.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,l.copyButton,c&&l.copyButtonCopied),onClick:u},a.createElement("span",{className:l.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:l.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:l.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(63016),o=n(67294),l=n(61802),c=n(61953);function i(e){let{children:t,header:n,dark:i,sideWidth:s,Side:u,footer:d=!0,...m}=e;return(0,o.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),o.createElement(r.Z,(0,a.Z)({},m,{customFooter:d,header:n,sideWidth:s,side:s&&(0,l.nf)(u)?o.createElement(c.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},o.createElement(c.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},o.createElement(u,null))):void 0}),o.createElement("div",{hidden:!0,style:{height:72}}),o.createElement("div",{style:{paddingLeft:s,paddingRight:s}},o.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},20486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(67294),r=n(95999),o=n(1944),l=n(63016),c=n(16550),i=n(29630),s=n(70754);function u(){const e=(0,c.k6)(),[t,n]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{var t,a;let{pathname:r,search:o,hash:l}=window.location;o=null==(t=o)?void 0:t.replace(/^\?/,""),l=null==(a=l)?void 0:a.replace(/^#/,"");const[c,...i]=r.split("/");if("analyze"===c){if(i.length>=1&&i.length<=2)return void e.replace({pathname:r,search:o,hash:l});if(0===i.length)return void e.replace({pathname:"/analyze/pingcap/tidb",search:o,hash:l})}n(!0)}),[]),a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})?void 0:"Loading...",description:"The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.",image:"/img/screenshots/homepage.png"}),a.createElement(l.Z,null,t?a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))):a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement(i.Z,{variant:"body1",fontSize:24},"Loading... \xa0",a.createElement(s.Z,{sx:{display:"inline-block"},size:24})))))))}}}]);