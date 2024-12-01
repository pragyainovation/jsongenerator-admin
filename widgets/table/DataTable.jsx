import { useTable, usePagination } from 'react-table';
import Pagination from '../Pagination';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { SLICE_NAME } from '@/constant/common/sliceName';
import { TABLE_DEFAULT_LIMIT } from '@/constant/common/constant';

const DataTable = ({ columns, data: response, onPageChange }) => {
  const data = response?.docs || [];

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: TABLE_DEFAULT_LIMIT },
      manualPagination: true,
      pageSize: response?.limit ?? TABLE_DEFAULT_LIMIT,
    },
    usePagination
  );

  const rowAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const isDark = useSelector((state) => state[SLICE_NAME.THEME].isDark);

  if (!response?.docs?.length) {
    return <div className="p-4 text-center text-gray-500">No data available.</div>;
  }

  return (
    <div className="h-full w-full overflow-y-auto scrollbar-hide">
      <div className="w-full h-full grid grid-rows-[1fr_auto] overflow-hidden">
        <div className="overflow-y-auto scrollbar-hide">
          <div className="overflow-auto scrollbar-hide border border-gray5 rounded-md w-full h-full">
            <table {...getTableProps()} className={classNames('w-full border-collapse text-sm md:text-base', 'min-w-[500px] sm:min-w-full')}>
              {/* Sticky Header */}
              <thead className="sticky top-0 z-10 bg-secondary">
                {headerGroups.map((headerGroup, theadIndex) => {
                  const { key, ...headerProps } = headerGroup.getHeaderGroupProps();
                  return (
                    <tr key={`${theadIndex}-${key}`} {...headerProps} className="bg-secondary text-white">
                      {headerGroup.headers.map((column) => {
                        const { key, ...columnProps } = column.getHeaderProps();
                        return (
                          <th key={key} {...columnProps} className="border-gray5 p-2 text-left whitespace-nowrap" style={{ width: column.width }}>
                            {column.render('Header')}
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, tbodyIndex) => {
                  prepareRow(row);
                  const { key, ...rowProps } = row.getRowProps();

                  return (
                    <motion.tr key={`${tbodyIndex}-${key}`} {...rowProps} initial="hidden" animate="visible" variants={rowAnimation} className={classNames('hover:bg-gray5 duration-500', { 'hover:text-black': isDark }, 'even:bg-gray-100')} transition={{ duration: 0.2, delay: tbodyIndex * 0.05 }}>
                      {row.cells.map((cell, tbodyTrIndex) => {
                        const isFirstColumn = tbodyTrIndex === 0;
                        const isLastColumn = tbodyTrIndex === row.cells.length - 1;
                        const { key, ...cellProps } = cell.getCellProps();
                        return (
                          <motion.td
                            key={`${tbodyTrIndex}-${key}`}
                            {...cellProps}
                            className={classNames(
                              'border border-gray5 p-2',
                              {
                                'border-l-0': isFirstColumn,
                                'border-r-0': isLastColumn,
                              },
                              'whitespace-nowrap text-ellipsis overflow-hidden'
                            )}
                          >
                            {cell.render('Cell')}
                          </motion.td>
                        );
                      })}
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-1">
          <Pagination pageIndex={response?.page - 1} pageCount={response?.totalPages} onPageChange={onPageChange} />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
