import { ColDef } from 'ag-grid-community';

export const ANSWERS_TITLE = 'Respuestas';

export const TABLE_HEADER: Array<ColDef> = [
  {
    headerName: 'Encuesta',
    field: 'survey',
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
    headerName: 'Pregunta',
    field: 'question',
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
    headerName: 'Respuesta',
    field: 'response',
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
    headerName: 'Nombre del encuestado',
    field: 'surveyedName',
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
    headerName: 'Apellido Paterno',
    field: 'lastName',
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
    headerName: 'Apellido Materno',
    field: 'secondLastName',
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
    headerName: 'Teléfono',
    field: 'phone',
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
    headerName: 'Correo',
    field: 'email',
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
    headerName: 'Género',
    field: 'gender',
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
    headerName: 'Edad',
    field: 'old',
    type: 'numericColumn',
    filter: true,
    sortable: true,
    cellDataType: 'number',
  },
  {
    headerName: 'Dirección',
    field: 'address',
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
