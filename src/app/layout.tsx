import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cosmic AI Studio Showcase',
  description: 'Discover amazing projects built with Cosmic AI Studio - the future of AI-powered content management and web development.',
  keywords: ['cosmic', 'ai', 'studio', 'cms', 'headless', 'next.js', 'react'],
  authors: [{ name: 'Cosmic' }],
  openGraph: {
    title: 'Cosmic AI Studio Showcase',
    description: 'Discover amazing projects built with Cosmic AI Studio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmic AI Studio Showcase',
    description: 'Discover amazing projects built with Cosmic AI Studio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}