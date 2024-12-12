import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonPage } from "./SkeletonPage";

const meta = {
  title: "Components/SkeletonPage",
  component: SkeletonPage,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    spacing: {
      control: { type: "number" },
      description: "Espaciado entre los elementos esqueléticos en la pila.",
      defaultValue: 1,
    },
    width: {
      control: { type: "text" },
      description: "Ancho total de la pila esquelética.",
      defaultValue: "500px",
    },
    height: {
      control: { type: "text" },
      description: "Altura total de la pila esquelética.",
      defaultValue: "70vh",
    },
    mt: {
      control: { type: "text" },
      description: "Margen superior aplicado a la pila.",
      defaultValue: "6rem",
    },
  },
} satisfies Meta<typeof SkeletonPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SkeletonPage />,
};
