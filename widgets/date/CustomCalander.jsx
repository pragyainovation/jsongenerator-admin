import { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function CustomCalander() {
  const handleSelect = (date) => {
    setDate(date); // native Date object
  };

  const [date, setDate] = useState(new Date());

  return <Calendar color="var(--secondary)" className="border-2 rounded-lg border-secondary" date={date} onChange={handleSelect} />;
}

export default CustomCalander;
