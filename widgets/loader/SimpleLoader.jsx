import classNames from 'classnames';

function SimpleLoader({
  height = '24', // Default height of 24px
  width = '24', // Default width of 24px
  color = 'text-secondary', // Default color
  speed = 'animate-spin', // Animation speed, 'animate-spin' for default speed
  ariaLabel = 'Loading', // Default ARIA label
  text = null,
  className = 'flex items-center gap-1',
  isAbsoulte = false,
  istext = true,
}) {
  const absoluteLoading = {
    'absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white bg-opacity-50 z-10': isAbsoulte,
  };
  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={classNames(className, {
        ...absoluteLoading,
      })}
    >
      <svg className={classNames(speed, color)} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 2.874 8.166 6.743 9.534l1.257-4.243z" />
      </svg>
      {istext ? 'loading...' : text}
    </div>
  );
}

export default SimpleLoader;
