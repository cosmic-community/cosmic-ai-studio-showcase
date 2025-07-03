import Link from 'next/link';
import type { ShowcaseProject } from '@/types/cosmic';

interface ProjectCardProps {
  project: ShowcaseProject;
}

export default function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const { metadata } = project;
  const defaultImage = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format,compress";

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={metadata.screenshot?.imgix_url ? 
            `${metadata.screenshot.imgix_url}?w=600&h=400&fit=crop&auto=format,compress` : 
            defaultImage
          }
          alt={metadata.project_name || project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {metadata.project_name || project.title}
          </h3>
          {metadata.featured_project && (
            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        {metadata.creator_name && (
          <p className="text-sm text-gray-500 mb-3">
            by {metadata.creator_name}
          </p>
        )}
        
        {metadata.project_description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {metadata.project_description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {metadata.project_category && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {metadata.project_category.value}
              </span>
            )}
            {metadata.development_time && (
              <span className="text-xs text-gray-500">
                {metadata.development_time}
              </span>
            )}
          </div>
        </div>
        
        {metadata.tech_stack && metadata.tech_stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1">
            {metadata.tech_stack.slice(0, 3).map((tech: string, index: number) => (
              <span 
                key={index}
                className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {metadata.tech_stack.length > 3 && (
              <span className="text-xs text-gray-500">
                +{metadata.tech_stack.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <div className="mt-6 flex space-x-3">
          {metadata.live_url && (
            <a 
              href={metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
            >
              View Live
            </a>
          )}
          {metadata.github_url && (
            <a 
              href={metadata.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}