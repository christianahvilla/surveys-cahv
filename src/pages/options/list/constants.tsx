import { Image } from '@nextui-org/react';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { IOptionsDTO } from '~types/options/options-list-object';

export const OPTIONS_TITLE = 'Opciones';

export const TABLE_HEADER: Array<ColDef> = [
  {
    headerName: 'Nombre',
    field: 'name',
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
    headerName: 'Texto',
    field: 'text',
    type: 'text',
    filter: true,
    sortable: true,
    cellDataType: 'text',
    cellStyle: {
      display: 'flex',
      justifyContent: 'left',
    },
  },
  {
    headerName: 'Imágen',
    field: 'img',
    type: 'text',
    filter: true,
    sortable: true,
    cellDataType: 'text',
    cellStyle: {
      display: 'flex',
    },
    cellRenderer: (column: ICellRendererParams) => {
      const { data } = column;
      const { img } = data as IOptionsDTO;

      if (!img) {
        return <p>-</p>;
      }

      return (
        <Image
          className='cursor-pointer h-ful'
          src={img}
          width={200}
          height={200}
          onClick={() => window.open(img, '_blank')}
        />
      );
    },
  },
  // {
  //   field: 'Acciones',
  //   suppressMenu: false,
  //   suppressMovable: false,
  //   cellRenderer: (column: ICellRendererParams) => {
  //     const { data } = column;
  //     const { id } = data as IUserDTO;

  //     return (
  //       <div className='flex h-full space-x-4 justify-center items-center'>
  //         <Link className='text-sky-500' to={`/options/${id}`}>
  //           <svg
  //             xmlns='http://www.w3.org/2000/svg'
  //             fill='none'
  //             viewBox='0 0 24 24'
  //             strokeWidth={1.5}
  //             stroke='currentColor'
  //             className='w-6 h-6'
  //           >
  //             <path
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
  //             />
  //           </svg>
  //         </Link>
  //       </div>
  //     );
  //   },
  // },
];
