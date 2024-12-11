import { LuLayoutGrid } from 'react-icons/lu';

function LayoutIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <LuLayoutGrid
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default LayoutIcon;
