import CardSection from './card/card-section';
import TabsSection from './tabs/tabs-section';
import VideoSection from './video/video-section';
import VisualSection from './visual/visual-section';

export default function HomeContainer() {
  return (
    <section className='homeContainer'>
      <VisualSection />

      <VideoSection />

      <TabsSection />

      <CardSection />
    </section>
  );
}
