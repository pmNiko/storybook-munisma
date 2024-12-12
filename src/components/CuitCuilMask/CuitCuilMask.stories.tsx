import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { CuitCuilMask } from "./CuitCuilMask";

const meta = {
  title: "Inputs/CuitCuilMask",
  component: CuitCuilMask,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: "text",
      description: "Valor actual del campo de entrada.",
    },
    placeholder: {
      control: "text",
      description: "Texto que se muestra como marcador de posición.",
      defaultValue: "Ingrese su CUIT/CUIL",
    },
    onChange: {
      action: "changed",
      description: "Función que se ejecuta al cambiar el valor del campo.",
    },
  },
} satisfies Meta<typeof CuitCuilMask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || "");

    // Sincroniza el estado local con los cambios en los args
    useEffect(() => {
      setValue(args.value || "");
    }, [args.value]);

    return (
      <CuitCuilMask
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    value: "",
    placeholder: "Ingrese su CUIT/CUIL",
  },
};
