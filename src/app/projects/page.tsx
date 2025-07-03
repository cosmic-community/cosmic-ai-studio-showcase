import { Suspense } from 'react';
import { getAllProjects } from '@/lib/cosmic';
import ProjectCard from '@/components/ProjectCard';
import type { ShowcaseProject } from '@/types/cosmic';

export const metadata = {
  title: 'Projects - Cosmic AI Studio Showcase',
  description: 'Explore amazing projects built with Cosmic AI Studio. From simple blogs to complex applications.',
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

// Projects Section Component
async function ProjectsSection(): Promise<JSX.Element> {
  const projects = await getAllProjects();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects && projects.length > 0 ? (
        projects.map((project: ShowcaseProject) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No projects available at the moment.</p>
        </div>
      )}
    </div>
  );
}

export default async function ProjectsPage(): Promise<JSX.Element> {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project Showcase
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover amazing websites, applications, and digital experiences built with Cosmic AI Studio. Get inspired and learn from real-world implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container-custom">
          <Suspense fallback={<LoadingGrid />}>
            <ProjectsSection />
          </Suspense>
        </div>
      </section>
    </div>
  );
}