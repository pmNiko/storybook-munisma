import { Box, Grid, GridSize, Typography } from "@mui/material";

interface Props {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  minHeight?: string;
  minWidth?: string;
  justifyTarget?: "space-around" | "space-between" | "space-evenly" | "center";
  showImage?: boolean;
  headerTitleComponent?: JSX.Element;
  title?: string;
  children: JSX.Element | JSX.Element[];

  mt?: string | number;
  mb?: string | number;
}

/**
 *
 * Este componente representa una tarjeta genérica utilizada para renderizar contenido
 * en una estructura de cuadrícula (`Grid`). Ofrece una alta personalización en su diseño y
 * organización de contenido.
 *
 * __Props__
 * - `xs`, `sm`, `md`, `lg` (opcional): Configuración del tamaño de la cuadrícula para
 *   diferentes puntos de quiebre (`breakpoints`). Los valores corresponden a `GridSize` de Material UI.
 *   Valores por defecto:
 *   - `xs`: 11
 *   - `sm`: 8
 *   - `md`: 6
 *   - `lg`: 4
 * - `minHeight` (opcional): Altura mínima de la tarjeta. Valor por defecto: `"78vh"`.
 * - `minWidth` (opcional): Ancho mínimo de la tarjeta. Valor por defecto: `"340px"`.
 * - `justifyTarget` (opcional): Define cómo se distribuyen los elementos hijos dentro de la tarjeta.
 *   Valores aceptados:
 *   - `"space-around"`, `"space-between"`, `"space-evenly"`, `"center"`.
 *   Valor por defecto: `"space-between"`.
 * - `showImage` (opcional): Booleano para mostrar u ocultar una imagen decorativa dentro de la tarjeta.
 *   Valor por defecto: `false`.
 * - `headerTitleComponent` (opcional): Un componente JSX que se renderiza como encabezado de la tarjeta.
 * - `title` (opcional): Título que se muestra en la parte superior de la tarjeta. Valor por defecto: `""`.
 * - `children`: Contenido JSX que se renderiza dentro de la tarjeta.
 * - `mt`, `mb` (opcional): Margen superior e inferior de la tarjeta. Puede ser un número o string con unidades CSS.
 *
 * ---
 *
 * __Uso__
 *
 * ```tsx
 * <MunismaCard
 *   title="Título de Ejemplo"
 *   showImage={true}
 *   justifyTarget="center"
 *   xs={12}
 *   sm={10}
 *   md={8}
 * >
 *   <div>Contenido de la tarjeta</div>
 * </MunismaCard>
 * ```
 *
 * __Notas__
 * - La tarjeta incluye un diseño predefinido con sombra, bordes redondeados y un fondo blanco.
 * - Si `title` está vacío, no se renderiza el encabezado de título.
 * - `showImage` agrega una imagen decorativa en el centro de la tarjeta.
 */
export const MunismaCard = ({
  xs = 11,
  sm = 8,
  md = 6,
  lg = 4,
  minHeight = "78vh",
  minWidth = "340px",
  showImage = false,
  headerTitleComponent,
  title = "",
  justifyTarget = "space-between",
  children,
  mt = "",
  mb = "",
}: Props) => {
  return (
    <>
      {headerTitleComponent && headerTitleComponent}
      <Grid container display="flex" justifyContent="center" mt={mt} mb={mb}>
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              boxShadow: "5px 10px 20px rgba(0, 0, 0, 0.4)",
              borderRadius: "15px 15px 15px 15px ",
              minHeight,
              minWidth,
              display: "flex",
              flexDirection: "column",
              justifyContent: justifyTarget,
            }}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="center"
                fontWeight="bold"
                pt={4}
                px={4}
                sx={{ display: !title ? "none" : "" }}
              >
                {title}
              </Typography>
              {showImage && (
                <Box textAlign="center" mt={6}>
                  <img
                    src="https://app.sma.gob.ar/imgs/despapelizacion.png"
                    style={{ opacity: "0.5", height: "10em" }}
                  />
                </Box>
              )}
            </Box>

            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
