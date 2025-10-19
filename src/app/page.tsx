import Masonry from '@/components/Masonry';
import gallery from '@/data/gallery.json';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold font-bricolage heading-gradient">
        Gallery
      </h1>
      <div className="h-[80vh]">
        <Masonry items={gallery} />
      </div>
    </main>
  );
}
