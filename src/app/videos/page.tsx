// src/app/videos/page.tsx
import { Suspense } from 'react';
import { getAllVideos } from '@/lib/cosmic';
import VideoCard from '@/components/VideoCard';
import HeroSection from '@/components/HeroSection';
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
      <HeroSection 
        page={null}
        title="Video Library"
        subtitle="Learn how to build amazing websites with Cosmic AI Studio through our comprehensive video tutorials and demos."
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=600&fit=crop&auto=format,compress"
      />

      {/* Videos Grid */}
      <section className="py-16">
        <div className="container-custom">
          <Suspense fallback={<LoadingGrid />}>
            <VideosSection />
          </Suspense>
        </div>
      </section>
    </div>
  );
}