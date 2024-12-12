import type { Meta, StoryObj } from "@storybook/react";
import { CustomPopUp } from "./CustomPopUp";

const meta = {
  title: "Inputs/CustomPopUp",
  component: CustomPopUp,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    help: {
      control: "text",
      description: "Texto que se muestra dentro del popover.",
    },
  },
} satisfies Meta<typeof CustomPopUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHelpPopUp: Story = {
  args: {
    help: "Esta es una ayuda predeterminada.",
  },
};

export const LongHelpTextPopUp: Story = {
  args: {
    help: `
      Este es un texto de ayuda mucho más largo para demostrar cómo se comporta
      el componente cuando el contenido del popover es extenso. Puedes usarlo para 
      guiar al usuario con instrucciones detalladas.
    `,
  },
};
