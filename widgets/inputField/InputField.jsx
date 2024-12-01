import classNames from 'classnames';
import ThreeDotLoader from '../loader/ThreeDotLoader';
import { handleKeyDown } from '@/utils/helper';
import PasteIcon from '@/icon/PasteIcon';
import CopyIcon from '@/icon/CopyIcon';
import { useState } from 'react';
import DoubleCheckIcon from '@/icon/DoubleCheckIcon';
import Button from '../button/Button';

const InputField = ({
  id,
  label,
  type = 'text',
  readOnly = false,
  placeholder = 'Enter value...',
  error = null,
  onFocus,
  isRequired = false,
  isLoading,
  onChange,
  inputClassName = '', // Added a default value for dynamic input class names
  onClick,
  handleCopy,
  isCopy = false,
  isPaste = false,
  ...field
}) => {
  const [isCopied, setCopied] = useState(false);
  const handlePaste = async () => {
    const copiedData = await navigator.clipboard.readText();
    if (copiedData) {
      field?.onChange(copiedData);
    }
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className='capitalize'>
        {label && label}
        {label && isRequired && <span className="text-red-500">*</span>}
      </label>

      <div className="w-full">
        <button type="button" className="flex items-center w-full relative" onClick={onClick} aria-label="Click to interact" onKeyDown={(e) => handleKeyDown(onClick, e)}>
          <input
            {...field}
            id={id}
            type={type}
            readOnly={readOnly}
            onFocus={onFocus}
            placeholder={placeholder}
            onChange={onChange}
            className={classNames(
              'w-full px-2 py-1 rounded border transition-colors duration-300 italic',
              'focus:outline-none focus:ring-[1px] focus:ring-secondary focus:border-secondary',
              'border-gray5 text-gray1 bg-white shadow-sm',
              {'!bg-gray5': readOnly},
              inputClassName, // Use dynamic class passed in inputClassName
              {
                'pr-14': isLoading, // Add right padding if the loader is present
                'border-red-500': error?.message ?? error?.[field?.name]?.message, // Highlight border on error
              }
            )}
          />
          {(isCopy || isPaste) && (
            <div className="absolute inset-y-0 right-2 top-2 flex items-center">
              {isPaste && <Button noClass icon={<PasteIcon />} onClick={handlePaste} />}
              {isCopy && !isCopied && (
                <Button
                  noClass
                  icon={<CopyIcon />}
                  onClick={() => {
                    handleCopy();
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 2000);
                  }}
                />
              )}
              {isCopy && isCopied && <Button noClass icon={<DoubleCheckIcon />} />}
            </div>
          )}
          {isLoading && (
            <div className="absolute inset-y-0 right-2 flex items-center">
              <ThreeDotLoader />
            </div>
          )}
        </button>

        {error && <p className="mt-1 text-xs text-red-500">{error?.message ?? error?.[field?.name]?.message}</p>}
      </div>
    </div>
  );
};

export default InputField;
