import EventSlider from '@/app/components/event/EventSlider';
import GradTitle from '@/app/components/GradTitle';
import WebinarSlider from '@/app/components/webinar/WebinarSlider';
import HeroSection from '@/app/components/HeroSection';

function Events() {
  return (
    <div>
      {/* TODO add navbar */}
      <HeroSection />
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
