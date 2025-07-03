// src/types/cosmic.ts

// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  status: string;
  created_at: string;
  modified_at: string;
  metadata: Record<string, any>;
}

// Media file interface
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Select dropdown value interface
export interface SelectDropdownValue {
  key: string;
  value: string;
}

// Showcase Project interfaces
export interface ShowcaseProjectMetadata {
  project_name: string;
  creator_name?: string;
  project_description: string;
  screenshot?: CosmicFile;
  additional_images?: CosmicFile[];
  live_url?: string;
  github_url?: string;
  project_category?: SelectDropdownValue;
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
  thumbnail?: CosmicFile;
  video_type?: SelectDropdownValue;
  duration?: string;
  featured_video: boolean;
}

export interface Video extends CosmicObject {
  metadata: VideoMetadata;
}

// Blog Post interfaces
export interface BlogPostMetadata {
  post_title: string;
  excerpt?: string;
  content: string;
  featured_image?: CosmicFile;
  category?: SelectDropdownValue;
  author_name?: string;
  author_photo?: CosmicFile;
  reading_time?: string;
  featured_post: boolean;
}

export interface BlogPost extends CosmicObject {
  metadata: BlogPostMetadata;
}

// Use Case interfaces
export interface UseCaseMetadata {
  use_case_title: string;
  industry?: SelectDropdownValue;
  target_audience?: SelectDropdownValue;
  description: string;
  hero_image?: CosmicFile;
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

// Page interfaces
export interface PageMetadata {
  page_title: string;
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
  show_build_cta: boolean;
}

export interface Page extends CosmicObject {
  metadata: PageMetadata;
}

// Testimonial interfaces
export interface TestimonialMetadata {
  customer_name: string;
  customer_title?: string;
  company_name?: string;
  customer_photo?: CosmicFile;
  company_logo?: CosmicFile;
  testimonial_text: string;
  rating?: SelectDropdownValue;
  use_case_category?: SelectDropdownValue;
}

export interface Testimonial extends CosmicObject {
  metadata: TestimonialMetadata;
}

// API Response interfaces
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

export interface CosmicSingleResponse<T> {
  object: T;
}