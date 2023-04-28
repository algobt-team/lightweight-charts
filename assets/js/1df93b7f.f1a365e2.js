"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3237],{5601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(5742),r=n(9208),l=n(7294);const c={Banner:"Banner_RpyO",BannerContent:"BannerContent_bHEU",BannerButton:"BannerButton_rLff"};function o(e){return l.createElement("a",{className:c.Banner,href:e.link},l.createElement("div",{className:c.BannerContent},e.text),l.createElement("div",{className:c.BannerButton},e.linkText))}var s=n(7462);const i={CardsContainer:"CardsContainer_VA1i",Card:"Card_rT3V",CardHeader:"CardHeader_K7l4"};function m(){return l.createElement("svg",{height:28,width:28},l.createElement("g",{clipPath:"url(#clip0_1507_70976)"},l.createElement("path",{d:"M11 8L17 14L11 20",stroke:"var(--arrow-fill-color, #131722)",fill:"none",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})),l.createElement("defs",null,l.createElement("clipPath",{id:"clip0_1507_70976"},l.createElement("rect",{width:"28",height:"28",fill:"white"}))))}function u(e){return l.createElement("a",{href:e.link,className:i.Card},l.createElement("div",{className:i.CardHeader},l.createElement("h2",null,e.title),l.createElement(m,null)),l.createElement("p",null,e.content))}function p(e){const t=e.cardLinks.map((e=>l.createElement(u,(0,s.Z)({key:e.title},e))));return l.createElement("section",{className:i.CardsContainer},t)}const d={SquareButton:"SquareButton_KZv4"};function h(){return l.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 8.75C7.5 8.05964 8.05964 7.5 8.75 7.5H12V6H8.75C7.23122 6 6 7.23122 6 8.75V19.25C6 20.7688 7.23122 22 8.75 22H19.25C20.7688 22 22 20.7688 22 19.25V16H20.5V19.25C20.5 19.9404 19.9404 20.5 19.25 20.5H8.75C8.05964 20.5 7.5 19.9404 7.5 19.25V8.75ZM14.9993 7.5H19.4387L12.6455 14.2932L13.7061 15.3539L20.4993 8.56066V13.045H21.9993V6.75V6H21.2493H14.9993V7.5Z",fill:"currentColor"}))}function E(e){return l.createElement("a",{className:d.SquareButton,href:e.link,"data-primary":e.primary},l.createElement("span",null,e.title),e.external?l.createElement(h,null):"")}var f=n(2949),g=n(9277);const C={Block:"Block_utv9",BlockContent:"BlockContent_i0oD",Line:"Line_EWm5",LineNumber:"LineNumber_NepB"};function k(e){const{canSelect:t,canCopy:n,name:a,style:r,startLineNumber:c,lines:o,lineNumberOverrides:s}=e,i=c??1;return l.createElement("aside",{className:C.Block,"data-can-select":t,"data-can-copy":n,"data-name":a,style:{...r}},l.createElement("div",{className:C.BlockContent},o.map(((e,t)=>l.createElement("div",{key:t,className:C.Line},l.createElement("div",{className:C.LineNumber},s&&s.length>t?s[t]:t+i),e)))))}const y=JSON.parse('{"V":[22.75105,22.7028,22.91657,22.89733,22.58714,22.79207,22.4285,22.12538,22.12127,22.29012,22.47304,22.124,22.62265,22.27654,22.42059,22.21117,22.0404,22.00526,21.98259,21.59455,21.60589,21.3791,21.37931,21.13736,21.09146,20.95892,21.061,21.48838,21.3507,21.7702,21.59947,21.8053,21.88469,21.74813,21.60216,21.37173,21.3791,21.45597,21.50142,21.44207,21.4204,21.4408,21.55359,21.26584,21.4968,21.45966,21.3538,21.35801,21.34126,21.43016,21.19969,21.0912,21.07892,21.05726,21.22916,21.17957,21.0097,20.93522,20.92252,20.59067,20.62412,20.49867,20.23011,20.71467,20.66167,20.50267,20.42967,20.20874,20.39063,20.49467,20.40828,20.44799,20.50617,20.2971,20.23607,20.29511,20.29441,20.58167,20.44466,20.43449,20.38262,20.40917,20.24517,20.00318,20.03567,19.95968,20.0185,20.03165,20.01767,20.009,19.88399,19.62125,19.64218,19.58718,19.68618,19.76699,19.7022,19.66419,19.86817,19.89925,20.07668,20.0164,19.97018,20.40667,20.46167,20.93717,20.73963,20.97367,20.80217,20.78125,20.65367,20.66471,20.58367,20.40367,20.34212,20.51013,20.72114,20.83417,20.6876,20.88618,20.86166,20.76212,20.57017,20.45612,20.38862,20.50012,20.36022,20.42267,20.34317,20.40212,20.20812,20.12014,20.08661,20.37017,20.27117,20.38267,20.57112,20.63462,20.51712,20.49662,21.00767,21.02463,20.8812,20.8221,21.03767,21.25467,21.24567,21.45216,21.23017,20.99112,20.74162,20.76225,20.64774,20.64169,20.41452,20.4991,20.369,20.3724,20.42232,20.42278,20.64722,20.659,20.487,20.443,20.31207,20.2099,20.253,20.2158,20.05311,19.99909,19.93543,19.995,20.02418,19.93575,19.84162,19.51315,19.7631,19.87511,19.90737,19.81483,19.77618,19.7819,19.82768,19.97561,19.7944,19.93861,19.9987,20.02961,20.08661,19.9376,19.70901,19.6249,19.78662,19.7815,19.8271,19.84815,19.8998,19.94024,19.84582,19.89418,19.80646,19.7286,19.67346,19.59882,19.3981,19.52426,19.5284,19.50768,19.45412,19.133,19.2128,18.9867,19.13962,19.17998,19.3486,19.2539,19.2824,19.42142,19.38443,19.59812,19.6082,19.8457,19.8301,19.89561,19.8315,19.74523,19.5896,19.7819,19.806,19.7194,19.8403,19.6886,19.71648,19.80061,19.7486,19.7085,19.6782,19.99051,20.3173,20.04726,20.12367,19.8798,19.8887,19.85975,19.9346,20.23566,20.3803,20.42912,20.4911,20.48312,20.3258,20.2319,20.06612,19.8821,19.90975,20.2144,20.2576,20.42986,20.46866,20.28111,20.3781,20.3959,20.53012,20.4399,20.5466,20.69761,20.8134,20.7169,20.56397,20.56436,20.413,20.2267,20.12912,19.9352,19.8157,19.9533,19.8117,19.68147,19.71811,19.5188,19.65362,19.6144,19.56761,19.712,19.94311,20.11861,20.2737,20.1426,20.25974,20.1544,20.23462,20.4116,20.4735,20.402,20.3606,20.2686,20.1415,20.43947,20.3957,20.34712,20.32312,20.3014,20.48524,20.3139,20.19211,20.2086,20.0495,20.13312,19.9941,19.90511,20.23912,20.3622,20.22447,20.4146,20.677,20.8501,20.9158,21.05812,20.98412,20.88212,20.5114,20.2944,20.22912,20.34551,20.64401,20.41499,20.56167,20.4168,20.83267,20.87124,21.07966,21.11825,21.23516,21.17262,21.17117,21.26562,21.68819,21.49866,21.12875,21.2776,21.1911,21.26817,21.04075,20.98861,20.71917,21.054,21.17097,21.16817,21.27475,21.1621,21.23617,20.99471,20.79351,20.97217,20.9955,20.98875,20.75619,20.8541,21.12849,21.44499,21.46674,21.52774,21.38549,21.60966,21.49149,21.24575,21.14967,21.28462,21.16367,20.95416,21.10482,20.99775,20.97867,21.08117,20.8621,20.68235,20.43553,20.57967,20.53117,20.64162,20.65199,20.88266,20.66024,20.60367,20.81067,20.74746,20.90295,20.96825,20.7816,20.58375,20.55561,20.58396,20.45875,20.44812,20.35825,20.35342,20.5258,20.56024,20.4671,20.4961,20.51725,20.2908,20.60257,20.51649,20.52325,20.28075,20.2275,20.10024,19.97799,19.76576,19.67076,19.59337,19.65561,19.63576,19.60676,19.60862,19.7086,19.61876,19.65261,19.4346,19.13526,19.1797,19.19825,19.02462,19.01076,19.19062,19.1031,19.13262,19.19912,19.1524,19.2408,19.0645,18.9816,18.87626,19.05776,19.15226,19.0539,19.08175,19.4081,19.62287,20.03562,20.0334,19.98025,19.87342,19.90411,19.86439,19.854,20.08262,19.70626,19.51662,19.74962,19.7329,19.98975,19.84857,19.68925,19.61076,19.7883,19.89333,19.86425,19.81625,19.71683,19.7418,19.80781,19.60226,19.76626,19.76265,19.658,19.58296,19.67433,19.4153,19.43279,19.3895,19.30975,19.34562,19.15076,19.36976,19.4901,19.53098,19.24061,19.17408,19.76511,19.5626,19.59857,19.5196,19.51463,19.56075,19.3641,19.41942,19.58826,19.66676,19.81326,19.7829,19.76211,19.76311,19.97766,20.10525,20.2722,20.2716,20.17135,20.07311,20.3157,20.2264,20.39676,20.4625,20.50312,20.3677,20.1765,20.2096,20.35267,20.2996,20.1336,20.2238,20.17076,20.4563,20.3733,20.19123,20.2265,20.088,20.00712,19.79225,19.8315,19.6296,19.81115,19.8027,20.04111,20.12554,20.0872,19.97929,20.06232,19.96875,19.8285,19.7951,19.7092,19.80896,19.87468,19.93682,19.8848,19.77461,19.91834,19.91344,20.11499,20.0363,19.98339,20.04612,20.15542,20.14014,20.0757,20.20916,20.15754,19.9329,19.77726,19.4439,19.2639,19.33584,19.38604,19.9823,20.1534,20.1505,20.2411,20.0882,20.06004,20.0718,19.9922,19.9429,20.29474,20.64345,20.4973,20.4995,20.4925,20.5518,20.56334,20.4018,20.76615,20.89018,20.8361,20.7883,21.0405,21.0438,20.91084,20.75973,20.53584,20.3443,20.4036,20.4276,20.2046,20.33574,20.3885,20.31212,20.54012,20.55962,20.59762,20.4891,20.4921,20.47799,20.43309,20.5816,20.6245,20.49362,20.28501,20.73262,21.58076,21.5319,21.19974,21.0166,20.9161,20.9851,21.2885,21.54462,21.30551,21.30862,21.28351,21.387,21.0151,21.0401,20.7551,20.6306,20.46024,20.5156,20.62751,20.54362,20.42851,20.48999]}'),v={HeroChartSection:"HeroChartSection_enX5",HeroChartGlass:"HeroChartGlass_XXJX",HeroChartGradient:"HeroChartGradient_LGAa",HeroChartFigure:"HeroChartFigure_YLjc",HeroChartFadeBottom:"HeroChartFadeBottom_BbBJ",HeroChartFadeBottomDeep:"HeroChartFadeBottomDeep_u09S",ChartContainer:"ChartContainer_Q2nW"},w=1e3;const b=function(){const e=Date.now().valueOf(),t=972e5,n=e-t*y.V.length;return y.V.map(((e,a)=>({time:(n+a*t)/1e3,value:e})))}(),B=b.slice(0,-90),H=b.slice(-90);function L(e,t){return{from:t+.5,to:e+t}}function N(e){return e?{background:{color:"#010512"},textColor:"#D1D1D1"}:{background:{color:"#F5F8FF"},textColor:"#2E2E2E"}}function S(){const e=l.useRef(null),t=function(){const{colorMode:e}=(0,f.I)(),t="dark"===e,[n,a]=l.useState(N(t));return l.useEffect((()=>{a(N(t))}),[t]),n}(),[n,a]=l.useState(null),[r,c]=l.useState(null),[o,s]=l.useState(0);return l.useEffect((()=>{const n=e.current;if(!n)return;const r=(0,g.C2)(n,{layout:t,rightPriceScale:{borderVisible:!1,autoScale:!1},grid:{horzLines:{visible:!1},vertLines:{visible:!1}},timeScale:{borderVisible:!1,fixLeftEdge:!0,fixRightEdge:!0},handleScroll:!1,handleScale:!1}),l=r.addAreaSeries({lineColor:"#2962ff",topColor:"#2962ff",bottomColor:"rgba(41, 98, 255, 0.28)",lineWidth:2});l.setData(B);const o=L(B.length,0);return r.timeScale().setVisibleLogicalRange(o),a(r),c(l),n.setAttribute("reveal","true"),()=>{r.remove(),a(null)}}),[]),l.useEffect((()=>{if(!n||!e.current)return;const t=e.current,a=()=>{const{width:e,height:a}=t.getBoundingClientRect();n.resize(e,a);const r=window.innerWidth,l=e>495,c=r>299;n.applyOptions({timeScale:{visible:l},rightPriceScale:{visible:c}});const s=r<1024,i=r<568;n.applyOptions({layout:{fontSize:i?6:s?8:12}});const m=L(B.length,o);n.timeScale().setVisibleLogicalRange(m)};return window.addEventListener("resize",a),window.requestAnimationFrame(a),()=>{window.removeEventListener("resize",a)}}),[n]),l.useEffect((()=>{n&&n.applyOptions({layout:t})}),[t,n]),l.useEffect((()=>{r&&n&&(o>=0&&(r.update(H[o]),n.timeScale().setVisibleLogicalRange(L(B.length,o))),o<H.length-1&&setTimeout((()=>{s(o+1)}),w))}),[r,o,n]),l.createElement("div",{className:v.ChartContainer,ref:e})}function _(e){return l.createElement("section",{className:v.HeroChartSection},l.createElement("div",{className:v.HeroChartGradient}),l.createElement("div",{className:v.HeroChartGlass}),l.createElement("figure",{className:v.HeroChartFigure},l.createElement(S,null)),e.codeBlocks.map((e=>l.createElement(k,(0,s.Z)({key:e.name},e)))),l.createElement("div",{className:v.HeroChartFadeBottom}),l.createElement("div",{className:v.HeroChartFadeBottomDeep}))}const V={HeroMain:"HeroMain__yG0",HeroButtons:"HeroButtons_NXTe",HeroContainer:"HeroContainer_V2Ap"};function x(e){const{header:t,paragraph:n,ctaLinks:a,codeBlocks:r}=e;return l.createElement("section",{className:V.HeroContainer},l.createElement("main",{className:V.HeroMain},l.createElement("h1",null,t),l.createElement("p",null,n),l.createElement("nav",{className:V.HeroButtons},a.map((e=>l.createElement(E,(0,s.Z)({key:e.link},e)))))),l.createElement(_,{codeBlocks:r??[]}))}const O={RootContainer:"RootContainer_A6Cr"},F=[{title:"Getting started",link:"docs",content:"Discover how to install the library, and create your first chart"},{title:"Tutorials",link:"tutorials",content:"Tutorials, examples, and framework integrations"},{title:"API reference",link:"docs/api",content:"View the API reference documentation"},{title:"GitHub issues",link:"https://github.com/tradingview/lightweight-charts/issues",content:"Report a bug, or get answers to your questions"}],R=[{title:"Get started",link:"docs",primary:!0},{title:"Explore features",link:"https://www.tradingview.com/lightweight-charts/",external:!0}],A=[{startLineNumber:1,lineNumberOverrides:["~$",""],canCopy:!0,canSelect:!0,style:{left:"20%",bottom:-28,transformOrigin:"center left"},name:"npm",lines:[l.createElement("span",{key:"1"},"npm install"),l.createElement("span",{key:"2"},"\xa0\xa0\xa0\xa0--save lightweight-charts")]},{startLineNumber:1,canCopy:!1,canSelect:!1,style:{right:"var(--right-code-block-position)",top:"var(--import-code-block-top-position)",transformOrigin:"center right"},name:"import",lines:[l.createElement("span",{key:"1"},l.createElement("span",null,"import"),l.createElement("span",null," { "),"createChart",l.createElement("span",null," } "),l.createElement("span",null," from")),l.createElement("span",{key:"2"},"\xa0\xa0",l.createElement("span",null,"'lightweight-charts'"),";"),l.createElement("span",{key:"3"},l.createElement("span",null,"const")," chart ="),l.createElement("span",{key:"4"},"\xa0\xa0",l.createElement("span",null,"createChart"),l.createElement("span",null,"("),"container",l.createElement("span",null,")"),";")]},{startLineNumber:39,canCopy:!1,canSelect:!1,style:{left:"calc(-1 * var(--hero-chart-padding-left) + var(--main-code-block-left-adjustment))",top:-20,transformOrigin:"top left",maxWidth:"489px"},name:"chart-code",lines:[l.createElement("span",{key:"1"},l.createElement("span",{"data-c3":!0},"const")," chartOptions =",l.createElement("span",null," { "),"layout: ",l.createElement("span",null," { ")," background:"),l.createElement("span",{key:"2"},"\xa0\xa0",l.createElement("span",null," { "),"type: ",l.createElement("span",{"data-c1":!0},"'solid'"),", color: ",l.createElement("span",{"data-c1":!0},"'transparent'"),l.createElement("span",null," } "),l.createElement("span",null," } "),l.createElement("span",null," }"),";"),l.createElement("span",{key:"3"},l.createElement("span",{"data-c3":!0},"const")," chart = ",l.createElement("span",{"data-c4":!0},"createChart"),l.createElement("span",null,"("),"container, chartOptions",l.createElement("span",null,")"),";"),l.createElement("span",{key:"4"},l.createElement("span",{"data-c3":!0},"const")," areaSeries = chart.",l.createElement("span",{"data-c4":!0},"addAreaSeries"),l.createElement("span",null,"("),l.createElement("span",null,"{ ")),l.createElement("span",{key:"5"},"\xa0\xa0lineColor: ",l.createElement("span",{"data-c1":!0},"'#2962ff'"),", topColor:"," ",l.createElement("span",{"data-c1":!0},"'#2962ff'"),","),l.createElement("span",{key:"6"},"\xa0\xa0bottomColor:"," ",l.createElement("span",{"data-c1":!0},"'rgba(41, 98, 255, 0.28)'"),l.createElement("span",null," }"),l.createElement("span",null,")"),";")]},{startLineNumber:38,canCopy:!1,canSelect:!1,style:{right:-12,top:-8,transformOrigin:"top right",maxWidth:"calc(100vw - 60px)"},name:"chart-code-phone",lines:[l.createElement("span",{key:"3"},l.createElement("span",{"data-c4":!0},"createChart"),l.createElement("span",null,"("),"container, chartOptions",l.createElement("span",null,")"),";"),l.createElement("span",{key:"4"},l.createElement("span",{"data-c3":!0},"const")," areaSeries ="),l.createElement("span",{key:"5"},"\xa0\xa0chart.",l.createElement("span",{"data-c4":!0},"addAreaSeries"),l.createElement("span",null,"("),l.createElement("span",null,"{ "),"lineColor:"),l.createElement("span",{key:"6"},"\xa0\xa0\xa0\xa0",l.createElement("span",{"data-c1":!0},"'#2962ff'"),", topColor:"," ",l.createElement("span",{"data-c1":!0},"'#2962ff'"),","),l.createElement("span",{key:"7"},"\xa0\xa0\xa0\xa0bottomColor:"," ",l.createElement("span",{"data-c1":!0},"'rgba(41, 98, 255,'")),l.createElement("span",{key:"8"},"\xa0\xa0\xa0\xa0",l.createElement("span",{"data-c1":!0},"'0.28)'"),l.createElement("span",null," }"),l.createElement("span",null,")"),";")]}],D="Lightweight Charts\u2122 Documentation",G="Lightweight Charts\u2122 is a library for creating interactive financial charts. This documentation site provides all the information needed to get started with Lightweight Charts\u2122 and help you make the most of its features.",M=!0;function T(){return l.createElement(l.Fragment,null,M?l.createElement(o,{text:"Big news! Version 4.0 of Lightweight Charts\u2122 is now available",link:"https://github.com/tradingview/lightweight-charts/releases/tag/v4.0.0",linkText:"Read more"}):"",l.createElement("div",{className:O.RootContainer},l.createElement(x,{ctaLinks:R,codeBlocks:A,header:D,paragraph:G}),l.createElement(p,{cardLinks:F})))}const Z=function(){return l.createElement(r.Z,{title:"Home",description:G},l.createElement(a.Z,null,l.createElement("link",{rel:"preload",href:"https://fonts.cdnfonts.com/s/60249/Euclid Circular B SemiBold.woff",as:"font",type:"font/woff",crossOrigin:"anonymous"}),l.createElement("link",{rel:"preload",href:"https://fonts.cdnfonts.com/s/13494/Menlo-Regular.woff",as:"font",type:"font/woff",crossOrigin:"anonymous"})),l.createElement(T,null))}}}]);