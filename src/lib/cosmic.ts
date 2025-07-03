import { createBucketClient } from '@cosmicjs/sdk';
import type {
  ShowcaseProject,
  Video,
  BlogPost,
  Testimonial,
  UseCase,
  Page,
  CosmicApiResponse
} from '@/types/cosmic';

// Initialize Cosmic client
const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || 'built-with-cosmic-ai-studio-production',
  readKey: process.env.COSMIC_READ_KEY || 'CuzQZ5x8UcDtLFf5JUDwjcEjB0GLxMMs1xCya14MPyGbGNcP93',
});

// Generic error handler for Cosmic API
async function handleCosmicRequest<T>(request: Promise<any>): Promise<T | null> {
  try {
    const response = await request;
    return response;
  } catch (error: any) {
    if (error.status === 404) {
      // Handle empty results
      return null;
    }
    console.error('Cosmic API Error:', error);
    throw error;
  }
}

// Showcase Projects
export async function getFeaturedProjects(): Promise<ShowcaseProject[] | null> {
  const response = await handleCosmicRequest<CosmicApiResponse<ShowcaseProject>>(
    cosmic.objects
      .find({ type: 'showcase-projects', 'metadata.featured_project': true })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .toPromise()
  );
  return response?.objects || null;
}

export async function getAllProjects(): Promise<ShowcaseProject[] | null> {
  const response = await handleCosmicRequest<CosmicApiResponse<ShowcaseProject>>(
    cosmic.objects
      .find({ type: 'showcase-projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .toPromise()
  );
  return response?.objects || null;
}

export async function getProjectBySlug(slug: string): Promise<ShowcaseProject | null> {
  const response = await handleCosmicRequest<{ object: ShowcaseProject }>(
    cosmic.objects
      .findOne({ type: 'showcase-projects', slug })
      .depth(1)
      .toPromise()
  );
  return response?.object || null;
}

// Videos
export async function getFeaturedVideos(): Promise<Video[] | null> {
  const response = await handleCosmicRequest<CosmicApiResponse<Video>>(
    cosmic.objects
      .find({ type: 'videos', 'metadata.featured_video': true })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .toPromise()
  );
  return response?.objects || null;
}

export async function getAllVideos(): Promise<Video[] | null> {
  const response = await handleCosmicRequest<CosmicApiResponse<Video>>(
    cosmic.objects
      .find({ type: 'videos' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .toPromise()
  );
  return response?.objects || null;
}

export async function getVideoBySlug(slug: string): Promise<Video | null> {
  const response = await handleCosmicRequest<{ object: Video }>(
    cosmic.objects
      .findOne({ type: 'videos', slug })
      .depth(1)
      .toPromise()
  );
  return response?.object || null;
}

// Blog Posts
export async function getFeaturedBlogPosts(): Promise<BlogPost[] | null> {
  const response = await handleCosmicRequest<CosmicApiResponse<BlogPost>>(
    cosmic.objects
      .find({ type: 'blog-posts', 'metadata.featured_post': true })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .toPromise()
  );
  return response?.objects || null;
}

export async function getAllBlogPosts(): Promise<BlogPost[] | null> {
  const response = await handleCosmicRequest<CosmicApiResponse<BlogPost>>(
    cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .toPromise()
  );
  return response?.objects || null;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await handleCosmicRequest<{ object: BlogPost }>(
    cosmic.objects
      .findOne({ type: 'blog-posts', slug })
      .depth(1)
      .toPromise()
  );
  return response?.object || null;
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[] | null> {
  const response = await handleCosmicRequest<CosmicApiResponse<Testimonial>>(
    cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .toPromise()
  );
  return response?.objects || null;
}

// Use Cases
export async function getUseCases(): Promise<UseCase[] | null> {
  const response = await handleCosmicRequest<CosmicApiResponse<UseCase>>(
    cosmic.objects
      .find({ type: 'use-cases' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .toPromise()
  );
  return response?.objects || null;
}

export async function getUseCaseBySlug(slug: string): Promise<UseCase | null> {
  const response = await handleCosmicRequest<{ object: UseCase }>(
    cosmic.objects
      .findOne({ type: 'use-cases', slug })
      .depth(1)
      .toPromise()
  );
  return response?.object || null;
}

// Pages
export async function getHomepage(): Promise<Page | null> {
  const response = await handleCosmicRequest<{ object: Page }>(
    cosmic.objects
      .findOne({ type: 'pages', slug: 'homepage' })
      .depth(1)
      .toPromise()
  );
  return response?.object || null;
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const response = await handleCosmicRequest<{ object: Page }>(
    cosmic.objects
      .findOne({ type: 'pages', slug })
      .depth(1)
      .toPromise()
  );
  return response?.object || null;
}