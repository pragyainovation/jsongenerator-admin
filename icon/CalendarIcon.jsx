import { FaRegCalendar } from 'react-icons/fa';

function CalendarIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <FaRegCalendar className={` text-secondary duration-300  text-xl ${iconClass}`} />
    </div>
  );
}

export default CalendarIcon;
