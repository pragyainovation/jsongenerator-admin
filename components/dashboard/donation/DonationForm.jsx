import useDonation from '@/hooks/donation/useDonation';
import LoaderWarpper from '@/shared/LoaderWarpper';

function RecursiveRenderer({ data }) {
  return (
    <div className="flex flex-col gap-2">
      {Object.entries(data).filter(([key]) => !["_id", "__v"].includes(key)).map(([key, value]) => (
        <div key={key} className="flex flex-col gap-1">
          <span className="font-bold">{key}:</span>
          {typeof value === 'object' && value !== null ? (
            <div className="ml-4 border-l-2 border-gray-300 pl-2">
              <RecursiveRenderer data={value} />
            </div>
          ) : (
            <span className="bg-gray-100 rounded p-1 break-all">{String(value)}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function DonationForm() {
  const { isLoading, data } = useDonation();

  return (
    <form className="grid grid-rows-[1fr_auto] h-full w-full">
      <LoaderWarpper isLoading={isLoading}>
        <div className="overflow-y-auto custom-scrollbar h-full w-full flex flex-col gap-2 p-1">
          {data?.donationData && (
            <RecursiveRenderer data={data.donationData} />
          )}
        </div>
      </LoaderWarpper>
    </form>
  );
}

export default DonationForm;
