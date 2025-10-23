import { MouseEventHandler, ReactNode, useMemo } from 'react';

interface ButtonProps {
  type: 'primary' | 'secondary';
  className?: string;
  onClick?: MouseEventHandler;
  children?: ReactNode;
}

export default function Button({
  type = 'primary',
  className,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const buttonTypeStyles = useMemo(() => {
    switch (type) {
      case 'primary':
        return ' bg-black text-white';
      case 'secondary':
        return ' bg-[#EAEAEA] text-black border border-black';
    }
  }, [type]);

  return (
    <button
      className={`cursor-pointer py-2 px-5 rounded-full ${buttonTypeStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
