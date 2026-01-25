import GradTitle from '../GradTitle';

interface HomeSectionLayoutProps {
  title: string;
  children: React.ReactNode;

  titleClassName?: string;
  titleGradClassName?: string;

}

const HomeSectionLayout: React.FC<HomeSectionLayoutProps> = ({
  title,
  children,

  titleClassName,
  titleGradClassName,
}) => {
  return (
    <section className="flex flex-col px-[3.5vw] py-[2.5rem] my-24 gap-10">
      <div className={titleClassName}>
        <GradTitle content={title} className={titleGradClassName} />
      </div>

      {children}
    </section>
  );
};

export default HomeSectionLayout;
