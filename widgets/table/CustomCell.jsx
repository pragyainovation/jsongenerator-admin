import classNames from 'classnames';

function CustomHeader({ data, className = '' }) {
  return <div className={classNames('w-52 truncate ...', className)}>{data.value}</div>;
}

export default CustomHeader;
