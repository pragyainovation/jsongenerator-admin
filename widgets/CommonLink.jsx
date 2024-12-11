import Link from 'next/link';

function CommonLink({
  href,
  text,
  newTab = false, // Open link in a new tab if true
  className = '', // Custom CSS classes
  ...props // Capture any other props
}) {
  return (
    <Link
      href={href}
      {...props}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
    >
      <span className={className}>{text}</span>
    </Link>
  );
}

export default CommonLink;
