import { cosmic } from '@/lib/cosmic';
import { Testimonial } from '@/types/cosmic';
import { Star, Quote } from 'lucide-react';

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(6);
    
    return response.objects || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

function StarRating({ rating }: { rating: string }): JSX.Element {
  const stars = parseInt(rating) || 5;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < stars
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300 dark:text-gray-600'
          }`}
        />
      ))}
    </div>
  );
}

export default async function TestimonialsSection(): Promise<JSX.Element> {
  const testimonials = await getTestimonials();

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Loved by
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> Creators Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of developers, marketers, and creators who trust Cosmic AI Studio 
            to power their digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              {testimonial.metadata.rating && (
                <div className="mb-4">
                  <StarRating rating={testimonial.metadata.rating.key} />
                </div>
              )}

              {/* Testimonial text */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.metadata.testimonial_text}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                {testimonial.metadata.customer_photo?.imgix_url ? (
                  <img
                    src={`${testimonial.metadata.customer_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.customer_name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.metadata.customer_name?.charAt(0)}
                    </span>
                  </div>
                )}
                
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.metadata.customer_name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.metadata.customer_title}
                    {testimonial.metadata.company_name && (
                      <span> at {testimonial.metadata.company_name}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Use case category */}
              {testimonial.metadata.use_case_category && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                    {testimonial.metadata.use_case_category.value}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}