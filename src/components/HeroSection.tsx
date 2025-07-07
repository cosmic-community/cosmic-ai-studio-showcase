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
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-purple-50 overflow-hidden ${className}`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative container-custom py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-gray-200/50">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Now with Advanced AI Features</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Build{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent animate-gradient-x">
              Stunning
            </span>
            <br />
            Websites with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-primary-600 bg-clip-text text-transparent">
              AI
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            {heroSubtitle}
          </p>
          
          {/* CTA Buttons */}
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href={page?.metadata.primary_cta_link || 'https://app.cosmicjs.com/signup'} 
                className="group relative bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
              >
                <span className="relative z-10">
                  {page?.metadata.primary_cta_text || 'Start Building with AI'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#showcase" 
                className="group bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl text-lg"
              >
                View Examples
              </a>
            </div>
          )}
          
          {/* Hero stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-sm text-gray-600">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">90%</div>
              <div className="text-sm text-gray-600">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">AI Features</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}