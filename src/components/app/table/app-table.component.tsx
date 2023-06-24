interface ITableElement {
  head: React.JSX.Element[];
  rows: React.JSX.Element[];
}

export const TableElement = ({ head, rows }: ITableElement) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>{head}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
