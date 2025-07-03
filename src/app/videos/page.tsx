import { getAllVideos } from '@/lib/cosmic';
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

// Simple Video Display Component
function VideoDisplay({ video }: { video: Video }): JSX.Element {
  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
  };

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
        {video.metadata.thumbnail?.imgix_url ? (
          <img
            src={`${video.metadata.thumbnail.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={video.metadata.video_title || video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <iframe
            src={getYouTubeEmbedUrl(video.metadata.video_url)}
            title={video.metadata.video_title || video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            {video.metadata.video_type?.value || 'Video'}
          </span>
          {video.metadata.duration && (
            <span className="text-sm text-gray-500">
              {video.metadata.duration}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {video.metadata.video_title || video.title}
        </h3>
        
        {video.metadata.video_description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {video.metadata.video_description}
          </p>
        )}
        
        <a
          href={video.metadata.video_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center"
        >
          Watch Video
        </a>
      </div>
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
          <VideoDisplay key={video.id} video={video} />
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