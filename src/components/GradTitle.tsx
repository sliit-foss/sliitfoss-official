const GradTitle = ({
  content,
  bold = false,
  textSize = 'text-4xl sm:text-6xl',
  className = '',
}: {
  content: string;
  bold?: boolean;
  textSize?: string;
  className?: string;
}) => {
  const weightClass = bold ? 'font-semibold' : 'font-normal';

  return (
    <h2
      className={`${textSize} ${weightClass} font-bricolage bg-gradient-to-r from-[#00B7FF] to-[#8C00D7] bg-clip-text text-transparent inline-block w-fit h-fit ${className}`}
    >
      {content}
    </h2>
  );
};

export default GradTitle;
