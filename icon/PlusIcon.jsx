import { FaPlus } from 'react-icons/fa6';

function PlusIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <FaPlus
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default PlusIcon;
