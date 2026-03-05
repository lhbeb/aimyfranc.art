# Aimy Sidney Franco - Next.js Migration

This is a Next.js migration of the Aimy Sidney Franco portfolio website, preserving all the original design elements, content, and functionality.

## 🎨 About

Aimy Sidney Franco is a professional portrait artist's portfolio website showcasing:
- Custom human portraits
- Pet portraits
- Bird paintings
- Art lessons and courses
- Commission information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd nextjs-abirkhalil
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
nextjs-abirkhalil/
├── public/
│   ├── images/       # All original images from the site
│   └── fonts/        # Original font files
├── src/
│   ├── app/          # Next.js 14 App Router pages
│   │   ├── about/
│   │   ├── commission/
│   │   ├── contact/
│   │   ├── courses/
│   │   ├── portfolio/
│   │   ├── layout.tsx
│   │   ├── page.tsx  # Homepage
│   │   └── globals.css
│   └── components/   # Reusable React components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── HeroCarousel.tsx
```

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Fonts:** Google Fonts (Lato, Abel)
- **Images:** Next.js Image Optimization

## 🎨 Design Features

### Colors
- Primary: `#e8cac6` (soft pink)
- Accent: `#b2221b` (deep red)
- Dark: `#3f3e3e` (charcoal)
- Light: `#ededed` (off-white)
- White: `#ffffff`

### Typography
- Body: Lato (sans-serif)
- Headings: Abel (sans-serif, uppercase)

### Key Features
- Responsive navigation with mobile menu
- Auto-rotating hero carousel
- Service cards with hover effects
- Contact form
- Portfolio gallery with categories
- Commission pricing tables
- Course level breakdowns

## 📄 Available Pages

- **/** - Homepage with hero carousel and services
- **/about** - Artist biography and specialties
- **/portfolio** - Gallery of artwork
- **/commission** - Pricing and commission process
- **/contact** - Contact form and information
- **/courses** - Art lesson offerings
- Additional pages can be added following the same pattern

## 🔧 Customization

### Adding New Pages
Create a new folder in `src/app/` with a `page.tsx` file:

```tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewPage() {
  return (
    <>
      <Header />
      <main className="site-content pt-20">
        {/* Your content here */}
      </main>
      <Footer />
    </>
  );
}
```

### Modifying Styles
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles: Use Tailwind classes or create new CSS classes in globals.css

### Updating Content
All content is directly in the page components for easy editing. Images are in the `public/images/` directory.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended - zero config)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## 📝 Migration Notes

### Original vs. New
- **Original:** WordPress + Elementor
- **New:** Next.js 14 + React + TypeScript
- **Preserved:** All design elements, colors, typography, layout, and content
- **Improved:** Performance, SEO, mobile responsiveness, maintainability

### What's Included
✅ Exact color scheme and typography  
✅ All navigation menus (desktop & mobile)  
✅ Hero image carousel  
✅ Service cards  
✅ Portfolio gallery  
✅ Contact form  
✅ Commission pricing  
✅ Course information  
✅ Footer with social links  
✅ SEO metadata  
✅ Responsive design  

## 🤝 Support

For questions or issues, contact the developer or refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is built for Aimy Sidney Franco. All artwork and content © Aimy Sidney Franco.

---

**Developer:** Migrated to Next.js by AI Assistant  
**Original Site:** https://aimysidneyfranco.com  
**Last Updated:** February 2026
