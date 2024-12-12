import { Dispatch, SetStateAction } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Box } from "@mui/material";

interface Props {
  setValidCaptcha: Dispatch<SetStateAction<boolean>>;
}

const RECAPTCHA_API_KEY = "6Ldse3IiAAAAANMhjw6HTuzhh7VHv0teHf0I7on6";

/**
 *
 * Este componente utiliza `react-google-recaptcha` para integrar Google reCAPTCHA v2 en la aplicación.
 * Permite validar que la interacción proviene de un humano y no de un bot, actualizando un estado booleano
 * según el resultado del desafío de reCAPTCHA.
 *
 * __Props__
 * - `setValidCaptcha` (requerido): Función que actualiza el estado de validación del CAPTCHA.
 *   Es un `Dispatch` de React que recibe un `SetStateAction<boolean>`.
 *
 * __Funcionalidades__
 * - Renderiza un reCAPTCHA ajustado en tamaño y estilo.
 * - Cambia el estado de `setValidCaptcha` cuando se completa el desafío correctamente.
 * - Utiliza una clave de sitio (`sitekey`) proporcionada en las configuraciones de entorno.
 *
 * ---
 *
 * __Uso__
 *
 * ```tsx
 * import { Captcha } from './Captcha';
 * import { useState } from 'react';
 *
 * const App = () => {
 *   const [isValidCaptcha, setIsValidCaptcha] = useState(false);
 *
 *   return (
 *     <div>
 *       <Captcha setValidCaptcha={setIsValidCaptcha} />
 *       {isValidCaptcha ? <p>Captcha válido</p> : <p>Por favor, valide el Captcha</p>}
 *     </div>
 *   );
 * };
 * ```
 *
 * __Notas__
 * - La clave del sitio (`sitekey`) debe estar configurada en el archivo de entorno a través de `Environments.RecaptchaApiKey`.
 * - La escala (`transform: "scale(0.84")`) y el ancho (`width: "100%"`) aseguran que el reCAPTCHA se adapte al diseño de la aplicación.
 * - Es compatible con flujos de formularios que requieren validación del CAPTCHA antes de proceder.
 */
// export const Captcha = ({ setValidCaptcha }: Props) => {
//   return (
//     <Box>
//       <ReCAPTCHA
//         style={{
//           marginLeft: 4,
//           transform: "scale(0.84)",
//           width: "100%",
//         }}
//         sitekey={Environments.RecaptchaApiKey}
//         onChange={() => setValidCaptcha((prev) => !prev)}
//       />
//     </Box>
//   );
// };
export const Captcha = ({ setValidCaptcha }: Props) => {
  return (
    <Box>
      <ReCAPTCHA
        style={{
          marginLeft: 4,
          transform: "scale(0.84)",
          width: "100%",
        }}
        sitekey={RECAPTCHA_API_KEY}
        onChange={() => setValidCaptcha((prev) => !prev)}
      />
    </Box>
  );
};
