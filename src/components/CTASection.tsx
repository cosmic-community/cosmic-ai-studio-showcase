import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection(): JSX.Element {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-purple-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span>Start Building Today</span>
          </div>

          {/* Main headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Build Something
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of creators who are already building the future with Cosmic AI Studio. 
            Start your free trial today and experience the power of AI-driven development.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://app.cosmicjs.com/signup"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-medium text-lg px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-medium text-lg px-8 py-4 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 backdrop-blur-sm"
            >
              <span>View Examples</span>
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Deploy in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}