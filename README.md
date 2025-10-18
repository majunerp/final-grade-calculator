# Final Grade Calculator

A comprehensive, SEO-optimized web application for calculating final grades, weighted grades, and grade conversions. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### Core Calculators

- **Final Grade Calculator** - Calculate what grade you need on your final exam to achieve your target grade
- **Weighted Grade Calculator** - Handle complex grading systems with multiple assignments and custom weights
- **Grade Converter** - Convert between percentages, letter grades (A-F), and GPA (4.0 scale)

### Key Features

- Real-time calculations as you type
- Interactive charts and visualizations (powered by Recharts)
- Intelligent grade suggestions (easy/moderate/hard/impossible)
- Mobile-responsive design
- Dark mode support
- SEO-optimized with proper meta tags, structured data, and content

### SEO Content Pages

- How to Calculate Final Grade (comprehensive guide)
- Grade Calculator Guide
- Weighted vs Unweighted Grades
- College Grading Systems
- What Grade Do I Need? (FAQ)
- Calculators Index (tool aggregation)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## SEO Features

- Title optimization (40-60 characters)
- Meta descriptions (140-160 characters)
- Canonical URLs (absolute paths to https://finalgradecalculator.app/)
- Keyword density control (3-5%)
- Content length >800 words on key pages
- Robots.txt and sitemap.xml included
- Open Graph and Twitter Card support

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
final-grade-calculator/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Home (Final Grade Calculator)
│   ├── weighted-grade-calculator/
│   ├── grade-converter/
│   ├── how-to-calculate-final-grade/
│   ├── grade-calculator-guide/
│   ├── weighted-vs-unweighted-grades/
│   ├── college-grading-systems/
│   ├── what-grade-do-i-need/
│   ├── calculators/
│   ├── layout.tsx               # Root layout with Header/Footer
│   └── globals.css              # Global styles with custom CSS variables
├── components/                   # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FinalGradeCalculator.tsx
│   ├── WeightedGradeCalculator.tsx
│   └── GradeConverter.tsx
├── lib/                         # Utility functions
│   ├── gradeCalculations.ts    # Grade calculation logic
│   └── seo.ts                  # SEO metadata helpers
├── public/                      # Static assets
│   ├── logo.png
│   ├── robots.txt
│   └── sitemap.xml
└── PRODUCT_PLAN.md             # Product requirements document
```

## Deployment

### Vercel (Recommended)

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables if needed
4. Deploy

### Other Platforms

The site can be deployed on any platform that supports Next.js:

- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## Configuration

### Domain Setup

Update the canonical URL in `/lib/seo.ts`:

```typescript
const BASE_URL = 'https://finalgradecalculator.app';
```

### Google Site Verification

Add your verification code in `/app/layout.tsx`:

```typescript
verification: {
  google: "your-google-site-verification-code",
}
```

### Sitemap

The sitemap is located at `/public/sitemap.xml`. Update the `lastmod` dates after making content changes.

## Customization

### Brand Colors

Update brand colors in `/app/globals.css`:

```css
:root {
  --primary: #0EA5E9;      /* Main blue */
  --primary-dark: #0369A1;  /* Dark blue */
  --primary-light: #7DD3FC; /* Light blue */
}
```

### Grading Scale

Modify the grading scale in `/lib/gradeCalculations.ts` to match your institution's standards.

## Performance

- All pages are statically generated at build time
- Optimized images with Next.js Image component
- Minimal JavaScript bundle size
- Fast Time to First Byte (TTFB)

## SEO Best Practices

- Proper heading hierarchy (H1 > H2 > H3)
- Descriptive alt text for images
- Internal linking structure
- Mobile-first design
- Fast page load times
- Semantic HTML

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, please check the documentation or open an issue in the repository.
