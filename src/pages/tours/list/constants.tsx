import { ColDef } from 'ag-grid-community';

export const TOURS_TITLE = 'Recorridos';

export const TABLE_HEADER: Array<ColDef> = [
  {
    headerName: 'Estado',
    field: 'state',
    type: 'textColumn',
    filter: true,
    sortable: true,
    cellDataType: 'text',
    cellStyle: {
      display: 'flex',
      justifyContent: 'left',
    },
  },
  {
    headerName: 'Ciudad',
    field: 'city',
    type: 'text',
    wrapText: true,
    autoHeight: true,
    filter: true,
    sortable: true,
    cellDataType: 'text',
    cellStyle: {
      textAlign: 'left',
    },
  },
  {
    headerName: 'Colonia',
    field: 'colony',
    type: 'text',
    wrapText: true,
    autoHeight: true,
    filter: true,
    sortable: true,
    cellDataType: 'text',
    cellStyle: {
      textAlign: 'left',
    },
  },
  {
    headerName: 'Codigo Postal',
    field: 'cp',
    type: 'text',
    wrapText: true,
    autoHeight: true,
    filter: true,
    sortable: true,
    cellDataType: 'text',
    cellStyle: {
      textAlign: 'left',
    },
  },
  {
    headerName: 'Orden',
    field: 'order',
    type: 'text',
    wrapText: true,
    autoHeight: true,
    filter: true,
    sortable: true,
    cellDataType: 'text',
    cellStyle: {
      textAlign: 'left',
    },
  },
  {
    headerName: 'Usuario',
    field: 'user',
    type: 'text',
    wrapText: true,
    autoHeight: true,
    filter: true,
    sortable: true,
    cellDataType: 'text',
    cellStyle: {
      textAlign: 'left',
    },
  },
];
