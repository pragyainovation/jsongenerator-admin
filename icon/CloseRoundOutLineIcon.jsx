import { IoMdCloseCircleOutline } from 'react-icons/io';

function CloseRoundOutLineIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <IoMdCloseCircleOutline
        className={` text-secondary duration-300  text-xl ${iconClass}`}
      />
    </div>
  );
}

export default CloseRoundOutLineIcon;
