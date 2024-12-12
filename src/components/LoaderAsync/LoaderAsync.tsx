import { CircularProgress } from "@mui/material";

interface Props {
  isLoading: boolean;
  fallback?: JSX.Element;
  children: JSX.Element;
}

/**
 *
 * Este componente muestra un indicador de carga mientras se espera la finalización de un proceso asíncrono.
 * Una vez completado, renderiza el contenido hijo proporcionado.
 *
 * __Props__
 * - `isLoading` (requerido): Booleano que indica si el componente está en un estado de carga.
 * - `fallback` (opcional): Componente o elemento TSX personalizado que se mostrará como indicador de carga.
 *   Si no se proporciona, se muestra un spinner (`CircularProgress`) de Material UI.
 * - `children` (requerido): Contenido TSX que se renderiza cuando `isLoading` es `false`.
 *
 * __Funcionalidades__
 * - Muestra un spinner predeterminado o un componente personalizado mientras `isLoading` es `true`.
 * - Renderiza el contenido principal (`children`) una vez que la carga ha finalizado (`isLoading` es `false`).
 *
 * ---
 *
 * __Uso__
 *
 * ```tsx
 * import { LoaderAsync } from './LoaderAsync';
 * import { CircularProgress } from '@mui/material';
 *
 * const App = () => {
 *   const [loading, setLoading] = useState(true);
 *
 *   useEffect(() => {
 *     setTimeout(() => setLoading(false), 3000); // Simula un proceso asíncrono
 *   }, []);
 *
 *   return (
 *     <LoaderAsync
 *       isLoading={loading}
 *       fallback={<CircularProgress color="secondary" />}
 *     >
 *       <div>Contenido cargado</div>
 *     </LoaderAsync>
 *   );
 * };
 * ```
 *
 * __Notas__
 * - Si no se pasa `fallback`, se muestra un spinner predeterminado (`CircularProgress`).
 * - Este componente es útil para manejar interfaces que requieren espera mientras se resuelve un proceso asíncrono.
 */
export const LoaderAsync = ({ isLoading, fallback, children }: Props) => {
  if (isLoading && !fallback) return <CircularProgress />;

  if (isLoading && fallback) return <>{fallback}</>;

  return <>{children}</>;
};
