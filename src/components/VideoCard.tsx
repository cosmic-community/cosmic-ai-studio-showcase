// src/components/VideoCard.tsx
import Link from 'next/link';
import type { Video } from '@/types/cosmic';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps): JSX.Element {
  const { metadata } = video;
  const defaultThumbnail = "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop&auto=format,compress";

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={metadata.thumbnail?.imgix_url ? 
            `${metadata.thumbnail.imgix_url}?w=600&h=400&fit=crop&auto=format,compress` : 
            defaultThumbnail
          }
          alt={metadata.video_title || video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 5v10l7-5z" />
            </svg>
          </div>
        </div>
        
        {/* Duration badge */}
        {metadata.duration && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            {metadata.duration}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            {metadata.video_type?.value || 'Video'}
          </span>
          {metadata.featured_video && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          <Link href={`/videos/${video.slug}`}>
            {metadata.video_title || video.title}
          </Link>
        </h3>
        
        {metadata.video_description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {metadata.video_description}
          </p>
        )}
        
        <div className="flex space-x-3">
          <Link 
            href={`/videos/${video.slug}`}
            className="flex-1 text-center btn-primary"
          >
            Watch Now
          </Link>
          <a
            href={metadata.video_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center btn-secondary"
          >
            External Link
          </a>
        </div>
      </div>
    </div>
  );
}