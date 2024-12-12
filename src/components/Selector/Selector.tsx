import { useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

type OptionListSelector = {
  label: string;
  value: string | number;
};

interface SelectorProps {
  disabled?: boolean;
  label: string;
  options: OptionListSelector[];
  setSelected: (value: string) => void;
  selected: string;
  defaultValue?: boolean;
  width?: number | string;
}

/**
 * Componente Selector
 *
 * Este componente muestra un selector desplegable configurable utilizando Material UI.
 * Permite seleccionar un valor de una lista de opciones proporcionada y gestionar
 * el estado del valor seleccionado.
 *
 * Props:
 * - `disabled` (opcional): Valor por defecto: `false`.
 * - `label`: Descripción del selector.
 * - `options`: Lista de opciones disponibles en el selector.
 *   - `label`: Texto visible en la opción.
 *   - `value`: Valor asociado a la opción (puede ser texto o número).
 * - `setSelected`: Función para actualizar el valor seleccionado.
 * - `selected`: Valor actual seleccionado.
 * - `defaultValue` (opcional): Si es `true`, selecciona automáticamente la primera opción al cargar.
 *   Valor por defecto: `false`.
 * - `width` (opcional): Ancho del selector. Puede ser un número o un string con unidades CSS.
 *
 * Uso:
 * ```tsx
 * const options = [
 *   { label: 'Opción 1', value: '1' },
 *   { label: 'Opción 2', value: '2' },
 * ];
 *
 * const [selected, setSelected] = useState<string>('');
 *
 * <Selector
 *   label="Selecciona una opción"
 *   options={options}
 *   selected={selected}
 *   setSelected={setSelected}
 *   defaultValue={true}
 *   width={300}
 * />
 * ```
 *
 * Notas:
 * - Si `defaultValue` es `true` y la lista de opciones no está vacía, selecciona automáticamente
 *   la primera opción al cargar el componente.
 * - El ancho puede ajustarse dinámicamente con la prop `width`.
 * - El estado del valor seleccionado se gestiona externamente mediante las props `selected` y `setSelected`.
 */
export const Selector = ({
  disabled = false,
  label,
  options,
  setSelected,
  selected,
  defaultValue,
  width,
}: SelectorProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };

  useEffect(() => {
    if (!!options && defaultValue) {
      setSelected(options[0]?.value as string);
    }
  }, [options]);

  return (
    <Box mt={3} textAlign="center" width={250}>
      <FormControl sx={{ width: `${width ? width : "100%"}` }}>
        <InputLabel id="year-tender-label">{label}</InputLabel>
        <Select
          labelId={label}
          id={label}
          value={selected}
          label={label}
          onChange={handleChange}
          disabled={disabled}
        >
          {options?.map((opt, i) => (
            <MenuItem key={opt.label + i} value={opt.value}>
              <Typography>{opt.label}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
