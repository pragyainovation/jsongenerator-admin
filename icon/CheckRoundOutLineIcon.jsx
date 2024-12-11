import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';

function CheckRoundOutLineIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <MdOutlineRadioButtonUnchecked
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default CheckRoundOutLineIcon;
