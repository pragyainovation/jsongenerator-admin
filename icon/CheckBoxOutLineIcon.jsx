import { MdCheckBoxOutlineBlank } from 'react-icons/md';

function CheckBoxOutLineIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <MdCheckBoxOutlineBlank className={` text-secondary duration-300  text-2xl ${iconClass}`} />
    </div>
  );
}

export default CheckBoxOutLineIcon;
