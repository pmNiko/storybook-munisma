import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

interface Props {
  icon?: boolean;
  success?: boolean;
  message?: string;
  children?: JSX.Element;
  accept?: string;
  actionAccept?: () => void;
  close?: string;
  closeAction: () => void;
  toggleModal: boolean;
  displayHidden?: boolean;
}

/**
 * Este componente muestra un diálogo personalizado basado en el componente `Dialog` de Material UI.
 * Está diseñado para proporcionar retroalimentación al usuario con íconos visuales opcionales y acciones definidas.
 *
 * __Props__
 * - `icon` (opcional): Booleano que indica si se debe mostrar un ícono en el diálogo. Valor por defecto: `false`.
 * - `success` (opcional): Booleano que indica si el diálogo es para un caso de éxito (`true`) o error (`false`).
 *   Afecta el ícono mostrado y su color. Valor por defecto: `true`.
 * - `message` (opcional): Mensaje principal que se muestra en el contenido del diálogo.
 * - `children` (opcional): Elementos JSX adicionales que se renderizan en el contenido del diálogo.
 * - `accept` (opcional): Texto para el botón de acción primaria. Si no se proporciona, no se muestra el botón.
 * - `actionAccept` (opcional): Función que se ejecuta al hacer clic en el botón de aceptar.
 * - `close` (opcional): Texto para el botón de cerrar. Valor por defecto: `"Cerrar"`.
 * - `closeAction` (requerido): Función que se ejecuta al hacer clic en el botón de cerrar o al cerrar el diálogo.
 * - `toggleModal` (requerido): Booleano que controla la visibilidad del diálogo.
 * - `displayHidden` (opcional): Booleano que, si es `true`, oculta el componente completamente. Valor por defecto: `false`.
 *
 * __Funcionalidades__
 * - Muestra un ícono de éxito (`CheckCircleOutlineIcon`) o error (`WarningAmberIcon`) según la prop `success` e `icon`.
 * - Renderiza un mensaje principal (`message`) y contenido adicional (`children`) en el cuerpo del diálogo.
 * - Proporciona botones configurables para aceptar y cerrar con acciones personalizadas.
 *
 * __Uso__
 *
 * ```tsx
 * import { Modal } from './Modal';
 * import { useState } from 'react';
 *
 * const App = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   const handleAccept = () => {
 *     console.log("Acción aceptada");
 *     setIsOpen(false);
 *   };
 *
 *   const handleClose = () => {
 *     console.log("Modal cerrado");
 *     setIsOpen(false);
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
 *       <Modal
 *         icon={true}
 *         success={true}
 *         message="Operación exitosa"
 *         accept="Aceptar"
 *         actionAccept={handleAccept}
 *         close="Cerrar"
 *         closeAction={handleClose}
 *         toggleModal={isOpen}
 *       >
 *         <p>Contenido adicional del modal.</p>
 *       </Modal>
 *     </div>
 *   );
 * };
 * ```
 *
 * __Notas__
 * - Si `displayHidden` es `true`, el componente no renderiza nada.
 * - El botón de aceptar (`accept`) y su acción (`actionAccept`) son opcionales, permitiendo un uso flexible.
 * - Utiliza `aria-labelledby` para mejorar la accesibilidad del diálogo.
 */
export const Modal = ({
  icon = false,
  success = true,
  message,
  children,
  accept,
  close = "Cerrar",
  closeAction,
  actionAccept,
  toggleModal,
  displayHidden = false,
}: Props) => {
  if (displayHidden) return null;

  return (
    <Dialog
      open={toggleModal}
      onClose={closeAction}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          pl: 0.5,
        }}
      >
        {success && icon && (
          <CheckCircleOutlineIcon color="success" fontSize="large" />
        )}

        {!success && icon && (
          <WarningAmberIcon color="error" fontSize="large" />
        )}
        <DialogContentText ml={2} pt={1} sx={{ fontWeight: "bold" }}>
          {message} {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {!!accept && (
          <Button
            variant="contained"
            color="success"
            size="medium"
            onClick={actionAccept}
          >
            {accept}
          </Button>
        )}
        <Button
          variant="contained"
          size="medium"
          onClick={closeAction}
          autoFocus
        >
          {close}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
