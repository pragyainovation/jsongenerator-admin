import { IoCheckmarkDone } from 'react-icons/io5';

function DoubleCheckIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <IoCheckmarkDone className={` text-secondary duration-300  text-xl ${iconClass}`} />
    </div>
  );
}

export default DoubleCheckIcon;
