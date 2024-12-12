import type { Meta, StoryObj } from "@storybook/react";
import { ToggleVisibilityPassword } from "./ToggleVisibilityPassword";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Components/ToggleVisibilityPassword",
  component: ToggleVisibilityPassword,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    showPassword: {
      control: "boolean",
      description: "Indica si la contraseña es visible o no.",
    },
    toggleShowPasswords: {
      action: "Toggle clicked",
      description:
        "Función que alterna el estado de visibilidad de la contraseña.",
    },
  },
} satisfies Meta<typeof ToggleVisibilityPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordVisible: Story = {
  args: {
    showPassword: true,
    toggleShowPasswords: action("Toggle clicked"),
  },
};

export const PasswordHidden: Story = {
  args: {
    showPassword: false,
    toggleShowPasswords: action("Toggle clicked"),
  },
};
