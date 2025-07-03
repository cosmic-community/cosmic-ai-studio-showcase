import { getAllVideos } from '@/lib/cosmic';
import VideoCard from '@/components/VideoCard';
import type { Video } from '@/types/cosmic';

export const metadata = {
  title: 'Videos - Cosmic AI Studio Showcase',
  description: 'Watch videos about building with Cosmic AI Studio. Tutorials, demos, and feature highlights.',
};

// Loading component
function LoadingGrid(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="aspect-video bg-gray-200"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Videos Section Component
async function VideosSection(): Promise<JSX.Element> {
  const videos = await getAllVideos();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos && videos.length > 0 ? (
        videos.map((video: Video) => (
          <VideoCard key={video.id} video={video} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No videos available at the moment.</p>
        </div>
      )}
    </div>
  );
}

export default async function VideosPage(): Promise<JSX.Element> {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Video Library
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how to build amazing websites with Cosmic AI Studio through our comprehensive video tutorials and demos.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="container-custom">
          <VideosSection />
        </div>
      </section>
    </div>
  );
}