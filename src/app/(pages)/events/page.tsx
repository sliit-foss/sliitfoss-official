import EventSlider from '@/app/components/event/EventSlider';
import GradTitle from '@/app/components/GradTitle';
import WebinarSlider from '@/app/components/webinar/WebinarSlider';

function Events() {
  return (
    // TODO add navbar

    // TODO add hero section

    <div className="p-6">
      <GradTitle content={'Events'} />
      <EventSlider />
      <br />
      <GradTitle content={'Webinars'} />
      <WebinarSlider />
    </div>

    // TODO add footer
  );
}

export default Events;
