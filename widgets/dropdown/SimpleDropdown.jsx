import { useState } from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';

function SimpleDropdown({
  name,
  options = [],
  isRtl = false,
  label,
  isSearchable = true,
  isClearable = true,
  isDisabled = false,
  className = 'basic-single',
  classNamePrefix = 'select',
  isDot = false,
  ismulti = false,
  defaultValue,
  closemenuonselect = true,
  placeholder = 'select...',
  onChange,
  error,
  isRequired,
  ...field
}) {
  const [secondaryColor] = useState('#000');
  // const [hasMounted, setHasMounted] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const color = getComputedStyle(document.documentElement).getPropertyValue(
  //       '--secondary'
  //     );
  //     setSecondaryColor(color);
  //     setHasMounted(true);
  //   }
  // }, []);

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
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: 'white',
      border: `1px solid rgba(0,0,0,0.1)`,
      '&:hover': { border: `2px solid ${secondaryColor}` },
      boxShadow: isFocused && 'none',
      borderColor: isFocused && 'none',
      borderRadius: '5px',
    }),
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
    ...(ismulti && {
      multiValue: (styles, { data }) => {
        const color = data?.color ? chroma(data.color) : chroma(secondaryColor);
        return { ...styles, backgroundColor: color.alpha(0.1).css() };
      },
      multiValueLabel: (styles, { data }) => {
        const color = data?.color ? chroma(data.color) : chroma(secondaryColor);
        return { ...styles, color };
      },
      multiValueRemove: (styles, { data }) => {
        const color = data?.color ? chroma(data.color) : chroma(secondaryColor);
        return {
          ...styles,
          color,
          ':hover': {
            backgroundColor: data?.color ? color : secondaryColor,
            color: 'white',
          },
        };
      },
    }),
  };

  // if (!hasMounted) {
  //   return null;
  // }

  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label>
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <Select
        className={`text-black w-full  ${className}`}
        classNamePrefix={classNamePrefix}
        defaultValue={
          defaultValue ? defaultValue : options.length > 0 ? options[0] : null
        }
        isDisabled={isDisabled}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name={name}
        options={options}
        styles={customStyle}
        isMulti={ismulti}
        onChange={onChange}
        closeMenuOnSelect={closemenuonselect}
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

export default SimpleDropdown;
