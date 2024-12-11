import { MdOutlinePayments } from 'react-icons/md';

function PaymentIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <MdOutlinePayments
        className={` text-secondary duration-300  text-xl ${iconClass}`}
      />
    </div>
  );
}

export default PaymentIcon;
