import { HiDownload } from 'react-icons/hi';

function DownloadIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <HiDownload className={` text-secondary duration-300  text-2xl ${iconClass}`} />
    </div>
  );
}

export default DownloadIcon;
