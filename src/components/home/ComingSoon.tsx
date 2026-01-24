import HomeSectionLayout from '../layout/HomeSectionLayout';
import ComingSoonCard from './ComingSoonCard';
import { Event } from '@/data/events';

interface ComingSoonProps {
  events: (Event & { month: string })[];
}

const ComingSoon = ({ events: upcomingEvents }: ComingSoonProps) => {
  return (

    <HomeSectionLayout
      title="Coming Soon"
      titleClassName="pb-4"
      titleGradClassName="leading-[1.15] pb-1"
    >

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:h-[600px] group/list">
        {upcomingEvents.map((event) => (
          <div
            key={event.topic}
            className={`
              transition-all duration-700 ease
              w-full h-[250px] lg:h-auto lg:w-auto
              flex-none lg:flex-1
              lg:hover:flex-[3]
              group/item
              min-w-0
            `}
          >
            <ComingSoonCard
              title={event.topic}
              description={event.description}
              month={`In ${event.month.toUpperCase()}`}
              readMoreLink={event.readMoreLink}
            />
          </div>
        ))}
      </div>
    </HomeSectionLayout>
  );
};

export default ComingSoon;
