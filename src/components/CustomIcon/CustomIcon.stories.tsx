import type { Meta, StoryObj } from "@storybook/react";
import { CustomIcon } from "./CustomIcon";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const meta = {
  title: "Components/CustomIcon",
  component: CustomIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    iconName: {
      control: "text",
      description: "Nombre del ícono según la biblioteca de Material Icons.",
      defaultValue: "home",
    },
    iconFontSize: {
      control: "number",
      description: "Tamaño de la fuente para el ícono.",
      defaultValue: 32,
    },
    iconColor: {
      control: "color",
      description: "Color del ícono. Por defecto, es negro.",
      defaultValue: "black",
    },
  },
} satisfies Meta<typeof CustomIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    iconName: "home",
    iconFontSize: 32,
    iconColor: "black",
  },
};

export const IconGrid: Story = {
  render: () => {
    const icons = [
      { name: "home", color: "blue", size: 40 },
      { name: "favorite", color: "red", size: 40 },
      { name: "settings", color: "green", size: 40 },
      { name: "search", color: "purple", size: 40 },
      { name: "notifications", color: "orange", size: 40 },
      { name: "info", color: "teal", size: 40 },
      { name: "account_circle", color: "brown", size: 40 },
      { name: "help", color: "blue", size: 40 },
      { name: "lock", color: "black", size: 40 },
    ];

    return (
      <Grid container spacing={3} justifyContent="center">
        {icons.map((icon, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: 2,
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <CustomIcon
                  iconName={icon.name}
                  iconFontSize={icon.size}
                  iconColor={icon.color}
                />
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  marginTop={1}
                >
                  {icon.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  },
  args: { iconName: "home" },
};
