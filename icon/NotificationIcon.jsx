import { HiOutlineBell } from 'react-icons/hi';

function NotificationIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <HiOutlineBell
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default NotificationIcon;
