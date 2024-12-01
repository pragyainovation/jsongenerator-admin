import { FaRegCheckSquare } from 'react-icons/fa';

function CheckedBoxIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <FaRegCheckSquare className={` text-secondary duration-300  text-xl ${iconClass}`} />
    </div>
  );
}

export default CheckedBoxIcon;
