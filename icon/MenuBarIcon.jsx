import { HiOutlineMenu } from 'react-icons/hi';

function MenuBarIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <HiOutlineMenu
        className={` text-secondary duration-300  text-xl ${iconClass}`}
      />
    </div>
  );
}

export default MenuBarIcon;
