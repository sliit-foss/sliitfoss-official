
import Masonry from '@/components/Masonry';
import gallery from '@/data/gallery.json';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
    
export default function Home() {
  return (
    <main className="bg-white relative">
      <Hero />

      <div className="px-6 md:px-12 lg:px-24">
        <h1 className="mb-6 pb-4 text-3xl md:text-4xl font-bold font-bricolage heading-gradient">
          Gallery
        </h1>
        <div className="h-[80vh]">
          <Masonry items={gallery} />
        </div>
      </div>

      <Footer />

    </main>
  );
}
