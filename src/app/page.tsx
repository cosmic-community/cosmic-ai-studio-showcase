// src/app/page.tsx
import { Suspense } from 'react';
import { getHomepage, getFeaturedProjects, getFeaturedBlogPosts, getTestimonials } from '@/lib/cosmic';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import TestimonialCard from '@/components/TestimonialCard';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import type { ShowcaseProject, BlogPost, Testimonial, Page } from '@/types/cosmic';

// Loading components
function LoadingGrid(): JSX.Element {
  return (
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
  );
}

// Featured Projects Section
async function FeaturedProjectsSection(): Promise<JSX.Element> {
  const projects = await getFeaturedProjects();
  
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing websites and applications built with Cosmic AI Studio
          </p>
        </div>
        
        <Suspense fallback={<LoadingGrid />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects && projects.length > 0 ? (
              projects.map((project: ShowcaseProject) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No featured projects available.</p>
              </div>
            )}
          </div>
        </Suspense>
        
        <div className="text-center mt-12">
          <a 
            href="/projects" 
            className="btn-primary"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

// Latest Blog Posts Section
async function LatestBlogSection(): Promise<JSX.Element> {
  const posts = await getFeaturedBlogPosts();
  
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest tips, tutorials, and insights about AI-powered development
          </p>
        </div>
        
        <Suspense fallback={<LoadingGrid />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts && posts.length > 0 ? (
              posts.slice(0, 3).map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No blog posts available.</p>
              </div>
            )}
          </div>
        </Suspense>
        
        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="btn-primary"
          >
            Read More Articles
          </a>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
async function TestimonialsSection(): Promise<JSX.Element> {
  const testimonials = await getTestimonials();
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from developers, marketers, and creators who are building amazing things with Cosmic AI Studio
          </p>
        </div>
        
        <Suspense fallback={<LoadingGrid />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials && testimonials.length > 0 ? (
              testimonials.slice(0, 2).map((testimonial: Testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No testimonials available.</p>
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </section>
  );
}

// CTA Section
function CTASection(): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build with AI?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers and creators who are already building the future with Cosmic AI Studio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://app.cosmicjs.com/signup" 
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Start Building Today
          </a>
          <a 
            href="/about" 
            className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

// Main Homepage Component
export default async function HomePage(): Promise<JSX.Element> {
  const homepage = await getHomepage();
  
  return (
    <>
      <HeroSection page={homepage} />
      <FeaturesSection features={homepage?.metadata.features_section} />
      <FeaturedProjectsSection />
      <LatestBlogSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}