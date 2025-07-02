<!-- README_START -->
# Cosmic AI Studio Showcase

A stunning, modern marketing website that demonstrates the full power of Cosmic AI Studio. This site serves as both a showcase and a live example of what's possible when combining AI-powered content management with modern web development.

![Cosmic AI Studio](https://imgix.cosmicjs.com/1cff6860-5786-11f0-a051-23c10f41277a-photo-1518770660439-4636190af475-1751489396870.jpg?w=1200&h=600&fit=crop&auto=format,compress)

## ✨ Features

- **AI-Powered Content Management** - Real-time content generation and optimization
- **Interactive Showcase Gallery** - Community builds with dynamic filtering
- **Video Integration** - Embedded tutorials and product demos
- **Responsive Design** - Mobile-first approach with stunning visuals
- **Performance Optimized** - Imgix integration for lightning-fast image loading
- **TypeScript Ready** - Full type safety and developer experience
- **SEO Optimized** - Dynamic meta tags and structured content
- **Testimonial System** - Real user reviews with ratings
- **Use Case Demonstrations** - Industry-specific examples
- **Blog Platform** - AI-generated content with rich formatting

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=built-with-cosmic-ai-studio-production)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Build a modern, responsive marketing website that serves as a live example of what can be created using Cosmic AI Studio.

The site should:
• Be visually stunning and developer-friendly
• Include animated elements and interactive components to showcase front-end potential
• Use Cosmic's AI features (Content Assistant, AI Builder, etc.) as real, working demos
• Feature a homepage, about page, use cases page, blog, documentation page, and a showcase gallery of community builds
• Include a "Build with AI" call-to-action prominently on every page, encouraging visitors to try the AI Studio
• Contain embedded explainer videos, how-tos, and testimonials from real users
• Highlight the benefits of Cosmic AI Studio for developers, marketers, and product teams
• Use real-time AI-generated content in blog or use case sections to show dynamic creation

Design it to be sleek, minimal, with bold typography and vibrant visuals. Use Cosmic's native Imgix integration for optimized images and make sure content is editable through the Cosmic CMS.

This website is both a product showcase and the product itself — so make it an inspiring, conversion-driving experience."

### Code Generation Prompt

> Build a modern, responsive marketing website that serves as a live example of what can be created using Cosmic AI Studio. The site should be visually stunning and developer-friendly, include animated elements and interactive components to showcase front-end potential, use Cosmic's AI features as real working demos, feature a homepage, about page, use cases page, blog, documentation page, and a showcase gallery of community builds. Include a "Build with AI" call-to-action prominently on every page, contain embedded explainer videos, testimonials from real users, and highlight the benefits for developers, marketers, and product teams. Design it to be sleek, minimal, with bold typography and vibrant visuals using Cosmic's native Imgix integration.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **CMS**: [Cosmic](https://www.cosmicjs.com)
- **TypeScript**: Full type safety
- **Image Optimization**: Imgix integration
- **Runtime**: Bun for package management
- **Deployment**: Vercel-ready configuration

## 🏁 Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account and bucket

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cosmic-ai-studio-showcase
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📖 Cosmic SDK Examples

### Fetching Blog Posts
```typescript
import { cosmic } from '@/lib/cosmic'

const posts = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Getting Showcase Projects
```typescript
const projects = await cosmic.objects
  .find({ type: 'showcase-projects' })
  .depth(1)
```

### Retrieving Page Content
```typescript
const page = await cosmic.objects
  .findOne({ type: 'pages', slug: 'homepage' })
  .depth(1)
```

## 🎛️ Cosmic CMS Integration

This application integrates with [Cosmic](https://www.cosmicjs.com) to manage:

- **Pages** - Homepage, About, and other static content
- **Blog Posts** - AI-powered content with rich formatting
- **Showcase Projects** - Community builds gallery
- **Use Cases** - Industry-specific examples
- **Videos** - Tutorial and demo content
- **Testimonials** - Customer reviews and ratings

Visit the [Cosmic docs](https://www.cosmicjs.com/docs) for more information about the headless CMS capabilities.

## 🚀 Deployment Options

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Import your Git repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically

### Netlify
1. Connect your Git repository
2. Set build command: `bun run build`
3. Set publish directory: `out`
4. Add environment variables
5. Deploy

### Environment Variables for Production
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

<!-- README_END -->