import { Bot, Palette, Code, Zap, Shield, Globe } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  features?: Feature[];
}

const defaultFeatures = [
  {
    icon: 'Bot',
    title: 'AI Content Generation',
    description: 'Create high-quality content with our intelligent writing assistant that understands your brand voice and audience.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: 'Palette',
    title: 'Visual Page Builder',
    description: 'Design beautiful pages with our intuitive drag-and-drop interface. No coding required.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: 'Code',
    title: 'Developer APIs',
    description: 'RESTful APIs and GraphQL endpoints for seamless integration with any tech stack.',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: 'Zap',
    title: 'Lightning Performance',
    description: 'Global CDN, image optimization, and caching for blazing-fast load times worldwide.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'Bank-level security with encrypted data, regular backups, and compliance certifications.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: 'Globe',
    title: 'Global Scale',
    description: 'Built to handle millions of requests with 99.9% uptime guarantee and auto-scaling.',
    color: 'from-indigo-500 to-purple-500'
  }
];

const iconMap = {
  Bot,
  Palette,
  Code,
  Zap,
  Shield,
  Globe
};

export default function FeaturesSection({ features }: FeaturesSectionProps): JSX.Element {
  const displayFeatures = features && features.length > 0 ? features : defaultFeatures;

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to Build
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> Amazing Websites</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From AI-powered content creation to enterprise-grade infrastructure, 
            we provide all the tools you need to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Bot;
            const colorClass = (feature as any).color || 'from-blue-500 to-cyan-500';
            
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}