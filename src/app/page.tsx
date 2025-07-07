import { Suspense } from 'react';
import { getHomepage, getFeaturedProjects, getFeaturedBlogPosts, getTestimonials, getAllVideos, getAllUseCases } from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import type { ShowcaseProject, BlogPost, Testimonial, Page, Video, UseCase } from '@/types/cosmic';

// Loading component
function LoadingSection(): JSX.Element {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
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
      </div>
    </div>
  );
}

// Use Cases Section
async function UseCasesSection(): Promise<JSX.Element> {
  const useCases = await getAllUseCases();
  
  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From e-commerce to corporate blogs, see how AI transforms every industry
          </p>
        </div>
        
        <Suspense fallback={<LoadingSection />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases && useCases.length > 0 ? (
              useCases.slice(0, 4).map((useCase: UseCase) => (
                <div key={useCase.id} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold">
                          {useCase.metadata.use_case_title?.charAt(0) || 'U'}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {useCase.metadata.use_case_title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {useCase.metadata.industry?.value}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {useCase.metadata.target_audience?.value}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {useCase.metadata.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">
                          ⚡ {useCase.metadata.implementation_time} setup
                        </span>
                        <div className="flex space-x-1">
                          {useCase.metadata.ai_features_used?.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">Loading use cases...</p>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </section>
  );
}

// Videos Section
async function VideosSection(): Promise<JSX.Element> {
  const videos = await getAllVideos();
  const featuredVideo = videos.find(v => v.metadata.featured_video) || videos[0];
  
  return (
    <section id="videos" className="py-20 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See AI in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how Cosmic AI Studio transforms the way you build and manage websites
          </p>
        </div>
        
        {featuredVideo && (
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${featuredVideo.metadata.thumbnail?.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                alt={featuredVideo.metadata.video_title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-8 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1"></div>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">{featuredVideo.metadata.video_title}</h3>
                <p className="text-gray-200">{featuredVideo.metadata.video_description}</p>
              </div>
            </div>
            
            {videos.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {videos.slice(1, 3).map((video: Video) => (
                  <div key={video.id} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <img
                        src={`${video.metadata.thumbnail?.imgix_url}?w=400&h=225&fit=crop&auto=format,compress`}
                        alt={video.metadata.video_title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-4 border-r-0 border-t-2 border-b-2 border-l-white border-t-transparent border-b-transparent ml-0.5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold text-lg mb-1">{video.metadata.video_title}</h4>
                      <p className="text-gray-400 text-sm">{video.metadata.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Blog/Insights Section
async function InsightsSection(): Promise<JSX.Element> {
  const posts = await getFeaturedBlogPosts();
  
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest trends, tutorials, and insights about AI-powered development
          </p>
        </div>
        
        <Suspense fallback={<LoadingSection />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts && posts.length > 0 ? (
              posts.map((post: BlogPost) => (
                <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`${post.metadata.featured_image?.imgix_url}?w=400&h=225&fit=crop&auto=format,compress`}
                      alt={post.metadata.post_title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {post.metadata.category?.value}
                      </span>
                      <span className="text-sm text-gray-500">{post.metadata.reading_time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.metadata.post_title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.metadata.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={`${post.metadata.author_photo?.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                          alt={post.metadata.author_name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {post.metadata.author_name}
                        </span>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                        Read more →
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">Loading insights...</p>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </section>
  );
}

// Main Landing Page Component
export default async function LandingPage(): Promise<JSX.Element> {
  const homepage = await getHomepage();
  
  return (
    <>
      <HeroSection page={homepage} />
      <FeaturesSection features={homepage?.metadata.features_section} />
      <StatsSection />
      <ShowcaseSection />
      <UseCasesSection />
      <VideosSection />
      <TestimonialsSection />
      <InsightsSection />
      <CTASection />
    </>
  );
}