// src/app/use-cases/page.tsx
import { Suspense } from 'react';
import { getAllUseCases } from '@/lib/cosmic';
import UseCaseCard from '@/components/UseCaseCard';
import HeroSection from '@/components/HeroSection';
import type { UseCase } from '@/types/cosmic';

export const metadata = {
  title: 'Use Cases - Cosmic AI Studio Showcase',
  description: 'Explore real-world use cases and applications built with Cosmic AI Studio across different industries.',
};

// Loading component
function LoadingGrid(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="aspect-video bg-gray-200"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Use Cases Section Component
async function UseCasesSection(): Promise<JSX.Element> {
  const useCases = await getAllUseCases();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {useCases && useCases.length > 0 ? (
        useCases.map((useCase: UseCase) => (
          <UseCaseCard key={useCase.id} useCase={useCase} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No use cases available at the moment.</p>
        </div>
      )}
    </div>
  );
}

export default async function UseCasesPage(): Promise<JSX.Element> {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection 
        page={null}
        title="Use Cases & Applications"
        subtitle="Discover how businesses across different industries are leveraging Cosmic AI Studio to build amazing digital experiences. From e-commerce to corporate blogs, see real-world implementations."
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=600&fit=crop&auto=format,compress"
      />

      {/* Use Cases Grid */}
      <section className="py-16">
        <div className="container-custom">
          <Suspense fallback={<LoadingGrid />}>
            <UseCasesSection />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Own Use Case?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start building your own AI-powered website today and join the growing community of Cosmic AI Studio users.
          </p>
          <a 
            href="https://app.cosmicjs.com/signup"
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
}