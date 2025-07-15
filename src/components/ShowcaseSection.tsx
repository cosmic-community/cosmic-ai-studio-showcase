import { cosmic } from '@/lib/cosmic';
import { ShowcaseProject } from '@/types/cosmic';
import { ExternalLink, Github, Clock } from 'lucide-react';
import Link from 'next/link';

async function getShowcaseProjects(): Promise<ShowcaseProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'showcase-projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(6);
    
    return response.objects || [];
  } catch (error) {
    console.error('Error fetching showcase projects:', error);
    return [];
  }
}

export default async function ShowcaseSection(): Promise<JSX.Element> {
  const projects = await getShowcaseProjects();

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Built with
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> Cosmic AI Studio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Discover amazing projects created by our community using AI-powered tools and headless CMS architecture.
          </p>
          <Link
            href="/showcase"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                {project.metadata.screenshot?.imgix_url ? (
                  <img
                    src={`${project.metadata.screenshot.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={project.metadata.project_name || project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-gray-400 dark:text-gray-600">No image</div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.metadata.project_category && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                      {project.metadata.project_category.value}
                    </span>
                  )}
                  {project.metadata.development_time && (
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="w-3 h-3" />
                      {project.metadata.development_time}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.metadata.project_name || project.title}
                </h3>

                {project.metadata.creator_name && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    by {project.metadata.creator_name}
                  </p>
                )}

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.metadata.project_description}
                </p>

                {/* Tech Stack */}
                {project.metadata.tech_stack && project.metadata.tech_stack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metadata.tech_stack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.metadata.tech_stack.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        +{project.metadata.tech_stack.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.metadata.live_url && (
                    <a
                      href={project.metadata.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.metadata.github_url && (
                    <a
                      href={project.metadata.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}