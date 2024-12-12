import { forwardRef } from "react";
import { InputMask, type InputMaskProps } from "@react-input/mask";

/**
 *
 * Este componente es un campo de entrada que utiliza una máscara predefinida para capturar
 * correctamente valores de CUIT o CUIL, garantizando el formato esperado.
 *
 * __Props__
 * - Todas las propiedades aceptadas por `InputMask` (de `@react-input/mask`) son compatibles.
 *
 * __Funcionalidades__
 * - Utiliza el paquete `@react-input/mask` para aplicar una máscara al campo de entrada.
 * - La máscara predefinida es: `__-________-_`:
 *   - Los guiones (`-`) son fijos.
 *   - Los guiones bajos (`_`) representan dígitos (`0-9`).
 * - Permite un ingreso controlado, asegurando que sólo números sean válidos en las posiciones correspondientes.
 * - Soporta la referencia (`ref`) a través de `forwardRef`, permitiendo integrarlo con formularios y otras herramientas.
 *
 * ---
 *
 * __Uso__
 *
 * ```tsx
 * import { CuitCuilMask } from './CuitCuilMask';
 * import { useState } from 'react';
 *
 * const App = () => {
 *   const [cuitcuil, setCuitCuil] = useState('');
 *
 *   return (
 *     <CuitCuilMask
 *       value={cuitcuil}
 *       onChange={(e) => setCuitCuil(e.target.value)}
 *       placeholder="Ingrese su CUIT/CUIL"
 *     />
 *   );
 * };
 * ```
 *
 * __Notas__
 * - La máscara asegura que el CUIT/CUIL ingresado siempre tenga el formato correcto.
 * - Es ideal para formularios en los que se necesita validar este tipo de datos.
 * - Al ser un componente basado en `forwardRef`, puede integrarse fácilmente con bibliotecas como `Formik` o `React Hook Form`.
 */
export const CuitCuilMask = forwardRef<HTMLInputElement, InputMaskProps>(
  (props, forwardedRef) => {
    return (
      <InputMask
        ref={forwardedRef}
        mask="__-________-_"
        replacement={{ _: /\d/ }}
        {...props}
      />
    );
  }
);
