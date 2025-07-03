import { createBucketClient } from '@cosmicjs/sdk';
import type {
  ShowcaseProject,
  Video,
  BlogPost,
  Testimonial,
  UseCase,
  Page
} from '@/types/cosmic';

// Initialize Cosmic client
const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || 'built-with-cosmic-ai-studio-production',
  readKey: process.env.COSMIC_READ_KEY || 'CuzQZ5x8UcDtLFf5JUDwjcEjB0GLxMMs1xCya14MPyGbGNcP93',
});

// Showcase Projects
export async function getFeaturedProjects(): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'showcase-projects', 'metadata.featured_project': true })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects || [];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

export async function getAllProjects(): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'showcase-projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects || [];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching all projects:', error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<ShowcaseProject | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'showcase-projects', slug })
      .depth(1);
    return response.object || null;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching project by slug:', error);
    return null;
  }
}

// Videos
export async function getFeaturedVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'videos', 'metadata.featured_video': true })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects || [];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching featured videos:', error);
    return [];
  }
}

export async function getAllVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'videos' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects || [];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching all videos:', error);
    return [];
  }
}

export async function getVideoBySlug(slug: string): Promise<Video | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'videos', slug })
      .depth(1);
    return response.object || null;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching video by slug:', error);
    return null;
  }
}

// Blog Posts
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts', 'metadata.featured_post': true })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects || [];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects || [];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching all blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'blog-posts', slug })
      .depth(1);
    return response.object || null;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects || [];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching testimonials:', error);
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
    return response.objects || [];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching use cases:', error);
    return [];
  }
}

export async function getUseCaseBySlug(slug: string): Promise<UseCase | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'use-cases', slug })
      .depth(1);
    return response.object || null;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching use case by slug:', error);
    return null;
  }
}

// Pages
export async function getHomepage(): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug: 'homepage' })
      .depth(1);
    return response.object || null;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching homepage:', error);
    return null;
  }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug })
      .depth(1);
    return response.object || null;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching page by slug:', error);
    return null;
  }
}