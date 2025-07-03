import { createBucketClient } from '@cosmicjs/sdk';
import type { 
  ShowcaseProject, 
  Video, 
  BlogPost, 
  UseCase, 
  Page, 
  Testimonial,
  CosmicResponse 
} from '@/types/cosmic';

// Initialize Cosmic client
const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
});

// Showcase Projects
export async function getShowcaseProjects(): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'showcase-projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as ShowcaseProject[];
  } catch (error) {
    console.error('Error fetching showcase projects:', error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'showcase-projects',
        'metadata.featured_project': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as ShowcaseProject[];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

// Videos
export async function getVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'videos' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Video[];
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

export async function getFeaturedVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'videos',
        'metadata.featured_video': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Video[];
  } catch (error) {
    console.error('Error fetching featured videos:', error);
    return [];
  }
}

// Blog Posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'blog-posts',
        'metadata.featured_post': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as BlogPost[];
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
}

// Use Cases
export async function getUseCases(): Promise<UseCase[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'use-cases' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as UseCase[];
  } catch (error) {
    console.error('Error fetching use cases:', error);
    return [];
  }
}

// Pages
export async function getPage(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({ 
        type: 'pages',
        slug: slug 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as Page;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

export async function getHomepage(): Promise<Page | null> {
  return getPage('homepage');
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Testimonial[];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

// Generic fetch function for any object type
export async function getObjects<T>(
  type: string, 
  query: Record<string, any> = {}
): Promise<T[]> {
  try {
    const response = await cosmic.objects
      .find({ type, ...query })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as T[];
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    return [];
  }
}