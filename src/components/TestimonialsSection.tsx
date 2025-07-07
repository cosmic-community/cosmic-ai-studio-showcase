import { getTestimonials } from '@/lib/cosmic';
import type { Testimonial } from '@/types/cosmic';

export default async function TestimonialsSection(): Promise<JSX.Element> {
  const testimonials = await getTestimonials();
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Creators Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from developers, marketers, and creators who are building amazing things with Cosmic AI Studio
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials && testimonials.length > 0 ? (
            testimonials.map((testimonial: Testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative">
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 text-6xl text-primary-100 font-serif leading-none">"</div>
                
                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    {testimonial.metadata.rating?.value}
                  </span>
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed relative z-10">
                  {testimonial.metadata.testimonial_text}
                </blockquote>
                
                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={`${testimonial.metadata.customer_photo?.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.customer_name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {testimonial.metadata.customer_name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.metadata.customer_title}
                      {testimonial.metadata.company_name && (
                        <span> at {testimonial.metadata.company_name}</span>
                      )}
                    </div>
                  </div>
                  {testimonial.metadata.company_logo && (
                    <img
                      src={`${testimonial.metadata.company_logo.imgix_url}?w=80&h=40&fit=crop&auto=format,compress`}
                      alt={testimonial.metadata.company_name}
                      className="w-10 h-10 object-contain opacity-60"
                    />
                  )}
                </div>
                
                {/* Use case badge */}
                <div className="absolute bottom-6 right-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {testimonial.metadata.use_case_category?.value}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
              <p className="text-gray-500">Loading testimonials...</p>
            </div>
          )}
        </div>
        
        {/* Additional testimonial highlights */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}