import{j as n}from"./jsx-runtime-Bsf-Y80U.js";import{c as b}from"./createSvgIcon-DRCzstWK.js";import{B as j}from"./Button-zTDG6LmW.js";import{v as x}from"./v4-CQkTLCs1.js";import"./index-CmnR7VnH.js";import"./DefaultPropsProvider--YwijEWK.js";import"./ButtonBase-B0_QeNL-.js";import"./assertThisInitialized-DIFuz7Pv.js";const C=b(n.jsx("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6m-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14M2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13m-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53"}),"VisibilityOffOutlined"),A=b(n.jsx("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"}),"VisibilityOutlined"),f=({showPassword:e,toggleShowPasswords:o})=>n.jsx("span",{style:{marginLeft:-18,padding:0},children:n.jsx(j,{variant:"text",onClick:o,children:e?n.jsx(A,{}):n.jsx(C,{})})});f.__docgenInfo={description:`Este componente permite alternar la visibilidad de un campo de contraseña,
mostrando un ícono que indica el estado actual (visible u oculto).

__Props__
- \`showPassword\` (requerido): Booleano que indica si la contraseña es visible.
- \`toggleShowPasswords\` (requerido): Función que alterna el estado de visibilidad de la contraseña.

__Funcionalidades__
- Muestra un ícono de visibilidad (\`VisibilityOutlinedIcon\`) cuando la contraseña es visible.
- Muestra un ícono de invisibilidad (\`VisibilityOffOutlinedIcon\`) cuando la contraseña está oculta.
- Ejecuta la función \`toggleShowPasswords\` al hacer clic en el botón, permitiendo alternar entre los estados.

---

  __Ejemplo de uso__

\`\`\`tsx
import { useState } from 'react';
import { ToggleVisibilityPassword } from './ToggleVisibilityPassword';
import { TextField } from '@mui/material';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      label="Contraseña"
      InputProps={{
        endAdornment: (
          <ToggleVisibilityPassword
            showPassword={showPassword}
            toggleShowPasswords={togglePasswordVisibility}
          />
        ),
      }}
    />
  );
};
\`\`\`
---

__Notas__
- El componente está diseñado para ser utilizado como un adornador (endAdornment) en campos de texto.
- Usa íconos de Material UI para proporcionar una experiencia visual clara al usuario.
- El botón se renderiza con estilo \`variant="text"\` para integrarse de forma discreta en el diseño.`,methods:[],displayName:"ToggleVisibilityPassword",props:{showPassword:{required:!0,tsType:{name:"boolean"},description:""},toggleShowPasswords:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{addons:D}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:B}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:m}=__STORYBOOK_MODULE_GLOBAL__;var M="storybook/actions",q=`${M}/action-event`,F={depth:10,clearOnStoryChange:!0,limit:50},S=(e,o)=>{let t=Object.getPrototypeOf(e);return!t||o(t)?t:S(t,o)},L=e=>!!(typeof e=="object"&&e&&S(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),k=e=>{if(L(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),s=t==null?void 0:t.value;return typeof s=="object"&&(s==null?void 0:s.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(s.constructor.prototype)}),o}return e},z=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?x():Date.now().toString(36)+Math.random().toString(36).substring(2);function E(e,o={}){let t={...F,...o},s=function(...c){var l,p;if(o.implicit){let u=(l="__STORYBOOK_PREVIEW__"in m?m.__STORYBOOK_PREVIEW__:void 0)==null?void 0:l.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(u){let i=!((p=window==null?void 0:window.FEATURES)!=null&&p.disallowImplicitActionsInRenderV8),g=new B({phase:u.phase,name:e,deprecated:i});if(i)console.warn(g);else throw g}}let v=D.getChannel(),T=z(),V=5,d=c.map(k),R=c.length>1?d:d[0],I={id:T,count:0,data:{name:e,args:R},options:{...t,maxDepth:V+(t.depth||3),allowFunction:t.allowFunction||!1}};v.emit(q,I)};return s.isAction=!0,s.implicit=o.implicit,s}const J={title:"Components/ToggleVisibilityPassword",component:f,parameters:{layout:"centered"},argTypes:{showPassword:{control:"boolean",description:"Indica si la contraseña es visible o no."},toggleShowPasswords:{action:"Toggle clicked",description:"Función que alterna el estado de visibilidad de la contraseña."}}},r={args:{showPassword:!0,toggleShowPasswords:E("Toggle clicked")}},a={args:{showPassword:!1,toggleShowPasswords:E("Toggle clicked")}};var w,_,P;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showPassword: true,
    toggleShowPasswords: action("Toggle clicked")
  }
}`,...(P=(_=r.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var h,y,O;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    showPassword: false,
    toggleShowPasswords: action("Toggle clicked")
  }
}`,...(O=(y=a.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const Q=["PasswordVisible","PasswordHidden"];export{a as PasswordHidden,r as PasswordVisible,Q as __namedExportsOrder,J as default};
