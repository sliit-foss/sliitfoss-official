import GradTitle from '../GradTitle';

interface HomeSectionLayoutProps {
  title: string;
  children: React.ReactNode;
}

const HomeSectionLayout: React.FC<HomeSectionLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <section className="flex flex-col px-[3.5vw] py-[2.5rem] gap-">
      <GradTitle content={title} />
      {children}
    </section>
  );
};

export default HomeSectionLayout;
