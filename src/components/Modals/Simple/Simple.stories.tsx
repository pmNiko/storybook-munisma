import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { SimpleModal } from "./Simple";

const meta = {
  title: "Modals/Simple",
  component: SimpleModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Controla si el modal está abierto o cerrado.",
      defaultValue: false,
    },
    children: {
      control: false,
      description: "Contenido que se renderiza dentro del modal.",
    },
  },
} satisfies Meta<typeof SimpleModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicSimpleModal: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);

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
        <SimpleModal open={isOpen}>
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Contenido del Modal
            </Typography>
            {args.children}
            <Button onClick={handleClose} sx={{ marginTop: 2 }}>
              Cerrar
            </Button>
          </>
        </SimpleModal>
      </>
    );
  },
  args: {
    open: false,
    children: (
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Este es un modal simple.
      </Typography>
    ),
  },
};
