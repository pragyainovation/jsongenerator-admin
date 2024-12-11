import { TbSchema } from 'react-icons/tb';

function SchemaIcon({ iconClass, outerClass }) {
  return (
    <div className={`${outerClass}`}>
      <TbSchema
        className={` text-secondary duration-300  text-2xl ${iconClass}`}
      />
    </div>
  );
}

export default SchemaIcon;
