import { Bricolage_Grotesque } from 'next/font/google';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const GradTitle = ({
  content,
  bold = false,
  textSize = 'text-4xl sm:text-6xl',
}: {
  content: string;
  bold?: boolean;
  textSize?: string;
}) => {
  const weightClass = bold ? 'font-semibold' : 'font-normal';

  return (
    <h2
      className={`${bricolageGrotesque.className} ${textSize} ${weightClass} bg-gradient-to-r from-[#00B7FF] to-[#8C00D7] bg-clip-text text-transparent inline-block w-fit h-fit`}
      style={{ backgroundClip: 'text' }}
    >
      {content}
    </h2>
  );
};

export default GradTitle;
