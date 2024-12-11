import { FaRegSquareMinus } from 'react-icons/fa6';

function MinusIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <FaRegSquareMinus
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default MinusIcon;
