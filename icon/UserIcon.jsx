import { FaRegUser } from 'react-icons/fa';

function UserIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <FaRegUser
        className={` text-secondary duration-300  text-xl ${iconClass}`}
      />
    </div>
  );
}

export default UserIcon;
