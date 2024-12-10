import{j as e}from"./jsx-runtime-Bsf-Y80U.js";import{r as d}from"./index-CmnR7VnH.js";import{c as h}from"./createSvgIcon-DRCzstWK.js";import{C as y}from"./CustomModal-1TI9-Oco.js";import{B as l}from"./Box-CFxmXA4T.js";import{T as f}from"./Typography-mNUyEguK.js";import{B as c}from"./Button-zTDG6LmW.js";import"./DefaultPropsProvider--YwijEWK.js";import"./Modal-CkA7751a.js";import"./Portal-Ce1Mv2qa.js";import"./ButtonBase-B0_QeNL-.js";import"./assertThisInitialized-DIFuz7Pv.js";import"./index-BOjEwyeZ.js";import"./index-BS_t85qj.js";import"./useTheme-B6Pr7AB7.js";import"./useTheme-CtltR20v.js";const g=h(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info"),j=h(e.jsx("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"ReportProblem"),M="Servicio momentáneamente no disponible, por favor intente más tarde.",m=({notify:n,children:o,onClick:r=()=>{}})=>{const[t,s]=d.useState(!1),i=()=>{s(!1),r()};return d.useEffect(()=>{n.exists&&s(!0)},[n.exists]),e.jsx(y,{isOpen:t,close:()=>s(!1),children:e.jsxs(l,{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",justifyContent:"space-evenly",gap:3,children:[e.jsx(l,{children:n.info?e.jsx(g,{color:"primary",sx:{fontSize:30}}):e.jsx(j,{color:"error",sx:{fontSize:30}})}),e.jsx(l,{children:n.error?e.jsx(f,{children:n.message||M}):o||e.jsx(f,{children:n.message})}),e.jsx(c,{variant:"contained",sx:{height:25,fontSize:11},onClick:i,children:"Aceptar"})]})})};m.__docgenInfo={description:`Este componente es un modal diseñado para informar al usuario sobre el estado de una operación,
ya sea mostrando un mensaje de error o una información relevante. Utiliza \`CustomModal\` como base
para el diseño y la estructura del modal.

__Props__
- \`notify\` (requerido): Objeto de tipo \`NotifyState\` que contiene el estado de notificación. Incluye:
  - \`exists\`: Booleano que indica si el modal debe estar visible.
  - \`info\`: Booleano que indica si se trata de un mensaje informativo.
  - \`error\`: Booleano que indica si se trata de un mensaje de error.
  - \`message\`: Mensaje que se muestra en el modal.
- \`children\` (opcional): Elemento JSX que se renderiza en lugar del mensaje predeterminado.
- \`onClick\` (opcional): Función que se ejecuta al hacer clic en el botón de "Aceptar". Por defecto, es una función vacía.

__Funcionalidades__
- Abre el modal automáticamente cuando \`notify.exists\` es \`true\`.
- Muestra un ícono en la cabecera que depende del tipo de notificación (\`info\` o \`error\`).
- Permite personalizar el contenido mediante la prop \`children\`.
- Cierra el modal y ejecuta la función \`onClick\` al presionar el botón "Aceptar".

---

__Uso__

\`\`\`tsx
import { InfoModalResponse } from './InfoModalResponse';

const notify = {
  exists: true,
  info: false,
  error: true,
  message: "Ocurrió un error al procesar su solicitud.",
};

const handleModalClose = () => {
  console.log("Modal cerrado");
};

const App = () => (
  <InfoModalResponse notify={notify} onClick={handleModalClose}>
    <Typography>Mensaje personalizado opcional</Typography>
  </InfoModalResponse>
);
\`\`\`

__Notas__
- Si no se pasa un \`children\`, se muestra el mensaje predeterminado en \`notify.message\`.
- En caso de error y ausencia de un mensaje en \`notify.message\`, se muestra un mensaje genérico:
  \`"Servicio momentáneamente no disponible, por favor intente más tarde."\`.
- Este componente está pensado para ser reutilizable en diferentes contextos donde se requiera informar al usuario.`,methods:[],displayName:"InfoModalResponse",props:{notify:{required:!0,tsType:{name:"NotifyState"},description:""},children:{required:!1,tsType:{name:"JSX.Element"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const P={title:"Modals/InfoModalResponse",component:m,parameters:{layout:"centered"},argTypes:{notify:{control:!1,description:"\n        Objeto de tipo `NotifyState` que controla el estado del modal.\n        - `exists`: Indica si el modal debe mostrarse.\n        - `info`: Indica si se trata de un mensaje informativo.\n        - `error`: Indica si se trata de un mensaje de error.\n        - `message`: Mensaje que se muestra en el modal.\n      "},children:{control:!1,description:"Contenido personalizado que se renderiza en lugar del mensaje predeterminado."},onClick:{control:!1,description:"Función que se ejecuta al hacer clic en el botón 'Aceptar'."}}},a={render:n=>{const[o,r]=d.useState(n.notify),t=()=>{r({...o,exists:!0,info:!0,error:!1,message:"Esto es un mensaje informativo."})},s=()=>{r({...o,exists:!0,info:!1,error:!0,message:"Esto es un mensaje de error."})},i=()=>{r({...o,exists:!1})};return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"contained",onClick:t,sx:{marginBottom:2},children:"Abrir Modal Informativo"}),e.jsx(c,{variant:"contained",color:"error",onClick:s,sx:{marginBottom:2,marginLeft:2},children:"Abrir Modal de Error"}),e.jsx(m,{notify:o,onClick:i})]})},args:{notify:{exists:!1,info:!1,error:!1,message:""}}};var p,u,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [notify, setNotify] = useState(args.notify);
    const handleOpenInfo = () => {
      setNotify({
        ...notify,
        exists: true,
        info: true,
        error: false,
        message: "Esto es un mensaje informativo."
      });
    };
    const handleOpenError = () => {
      setNotify({
        ...notify,
        exists: true,
        info: false,
        error: true,
        message: "Esto es un mensaje de error."
      });
    };
    const handleClose = () => {
      setNotify({
        ...notify,
        exists: false
      });
    };
    return <>
        <Button variant="contained" onClick={handleOpenInfo} sx={{
        marginBottom: 2
      }}>
          Abrir Modal Informativo
        </Button>
        <Button variant="contained" color="error" onClick={handleOpenError} sx={{
        marginBottom: 2,
        marginLeft: 2
      }}>
          Abrir Modal de Error
        </Button>

        <InfoModalResponse notify={notify} onClick={handleClose} />
      </>;
  },
  args: {
    notify: {
      exists: false,
      info: false,
      error: false,
      message: ""
    }
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const F=["InfoModal"];export{a as InfoModal,F as __namedExportsOrder,P as default};
