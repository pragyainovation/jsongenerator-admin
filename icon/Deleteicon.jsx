import { MdDeleteOutline } from 'react-icons/md';

function Deleteicon({ iconClass = '', outerClass = '' }) {
  return (
    <div className={`${outerClass} group`}>
      <MdDeleteOutline className={`text-red-500 duration-300 group-hover:text-opacity-90  text-2xl ${iconClass}`} />
    </div>
  );
}

export default Deleteicon;
