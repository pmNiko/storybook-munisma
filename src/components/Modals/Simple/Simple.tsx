import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "15em",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

interface Props {
  children: JSX.Element;
  open: boolean;
}

/**
 *
 * Este componente es un modal simple basado en `Modal` y `Box` de Material UI.
 * Proporciona un contenedor básico para mostrar contenido en un cuadro modal centrado en la pantalla.
 *
 * __Props__
 * - `children` (requerido): Elemento JSX que se renderiza dentro del modal.
 * - `open` (requerido): Booleano que controla la visibilidad del modal.
 *    Si es `true`, el modal se muestra.
 *
 * __Funcionalidades__
 * - Renderiza un modal centrado en la pantalla con un diseño básico predefinido.
 * - Permite personalizar el contenido del modal mediante la prop `children`.
 *
 * ---
 *
 * __Uso__
 *
 * ```tsx
 * import { useState } from 'react';
 * import { SimpleModal } from './SimpleModal';
 * import { Button, Typography } from '@mui/material';
 *
 * const App = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   const handleOpen = () => setIsOpen(true);
 *   const handleClose = () => setIsOpen(false);
 *
 *   return (
 *     <div>
 *       <Button variant="contained" onClick={handleOpen}>
 *         Abrir Modal
 *       </Button>
 *       <SimpleModal open={isOpen}>
 *         <Typography id="modal-modal-title" variant="h6" component="h2">
 *           Contenido del Modal
 *         </Typography>
 *         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
 *           Este es un modal simple.
 *         </Typography>
 *         <Button onClick={handleClose}>Cerrar</Button>
 *       </SimpleModal>
 *     </div>
 *   );
 * };
 * ```
 *
 * __Notas__
 * - El modal está diseñado para ser simple y minimalista, pero puede personalizarse con estilos adicionales.
 * - El diseño predefinido (`style`) incluye una posición centrada, sombras, y un relleno interno (`p: 2`).
 * - Utiliza los atributos de accesibilidad `aria-labelledby` y `aria-describedby` para describir el contenido del modal.
 */
export const SimpleModal = ({ children, open }: Props) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
