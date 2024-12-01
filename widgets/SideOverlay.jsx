import CloseIcon from '@/icon/CloseIcon';
import Button from './button/Button';
import classNames from 'classnames';

const SideOverlay = ({ isOpen, onClose, children, title, className }) => {
  return (
    <>
      {/* Overlay */}
      <div className={`fixed inset-0 z-10 transition-opacity bg-black ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>

      {/* Side Panel */}
      <div className={classNames('fixed top-0 right-0 h-full w-full sm:w-80 p-2 grid grid-rows-[auto_1fr] overflow-hidden bg-white shadow-lg z-20 transform transition-transform',
          {'translate-x-0' : isOpen},
          {'translate-x-full': !isOpen},
          className
         )}>
        {/* Header */}
        <div className="h-10 border-b border-b-gray4 flex w-full bg-white items-center justify-between">
          <h2 className="">{title}</h2>
          <Button noClass icon={<CloseIcon />} onClick={onClose} />
        </div>

        {/* Content */}
        <div className="h-full w-full overflow-hidden pt-2">{children}</div>
      </div>
    </>
  );
};

export default SideOverlay;
