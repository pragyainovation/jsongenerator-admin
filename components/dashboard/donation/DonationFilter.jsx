import currencyOptions from '@/utils/currencyOption/currencyOptions';
import { OPTIONS } from '@/utils/options/commonOptions';
import { formatDate } from '@/utils/timeFunction';
import Button from '@/widgets/button/Button';
import CustomDatePicker from '@/widgets/date/CustomDatePicker';
import SimpleDropdown from '@/widgets/dropdown/SimpleDropdown';
import InputField from '@/widgets/inputField/InputField';
import { Controller, useForm } from 'react-hook-form';

function DonationFilter({ handleFilter, onClose }) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {},
  });

  const onSubmit = (value) => {
    const filter = [
      {
        searchColumns: 'currency',
        type: 'string',
        search: value?.currency?.value,
      },
      {
        searchColumns: 'paymentStatus',
        type: 'string',
        search: value?.status?.value,
      },
      {
        searchColumns: 'createdAt',
        type: 'date',
        startDate: value?.date?.startDate,
        endDate: value?.date?.endDate,
      },
      {
        searchColumns: 'paymentAmount',
        type: 'number',
        startValue: value?.amountRange?.startPrice,
        endValue: value?.amountRange?.endPrice,
      },
    ];
    handleFilter(filter);
    onClose();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-rows-[1fr_auto] h-full w-full"
    >
      <div className="overflow-y-auto custom-scrollbar h-full w-full flex flex-col gap-2 p-1">
        {/* Currency Dropdown */}
        <Controller
          control={control}
          name="currency"
          render={({ field, fieldState: { error } }) => (
            <SimpleDropdown
              {...field}
              label="Currency"
              options={currencyOptions}
              error={error?.message}
              isClearable={false}
              value={field.value || null}
              placeholder="Select currency..."
            />
          )}
        />

        {/* Status Dropdown */}
        <Controller
          control={control}
          name="status"
          render={({ field, fieldState: { error } }) => (
            <SimpleDropdown
              {...field}
              label="Status"
              options={OPTIONS.PAYMENT_STATUS}
              error={error?.message}
              isClearable={false}
              value={field.value || null}
              placeholder="Select status..."
            />
          )}
        />

        {/* Date Range Picker */}
        <Controller
          control={control}
          name="date"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <CustomDatePicker
              isDateRange
              error={error?.message}
              label="Date"
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

        {/* Amount Range Inputs */}
        <Controller
          control={control}
          name="amountRange"
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <div>
                <div className="flex gap-2">
                  <InputField
                    value={value?.startPrice || ''}
                    onChange={(e) =>
                      onChange({ ...value, startPrice: e.target.value })
                    }
                    type="number"
                    label="Start Price"
                    placeholder="Enter start price..."
                  />
                  <InputField
                    value={value?.endPrice || ''}
                    onChange={(e) =>
                      onChange({ ...value, endPrice: e.target.value })
                    }
                    type="number"
                    label="End Price"
                    placeholder="Enter end price..."
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-2">{error?.message}</p>
                )}
              </div>
            );
          }}
          rules={{
            validate: (values) => {
              const { startPrice, endPrice } = values || {};
              if (endPrice && Number(startPrice) > Number(endPrice)) {
                return 'Start price must not exceed end price.';
              }
              return true;
            },
          }}
        />
      </div>

      <div className="flex justify-end flex-col gap-2 sm:flex-row border-t py-2 w-full">
        <Button text="reset" onClick={handleReset} className="w-full" />
        <Button text="filter" type="submit" className="w-full" />
      </div>
    </form>
  );
}

export default DonationFilter;
