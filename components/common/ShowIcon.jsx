import CalendarIcon from '@/icon/CalendarIcon';
import CheckBoxOutLineIcon from '@/icon/CheckBoxOutLineIcon';
import CheckDeterminateBoxIcon from '@/icon/CheckDeterminateBoxIcon';
import CheckedBoxIcon from '@/icon/CheckedBoxIcon';
import CheckedRoundIcon from '@/icon/CheckedRoundIcon';
import CheckRoundOutLineIcon from '@/icon/CheckRoundOutLineIcon';
import Deleteicon from '@/icon/Deleteicon';
import DownloadIcon from '@/icon/DownloadIcon';
import EditIcon from '@/icon/EditIcon';
import ErrorIcon from '@/icon/ErrorIcon';
import HelpIcon from '@/icon/HelpIcon';
import InfoIcon from '@/icon/InfoIcon';
import LayoutIcon from '@/icon/LayoutIcon';
import LeftArrowIcon from '@/icon/LeftArrowIcon';
import MinusIcon from '@/icon/MinusIcon';
import NotificationIcon from '@/icon/NotificationIcon';
import PlusIcon from '@/icon/PlusIcon';
import RightArrowIcon from '@/icon/RightArrowIcon';
import SchemaIcon from '@/icon/SchemaIcon';
import SettingIcon from '@/icon/SettingIcon';
import SortIcon from '@/icon/SortIcon';
import TableIcon from '@/icon/TableIcon';
import UserIcon from '@/icon/UserIcon';
import WarnIcon from '@/icon/WarnIcon';

function ShowIcons() {
  return (
    <div className="flex justify-center items-center h-screen w-screen gap-2">
      <div className="w-1/2 border p-2 flex gap-2 flex-wrap items-center">
        <CalendarIcon />
        <CheckedBoxIcon />
        <CheckDeterminateBoxIcon />
        <CheckBoxOutLineIcon />
        <CheckedRoundIcon />
        <CheckRoundOutLineIcon />
        <Deleteicon />
        <DownloadIcon />
        <EditIcon />
        <ErrorIcon />
        <HelpIcon />
        <InfoIcon />
        <LayoutIcon />
        <MinusIcon />
        <NotificationIcon />
        <PlusIcon />
        <RightArrowIcon />
        <LeftArrowIcon />
        <SchemaIcon />
        <SettingIcon />
        <SortIcon />
        <TableIcon />
        <UserIcon />
        <WarnIcon />
      </div>
    </div>
  );
}

export default ShowIcons;
