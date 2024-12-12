import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, Typography } from "@mui/material";
import { Captcha } from "./Captcha";
import { fn } from "@storybook/test";

const meta = {
  title: "Inputs/Captcha",
  component: Captcha,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    setValidCaptcha: {
      control: false, // No mostramos controles para setValidCaptcha porque se maneja internamente
      description:
        "Función para actualizar el estado de validación del Captcha.",
    },
  },
} satisfies Meta<typeof Captcha>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CaptchaExample: Story = {
  render: () => {
    const [isValidCaptcha, setIsValidCaptcha] = useState(false); // Estado inicial no validado

    const handleSubmit = () => {
      if (isValidCaptcha) {
        alert("Formulario enviado con éxito.");
      } else {
        alert("Por favor, valida el Captcha antes de continuar.");
      }
    };

    return (
      <div>
        <Captcha setValidCaptcha={setIsValidCaptcha} />
        <Typography textAlign="center" sx={{ marginTop: 2 }}>
          {isValidCaptcha
            ? "Captcha válido. Puedes continuar."
            : "Por favor, valida el Captcha antes de enviar."}
        </Typography>

        <Box textAlign="center">
          <Button
            disabled={!isValidCaptcha}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ marginTop: 2 }}
          >
            Enviar
          </Button>
        </Box>
      </div>
    );
  },
  args: {
    setValidCaptcha: fn(), // Proporciona un valor predeterminado
  },
};
