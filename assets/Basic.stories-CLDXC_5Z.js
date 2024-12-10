import{j as e}from"./jsx-runtime-Bsf-Y80U.js";import{r as g}from"./index-CmnR7VnH.js";import{c as f}from"./createSvgIcon-DRCzstWK.js";import{D as M,a as y,b as A}from"./DialogContent-rxi64OGn.js";import{b as v,g as j,s as q,w as T,u as _,_ as O,a as x,f as I,h as z}from"./DefaultPropsProvider--YwijEWK.js";import{T as D}from"./Typography-mNUyEguK.js";import{B as i}from"./Button-zTDG6LmW.js";import{f as B}from"./index-YkVIqR4J.js";import"./useTheme-B6Pr7AB7.js";import"./useTheme-CtltR20v.js";import"./Modal-CkA7751a.js";import"./Portal-Ce1Mv2qa.js";import"./ButtonBase-B0_QeNL-.js";import"./assertThisInitialized-DIFuz7Pv.js";import"./index-BOjEwyeZ.js";import"./index-BS_t85qj.js";import"./Paper-Cd0-ua4e.js";import"./useId-BxLXiK6Y.js";function S(o){return j("MuiDialogContentText",o)}v("MuiDialogContentText",["root"]);const V=["children","className"],E=o=>{const{classes:n}=o,a=z({root:["root"]},S,n);return x({},n,a)},w=q(D,{shouldForwardProp:o=>T(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,n)=>n.root})({}),F=g.forwardRef(function(n,t){const a=_({props:n,name:"MuiDialogContentText"}),{className:s}=a,r=O(a,V),l=E(r);return e.jsx(w,x({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:r,className:I(l.root,s)},a,{classes:l}))}),R=f(e.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline"),k=f([e.jsx("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),e.jsx("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber"),d=({icon:o=!1,success:n=!0,message:t,children:a,accept:s,close:r="Cerrar",closeAction:l,actionAccept:h,toggleModal:b,displayHidden:C=!1})=>C?null:e.jsxs(M,{open:b,onClose:l,"aria-labelledby":"responsive-dialog-title",children:[e.jsxs(y,{sx:{display:"flex",flexDirection:"row",overflow:"hidden",pl:.5},children:[n&&o&&e.jsx(R,{color:"success",fontSize:"large"}),!n&&o&&e.jsx(k,{color:"error",fontSize:"large"}),e.jsxs(F,{ml:2,pt:1,sx:{fontWeight:"bold"},children:[t," ",a]})]}),e.jsxs(A,{children:[!!s&&e.jsx(i,{variant:"contained",color:"success",size:"medium",onClick:h,children:s}),e.jsx(i,{variant:"contained",size:"medium",onClick:l,autoFocus:!0,children:r})]})]});d.__docgenInfo={description:`Este componente muestra un diálogo personalizado basado en el componente \`Dialog\` de Material UI.
Está diseñado para proporcionar retroalimentación al usuario con íconos visuales opcionales y acciones definidas.

__Props__
- \`icon\` (opcional): Booleano que indica si se debe mostrar un ícono en el diálogo. Valor por defecto: \`false\`.
- \`success\` (opcional): Booleano que indica si el diálogo es para un caso de éxito (\`true\`) o error (\`false\`).
  Afecta el ícono mostrado y su color. Valor por defecto: \`true\`.
- \`message\` (opcional): Mensaje principal que se muestra en el contenido del diálogo.
- \`children\` (opcional): Elementos JSX adicionales que se renderizan en el contenido del diálogo.
- \`accept\` (opcional): Texto para el botón de acción primaria. Si no se proporciona, no se muestra el botón.
- \`actionAccept\` (opcional): Función que se ejecuta al hacer clic en el botón de aceptar.
- \`close\` (opcional): Texto para el botón de cerrar. Valor por defecto: \`"Cerrar"\`.
- \`closeAction\` (requerido): Función que se ejecuta al hacer clic en el botón de cerrar o al cerrar el diálogo.
- \`toggleModal\` (requerido): Booleano que controla la visibilidad del diálogo.
- \`displayHidden\` (opcional): Booleano que, si es \`true\`, oculta el componente completamente. Valor por defecto: \`false\`.

__Funcionalidades__
- Muestra un ícono de éxito (\`CheckCircleOutlineIcon\`) o error (\`WarningAmberIcon\`) según la prop \`success\` e \`icon\`.
- Renderiza un mensaje principal (\`message\`) y contenido adicional (\`children\`) en el cuerpo del diálogo.
- Proporciona botones configurables para aceptar y cerrar con acciones personalizadas.

__Uso__

\`\`\`tsx
import { Modal } from './Modal';
import { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccept = () => {
    console.log("Acción aceptada");
    setIsOpen(false);
  };

  const handleClose = () => {
    console.log("Modal cerrado");
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      <Modal
        icon={true}
        success={true}
        message="Operación exitosa"
        accept="Aceptar"
        actionAccept={handleAccept}
        close="Cerrar"
        closeAction={handleClose}
        toggleModal={isOpen}
      >
        <p>Contenido adicional del modal.</p>
      </Modal>
    </div>
  );
};
\`\`\`

__Notas__
- Si \`displayHidden\` es \`true\`, el componente no renderiza nada.
- El botón de aceptar (\`accept\`) y su acción (\`actionAccept\`) son opcionales, permitiendo un uso flexible.
- Utiliza \`aria-labelledby\` para mejorar la accesibilidad del diálogo.`,methods:[],displayName:"Modal",props:{icon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},success:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},message:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"JSX.Element"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},actionAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},close:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Cerrar"',computed:!1}},closeAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},toggleModal:{required:!0,tsType:{name:"boolean"},description:""},displayHidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const te={title:"Modals/Basic",component:d,parameters:{layout:"centered"},argTypes:{icon:{control:"boolean",description:"Indica si se debe mostrar un ícono en el diálogo.",defaultValue:!1},success:{control:"boolean",description:"Define si el modal es de éxito o error.",defaultValue:!0},message:{control:"text",description:"El mensaje principal que se muestra en el contenido del diálogo."},children:{control:!1,description:"Contenido adicional que se renderiza en el cuerpo del modal."},accept:{control:"text",description:"Texto del botón de acción primaria."},actionAccept:{control:!1,description:"Función que se ejecuta al hacer clic en el botón de aceptar."},close:{control:"text",description:"Texto del botón de cerrar.",defaultValue:"Cerrar"},closeAction:{action:"Modal cerrado",description:"Función que se ejecuta al hacer clic en el botón de cerrar."},toggleModal:{control:"boolean",description:"Booleano que controla si el modal está abierto o cerrado.",defaultValue:!0},displayHidden:{control:"boolean",description:"Oculta completamente el componente si es true.",defaultValue:!1}}},c={render:o=>{const[n,t]=g.useState(o.toggleModal),a=()=>{t(!1)},s=()=>{alert("Acción aceptada."),t(!1)},r=()=>{t(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",onClick:r,sx:{marginBottom:2},children:"Abrir Modal"}),e.jsx(d,{...o,toggleModal:n,closeAction:a,actionAccept:o.accept?s:void 0})]})},args:{icon:!0,success:!0,message:"Este es un modal interactivo.",accept:"Aceptar",close:"Cerrar",toggleModal:!1,closeAction:B()}};var p,u,m;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(args.toggleModal);
    const handleClose = () => {
      setIsOpen(false);
    };
    const handleAccept = () => {
      alert("Acción aceptada.");
      setIsOpen(false); // Cerrar el modal al aceptar
    };
    const handleReopen = () => {
      setIsOpen(true);
    };
    return <>
        {/* Botón para reabrir el modal */}
        <Button variant="contained" onClick={handleReopen} sx={{
        marginBottom: 2
      }}>
          Abrir Modal
        </Button>

        {/* Modal interactivo */}
        <Modal {...args} toggleModal={isOpen} closeAction={handleClose} actionAccept={args.accept ? handleAccept : undefined} />
      </>;
  },
  args: {
    icon: true,
    success: true,
    message: "Este es un modal interactivo.",
    accept: "Aceptar",
    close: "Cerrar",
    toggleModal: false,
    closeAction: fn()
  }
}`,...(m=(u=c.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const se=["BasicModal"];export{c as BasicModal,se as __namedExportsOrder,te as default};
