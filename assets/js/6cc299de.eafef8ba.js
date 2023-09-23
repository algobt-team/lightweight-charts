"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8949],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>k});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},h=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=s(i),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return i?n.createElement(k,l(l({ref:t},h),{},{components:i})):n.createElement(k,l({ref:t},h))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},1144:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=i(7462),r=(i(7294),i(3905));const a={id:"TimeScaleOptions",title:"Interface: TimeScaleOptions",sidebar_label:"TimeScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/TimeScaleOptions",id:"api/interfaces/TimeScaleOptions",title:"Interface: TimeScaleOptions",description:"Extended time scale options for time-based horizontal scale",source:"@site/docs/api/interfaces/TimeScaleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TimeScaleOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/TimeScaleOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TimeScaleOptions",title:"Interface: TimeScaleOptions",sidebar_label:"TimeScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"rightOffset",id:"rightoffset",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"barSpacing",id:"barspacing",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"minBarSpacing",id:"minbarspacing",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"fixLeftEdge",id:"fixleftedge",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"fixRightEdge",id:"fixrightedge",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"lockVisibleTimeRangeOnResize",id:"lockvisibletimerangeonresize",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"rightBarStaysOnScroll",id:"rightbarstaysonscroll",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"borderVisible",id:"bordervisible",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"borderColor",id:"bordercolor",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"visible",id:"visible",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"timeVisible",id:"timevisible",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"secondsVisible",id:"secondsvisible",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"shiftVisibleRangeOnNewBar",id:"shiftvisiblerangeonnewbar",level:3},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"ticksVisible",id:"ticksvisible",level:3},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"tickMarkMaxCharacterLength",id:"tickmarkmaxcharacterlength",level:3},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"uniformDistribution",id:"uniformdistribution",level:3},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"minimumHeight",id:"minimumheight",level:3},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"tickMarkFormatter",id:"tickmarkformatter",level:3}],h={toc:s},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Extended time scale options for time-based horizontal scale"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HorzScaleOptions"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TimeScaleOptions"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"rightoffset"},"rightOffset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"rightOffset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The margin space in bars from the right side of the chart."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#rightoffset"},"rightOffset")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"barspacing"},"barSpacing"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"barSpacing"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The space between bars in pixels."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"6")),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#barspacing"},"barSpacing")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minbarspacing"},"minBarSpacing"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"minBarSpacing"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The minimum space between bars in pixels."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0.5")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#minbarspacing"},"minBarSpacing")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fixleftedge"},"fixLeftEdge"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"fixLeftEdge"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Prevent scrolling to the left of the first bar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#fixleftedge"},"fixLeftEdge")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fixrightedge"},"fixRightEdge"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"fixRightEdge"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Prevent scrolling to the right of the most recent bar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#fixrightedge"},"fixRightEdge")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lockvisibletimerangeonresize"},"lockVisibleTimeRangeOnResize"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"lockVisibleTimeRangeOnResize"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Prevent changing the visible time range during chart resizing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#lockvisibletimerangeonresize"},"lockVisibleTimeRangeOnResize")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rightbarstaysonscroll"},"rightBarStaysOnScroll"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"rightBarStaysOnScroll"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Prevent the hovered bar from moving when scrolling."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#rightbarstaysonscroll"},"rightBarStaysOnScroll")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bordervisible"},"borderVisible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"borderVisible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Show the time scale border."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#bordervisible"},"borderVisible")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bordercolor"},"borderColor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"borderColor"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The time scale border color."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"'#2B2B43'")),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#bordercolor"},"borderColor")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"visible"},"visible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"visible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Show the time scale."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#visible"},"visible")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"timevisible"},"timeVisible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"timeVisible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Show the time, not just the date, in the time scale and vertical crosshair label."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#timevisible"},"timeVisible")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"secondsvisible"},"secondsVisible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"secondsVisible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Show seconds in the time scale and vertical crosshair label in ",(0,r.kt)("inlineCode",{parentName:"p"},"hh:mm:ss")," format for intraday data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#secondsvisible"},"secondsVisible")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"shiftvisiblerangeonnewbar"},"shiftVisibleRangeOnNewBar"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"shiftVisibleRangeOnNewBar"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Shift the visible range to the right (into the future) by the number of new bars when new data is added."),(0,r.kt)("p",null,"Note that this only applies when the last bar is visible."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#shiftvisiblerangeonnewbar"},"shiftVisibleRangeOnNewBar")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ticksvisible"},"ticksVisible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ticksVisible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Draw small vertical line on time axis labels."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#ticksvisible"},"ticksVisible")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tickmarkmaxcharacterlength"},"tickMarkMaxCharacterLength"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"tickMarkMaxCharacterLength"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Maximum tick mark label length. Used to override the default 8 character maximum length."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#tickmarkmaxcharacterlength"},"tickMarkMaxCharacterLength")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uniformdistribution"},"uniformDistribution"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"uniformDistribution"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Changes horizontal scale marks generation.\nWith this flag equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", marks of the same weight are either all drawn or none are drawn at all."),(0,r.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#uniformdistribution"},"uniformDistribution")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minimumheight"},"minimumHeight"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"minimumHeight"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Define a minimum height for the time scale.\nNote: This value will be exceeded if the\ntime scale needs more space to display it's contents."),(0,r.kt)("p",null,"Setting a minimum height could be useful for ensuring that\nmultiple charts positioned in a horizontal stack each have\nan identical time scale height, or for plugins which\nrequire a bit more space within the time scale pane."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,"0"),(0,r.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions"},"HorzScaleOptions"),".",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HorzScaleOptions#minimumheight"},"minimumHeight")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tickmarkformatter"},"tickMarkFormatter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"tickMarkFormatter"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#tickmarkformatter"},(0,r.kt)("inlineCode",{parentName:"a"},"TickMarkFormatter"))),(0,r.kt)("p",null,"Tick marks formatter can be used to customize tick marks labels on the time axis."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")))}m.isMDXComponent=!0}}]);