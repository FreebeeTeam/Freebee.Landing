(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t){},160:function(e,t){},161:function(e,t){},162:function(e,t,r){e.exports=r.p+"static/media/wifi.a5113c91.svg"},163:function(e,t,r){e.exports=r.p+"static/media/toilet.26830feb.svg"},164:function(e,t,r){e.exports=r.p+"static/media/user.c45c2ef8.svg"},165:function(e,t,r){e.exports=r.p+"static/media/empty-landmark.76edbd6f.svg"},5483:function(e,t,r){e.exports=r(5676)},5672:function(e,t,r){},5674:function(e,t,r){},5676:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"setError",function(){return X}),r.d(n,"setMapMode",function(){return Z}),r.d(n,"setMapViewport",function(){return ee});var a={};r.r(a),r.d(a,"selectLastError",function(){return ue}),r.d(a,"selectMapMode",function(){return le});var o={};r.r(o),r.d(o,"open",function(){return be}),r.d(o,"close",function(){return Ee});var i={};r.r(i),r.d(i,"getMarkersRequest",function(){return Me}),r.d(i,"getMarkersSuccess",function(){return Re}),r.d(i,"getMarkersError",function(){return we});var c={};r.r(c),r.d(c,"createFeedback",function(){return qe});var s={};r.r(s),r.d(s,"getWifi",function(){return Ge}),r.d(s,"getToilets",function(){return ze}),r.d(s,"getMarkerTypes",function(){return Ke});var u={};r.r(u),r.d(u,"getRoute",function(){return He});var l={};r.r(l),r.d(l,"getToilets",function(){return Je});var p={};r.r(p),r.d(p,"getMarkersRequest",function(){return Xe}),r.d(p,"getMarkersSuccess",function(){return Ze}),r.d(p,"getMarkersError",function(){return et});var d={};r.r(d),r.d(d,"getWifi",function(){return rt});var f={};r.r(f),r.d(f,"setFilter",function(){return ot}),r.d(f,"setNewMarkerPosition",function(){return it}),r.d(f,"getTypesRequest",function(){return ct}),r.d(f,"getTypesSuccess",function(){return st}),r.d(f,"getTypesError",function(){return ut}),r.d(f,"toiletsActions",function(){return i}),r.d(f,"wifiActions",function(){return p});var m={};r.r(m),r.d(m,"selectUserCurrentLocation",function(){return kt}),r.d(m,"selectUserCurrentLocationError",function(){return Ot});var b={};r.r(b),r.d(b,"selectWifi",function(){return Mt}),r.d(b,"selectToilets",function(){return Rt}),r.d(b,"selectIsAllMarkersFetching",function(){return wt}),r.d(b,"selectFilter",function(){return St}),r.d(b,"selectNewMarkerPositionInGeoJSON",function(){return Ct});var E={};r.r(E),r.d(E,"getMarkers",function(){return Nt}),r.d(E,"getMarkerTypes",function(){return Lt}),r.d(E,"wifiThunks",function(){return d}),r.d(E,"toiletsThunks",function(){return l});var h={};r.r(h),r.d(h,"createFeedback",function(){return Bt});var g={};r.r(g),r.d(g,"getRouteRequest",function(){return Vt}),r.d(g,"getRouteSuccess",function(){return qt}),r.d(g,"getRouteError",function(){return Gt}),r.d(g,"resetRoute",function(){return zt});var k={};r.r(k),r.d(k,"selectRoute",function(){return Jt}),r.d(k,"selectRouteSummary",function(){return Qt});var O={};r.r(O),r.d(O,"getRoute",function(){return Xt});var v={};r.r(v),r.d(v,"MAX_SNACK",function(){return tr}),r.d(v,"ANCHOR",function(){return rr});var y,j,M,R,w,S,C,T,F=r(0),N=r.n(F),L=r(25),P=r.n(L),A=r(51),U=r(5682),x=r(5685),_=r(5686),I=r(31),B=r(92),D=r(33),W=r(199),V=r(200),q=r(78),G=r.n(q),z=r(7),K=(y={},Object(z.a)(y,1,"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e."),Object(z.a)(y,2,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043c\u0435\u0441\u0442\u043e\u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),Object(z.a)(y,3,"\u0412\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0432\u044b\u0448\u043b\u043e."),y),$=r(5683),H=r(201),J=r.n(H),Q=Object($.a)({SHARED:{SET_ERROR:function(e){return{errorId:J.a.generate(),errorMessage:e}},SET_MAP_MODE:function(e){return{mode:e}},SET_MAP_VIEWPORT:function(e){return{viewport:e}}}}),Y=Q.shared,X=Y.setError,Z=Y.setMapMode,ee=Y.setMapViewport,te=r(5684),re=r(39),ne=r.n(re),ae={READ:"read",CREATE:"create"},oe={errorList:[],mapMode:ae.READ,mapViewport:{zoom:12,center:[53.9017,27.5429]}},ie=Object(te.a)((j={},Object(z.a)(j,X,function(e,t){var r=t.payload,n=r.errorMessage,a=r.errorId;return ne()(e,{errorList:{$push:[{errorId:a,errorMessage:n}]}})}),Object(z.a)(j,Z,function(e,t){var r=t.payload.mode;return ne()(e,{mapMode:{$set:r}})}),Object(z.a)(j,ee,function(e,t){var r=t.payload.viewport;return ne()(e,{mapViewport:{$set:r}})}),j),oe),ce=ie,se=r(43),ue=Object(se.a)(function(e){return e.shared.errorList},function(e){return e.length>0?e[e.length-1]:null}),le=function(e){return e.shared.mapMode},pe=(r(154),ce),de=function(e){return function(t){return function(r){if(r.error||G.a.get(r,"payload.error",!1)){var a=r.payload;if(a.message&&"Network Error"===a.message&&e.dispatch(n.setError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443.")),a.geolocationErrorCode){var o=K[a.geolocationErrorCode];e.dispatch(n.setError(o))}}return t(r)}}},fe=r(14),me=r(5677),be=Object(me.a)("".concat("FEEDBACK_SIDEBAR","/OPEN")),Ee=Object(me.a)("".concat("FEEDBACK_SIDEBAR","/CLOSE")),he=o.open,ge=o.close,ke=Object(te.a)((M={},Object(z.a)(M,he.toString(),function(e){return Object(fe.a)({},e,{open:!0})}),Object(z.a)(M,ge.toString(),function(e){return Object(fe.a)({},e,{open:!1})}),M),{open:!1}),Oe=ke,ve=Object(D.combineReducers)({feedbackSidebar:Oe}),ye=Object($.a)({MARKERS:{TOILETS:{GET_MARKERS_REQUEST:function(){},GET_MARKERS_SUCCESS:function(e){return{toilets:e}},GET_MARKERS_ERROR:function(e){return{error:e}}}}}),je=ye.markers.toilets,Me=je.getMarkersRequest,Re=je.getMarkersSuccess,we=je.getMarkersError,Se=r(100),Ce=Object(te.a)((R={},Object(z.a)(R,Me,function(e){return Object(fe.a)({},e,{isFetching:!0})}),Object(z.a)(R,Re,function(e,t){var r=t.payload.toilets.map(function(e){var t=e.location,r=Object(Se.a)(e,["location"]),n=t.coordinates;return Object(fe.a)({},r,{location:n})});return Object(fe.a)({},e,{isFetching:!1,markers:r})}),Object(z.a)(R,we,function(e,t){var r=t.payload.error;return Object(fe.a)({},e,{isFetching:!1,error:r})}),R),{markers:[],error:{},isFetching:!1}),Te=r(26),Fe=r.n(Te),Ne=r(41),Le=r(52),Pe=r.n(Le),Ae="\n".concat("https://route.api.here.com/routing/7.2/calculateroute.json","\n?app_id=").concat("NdjllfhVLr1qMIgFAVFH","\n&app_code=").concat("toAsByMJCTqYtCf6990Uvg"),Ue=function(e){return function(t){return"".concat(e).concat(t)}},xe=Ue("https://freebee-api-dev.herokuapp.com/api"),_e=Ue(Ae),Ie=function(){return xe("/feedback")},Be=function(){return xe("/wifi")},De=function(){return xe("/toilets")},We=function(){return xe("/markers/types")},Ve=function(){return _e("")},qe=function(e){return Pe.a.post(Ie(),e)},Ge=function(){return Pe.a.get(Be())},ze=function(){return Pe.a.get(De())},Ke=function(){return Pe.a.get(We())},$e={type:"balanced",transportModes:"pedestrian",trafficMode:"traffic:disabled"},He=function(e,t){var r="".concat("geo!").concat(e.join(",")),n="".concat("geo!").concat(t.join(",")),a=Object.values($e).join(";");return Pe.a.get(Ve(),{params:{waypoint0:r,waypoint1:n,mode:a}})},Je=function(){return function(){var e=Object(Ne.a)(Fe.a.mark(function e(t){var r,n;return Fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Me()),e.prev=1,e.next=4,s.getToilets();case 4:r=e.sent,n=r.data,t(Re(n)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),t(we());case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},Qe=Ce,Ye=Object($.a)({MARKERS:{WIFIS:{GET_MARKERS_REQUEST:function(){},GET_MARKERS_SUCCESS:function(e){return{wifi:e}},GET_MARKERS_ERROR:function(e){return{error:e}}}}}).markers.wifis,Xe=Ye.getMarkersRequest,Ze=Ye.getMarkersSuccess,et=Ye.getMarkersError,tt=Object(te.a)((w={},Object(z.a)(w,Xe,function(e){return Object(fe.a)({},e,{isFetching:!0})}),Object(z.a)(w,Ze,function(e,t){var r=t.payload.wifi.map(function(e){var t=e.location,r=Object(Se.a)(e,["location"]),n=t.coordinates;return Object(fe.a)({},r,{location:n})});return Object(fe.a)({},e,{isFetching:!1,markers:r})}),Object(z.a)(w,et,function(e,t){var r=t.payload.error;return Object(fe.a)({},e,{isFetching:!1,error:r})}),w),{markers:[],error:{},isFetching:!1}),rt=function(){return function(){var e=Object(Ne.a)(Fe.a.mark(function e(t){var r,n;return Fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Xe()),e.prev=1,e.next=4,s.getWifi();case 4:r=e.sent,n=r.data,t(Ze(n)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),t(et(e.t0));case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},nt=tt,at=Object($.a)({MARKERS:{SET_FILTER:function(e){return{filter:e}},SET_NEW_MARKER_POSITION:function(e){return{position:e}},GET_TYPES_REQUEST:function(){},GET_TYPES_SUCCESS:function(e){return{types:e}},GET_TYPES_ERROR:function(e){return{error:e}}}}).markers,ot=at.setFilter,it=at.setNewMarkerPosition,ct=at.getTypesRequest,st=at.getTypesSuccess,ut=at.getTypesError,lt=ot,pt=it,dt=ct,ft=st,mt=ut,bt={selected:null,newMarkerPosition:null,markerTypes:[],isMarkerTypesFetching:!1,markerTypesError:null},Et=Object(te.a)((S={},Object(z.a)(S,lt,function(e,t){var r=t.payload.filter;return Object(fe.a)({},e,{selected:r})}),Object(z.a)(S,pt,function(e,t){var r=t.payload.position;return Object(fe.a)({},e,{newMarkerPosition:r})}),Object(z.a)(S,dt,function(e){return Object(fe.a)({},e,{isMarkerTypesFetching:!0,markerTypesError:bt.markerTypesError})}),Object(z.a)(S,ft,function(e,t){var r=t.payload.types;return Object(fe.a)({},e,{isMarkerTypesFetching:!1,markerTypes:r})}),Object(z.a)(S,mt,function(e,t){var r=t.payload.error;return Object(fe.a)({},e,{isMarkerTypesFetching:!1,markerTypesError:r})}),S),bt),ht=Object(D.combineReducers)({shared:Et,toilets:Qe,wifi:nt}),gt=Object($.a)({USER:{SET_CURRENT_LOCATION:function(e){return e.length?{currentLocation:e}:{error:!0,geolocationErrorCode:e.code,currentLocation:null}}}}).user,kt=function(e){return e.user.currentLocation},Ot=function(e){return e.user.locationError},vt=(r(160),gt.setCurrentLocation),yt=Object(te.a)(Object(z.a)({},vt.toString(),function(e,t){var r=t.payload.currentLocation;return ne()(e,{currentLocation:{$set:r}})}),{currentLocation:null,locationError:null}),jt=function(e){return e.markers},Mt=Object(se.a)(jt,function(e){return e.wifi.markers}),Rt=Object(se.a)(jt,function(e){return e.toilets.markers}),wt=Object(se.a)(jt,function(e){return e.wifi.isFetching||e.toilets.isFetching}),St=Object(se.a)(jt,function(e){return e.shared.selected}),Ct=Object(se.a)([function(e){return e.markers.shared.newMarkerPosition},m.selectUserCurrentLocation],function(e,t){return e?{type:"Point",coordinates:[e.lat,e.lng]}:{type:"Point",coordinates:t}}),Tt=d.getWifi,Ft=l.getToilets,Nt=function(){return function(){var e=Object(Ne.a)(Fe.a.mark(function e(t){return Fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t(Tt()),t(Ft())]);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},Lt=function(){return function(){var e=Object(Ne.a)(Fe.a.mark(function e(t){var r,n;return Fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(ct()),e.prev=1,e.next=4,s.getMarkerTypes();case 4:r=e.sent,n=r.data,t(st(n)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),t(ut(e.t0));case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},Pt=ht,At=Object($.a)({FEEDBACK:{CREATE_FEEDBACK_REQUEST:function(){},CREATE_FEEDBACK_SUCCESS:function(){},CREATE_FEEDBACK_ERROR:function(e){return{error:e}}}}).feedback,Ut=At.createFeedbackRequest,xt=At.createFeedbackSuccess,_t=At.createFeedbackError,It=Object(te.a)((C={},Object(z.a)(C,Ut,function(e){return Object(fe.a)({},e,{isLoading:!0})}),Object(z.a)(C,xt,function(e){return Object(fe.a)({},e,{isLoading:!1})}),Object(z.a)(C,_t,function(e,t){var r=t.payload.error;return Object(fe.a)({},e,{isLoading:!1,error:r})}),C),{feedback:[],error:{},isLoading:!1}),Bt=(r(161),function(e){return function(){var t=Object(Ne.a)(Fe.a.mark(function t(r){return Fe.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r(Ut()),t.prev=1,t.next=4,c.createFeedback(e);case 4:r(xt()),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0),r(_t(t.t0));case 11:case"end":return t.stop()}},t,this,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()}),Dt=It,Wt=Object($.a)({ROUTING:{GET_ROUTE_REQUEST:function(e){return{marker:e}},GET_ROUTE_SUCCESS:function(e){return{route:e}},GET_ROUTE_ERROR:function(e){return{error:e}},RESET_ROUTE:function(){}}}).routing,Vt=Wt.getRouteRequest,qt=Wt.getRouteSuccess,Gt=Wt.getRouteError,zt=Wt.resetRoute,Kt={marker:null,route:null,isFetching:!1,error:null},$t=Object(te.a)((T={},Object(z.a)(T,Vt,function(e,t){var r=t.payload.marker;return ne()(e,{marker:{$set:r},isFetching:{$set:!0},error:{$set:Kt.error}})}),Object(z.a)(T,qt,function(e,t){var r=t.payload.route;return ne()(e,{isFetching:{$set:!1},route:{$set:r}})}),Object(z.a)(T,Gt,function(e,t){var r=t.payload.error;return ne()(e,{isFetching:{$set:!1},error:{$set:r}})}),Object(z.a)(T,zt,function(e){return ne()(e,{route:{$set:null}})}),Object(z.a)(T,f.setFilter,function(e,t){return t.payload.filter?ne()(e,{error:{$set:null},route:{$set:null}}):e}),T),Kt),Ht=function(e){return e.routing.route},Jt=Object(se.a)(Ht,function(e){return e?e.leg:null}),Qt=Object(se.a)([Ht,function(e){return e.routing.marker}],function(e,t){return e?{summary:e.summary,marker:t}:null}),Yt=function(e){var t=e.response.route[0],r=t.leg,n=t.summary;return{leg:r[0],summary:n}},Xt=function(e,t){return function(){var r=Object(Ne.a)(Fe.a.mark(function r(n){var a,o,i;return Fe.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.location,n(Vt(t)),r.prev=2,r.next=5,u.getRoute(e,a);case 5:o=r.sent,i=Yt(o.data),n(qt(i)),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),n(Gt(r.t0));case 13:case"end":return r.stop()}},r,this,[[2,10]])}));return function(e){return r.apply(this,arguments)}}()},Zt={user:yt,ui:ve,markers:Pt,feedback:Dt,routing:$t,shared:pe},er=Object(D.combineReducers)(Zt),tr=3,rr={vertical:"bottom",horizontal:"right"},nr=Object(I.createMuiTheme)({palette:{primary:{main:"#f4c844"},secondary:{main:"#e53935"}},typography:{useNextVariants:!0}}),ar=r(34),or=r(35),ir=r(37),cr=r(36),sr=r(38),ur=r(4),lr=r(5679),pr=r(5687),dr=r(32),fr=r(15),mr=r.n(fr),br=r(162),Er=r.n(br),hr=r(163),gr=r.n(hr),kr=r(164),Or=r.n(kr),vr=r(165),yr=r.n(vr),jr=[25,37],Mr={iconUrl:gr.a,iconSize:jr},Rr=new mr.a.Icon(Mr),wr=Object(I.withStyles)(function(){return{routeButton:{paddingTop:0,paddingBottom:0,"&:hover":{backgroundColor:"transparent"}},content:{width:250,fontSize:13},point:{fontWeight:"bold"},title:{fontWeight:"bold"}}})(function(e){var t=e.toilet,r=e.classes,n=e.buildRoute;return F.createElement(lr.a,{icon:Rr,position:t.location,onDblclick:function(){n(t)()}},F.createElement(pr.a,{autoPan:!1},F.createElement("div",{className:r.content},F.createElement("span",{className:r.title},"\u0422\u0443\u0430\u043b\u0435\u0442"),F.createElement(ur.f,{disableRipple:!0,className:r.routeButton,onClick:n(t)},F.createElement(dr.c,null)),F.createElement("br",null),F.createElement("br",null),F.createElement("span",{className:r.point},"\u0410\u0434\u0440\u0435\u0441: "),F.createElement("span",null,t.address),F.createElement("br",null),F.createElement("br",null),F.createElement("span",{className:r.point},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),F.createElement("span",null,t.description||"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"))))}),Sr={iconUrl:Er.a,iconSize:jr},Cr=new mr.a.Icon(Sr),Tr=Object(I.withStyles)(function(){return{routeButton:{paddingTop:0,paddingBottom:0,"&:hover":{backgroundColor:"transparent"}},content:{width:250,fontSize:13},point:{fontWeight:"bold"},title:{fontWeight:"bold"}}})(function(e){var t=e.wifi,r=e.classes,n=e.buildRoute;return F.createElement(lr.a,{icon:Cr,position:t.location,onDblclick:function(){n(t)()}},F.createElement(pr.a,{autoPan:!1},F.createElement("div",{className:r.content},F.createElement("span",{className:r.point},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "),F.createElement("span",{className:r.title},t.title),F.createElement(ur.f,{disableRipple:!0,className:r.routeButton,onClick:n(t)},F.createElement(dr.c,null)),F.createElement("br",null),F.createElement("br",null),F.createElement("span",{className:r.point},"\u0410\u0434\u0440\u0435\u0441: "),F.createElement("span",null,t.address),F.createElement("br",null),F.createElement("br",null),F.createElement("span",{className:r.point},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "),F.createElement("span",null,t.description))))}),Fr={iconUrl:Or.a,iconSize:[25,25]},Nr=new mr.a.Icon(Fr),Lr=function(e){var t=e.location;return F.createElement(lr.a,{icon:Nr,zIndexOffset:1e4,position:t})},Pr=function(e){var t=e.onClick;return N.a.createElement(ur.c,{color:"primary",onClick:t},N.a.createElement(dr.f,{color:"inherit"}))},Ar=r(63),Ur=function(e){return{filter:{},drop:{display:"flex",flexDirection:"column",alignItems:"center"},button:{},open:{display:"flex"},close:{display:"none"},mainButton:{},optionButton:{marginTop:15},"@media only screen and (min-width: 768px)":{filter:{top:"2%",left:"2%"}}}},xr=Object(I.withStyles)(Ur)(function(e){var t=e.Icon,r=e.filter,n=e.onClick,a=e.classes,o=e.isSelected;return F.createElement(ur.c,{className:Object(Ar.a)([a.button,a.optionButton]),color:o?"primary":"default",onClick:n(r),size:"small"},F.createElement(t,null))}),_r=function(){return N.a.createElement(dr.h,{color:"inherit"})},Ir=function(){return N.a.createElement(dr.i,{color:"inherit"})},Br=function(){return N.a.createElement(dr.a,{color:"inherit"})},Dr=function(e){function t(){var e,r;Object(ar.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(ir.a)(this,(e=Object(cr.a)(t)).call.apply(e,[this].concat(a)))).state={open:!1},r.onFilterClick=function(e){return function(){(0,r.props.setFilter)(e)}},r.toggle=function(){return r.setState(function(e){return{open:!e.open}})},r}return Object(sr.a)(t,e),Object(or.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.selectedFilter,n=this.state.open;return N.a.createElement("div",{className:Object(Ar.a)([t.filter])},N.a.createElement(ur.c,{className:Object(Ar.a)([t.button,t.mainButton]),color:"primary",onClick:this.toggle},N.a.createElement(dr.e,{color:"inherit"})),N.a.createElement("div",{className:Object(Ar.a)([n?t.open:t.close,t.drop])},N.a.createElement(xr,{isSelected:null===r,filter:null,onClick:this.onFilterClick,Icon:Br}),N.a.createElement(xr,{isSelected:"toilet"===r,filter:"toilet",onClick:this.onFilterClick,Icon:_r}),N.a.createElement(xr,{isSelected:"wifi"===r,filter:"wifi",onClick:this.onFilterClick,Icon:Ir})))}}]),t}(F.Component),Wr=Object(I.withStyles)(Ur)(Dr),Vr=Object(I.createMuiTheme)({palette:{primary:{main:"#4caf50",contrastText:"#fff"},secondary:{main:"#d14942"}}}),qr=Object(I.withStyles)(function(e){return Object(z.a)({sidebarRoot:{width:"100%",overflowX:"hidden"},sidebarTitle:{padding:16,paddingBottom:0},sidebarTitleContent:{fontFamily:"'Roboto Condensed', Arial, Helvetica, sans-serif",fontWeight:"bold"},fieldsContainer:{margin:0},formField:{margin:12,width:"93%"},buttonsContainer:{display:"flex",justifyContent:"space-around"}},e.breakpoints.up("sm"),{sidebarRoot:{width:340}})})(function(e){var t=e.feedback,r=e.freebeeTypes,n=e.isOpen,a=e.classes,o=e.open,i=e.close,c=e.cancel,s=e.submit,u=e.handleFieldChange;return F.createElement(I.MuiThemeProvider,{theme:Vr},F.createElement(ur.p,{open:n,onClose:i,onOpen:o,anchor:"left",classes:{paper:a.sidebarRoot}},F.createElement(ur.e,{container:!0},F.createElement(ur.e,{item:!0,xs:12},F.createElement("div",{className:a.sidebarTitle},F.createElement(ur.r,{className:a.sidebarTitleContent,variant:"headline",gutterBottom:!0,align:"center"},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0445\u0430\u043b\u044f\u0432\u043e\u0439 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438!"))),F.createElement(ur.e,{className:a.fieldsContainer,container:!0,spacing:24},F.createElement(ur.e,{item:!0,xs:12},F.createElement(ur.d,{fullWidth:!0,className:a.formField},F.createElement(ur.q,{placeholder:"\u0443\u043b. \u0425\u0430\u043b\u044f\u0432\u0438\u043d\u0430, 7",label:"\u041c\u0435\u0441\u0442\u043e \u0445\u0430\u043b\u044f\u0432\u044b",required:!0,onChange:u("address"),value:t.address,InputLabelProps:{shrink:!0},fullWidth:!0}))),F.createElement(ur.e,{item:!0,xs:12},F.createElement(ur.d,{required:!0,fullWidth:!0,className:a.formField},F.createElement(ur.g,{htmlFor:"freebeeType"},"\u0412\u0438\u0434 \u0445\u0430\u043b\u044f\u0432\u044b"),F.createElement(ur.o,{onChange:u("type"),value:t.type,inputProps:{id:"freebeeType",name:"freebeeType"},fullWidth:!0},r.map(function(e){return F.createElement(ur.m,{key:e.value,value:e.value},e.label)})))),F.createElement(ur.e,{item:!0,xs:12},F.createElement(ur.d,{fullWidth:!0,className:a.formField},F.createElement(ur.q,{placeholder:"\u0410\u0432\u0442\u043e\u0440",label:"Freebee",required:!0,onChange:u("author"),value:t.author,InputLabelProps:{shrink:!0},fullWidth:!0}))),F.createElement(ur.e,{item:!0,xs:12},F.createElement(ur.d,{fullWidth:!0,className:a.formField},F.createElement(ur.q,{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0439 \u0445\u0430\u043b\u044f\u0432\u044b",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",onChange:u("description"),value:t.description,InputLabelProps:{shrink:!0},fullWidth:!0}))),F.createElement(ur.e,{item:!0,xs:12},F.createElement(ur.e,{container:!0,className:a.buttonsContainer},F.createElement(ur.a,{onClick:c,variant:"contained",color:"secondary"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),F.createElement(ur.a,{variant:"contained",type:"submit",color:"primary",onClick:s},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))))))}),Gr={address:"",type:[""],author:"",description:""},zr=function(e){function t(){var e,r;Object(ar.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(ir.a)(this,(e=Object(cr.a)(t)).call.apply(e,[this].concat(a)))).state=Gr,r.handleFieldChange=function(e){return function(t){r.setState(Object(z.a)({},e,t.target.value))}},r.handleSubmit=function(){var e=r.props,t=e.closeSidebar,n=e.sendFeedback,a=e.setReadMapMode,o=e.location,i=r.state,c=i.type,s=i.address,u=i.author,l=i.description;n({location:o,address:s,type:c.toString(),author:u,description:l}),a(),t(),r.setState(Object(fe.a)({},Gr))},r.handleCancel=function(){var e=r.props,t=e.closeSidebar;(0,e.setReadMapMode)(),t(),r.setState(Object(fe.a)({},Gr))},r}return Object(sr.a)(t,e),Object(or.a)(t,[{key:"componentDidUpdate",value:function(){this.state.type===Gr.type&&0!==this.props.freebeeTypes.length&&this.setState({type:this.props.freebeeTypes[0].value})}},{key:"render",value:function(){var e=this.props,t=e.isOpen,r=e.closeSidebar,n=e.openSidebar,a=e.freebeeTypes,o=this.state,i=o.address,c=o.author,s=o.type,u=o.description;if(0===a.length)return null;var l={address:i,author:c,type:s,description:u};return N.a.createElement(qr,{feedback:l,freebeeTypes:a,isOpen:t,close:r,open:n,submit:this.handleSubmit,cancel:this.handleCancel,handleFieldChange:this.handleFieldChange})}}]),t}(F.Component),Kr={closeSidebar:Ee,openSidebar:be,sendFeedback:h.createFeedback,setReadMapMode:function(){return n.setMapMode(ae.READ)}},$r=Object(A.b)(function(e){return{isOpen:e.ui.feedbackSidebar.open,location:b.selectNewMarkerPositionInGeoJSON(e),freebeeTypes:e.markers.shared.markerTypes}},Kr)(zr),Hr=r(5688),Jr=r(5689),Qr=r(5680),Yr=r(5681),Xr=r(204),Zr=function(e){return[e.latitude,e.longitude]},en=(r(5669),{iconUrl:yr.a,iconSize:jr}),tn=new mr.a.Icon(en),rn=function(e){function t(){var e,r;Object(ar.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(ir.a)(this,(e=Object(cr.a)(t)).call.apply(e,[this].concat(a)))).refNewMarker=Object(F.createRef)(),r.setMapRef=function(e){r.map=e},r.updateNewMarkerPosition=function(){var e=r.refNewMarker.current;null!=e&&r.props.setNewMarkerPosition(e.leafletElement.getLatLng())},r.handleViewportChanged=function(e){r.props.setMapViewport(e)},r.buildRouteToMarker=function(e){return function(){(0,r.props.buildRoute)(e)}},r}return Object(sr.a)(t,e),Object(or.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.userLocation,r=this.map.leafletElement;null!==t&&e.userLocation!==t&&r.panTo(t)}},{key:"render",value:function(){var e=this,t=this.props,r=t.classes,n=t.wifi,a=t.toilets,o=t.userLocation,i=t.route,c=t.mapMode,s=t.newMarkerPosition,u=t.mapViewport;return N.a.createElement(Hr.a,{className:r.map,viewport:u,onViewportChanged:this.handleViewportChanged,zoomControl:!1,ref:this.setMapRef},N.a.createElement(Jr.a,{attribution:"&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),c===ae.CREATE&&N.a.createElement(Qr.a,null,N.a.createElement(lr.a,{draggable:!0,icon:tn,position:s,onDragend:this.updateNewMarkerPosition,ref:this.refNewMarker})),N.a.createElement(Qr.a,null,o&&N.a.createElement(Lr,{key:o.toString(),location:o})),N.a.createElement(Qr.a,null,n.map(function(t){return N.a.createElement(Tr,{key:t.id,buildRoute:e.buildRouteToMarker,wifi:t})}),a.map(function(t){return N.a.createElement(wr,{key:t.id,buildRoute:e.buildRouteToMarker,toilet:t})})),N.a.createElement(Qr.a,null,N.a.createElement(Yr.a,{color:"#3f51b5",positions:function(e){if(!e)return[];var t=e.maneuver.map(function(e){var t=e.position;return Zr(t)}),r=Zr(e.start.originalPosition),n=Zr(e.end.originalPosition);return[r].concat(Object(Xr.a)(t),[n])}(i)})))}}]),t}(F.Component);rn.defaultProps={wifi:[],toilets:[]};var nn=Object(I.withStyles)(function(){return{map:{width:"100%",height:"100%"},"@media only screen and (min-width: 768px)":{map:{height:"100vh"}}}})(rn),an=function(e){function t(){var e,r;Object(ar.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(ir.a)(this,(e=Object(cr.a)(t)).call.apply(e,[this].concat(a)))).getUserLocation=function(){var e=r.props.setCurrentLocation;navigator.geolocation.getCurrentPosition(function(t){var r=t.coords,n=r.latitude,a=r.longitude;e([n,a])},function(t){console.error(t),e(t)})},r.buildRoute=function(e){var t=r.props,n=t.getRoute,a=t.currentUserLocation;null!==a&&n(a,e)},r}return Object(sr.a)(t,e),Object(or.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getMarkers)(),this.getUserLocation()}},{key:"render",value:function(){var e=this.props,t=e.wifi,r=e.toilets,n=e.currentUserLocation,a=e.route,o=e.mapMode,i=e.setNewMarkerPosition,c=e.setMapViewport,s=e.mapViewport,u=e.newMarkerPosition;return N.a.createElement(nn,{wifi:t,toilets:r,route:a,userLocation:n,mapMode:o,buildRoute:this.buildRoute,setNewMarkerPosition:i,newMarkerPosition:u,setMapViewport:c,mapViewport:s})}}]),t}(F.Component);an.defaultProps={wifi:[],toilets:[]};var on=b.selectWifi,cn=b.selectToilets,sn=b.selectFilter,un=E.getMarkers,ln=O.getRoute,pn=gt.setCurrentLocation,dn=Object(A.b)(function(e){var t=sn(e),r=[],n=[];return null===t&&(r=on(e),n=cn(e)),"wifi"===t&&(r=on(e)),"toilet"===t&&(n=cn(e)),{wifi:r,toilets:n,filter:t,route:k.selectRoute(e),mapViewport:e.shared.mapViewport,newMarkerPosition:e.markers.shared.newMarkerPosition}},function(e){return{getMarkers:function(){return e(un())},getRoute:function(t,r){return e(ln(t,r))},setCurrentLocation:function(t){return e(pn(t))},setNewMarkerPosition:function(t){return e(f.setNewMarkerPosition(t))},setMapViewport:function(t){return e(n.setMapViewport(t))}}})(an),fn=function(e){function t(){return Object(ar.a)(this,t),Object(ir.a)(this,Object(cr.a)(t).apply(this,arguments))}return Object(sr.a)(t,e),Object(or.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.summary,n=r.summary,a=r.marker,o=e.resetRoute,i=function(e){var t=e.travelTime/60;if(t<=60)return"".concat(Math.ceil(t)," \u043c\u0438\u043d\u0443\u0442");var r=t/60;return"".concat(Math.ceil(r)," \u0447\u0430\u0441\u043e\u0432")}(n),c=function(e){var t=e.distance;return t<1e3?"".concat(t," \u043c"):"".concat(Math.ceil(t/1e3)," \u043a\u043c")}(n);return N.a.createElement(ur.n,{className:t.root},N.a.createElement("div",{className:t.header},N.a.createElement(ur.r,{variant:"subtitle1",gutterBottom:!0},"\u0410\u0434\u0440\u0435\u0441: ".concat(a.address)),N.a.createElement(ur.f,{onClick:o,classes:{root:t.closeButtonRoot},className:t.closeButton},N.a.createElement(dr.b,null))),N.a.createElement(ur.b,null),N.a.createElement(ur.i,null,N.a.createElement(ur.j,{disableGutters:!0},N.a.createElement(ur.k,null,N.a.createElement(dr.g,null)),N.a.createElement(ur.l,null,c)),N.a.createElement(ur.j,{disableGutters:!0},N.a.createElement(ur.k,null,N.a.createElement(dr.d,null)),N.a.createElement(ur.l,null,i))))}}]),t}(F.PureComponent),mn=Object(I.withStyles)(function(){return{root:{height:"100%",padding:"1em 1.5em"},header:{display:"flex",justifyContent:"space-between"},closeButton:{color:"red",marginBottom:"0.35em"},closeButtonRoot:{padding:0}}})(fn),bn=Object(I.withStyles)(function(){return{progress:{position:"absolute",width:"100%",zIndex:1005},filterButton:{position:"absolute",zIndex:1001},routePanel:{position:"absolute",height:"auto",zIndex:1001},userLocationButton:{position:"absolute",zIndex:1002},contactUsWrapper:{position:"absolute",bottom:0,width:"100%",zIndex:1e3},contactUs:{width:"100%",borderRadius:0,fontFamily:"'Roboto Condensed', Arial, Helvetica, sans-serif",fontWeight:"bold"},contactUsDesktop:{display:"none"},"@media only screen and (min-width: 768px)":{contactUs:{display:"none"},userLocationButton:{right:"2%",bottom:"4%"},filterButton:{top:"2%",right:"2%"},contactUsDesktop:{display:"inline-flex",position:"absolute",zIndex:1001,left:"2%",bottom:"4%",color:"black",fontFamily:"'Roboto Condensed', Arial, Helvetica, sans-serif",fontWeight:"bold"},routePanel:{left:"2%",top:"2%",width:"15em"}},"@media only screen and (max-width: 768px)":{userLocationButton:{right:"4%",top:"2%"},filterButton:{left:"4%",top:"2%"},routePanel:{bottom:"0",width:"100%"}}}})(function(e){var t=e.openFeedbackSidebar,r=e.setCreationMapMode,n=e.mapMode,a=e.setUserLocation,o=e.currentUserLocation,i=e.setFilter,c=e.selectedFilter,s=e.routeSummary,u=e.resetRoute,l=e.isMarkersFetching,p=e.classes,d=n===ae.READ;return F.createElement(F.Fragment,null,l?F.createElement(ur.h,{className:p.progress}):null,F.createElement(dn,{mapMode:n,currentUserLocation:o}),F.createElement("div",{className:p.filterButton},F.createElement(Wr,{selectedFilter:c,setFilter:i})),F.createElement("div",{className:p.userLocationButton},F.createElement(Pr,{onClick:a})),!l&&F.createElement($r,null),s&&F.createElement("div",{className:p.routePanel},F.createElement(mn,{summary:s,resetRoute:u})),F.createElement("div",{className:p.contactUsWrapper},F.createElement(ur.a,{variant:"contained",color:"primary",onClick:d?r:t,className:p.contactUs},d?"\u041d\u0430\u0448\u043b\u0438 \u0445\u0430\u043b\u044f\u0432\u0443?":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c")),F.createElement(ur.a,{variant:"contained",color:"primary",onClick:d?r:t,className:p.contactUsDesktop},d?"\u041d\u0430\u0448\u043b\u0438 \u0445\u0430\u043b\u044f\u0432\u0443?":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"))}),En=function(e){function t(){var e,r;Object(ar.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(ir.a)(this,(e=Object(cr.a)(t)).call.apply(e,[this].concat(a)))).setCreationMapMode=function(){var e=r.props,t=e.setMapMode;(0,e.setNewMarkerPositionOnMapViewport)(),t(ae.CREATE)},r}return Object(sr.a)(t,e),Object(or.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getMarkerTypes)()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.lastGlobalError,n=t.enqueueSnackbar,a=G.a.get(e.lastGlobalError,"errorId",null),o=G.a.get(r,"errorId",null);a!==o&&null!==o&&n(r.errorMessage,{variant:"error"})}},{key:"render",value:function(){return N.a.createElement(bn,Object.assign({},this.props,{setCreationMapMode:this.setCreationMapMode}))}}]),t}(F.Component),hn=Object(A.b)(function(e){return{isMarkersFetching:b.selectIsAllMarkersFetching(e),currentUserLocation:m.selectUserCurrentLocation(e),locationError:m.selectUserCurrentLocationError(e),selectedFilter:b.selectFilter(e),routeSummary:k.selectRouteSummary(e),lastGlobalError:a.selectLastError(e),mapViewport:e.shared.mapViewport,mapMode:a.selectMapMode(e)}},function(e){return{openFeedbackSidebar:function(){return e(be())},setUserCurrentLocation:function(t){return e(gt.setCurrentLocation(t))},setFilter:function(t){return e(f.setFilter(t))},setNewMarkerPosition:function(t){return e(f.setNewMarkerPosition(t))},getMarkerTypes:function(){return e(E.getMarkerTypes())},resetRoute:function(){return e(g.resetRoute())},setMapMode:function(t){return e(n.setMapMode(t))}}},function(e,t){var r=e.currentUserLocation,n=e.mapViewport;return Object(fe.a)({},e,t,{setUserLocation:function(){r?t.setUserCurrentLocation(r.slice()):t.setUserCurrentLocation({code:1})},setNewMarkerPositionOnMapViewport:function(){t.setNewMarkerPosition({lat:n.center[0],lng:n.center[1]})}})})(Object(B.withSnackbar)(En)),gn=function(){return N.a.createElement(A.a,{store:function(){var e=Object(D.applyMiddleware)(V.a,de),t=Object(W.composeWithDevTools)({})(e);return Object(D.createStore)(er,t)}()},N.a.createElement(I.MuiThemeProvider,{theme:nr},N.a.createElement(B.SnackbarProvider,{maxSnack:v.MAX_SNACK,anchorOrigin:v.ANCHOR},N.a.createElement(U.a,{basename:"/map"},N.a.createElement(N.a.Fragment,null,N.a.createElement(x.a,null,N.a.createElement(_.a,{path:"/",component:hn})))))))},kn=(r(5672),r(5674),document.getElementById("root"));kn&&P.a.render(N.a.createElement(gn,null),kn)}},[[5483,2,1]]]);
//# sourceMappingURL=main.c0318050.chunk.js.map