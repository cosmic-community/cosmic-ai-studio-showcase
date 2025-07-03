import { notFound } from 'next/navigation';
import { getVideoBySlug, getAllVideos } from '@/lib/cosmic';
import type { Video } from '@/types/cosmic';

interface VideoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const videos = await getAllVideos();
  return videos.map((video: Video) => ({
    slug: video.slug,
  }));
}

export async function generateMetadata({ params }: VideoPageProps) {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);
  
  if (!video) {
    return {
      title: 'Video Not Found',
    };
  }

  return {
    title: `${video.metadata.video_title || video.title} - Cosmic AI Studio`,
    description: video.metadata.video_description || `Watch ${video.metadata.video_title || video.title} on Cosmic AI Studio`,
  };
}

export default async function VideoPage({ params }: VideoPageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(video.metadata.video_url);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Video Player */}
            <div className="mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                {videoId ? (
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={video.metadata.video_title || video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">Video not available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {video.metadata.video_title || video.title}
                  </h1>
                  {video.metadata.video_type?.value && (
                    <span className="inline-block text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                      {video.metadata.video_type.value}
                    </span>
                  )}
                </div>
                {video.metadata.duration && (
                  <span className="text-lg text-gray-600 font-medium">
                    {video.metadata.duration}
                  </span>
                )}
              </div>

              {video.metadata.video_description && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {video.metadata.video_description}
                  </p>
                </div>
              )}

              {/* External Link */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href={video.metadata.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>

            {/* Back to Videos */}
            <div className="mt-8 text-center">
              <a 
                href="/videos"
                className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
              >
                ← Back to All Videos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}