import { toggleTheme } from '@/redux/slice/themeSlice';
import AsyncDropdown from '@/widgets/dropdown/AsyncDropdown';
import Button from '@/widgets/button/Button';
import CheckBox from '@/widgets/CheckBox';
import SimpleDropdown from '@/widgets/dropdown/SimpleDropdown';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncCreatableDropdown from '@/widgets/dropdown/AsyncCreatableDropdown';
import ToggleButton from '@/widgets/button/ToggleButton';
import DataTable from '@/widgets/table/DataTable';
import CustomHeader from '@/widgets/table/CustomCell';
import DateRangePick from '@/widgets/date/DateRangePick';
import CustomCalander from '@/widgets/date/CustomCalander';
import SimpleLoader from '@/widgets/loader/SimpleLoader';
import CustomDatePicker from '@/widgets/date/CustomDatePicker';

function ShowComponent() {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme()); // Dispatch toggle action
  };

  const colorOptions = [
    { value: 'option1', label: 'Option 1', color: 'red' },
    { value: 'option2', label: 'Option 2', color: 'green' },
    { value: 'option3', label: 'Option 3', color: 'yellow' },
  ];

  const Options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' },
    { value: 'option1', label: 'Option 1' },
  ];

  const loadOptions = async (inputValue) => {
    // Simulate a network request
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        const options = [
          { value: 'chocolate', label: 'Chocolate', color: '#c68e17' },
          { value: 'strawberry', label: 'Strawberry', color: '#f69e2e' },
          { value: 'vanilla', label: 'Vanilla', color: '#f3e5ab' },
        ];
        const filteredOptions = options.filter((option) =>
          option.label.toLowerCase().includes(inputValue.trim().toLowerCase())
        );
        resolve(filteredOptions);
      }, 1000); // Simulate a delay
    });

    return response;
  };

  const columns = [
    { Header: 'ID', accessor: 'id', width: '20px' },
    {
      Header: 'Title',
      accessor: 'title',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    { Header: 'Category', accessor: 'category', width: '150px' },
    {
      Header: 'Brand',
      accessor: 'brand',
      Cell: ({ cell }) => {
        return <CustomHeader data={{ value: cell.value }} />;
      },
    },
    { Header: 'Price', accessor: 'price', width: '100px' },
    // { Header: 'Action', accessor: 'action' }
  ];

  const [data, setData] = useState([]);

  // Function to simulate fetching updated row data
  const fetchRowData = async (query) => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setData(data.products || [])); // Ensure to extract the correct data structure
  };

  useEffect(() => {
    fetchRowData(''); // Pass an initial empty query or any default query
  }, []);

  return (
    <>
      <div className="flex p-2 gap-5 items-center">
        <Button onClick={handleToggle} text={'mode change'} />
        <ToggleButton label="click me" />
        <SimpleLoader />
        <CheckBox />
        <div className="w-52">
          <SimpleDropdown isClearable={false} options={Options} />
        </div>
        <div className="w-52">
          <AsyncDropdown loadOptions={loadOptions} options={colorOptions} />
        </div>
        <div className="w-52">
          <AsyncCreatableDropdown options={Options} loadOptions={loadOptions} />
        </div>
      </div>
      <div className="flex p-2 gap-5 items-center w-full flex-col">
        <DataTable columns={columns} data={data && data} />
      </div>
      <div className="flex flex-wrap gap-2 p-4">
        <CustomCalander />
        <DateRangePick />
        <CustomDatePicker />
        <CustomDatePicker isDateRange />
      </div>
    </>
  );
}

export default ShowComponent;
