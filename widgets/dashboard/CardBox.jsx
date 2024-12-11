import ViewIcon from '@/icon/ViewIcon';
import MotionWrapper from '@/shared/MotionWrapper';

function CardBox({
  icon = <ViewIcon />,
  count = 10,
  label = 'Total view',
  percentage = null,
}) {
  return (
    <MotionWrapper className={'p-2 bg-gray5 border'}>
      <div className="flex justify-between">
        <div className="h-10 bg-white rounded-full flex justify-center items-center aspect-square bg-gray">
          {icon}
        </div>
      </div>
      <div className="mt-3 p-1">
        <h1 className="text-3xl font-bold">{count}</h1>
        <div className="flex justify-between">
          <span>{label}</span>
          {percentage && <span>{percentage}%</span>}
        </div>
      </div>
    </MotionWrapper>
  );
}

export default CardBox;
