import chroma from 'chroma-js';
import { useEffect, useState } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';

function AsyncCreatableDropdown({ options, loadoptions, isclearable = true, className = 'basic-single', classNamePrefix = 'select', isMulti = false, isRtl = false, isDisabled = false, isDot = false, placeholder = 'select...' }) {
  const [secondaryColor, setSecondaryColor] = useState('#3498db'); // Default color as a fallback
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Only execute if on client side
    if (typeof window !== 'undefined') {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--secondary');
      setSecondaryColor(color || '#3498db'); // Fallback color if CSS variable is not defined
      setHasMounted(true); // Mark as client-side rendered
    }
  }, []);

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
      border: `3px solid ${secondaryColor}`,
      '&:hover': {
        border: `3px solid ${secondaryColor}`,
      },
      boxShadow: isFocused && 'none',
      borderColor: isFocused && 'none',
      borderRadius: '10px',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = data?.color ? chroma(data.color) : chroma(secondaryColor);
      const backgroundColor = isDisabled ? undefined : isSelected ? color.css() : isFocused ? color.alpha(0.1).css() : undefined;

      const textColor = isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : color.css();

      return {
        ...styles,
        backgroundColor,
        color: textColor,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled ? (isSelected ? color : color.alpha(0.3).css()) : undefined,
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

  // Render Select only if component has mounted
  if (!hasMounted) {
    return null;
  }

  return (
    <AsyncCreatableSelect
      cacheOptions
      defaultOptions={options}
      defaultValue={options.length > 0 ? options[0] : null}
      loadOptions={loadoptions}
      isClearable={isclearable}
      className={`text-black ${className}`}
      classNamePrefix={classNamePrefix}
      isMulti={isMulti}
      isRtl={isRtl}
      styles={customStyle}
      isDisabled={isDisabled}
      placeholder={placeholder}
      //   onCreateOption={handleCreate}
    />
  );
}

export default AsyncCreatableDropdown;
