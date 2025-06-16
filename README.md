# Personal Academic Homepage

This is **Yuhang Lu (陆宇航)**'s personal academic homepage.

🌐 **Live Demo**: [https://yuhanglu2000.github.io](https://yuhanglu2000.github.io)

## 🚀 Quick Start

### Local Development

1. **Install Dependencies**
   ```bash
   bundle install --path vendor/bundle
   ```

2. **Start Local Server**
   ```bash
   bundle exec jekyll serve --host 0.0.0.0 --port 4000
   ```

3. **Preview**
   - Open your browser and visit `http://localhost:4000`

### Build and Deploy

```bash
# Build static files
bundle exec jekyll build

# Clean cache (if needed)
bundle exec jekyll clean
```

## ✏️ Content Modification

### Basic Information

**Personal Information Configuration** - Edit `_config.yml`:
```yaml
author:
  name: "Your Name"
  bio: "Your Bio"
  location: "Your City"
  email: "your.email@example.com"
  googlescholar: "Google Scholar URL"
  github: "GitHub Username"
  # ... other social links
```

### Homepage Content

**Modify Homepage Content** - Edit `_pages/about.md`:

- **About Me**: Update the About Me section text
- **Research Interests**: Modify Research Interests cards
- **Latest News**: Add/modify Latest News items
- **Publications**: Add new papers to Publications section
- **Experience**: Update Experience timeline
- **Education**: Modify Education section

### Adding New Publications

Add new papers to the Publications section:

```html
<div class="paper-card fade-in">
  <img src="images/papers/paper-image.png" alt="Paper Title" class="paper-image">
  <div class="paper-content">
    <div class="paper-venue">Conference Year</div>
    <h3 class="paper-title">Paper Title</h3>
    <p class="paper-authors">Author List</p>
    <div class="paper-links">
      <a href="paper-url" class="paper-link" target="_blank">
        <i class="bi bi-file-earmark-pdf"></i> Paper
      </a>
      <a href="project-url" class="paper-link secondary" target="_blank">
        <i class="bi bi-globe"></i> Project
      </a>
    </div>
  </div>
</div>
```

### Adding Paper Images

1. Place paper-related images in the `images/papers/` directory
2. Recommended size: Width 400px, Height 200px, Format PNG/JPG
3. File naming suggestion: `paper-abbreviation.png`

### Customizing Styles

**Custom Styling** - Edit `_sass/_modern.scss`:
- Modify color scheme
- Adjust layout spacing
- Change font settings

**Main Color Variables**:
```scss
:root {
  --primary-color: #2563eb;     // Primary color
  --text-primary: #1e293b;      // Primary text color
  --bg-primary: #ffffff;        // Background color
}
```

## 📁 Project Structure

```
├── _config.yml          # Site configuration
├── _pages/              
│   └── about.md         # Homepage content
├── _layouts/            
│   └── modern.html      # Modern layout template
├── _sass/               
│   └── _modern.scss     # Modern stylesheet
├── assets/              
│   └── js/modern.js     # Interactive scripts
├── images/              # Image resources
│   ├── papers/          # Paper-related images
│   └── *.png           # Profile photo, logos, etc.
└── files/              # Document files (e.g., CV PDF)
```

## 🔧 Common Commands

```bash
# Install dependencies
bundle install --path vendor/bundle

# Local development
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Build website
bundle exec jekyll build

# Clean cache
bundle exec jekyll clean

# Check Jekyll version
bundle exec jekyll --version
```

## 📝 Update Workflow

1. **Modify Content** - Edit corresponding Markdown or configuration files
2. **Local Preview** - Start local server to check changes
3. **Commit Changes**
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push origin main
   ```
4. **Auto Deploy** - GitHub Pages will automatically build and deploy updates

## 📄 License

This project is open sourced under the MIT License.
