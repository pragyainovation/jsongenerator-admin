import { useTable, usePagination } from 'react-table';
import Pagination from '../Pagination';
import SkeletonWrapper from '@/shared/SkeletonWrapper';
import ListSkeleton from '../loader/ListSkeleton';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { SLICE_NAME } from '@/constant/common/sliceName';

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageCount, // Automatically calculated from data length
    gotoPage, // Allows direct page navigation
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Starting page index
      manualPagination: false, // Disable server-side pagination
      pageSize: 10, // Adjust as needed
    },
    usePagination
  );

  const rowAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  const isDark = useSelector((state) => state[SLICE_NAME.THEME].isDark);

  return (
    <>
      <div className="border border-gray5 rounded-md overflow-hidden w-full">
        <table {...getTableProps()} className={classNames('w-full border-collapse')}>
          <thead>
            {headerGroups.map((headerGroup, theadIndex) => {
              const { key, ...headerProps } = headerGroup.getHeaderGroupProps(); // Destructure key here
              return (
                <tr key={`${theadIndex}-${key}`} {...headerProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...columnProps } = column.getHeaderProps(); // Destructure key here
                    return (
                      <th
                        key={key} // Directly assign 'key' to <th>
                        {...columnProps} // Spread the rest of the column props
                        className="border-gray5 p-2 bg-secondary text-white"
                        style={{ width: column.width }}
                      >
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
              const isLastRow = tbodyIndex === page.length - 1;
              const { key, ...rowProps } = row.getRowProps(); // Destructure key here

              return (
                <motion.tr
                  key={`${tbodyIndex}-${key}`} // Directly assign 'key' to <motion.tr>
                  {...rowProps}
                  initial="hidden"
                  animate="visible"
                  variants={rowAnimation}
                  className={classNames('hover:bg-gray5 duration-500', {
                    'hover:text-black': isDark,
                  })}
                  transition={{ duration: 0.2, delay: tbodyIndex * 0.05 }} // Staggered row animation
                >
                  {row.cells.map((cell, tbodyTrIndex) => {
                    const isFirstColumn = tbodyTrIndex === 0;
                    const isLastColumn = tbodyTrIndex === row.cells.length - 1;
                    const { key, ...cellProps } = cell.getCellProps(); // Destructure key here
                    return (
                      <motion.td
                        key={`${tbodyTrIndex}-${key}`} // Directly assign 'key' to <motion.td>
                        {...cellProps}
                        className={classNames('border border-gray5 p-2', { 'border-b-0': isLastRow }, { 'border-l-0': isFirstColumn }, { 'border-r-0': isLastColumn })}
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
      <SkeletonWrapper data={pageCount} content={<ListSkeleton listCount={1} />}>
        <Pagination pageIndex={pageIndex} pageCount={pageCount} onPageChange={gotoPage} canPreviousPage={canPreviousPage} canNextPage={canNextPage} nextPage={nextPage} previousPage={previousPage} />
      </SkeletonWrapper>
    </>
  );
};

export default DataTable;
