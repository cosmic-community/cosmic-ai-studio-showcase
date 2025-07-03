import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Cosmic AI Studio Showcase',
  description: 'Learn about Cosmic AI Studio and how we\'re revolutionizing web development with AI-powered tools.',
};

export default function AboutPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Cosmic AI Studio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're building the future of web development with AI-powered tools that make creating beautiful, functional websites faster and easier than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Cosmic AI Studio, we believe that everyone should have access to powerful web development tools, regardless of their technical background. Our mission is to democratize web development by combining the flexibility of headless CMS with the intelligence of AI.
              </p>
              <p className="text-gray-600 mb-4">
                We're committed to providing developers, designers, and content creators with the tools they need to build exceptional digital experiences without the complexity traditionally associated with modern web development.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format,compress"
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with developer-friendly tools to create a unique web development experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">
                Leverage advanced AI to generate content, optimize performance, and suggest improvements automatically.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Built on modern headless architecture for unparalleled performance and scalability.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Designer Friendly</h3>
              <p className="text-gray-600">
                Intuitive interface that allows designers to create without coding, while giving developers full control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A diverse group of engineers, designers, and AI specialists working together to shape the future of web development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'photo-1494790108755-2616b612b47c' },
              { name: 'Michael Chen', role: 'CTO', image: 'photo-1507003211169-0a1dd7228f2d' },
              { name: 'Emma Rodriguez', role: 'Head of AI', image: 'photo-1438761681033-6461ffad8d80' },
              { name: 'David Kim', role: 'Lead Designer', image: 'photo-1500648767791-00dcc994a43e' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={`https://images.unsplash.com/${member.image}?w=200&h=200&fit=crop&auto=format,compress`}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and creators who are already building the future with Cosmic AI Studio.
          </p>
          <a 
            href="https://app.cosmicjs.com/signup"
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Start Building Today
          </a>
        </div>
      </section>
    </div>
  );
}