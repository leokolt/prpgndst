# Ghost Starter Theme

A starter theme for developing Ghost themes. 

- Ghost 4.x
- SASS styling
- SMACSS folder structure for organizing CSS
- Assets compiling using Gulp
- Light, dark, sepia color schemes
- Translation ready
- Prettier
- Reusable components for Hamburger menu, social media share links, skip to content, dark mode toggle available. 
- Live reload

## Development
This starter uses [Gulp](https://gulpjs.com/) for compiling assets. You’ll need Node.js  `v12.x.x` or `v14.x.x` installed on your machine. (If you’re on a different version of Node, we recommend using NVM to manage multiple versions of Node.js and set the correct one for developing this theme).

```bash
# To install node modules
npm install

# To compile and watch for changes in SCSS and JS files
npm run dev
```

Now you can edit the SCSS and JS files in `/assets/sass/` & `/assets/js/` directories. These will get compiled to `/assets/built/` automatically. 

To generate a production-ready theme zip file, run the following command. It will minify all the CSS & JS files and package the theme into `dist/<theme-name>-<version>.zip`.

```bash
# To generate production ready theme zip file.
# check the /dist folder after completion. 
npm run build
```

## LiveReload
[LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)  chrome plugin watches over the handlebars, CSS, SCSS, and JS files and automatically reloads the browser while developing the theme. 

The configuration for LiveReload has already been done in the theme Gulpfile. You can install this chrome plugin and activate it to make your development easier. 

