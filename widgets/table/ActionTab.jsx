import Button from '../button/Button';
import Deleteicon from '@/icon/Deleteicon';
import EditIcon from '@/icon/EditIcon';
import ViewIcon from '@/icon/ViewIcon';
import DownloadIcon from '@/icon/DownloadIcon';
import PaymentIcon from '@/icon/PaymentIcon';
import CopyIcon from '@/icon/CopyIcon';
import { useState } from 'react';
import DoubleCheckIcon from '@/icon/DoubleCheckIcon';
import CloseIcon from '@/icon/CloseIcon';
import { BUTTON } from '@/constant/common/constant';
import SendIcon from '@/icon/SendIcon';

function ActionTab({
  isView,
  isEdit,
  isDelete,
  isClose,
  isDownload,
  isPayment,
  isCopy,
  isSend,
  onClick,
}) {
  const [isCopied, setCopied] = useState(false);

  return (
    <div className="flex items-center gap-1">
      {isEdit && (
        <Button
          noClass
          onClick={() => onClick(BUTTON.EDIT)}
          tooltip={'Edit'}
          id={BUTTON.EDIT}
          icon={<EditIcon />}
        />
      )}
      {isView && (
        <Button
          noClass
          onClick={() => onClick(BUTTON.VIEW)}
          tooltip={'View'}
          id={BUTTON.VIEW}
          icon={<ViewIcon />}
        />
      )}
      {isDownload && (
        <Button
          noClass
          onClick={() => onClick(BUTTON.DOWNLOAD)}
          tooltip={'Download'}
          id={BUTTON.DOWNLOAD}
          icon={<DownloadIcon />}
        />
      )}
      {isPayment && (
        <Button
          noClass
          onClick={() => onClick(BUTTON.PAYMENT)}
          tooltip={'Manual Payment'}
          id={BUTTON.PAYMENT}
          icon={<PaymentIcon />}
        />
      )}
      {isCopy && (
        <Button
          noClass
          onClick={() => {
            onClick(BUTTON.COPY, setCopied);
          }}
          tooltip={isCopied ? 'Copied' : 'Copy'}
          id={BUTTON.COPY}
          icon={isCopied ? <DoubleCheckIcon /> : <CopyIcon />}
        />
      )}
      {isSend && (
        <Button
          noClass
          onClick={() => onClick(BUTTON.SEND)}
          tooltip={'Send'}
          id={BUTTON.SEND}
          icon={<SendIcon />}
        />
      )}
      {isDelete && (
        <Button
          noClass
          onClick={() => onClick(BUTTON.DELETE)}
          tooltip={'Delete'}
          id={BUTTON.DELETE}
          icon={<Deleteicon />}
        />
      )}
      {isClose && (
        <Button
          noClass
          onClick={() => onClick(BUTTON.CLOSE)}
          tooltip={'Close'}
          id={BUTTON.CLOSE}
          icon={<CloseIcon iconClass="!text-2xl !text-red-500" />}
        />
      )}
    </div>
  );
}

export default ActionTab;
