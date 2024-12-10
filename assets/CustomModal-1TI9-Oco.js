import{j as e}from"./jsx-runtime-Bsf-Y80U.js";import{M as r}from"./Modal-CkA7751a.js";import{B as i}from"./Box-CFxmXA4T.js";const t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:350,borderRadius:"15px",bgcolor:"background.paper",outline:"transparent",boxShadow:24,p:3},d=({isOpen:o,close:n,children:a,...s})=>e.jsx(r,{open:o,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsx(i,{sx:{...t,...s},children:a})});d.__docgenInfo={description:`Este componente es un modal personalizado que utiliza \`Modal\` y \`Box\` de Material UI como base.
Proporciona un diseño preconfigurado con soporte para personalización adicional.

__Props__
- \`isOpen\` (requerido): Booleano que indica si el modal debe estar visible.
- \`close\` (requerido): Función que se ejecuta al intentar cerrar el modal.
- \`children\` (requerido): Contenido JSX que se renderiza dentro del modal.
- \`[key: string]: any\` (opcional): Propiedades adicionales que se pueden usar para personalizar el estilo del \`Box\` interno.

__Funcionalidades__
- Renderiza un modal centrado con estilos predefinidos como tamaño, bordes redondeados y sombra.
- Soporta contenido personalizado mediante la prop \`children\`.
- Permite personalizar el diseño interno del modal mediante estilos adicionales proporcionados en \`rest\`.

---

__Uso:__

\`\`\`tsx
import { CustomModal } from './CustomModal';
import { Button, Typography } from '@mui/material';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Abrir Modal
      </Button>
      <CustomModal isOpen={isOpen} close={handleClose}>
        <Typography variant="h6" textAlign="center">
          Contenido del Modal
        </Typography>
      </CustomModal>
    </>
  );
};
\`\`\`

__Notas__
- Los estilos base del modal incluyen un ancho de 350px, bordes redondeados y una sombra.
- Las propiedades adicionales pasadas al componente (\`rest\`) se combinan con los estilos predefinidos para mayor flexibilidad.`,methods:[],displayName:"CustomModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"JSX.Element"},description:""}}};export{d as C};
