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
  name?: string;
  url: string;
  imgix_url: string;
  alt_text?: string;
}

// Select dropdown interface
export interface CosmicSelectOption {
  key: string;
  value: string;
}

// Page interface
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title?: string;
    meta_description?: string;
    hero_headline?: string;
    hero_subheadline?: string;
    hero_background?: CosmicFile;
    primary_cta_text?: string;
    primary_cta_link?: string;
    page_content?: string;
    features_section?: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    show_build_cta?: boolean;
  };
}

// Showcase Project interface - matching the actual CMS structure
export interface ShowcaseProject extends CosmicObject {
  type: 'showcase-projects';
  metadata: {
    project_name?: string;
    creator_name?: string;
    project_description?: string;
    screenshot?: CosmicFile;
    additional_images?: CosmicFile[];
    live_url?: string;
    github_url?: string;
    project_category?: CosmicSelectOption;
    tech_stack?: string[];
    development_time?: string;
    featured_project?: boolean;
  };
}

// Blog Post interface - matching the actual CMS structure
export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    post_title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: CosmicFile;
    category?: CosmicSelectOption;
    author_name?: string;
    author_photo?: CosmicFile;
    reading_time?: string;
    featured_post?: boolean;
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
    video_type?: CosmicSelectOption;
    featured_video?: boolean;
  };
}

// Testimonial interface - matching the actual CMS structure
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name: string;
    customer_title?: string;
    company_name?: string;
    customer_photo?: CosmicFile;
    company_logo?: CosmicFile;
    testimonial_text: string;
    rating?: CosmicSelectOption;
    use_case_category?: CosmicSelectOption;
  };
}

// Use Case interface
export interface UseCase extends CosmicObject {
  type: 'use-cases';
  metadata: {
    use_case_title?: string;
    industry?: CosmicSelectOption;
    target_audience?: CosmicSelectOption;
    description?: string;
    hero_image?: CosmicFile;
    benefits?: Array<{
      title: string;
      description: string;
    }>;
    ai_features_used?: string[];
    implementation_time?: string;
  };
}

// Union type for all content types
export type CosmicContent = Page | ShowcaseProject | BlogPost | Video | Testimonial | UseCase;