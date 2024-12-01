import { FaRegCheckCircle } from 'react-icons/fa';

function CheckedRoundIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <FaRegCheckCircle className={` text-secondary duration-300  text-xl ${iconClass}`} />
    </div>
  );
}

export default CheckedRoundIcon;
