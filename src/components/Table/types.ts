import { MRT_ColumnDef } from "material-react-table";

export type GenericItemType = {};

export interface ItemTableProps<ItemStruct extends GenericItemType> {
  data: ItemStruct[];
  columns: MRT_ColumnDef<ItemStruct>[];
  isLoading: boolean;
  grouping: keyof ItemStruct | "no_grouping";
  extraInvisibleColumn?: keyof ItemStruct | "no_grouping";
  msgFallback: string;
  heigth: number;
  rowKey: keyof ItemStruct;
  setSelection: (items: Array<string>) => void;
  selectionExists?: boolean;
}
