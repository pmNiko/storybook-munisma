import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

export interface OptionsList {
  title: string;
  description: string;
  icon?: JSX.Element;
  action: (x: any) => void;
}

interface Props {
  options: OptionsList[];
  disabled: boolean;
}

/**
 * Componente SplitButton
 *
 * Este componente es un botón con funcionalidad de desplegable que permite ejecutar acciones
 * de una lista de opciones configurables.
 *
 * Props:
 * - `options`: Arreglo de opciones que se mostrarán en el menú desplegable. Cada opción incluye:
 *   - `title`: El texto que se muestra en el botón principal.
 *   - `description`: La descripción que aparece en el menú desplegable.
 *   - `icon` (opcional): Icono asociado a la opción, que se puede mostrar junto al texto.
 *   - `action`: Función de callback que se ejecuta al seleccionar la opción.
 * - `disabled`: Booleano que desactiva el botón y el menú desplegable.
 *
 * Uso:
 * ```tsx
 * <SplitButton
 *   options={[
 *     { title: 'Opción 1', description: 'Descripción 1', action: () => console.log('Opción 1 seleccionada') },
 *     { title: 'Opción 2', description: 'Descripción 2', icon: <Icono />, action: () => console.log('Opción 2 seleccionada') },
 *   ]}
 *   disabled={false}
 * />
 * ```
 *
 * Notas:
 * - El `title` de la opción seleccionada se muestra en el botón principal.
 * - Al hacer clic en la flecha del desplegable, se abre el menú para seleccionar opciones.
 * - La acción asociada a la opción seleccionada se ejecuta al elegirla.
 */

export const SplitButton = ({ options, disabled }: Props) => {
  const [execute, setExecute] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setExecute(!execute);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (execute) {
      options[selectedIndex].action(null);
      setExecute(!execute);
    }
  }, [execute]);

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          variant="contained"
          size="small"
          type="submit"
          onClick={handleToggle}
          disabled={disabled}
        >
          {/* {options[selectedIndex].icon} &nbsp; */}
          {options[selectedIndex].title}
          <KeyboardArrowDownOutlinedIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              // transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              transformOrigin: "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.title + index}
                      selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                      disabled={disabled}
                    >
                      {option.icon} &nbsp;
                      {option.description}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
