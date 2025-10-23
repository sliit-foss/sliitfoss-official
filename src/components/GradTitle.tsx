import { Bricolage_Grotesque } from 'next/font/google';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const GradTitle = ({
  content,
  bold = false,
}: {
  content: string;
  bold?: boolean;
}) => {
  const weightClass = bold ? 'font-semibold' : 'font-normal';

  return (
    <h2
      className={`${bricolageGrotesque.className} text-6xl ${weightClass} mb-6 bg-gradient-to-r from-[#00B7FF] to-[#8C00D7] bg-clip-text text-transparent inline-block`}
    >
      {content}
    </h2>
  );
};

export default GradTitle;
