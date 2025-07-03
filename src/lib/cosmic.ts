// src/lib/cosmic.ts
import { createBucketClient } from '@cosmicjs/sdk';
import type {
  ShowcaseProject,
  Video,
  BlogPost,
  UseCase,
  Page,
  Testimonial,
  CosmicResponse,
  CosmicSingleResponse
} from '@/types/cosmic';

// Initialize Cosmic client
const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || 'built-with-cosmic-ai-studio-production',
  readKey: process.env.COSMIC_READ_KEY || 'CuzQZ5x8UcDtLFf5JUDwjcEjB0GLxMMs1xCya14MPyGbGNcP93',
});

// Showcase Projects
export async function getShowcaseProjects(limit = 100): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'showcase-projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(limit);
    return response.objects as ShowcaseProject[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw error;
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
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw error;
  }
}

// Videos
export async function getVideos(limit = 100): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'videos' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(limit);
    return response.objects as Video[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw error;
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
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw error;
  }
}

// Blog Posts
export async function getBlogPosts(limit = 100): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(limit);
    return response.objects as BlogPost[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw error;
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
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw error;
  }
}

// Use Cases
export async function getUseCases(limit = 100): Promise<UseCase[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'use-cases' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(limit);
    return response.objects as UseCase[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw error;
  }
}

// Pages
export async function getPages(): Promise<Page[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Page[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw error;
  }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as Page;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Testimonials
export async function getTestimonials(limit = 100): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(limit);
    return response.objects as Testimonial[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw error;
  }
}