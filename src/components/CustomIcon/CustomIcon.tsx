import { Icon } from "@material-ui/core";

interface Props {
  iconName: string;
  iconFontSize?: number;
  iconColor?: string;
}

/**
 *
 *
 * __Importacion de iconos__
 *
 * ```html
 *  <link
 *    href="https://fonts.googleapis.com/icon?family=Material+Icons"
 *    rel="stylesheet"
 *  />
 *
 * ```
 *
 * - [Fuente de iconos](https://fonts.google.com/icons?hl=es-419)
 *
 * ---
 *
 * Este componente es un ícono personalizado basado en Material UI, que permite especificar su nombre,
 * tamaño y color de manera flexible.
 *
 * __Props__
 * - `iconName` (requerido): Nombre del ícono según la biblioteca de Material Icons.
 * - `iconFontSize` (opcional): Tamaño de la fuente para el ícono. Valor por defecto: `32`.
 * - `iconColor` (opcional): Color del ícono. Si no se especifica, se usa el color negro.
 *
 * __Funcionalidades__
 * - Renderiza un ícono de Material Icons con estilos personalizados para tamaño y color.
 * - Permite usar cualquier ícono disponible en la biblioteca de Material Icons simplemente indicando su nombre.
 *
 * ---
 *
 * __Uso__
 *
 * ```tsx
 * import { CustomIcon } from './CustomIcon';
 *
 * const App = () => (
 *   <div>
 *     <CustomIcon iconName="home" />
 *     <CustomIcon iconName="settings" iconFontSize={48} iconColor="blue" />
 *     <CustomIcon iconName="favorite" iconColor="red" />
 *   </div>
 * );
 * ```
 *
 * __Notas__
 * - El componente utiliza la clase `material-icons` para integrar los íconos de Material UI.
 * - Si no se proporciona un color (`iconColor`), el ícono se renderiza en color negro por defecto.
 * - Asegúrate de que la fuente de Material Icons esté incluida en tu proyecto para que los íconos se rendericen correctamente.
 */
export const CustomIcon = ({
  iconName,
  iconFontSize = 32,
  iconColor,
}: Props) => {
  return (
    <Icon
      style={{
        fontSize: iconFontSize,
        color: iconColor === null ? "black" : iconColor,
      }}
      className={`material-icons`}
    >
      {iconName}
    </Icon>
  );
};
