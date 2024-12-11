import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function DateRangePick() {
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <DateRange
      rangeColors={['var(--secondary)']}
      className="border-2 rounded-lg border-secondary overflow-hidden text-black"
      onChange={handleSelect}
      ranges={[selectionRange]}
    />
  );
}

export default DateRangePick;
