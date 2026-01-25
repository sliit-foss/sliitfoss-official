//<<<<<<< HEAD
//function GradTitle({ content }: { content: string }) {
//  return (
//    <h2 className="text-4xl font-bold mb-6">
//      <span className="bg-linear-to-r from-[#00B7FF] to-[#8C00D7] bg-clip-text text-transparent inline-block">
//        {content}
//      </span>
//    </h2>
//  );
//}
//=======
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
//>>>>>>> 40f4503a1537e6c36d742464e16473ac226c8593

export default GradTitle;
