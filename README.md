# Personal Academic Homepage

This is **Yuhang Lu (陆宇航)**'s personal academic homepage.

🌐 **Live Demo**: [https://yuhanglu2000.github.io](https://yuhanglu2000.github.io)

## ✨ Recent Updates

- **Image Consistency**: All paper images now display at consistent 400px × 180px dimensions
- **Layout Optimization**: Improved spacing between paper images and text content
- **Logo Enhancement**: Institution logos in work experience and education sections enlarged to 120px × 120px

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
- **Latest News**: Add/modify Latest News items
- **Publications**: Add new papers to Publications section
- **Work Experience**: Update work experience entries
- **Education**: Modify education section
- **Logo Images**: Work experience and education logos (120x120px)
- **Paper Images**: Publications images (400x180px, auto-resized for consistency)

### Adding New Publications

Add new papers to the Publications section in `_pages/about.md`:

```html
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Conference Year</div>
      <img src='images/papers/paper-image.png' alt="Paper Title">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

<span style="font-size:18px;">**Paper Title**</span>

Author List

Conference/Journal Name

[[Paper]](paper-url) [[Code]](code-url)

  </div>
</div>
```

### Adding Paper Images

1. Place paper-related images in the `images/papers/` directory
2. **Recommended size**: Width 400px, Height 180px, Format PNG/JPG
3. File naming suggestion: `paper-abbreviation.png`
4. **Note**: All paper images will be automatically resized to 400px × 180px for consistency

### Image Size Guidelines

**Different types of images have different size requirements:**

- **Paper Images** (`images/papers/`): 400px × 180px
  - Automatically enforced by CSS
  - Use `object-fit: fill` to maintain consistent display
  
- **Institution Logos** (`images/`): 120px × 120px
  - For work experience and education sections
  - Use `object-fit: contain` to preserve aspect ratio
  
- **Profile Photo**: Recommended square format
  - Will be displayed as circular avatar
  
- **Other Icons**: Various sizes as needed

### Customizing Styles

**Paper Box Styling** - Edit `assets/css/main.scss`:
- Modify paper image dimensions
- Adjust paper box layout
- Change badge colors

**Example Paper Image Size Adjustment**:
```scss
.paper-box-image img {
    width: 400px;           // Image width
    height: 180px;          // Image height
    object-fit: fill;       // Force fill without aspect ratio
    box-shadow: 3px 3px 6px #888;
}
```

**Additional Styling** - Edit `_pages/about.md` (bottom `<style>` section):
- Override specific styles
- Add responsive adjustments
- Customize work experience logos

## 📁 Project Structure

```
├── _config.yml          # Site configuration
├── _pages/              
│   └── about.md         # Homepage content (main page)
├── _layouts/            
│   └── default.html     # Default layout template
├── _sass/               # Sass partials
│   ├── _base.scss       # Base styles
│   ├── _page.scss       # Page-specific styles
│   └── ...              # Other style partials
├── assets/              
│   ├── css/
│   │   └── main.scss    # Main stylesheet (paper-box styles)
│   └── js/              # JavaScript files
├── images/              # Image resources
│   ├── papers/          # Paper-related images (400x180px)
│   ├── *.png           # Profile photo, logos, etc.
│   └── ...              # Other images
├── files/              # Document files
│   └── YuhangLu_resume.pdf  # CV PDF
└── _includes/          # Reusable page components
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
