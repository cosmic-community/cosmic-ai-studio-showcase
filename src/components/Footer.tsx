import Link from 'next/link';
import { Github, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: 'https://cosmicjs.com/pricing' },
      { name: 'Documentation', href: 'https://docs.cosmicjs.com' },
      { name: 'API Reference', href: 'https://docs.cosmicjs.com/api' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '#projects' },
      { name: 'Videos', href: '#videos' },
      { name: 'Community', href: 'https://community.cosmicjs.com' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: 'https://cosmicjs.com/careers' },
      { name: 'Contact', href: 'https://cosmicjs.com/contact' },
      { name: 'Support', href: 'https://cosmicjs.com/support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: 'https://cosmicjs.com/privacy' },
      { name: 'Terms of Service', href: 'https://cosmicjs.com/terms' },
      { name: 'Cookie Policy', href: 'https://cosmicjs.com/cookies' },
    ],
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/cosmicjs',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/cosmicjs',
      icon: Twitter,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/cosmicjs',
      icon: Youtube,
    },
    {
      name: 'Email',
      href: 'mailto:hello@cosmicjs.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold">
                Cosmic AI Studio
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Build beautiful websites with the power of AI. The future of web development is here.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2">Stay updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest updates on AI-powered web development.
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-r-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} Cosmic JS. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Built with 💚 using Cosmic AI Studio
          </p>
        </div>
      </div>
    </footer>
  );
}