import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import HelpIcon from "@mui/icons-material/Help";
import parse from "html-react-parser";

/**
 *
 * Este componente muestra un ícono de ayuda que, al ser clicado, despliega un texto informativo
 * dentro de un `Popover`. Es útil para proporcionar indicaciones o detalles adicionales al usuario.
 *
 * __Props__
 * - `help` (requerido): Una cadena de texto que contiene el mensaje de ayuda. Este texto puede incluir HTML,
 *   que será interpretado y renderizado con `html-react-parser`.
 *
 * __Funcionalidades__
 * - Muestra un ícono de ayuda (`HelpIcon`) que el usuario puede clicar para desplegar un popover.
 * - Renderiza el contenido del texto de ayuda dentro del popover, permitiendo estilos personalizados a través de HTML.
 * - Usa `material-ui-popup-state` para gestionar el estado del popover de manera sencilla.
 *
 * ---
 *
 *   __Ejemplo de uso__
 *
 * ```tsx
 * import { CustomPopUp } from './CustomPopUp';
 *
 * const App = () => (
 *   <div>
 *     <CustomPopUp help="<b>Este es un texto de ayuda</b><br/>Proporcione la información necesaria." />
 *   </div>
 * );
 * ```
 * ---
 *
 * __Notas__
 * - El texto de ayuda (`help`) puede incluir etiquetas HTML, pero asegúrate de que el contenido esté validado para evitar riesgos de seguridad.
 * - El componente utiliza estilos básicos para integrarse fácilmente en cualquier diseño, pero puede personalizarse con estilos adicionales.
 * - La posición del popover está configurada para anclarse debajo del ícono de ayuda y se centra horizontalmente.
 */
export const CustomPopUp = ({ help }: { help: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState: any) => (
          <div>
            <Button variant="text" {...bindTrigger(popupState)} size="small">
              <HelpIcon fontSize="medium" style={{ color: "#2ea3f2" }} />
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography sx={{ p: 2 }}>{parse(help)}</Typography>
            </Popover>
          </div>
        )}
      </PopupState>
    </div>
  );
};
