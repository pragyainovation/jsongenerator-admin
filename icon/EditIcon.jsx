import { BiEditAlt } from 'react-icons/bi';

function EditIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <BiEditAlt className={` text-secondary duration-300  text-2xl ${iconClass}`} />
    </div>
  );
}

export default EditIcon;
