import { Link } from '@nextui-org/react';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { MapIcon } from '~components/Icons/MapIcon';
import { IPointDataDTO } from '~types/points/points-list-object';

export const POINTS_TITLE = 'Puntos';
const MAP_URL = 'https://www.google.com/maps?q=';

export const TABLE_HEADER: Array<ColDef> = [
  {
    headerName: 'Calle',
    field: 'street',
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
    headerName: 'Recorrido',
    field: 'tour',
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
    type: 'numeric',
    filter: true,
    sortable: true,
    cellDataType: 'numeric',
  },
  {
    headerName: 'Mapa',
    field: 'cords',
    type: 'text',
    wrapText: true,
    autoHeight: true,
    filter: true,
    sortable: true,
    cellDataType: 'text',
    cellStyle: {
      display: 'flex',
    },
    cellRenderer: (column: ICellRendererParams) => {
      const { data } = column;
      const { cords } = data as IPointDataDTO;

      if (!cords) {
        return <p>-</p>;
      }

      return (
        <Link
          onClick={() => window.open(`${MAP_URL}${cords}`, '_blank')}
          className='flex  space-x-4 align-middle cursor-pointer'
        >
          <p>Ver Mapa</p>
          <MapIcon />
        </Link>
      );
    },
  },
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
];
