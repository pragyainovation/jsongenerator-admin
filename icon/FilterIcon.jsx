import { RiFilter3Line } from 'react-icons/ri';

function FilterIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <RiFilter3Line className={` text-secondary duration-300  text-xl ${iconClass}`} />
    </div>
  );
}

export default FilterIcon;
