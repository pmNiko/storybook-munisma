import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Basic";
import { Button } from "@mui/material";
import { fn } from "@storybook/test";

const meta = {
  title: "Modals/Basic",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      control: "boolean",
      description: "Indica si se debe mostrar un ícono en el diálogo.",
      defaultValue: false,
    },
    success: {
      control: "boolean",
      description: "Define si el modal es de éxito o error.",
      defaultValue: true,
    },
    message: {
      control: "text",
      description:
        "El mensaje principal que se muestra en el contenido del diálogo.",
    },
    children: {
      control: false,
      description:
        "Contenido adicional que se renderiza en el cuerpo del modal.",
    },
    accept: {
      control: "text",
      description: "Texto del botón de acción primaria.",
    },
    actionAccept: {
      control: false,
      description:
        "Función que se ejecuta al hacer clic en el botón de aceptar.",
    },
    close: {
      control: "text",
      description: "Texto del botón de cerrar.",
      defaultValue: "Cerrar",
    },
    closeAction: {
      action: "Modal cerrado",
      description:
        "Función que se ejecuta al hacer clic en el botón de cerrar.",
    },
    toggleModal: {
      control: "boolean",
      description: "Booleano que controla si el modal está abierto o cerrado.",
      defaultValue: true,
    },
    displayHidden: {
      control: "boolean",
      description: "Oculta completamente el componente si es true.",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.toggleModal);

    const handleClose = () => {
      setIsOpen(false);
    };

    const handleAccept = () => {
      alert("Acción aceptada.");
      setIsOpen(false); // Cerrar el modal al aceptar
    };

    const handleReopen = () => {
      setIsOpen(true);
    };

    return (
      <>
        {/* Botón para reabrir el modal */}
        <Button
          variant="contained"
          onClick={handleReopen}
          sx={{ marginBottom: 2 }}
        >
          Abrir Modal
        </Button>

        {/* Modal interactivo */}
        <Modal
          {...args}
          toggleModal={isOpen}
          closeAction={handleClose}
          actionAccept={args.accept ? handleAccept : undefined}
        />
      </>
    );
  },
  args: {
    icon: true,
    success: true,
    message: "Este es un modal interactivo.",
    accept: "Aceptar",
    close: "Cerrar",
    toggleModal: false,
    closeAction: fn(),
  },
};
