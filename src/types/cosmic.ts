// Base interface for all Cosmic objects
export interface CosmicObject {
  id: string;
  title: string;
  slug: string;
  status: string;
  created_at: string;
  modified_at: string;
  metadata: Record<string, any>;
}

// Media file interface
export interface CosmicMedia {
  url: string;
  imgix_url: string;
}

// Select dropdown value interface
export interface CosmicSelectValue {
  key: string;
  value: string;
}

// Showcase Project interfaces
export interface ShowcaseProjectMetadata {
  project_name: string;
  creator_name?: string;
  project_description: string;
  screenshot?: CosmicMedia;
  additional_images?: CosmicMedia[];
  live_url?: string;
  github_url?: string;
  project_category?: CosmicSelectValue;
  tech_stack?: string[];
  development_time?: string;
  featured_project: boolean;
}

export interface ShowcaseProject extends CosmicObject {
  metadata: ShowcaseProjectMetadata;
}

// Video interfaces
export interface VideoMetadata {
  video_title: string;
  video_description?: string;
  video_url: string;
  thumbnail?: CosmicMedia;
  video_type?: CosmicSelectValue;
  duration?: string;
  featured_video: boolean;
}

export interface Video extends CosmicObject {
  metadata: VideoMetadata;
}

// Use Case interfaces
export interface UseCaseMetadata {
  use_case_title: string;
  industry?: CosmicSelectValue;
  target_audience?: CosmicSelectValue;
  description: string;
  hero_image?: CosmicMedia;
  benefits?: Array<{
    title: string;
    description: string;
  }>;
  ai_features_used?: string[];
  implementation_time?: string;
}

export interface UseCase extends CosmicObject {
  metadata: UseCaseMetadata;
}

// Blog Post interfaces
export interface BlogPostMetadata {
  post_title: string;
  excerpt?: string;
  content: string;
  featured_image?: CosmicMedia;
  category?: CosmicSelectValue;
  author_name?: string;
  author_photo?: CosmicMedia;
  reading_time?: string;
  featured_post: boolean;
}

export interface BlogPost extends CosmicObject {
  metadata: BlogPostMetadata;
}

// Testimonial interfaces
export interface TestimonialMetadata {
  customer_name: string;
  customer_title?: string;
  company_name?: string;
  customer_photo?: CosmicMedia;
  company_logo?: CosmicMedia;
  testimonial_text: string;
  rating?: CosmicSelectValue;
  use_case_category?: CosmicSelectValue;
}

export interface Testimonial extends CosmicObject {
  metadata: TestimonialMetadata;
}

// Page interfaces
export interface PageMetadata {
  page_title: string;
  meta_description?: string;
  hero_headline?: string;
  hero_subheadline?: string;
  hero_background?: CosmicMedia;
  primary_cta_text?: string;
  primary_cta_link?: string;
  page_content?: string;
  features_section?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  show_build_cta: boolean;
}

export interface Page extends CosmicObject {
  metadata: PageMetadata;
}

// API Response interfaces
export interface CosmicResponse<T> {
  objects?: T[];
  object?: T;
  total?: number;
}

// Error interface for Cosmic API
export interface CosmicError {
  status?: number;
  message?: string;
}