import type { Meta, StoryObj } from "@storybook/react";
import { Selector } from "./Selector";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "Inputs/Selector",
  component: Selector,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Deshabilita el selector si es `true`.",
      defaultValue: false,
    },
    label: {
      control: "text",
      description: "Texto del encabezado del selector.",
      defaultValue: "Selecciona una opción",
    },
    options: {
      control: false,
      description: "Lista de opciones disponibles para seleccionar.",
    },
    setSelected: {
      control: false,
      description:
        "Función para actualizar el valor seleccionado. Gestionado externamente.",
    },
    selected: {
      control: false,
      description: "Valor actualmente seleccionado.",
    },
    defaultValue: {
      control: "boolean",
      description:
        "Selecciona automáticamente la primera opción al cargar el componente.",
      defaultValue: false,
    },
    width: {
      control: "text",
      description:
        "Ancho del selector. Puede ser un número o un string con unidades CSS.",
      defaultValue: "300px",
    },
  },
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: "🇦🇷 Argentina", value: "AR" },
  { label: "🇧🇷 Brasil", value: "BR" },
  { label: "🇨🇱 Chile", value: "CL" },
  { label: "🇺🇸 Estados Unidos", value: "US" },
  { label: "🇨🇦 Canadá", value: "CA" },
  { label: "🇪🇸 España", value: "ES" },
  { label: "🇫🇷 Francia", value: "FR" },
  { label: "🇩🇪 Alemania", value: "DE" },
  { label: "🇮🇹 Italia", value: "IT" },
  { label: "🇯🇵 Japón", value: "JP" },
];

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string>("");

    return (
      <Selector
        label={args.label}
        options={args.options}
        width={args.width}
        defaultValue={args.defaultValue}
        disabled={args.disabled}
        selected={selected}
        setSelected={setSelected}
      />
    );
  },
  args: {
    disabled: false,
    defaultValue: false,
    width: "250px",
    label: "Selecciona un pais",
    options: options,
    selected: options[0].value,
    setSelected: fn(),
  },
};

export const WithDefaultValue: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string>("");

    return (
      <Selector
        label={args.label}
        options={args.options}
        width={args.width}
        defaultValue={args.defaultValue}
        disabled={args.disabled}
        selected={selected}
        setSelected={setSelected}
      />
    );
  },
  args: {
    disabled: false,
    defaultValue: true,
    width: "250px",
    label: "Selecciona un pais",
    options: options,
    selected: options[0].value,
    setSelected: fn(),
  },
};

export const DisabledSelector: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string>("");

    return (
      <Selector
        label={args.label}
        options={args.options}
        width={args.width}
        defaultValue={args.defaultValue}
        disabled={args.disabled}
        selected={selected}
        setSelected={setSelected}
      />
    );
  },
  args: {
    disabled: true,
    defaultValue: false,
    width: "250px",
    label: "Selector Deshabilitado",
    options: options,
    selected: options[0].value,
    setSelected: fn(),
  },
};
