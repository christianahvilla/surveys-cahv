import { ColDef, FirstDataRenderedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

interface ITableElement {
  columnDefs: ColDef[];
  rowData: Array<any>;
  currentPage: number;
  handlePagination?: (page: number) => void;
}

export const TableElement = ({
  columnDefs,
  rowData,
  currentPage,
  handlePagination = () => null,
}: ITableElement) => {
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
        paginationPageSize={5}
        pagination={true}
        onFirstDataRendered={(params: FirstDataRenderedEvent) => {
          params.api.sizeColumnsToFit();
        }}
        onGridSizeChanged={(event) => {
          event.api.sizeColumnsToFit();
          event.api.paginationGoToPage(currentPage);
        }}
        onPaginationChanged={(event) => {
          if (event.api.paginationGetCurrentPage() > 0) {
            handlePagination(event.api.paginationGetCurrentPage());
          }
        }}
      />
    </div>
  );
};
