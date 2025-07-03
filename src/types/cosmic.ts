// Base Cosmic Object interface
export interface CosmicObject {
  id: string;
  title: string;
  slug: string;
  status: 'published' | 'draft';
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

// File/Media interface
export interface CosmicFile {
  name: string;
  url: string;
  imgix_url: string;
  alt_text?: string;
}

// Page interface
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    hero_headline?: string;
    hero_subheadline?: string;
    hero_background?: CosmicFile;
    primary_cta_text?: string;
    primary_cta_link?: string;
    secondary_cta_text?: string;
    secondary_cta_link?: string;
    content?: string;
    seo_title?: string;
    seo_description?: string;
  };
}

// Project interface
export interface ShowcaseProject extends CosmicObject {
  type: 'projects';
  metadata: {
    description?: string;
    featured_image?: CosmicFile;
    demo_url?: string;
    github_url?: string;
    technologies?: string[];
    featured?: boolean;
    content?: string;
    category?: string;
    difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  };
}

// Blog Post interface
export interface BlogPost extends CosmicObject {
  type: 'posts';
  metadata: {
    excerpt?: string;
    content?: string;
    featured_image?: CosmicFile;
    author?: string;
    published_date?: string;
    read_time?: number;
    tags?: string[];
    category?: string;
    featured?: boolean;
    seo_title?: string;
    seo_description?: string;
  };
}

// Video interface
export interface Video extends CosmicObject {
  type: 'videos';
  metadata: {
    video_title?: string;
    video_description?: string;
    video_url: string;
    thumbnail?: CosmicFile;
    duration?: string;
    video_type?: {
      key: string;
      value: string;
    };
    featured?: boolean;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote: string;
    author_name: string;
    author_title?: string;
    author_company?: string;
    author_image?: CosmicFile;
    rating?: number;
    featured?: boolean;
  };
}

// Union type for all content types
export type CosmicContent = Page | ShowcaseProject | BlogPost | Video | Testimonial;