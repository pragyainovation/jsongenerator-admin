import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import chroma from 'chroma-js';

function AsyncDropdown({
  loadOptions, // Pass a function to load options
  options = [], // Include options to handle default selection
  isRtl = false,
  label,
  isClearable = true,
  isDisabled = false,
  defaultValue,
  className = 'basic-single',
  classNamePrefix = 'select',
  isDot = false,
  isMulti = false,
  closeMenuOnSelect = true,
  placeholder = 'select...',
  onChange,
  error,
  isRequired,
  ...field
}) {
  const [secondaryColor] = useState('#000'); // Default color as a fallback

  const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',
    ':before': {
      backgroundColor: color,
      borderRadius: '50%',
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

  const customStyle = {
    control: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: 'white',
        border: `1px solid rgba(0,0,0,0.1)`,
        '&:hover': { border: `2px solid ${secondaryColor}` },
        boxShadow: isFocused && 'none',
        borderColor: isFocused && 'none',
        borderRadius: '5px',
      };
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = data?.color ? chroma(data.color) : chroma(secondaryColor);
      const backgroundColor = isDisabled
        ? undefined
        : isSelected
          ? color.css()
          : isFocused
            ? color.alpha(0.1).css()
            : undefined;

      const textColor = isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : color.css();

      return {
        ...styles,
        backgroundColor,
        color: textColor,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles, ...(isDot && dot()) }),
    placeholder: (styles) => ({ ...styles, ...(isDot && dot('#ccc')) }),
    singleValue: (styles, { data }) => {
      const color = data?.color ? chroma(data.color) : null;
      return {
        ...styles,
        ...(isDot && color && dot(color.css())), // Use color for the dot if available
        color: color ? color.css() : '#000', // Set the color of the selected value
      };
    },
    ...(isMulti && {
      multiValue: (styles, { data }) => {
        const color = data?.color ? chroma(data.color) : chroma(secondaryColor);
        return {
          ...styles,
          backgroundColor: color.alpha(0.1).css(),
        };
      },
      multiValueLabel: (styles, { data }) => {
        const color = data?.color ? chroma(data.color) : chroma(secondaryColor);
        return {
          ...styles,
          color: color.css(),
        };
      },
      multiValueRemove: (styles, { data }) => {
        const color = data?.color ? chroma(data.color) : chroma(secondaryColor);
        return {
          ...styles,
          color: color.css(),
          ':hover': {
            backgroundColor: data?.color ? color : secondaryColor,
            color: 'white',
          },
        };
      },
    }),
  };

  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label>
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <AsyncSelect
        cacheOptions
        defaultOptions={options}
        loadOptions={loadOptions} // Ensure loadOptions is a function passed in
        className={`text-black ${className}`}
        classNamePrefix={classNamePrefix}
        defaultValue={
          defaultValue ? defaultValue : options.length > 0 ? options[0] : null
        }
        isDisabled={isDisabled}
        isClearable={isClearable}
        isRtl={isRtl}
        styles={customStyle}
        isMulti={isMulti}
        onChange={onChange}
        closeMenuOnSelect={closeMenuOnSelect}
        placeholder={placeholder}
        menuPlacement="auto"
        {...field}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error?.message ?? error?.[field?.name]?.message}
        </p>
      )}
    </div>
  );
}

export default AsyncDropdown;
