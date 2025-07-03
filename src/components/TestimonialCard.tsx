import type { Testimonial } from '@/types/cosmic';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps): JSX.Element {
  const { metadata } = testimonial;
  const defaultAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format,compress";

  // Convert rating to number of stars
  const rating = metadata.rating ? parseInt(metadata.rating.key) : 5;
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="card p-6">
      <div className="flex items-center mb-4">
        {stars.map((filled, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6 text-lg italic">
        "{metadata.testimonial_text}"
      </blockquote>
      
      <div className="flex items-center">
        <img 
          src={metadata.customer_photo?.imgix_url ? 
            `${metadata.customer_photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress` : 
            defaultAvatar
          }
          alt={metadata.customer_name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">
            {metadata.customer_name}
          </h4>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            {metadata.customer_title && (
              <span>{metadata.customer_title}</span>
            )}
            {metadata.customer_title && metadata.company_name && (
              <span>•</span>
            )}
            {metadata.company_name && (
              <span>{metadata.company_name}</span>
            )}
          </div>
          {metadata.use_case_category && (
            <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {metadata.use_case_category.value}
            </span>
          )}
        </div>
        {metadata.company_logo?.imgix_url && (
          <img 
            src={`${metadata.company_logo.imgix_url}?w=60&h=40&fit=max&auto=format,compress`}
            alt={metadata.company_name || 'Company logo'}
            className="w-12 h-8 object-contain opacity-70"
          />
        )}
      </div>
    </div>
  );
}