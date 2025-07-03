import { createBucketClient } from '@cosmicjs/sdk';
import type { Page, ShowcaseProject, BlogPost, Video, Testimonial } from '@/types/cosmic';

// Initialize Cosmic client
const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
  apiEnvironment: "staging",
});

// Helper function to handle API errors
function handleCosmicError(error: any, fallback: any = null) {
  if (error?.status === 404) {
    return fallback;
  }
  console.error('Cosmic API Error:', error);
  return fallback;
}

// Homepage functions
export async function getHomepage(): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug: 'home' })
      .props(['title', 'slug', 'metadata'])
      .depth(1);
    return response.object;
  } catch (error) {
    return handleCosmicError(error);
  }
}

// Project functions
export async function getAllProjects(): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'projects' })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.objects;
  } catch (error) {
    return handleCosmicError(error, []);
  }
}

export async function getFeaturedProjects(): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'projects', 'metadata.featured': true })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1)
      .limit(6);
    return response.objects;
  } catch (error) {
    return handleCosmicError(error, []);
  }
}

export async function getProjectBySlug(slug: string): Promise<ShowcaseProject | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'projects', slug })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.object;
  } catch (error) {
    return handleCosmicError(error);
  }
}

// Blog functions
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1)
      .sort('-created_at');
    return response.objects;
  } catch (error) {
    return handleCosmicError(error, []);
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'posts', 'metadata.featured': true })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1)
      .limit(3)
      .sort('-created_at');
    return response.objects;
  } catch (error) {
    return handleCosmicError(error, []);
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'posts', slug })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.object;
  } catch (error) {
    return handleCosmicError(error);
  }
}

// Video functions
export async function getAllVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'videos' })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1)
      .sort('-created_at');
    return response.objects;
  } catch (error) {
    return handleCosmicError(error, []);
  }
}

export async function getVideoBySlug(slug: string): Promise<Video | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'videos', slug })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.object;
  } catch (error) {
    return handleCosmicError(error);
  }
}

// Testimonial functions
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1)
      .sort('-created_at');
    return response.objects;
  } catch (error) {
    return handleCosmicError(error, []);
  }
}
