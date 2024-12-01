import { HiOutlineEye } from 'react-icons/hi';

function ViewIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <HiOutlineEye className={` text-secondary duration-300  text-2xl ${iconClass}`} />
    </div>
  );
}

export default ViewIcon;
