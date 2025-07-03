import Link from 'next/link';
import type { BlogPost } from '@/types/cosmic';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps): JSX.Element {
  const { metadata } = post;
  const defaultImage = "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&auto=format,compress";

  return (
    <article className="card group hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={metadata.featured_image?.imgix_url ? 
            `${metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress` : 
            defaultImage
          }
          alt={metadata.post_title || post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          {metadata.category && (
            <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
              {metadata.category.value}
            </span>
          )}
          {metadata.featured_post && (
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {metadata.post_title || post.title}
          </Link>
        </h3>
        
        {metadata.excerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {metadata.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {metadata.author_photo?.imgix_url && (
              <img 
                src={`${metadata.author_photo.imgix_url}?w=32&h=32&fit=crop&auto=format,compress`}
                alt={metadata.author_name || 'Author'}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <div>
              {metadata.author_name && (
                <p className="text-sm font-medium text-gray-900">
                  {metadata.author_name}
                </p>
              )}
              {metadata.reading_time && (
                <p className="text-xs text-gray-500">
                  {metadata.reading_time}
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <Link 
            href={`/blog/${post.slug}`}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}