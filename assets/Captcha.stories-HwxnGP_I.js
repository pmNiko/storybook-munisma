import{j as v}from"./jsx-runtime-BjgbQsUx.js";import{g as W,r as g}from"./index-Cp_2WB0_.js";import{r as M}from"./index-Chjiymov.js";import{y as $}from"./DefaultPropsProvider-ELLn0s9H.js";import{B}from"./Box-CrlaK6wr.js";import{T as K}from"./Typography-DQ6QAh56.js";import{B as Y}from"./Button-iCE41_Zm.js";import"./index-D2MAbzvX.js";import"./useTheme-DFr77biG.js";import"./ButtonBase-B3vSuhhO.js";import"./assertThisInitialized-DIFuz7Pv.js";var J=M();const s=W(J);var Q=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function S(){return S=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},S.apply(this,arguments)}function X(n,r){if(n==null)return{};var a={},t=Object.keys(n),e,c;for(c=0;c<t.length;c++)e=t[c],!(r.indexOf(e)>=0)&&(a[e]=n[e]);return a}function R(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Z(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,O(n,r)}function O(n,r){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(n,r)}var w=function(n){Z(r,n);function r(){var t;return t=n.call(this)||this,t.handleExpired=t.handleExpired.bind(R(t)),t.handleErrored=t.handleErrored.bind(R(t)),t.handleChange=t.handleChange.bind(R(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(R(t)),t}var a=r.prototype;return a.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},a.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&this._widgetId!==void 0?e(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},a.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&this._widgetId!==void 0)return e(this._widgetId);this._executeRequested=!0},a.executeAsync=function(){var e=this;return new Promise(function(c,y){e.executionResolve=c,e.executionReject=y,e.execute()})},a.reset=function(){var e=this.getCaptchaFunction("reset");e&&this._widgetId!==void 0&&e(this._widgetId)},a.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},a.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},a.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&this._widgetId===void 0){var c=document.createElement("div");this._widgetId=e(c,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(c)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.handleRecaptchaRef=function(e){this.captcha=e},a.render=function(){var e=this.props;e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated;var c=X(e,Q);return g.createElement("div",S({},c,{ref:this.handleRecaptchaRef}))},r}(g.Component);w.displayName="ReCAPTCHA";w.propTypes={sitekey:s.string.isRequired,onChange:s.func,grecaptcha:s.object,theme:s.oneOf(["dark","light"]),type:s.oneOf(["image","audio"]),tabindex:s.number,onExpired:s.func,onErrored:s.func,size:s.oneOf(["compact","normal","invisible"]),stoken:s.string,hl:s.string,badge:s.oneOf(["bottomright","bottomleft","inline"]),isolated:s.bool};w.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function P(){return P=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},P.apply(this,arguments)}function ee(n,r){if(n==null)return{};var a={},t=Object.keys(n),e,c;for(c=0;c<t.length;c++)e=t[c],!(r.indexOf(e)>=0)&&(a[e]=n[e]);return a}function te(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r}var l={},ne=0;function re(n,r){return r=r||{},function(t){var e=t.displayName||t.name||"Component",c=function(b){te(x,b);function x(u,o){var i;return i=b.call(this,u,o)||this,i.state={},i.__scriptURL="",i}var f=x.prototype;return f.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+ne++),this.__scriptLoaderID},f.setupScriptURL=function(){return this.__scriptURL=typeof n=="function"?n():n,this.__scriptURL},f.asyncScriptLoaderHandleLoad=function(o){var i=this;this.setState(o,function(){return i.props.asyncScriptOnLoad&&i.props.asyncScriptOnLoad(i.state)})},f.asyncScriptLoaderTriggerOnScriptLoaded=function(){var o=l[this.__scriptURL];if(!o||!o.loaded)throw new Error("Script is not loaded.");for(var i in o.observers)o.observers[i](o);delete window[r.callbackName]},f.componentDidMount=function(){var o=this,i=this.setupScriptURL(),p=this.asyncScriptLoaderGetScriptLoaderID(),h=r,k=h.globalName,E=h.callbackName,V=h.scriptId;if(k&&typeof window[k]<"u"&&(l[i]={loaded:!0,observers:{}}),l[i]){var C=l[i];if(C&&(C.loaded||C.errored)){this.asyncScriptLoaderHandleLoad(C);return}C.observers[p]=function(d){return o.asyncScriptLoaderHandleLoad(d)};return}var N={};N[p]=function(d){return o.asyncScriptLoaderHandleLoad(d)},l[i]={loaded:!1,observers:N};var m=document.createElement("script");m.src=i,m.async=!0;for(var H in r.attributes)m.setAttribute(H,r.attributes[H]);V&&(m.id=V);var D=function(_){if(l[i]){var G=l[i],A=G.observers;for(var U in A)_(A[U])&&delete A[U]}};E&&typeof window<"u"&&(window[E]=function(){return o.asyncScriptLoaderTriggerOnScriptLoaded()}),m.onload=function(){var d=l[i];d&&(d.loaded=!0,D(function(_){return E?!1:(_(d),!0)}))},m.onerror=function(){var d=l[i];d&&(d.errored=!0,D(function(_){return _(d),!0}))},document.body.appendChild(m)},f.componentWillUnmount=function(){var o=this.__scriptURL;if(r.removeOnUnmount===!0)for(var i=document.getElementsByTagName("script"),p=0;p<i.length;p+=1)i[p].src.indexOf(o)>-1&&i[p].parentNode&&i[p].parentNode.removeChild(i[p]);var h=l[o];h&&(delete h.observers[this.asyncScriptLoaderGetScriptLoaderID()],r.removeOnUnmount===!0&&delete l[o])},f.render=function(){var o=r.globalName,i=this.props;i.asyncScriptOnLoad;var p=i.forwardedRef,h=ee(i,["asyncScriptOnLoad","forwardedRef"]);return o&&typeof window<"u"&&(h[o]=typeof window[o]<"u"?window[o]:void 0),h.ref=p,g.createElement(t,h)},x}(g.Component),y=g.forwardRef(function(b,x){return g.createElement(c,P({},b,{forwardedRef:x}))});return y.displayName="AsyncScriptLoader("+e+")",y.propTypes={asyncScriptOnLoad:s.func},$(y,t)}}var j="onloadcallback",ae="grecaptcha";function I(){return typeof window<"u"&&window.recaptchaOptions||{}}function ie(){var n=I(),r=n.useRecaptchaNet?"recaptcha.net":"www.google.com";return n.enterprise?"https://"+r+"/recaptcha/enterprise.js?onload="+j+"&render=explicit":"https://"+r+"/recaptcha/api.js?onload="+j+"&render=explicit"}const oe=re(ie,{callbackName:j,globalName:ae,attributes:I().nonce?{nonce:I().nonce}:{}})(w),ce="6Ldse3IiAAAAANMhjw6HTuzhh7VHv0teHf0I7on6",T=({setValidCaptcha:n})=>v.jsx(B,{children:v.jsx(oe,{style:{marginLeft:4,transform:"scale(0.84)",width:"100%"},sitekey:ce,onChange:()=>n(r=>!r)})});T.__docgenInfo={description:`Este componente utiliza \`react-google-recaptcha\` para integrar Google reCAPTCHA v2 en la aplicación.
Permite validar que la interacción proviene de un humano y no de un bot, actualizando un estado booleano
según el resultado del desafío de reCAPTCHA.

__Props__
- \`setValidCaptcha\` (requerido): Función que actualiza el estado de validación del CAPTCHA.
  Es un \`Dispatch\` de React que recibe un \`SetStateAction<boolean>\`.

__Funcionalidades__
- Renderiza un reCAPTCHA ajustado en tamaño y estilo.
- Cambia el estado de \`setValidCaptcha\` cuando se completa el desafío correctamente.
- Utiliza una clave de sitio (\`sitekey\`) proporcionada en las configuraciones de entorno.

---

__Uso__

\`\`\`tsx
import { Captcha } from './Captcha';
import { useState } from 'react';

const App = () => {
  const [isValidCaptcha, setIsValidCaptcha] = useState(false);

  return (
    <div>
      <Captcha setValidCaptcha={setIsValidCaptcha} />
      {isValidCaptcha ? <p>Captcha válido</p> : <p>Por favor, valide el Captcha</p>}
    </div>
  );
};
\`\`\`

__Notas__
- La clave del sitio (\`sitekey\`) debe estar configurada en el archivo de entorno a través de \`Environments.RecaptchaApiKey\`.
- La escala (\`transform: "scale(0.84")\`) y el ancho (\`width: "100%"\`) aseguran que el reCAPTCHA se adapte al diseño de la aplicación.
- Es compatible con flujos de formularios que requieren validación del CAPTCHA antes de proceder.`,methods:[],displayName:"Captcha",props:{setValidCaptcha:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""}}};const xe={title:"Inputs/Captcha",component:T,parameters:{layout:"centered"},argTypes:{setValidCaptcha:{control:!1,description:"Función para actualizar el estado de validación del Captcha."}}},L={render:()=>{const[n,r]=g.useState(!1),a=()=>{alert(n?"Formulario enviado con éxito.":"Por favor, valida el Captcha antes de continuar.")};return v.jsxs("div",{children:[v.jsx(T,{setValidCaptcha:r}),v.jsx(K,{textAlign:"center",sx:{marginTop:2},children:n?"Captcha válido. Puedes continuar.":"Por favor, valida el Captcha antes de enviar."}),v.jsx(B,{textAlign:"center",children:v.jsx(Y,{variant:"contained",color:"primary",onClick:a,sx:{marginTop:2},children:"Enviar"})})]})},args:{setValidCaptcha:()=>{}}};var F,z,q;L.parameters={...L.parameters,docs:{...(F=L.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [isValidCaptcha, setIsValidCaptcha] = useState(false); // Estado inicial no validado

    const handleSubmit = () => {
      if (isValidCaptcha) {
        alert("Formulario enviado con éxito.");
      } else {
        alert("Por favor, valida el Captcha antes de continuar.");
      }
    };
    return <div>
        <Captcha setValidCaptcha={setIsValidCaptcha} />
        <Typography textAlign="center" sx={{
        marginTop: 2
      }}>
          {isValidCaptcha ? "Captcha válido. Puedes continuar." : "Por favor, valida el Captcha antes de enviar."}
        </Typography>

        <Box textAlign="center">
          <Button variant="contained" color="primary" onClick={handleSubmit} sx={{
          marginTop: 2
        }}>
            Enviar
          </Button>
        </Box>
      </div>;
  },
  args: {
    setValidCaptcha: () => {} // Proporciona un valor predeterminado
  }
}`,...(q=(z=L.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};const Ce=["CaptchaExample"];export{L as CaptchaExample,Ce as __namedExportsOrder,xe as default};
