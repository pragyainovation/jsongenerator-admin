import { formatDate } from '@/utils/timeFunction';
import Button from '@/widgets/button/Button';
import CustomDatePicker from '@/widgets/date/CustomDatePicker';
import { Controller, useForm } from 'react-hook-form';

function ApiAnalyticsFilter({ handleFilter, onClose }) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {},
  });

  const onSubmit = (value) => {
    const filter = [
      {
        searchColumns: 'lastAccessed',
        type: 'date',
        startDate: value?.date?.startDate,
        endDate: value?.date?.endDate,
      },
    ];
    handleFilter(filter);
    onClose();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-[1fr_auto] h-full w-full">
      <div className="overflow-y-auto custom-scrollbar h-full w-full flex flex-col gap-2 p-1">
        {/* Date Range Picker */}
        <Controller
          control={control}
          name="date"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <CustomDatePicker
              isDateRange
              error={error?.message}
              label="Last Accessed"
              startdate={value?.startDate}
              enddate={value?.endDate}
              onChange={(e) => {
                if (e?.startDate && e?.endDate) {
                  onChange({
                    startDate: formatDate(e.startDate),
                    endDate: formatDate(e.endDate),
                  });
                } else {
                  onChange(null);
                }
              }}
            />
          )}
        />
      </div>

      <div className="flex justify-end flex-col gap-2 sm:flex-row border-t py-2 w-full">
        <Button text="reset" onClick={handleReset} className="w-full" />
        <Button text="filter" type="submit" className="w-full" />
      </div>
    </form>
  );
}

export default ApiAnalyticsFilter;
