import { BUTTON } from '@/constant/common/constant';
import { loaderHandler } from '@/utils/helper';
import Button from '../button/Button';

function ConfirmationBox({
  openDialog,
  buttonLabel = 'Confirm',
  buttonClick,
  contentText = '',
  itemName = '', // New prop for item context
  isLoading = '',
}) {
  const getMessage = () => {
    switch (openDialog) {
      case BUTTON.CANCEL:
        return 'Are you sure you want to cancel?';
      case BUTTON.RESET:
        return 'Are you sure you want to reset?';
      case BUTTON.DELETE:
        return `Are you sure you want to delete "${itemName}"?`;
      case BUTTON.EDIT:
        return `Are you sure you want to update "${itemName}"?`;
      case BUTTON.CLOSE:
        return `Are you sure you want to close "${itemName}"?`;
      default:
        return contentText;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <span>{getMessage()}</span>
      <Button
        text={buttonLabel}
        onClick={buttonClick}
        isLoading={loaderHandler(isLoading)}
        className="w-full"
      />
    </div>
  );
}

export default ConfirmationBox;
