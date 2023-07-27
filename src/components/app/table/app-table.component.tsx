import { ColDef, FirstDataRenderedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

interface ITableElement {
  columnDefs: ColDef[];
  rowData: Array<any>;
}

export const TableElement = ({ columnDefs, rowData }: ITableElement) => {
  return (
    <div className='ag-theme-material' style={{ height: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          resizable: true,
          lockPinned: true,
          flex: 1,
          minWidth: 180,
        }}
        paginationPageSize={10}
        pagination={true}
        onFirstDataRendered={(params: FirstDataRenderedEvent) => {
          params.api.sizeColumnsToFit();
        }}
        onGridSizeChanged={(event) => {
          event.api.sizeColumnsToFit();
        }}
      />
    </div>
  );
};
