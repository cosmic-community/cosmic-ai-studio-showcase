import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';
import type { Page } from '@/types/cosmic';

interface HeroSectionProps {
  page?: Page | null;
}

export default function HeroSection({ page }: HeroSectionProps): JSX.Element {
  const heroHeadline = page?.metadata?.hero_headline || "Build Beautiful Websites with AI";
  const heroSubheadline = page?.metadata?.hero_subheadline || "Cosmic AI Studio combines the power of headless CMS with intelligent AI tools. Create, manage, and deploy stunning websites faster than ever before.";
  const primaryCtaText = page?.metadata?.primary_cta_text || "Start Building with AI";
  const primaryCtaLink = page?.metadata?.primary_cta_link || "https://app.cosmicjs.com/signup";

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8 border border-primary-200 dark:border-primary-800">
            <Sparkles className="w-4 h-4" />
            <span>Powered by AI</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              {heroHeadline.split(' ').slice(0, 2).join(' ')}
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              {heroHeadline.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {heroSubheadline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href={primaryCtaLink}
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/showcase"
              className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <span>View Showcase</span>
            </Link>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Global CDN and optimized performance for instant loading
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AI-Powered
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intelligent content generation and optimization tools
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Developer Friendly
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Modern APIs, webhooks, and seamless integrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}