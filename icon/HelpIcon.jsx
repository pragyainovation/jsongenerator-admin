import { TbHelpCircle } from 'react-icons/tb';

function HelpIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <TbHelpCircle
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default HelpIcon;
