import { useEffect, useState } from "react";
import {
  MRT_RowSelectionState,
  MaterialReactTable,
} from "material-react-table";
import { Typography } from "@mui/material";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { GenericItemType, ItemTableProps } from "./types";

/**
 *
 * Este componente representa una tabla interactiva que utiliza `material-react-table` para renderizar datos
 * y permite seleccionar filas, agrupar columnas, y personalizar el comportamiento y diseño.
 *
 * __Props__
 * - `columns`: Definición de las columnas de la tabla. Estructura esperada por `material-react-table`.
 * - `grouping`: Columna utilizada para agrupar los datos.
 * - `extraInvisibleColumn` (opcional): Columna adicional que se debe mantener oculta.
 * - `isLoading`: Booleano que indica si la tabla está en estado de carga.
 * - `heigth`: Altura máxima y mínima de la tabla.
 * - `msgFallback`: Mensaje que se muestra cuando no hay datos disponibles.
 * - `rowKey`: Clave única para identificar cada fila.
 * - `data`: Datos que se renderizan en la tabla. Por defecto, se inicializa como un arreglo vacío si no se pasa.
 * - `setSelection`: Función que recibe un arreglo de claves de las filas seleccionadas.
 * - `selectionExists`: Booleano que indica si hay filas seleccionadas actualmente.
 *
 * __Funcionalidades__
 * - Renderiza datos tabulares con soporte para selección y agrupación de filas.
 * - Personaliza el diseño utilizando propiedades de Material UI.
 * - Oculta columnas específicas y agrupa filas según la columna indicada.
 * - Administra el estado de selección de filas mediante el estado `rowSelection` y propaga los cambios
 *   mediante `setSelection`.
 * - Reinicia la selección cuando `selectionExists` es `false`.
 * - Muestra un mensaje personalizado cuando no hay datos en la tabla (`msgFallback`).
 *
 * ---
 *
 * __Uso__
 *
 *
 * ```tsx
 * import { ItemTable } from './ItemTable';
 *
 * const columns = [
 *   { header: 'Nombre', accessorKey: 'nombre' },
 *   { header: 'Edad', accessorKey: 'edad' },
 *   { header: 'Grupo', accessorKey: 'grupo' },
 * ];
 *
 * const data = [
 *   { nombre: 'Juan', edad: 30, grupo: 'A' },
 *   { nombre: 'Ana', edad: 25, grupo: 'B' },
 * ];
 *
 * const App = () => {
 *   const [selectedRows, setSelectedRows] = useState([]);
 *   const [selectionExists, setSelectionExists] = useState(false);
 *
 *   useEffect(() => {
 *     setSelectionExists(selectedRows.length > 0);
 *   }, [selectedRows]);
 *
 *   return (
 *     <ItemTable
 *       columns={columns}
 *       grouping="grupo"
 *       data={data}
 *       rowKey="nombre"
 *       heigth="400px"
 *       msgFallback="No hay datos disponibles"
 *       setSelection={setSelectedRows}
 *       selectionExists={selectionExists}
 *       isLoading={false}
 *     />
 *   );
 * };
 * ```
 *
 * __Notas__
 * - Asegúrate de que las claves de las filas (`rowKey`) sean únicas en el conjunto de datos.
 */
export const ItemTable = <T extends GenericItemType>({
  columns,
  grouping,
  extraInvisibleColumn = grouping,
  isLoading,
  heigth,
  msgFallback,
  rowKey,
  data,
  setSelection,
  selectionExists,
}: ItemTableProps<T>) => {
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  useEffect(() => {
    const rows = Object.keys(rowSelection);

    const filteredRows = rows.filter(
      (rowKey) => !rowKey.startsWith(grouping.toString())
    );
    setSelection(filteredRows);
  }, [rowSelection]);

  useEffect(() => {
    !selectionExists && setRowSelection({});
  }, [selectionExists]);

  return (
    <MaterialReactTable
      localization={MRT_Localization_ES}
      autoResetAll
      autoResetExpanded
      columns={columns}
      data={data ?? []}
      renderEmptyRowsFallback={() => (
        <Typography m="auto">{msgFallback}</Typography>
      )}
      initialState={{
        columnVisibility: { [grouping]: false, [extraInvisibleColumn]: false },
        grouping: [grouping.toString()],
        density: "compact",
        expanded: true,
      }}
      getRowId={(row) => row[rowKey]!.toString()}
      onRowSelectionChange={setRowSelection}
      state={{ rowSelection, showProgressBars: isLoading }}
      enableRowSelection
      enableGrouping
      enableStickyHeader
      enableStickyFooter
      enableTableFooter
      enableBottomToolbar
      positionExpandColumn="first"
      enablePagination={false}
      enableColumnActions={false}
      enableTopToolbar={false}
      enableRowDragging={false}
      enableColumnDragging={false}
      enableSorting={false}
      layoutMode="grid"
      muiTablePaperProps={{
        sx: {
          paddingX: 2,
        },
      }}
      muiTableContainerProps={{
        sx: {
          maxHeight: heigth,
          minHeight: heigth,
          "--header-mrt_row_expand-size": "0",
          "--col-mrt_row_expand-size": "0",
          "& tr:nth-of-type(even)": {
            backgroundColor: "#f5f5f5",
          },
        },
      }}
      muiToolbarAlertBannerChipProps={{ color: "primary" }}
      muiTableBodyCellProps={{ size: "small" }}
      muiExpandAllButtonProps={{ size: "small" }}
      muiExpandButtonProps={{ size: "small" }}
      muiSelectAllCheckboxProps={{ size: "small" }}
      muiSelectCheckboxProps={{ size: "small" }}
      muiTableHeadCellProps={{ sx: { paddingRight: "1px" } }}
      muiTableHeadProps={{
        sx: {
          "& th:not(:first-of-type)": {
            paddingLeft: "0px",
          },
          "--header-mrt_row_expand-size": "0",
          "--col-mrt_row_expand-size": "0",
          "--header-mrt_row_select-size": "0",
          "--col-mrt_row_select-size": "0",
        },
      }}
      muiTableBodyProps={{
        sx: {
          paddingLeft: "0.5em",
          "& td": {
            paddingX: "1px",
          },
          "--header-mrt_row_expand-size": "0",
          "--col-mrt_row_expand-size": "0",
          "--header-mrt_row_select-size": "0",
          "--col-mrt_row_select-size": "0",
        },
      }}
      muiTableBodyRowProps={({ row }) => ({
        onClick: () => {
          row.getIsGrouped() ? row.toggleExpanded() : row.toggleSelected();
        },

        sx: {
          ...(row.getIsGrouped()
            ? {
                cursor: "pointer",
                "& td:not(:nth-of-type(1)):not(:nth-of-type(3))": {
                  display: "none",
                },
              }
            : {
                cursor: "pointer",
                "& td:first-of-type": {
                  "& span": {
                    display: "none",
                  },
                },
              }),
        },
      })}
    />
  );
};
