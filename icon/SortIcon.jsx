import { BiSort } from 'react-icons/bi';

function SortIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <BiSort className={` text-secondary duration-300  text-2xl ${iconClass}`} />
    </div>
  );
}

export default SortIcon;
