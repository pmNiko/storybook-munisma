import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Box, Button, Typography } from "@mui/material";
import { CustomModal } from "../Custom/CustomModal";

interface NotifyState {
  exists: boolean;
  info: boolean;
  error: boolean;
  message: string;
}

interface InfoModalProps {
  notify: NotifyState;
  children?: JSX.Element;
  onClick?: () => void;
}

const msgError =
  "Servicio momentáneamente no disponible, por favor intente más tarde.";

/**
 *
 * Este componente es un modal diseñado para informar al usuario sobre el estado de una operación,
 * ya sea mostrando un mensaje de error o una información relevante. Utiliza `CustomModal` como base
 * para el diseño y la estructura del modal.
 *
 * __Props__
 * - `notify` (requerido): Objeto de tipo `NotifyState` que contiene el estado de notificación. Incluye:
 *   - `exists`: Booleano que indica si el modal debe estar visible.
 *   - `info`: Booleano que indica si se trata de un mensaje informativo.
 *   - `error`: Booleano que indica si se trata de un mensaje de error.
 *   - `message`: Mensaje que se muestra en el modal.
 * - `children` (opcional): Elemento JSX que se renderiza en lugar del mensaje predeterminado.
 * - `onClick` (opcional): Función que se ejecuta al hacer clic en el botón de "Aceptar". Por defecto, es una función vacía.
 *
 * __Funcionalidades__
 * - Abre el modal automáticamente cuando `notify.exists` es `true`.
 * - Muestra un ícono en la cabecera que depende del tipo de notificación (`info` o `error`).
 * - Permite personalizar el contenido mediante la prop `children`.
 * - Cierra el modal y ejecuta la función `onClick` al presionar el botón "Aceptar".
 *
 * ---
 *
 * __Uso__
 *
 * ```tsx
 * import { InfoModalResponse } from './InfoModalResponse';
 *
 * const notify = {
 *   exists: true,
 *   info: false,
 *   error: true,
 *   message: "Ocurrió un error al procesar su solicitud.",
 * };
 *
 * const handleModalClose = () => {
 *   console.log("Modal cerrado");
 * };
 *
 * const App = () => (
 *   <InfoModalResponse notify={notify} onClick={handleModalClose}>
 *     <Typography>Mensaje personalizado opcional</Typography>
 *   </InfoModalResponse>
 * );
 * ```
 *
 * __Notas__
 * - Si no se pasa un `children`, se muestra el mensaje predeterminado en `notify.message`.
 * - En caso de error y ausencia de un mensaje en `notify.message`, se muestra un mensaje genérico:
 *   `"Servicio momentáneamente no disponible, por favor intente más tarde."`.
 * - Este componente está pensado para ser reutilizable en diferentes contextos donde se requiera informar al usuario.
 */
export const InfoModalResponse = ({
  notify,
  children,
  onClick = () => {},
}: InfoModalProps) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(false);
    onClick();
  };

  useEffect(() => {
    notify.exists && setOpenModal(true);
  }, [notify.exists]);

  return (
    <CustomModal isOpen={openModal} close={() => setOpenModal(false)}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        justifyContent="space-evenly"
        gap={3}
      >
        <Box>
          {notify.info ? (
            <InfoIcon color="primary" sx={{ fontSize: 30 }} />
          ) : (
            <ReportProblemIcon color="error" sx={{ fontSize: 30 }} />
          )}
        </Box>

        <Box>
          {notify.error ? (
            <Typography>{notify.message || msgError}</Typography>
          ) : children ? (
            children
          ) : (
            <Typography>{notify.message}</Typography>
          )}
        </Box>

        <Button
          variant="contained"
          sx={{ height: 25, fontSize: 11 }}
          onClick={handleClick}
        >
          Aceptar
        </Button>
      </Box>
    </CustomModal>
  );
};
