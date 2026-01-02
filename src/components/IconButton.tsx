import { ReactNode } from 'react';
import Link from 'next/link';

interface IconButtonProps {
  children?: ReactNode;
  title: string;
  styles?: string;
  onClick?: () => void;
  href?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  title,
  onClick,
  href,
  styles,
}) => {
  const buttonStyle = `inline-flex items-center justify-between gap-1 mt-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition ${styles}`;

  if (!href && !onClick)
    throw new Error('IconButton requires either href or onClick prop');

  if (href && !onClick)
    return (
      <Link href={href} className={buttonStyle}>
        <span className="font-montserrat">{title}</span> {children}
      </Link>
    );

  if (!href && onClick)
    return (
      <button onClick={onClick} className={buttonStyle}>
        <span className="font-montserrat">{title}</span> {children}
      </button>
    );

  return null;
};

export default IconButton;
