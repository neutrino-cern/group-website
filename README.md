[Website](https://neutrino.web.cern.ch/) of the CERN EP-NU group, based on the [astroship](https://github.com/surjithctly/astroship.git) theme.
## Installation :hammer:

### 1. Clone the repo

- [GitHub](https://github.com/neutrino-cern/group-website)
- [GitLab](https://gitlab.cern.ch/rradev/group-website)

### 2. Install Dependencies
Make sure you are inside your project folder first.

```bash
npm install
```
### 3. Start development Server

- To see changes you make to the website in real time:
```bash
npm run dev
```

To properly build it and and see the result:
```bash
npm run build
npm run preview
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 👀 Useful Info

Check out [Astro Docs](https://docs.astro.build)

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)

## CERN Deployment

Follow the CERN guide for [mk-docs](https://how-to.docs.cern.ch/)
