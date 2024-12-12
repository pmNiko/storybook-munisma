import { Box, Skeleton, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { LoaderAsync } from "./LoaderAsync";

const meta = {
  title: "Components/LoaderAsync",
  component: LoaderAsync,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isLoading: {
      control: "boolean",
      description: "Indica si el componente está en estado de carga.",
      defaultValue: true,
    },
    fallback: {
      control: false,
      description:
        "Elemento personalizado que se muestra mientras `isLoading` es `true`.",
    },
    children: {
      control: false,
      description: "Contenido que se renderiza cuando `isLoading` es `false`.",
    },
  },
} satisfies Meta<typeof LoaderAsync>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLoader: Story = {
  args: {
    isLoading: true,
    children: <Typography>¡El contenido ya está listo!</Typography>,
  },
};

export const CustomFallback: Story = {
  args: {
    isLoading: true,
    fallback: (
      <Box>
        <Skeleton variant="text" sx={{ fontSize: "2rem", marginBottom: 1 }} />
        <Skeleton variant="rectangular" width={300} height={100} />
      </Box>
    ),
    children: <Typography>¡El contenido ya está listo!</Typography>,
  },
};

export const Ready: Story = {
  args: {
    isLoading: false,
    children: <Typography>¡El contenido ya está listo!</Typography>,
  },
};
