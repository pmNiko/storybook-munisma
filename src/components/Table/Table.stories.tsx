import type { Meta, StoryObj } from "@storybook/react";
import { ItemTable } from "./Table";
import { MRT_ColumnDef } from "material-react-table";
import { useEffect, useState } from "react";
import { fn } from "@storybook/test";
import { Box, Typography } from "@mui/material";

const meta = {
  title: "Components/Table",
  component: ItemTable,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    data: {
      control: false,
      description: "Datos que se renderizan en la tabla.",
    },
    grouping: {
      control: "text",
      description: "Columna utilizada para agrupar los datos.",
      defaultValue: "grupo",
    },
    extraInvisibleColumn: {
      control: "text",
      description: "Columna adicional que se debe mantener oculta.",
      defaultValue: "estado",
    },
    heigth: {
      control: "text",
      description: "Altura de la tabla.",
      defaultValue: "400px",
    },
    msgFallback: {
      control: "text",
      description: "Mensaje que se muestra cuando no hay datos disponibles.",
      defaultValue: "No hay datos disponibles",
    },
    isLoading: {
      control: "boolean",
      description: "Indica si la tabla está en estado de carga.",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof ItemTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interfaz actualizada
interface CustomInterface {
  nombre: string;
  edad: number;
  grupo: string;
  ciudad: string;
  estado: string;
}

// Columnas actualizadas
const columns: MRT_ColumnDef<CustomInterface>[] = [
  {
    header: "Nombre",
    accessorKey: "nombre",
    AggregatedCell: ({ row }) => (
      <Box>
        <Typography
          fontWeight="bold"
          color="primary.main"
          variant="subtitle2"
          lineHeight={3}
        >
          Grupo - {row.original.grupo}
        </Typography>
      </Box>
    ),
  },
  {
    header: "Edad",
    accessorKey: "edad",
    Cell: ({ cell }) => `${cell.getValue<number>()} años`,
  },
  {
    header: "Grupo",
    accessorKey: "grupo",
  },
  {
    header: "Ciudad",
    accessorKey: "ciudad",
  },
  {
    header: "Estado",
    accessorKey: "estado",
  },
];

// Datos actualizados
const data: CustomInterface[] = [
  {
    nombre: "Juan",
    edad: 30,
    grupo: "A",
    ciudad: "Buenos Aires",
    estado: "Activo",
  },
  { nombre: "Ana", edad: 25, grupo: "B", ciudad: "Rosario", estado: "Activo" },
  {
    nombre: "Carlos",
    edad: 28,
    grupo: "C",
    ciudad: "Córdoba",
    estado: "Inactivo",
  },
  {
    nombre: "María",
    edad: 32,
    grupo: "B",
    ciudad: "Mendoza",
    estado: "Activo",
  },
  {
    nombre: "Luis",
    edad: 29,
    grupo: "C",
    ciudad: "La Plata",
    estado: "Activo",
  },
  {
    nombre: "Sofía",
    edad: 27,
    grupo: "B",
    ciudad: "Salta",
    estado: "Inactivo",
  },
  {
    nombre: "Miguel",
    edad: 31,
    grupo: "A",
    ciudad: "San Juan",
    estado: "Activo",
  },
  {
    nombre: "Lucía",
    edad: 26,
    grupo: "C",
    ciudad: "Tucumán",
    estado: "Activo",
  },
  {
    nombre: "Jorge",
    edad: 35,
    grupo: "A",
    ciudad: "Neuquén",
    estado: "Inactivo",
  },
  {
    nombre: "Valeria",
    edad: 24,
    grupo: "B",
    ciudad: "Chaco",
    estado: "Activo",
  },
];

export const Default: Story = {
  render: ({
    columns,
    data,
    grouping,
    heigth,
    isLoading,
    msgFallback,
    rowKey,
    extraInvisibleColumn,
    setSelection,
    selectionExists,
  }) => {
    return (
      <ItemTable<CustomInterface>
        columns={columns as MRT_ColumnDef<CustomInterface>[]}
        data={isLoading ? [] : (data as CustomInterface[])}
        rowKey={rowKey}
        setSelection={setSelection}
        selectionExists={selectionExists}
        grouping={grouping}
        heigth={heigth}
        extraInvisibleColumn={extraInvisibleColumn}
        msgFallback={msgFallback}
        isLoading={isLoading}
      />
    );
  },
  args: {
    data,
    columns: columns,
    grouping: "grupo",
    extraInvisibleColumn: "estado",
    heigth: 300,
    msgFallback: "No hay datos disponibles",
    isLoading: false,
    rowKey: "nombre",
    setSelection: fn(),
    selectionExists: fn(),
  } as any,
};
