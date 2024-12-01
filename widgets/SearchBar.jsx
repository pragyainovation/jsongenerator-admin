import { useEffect, useState } from 'react';
import InputField from './inputField/InputField';
import classNames from 'classnames';
import { useDebounce } from 'use-debounce';

function SearchBar({ placeholder = 'Search...', className = '', onSearchValue }) {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  // Debounce the search call
  const [value] = useDebounce(inputValue, 700);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setTyping(true);
    setLoading(true);
    setInputValue(newValue);
  };

  useEffect(() => {
    if (value !== '' && isTyping) {
      onSearchValue(value);
      setLoading(false);
    } else if (isTyping) {
      onSearchValue(inputValue);
      setLoading(false);
    }
  }, [value]);

  return (
    <div className={classNames(className)}>
      <InputField isLoading={loading} placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

export default SearchBar;
