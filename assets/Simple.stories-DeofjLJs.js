import{j as n}from"./jsx-runtime-BjgbQsUx.js";import{r as u}from"./index-Cp_2WB0_.js";import{M as h}from"./Modal-Cmz8wYNv.js";import{B as y}from"./Box-CrlaK6wr.js";import{B as i}from"./Button-iCE41_Zm.js";import{T as l}from"./Typography-DQ6QAh56.js";import"./index-D2MAbzvX.js";import"./DefaultPropsProvider-ELLn0s9H.js";import"./Portal-D7fkpCCq.js";import"./ButtonBase-B3vSuhhO.js";import"./assertThisInitialized-DIFuz7Pv.js";import"./index-CrNuPw6X.js";import"./index-BIm0odtm.js";import"./useTheme-pdgmfwaB.js";import"./useTheme-DFr77biG.js";const b={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"15em",bgcolor:"background.paper",boxShadow:24,p:2},r=({children:e,open:a})=>n.jsx("div",{children:n.jsx(h,{open:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n.jsx(y,{sx:b,children:e})})});r.__docgenInfo={description:`Este componente es un modal simple basado en \`Modal\` y \`Box\` de Material UI.
Proporciona un contenedor básico para mostrar contenido en un cuadro modal centrado en la pantalla.

__Props__
- \`children\` (requerido): Elemento JSX que se renderiza dentro del modal.
- \`open\` (requerido): Booleano que controla la visibilidad del modal.
   Si es \`true\`, el modal se muestra.

__Funcionalidades__
- Renderiza un modal centrado en la pantalla con un diseño básico predefinido.
- Permite personalizar el contenido del modal mediante la prop \`children\`.

---

__Uso__

\`\`\`tsx
import { useState } from 'react';
import { SimpleModal } from './SimpleModal';
import { Button, Typography } from '@mui/material';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Abrir Modal
      </Button>
      <SimpleModal open={isOpen}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Contenido del Modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Este es un modal simple.
        </Typography>
        <Button onClick={handleClose}>Cerrar</Button>
      </SimpleModal>
    </div>
  );
};
\`\`\`

__Notas__
- El modal está diseñado para ser simple y minimalista, pero puede personalizarse con estilos adicionales.
- El diseño predefinido (\`style\`) incluye una posición centrada, sombras, y un relleno interno (\`p: 2\`).
- Utiliza los atributos de accesibilidad \`aria-labelledby\` y \`aria-describedby\` para describir el contenido del modal.`,methods:[],displayName:"SimpleModal",props:{children:{required:!0,tsType:{name:"JSX.Element"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const q={title:"Modals/Simple",component:r,parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"Controla si el modal está abierto o cerrado.",defaultValue:!1},children:{control:!1,description:"Contenido que se renderiza dentro del modal."}}},o={render:e=>{const[a,t]=u.useState(e.open),m=()=>{t(!0)},c=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(i,{variant:"contained",onClick:m,sx:{marginBottom:2},children:"Abrir Modal"}),n.jsx(r,{open:a,children:n.jsxs(n.Fragment,{children:[n.jsx(l,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Contenido del Modal"}),e.children,n.jsx(i,{onClick:c,sx:{marginTop:2},children:"Cerrar"})]})})]})},args:{open:!1,children:n.jsx(l,{id:"modal-modal-description",sx:{mt:2},children:"Este es un modal simple."})}};var d,s,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(args.open);
    const handleOpen = () => {
      setIsOpen(true);
    };
    const handleClose = () => {
      setIsOpen(false);
    };
    return <>
        {/* Botón para abrir el modal */}
        <Button variant="contained" onClick={handleOpen} sx={{
        marginBottom: 2
      }}>
          Abrir Modal
        </Button>

        {/* Modal interactivo */}
        <SimpleModal open={isOpen}>
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Contenido del Modal
            </Typography>
            {args.children}
            <Button onClick={handleClose} sx={{
            marginTop: 2
          }}>
              Cerrar
            </Button>
          </>
        </SimpleModal>
      </>;
  },
  args: {
    open: false,
    children: <Typography id="modal-modal-description" sx={{
      mt: 2
    }}>
        Este es un modal simple.
      </Typography>
  }
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const z=["BasicSimpleModal"];export{o as BasicSimpleModal,z as __namedExportsOrder,q as default};
