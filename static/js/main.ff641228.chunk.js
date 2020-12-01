(this["webpackJsonpcutler-dashboard"]=this["webpackJsonpcutler-dashboard"]||[]).push([[0],{229:function(t,e,a){},230:function(t,e,a){},481:function(t,e,a){"use strict";a.r(e);var n=a(4),c=a(1),i=a.n(c),r=a(16),o=a.n(r),l=(a(229),a(230),a(42)),s=a(496),j=a(498),u=a(500),b=a(499),d=a(503),O=a(181),h=a(231),p=a(258),x=Object(s.a)((function(t){return{root:{height:"100%"}}})),m=function(t){var e=t.viewport,a=(x(),Object(c.useState)({country:null,population:null,area:null,urban:null})),i=Object(l.a)(a,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){if(e.wikidata){var t=e.wikidata,a=h.getEntities(t,["en"],["info","claims"],"json",!1);p(a).then((function(t){return t.json()})).then(h.parse.wd.entities).then((function(t){var e=t[Object.keys(t)[0]].claims;o({country:e.P17||null,population:e.P1082||null,area:e.P2046||null})}))}}),[e]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a,{mb:4,mt:4,children:Object(n.jsx)(d.a,{variant:"h5",children:e.place})}),Object(n.jsxs)(b.a,{mt:4,children:[Object(n.jsx)(d.a,{variant:"h6",children:"Population:"}),Object(n.jsx)(d.a,{children:new Number(r.population).toLocaleString(Object(O.a)())})]}),r.area&&Object(n.jsxs)(b.a,{mt:2,children:[Object(n.jsx)(d.a,{variant:"h6",children:"Area:"}),Object(n.jsxs)(d.a,{children:[r.area," km\xb2"]})]})]})},f=a(504),v=Object(s.a)((function(t){return{root:{height:"100%"}}})),w=function(t){var e=t.title,a=t.subtitle,c=t.child,i=v();return Object(n.jsx)(f.a,{className:i.root,children:Object(n.jsxs)(b.a,{m:4,children:[Object(n.jsxs)(b.a,{mb:4,mt:4,children:[Object(n.jsx)(b.a,{children:Object(n.jsx)(d.a,{variant:"h5",children:e})}),Object(n.jsx)(b.a,{children:a&&Object(n.jsx)(d.a,{variant:"caption",children:a})})]}),Object(n.jsx)(b.a,{mt:4,children:c})]})})};w.defaultProps={title:"",subtitle:""};var S=w,g=a(182),E=a.n(g),k=a(26),T=function(t){var e=t.viewport,a=Object({NODE_ENV:"production",PUBLIC_URL:"/georgekarapi/waterfront-hack2020",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).APIWEATHERBITKEY,i=Object(c.useState)([]),r=Object(l.a)(i,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){null===e.lat&&null===e.long||E.a.get("".concat("https://api.weatherbit.io/v2.0/history/airquality","?lat=").concat(e.lat,"&lon=").concat(e.long,"&key=").concat(a)).then((function(t){if(t.data.data){var e=t.data.data.map((function(t){return{aqi:t.aqi,timestamp:new Date(t.timestamp_local).toLocaleDateString()}}));s(e.slice(Math.max(e.length-12,0)))}else s(null)}))}),[e]),Object(n.jsx)(j.a,{container:!0,justify:"center",children:Object(n.jsx)(j.a,{item:!0,children:o?Object(n.jsxs)(k.b,{width:460,height:180,data:o,children:[Object(n.jsx)(k.c,{strokeDasharray:"3 3"}),Object(n.jsx)(k.f,{dataKey:"timestamp"}),Object(n.jsx)(k.g,{}),Object(n.jsx)(k.e,{}),Object(n.jsx)(k.d,{}),Object(n.jsx)(k.a,{dataKey:"aqi",fill:"#82ca9d"})]}):Object(n.jsx)(d.a,{children:"Sorry doesn't exist in the database :/"})})})},_=a(46),y=a.n(_),P=a(190),C=a.n(P),N=Object(s.a)((function(t){return{map:{position:"absolute",width:"100%",top:0,bottom:0}}})),A=function(t){t.viewport;var e=t.setViewport,a=N(),i=Object(c.useRef)(null);return y.a.accessToken=Object({NODE_ENV:"production",PUBLIC_URL:"/georgekarapi/waterfront-hack2020",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).APIMAPBOX,Object(c.useEffect)((function(){var t=new y.a.Map({container:i.current,style:"mapbox://styles/gkarapi/cki4z3dbx1bst19rn9i2zmkug",center:[10.015,44.895],attributionControl:!1,maxZoom:7.6,zoom:3.8}),a=new C.a({accessToken:y.a.accessToken,mapboxgl:y.a});return a.setTypes("country,place"),t.addControl(a,"top-left"),t.addControl(new y.a.NavigationControl),a.on("result",(function(t){console.log(t),e({place:t.result.text||null,lat:t.result.center[0]||null,long:t.result.center[1]||null,wikidata:t.result.properties.wikidata||null})})),function(){return t.remove()}}),[]),Object(n.jsx)("div",{ref:i,className:a.map})},D=Object(s.a)((function(t){return{map:{zIndex:1},panel:{zIndex:2,position:"absolute",bottom:0}}})),R=function(){var t=D(),e=Object(c.useState)({place:null,lat:null,long:null,wikidata:null}),a=Object(l.a)(e,2),i=a[0],r=a[1];return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(A,{className:t.map,viewport:i,setViewport:r}),Object(n.jsx)(u.a,{direction:"up",in:i.place,mountOnEnter:!0,unmountOnExit:!0,children:Object(n.jsxs)(j.a,{container:!0,className:t.panel,children:[Object(n.jsx)(j.a,{item:!0,md:6,sm:6,xs:12,children:Object(n.jsx)(S,{child:Object(n.jsx)(m,{viewport:i})})}),Object(n.jsx)(j.a,{item:!0,md:6,sm:6,xs:12,children:Object(n.jsx)(S,{title:"Air Quality",child:Object(n.jsx)(T,{viewport:i})})})]})})]})};var K=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(R,{})})};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(K,{})}),document.getElementById("root"))}},[[481,1,2]]]);
//# sourceMappingURL=main.ff641228.chunk.js.map