import EventSlider from '@/components/event/EventSlider';
import GradTitle from '@/components/GradTitle';
import WebinarSlider from '@/components/event/WebinarSlider';
import EventHero from '@/components/event/EventHero';

function Events() {
  return (
    <div>
      <EventHero />
      <br />
      <div className="p-6">
        <GradTitle content={'Events'} />
        <EventSlider />
        <br />
        <GradTitle content={'Webinars'} />
        <WebinarSlider />
      </div>
    </div>
  );
}

export default Events;
