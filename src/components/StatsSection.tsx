export default function StatsSection(): JSX.Element {
  const stats = [
    {
      number: "10K+",
      label: "Websites Built",
      description: "Powered by AI",
      icon: "🚀"
    },
    {
      number: "90%",
      label: "Faster Development",
      description: "With AI assistance",
      icon: "⚡"
    },
    {
      number: "50+",
      label: "AI Features",
      description: "At your fingertips",
      icon: "🤖"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Enterprise reliability",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Join a growing community of developers, marketers, and creators building the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-primary-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">1,000+ Active Builders</div>
                <div className="text-primary-200 text-sm">Creating right now</div>
              </div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-left">
              <div className="text-white font-semibold">Featured on</div>
              <div className="text-primary-200 text-sm">Product Hunt, Dev.to, CSS-Tricks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}