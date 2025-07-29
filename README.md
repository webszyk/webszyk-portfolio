# webSzyk - Portfolio Website

A modern, responsive website for webSzyk - a web design and development service. This is a pixel-perfect recreation of the original WordPress site using modern front-end technologies.

## 🚀 Technologies Used

- **HTML5**: Semantic markup with proper accessibility
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Alpine.js**: Lightweight JavaScript framework for interactivity
- **Google Fonts**: Nunito Sans font family

## 📁 Project Structure

```
webszyk-portfolio/
├── index.html          # Main HTML file with all content
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Palette
- **Primary Green**: `#04e6a5` (vibrant teal)
- **Dark Background**: `#121a26` (dark navy)
- **Light Background**: `#F9F7F7` (off-white)
- **Text Colors**: Various grays for hierarchy

### Typography
- **Font Family**: Nunito Sans (400, 700 weights)
- **Responsive sizing**: Scales from mobile to desktop

## 🏗️ Sections

1. **Header**: Sticky navigation with mobile menu
2. **Hero**: Full-screen background with call-to-action
3. **Services**: "Strona jak ogród" with accordion
4. **Features**: "Co zapewniam" service cards
5. **Testimonial**: Customer quote with profile
6. **FAQ**: Interactive accordion with questions
7. **Contact**: Multiple contact forms and buttons
8. **Footer**: Company info and social links

## ⚡ Interactive Features

### Alpine.js Functionality
- **Sticky Header**: Changes background on scroll
- **Mobile Menu**: Full-screen overlay navigation
- **Accordions**: Smooth expand/collapse animations
- **Form Focus States**: Glowing green borders

### Responsive Design
- **Mobile First**: Optimized for all screen sizes
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🚀 How to Run

1. **Clone or download** the project files
2. **Open `index.html`** in any modern web browser
3. **No build process required** - everything is loaded via CDN

### Local Development
```bash
# If you have Python installed
python -m http.server 8000

# If you have Node.js installed
npx serve .

# Then open http://localhost:8000 in your browser
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Features

### Performance
- **Lightweight**: No heavy frameworks
- **Fast Loading**: Optimized images and minimal dependencies
- **SEO Ready**: Semantic HTML structure

### Accessibility
- **ARIA Labels**: Proper accessibility attributes
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Semantic markup

### User Experience
- **Smooth Animations**: CSS transitions and Alpine.js animations
- **Interactive Elements**: Hover effects and focus states
- **Mobile Optimized**: Touch-friendly interface

## 🔧 Customization

### Colors
Modify the custom CSS variables in the `<style>` section:
```css
.hero-gradient {
    background: linear-gradient(135deg, rgb(18,26,38) 0%, rgba(4,230,165,0.23) 100%);
}
```

### Content
Update text content directly in the HTML file. All content is in Polish as per the original design.

### Images
Replace image URLs in the HTML with your own assets:
```html
<img src="your-image-url.webp" alt="Description">
```

## 📞 Contact Information

- **Email**: kontakt@webszyk.pl
- **Phone**: +48 726-496-987
- **Address**: ul. Długa 12/14, 00-000 Warszawa

## 📄 License

This project is a recreation of the original webSzyk website for educational and portfolio purposes.

---

**Built with ❤️ using Tailwind CSS and Alpine.js** 