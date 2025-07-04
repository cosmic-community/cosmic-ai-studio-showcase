// src/components/HeroSection.tsx
import type { Page } from '@/types/cosmic';

interface HeroSectionProps {
  page: Page | null;
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  backgroundImage?: string;
  className?: string;
}

export default function HeroSection({ 
  page, 
  title, 
  subtitle, 
  showCTA = true,
  backgroundImage,
  className = ""
}: HeroSectionProps): JSX.Element {
  const defaultHeroImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop&auto=format,compress";
  
  const heroTitle = title || page?.metadata.hero_headline || 'Build Beautiful Websites with AI';
  const heroSubtitle = subtitle || page?.metadata.hero_subheadline || 'Cosmic AI Studio combines the power of headless CMS with intelligent AI tools. Create, manage, and deploy stunning websites faster than ever before.';
  const heroBg = backgroundImage || page?.metadata.hero_background?.imgix_url || defaultHeroImage;
  
  return (
    <section className={`relative bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${heroBg}?w=1200&h=600&fit=crop&auto=format,compress)`
        }}
      ></div>
      <div className="relative container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {heroTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {heroSubtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={page?.metadata.primary_cta_link || 'https://app.cosmicjs.com/signup'} 
                className="btn-primary text-lg"
              >
                {page?.metadata.primary_cta_text || 'Get Started'}
              </a>
              <a 
                href="/projects" 
                className="btn-secondary text-lg"
              >
                View Projects
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}