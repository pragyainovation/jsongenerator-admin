import { IoClose } from 'react-icons/io5';

function CloseIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <IoClose className={` text-secondary duration-300  text-xl ${iconClass}`} />
    </div>
  );
}

export default CloseIcon;
