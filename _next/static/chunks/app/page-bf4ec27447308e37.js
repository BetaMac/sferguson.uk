(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9687:function(e,t,s){Promise.resolve().then(s.bind(s,3285)),Promise.resolve().then(s.bind(s,5976))},3285:function(e,t,s){"use strict";var n=s(7437),a=s(2265);class r extends a.Component{static getDerivedStateFromError(e){return console.error("Error caught by boundary:",e),{hasError:!0}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){return this.state.hasError?(0,n.jsx)("div",{className:"flex items-center justify-center h-screen bg-black text-white",children:(0,n.jsx)("h1",{children:"Sorry.. there was an error"})}):this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}}t.default=r},5976:function(e,t,s){"use strict";s.d(t,{default:function(){return v}});var n=s(7437),a=s(2265),r=s(8614),i=s(7642),l=s(2489),c=s(8293),o=s(875),d=s(5005),m=s(5805),h=s(4935),x=s(464),u=s(9345),f=s(3041),p=s(5135),b=s(2351);let g=["Home","Bio","Portfolio","Contact"];function v(){let[e,t]=(0,a.useState)(0),[s,d]=(0,a.useState)(!1),[m,h]=(0,a.useState)(!1),[x,u]=(0,a.useState)(!1),[f,p]=(0,a.useState)(0),[b,v]=(0,a.useState)(!0),M=(0,a.useRef)(null),S=(0,a.useRef)(0);(0,a.useEffect)(()=>{let n=n=>{0!==e&&n.deltaY<0&&n.preventDefault();let a=Date.now();!s&&!(a-f<500)&&Math.abs(n.deltaY)>20&&(d(!0),p(a),n.deltaY>0&&e<g.length-1?t(e+1):n.deltaY<0&&e>0&&t(e-1),setTimeout(()=>d(!1),1e3))},a=t=>{let s=t.target,n=document.querySelector("header"),a=document.querySelector("nav.mobile-menu"),r=document.querySelectorAll("a");(null==n?void 0:n.contains(s))||(null==a?void 0:a.contains(s))||Array.from(r).some(e=>e.contains(s))||(0!==e&&t.preventDefault(),S.current=t.touches[0].clientY)},r=s=>{let n=s.target,a=document.querySelector("header"),r=document.querySelector("nav.mobile-menu"),i=document.querySelectorAll("a");if((null==a?void 0:a.contains(n))||(null==r?void 0:r.contains(n))||Array.from(i).some(e=>e.contains(n))||(0!==e&&s.preventDefault(),x))return;let l=Date.now();if(l-f<500)return;let c=s.touches[0].clientY,o=S.current-c;Math.abs(o)>80&&(d(!0),p(l),o>0&&e<g.length-1?t(e+1):o<0&&e>0&&t(e-1),setTimeout(()=>d(!1),1e3))},i=M.current;return i&&(i.addEventListener("wheel",n,{passive:!1}),i.addEventListener("touchstart",a,{passive:!1}),i.addEventListener("touchmove",r,{passive:!1})),()=>{i&&(i.removeEventListener("wheel",n),i.removeEventListener("touchstart",a),i.removeEventListener("touchmove",r))}},[e,s,f,x]);let z=e=>{h(!0),t(e),u(!1),setTimeout(()=>h(!1),1e3)};return(0,a.useEffect)(()=>{let e=setTimeout(()=>{v(!1)},800);return()=>clearTimeout(e)},[]),(0,n.jsxs)("div",{className:"relative min-w-[320px] h-screen overflow-hidden bg-[#000106] text-white",ref:M,children:[(0,n.jsx)(k,{isScrolling:s||m||b}),(0,n.jsxs)("div",{className:"relative z-10",children:[(0,n.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-black bg-opacity-10",children:[(0,n.jsx)("h1",{className:"text-sm sm:text-xl font-bold",children:(0,n.jsx)("span",{className:"hidden xs:inline",children:"Stephen Ferguson"})}),(0,n.jsx)("nav",{className:"hidden sm:block",children:g.map((t,s)=>(0,n.jsx)("button",{className:"mx-2 ".concat(e===s?"text-blue-400":"text-white"),onClick:()=>z(s),children:t},t))}),(0,n.jsx)("button",{className:"sm:hidden p-2 hover:text-blue-400 transition-colors",onClick:()=>u(!x),"aria-label":x?"Close menu":"Open menu",children:x?(0,n.jsx)(l.Z,{size:24}):(0,n.jsx)(c.Z,{size:24})})]}),x&&(0,n.jsxs)("div",{className:"fixed inset-0 z-40 sm:hidden",onClick:e=>e.stopPropagation(),children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-10",onClick:()=>u(!1)}),(0,n.jsx)("nav",{className:"absolute right-0 top-0 h-fit bg-[#000106] bg-opacity-10 backdrop-blur-sm shadow-lg p-4 pt-16 mobile-menu",children:g.map((t,s)=>(0,n.jsx)("button",{className:"block w-full text-left px-4 py-2 mb-2 rounded ".concat(e===s?"bg-blue-900 bg-opacity-50 text-blue-400":"hover:bg-gray-900 hover:bg-opacity-50"),onClick:()=>z(s),children:t},t))})]}),(0,n.jsx)("div",{className:"perspective-[1000px] h-screen overflow-hidden",children:(0,n.jsx)(r.M,{mode:"wait",children:(0,n.jsx)(i.E.div,{initial:{z:3e3,opacity:0,scale:.1,rotateX:5},animate:{z:0,opacity:1,scale:1,rotateX:0},exit:{z:-2e3,opacity:.3,scale:3.5,rotateX:-15},transition:{type:"easeInOut",duration:.5,opacity:{duration:.35,ease:"easeOut"},scale:{duration:.5,ease:"easeIn"},z:{duration:.5,ease:"easeIn"},rotateX:{duration:.5,ease:"easeIn"}},style:{position:"fixed",inset:0,transformStyle:"preserve-3d",perspective:1e3,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsxs)("div",{className:"h-screen flex items-center justify-center bg-[#000106] bg-opacity-10 p-4 sm:p-8 rounded-3xl w-full max-w-4xl mx-auto",children:[0===e&&(0,n.jsx)(j,{}),1===e&&(0,n.jsx)(y,{}),2===e&&(0,n.jsx)(w,{}),3===e&&(0,n.jsx)(N,{})]})},e)})}),(0,n.jsx)("footer",{className:"fixed bottom-0 left-0 right-0 z-20 flex justify-center pb-2",children:e<g.length-1&&(0,n.jsx)(i.E.div,{animate:{y:[0,10,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:(0,n.jsx)(o.Z,{className:"text-white opacity-50"})})})]})]})}function j(){return(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h2",{className:"text-5xl font-bold mb-4",children:"Welcome"}),(0,n.jsxs)("p",{className:"text-xl",children:["I'm Steve Ferguson, a Senior Technical Solutions Specialist with 20 years' experience delivering solutions for top consultancies. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I've honed my skills leading teams, developing business-critical applications, and engineering innovative survey solutions that leverage cutting-edge technology. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Collaborating with researchers, analysts, finance teams or end-clients, I turn complex requirements into intuitive systems that drive insights and innovation."]})]})}function y(){return(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6",children:"Me"}),(0,n.jsx)("p",{className:"text-lg sm:text-xl mb-4 sm:mb-6",children:"Seasoned technical consultant with 20 years in market research, specializing in data and web technologies."}),(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)(d.Z,{className:"w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400"}),(0,n.jsx)("h3",{className:"text-base sm:text-lg font-semibold mb-1",children:"Industry"}),(0,n.jsx)("p",{className:"text-xs sm:text-sm",children:"STRAT7 Incite (strategic research and planning) and Dynata (global data solutions leader)."})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)(m.Z,{className:"w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400"}),(0,n.jsx)("h3",{className:"text-base sm:text-lg font-semibold mb-1",children:"Leadership"}),(0,n.jsx)("p",{className:"text-xs sm:text-sm",children:"Led 10+ member teams and outsource resources in survey programming and data collection."})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)(h.Z,{className:"w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400"}),(0,n.jsx)("h3",{className:"text-base sm:text-lg font-semibold mb-1",children:"Technical"}),(0,n.jsx)("p",{className:"text-xs sm:text-sm",children:"Developed full-stack and stand-alone applications for financial reporting and project management, and automation tasks."})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)(x.Z,{className:"w-6 h-6 sm:w-8 sm:h-8 mb-2 text-blue-400"}),(0,n.jsx)("h3",{className:"text-base sm:text-lg font-semibold mb-1",children:"Data"}),(0,n.jsx)("p",{className:"text-xs sm:text-sm",children:"Collection, analysis and reporting of complex data into actionable insights for hundreds of clients."})]})]}),(0,n.jsx)("p",{className:"text-xl",children:"Bridging data collection, analysis, and development to drive growth and solve business challenges."})]})}function w(){return(0,n.jsxs)("div",{className:"max-w-4xl",children:[(0,n.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center",children:"Work"}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:[{title:"PIP",description:"A full-stack project management and financial reporting tool."},{title:"ConRed",description:"A batch search/replace tool to automate redaction and parsing for ML."},{title:"XML-converter",description:"A trained LLM to produce survey software XML output."},{title:"excel-translator",description:"A survey translation excel output tool utilising Google's API."},{title:"brand-analyser",description:"A web scraper with rudimentary analysis for brand mentions (PR)."},{title:"Taiten",description:"An AI Agent that helps with my personsal tasks."}].map((e,t)=>(0,n.jsxs)("div",{className:"bg-gray-800 bg-opacity-10 p-2 rounded-lg backdrop-blur-sm",children:[(0,n.jsx)("h3",{className:"text-lg sm:text-xl font-semibold mb-2",children:e.title}),(0,n.jsx)("p",{className:"text-sm sm:text-base",children:e.description})]},t))})]})}function N(){return(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold mb-6 sm:mb-8",children:"Get In Touch"}),(0,n.jsxs)("div",{className:"flex flex-col items-center space-y-3 sm:space-y-4 text-sm sm:text-base",children:[(0,n.jsxs)("a",{href:"mailto:thestevefergie@gmail.com",className:"flex items-center",children:[(0,n.jsx)(u.Z,{className:"mr-2"})," thestevefergie@gmail.com"]}),(0,n.jsxs)("a",{href:"tel:+447846378964",className:"flex items-center",children:[(0,n.jsx)(f.Z,{className:"mr-2"})," +447846378964"]}),(0,n.jsxs)("a",{href:"https://github.com/BetaMac",target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:[(0,n.jsx)(p.Z,{className:"mr-2"})," GitHub"]}),(0,n.jsxs)("a",{href:"https://twitter.com/thestevefergie",target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:[(0,n.jsx)(b.Z,{className:"mr-2"})," Twitter"]})]})]})}function k(e){let{isScrolling:t}=e,s=(0,a.useRef)([]),r=(0,a.useRef)(0),i=(0,a.useRef)(0),l=(0,a.useRef)(void 0),c=(0,a.useRef)(1);return(0,a.useEffect)(()=>{let e=window.devicePixelRatio||1;(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||e>2)&&(c.current=.75);let t=document.getElementById("starfield"),n=null==t?void 0:t.getContext("2d"),a=()=>{t&&(t.width=window.innerWidth*c.current,t.height=window.innerHeight*c.current,1!==c.current&&(t.style.width="".concat(window.innerWidth,"px"),t.style.height="".concat(window.innerHeight,"px")))},o=e=>{e.z-=r.current,e.z<=0&&(e.z=2e3,e.x=2e3*Math.random()-1e3,e.y=2e3*Math.random()-1e3)},d=e=>{let s=e.x/(.001*e.z),a=e.y/(.001*e.z);if(s<-t.width/2||s>t.width/2||a<-t.height/2||a>t.height/2)return;let i=(1-e.z/2e3)*2.8*e.size,l=.001*Date.now(),c=Math.floor((1-e.z/2e3)*255),o=c+8*Math.sin(l+e.x),d=c+8*Math.sin(l+e.y+2),m=c+12*Math.sin(l+e.x+4);if(n){n.beginPath(),n.fillStyle="rgb(".concat(o,", ").concat(d,", ").concat(m,")");let l=s+t.width/2,c=a+t.height/2,h=.4*i;for(let e=0;e<8;e++){let t=e*Math.PI/4;n.lineTo(l+Math.cos(t)*i,c+Math.sin(t)*i),n.lineTo(l+Math.cos(t+Math.PI/8)*h,c+Math.sin(t+Math.PI/8)*h)}n.closePath(),n.fill(),r.current>2.5&&(n.beginPath(),n.strokeStyle="rgba(".concat(o,", ").concat(d,", ").concat(m,", ").concat((1-e.z/2e3)*.8,")"),n.lineWidth=.6*i,n.moveTo(e.px+t.width/2,e.py+t.height/2),n.lineTo(l,c),n.stroke()),e.px=s,e.py=a}},m=()=>{n&&(n.fillStyle="rgba(0, 2, 10, 0.2)",n.fillRect(0,0,t.width,t.height),r.current+=(i.current-r.current)*.05,s.current.forEach(e=>{o(e),d(e)})),l.current=requestAnimationFrame(m)};return a(),s.current=Array.from({length:1782},()=>({x:2e3*Math.random()-1e3,y:2e3*Math.random()-1e3,z:2e3*Math.random(),px:0,py:0,size:.07+1.33*Math.random()})),m(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a),l.current&&cancelAnimationFrame(l.current)}},[]),(0,a.useEffect)(()=>{i.current=t?100:.6},[t]),(0,n.jsx)("canvas",{id:"starfield",className:"fixed inset-0 z-0"})}}},function(e){e.O(0,[223,971,117,744],function(){return e(e.s=9687)}),_N_E=e.O()}]);