import type { Meta, StoryObj } from "@storybook/react";
import { MunismaCard } from "./MunismaCard";
import { Box, Typography } from "@mui/material";

const meta = {
  title: "Components/MunismaCard",
  component: MunismaCard,
  argTypes: {
    xs: {
      control: { type: "number", min: 1, max: 12 },
      description:
        "Configura el tamaño de la cuadrícula en pantallas pequeñas.",
      defaultValue: 11,
    },
    sm: {
      control: { type: "number", min: 1, max: 12 },
      description:
        "Configura el tamaño de la cuadrícula en pantallas medianas.",
      defaultValue: 8,
    },
    md: {
      control: { type: "number", min: 1, max: 12 },
      description: "Configura el tamaño de la cuadrícula en pantallas grandes.",
      defaultValue: 6,
    },
    lg: {
      control: { type: "number", min: 1, max: 12 },
      description:
        "Configura el tamaño de la cuadrícula en pantallas extra grandes.",
      defaultValue: 4,
    },
    title: {
      control: "text",
      description: "Título que se muestra en la tarjeta.",
    },
    showImage: {
      control: "boolean",
      description: "Indica si se muestra una imagen decorativa.",
      defaultValue: false,
    },
    justifyTarget: {
      control: "select",
      options: ["space-around", "space-between", "space-evenly", "center"],
      description:
        "Define cómo se distribuyen los elementos dentro de la tarjeta.",
      defaultValue: "space-between",
    },
    minHeight: {
      control: "text",
      description: "Altura mínima de la tarjeta.",
      defaultValue: "40vh",
    },
    minWidth: {
      control: "text",
      description: "Ancho mínimo de la tarjeta.",
      defaultValue: "340px",
    },
  },
} satisfies Meta<typeof MunismaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomLayout: Story = {
  args: {
    title: "Tarjeta Personalizada",
    justifyTarget: "center",
    minHeight: "30vh",
    minWidth: "400px",
    showImage: true,
    children: (
      <Box m={4} textAlign="center">
        <Typography>Este es un diseño personalizado.</Typography>
        <Typography variant="body2">
          Puedes cambiar su tamaño y distribución.
        </Typography>
      </Box>
    ),
  },
};
