import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

/**
 *
 * Este componente muestra una barra de progreso con un indicador visual que incluye el porcentaje de progreso.
 * Utiliza `LinearProgress` de Material UI como base, con un diseño personalizado.
 *
 * __Props__
 * - `progress` (requerido): Número que indica el valor actual del progreso, en un rango de 0 a 100.
 *
 * __Funcionalidades__
 * - Muestra una barra de progreso lineal (`LinearProgress`) basada en el valor proporcionado.
 * - Incluye un texto que indica el porcentaje de progreso actual.
 * - Se adapta al ancho definido por `progress`, ajustándose automáticamente al valor.
 *
 * ---
 *
 *  __Ejemplo de uso__
 *
 * ```tsx
 * import { MyProgressBar } from './MyProgressBar';
 *
 * const App = () => {
 *   const [progress, setProgress] = useState(0);
 *
 *   useEffect(() => {
 *     const interval = setInterval(() => {
 *       setProgress((prev) => (prev < 100 ? prev + 10 : 0));
 *     }, 1000);
 *
 *     return () => clearInterval(interval);
 *   }, []);
 *
 *   return (
 *     <div>
 *       <MyProgressBar progress={progress} />
 *     </div>
 *   );
 * };
 * ```
 * ---
 *
 * __Notas__
 * - El texto del porcentaje se calcula automáticamente utilizando `Math.round` y se muestra junto a la barra.
 * - Asegúrate de que el valor de `progress` esté en el rango de 0 a 100 para un comportamiento óptimo.
 * - Los estilos de Material UI pueden personalizarse mediante la prop `sx` en `Box` o `LinearProgress`.
 */

export const MyProgressBar = ({ progress }: { progress: number }) => {
  return (
    <Box sx={{ width: `${progress}` }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
};
