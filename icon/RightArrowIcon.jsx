import { MdKeyboardArrowRight } from 'react-icons/md';

function RightArrowIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <MdKeyboardArrowRight className={` text-secondary duration-300  text-3xl ${iconClass}`} />
    </div>
  );
}

export default RightArrowIcon;
