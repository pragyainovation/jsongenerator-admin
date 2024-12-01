import { MdContentPaste } from 'react-icons/md';

function PasteIcon({ iconClass = '', outerClass = '' }) {
  return (
    <div className={`${outerClass}`}>
      <MdContentPaste className={` text-secondary duration-300  text-xl ${iconClass}`} />
    </div>
  );
}

export default PasteIcon;
