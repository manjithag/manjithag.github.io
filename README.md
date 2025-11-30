# Manjitha D Vidanalage - Personal Website

A modern, responsive personal portfolio website showcasing my work as a Data Privacy & AI Researcher.

## About

This website highlights my research experience, publications, and technical expertise in:
- Privacy-preserving AI technologies
- Data anonymization systems
- Advanced AI agents (LLMs, RAG, LangGraph)
- Machine learning and privacy-enhancing technologies

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Accessible**: Semantic HTML and ARIA-friendly design
- **Performance Optimized**: Fast loading times with optimized assets

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)

## Setup and Deployment

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/manjithag-dv/manjithag-dv.github.io.git
   cd manjithag-dv.github.io
   ```

2. Open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

### GitHub Pages Deployment

This site is designed to work seamlessly with GitHub Pages:

1. Ensure your repository is named `manjithag-dv.github.io` (or `<username>.github.io`)

2. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select the `main` branch
   - Click "Save"

4. Your site will be available at `https://manjithag-dv.github.io/`

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with all CSS
├── script.js           # JavaScript for interactivity
├── CV_Manjitha.pdf     # Original CV (optional)
└── README.md           # This file
```

## Customization

### Updating Content

- **Personal Information**: Edit the contact details in the `#contact` section of `index.html`
- **Experience**: Update the timeline items in the `#experience` section
- **Projects**: Modify project cards in the `#projects` section
- **Publications**: Add or remove publications in the `#publications` section
- **Skills**: Update skill categories and tags in the `#skills` section

### Styling

- Color scheme can be modified in the `:root` CSS variables in `styles.css`
- Fonts can be changed by updating the Google Fonts link and CSS font-family

### Adding Sections

To add new sections, follow the existing pattern:
```html
<section id="new-section" class="section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content -->
    </div>
</section>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

**Manjitha D Vidanalage**
- Email: manjitha.ee@gmail.com
- LinkedIn: [manjitha-gunarathne](https://www.linkedin.com/in/manjitha-gunarathne/)
- Location: Passau, Germany

---

Built with care and attention to detail | Last updated: November 2025
