import { LuTableProperties } from 'react-icons/lu';

function TableIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <LuTableProperties className={` text-secondary duration-300  text-2xl ${iconClass}`} />
    </div>
  );
}

export default TableIcon;
