import EventSlider from '@/app/components/event/EventSlider';
import GradTitle from '@/app/components/GradTitle';
import WebinarSlider from '@/app/components/event/WebinarSlider';
import EventHero from '@/app/components/event/EventHero';

function Events() {
  return (
    <div>
      {/* TODO add navbar */}
      <EventHero />
      <br />
      <div className="p-6">
        <GradTitle content={'Events'} />
        <EventSlider />
        <br />
        <GradTitle content={'Webinars'} />
        <WebinarSlider />
      </div>
      {/* TODO add footer */}
    </div>
  );
}

export default Events;
