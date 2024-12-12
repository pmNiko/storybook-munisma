import type { Meta, StoryObj } from "@storybook/react";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import { SplitButton } from "./SplitButton";

const meta = {
  title: "Inputs/SplitButton",
  component: SplitButton,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          padding: "10px",
          height: "15vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    options: {
      control: false,
      description:
        "Arreglo de opciones que incluye el título, descripción, ícono y función de callback.",
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita el botón principal y el menú desplegable.",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Opciones sin íconos
const fileOptionsWithoutIcons = [
  {
    title: "PDF",
    description: "Descargar archivo PDF",
    action: () => alert("Descargando PDF"),
  },
  {
    title: "ZIP",
    description: "Descargar archivo ZIP",
    action: () => alert("Descargando ZIP"),
  },
  {
    title: "JPG",
    description: "Descargar imagen JPG",
    action: () => alert("Descargando JPG"),
  },
];

// Opciones con íconos
const fileOptionsWithIcons = [
  {
    title: "PDF",
    description: "Descargar archivo PDF",
    icon: <CustomIcon iconName="picture_as_pdf" iconColor="red" />,
    action: () => alert("Descargando PDF"),
  },
  {
    title: "ZIP",
    description: "Descargar archivo ZIP",
    icon: <CustomIcon iconName="folder_zip" iconColor="green" />,
    action: () => alert("Descargando ZIP"),
  },
  {
    title: "JPG",
    description: "Descargar imagen JPG",
    icon: <CustomIcon iconName="image" iconColor="blue" />,
    action: () => alert("Descargando JPG"),
  },
];

// Historia con opciones sin íconos
export const Basic: Story = {
  render: (args) => <SplitButton {...args} />,
  args: {
    options: fileOptionsWithoutIcons,
    disabled: false,
  },
};

// Historia con opciones con íconos
export const Custom: Story = {
  render: (args) => <SplitButton {...args} />,
  args: {
    options: fileOptionsWithIcons,

    disabled: false,
  },
};
