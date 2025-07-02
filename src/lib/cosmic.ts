import { createBucketClient } from '@cosmicjs/sdk';
import type {
  ShowcaseProject,
  Video,
  UseCase,
  BlogPost,
  Testimonial,
  Page,
  CosmicResponse
} from '@/types/cosmic';

// Initialize Cosmic client
const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
});

// Error handler for empty results
function handleCosmicError(error: any): any[] {
  if (error?.status === 404) {
    return [];
  }
  throw error;
}

// Showcase Projects
export async function getShowcaseProjects(): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'showcase-projects' })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.objects as ShowcaseProject[];
  } catch (error) {
    return handleCosmicError(error);
  }
}

export async function getFeaturedProjects(): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'showcase-projects',
        'metadata.featured_project': true 
      })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.objects as ShowcaseProject[];
  } catch (error) {
    return handleCosmicError(error);
  }
}

export async function getProjectBySlug(slug: string): Promise<ShowcaseProject | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'showcase-projects', slug })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.object as ShowcaseProject;
  } catch (error) {
    if (error?.status === 404) {
      return null;
    }
    throw error;
  }
}

// Videos
export async function getVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'videos' })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.objects as Video[];
  } catch (error) {
    return handleCosmicError(error);
  }
}

export async function getFeaturedVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'videos',
        'metadata.featured_video': true 
      })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.objects as Video[];
  } catch (error) {
    return handleCosmicError(error);
  }
}

// Use Cases
export async function getUseCases(): Promise<UseCase[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'use-cases' })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.objects as UseCase[];
  } catch (error) {
    return handleCosmicError(error);
  }
}

export async function getUseCaseBySlug(slug: string): Promise<UseCase | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'use-cases', slug })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.object as UseCase;
  } catch (error) {
    if (error?.status === 404) {
      return null;
    }
    throw error;
  }
}

// Blog Posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.objects as BlogPost[];
  } catch (error) {
    return handleCosmicError(error);
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'blog-posts',
        'metadata.featured_post': true 
      })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.objects as BlogPost[];
  } catch (error) {
    return handleCosmicError(error);
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'blog-posts', slug })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.object as BlogPost;
  } catch (error) {
    if (error?.status === 404) {
      return null;
    }
    throw error;
  }
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.objects as Testimonial[];
  } catch (error) {
    return handleCosmicError(error);
  }
}

// Pages
export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug })
      .props(['id', 'title', 'slug', 'metadata', 'status'])
      .depth(1);
    return response.object as Page;
  } catch (error) {
    if (error?.status === 404) {
      return null;
    }
    throw error;
  }
}

export async function getHomepage(): Promise<Page | null> {
  return getPageBySlug('homepage');
}

export async function getAboutPage(): Promise<Page | null> {
  return getPageBySlug('about');
}