import{I as xt,b as Ot,g as Pt,_ as Ce,a as Z,h as Et,s as Rt,u as At}from"./DefaultPropsProvider-ELLn0s9H.js";import{g as jt,r as W}from"./index-Cp_2WB0_.js";import{r as Dt}from"./index-D2MAbzvX.js";import{j as we}from"./jsx-runtime-BjgbQsUx.js";import{o as ze,P as Tt,u as Ct}from"./Portal-D7fkpCCq.js";import{a as _e,c as Ge}from"./ButtonBase-B3vSuhhO.js";var ie={},Je;function $t(){if(Je)return ie;Je=1,Object.defineProperty(ie,"__esModule",{value:!0}),ie.default=void 0;var e=o(Dt()),t=xt;function r(p){if(typeof WeakMap!="function")return null;var i=new WeakMap,a=new WeakMap;return(r=function(c){return c?a:i})(p)}function o(p,i){if(p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var a=r(i);if(a&&a.has(p))return a.get(p);var c={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in p)if(l!=="default"&&Object.prototype.hasOwnProperty.call(p,l)){var m=f?Object.getOwnPropertyDescriptor(p,l):null;m&&(m.get||m.set)?Object.defineProperty(c,l,m):c[l]=p[l]}return c.default=p,a&&a.set(p,c),c}function n(p){return Object.keys(p).length===0}function s(p=null){const i=e.useContext(t.ThemeContext);return!i||n(i)?p:i}return ie.default=s,ie}var Mt=$t();const kt=jt(Mt);var $="top",L="bottom",H="right",M="left",$e="auto",ue=[$,L,H,M],ee="start",ce="end",Bt="clippingParents",it="viewport",se="popper",Wt="reference",Ke=ue.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+ce])},[]),st=[].concat(ue,[$e]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+ce])},[]),St="beforeRead",Lt="read",Ht="afterRead",qt="beforeMain",Vt="main",Nt="afterMain",Ut="beforeWrite",Ft="write",It="afterWrite",Xt=[St,Lt,Ht,qt,Vt,Nt,Ut,Ft,It];function V(e){return e?(e.nodeName||"").toLowerCase():null}function B(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=B(e).Element;return e instanceof t||e instanceof Element}function S(e){var t=B(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Me(e){if(typeof ShadowRoot>"u")return!1;var t=B(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Yt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},s=t.elements[r];!S(s)||!V(s)||(Object.assign(s.style,o),Object.keys(n).forEach(function(p){var i=n[p];i===!1?s.removeAttribute(p):s.setAttribute(p,i===!0?"":i)}))})}function zt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],s=t.attributes[o]||{},p=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),i=p.reduce(function(a,c){return a[c]="",a},{});!S(n)||!V(n)||(Object.assign(n.style,i),Object.keys(s).forEach(function(a){n.removeAttribute(a)}))})}}const _t={name:"applyStyles",enabled:!0,phase:"write",fn:Yt,effect:zt,requires:["computeStyles"]};function q(e){return e.split("-")[0]}var J=Math.max,xe=Math.min,te=Math.round;function je(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function pt(){return!/^((?!chrome|android).)*safari/i.test(je())}function re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,s=1;t&&S(e)&&(n=e.offsetWidth>0&&te(o.width)/e.offsetWidth||1,s=e.offsetHeight>0&&te(o.height)/e.offsetHeight||1);var p=K(e)?B(e):window,i=p.visualViewport,a=!pt()&&r,c=(o.left+(a&&i?i.offsetLeft:0))/n,f=(o.top+(a&&i?i.offsetTop:0))/s,l=o.width/n,m=o.height/s;return{width:l,height:m,top:f,right:c+l,bottom:f+m,left:c,x:c,y:f}}function ke(e){var t=re(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function ft(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Me(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function F(e){return B(e).getComputedStyle(e)}function Gt(e){return["table","td","th"].indexOf(V(e))>=0}function Y(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}function Oe(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(Me(e)?e.host:null)||Y(e)}function Qe(e){return!S(e)||F(e).position==="fixed"?null:e.offsetParent}function Jt(e){var t=/firefox/i.test(je()),r=/Trident/i.test(je());if(r&&S(e)){var o=F(e);if(o.position==="fixed")return null}var n=Oe(e);for(Me(n)&&(n=n.host);S(n)&&["html","body"].indexOf(V(n))<0;){var s=F(n);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return n;n=n.parentNode}return null}function de(e){for(var t=B(e),r=Qe(e);r&&Gt(r)&&F(r).position==="static";)r=Qe(r);return r&&(V(r)==="html"||V(r)==="body"&&F(r).position==="static")?t:r||Jt(e)||t}function Be(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function pe(e,t,r){return J(e,xe(t,r))}function Kt(e,t,r){var o=pe(e,t,r);return o>r?r:o}function ct(){return{top:0,right:0,bottom:0,left:0}}function lt(e){return Object.assign({},ct(),e)}function ut(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Qt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,lt(typeof t!="number"?t:ut(t,ue))};function Zt(e){var t,r=e.state,o=e.name,n=e.options,s=r.elements.arrow,p=r.modifiersData.popperOffsets,i=q(r.placement),a=Be(i),c=[M,H].indexOf(i)>=0,f=c?"height":"width";if(!(!s||!p)){var l=Qt(n.padding,r),m=ke(s),d=a==="y"?$:M,x=a==="y"?L:H,v=r.rects.reference[f]+r.rects.reference[a]-p[a]-r.rects.popper[f],h=p[a]-r.rects.reference[a],w=de(s),P=w?a==="y"?w.clientHeight||0:w.clientWidth||0:0,b=v/2-h/2,u=l[d],g=P-m[f]-l[x],y=P/2-m[f]/2+b,O=pe(u,y,g),A=a;r.modifiersData[o]=(t={},t[A]=O,t.centerOffset=O-y,t)}}function er(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||ft(t.elements.popper,n)&&(t.elements.arrow=n))}const tr={name:"arrow",enabled:!0,phase:"main",fn:Zt,effect:er,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var rr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function or(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:te(r*n)/n||0,y:te(o*n)/n||0}}function Ze(e){var t,r=e.popper,o=e.popperRect,n=e.placement,s=e.variation,p=e.offsets,i=e.position,a=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,l=e.isFixed,m=p.x,d=m===void 0?0:m,x=p.y,v=x===void 0?0:x,h=typeof f=="function"?f({x:d,y:v}):{x:d,y:v};d=h.x,v=h.y;var w=p.hasOwnProperty("x"),P=p.hasOwnProperty("y"),b=M,u=$,g=window;if(c){var y=de(r),O="clientHeight",A="clientWidth";if(y===B(r)&&(y=Y(r),F(y).position!=="static"&&i==="absolute"&&(O="scrollHeight",A="scrollWidth")),y=y,n===$||(n===M||n===H)&&s===ce){u=L;var R=l&&y===g&&g.visualViewport?g.visualViewport.height:y[O];v-=R-o.height,v*=a?1:-1}if(n===M||(n===$||n===L)&&s===ce){b=H;var E=l&&y===g&&g.visualViewport?g.visualViewport.width:y[A];d-=E-o.width,d*=a?1:-1}}var j=Object.assign({position:i},c&&rr),k=f===!0?or({x:d,y:v},B(r)):{x:d,y:v};if(d=k.x,v=k.y,a){var T;return Object.assign({},j,(T={},T[u]=P?"0":"",T[b]=w?"0":"",T.transform=(g.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",T))}return Object.assign({},j,(t={},t[u]=P?v+"px":"",t[b]=w?d+"px":"",t.transform="",t))}function nr(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,s=r.adaptive,p=s===void 0?!0:s,i=r.roundOffsets,a=i===void 0?!0:i,c={placement:q(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ze(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ze(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ar={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:nr,data:{}};var ye={passive:!0};function ir(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,s=n===void 0?!0:n,p=o.resize,i=p===void 0?!0:p,a=B(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&c.forEach(function(f){f.addEventListener("scroll",r.update,ye)}),i&&a.addEventListener("resize",r.update,ye),function(){s&&c.forEach(function(f){f.removeEventListener("scroll",r.update,ye)}),i&&a.removeEventListener("resize",r.update,ye)}}const sr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ir,data:{}};var pr={left:"right",right:"left",bottom:"top",top:"bottom"};function be(e){return e.replace(/left|right|bottom|top/g,function(t){return pr[t]})}var fr={start:"end",end:"start"};function et(e){return e.replace(/start|end/g,function(t){return fr[t]})}function We(e){var t=B(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Se(e){return re(Y(e)).left+We(e).scrollLeft}function cr(e,t){var r=B(e),o=Y(e),n=r.visualViewport,s=o.clientWidth,p=o.clientHeight,i=0,a=0;if(n){s=n.width,p=n.height;var c=pt();(c||!c&&t==="fixed")&&(i=n.offsetLeft,a=n.offsetTop)}return{width:s,height:p,x:i+Se(e),y:a}}function lr(e){var t,r=Y(e),o=We(e),n=(t=e.ownerDocument)==null?void 0:t.body,s=J(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=J(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),i=-o.scrollLeft+Se(e),a=-o.scrollTop;return F(n||r).direction==="rtl"&&(i+=J(r.clientWidth,n?n.clientWidth:0)-s),{width:s,height:p,x:i,y:a}}function Le(e){var t=F(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function dt(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:S(e)&&Le(e)?e:dt(Oe(e))}function fe(e,t){var r;t===void 0&&(t=[]);var o=dt(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),s=B(o),p=n?[s].concat(s.visualViewport||[],Le(o)?o:[]):o,i=t.concat(p);return n?i:i.concat(fe(Oe(p)))}function De(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ur(e,t){var r=re(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function tt(e,t,r){return t===it?De(cr(e,r)):K(t)?ur(t,r):De(lr(Y(e)))}function dr(e){var t=fe(Oe(e)),r=["absolute","fixed"].indexOf(F(e).position)>=0,o=r&&S(e)?de(e):e;return K(o)?t.filter(function(n){return K(n)&&ft(n,o)&&V(n)!=="body"}):[]}function vr(e,t,r,o){var n=t==="clippingParents"?dr(e):[].concat(t),s=[].concat(n,[r]),p=s[0],i=s.reduce(function(a,c){var f=tt(e,c,o);return a.top=J(f.top,a.top),a.right=xe(f.right,a.right),a.bottom=xe(f.bottom,a.bottom),a.left=J(f.left,a.left),a},tt(e,p,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function vt(e){var t=e.reference,r=e.element,o=e.placement,n=o?q(o):null,s=o?oe(o):null,p=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,a;switch(n){case $:a={x:p,y:t.y-r.height};break;case L:a={x:p,y:t.y+t.height};break;case H:a={x:t.x+t.width,y:i};break;case M:a={x:t.x-r.width,y:i};break;default:a={x:t.x,y:t.y}}var c=n?Be(n):null;if(c!=null){var f=c==="y"?"height":"width";switch(s){case ee:a[c]=a[c]-(t[f]/2-r[f]/2);break;case ce:a[c]=a[c]+(t[f]/2-r[f]/2);break}}return a}function le(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,s=r.strategy,p=s===void 0?e.strategy:s,i=r.boundary,a=i===void 0?Bt:i,c=r.rootBoundary,f=c===void 0?it:c,l=r.elementContext,m=l===void 0?se:l,d=r.altBoundary,x=d===void 0?!1:d,v=r.padding,h=v===void 0?0:v,w=lt(typeof h!="number"?h:ut(h,ue)),P=m===se?Wt:se,b=e.rects.popper,u=e.elements[x?P:m],g=vr(K(u)?u:u.contextElement||Y(e.elements.popper),a,f,p),y=re(e.elements.reference),O=vt({reference:y,element:b,strategy:"absolute",placement:n}),A=De(Object.assign({},b,O)),R=m===se?A:y,E={top:g.top-R.top+w.top,bottom:R.bottom-g.bottom+w.bottom,left:g.left-R.left+w.left,right:R.right-g.right+w.right},j=e.modifiersData.offset;if(m===se&&j){var k=j[n];Object.keys(E).forEach(function(T){var N=[H,L].indexOf(T)>=0?1:-1,U=[$,L].indexOf(T)>=0?"y":"x";E[T]+=k[U]*N})}return E}function mr(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,s=r.rootBoundary,p=r.padding,i=r.flipVariations,a=r.allowedAutoPlacements,c=a===void 0?st:a,f=oe(o),l=f?i?Ke:Ke.filter(function(x){return oe(x)===f}):ue,m=l.filter(function(x){return c.indexOf(x)>=0});m.length===0&&(m=l);var d=m.reduce(function(x,v){return x[v]=le(e,{placement:v,boundary:n,rootBoundary:s,padding:p})[q(v)],x},{});return Object.keys(d).sort(function(x,v){return d[x]-d[v]})}function hr(e){if(q(e)===$e)return[];var t=be(e);return[et(e),t,et(t)]}function gr(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,s=n===void 0?!0:n,p=r.altAxis,i=p===void 0?!0:p,a=r.fallbackPlacements,c=r.padding,f=r.boundary,l=r.rootBoundary,m=r.altBoundary,d=r.flipVariations,x=d===void 0?!0:d,v=r.allowedAutoPlacements,h=t.options.placement,w=q(h),P=w===h,b=a||(P||!x?[be(h)]:hr(h)),u=[h].concat(b).reduce(function(Q,X){return Q.concat(q(X)===$e?mr(t,{placement:X,boundary:f,rootBoundary:l,padding:c,flipVariations:x,allowedAutoPlacements:v}):X)},[]),g=t.rects.reference,y=t.rects.popper,O=new Map,A=!0,R=u[0],E=0;E<u.length;E++){var j=u[E],k=q(j),T=oe(j)===ee,N=[$,L].indexOf(k)>=0,U=N?"width":"height",D=le(t,{placement:j,boundary:f,rootBoundary:l,altBoundary:m,padding:c}),C=N?T?H:M:T?L:$;g[U]>y[U]&&(C=be(C));var I=be(C),z=[];if(s&&z.push(D[k]<=0),i&&z.push(D[C]<=0,D[I]<=0),z.every(function(Q){return Q})){R=j,A=!1;break}O.set(j,z)}if(A)for(var ve=x?3:1,Pe=function(X){var ae=u.find(function(he){var _=O.get(he);if(_)return _.slice(0,X).every(function(Ee){return Ee})});if(ae)return R=ae,"break"},ne=ve;ne>0;ne--){var me=Pe(ne);if(me==="break")break}t.placement!==R&&(t.modifiersData[o]._skip=!0,t.placement=R,t.reset=!0)}}const yr={name:"flip",enabled:!0,phase:"main",fn:gr,requiresIfExists:["offset"],data:{_skip:!1}};function rt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ot(e){return[$,H,L,M].some(function(t){return e[t]>=0})}function br(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,s=t.modifiersData.preventOverflow,p=le(t,{elementContext:"reference"}),i=le(t,{altBoundary:!0}),a=rt(p,o),c=rt(i,n,s),f=ot(a),l=ot(c);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}const wr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:br};function xr(e,t,r){var o=q(e),n=[M,$].indexOf(o)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,p=s[0],i=s[1];return p=p||0,i=(i||0)*n,[M,H].indexOf(o)>=0?{x:i,y:p}:{x:p,y:i}}function Or(e){var t=e.state,r=e.options,o=e.name,n=r.offset,s=n===void 0?[0,0]:n,p=st.reduce(function(f,l){return f[l]=xr(l,t.rects,s),f},{}),i=p[t.placement],a=i.x,c=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=p}const Pr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Or};function Er(e){var t=e.state,r=e.name;t.modifiersData[r]=vt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Rr={name:"popperOffsets",enabled:!0,phase:"read",fn:Er,data:{}};function Ar(e){return e==="x"?"y":"x"}function jr(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,s=n===void 0?!0:n,p=r.altAxis,i=p===void 0?!1:p,a=r.boundary,c=r.rootBoundary,f=r.altBoundary,l=r.padding,m=r.tether,d=m===void 0?!0:m,x=r.tetherOffset,v=x===void 0?0:x,h=le(t,{boundary:a,rootBoundary:c,padding:l,altBoundary:f}),w=q(t.placement),P=oe(t.placement),b=!P,u=Be(w),g=Ar(u),y=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,R=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,E=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(y){if(s){var T,N=u==="y"?$:M,U=u==="y"?L:H,D=u==="y"?"height":"width",C=y[u],I=C+h[N],z=C-h[U],ve=d?-A[D]/2:0,Pe=P===ee?O[D]:A[D],ne=P===ee?-A[D]:-O[D],me=t.elements.arrow,Q=d&&me?ke(me):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ct(),ae=X[N],he=X[U],_=pe(0,O[D],Q[D]),Ee=b?O[D]/2-ve-_-ae-E.mainAxis:Pe-_-ae-E.mainAxis,mt=b?-O[D]/2+ve+_+he+E.mainAxis:ne+_+he+E.mainAxis,Re=t.elements.arrow&&de(t.elements.arrow),ht=Re?u==="y"?Re.clientTop||0:Re.clientLeft||0:0,He=(T=j==null?void 0:j[u])!=null?T:0,gt=C+Ee-He-ht,yt=C+mt-He,qe=pe(d?xe(I,gt):I,C,d?J(z,yt):z);y[u]=qe,k[u]=qe-C}if(i){var Ve,bt=u==="x"?$:M,wt=u==="x"?L:H,G=y[g],ge=g==="y"?"height":"width",Ne=G+h[bt],Ue=G-h[wt],Ae=[$,M].indexOf(w)!==-1,Fe=(Ve=j==null?void 0:j[g])!=null?Ve:0,Ie=Ae?Ne:G-O[ge]-A[ge]-Fe+E.altAxis,Xe=Ae?G+O[ge]+A[ge]-Fe-E.altAxis:Ue,Ye=d&&Ae?Kt(Ie,G,Xe):pe(d?Ie:Ne,G,d?Xe:Ue);y[g]=Ye,k[g]=Ye-G}t.modifiersData[o]=k}}const Dr={name:"preventOverflow",enabled:!0,phase:"main",fn:jr,requiresIfExists:["offset"]};function Tr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Cr(e){return e===B(e)||!S(e)?We(e):Tr(e)}function $r(e){var t=e.getBoundingClientRect(),r=te(t.width)/e.offsetWidth||1,o=te(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Mr(e,t,r){r===void 0&&(r=!1);var o=S(t),n=S(t)&&$r(t),s=Y(t),p=re(e,n,r),i={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((V(t)!=="body"||Le(s))&&(i=Cr(t)),S(t)?(a=re(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):s&&(a.x=Se(s))),{x:p.left+i.scrollLeft-a.x,y:p.top+i.scrollTop-a.y,width:p.width,height:p.height}}function kr(e){var t=new Map,r=new Set,o=[];e.forEach(function(s){t.set(s.name,s)});function n(s){r.add(s.name);var p=[].concat(s.requires||[],s.requiresIfExists||[]);p.forEach(function(i){if(!r.has(i)){var a=t.get(i);a&&n(a)}}),o.push(s)}return e.forEach(function(s){r.has(s.name)||n(s)}),o}function Br(e){var t=kr(e);return Xt.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Wr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Sr(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var nt={placement:"bottom",modifiers:[],strategy:"absolute"};function at(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Lr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,s=n===void 0?nt:n;return function(i,a,c){c===void 0&&(c=s);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},nt,s),modifiersData:{},elements:{reference:i,popper:a},attributes:{},styles:{}},l=[],m=!1,d={state:f,setOptions:function(w){var P=typeof w=="function"?w(f.options):w;v(),f.options=Object.assign({},s,f.options,P),f.scrollParents={reference:K(i)?fe(i):i.contextElement?fe(i.contextElement):[],popper:fe(a)};var b=Br(Sr([].concat(o,f.options.modifiers)));return f.orderedModifiers=b.filter(function(u){return u.enabled}),x(),d.update()},forceUpdate:function(){if(!m){var w=f.elements,P=w.reference,b=w.popper;if(at(P,b)){f.rects={reference:Mr(P,de(b),f.options.strategy==="fixed"),popper:ke(b)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(E){return f.modifiersData[E.name]=Object.assign({},E.data)});for(var u=0;u<f.orderedModifiers.length;u++){if(f.reset===!0){f.reset=!1,u=-1;continue}var g=f.orderedModifiers[u],y=g.fn,O=g.options,A=O===void 0?{}:O,R=g.name;typeof y=="function"&&(f=y({state:f,options:A,name:R,instance:d})||f)}}}},update:Wr(function(){return new Promise(function(h){d.forceUpdate(),h(f)})}),destroy:function(){v(),m=!0}};if(!at(i,a))return d;d.setOptions(c).then(function(h){!m&&c.onFirstUpdate&&c.onFirstUpdate(h)});function x(){f.orderedModifiers.forEach(function(h){var w=h.name,P=h.options,b=P===void 0?{}:P,u=h.effect;if(typeof u=="function"){var g=u({state:f,name:w,instance:d,options:b}),y=function(){};l.push(g||y)}})}function v(){l.forEach(function(h){return h()}),l=[]}return d}}var Hr=[sr,Rr,ar,_t,Pr,yr,Dr,tr,wr],qr=Lr({defaultModifiers:Hr});function Vr(e){return Pt("MuiPopper",e)}Ot("MuiPopper",["root"]);const Nr=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Ur=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Fr(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Te(e){return typeof e=="function"?e():e}function Ir(e){return e.nodeType!==void 0}const Xr=e=>{const{classes:t}=e;return Et({root:["root"]},Vr,t)},Yr={},zr=W.forwardRef(function(t,r){var o;const{anchorEl:n,children:s,direction:p,disablePortal:i,modifiers:a,open:c,placement:f,popperOptions:l,popperRef:m,slotProps:d={},slots:x={},TransitionProps:v}=t,h=Ce(t,Nr),w=W.useRef(null),P=_e(w,r),b=W.useRef(null),u=_e(b,m),g=W.useRef(u);Ge(()=>{g.current=u},[u]),W.useImperativeHandle(m,()=>b.current,[]);const y=Fr(f,p),[O,A]=W.useState(y),[R,E]=W.useState(Te(n));W.useEffect(()=>{b.current&&b.current.forceUpdate()}),W.useEffect(()=>{n&&E(Te(n))},[n]),Ge(()=>{if(!R||!c)return;const U=I=>{A(I.placement)};let D=[{name:"preventOverflow",options:{altBoundary:i}},{name:"flip",options:{altBoundary:i}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:I})=>{U(I)}}];a!=null&&(D=D.concat(a)),l&&l.modifiers!=null&&(D=D.concat(l.modifiers));const C=qr(R,w.current,Z({placement:y},l,{modifiers:D}));return g.current(C),()=>{C.destroy(),g.current(null)}},[R,i,a,c,l,y]);const j={placement:O};v!==null&&(j.TransitionProps=v);const k=Xr(t),T=(o=x.root)!=null?o:"div",N=Ct({elementType:T,externalSlotProps:d.root,externalForwardedProps:h,additionalProps:{role:"tooltip",ref:P},ownerState:t,className:k.root});return we.jsx(T,Z({},N,{children:typeof s=="function"?s(j):s}))}),_r=W.forwardRef(function(t,r){const{anchorEl:o,children:n,container:s,direction:p="ltr",disablePortal:i=!1,keepMounted:a=!1,modifiers:c,open:f,placement:l="bottom",popperOptions:m=Yr,popperRef:d,style:x,transition:v=!1,slotProps:h={},slots:w={}}=t,P=Ce(t,Ur),[b,u]=W.useState(!0),g=()=>{u(!1)},y=()=>{u(!0)};if(!a&&!f&&(!v||b))return null;let O;if(s)O=s;else if(o){const E=Te(o);O=E&&Ir(E)?ze(E).body:ze(null).body}const A=!f&&a&&(!v||b)?"none":void 0,R=v?{in:f,onEnter:g,onExited:y}:void 0;return we.jsx(Tt,{disablePortal:i,container:O,children:we.jsx(zr,Z({anchorEl:o,direction:p,disablePortal:i,modifiers:c,ref:r,open:v?!b:f,placement:l,popperOptions:m,popperRef:d,slotProps:h,slots:w},P,{style:Z({position:"fixed",top:0,left:0,display:A},x),TransitionProps:R,children:n}))})}),Gr=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Jr=Rt(_r,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),oo=W.forwardRef(function(t,r){var o;const n=kt(),s=At({props:t,name:"MuiPopper"}),{anchorEl:p,component:i,components:a,componentsProps:c,container:f,disablePortal:l,keepMounted:m,modifiers:d,open:x,placement:v,popperOptions:h,popperRef:w,transition:P,slots:b,slotProps:u}=s,g=Ce(s,Gr),y=(o=b==null?void 0:b.root)!=null?o:a==null?void 0:a.Root,O=Z({anchorEl:p,container:f,disablePortal:l,keepMounted:m,modifiers:d,open:x,placement:v,popperOptions:h,popperRef:w,transition:P},g);return we.jsx(Jr,Z({as:i,direction:n==null?void 0:n.direction,slots:{root:y},slotProps:u??c},O,{ref:r}))});export{oo as P};