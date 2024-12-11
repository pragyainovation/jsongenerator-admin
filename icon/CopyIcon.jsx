import { MdContentCopy } from 'react-icons/md';

function CopyIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <MdContentCopy
        className={` text-secondary duration-300  text-xl ${iconClass}`}
      />
    </div>
  );
}

export default CopyIcon;
