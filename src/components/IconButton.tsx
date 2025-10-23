import { IconType } from 'react-icons';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
});

interface IconButtonProps {
  Icon: IconType;
  title: string;
  styles?: string;
  onClick?: () => void;
  href?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  Icon,
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
      <a href={href} className={buttonStyle}>
        <span className={montserrat.className}>{title}</span> <Icon size={16} />
      </a>
    );

  if (!href && onClick)
    return (
      <button onClick={onClick} className={buttonStyle}>
        <span className={montserrat.className}>{title}</span> <Icon size={16} />
      </button>
    );
};

export default IconButton;
