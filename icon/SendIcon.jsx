import { RiSendPlane2Line } from 'react-icons/ri';

function SendIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <RiSendPlane2Line
        className={` text-secondary duration-300  text-xl ${iconClass}`}
      />
    </div>
  );
}

export default SendIcon;
