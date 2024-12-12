import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InfoModalResponse } from "./InfoModalResponse";
import { Button } from "@mui/material";

const meta = {
  title: "Modals/InfoModalResponse",
  component: InfoModalResponse,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    notify: {
      control: false,
      description: `
        Objeto de tipo \`NotifyState\` que controla el estado del modal.
        - \`exists\`: Indica si el modal debe mostrarse.
        - \`info\`: Indica si se trata de un mensaje informativo.
        - \`error\`: Indica si se trata de un mensaje de error.
        - \`message\`: Mensaje que se muestra en el modal.
      `,
    },
    children: {
      control: false,
      description:
        "Contenido personalizado que se renderiza en lugar del mensaje predeterminado.",
    },
    onClick: {
      control: false,
      description:
        "Función que se ejecuta al hacer clic en el botón 'Aceptar'.",
    },
  },
} satisfies Meta<typeof InfoModalResponse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoModal: Story = {
  render: (args) => {
    const [notify, setNotify] = useState(args.notify);

    const handleOpenInfo = () => {
      setNotify({
        ...notify,
        exists: true,
        info: true,
        error: false,
        message: "Esto es un mensaje informativo.",
      });
    };

    const handleOpenError = () => {
      setNotify({
        ...notify,
        exists: true,
        info: false,
        error: true,
        message: "Esto es un mensaje de error.",
      });
    };

    const handleClose = () => {
      setNotify({ ...notify, exists: false });
    };

    return (
      <>
        <Button
          variant="contained"
          onClick={handleOpenInfo}
          sx={{ marginBottom: 2 }}
        >
          Abrir Modal Informativo
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleOpenError}
          sx={{ marginBottom: 2, marginLeft: 2 }}
        >
          Abrir Modal de Error
        </Button>

        <InfoModalResponse notify={notify} onClick={handleClose} />
      </>
    );
  },
  args: {
    notify: {
      exists: false,
      info: false,
      error: false,
      message: "",
    },
  },
};
