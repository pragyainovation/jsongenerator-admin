import { IoSettingsOutline } from 'react-icons/io5';

function SettingIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <IoSettingsOutline
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default SettingIcon;
