export default function CTASection(): JSX.Element {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main CTA */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Ready to Build the 
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent"> Future?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of creators who are already building stunning websites with AI. 
            No credit card required. Start creating in minutes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="https://app.cosmicjs.com/signup" 
              className="group relative bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 text-lg">Start Building with AI</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#showcase" 
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <span className="text-lg">View Examples</span>
            </a>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Launch in Minutes</h3>
              <p className="text-gray-400">AI handles the heavy lifting while you focus on creativity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Beautiful by Default</h3>
              <p className="text-gray-400">Professional designs that adapt to your content automatically</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Global CDN and optimized performance out of the box</p>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-gray-400 mb-8">Trusted by teams at</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-white font-semibold">Microsoft</div>
              <div className="text-white font-semibold">Netflix</div>
              <div className="text-white font-semibold">Shopify</div>
              <div className="text-white font-semibold">Stripe</div>
              <div className="text-white font-semibold">Airbnb</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}