import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/cosmic';
import type { BlogPost } from '@/types/cosmic';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Cosmic AI Studio Blog`,
    description: post.metadata.excerpt || `Read ${post.title} on the Cosmic AI Studio blog`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <article className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Post Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              {post.metadata.excerpt && (
                <p className="text-xl text-gray-600 mb-6">
                  {post.metadata.excerpt}
                </p>
              )}
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500">
                {post.metadata.author_name && (
                  <span>By {post.metadata.author_name}</span>
                )}
                {post.created_at && (
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                )}
                {post.metadata.reading_time && (
                  <span>{post.metadata.reading_time}</span>
                )}
              </div>
            </header>

            {/* Featured Image */}
            {post.metadata.featured_image?.imgix_url && (
              <div className="mb-12">
                <img
                  src={`${post.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Post Content */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="prose prose-lg max-w-none">
                {post.metadata.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.metadata.content }} />
                ) : (
                  <p className="text-gray-700">
                    Welcome to our blog post about {post.title}. This is where we share insights, 
                    tutorials, and best practices for building with Cosmic AI Studio.
                  </p>
                )}
              </div>

              {/* Category */}
              {post.metadata.category && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Category</h3>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                    {typeof post.metadata.category === 'object' ? post.metadata.category.value : post.metadata.category}
                  </span>
                </div>
              )}
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <a 
                href="/blog"
                className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
              >
                ← Back to All Posts
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}