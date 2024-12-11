import { MdOutlineIndeterminateCheckBox } from 'react-icons/md';

function CheckDeterminateBoxIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <MdOutlineIndeterminateCheckBox
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default CheckDeterminateBoxIcon;
