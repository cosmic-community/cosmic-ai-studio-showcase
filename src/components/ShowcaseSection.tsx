import { getFeaturedProjects } from '@/lib/cosmic';
import type { ShowcaseProject } from '@/types/cosmic';

export default async function ShowcaseSection(): Promise<JSX.Element> {
  const projects = await getFeaturedProjects();
  
  return (
    <section id="showcase" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built with AI Magic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover incredible websites and applications created by our community using Cosmic AI Studio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.length > 0 ? (
            projects.map((project: ShowcaseProject) => (
              <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={`${project.metadata.screenshot?.imgix_url}?w=600&h=338&fit=crop&auto=format,compress`}
                    alt={project.metadata.project_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
                      {project.metadata.project_category?.value}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1">
                      {project.metadata.project_name}
                    </h3>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                      {project.metadata.development_time}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.metadata.project_description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {project.metadata.creator_name?.charAt(0) || 'A'}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {project.metadata.creator_name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.metadata.tech_stack?.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.metadata.tech_stack && project.metadata.tech_stack.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        +{project.metadata.tech_stack.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.metadata.live_url && (
                      <a
                        href={project.metadata.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
                      >
                        View Live
                      </a>
                    )}
                    {project.metadata.github_url && (
                      <a
                        href={project.metadata.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
              <p className="text-gray-500">Loading amazing projects...</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to showcase your creation?
          </p>
          <a 
            href="https://app.cosmicjs.com/signup" 
            className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Building Your Project
          </a>
        </div>
      </div>
    </section>
  );
}