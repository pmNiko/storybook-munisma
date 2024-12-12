import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Button } from "@mui/material";

interface Props {
  showPassword: boolean;
  toggleShowPasswords: () => void;
}

/**
 *
 * Este componente permite alternar la visibilidad de un campo de contraseña,
 * mostrando un ícono que indica el estado actual (visible u oculto).
 *
 * __Props__
 * - `showPassword` (requerido): Booleano que indica si la contraseña es visible.
 * - `toggleShowPasswords` (requerido): Función que alterna el estado de visibilidad de la contraseña.
 *
 * __Funcionalidades__
 * - Muestra un ícono de visibilidad (`VisibilityOutlinedIcon`) cuando la contraseña es visible.
 * - Muestra un ícono de invisibilidad (`VisibilityOffOutlinedIcon`) cuando la contraseña está oculta.
 * - Ejecuta la función `toggleShowPasswords` al hacer clic en el botón, permitiendo alternar entre los estados.
 *
 * ---
 *
 *   __Ejemplo de uso__
 *
 * ```tsx
 * import { useState } from 'react';
 * import { ToggleVisibilityPassword } from './ToggleVisibilityPassword';
 * import { TextField } from '@mui/material';
 *
 * const App = () => {
 *   const [showPassword, setShowPassword] = useState(false);
 *
 *   const togglePasswordVisibility = () => {
 *     setShowPassword((prev) => !prev);
 *   };
 *
 *   return (
 *     <TextField
 *       type={showPassword ? "text" : "password"}
 *       label="Contraseña"
 *       InputProps={{
 *         endAdornment: (
 *           <ToggleVisibilityPassword
 *             showPassword={showPassword}
 *             toggleShowPasswords={togglePasswordVisibility}
 *           />
 *         ),
 *       }}
 *     />
 *   );
 * };
 * ```
 * ---
 *
 * __Notas__
 * - El componente está diseñado para ser utilizado como un adornador (endAdornment) en campos de texto.
 * - Usa íconos de Material UI para proporcionar una experiencia visual clara al usuario.
 * - El botón se renderiza con estilo `variant="text"` para integrarse de forma discreta en el diseño.
 */
export const ToggleVisibilityPassword = ({
  showPassword,
  toggleShowPasswords,
}: Props) => {
  return (
    <span style={{ marginLeft: -18, padding: 0 }}>
      <Button variant="text" onClick={toggleShowPasswords}>
        {showPassword ? (
          <VisibilityOutlinedIcon />
        ) : (
          <VisibilityOffOutlinedIcon />
        )}
      </Button>
    </span>
  );
};
