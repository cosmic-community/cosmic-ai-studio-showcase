import { Users, Globe, Zap, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Active Users',
    description: 'Developers and creators building with AI',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe,
    value: '1M+',
    label: 'API Requests',
    description: 'Processed daily across our platform',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Zap,
    value: '99.9%',
    label: 'Uptime',
    description: 'Guaranteed reliability for your projects',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Award,
    value: '10K+',
    label: 'Projects',
    description: 'Launched successfully with our tools',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function StatsSection(): JSX.Element {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join a growing community of creators who are building the future of web development with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}