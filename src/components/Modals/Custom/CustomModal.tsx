import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  borderRadius: "15px",
  bgcolor: "background.paper",
  outline: "transparent",
  boxShadow: 24,
  p: 3,
};

interface Props {
  isOpen: boolean;
  close: () => void;
  children: JSX.Element;
  [key: string]: any;
}

/**
 *
 * Este componente es un modal personalizado que utiliza `Modal` y `Box` de Material UI como base.
 * Proporciona un diseño preconfigurado con soporte para personalización adicional.
 *
 * __Props__
 * - `isOpen` (requerido): Booleano que indica si el modal debe estar visible.
 * - `close` (requerido): Función que se ejecuta al intentar cerrar el modal.
 * - `children` (requerido): Contenido JSX que se renderiza dentro del modal.
 * - `[key: string]: any` (opcional): Propiedades adicionales que se pueden usar para personalizar el estilo del `Box` interno.
 *
 * __Funcionalidades__
 * - Renderiza un modal centrado con estilos predefinidos como tamaño, bordes redondeados y sombra.
 * - Soporta contenido personalizado mediante la prop `children`.
 * - Permite personalizar el diseño interno del modal mediante estilos adicionales proporcionados en `rest`.
 *
 * ---
 *
 * __Uso:__
 *
 * ```tsx
 * import { CustomModal } from './CustomModal';
 * import { Button, Typography } from '@mui/material';
 *
 * const App = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   const handleOpen = () => setIsOpen(true);
 *   const handleClose = () => setIsOpen(false);
 *
 *   return (
 *     <>
 *       <Button variant="contained" onClick={handleOpen}>
 *         Abrir Modal
 *       </Button>
 *       <CustomModal isOpen={isOpen} close={handleClose}>
 *         <Typography variant="h6" textAlign="center">
 *           Contenido del Modal
 *         </Typography>
 *       </CustomModal>
 *     </>
 *   );
 * };
 * ```
 *
 * __Notas__
 * - Los estilos base del modal incluyen un ancho de 350px, bordes redondeados y una sombra.
 * - Las propiedades adicionales pasadas al componente (`rest`) se combinan con los estilos predefinidos para mayor flexibilidad.
 */
export const CustomModal = ({ isOpen, close, children, ...rest }: Props) => (
  <Modal
    open={isOpen}
    onClose={close}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{ ...style, ...rest }}>{children}</Box>
  </Modal>
);
