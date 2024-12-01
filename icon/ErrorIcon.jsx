import { MdOutlineErrorOutline } from 'react-icons/md';

function ErrorIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <MdOutlineErrorOutline className={` text-secondary duration-300  text-2xl ${iconClass}`} />
    </div>
  );
}

export default ErrorIcon;
