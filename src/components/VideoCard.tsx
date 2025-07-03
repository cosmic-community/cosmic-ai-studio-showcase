'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import Link from 'next/link';
import type { Video } from '@/types/cosmic';

interface VideoCardProps {
  video: Video;
  showFullPlayer?: boolean;
}

// Extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export default function VideoCard({ video, showFullPlayer = false }: VideoCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const { metadata } = video;
  const videoId = getYouTubeVideoId(metadata.video_url);
  const defaultThumbnail = "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop&auto=format,compress";
  
  const thumbnailUrl = metadata.thumbnail?.imgix_url 
    ? `${metadata.thumbnail.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`
    : videoId 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : defaultThumbnail;

  const handlePlay = (): void => {
    setIsPlaying(true);
  };

  return (
    <div className="card group overflow-hidden">
      <div className="aspect-video relative overflow-hidden bg-gray-900">
        {!isPlaying || !showFullPlayer ? (
          <>
            <img 
              src={thumbnailUrl}
              alt={metadata.video_title || 'Video thumbnail'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
              <button 
                onClick={showFullPlayer ? handlePlay : undefined}
                className="w-16 h-16 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300"
                aria-label="Play video"
              >
                <Play className="w-6 h-6 text-gray-900 ml-1" />
              </button>
            </div>
            {metadata.duration && (
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                {metadata.duration}
              </div>
            )}
          </>
        ) : (
          <>
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={metadata.video_title || 'Video'}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">Video not available</p>
              </div>
            )}
          </>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          {showFullPlayer ? (
            <h3 className="text-lg font-semibold text-gray-900">
              {metadata.video_title || 'Untitled Video'}
            </h3>
          ) : (
            <Link 
              href={`/videos/${video.slug}`}
              className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
            >
              {metadata.video_title || 'Untitled Video'}
            </Link>
          )}
          {metadata.featured_video && (
            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        {metadata.video_type?.value && (
          <span className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mb-3">
            {metadata.video_type.value}
          </span>
        )}
        
        {metadata.video_description && (
          <p className="text-gray-600 text-sm line-clamp-3">
            {metadata.video_description}
          </p>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          {metadata.duration && (
            <span className="text-sm text-gray-500">
              {metadata.duration}
            </span>
          )}
          {!showFullPlayer && (
            <Link 
              href={`/videos/${video.slug}`}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Watch Video →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}