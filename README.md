# Ardira Website - React Version 🚀

A modern, responsive React website for Ardira - 100% Salesforce-native applications.

## Features

✨ **Modern React Architecture**

- Component-based structure for maintainability
- React Hooks for state management
- Auto-play product carousel with manual controls
- Form validation and submission handling
- Smooth animations and transitions

🎯 **Key Sections**

- **Navigation** - Sticky header with navigation links
- **Hero Section** - Eye-catching introduction with CTAs
- **Trusted Partners** - Auto-scrolling logo carousel
- **Product Showcase** - Interactive tabs for all 5 Ardira products
- **Statistics** - Key metrics displayed prominently
- **Why Native** - Benefits and feature comparisons
- **Call-to-Action** - Promotional section
- **Contact Form** - Fully functional customer inquiry form
- **Footer** - Complete company information and links

⚡ **Performance**

- Lightweight and fast-loading
- Responsive CSS Grid/Flexbox layout
- Mobile-first responsive design
- Optimized animations with CSS transitions
- Auto-play carousel with pause on hover

## Project Structure

```
d:\Ardira Website RU\
├── public/
│   └── index.html              # React root HTML
├── src/
│   ├── components/             # React components
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── TrustedSection.js / TrustedSection.css
│   │   ├── Products.js / Products.css
│   │   ├── Stats.js / Stats.css
│   │   ├── Features.js / Features.css
│   │   ├── CTA.js / CTA.css
│   │   ├── Contact.js / Contact.css
│   │   └── Footer.js / Footer.css
│   ├── App.js                  # Main App component
│   ├── index.js                # React entry point
│   └── index.css               # Global styles
├── assets/                     # Images and logos folder
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Navigate to project directory**

```bash
cd d:\Ardira Website RU
```

2. **Install dependencies**

```bash
npm install
```

3. **Copy assets**

- Copy all files from `D:\Ardira Website Green\src\assets\` to `d:\Ardira Website RU\assets\`
- This includes logos, product cards, and partner logos

4. **Start development server**

```bash
npm run dev
```

The website will open at `http://localhost:3000`

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (⚠️ irreversible)
npm run eject
```

## Color Theme

The website uses a beautiful green color palette:

- **Primary Green**: #39B44A (main brand color)
- **Dark Green**: #2a8f38 (hover states)
- **Light Green**: #e8f7ea (backgrounds)
- **Navy**: #1a2b3c (text/dark elements)
- **Blue Accent**: #27AAE1 (secondary accent)

All colors are defined as CSS variables in `src/index.css` for easy customization.

## Component Overview

### Navbar

- Sticky navigation with logo
- Responsive menu
- Demo button with styling

### Hero

- Gradient background with animated shapes
- Animated badge with pulsing dot
- CTAs and trust indicators
- Fade-in animations on scroll

### TrustedSection

- Auto-scrolling partner logo carousel
- Grayscale to colored hover effect
- Responsive grid

### Products

- **Interactive tabs** - Click to switch products
- **Auto-play** - Rotates every 5 seconds
- **Feature lists** - Checkmark icons for features
- Product images and descriptions
- Smooth transitions between products

### Stats

- 4-column grid layout
- Responsive 2-column on smaller screens
- Animated number displays

### Features

- 3-column feature cards
- Comparison table (native vs non-native)
- Hover effects and animations

### Contact

- **Contact form** with validation
- **Submit feedback** - Shows success message
- Contact information with icons
- Responsive two-column layout

### Footer

- Multi-column layout with links
- Logo and company description
- Legal links and copyright

## Customization

### Change Colors

Edit `src/index.css` root variables:

```css
:root {
  --primary-green: #39b44a;
  --primary-green-dark: #2a8f38;
  /* ... other colors */
}
```

### Update Product Information

Edit `src/components/Products.js` - modify the `products` object with new data.

### Add/Remove Products

1. Update `products` object in `Products.js`
2. Update `productNames` mapping
3. Products will auto-update in both tabs and carousel

### Modify Contact Form

Edit `src/components/Contact.js` - customize form fields and submission handling.

### Change Company Details

Update links in `src/components/Contact.js` and `src/components/Footer.js`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Performance Optimizations

✨ **CSS Optimization**

- CSS Grid and Flexbox layouts
- Hardware-accelerated animations
- Minimal reflows and repaints

✨ **React Optimization**

- Functional components with Hooks
- Efficient state management
- No unnecessary re-renders

✨ **Image Handling**

- WebP format for smaller file sizes
- Lazy loading with native browser attributes
- Optimized alt text for accessibility

## Interactive Features

1. **Product Auto-Play Carousel**
   - Rotates every 5 seconds
   - Pauses on hover
   - Manual tab controls

2. **Form Validation**
   - Required field checking
   - Success feedback
   - Reset on submission

3. **Smooth Scrolling**
   - Anchor link navigation
   - CSS scroll-behavior

4. **Hover Effects**
   - Button transitions
   - Card animations
   - Icon color changes

## Future Enhancements

- Add testimonials carousel
- Integrate with email service (SendGrid, Mailchimp)
- Add blog section
- Multi-language support
- Dark mode toggle
- Analytics integration

## Deployment

### Netlify

```bash
npm run build
# Deploy the build folder to Netlify
```

### Vercel

```bash
npm run build
# Connect repository to Vercel for auto-deployment
```

### Traditional Hosting

```bash
npm run build
# Upload contents of build/ folder to your server
```

## Dependencies

- **react** - UI library
- **react-dom** - React DOM renderer
- **react-scripts** - Build and test tooling

## Development

### Adding New Components

1. Create new file in `src/components/ComponentName.js`
2. Create corresponding CSS file `src/components/ComponentName.css`
3. Import and use in `src/App.js`

### Debugging

- Use React Developer Tools browser extension
- Check browser console for errors
- Use `npm start` for hot reload development

## Troubleshooting

**Issue**: Assets not loading

- **Solution**: Ensure assets folder is in `public/` directory or adjust paths

**Issue**: Styles not applying

- **Solution**: Check CSS specificity, verify class names match

**Issue**: Carousel not auto-playing

- **Solution**: Check browser console for errors, verify timer is running

## Support & Maintenance

For customization questions or issues:

1. Check component documentation in code comments
2. Review CSS selectors and class names
3. Verify all assets are in correct locations
4. Test in different browsers and devices

## License

Created for Ardira Corporation - All rights reserved.

---

**Built with ❤️ using React and Modern Web Technologies**

- React 18
- CSS3 (Grid, Flexbox, Animations)
- Responsive Design
- Green Color Theme
- Modern Component Architecture
