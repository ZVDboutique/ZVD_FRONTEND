import { ReactNode } from 'react';
import { GridColDef } from '@mui/x-data-grid';

export interface TableProps<T> {
  title?: string;
  data: T[];
  columns: GridColDef[];
  loading?: boolean;
  enableSelection?: boolean;
  enableSearch?: boolean;
  actionButtons?: ActionButton[];
  onRowClick?: (row: T) => void;
  pageSize?: number;
  customStats?: ReactNode;
  onSelectionChange?: (selectedIds: string[]) => void;
  searchPlaceholder?: string;
  hideFooterPagination?: boolean;
  rowHeight?: number;
  headerHeight?: number;
  containerStyles?: React.CSSProperties;
}

export interface ActionButton {
  icon: ReactNode;
  tooltip?: string;
  onClick: () => void;
}
