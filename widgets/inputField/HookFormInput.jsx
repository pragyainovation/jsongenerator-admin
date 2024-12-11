import classNames from 'classnames';
import { Controller } from 'react-hook-form';

function HookFormInput({
  control,
  name,
  label = null,
  placeholder = 'Type something...',
  type = 'text',
  rules = {},
  defaultValue = '',
  readOnly = false,
  className = '',
  inputClassName = '',
}) {
  return (
    <div className={classNames('w-full mb-4', className)}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700 shrink-0"
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <input
              id={name}
              type={type}
              readOnly={readOnly}
              {...field}
              placeholder={placeholder}
              className={classNames(
                'w-full px-4 py-2 rounded-lg border transition-colors duration-300',
                'focus:outline-none focus:ring-[1px] focus:ring-secondary focus:border-secondary',
                'border-gray5 text-gray1 bg-white shadow-sm',
                inputClassName,
                {
                  'border-red-500': fieldState?.error, // Adds red border on error
                }
              )}
            />
            {fieldState?.error && (
              <p className="mt-1 text-xs text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}

export default HookFormInput;
