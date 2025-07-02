'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Cosmic AI Showcase</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/use-cases" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Use Cases
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              About
            </Link>
            <a 
              href="https://app.cosmicjs.com/signup" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link 
                href="/use-cases" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={closeMenu}
              >
                Use Cases
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <a 
                href="https://app.cosmicjs.com/signup" 
                className="btn-primary inline-block text-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}