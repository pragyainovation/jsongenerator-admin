import { MdKeyboardArrowLeft } from 'react-icons/md';

function LeftArrowIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <MdKeyboardArrowLeft className={` text-secondary duration-300  text-3xl ${iconClass}`} />
    </div>
  );
}

export default LeftArrowIcon;
