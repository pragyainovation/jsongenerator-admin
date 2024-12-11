// import { useRef, useState } from 'react';
// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import InputField from '../inputField/InputField';
// import classNames from 'classnames';
// import useOutsideClick from '@/utils/useOutsideClick';
// import { formatDate } from '@/utils/timeFunction';
// import MOMENT_FORMATS from '@/constant/common/momentConstant';
// import CloseIcon from '@/icon/CloseIcon';
// import Button from '../button/Button';

// function CustomDatePicker({ label, isRequired, error, isDateRange = false, minDate, maxDate, startdate, enddate, onChange }) {
//   const [isShow, setShow] = useState(false);
//   const calendarRef = useRef(null);

//   const [date, setDate] = useState('');
//   const [startDate, setStartDate] = useState(startdate);
//   const [endDate, setEndDate] = useState(enddate);

//   const handleSelectRange = (ranges) => {
//     if (isDateRange) {
//       setStartDate(ranges.selection.startDate);
//       setEndDate(ranges.selection.endDate);
//       onChange(ranges.selection);
//     } else {
//       setShow(!isShow);
//       setDate(ranges.selection.startDate);
//       onChange(ranges.selection.startDate);
//     }
//   };

//   const handleClear = () => {
//     setDate('');
//     onChange('');
//   };

//   const selectionRange = {
//     startDate: startDate ?? new Date(),
//     endDate: endDate ?? new Date(),
//     key: 'selection',
//   };

//   useOutsideClick(calendarRef, () => setShow(false), isShow);

//   return (
//     <div className="relative shrink-0" ref={calendarRef}>
//       <div className="flex items-center relative">
//         <InputField
//           isRequired={isRequired}
//           // value={!isDateRange ? date && formatDate(date, MOMENT_FORMATS.DATE_DD_MM_YYYY) : `${startDate ? formatDate(startDate, MOMENT_FORMATS.DATE_DD_MM_YYYY) : ''}  ${endDate ? formatDate(endDate, MOMENT_FORMATS.DATE_DD_MM_YYYY) : ''} `}
//           value={
//             isDateRange
//               ? `${startDate ? formatDate(startDate, MOMENT_FORMATS.DATE_DD_MM_YYYY) : null} ${endDate ? formatDate(endDate, MOMENT_FORMATS.DATE_DD_MM_YYYY) : null}`
//               : date
//               ? formatDate(date, MOMENT_FORMATS.DATE_DD_MM_YYYY)
//               : null
//           }
//           label={label}
//           placeholder="Select date..."
//           error={error}
//           readOnly
//           onClick={() => {
//             setShow(!isShow);
//           }}
//         />
//         {!isRequired && !isDateRange && date !== '' && (
//           <div className="absolute top-9 right-1 cursor-pointer">
//             <Button noClass icon={<CloseIcon />} onClick={handleClear} />
//           </div>
//         )}
//       </div>

//       {isShow && <DateRange rangeColors={['var(--secondary)']} minDate={minDate} maxDate={maxDate} className={classNames('custom-date-range overflow-hidden border-2 bg-white z-20 rounded-lg border-secondary absolute')} onChange={handleSelectRange} ranges={[selectionRange]} showDateDisplay={isDateRange} />}
//     </div>
//   );
// }

// export default CustomDatePicker;

import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import InputField from '../inputField/InputField';
import classNames from 'classnames';
import useOutsideClick from '@/utils/useOutsideClick';
import { formatDate } from '@/utils/timeFunction';
import MOMENT_FORMATS from '@/constant/common/momentConstant';
import CloseIcon from '@/icon/CloseIcon';
import Button from '../button/Button';

function CustomDatePicker({
  label,
  isRequired,
  error,
  isDateRange = false,
  minDate,
  maxDate,
  dateValue,
  startdate,
  enddate,
  onChange,
}) {
  const [isShow, setShow] = useState(false);
  const calendarRef = useRef(null);

  const [date, setDate] = useState(null);
  const [startDate, setStartDate] = useState(startdate || null);
  const [endDate, setEndDate] = useState(enddate || null);

  useEffect(() => {
    if (isDateRange) {
      setStartDate(startdate);
      setEndDate(enddate);
    } else {
      setDate(dateValue);
    }
  }, [dateValue, startdate, enddate]);

  const handleSelectRange = (ranges) => {
    if (isDateRange) {
      const { startDate: newStartDate, endDate: newEndDate } = ranges.selection;
      setStartDate(newStartDate);
      setEndDate(newEndDate);
      onChange({ startDate: newStartDate, endDate: newEndDate });
    } else {
      const newDate = ranges.selection.startDate;
      setDate(newDate);
      setShow(false);
      onChange(newDate);
    }
  };

  const handleClear = () => {
    if (isDateRange) {
      setStartDate(null);
      setEndDate(null);
      onChange({ startDate: null, endDate: null });
    } else {
      setDate(null);
      onChange(null);
    }
  };

  const selectionRange = {
    startDate: startDate || new Date(),
    endDate: endDate || new Date(),
    key: 'selection',
  };

  useOutsideClick(calendarRef, () => setShow(false), isShow);

  const formattedValue = isDateRange
    ? startDate || endDate
      ? `${startDate ? formatDate(startDate, MOMENT_FORMATS.DATE_DD_MM_YYYY) : ''} - ${endDate ? formatDate(endDate, MOMENT_FORMATS.DATE_DD_MM_YYYY) : ''}`
      : ''
    : date
      ? formatDate(date, MOMENT_FORMATS.DATE_DD_MM_YYYY)
      : '';

  return (
    <div className="relative shrink-0" ref={calendarRef}>
      <div className="flex items-center relative">
        <InputField
          isRequired={isRequired}
          value={formattedValue}
          label={label}
          placeholder="Select date..."
          error={error}
          readOnly
          inputClassName="!bg-white"
          onClick={() => setShow(!isShow)}
        />
        {!isRequired && (isDateRange ? startDate || endDate : date) && (
          <div className="absolute top-9 right-1 cursor-pointer">
            <Button noClass icon={<CloseIcon />} onClick={handleClear} />
          </div>
        )}
      </div>

      {isShow && (
        <DateRange
          rangeColors={['var(--secondary)']}
          minDate={minDate}
          maxDate={maxDate}
          className={classNames(
            'custom-date-range overflow-hidden border-2 bg-white z-20 rounded-lg border-secondary absolute'
          )}
          onChange={handleSelectRange}
          ranges={[selectionRange]}
          showDateDisplay={false} // Turn off default date display
        />
      )}
    </div>
  );
}

export default CustomDatePicker;
