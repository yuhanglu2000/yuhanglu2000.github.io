# Yuhang Lu's Personal Homepage

This repository contains the source code for my personal academic homepage:

[https://yuhanglu2000.github.io](https://yuhanglu2000.github.io)

The site is a lightweight Jekyll-based personal website hosted on GitHub Pages. It includes a short bio, news, selected publications, experience, education, and contact information.

## What Is In This Repo

- [`_config.yml`](./_config.yml): site metadata, author information, and Jekyll configuration.
- [`index.html`](./index.html): the main homepage layout and section structure.
- [`_data/home.yml`](./_data/home.yml): homepage content such as bio, news, experience, education, and contact text.
- [`_data/publications.yml`](./_data/publications.yml): selected publication entries.
- [`assets/css/main.scss`](./assets/css/main.scss): site styling.
- [`assets/js/site.js`](./assets/js/site.js): small interactive behaviors such as active navigation highlighting.
- [`images/`](./images): profile photo, favicons, and publication preview images.
- [`files/`](./files): downloadable files such as the CV.

## How To Edit The Site

### Update content

- Edit [`_data/home.yml`](./_data/home.yml) to change the biography, research interests, news, experience, education, hobbies, and contact text.
- Edit [`_data/publications.yml`](./_data/publications.yml) to add, remove, or reorder publications.
- Edit [`_config.yml`](./_config.yml) to update site-wide metadata such as name, email, homepage URL, and social links.

### Update structure or design

- Edit [`index.html`](./index.html) to change section order, headings, or markup.
- Edit [`assets/css/main.scss`](./assets/css/main.scss) to change layout, typography, spacing, and colors.
- Edit [`assets/js/site.js`](./assets/js/site.js) if you want to adjust the page interactions.

### Update assets

- Replace [`images/profile_photo.jpg`](./images/profile_photo.jpg) for the homepage portrait.
- Put publication preview images in [`images/papers/`](./images/papers).
- Replace [`files/YuhangLu_resume.pdf`](./files/YuhangLu_resume.pdf) if the CV changes.

## Local Development

### 1. Install dependencies

```bash
bundle install
```

### 2. Start a local preview server

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

You can also use:

```bash
./run_server.sh
```

### 3. Open the site

Visit [http://localhost:4000](http://localhost:4000).

## Build

```bash
bundle exec jekyll build
```

Jekyll will generate the static site into `_site/`. That directory is build output and should not be treated as source content.

## Notes

- This repo is intentionally simple and content-first.
- Most text updates only require editing YAML files in [`_data/`](./_data).
- The homepage is a single-page site, so most structural changes happen in [`index.html`](./index.html).

## License

[MIT](https://opensource.org/licenses/MIT)
