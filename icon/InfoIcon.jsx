import { IoMdInformationCircleOutline } from 'react-icons/io';

function InfoIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <IoMdInformationCircleOutline
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default InfoIcon;
