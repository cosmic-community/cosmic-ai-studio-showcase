// src/app/use-cases/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getUseCaseBySlug, getAllUseCases } from '@/lib/cosmic';
import type { UseCase } from '@/types/cosmic';

interface UseCasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const useCases = await getAllUseCases();
  return useCases.map((useCase: UseCase) => ({
    slug: useCase.slug,
  }));
}

export async function generateMetadata({ params }: UseCasePageProps) {
  const { slug } = await params;
  const useCase = await getUseCaseBySlug(slug);
  
  if (!useCase) {
    return {
      title: 'Use Case Not Found',
    };
  }

  return {
    title: `${useCase.metadata.use_case_title || useCase.title} - Cosmic AI Studio`,
    description: useCase.metadata.description || `Learn about ${useCase.metadata.use_case_title || useCase.title} use case with Cosmic AI Studio`,
  };
}

export default async function UseCasePage({ params }: UseCasePageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const useCase = await getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Use Case Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center gap-2 mb-4">
                {useCase.metadata.industry && (
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                    {useCase.metadata.industry.value}
                  </span>
                )}
                {useCase.metadata.target_audience && (
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {useCase.metadata.target_audience.value}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {useCase.metadata.use_case_title || useCase.title}
              </h1>
              
              {useCase.metadata.description && (
                <p className="text-xl text-gray-600 mb-6">
                  {useCase.metadata.description}
                </p>
              )}
              
              {useCase.metadata.implementation_time && (
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <span className="mr-2">⏱</span>
                  <span className="font-medium">Implementation Time: {useCase.metadata.implementation_time}</span>
                </div>
              )}
            </div>

            {/* Hero Image */}
            {useCase.metadata.hero_image?.imgix_url && (
              <div className="mb-12">
                <img
                  src={`${useCase.metadata.hero_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={useCase.metadata.use_case_title || useCase.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Benefits Section */}
            {useCase.metadata.benefits && useCase.metadata.benefits.length > 0 && (
              <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {useCase.metadata.benefits.map((benefit: any, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-600 font-bold text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Features Used */}
            {useCase.metadata.ai_features_used && useCase.metadata.ai_features_used.length > 0 && (
              <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Features Utilized</h2>
                <div className="flex flex-wrap gap-3">
                  {useCase.metadata.ai_features_used.map((feature: string, index: number) => (
                    <span 
                      key={index}
                      className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg font-medium"
                    >
                      🤖 {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Implementation Details */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  This use case demonstrates the practical application of Cosmic AI Studio's powerful features 
                  in a real-world scenario. By leveraging AI-powered content generation, intelligent optimization, 
                  and seamless integrations, businesses can achieve remarkable results in a fraction of the time 
                  traditionally required for such projects.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Getting Started</h3>
                <p className="text-gray-700">
                  To implement a similar solution for your business, start by exploring our template library 
                  and documentation. Our AI-powered tools will guide you through the setup process, helping 
                  you customize the solution to meet your specific requirements.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Similar?</h3>
              <p className="text-primary-100 mb-6">
                Start your own project with Cosmic AI Studio and see how quickly you can bring your ideas to life.
              </p>
              <a 
                href="https://app.cosmicjs.com/signup"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Get Started Free
              </a>
            </div>

            {/* Back to Use Cases */}
            <div className="mt-12 text-center">
              <a 
                href="/use-cases"
                className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
              >
                ← Back to All Use Cases
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}