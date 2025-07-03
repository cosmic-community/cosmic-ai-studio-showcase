import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjects } from '@/lib/cosmic';
import type { ShowcaseProject } from '@/types/cosmic';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project: ShowcaseProject) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Cosmic AI Studio`,
    description: project.metadata.project_description || `Learn about ${project.title} built with Cosmic AI Studio`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Project Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              {project.metadata.project_description && (
                <p className="text-xl text-gray-600 mb-6">
                  {project.metadata.project_description}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.metadata.tech_stack?.map((tech: string, index: number) => (
                  <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Image */}
            {project.metadata.screenshot?.imgix_url && (
              <div className="mb-12">
                <img
                  src={`${project.metadata.screenshot.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Project Content */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <div className="prose max-w-none">
                <p className="text-gray-700">
                  This project showcases the power and flexibility of Cosmic AI Studio. 
                  Built with modern web technologies and AI-powered tools, it demonstrates 
                  how quickly and efficiently you can create professional-grade applications.
                </p>
                
                {project.metadata.project_description && (
                  <p className="text-gray-700 mt-4">
                    {project.metadata.project_description}
                  </p>
                )}
              </div>

              {/* Project Details */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.metadata.live_url && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Demo</h3>
                      <a 
                        href={project.metadata.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        View Live Site →
                      </a>
                    </div>
                  )}
                  {project.metadata.github_url && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Source Code</h3>
                      <a 
                        href={project.metadata.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        View on GitHub →
                      </a>
                    </div>
                  )}
                  {project.metadata.creator_name && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Created By</h3>
                      <span className="text-gray-600">{project.metadata.creator_name}</span>
                    </div>
                  )}
                  {project.metadata.development_time && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Development Time</h3>
                      <span className="text-gray-600">{project.metadata.development_time}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Back to Projects */}
            <div className="text-center">
              <a 
                href="/projects"
                className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
              >
                ← Back to All Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}