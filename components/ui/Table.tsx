import { TableProps } from '@/lib/types';

const Table = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <table className='flex-1'>
      <thead>
        <tr className='border-t border-t-(--gray-50) py-3 px-4 grid grid-cols-4 w-full!'>
          {columns.map((column) => (
            <th key={column.key as string} className='text-(--gray-600) text-[14px] font-medium col-span-1 text-start'>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody className='overflow-y-auto'>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className='py-5 px-4 grid grid-cols-4 border-t border-t-(--gray-50)'>
            {columns.map((col) => (
              <td key={col.key as string} className='text-start col-span-1 font-medium text-(--table-cell)'>{col.key === "price" && "$"}{String(row[col.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
