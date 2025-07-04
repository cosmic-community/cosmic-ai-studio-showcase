// src/components/UseCaseCard.tsx
import Link from 'next/link';
import type { UseCase } from '@/types/cosmic';

interface UseCaseCardProps {
  useCase: UseCase;
}

export default function UseCaseCard({ useCase }: UseCaseCardProps): JSX.Element {
  const { metadata } = useCase;
  const defaultImage = "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&auto=format,compress";

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={metadata.hero_image?.imgix_url ? 
            `${metadata.hero_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress` : 
            defaultImage
          }
          alt={metadata.use_case_title || useCase.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {metadata.industry && (
            <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
              {metadata.industry.value}
            </span>
          )}
          {metadata.target_audience && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {metadata.target_audience.value}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          <Link href={`/use-cases/${useCase.slug}`}>
            {metadata.use_case_title || useCase.title}
          </Link>
        </h3>
        
        {metadata.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {metadata.description}
          </p>
        )}
        
        {metadata.ai_features_used && metadata.ai_features_used.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-700 mb-2">AI Features:</p>
            <div className="flex flex-wrap gap-1">
              {metadata.ai_features_used.slice(0, 3).map((feature: string, index: number) => (
                <span 
                  key={index}
                  className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
              {metadata.ai_features_used.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{metadata.ai_features_used.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          {metadata.implementation_time && (
            <span className="text-sm text-gray-500">
              ⏱ {metadata.implementation_time}
            </span>
          )}
          <Link 
            href={`/use-cases/${useCase.slug}`}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}