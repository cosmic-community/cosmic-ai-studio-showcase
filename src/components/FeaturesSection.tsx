// src/components/FeaturesSection.tsx
interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  className?: string;
}

const defaultFeatures: Feature[] = [
  {
    title: "AI Content Generation",
    description: "Create high-quality content with our intelligent writing assistant",
    icon: "🤖"
  },
  {
    title: "Visual Page Builder",
    description: "Drag and drop components to build pages visually",
    icon: "🎨"
  },
  {
    title: "Global CDN",
    description: "Lightning-fast content delivery worldwide",
    icon: "⚡"
  },
  {
    title: "Developer APIs",
    description: "RESTful APIs and GraphQL for any tech stack",
    icon: "⚙️"
  }
];

export default function FeaturesSection({ 
  title = "Why Choose Cosmic AI Studio?",
  subtitle = "Experience the future of web development with our AI-powered platform",
  features = defaultFeatures,
  className = ""
}: FeaturesSectionProps): JSX.Element {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}