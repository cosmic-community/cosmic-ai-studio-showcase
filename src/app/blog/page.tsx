import { Suspense } from 'react';
import { getAllBlogPosts } from '@/lib/cosmic';
import BlogCard from '@/components/BlogCard';
import type { BlogPost } from '@/types/cosmic';

export const metadata = {
  title: 'Blog - Cosmic AI Studio Showcase',
  description: 'Read the latest articles, tutorials, and insights about building with Cosmic AI Studio.',
};

// Loading component
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

// Blog Posts Section Component
async function BlogPostsSection(): Promise<JSX.Element> {
  const posts = await getAllBlogPosts();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts && posts.length > 0 ? (
        posts.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No blog posts available at the moment.</p>
        </div>
      )}
    </div>
  );
}

export default async function BlogPage(): Promise<JSX.Element> {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with the latest tips, tutorials, and insights about AI-powered web development, headless CMS, and modern development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container-custom">
          <Suspense fallback={<LoadingGrid />}>
            <BlogPostsSection />
          </Suspense>
        </div>
      </section>
    </div>
  );
}