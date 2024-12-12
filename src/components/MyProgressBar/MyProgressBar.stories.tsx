import type { Meta, StoryObj } from "@storybook/react";
import { MyProgressBar } from "./MyProgressBar";

const meta = {
  title: "Components/MyProgressBar",
  component: MyProgressBar,
  argTypes: {
    progress: {
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
      description: "Porcentaje de progreso (0 a 100).",
      defaultValue: 0,
    },
  },
} satisfies Meta<typeof MyProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullProgress: Story = {
  args: {
    progress: 100, // Progreso completo
  },
};

export const InitProgress: Story = {
  args: {
    progress: 1, // Progreso vacío
  },
};
