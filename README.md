# ScanYCall Landing Page

A modern, responsive landing page for ScanYCall - a smart parking communication solution that provides personalized QR code stickers for vehicles.

## About ScanYCall

ScanYCall is a innovative parking communication system where:
- Customers receive a personalized QR code sticker to place on their car windshield
- If someone has a parking-related issue, they can scan the QR code
- The scan initiates a **masked call** directly to the car owner
- Phone numbers remain private and protected
- Currently developing mobile applications (coming soon)

## Features

- Modern React 18 with Vite for fast development
- Fully responsive design (mobile, tablet, desktop)
- CSS Modules for component-scoped styling
- Smooth scroll navigation
- Animated components
- SEO optimized
- Automated deployment with GitHub Actions

## Tech Stack

- **React 18** - Modern UI library
- **Vite 5** - Fast build tool with HMR
- **CSS Modules** - Component-scoped styling
- **GitHub Actions** - Automated CI/CD
- **GitHub Pages** - Free hosting

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/scan2call.git
cd scan2call
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub named `scan2call`

2. Initialize git and connect to your repository:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/scan2call.git
git branch -M main
git push -u origin main
```

3. Configure GitHub Pages:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"

4. The workflow will automatically deploy on every push to the `main` branch

### Important Configuration

The `vite.config.js` file contains a critical configuration for GitHub Pages:

```javascript
base: '/scan2call/'
```

This must match your repository name. If your repo name is different, update this value.

### Accessing Your Site

After deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/scan2call/
```

## Customization

### Changing Colors

Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  /* ... more variables */
}
```

### Updating Content

- **Hero Section**: Edit `src/components/Hero/Hero.jsx`
- **Features**: Edit `src/components/Features/Features.jsx`
- **About**: Edit `src/components/About/About.jsx`
- **CTA**: Edit `src/components/CTA/CTA.jsx`
- **Footer**: Edit `src/components/Footer/Footer.jsx`

### Adding Images

1. Place images in `src/assets/`
2. Import them in your component:
```javascript
import myImage from './assets/myImage.png'
```
3. Use in JSX:
```jsx
<img src={myImage} alt="Description" />
```

## Project Structure

```
scan2call/
├── .github/workflows/    # GitHub Actions workflows
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── About/
│   │   ├── CTA/
│   │   └── Footer/
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Performance

- Lighthouse score: 90+ (Performance)
- Fast page load times with Vite optimization
- Minimal bundle size with tree-shaking
- Lazy loading ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Powered by [React](https://react.dev/)
- Hosted on [GitHub Pages](https://pages.github.com/)

## Support

For issues or questions, please open an issue on GitHub.
