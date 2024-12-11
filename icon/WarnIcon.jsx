import { GrStatusWarning } from 'react-icons/gr';

function WarnIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <GrStatusWarning
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default WarnIcon;
