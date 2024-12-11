import ReactPaginate from 'react-paginate';
import RightArrowIcon from '@/icon/RightArrowIcon';
import LeftArrowIcon from '@/icon/LeftArrowIcon';
import { useSelector } from 'react-redux';
import { SLICE_NAME } from '@/constant/common/sliceName';
import classNames from 'classnames';
import { useState } from 'react';
import SimpleDropdown from './dropdown/SimpleDropdown';

const Pagination = ({
  pageIndex,
  pageCount,
  onPageChange,
  isPageCount = true,
  isPageSelector = true,
}) => {
  const isDark = useSelector((state) => state[SLICE_NAME.THEME].isDark);

  const [currentPage, setCurrentPage] = useState(pageIndex);

  const handlePageClick = (data) => {
    onPageChange({ page: data.selected });
    setCurrentPage(data.selected);
  };

  const Options = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
  ];

  return (
    <div className="flex items-center justify-between mt-1 gap-2 w-full">
      <div className="flex gap-2 items-center">
        {isPageSelector && (
          <SimpleDropdown
            defaultValue={Options[1]}
            onChange={(e) => onPageChange({ pageSelector: e.value })}
            isClearable={false}
            options={Options}
          />
        )}
        {isPageCount && (
          <span className="shrink-0">
            Page <strong>{currentPage + 1}</strong> of{' '}
            <strong>{pageCount}</strong>
          </span>
        )}
      </div>

      <ReactPaginate
        previousLabel={
          <LeftArrowIcon
            iconClass={classNames({
              '!cursor-not-allowed !hover:text-red-400': currentPage === 0,
            })}
          />
        }
        nextLabel={
          <RightArrowIcon
            iconClass={classNames('!hover:text-secondary', {
              '!cursor-not-allowed': currentPage + 1 === pageCount,
            })}
          />
        }
        breakLabel="..."
        pageCount={pageCount}
        forcePage={pageIndex}
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="flex items-center gap-2"
        pageClassName="group"
        previousClassName={classNames('group', {
          'opacity-50 cursor-not-allowed': currentPage === 0,
        })}
        nextClassName="group"
        disabledClassName="opacity-50 cursor-not-allowed"
        activeClassName={classNames('text-white py-2 px-3 rounded', {
          'border-2 border-primary': isDark,
          'bg-secondary': !isDark,
        })}
      />
    </div>
  );
};

export default Pagination;
