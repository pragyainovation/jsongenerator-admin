import { BUTTON } from '@/constant/common/constant';
import useTicket from '@/hooks/tickets/useTicket';
import LoaderWarpper from '@/shared/LoaderWarpper';
import { loaderHandler } from '@/utils/helper';
import Button from '@/widgets/button/Button';
import InputField from '@/widgets/inputField/InputField';
import TextAreaField from '@/widgets/inputField/TextAreaField';
import { Controller } from 'react-hook-form';

function TicketForm({ openOverlay, setOpenOverlay }) {
  const { isLoading, onSubmit, control, handleSubmit } = useTicket({ openOverlay, setOpenOverlay });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-[1fr_auto] h-full w-full">
      <LoaderWarpper isLoading={isLoading}>
        <div className="overflow-y-auto custom-scrollbar h-full w-full flex flex-col gap-2 p-1">
          {/* Email Field */}
          <Controller name="subject" control={control} render={({ field, fieldState: { error } }) => <InputField {...field} isRequired readOnly label="subject" placeholder="Enter subject..." error={error} />} />

          {/* Username Field */}
          <Controller name="description" control={control} render={({ field, fieldState: { error } }) => <TextAreaField {...field} isRequired readOnly={openOverlay === BUTTON.VIEW} label="description" placeholder="Enter description..." error={error} />} />

          {/* Full Name Field */}
          <Controller
            name="closedReason"
            control={control}
            render={({ field, fieldState: { error } }) => {
              return <TextAreaField {...field} isRequired readOnly={openOverlay === BUTTON.VIEW} label="closedReason" placeholder="Enter closedReason..." error={error} />;
            }}
          />
        </div>
        <div className="flex justify-end flex-col gap-2 sm:flex-row border-t py-2 w-full">{openOverlay === BUTTON.CLOSE && <Button text={'Close Ticket'} type="submit" isLoading={loaderHandler(isLoading)} disabled={loaderHandler(isLoading)} className="w-full" />}</div>
      </LoaderWarpper>
    </form>
  );
}
export default TicketForm;
