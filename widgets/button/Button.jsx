import { SLICE_NAME } from '@/constant/common/sliceName';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import SimpleLoader from '../loader/SimpleLoader';
import { Tooltip } from 'react-tooltip';

function Button({
  id,
  tooltip,
  text = null,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  onlyOutLine = false,
  icon = null,
  isLoading = false,
  noClass = false,
  ...other
}) {
  const isDark = useSelector((state) => state[SLICE_NAME.THEME].isDark);

  // Use classNames for conditional class names
  const buttonClass = classNames(className, 'capitalize', {
    // Conditionally apply styles based on theme and outline preference
    'duration-200 font-bold  py-2 px-4 italic rounded-lg shadow-md border-2 flex gap-2 items-center justify-center':
      !noClass,
    'bg-transparent hover:bg-secondary border-white':
      onlyOutLine && isDark && !disabled && !noClass,
    'bg-transparent hover:bg-secondary !border-secondary text-white':
      onlyOutLine && !isDark && !disabled && !noClass,
    'bg-secondary hover:bg-primary text-white border-white text-white':
      !onlyOutLine && isDark && !disabled && !noClass,
    'bg-secondary hover:bg-primary text-white text-black border-black':
      !onlyOutLine && !isDark && !disabled && !noClass,
    'cursor-not-allowed bg-light hover:bg-light !text-secondary border-secondary':
      disabled && !noClass,
  });

  return (
    <div className="shrink-0">
      <button
        {...other}
        id={id}
        type={type}
        onClick={onClick}
        className={buttonClass}
        disabled={disabled}
      >
        {isLoading && <SimpleLoader istext={false} color="text-white" />}{' '}
        {icon && icon} {text && text}
      </button>
      {tooltip && id && (
        <Tooltip anchorSelect={`#${id}`} className="z-10" place="top">
          {tooltip}
        </Tooltip>
      )}
    </div>
  );
}

export default Button;
