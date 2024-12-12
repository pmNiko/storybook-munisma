import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CustomModal } from "./CustomModal";
import { Button, Typography } from "@mui/material";
import { fn } from "@storybook/test";

const meta = {
  title: "Modals/Custom",
  component: CustomModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controla si el modal está abierto o cerrado.",
      defaultValue: false,
    },
    close: {
      control: false,
      description: "Función que se ejecuta al intentar cerrar el modal.",
    },
    children: {
      control: false,
      description: "Contenido que se renderiza dentro del modal.",
    },
    sx: {
      control: "object",
      description: "Estilos adicionales aplicados al contenedor `Box` interno.",
    },
  },
} satisfies Meta<typeof CustomModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCustomModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleOpen = () => {
      setIsOpen(true);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        {/* Botón para abrir el modal */}
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ marginBottom: 2 }}
        >
          Abrir Modal
        </Button>

        {/* Modal interactivo */}
        <CustomModal isOpen={isOpen} close={handleClose}>
          <>
            <Typography id="modal-modal-title" variant="h6" textAlign="center">
              Contenido del Modal
            </Typography>
            {args.children}
            <Button onClick={handleClose} sx={{ marginTop: 2 }}>
              Cerrar
            </Button>
          </>
        </CustomModal>
      </>
    );
  },
  args: {
    isOpen: false,
    children: (
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Este es un modal personalizado.
      </Typography>
    ),
    close: fn(),
  },
};
