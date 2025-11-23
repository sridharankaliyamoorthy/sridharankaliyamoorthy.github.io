# GitHub Pages Personal Website

A clean, modern, professional personal website hosted on GitHub Pages.

## 🎯 Purpose

This website serves as a professional portfolio and personal brand showcase, highlighting expertise in:
- AI/ML Engineering
- Python & Algorithmic Problem Solving
- Workflow Automation
- VFX Production Background
- Full-Stack Development

## 📁 Folder Structure

```
root/
├── index.html          # Homepage with hero section
├── about.html          # About page with skills and background
├── projects.html       # Projects showcase
├── contact.html        # Contact form and links
├── assets/
│   ├── css/
│   │   └── styles.css  # Main stylesheet
│   ├── img/            # Images directory (add your images here)
│   └── js/
│       └── main.js     # JavaScript for interactivity
├── README.md           # GitHub profile README (separate)
├── WEBSITE_README.md   # This file
└── CNAME               # Custom domain configuration (optional)
```

## 🚀 Deployment to GitHub Pages

### Option 1: Deploy from this repository (Recommended)

1. **Create a new repository** named `sridharankaliyamoorthy.github.io` (must match your GitHub username exactly)

2. **Push all website files** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial website deployment"
   git remote add origin https://github.com/sridharankaliyamoorthy/sridharankaliyamoorthy.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

4. **Your website will be live at**: `https://sridharankaliyamoorthy.github.io`

### Option 2: Deploy from a subfolder

If you want to keep the website in a subfolder of an existing repository:

1. Create a `docs/` folder in your repository
2. Move all website files to `docs/`
3. In GitHub Settings → Pages, select **Deploy from a branch** → **main** → **/docs**

## 🎨 Customization

### Update Content

1. **Homepage (index.html)**: Edit the hero section and intro cards
2. **About (about.html)**: Update your background, skills, and philosophy
3. **Projects (projects.html)**: Add your actual project details and links
4. **Contact (contact.html)**: Update email, LinkedIn, and other contact links

### Update Styling

- Edit `assets/css/styles.css` to customize colors, fonts, and layout
- CSS variables are defined in `:root` for easy theme customization
- The design supports both light and dark modes (auto-detected)

### Add Images

1. Place images in `assets/img/` directory
2. Reference them in HTML: `<img src="assets/img/your-image.jpg" alt="Description">`

### Update JavaScript

- Edit `assets/js/main.js` for additional interactivity
- Currently includes: smooth scrolling, fade-in animations, form handling

## 🌐 Custom Domain Setup

### Step 1: Configure DNS

1. Add a `CNAME` record in your domain's DNS settings:
   - **Type**: CNAME
   - **Name**: `www` (or `@` for root domain)
   - **Value**: `sridharankaliyamoorthy.github.io`

### Step 2: Add CNAME File

1. Create a `CNAME` file in the root directory
2. Add your domain name (e.g., `www.yourdomain.com`)
3. Commit and push the file

### Step 3: Enable Custom Domain in GitHub

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. GitHub will automatically configure SSL/HTTPS

## 🔧 Technical Details

- **Framework**: Pure HTML, CSS, and JavaScript (no dependencies)
- **Responsive**: Mobile-first design, works on all devices
- **Performance**: Lightweight, fast loading
- **SEO**: Semantic HTML with proper meta tags
- **Accessibility**: Follows best practices for screen readers

## 📝 Notes

- The contact form uses `mailto:` links (no backend required)
- All external links open in new tabs
- The design is intentionally minimal and professional
- Color scheme adapts to user's system preferences (light/dark mode)

## 🐛 Troubleshooting

### Website not loading?
- Check that GitHub Pages is enabled in repository settings
- Verify the repository name matches `username.github.io`
- Wait a few minutes for DNS propagation

### Styles not loading?
- Ensure file paths are correct (relative paths from HTML files)
- Check browser console for 404 errors
- Verify `assets/css/styles.css` exists

### Custom domain not working?
- Verify DNS settings are correct
- Wait up to 24 hours for DNS propagation
- Check that CNAME file contains the correct domain

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Built with**: HTML5, CSS3, JavaScript  
**Hosted on**: GitHub Pages  
**Last Updated**: 2025-01-23

