import { loaderHandler } from '@/utils/helper';
import SimpleLoader from '@/widgets/loader/SimpleLoader';

function LoaderWarpper({ isLoading, children }) {
  return (
    <>
      {loaderHandler(isLoading) && <SimpleLoader isAbsoulte text={'loading...'} className="flex gap-2 items-center" />}
      {children}
    </>
  );
}

export default LoaderWarpper;
