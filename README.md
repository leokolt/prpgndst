# Sapphire

Sapphire is a Ghost theme most suitable for building niche publications and personal websites. You can use this theme to show your work, run a blog, build premium memberships for your audience and share what you do.

Supports Ghost version `4.x` 

**Demo**: [sapphire.stylesheets.dev](https://sapphire.stylesheets.dev)

**Note**: This documentation is also available online at [docs.stylesheets.dev/sapphire/](https://docs.stylesheets.dev/sapphire/)

## Theme Installation
The first step is to unzip the downloaded package. Inside the new directory **sapphire**, you’ll find the zipped theme and a documentation file. 

Follow these steps to upload the theme to Ghost: 
1. Login to your ghost admin dashboard (example.com/ghost).
2. Click the **settings icon** at the bottom of the left-hand side.
3. Go to **Themes** and click **Upload a theme**.
4. Select the theme file.
5. Once uploaded, click on **Activate now** button to activate the theme immediately or **Close** if you want to activate it later.

## Theme Development
The theme uses  [Gulp](https://gulpjs.com/)  and  [Node.js](https://nodejs.org/en/)  for development purposes. You’ll need Node.js  `v12.x.x` or `v14.x.x` installed on your machine. (If you’re on a different version of Node, we recommend using NVM to manage multiple versions of Node.js and set the correct one for developing this theme).

Once you have Node.js and [Ghost setup](https://ghost.org/docs/install/local/)  ready on your machine, run the following commands from the theme root directory:

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

## Change Color Scheme & Fonts
All the colors and fonts are managed through CSS variables. You can change colors and fonts by editing the `/assets/sass/base/_variables.scss file`. 

After making the required changes, you’ll have to re-compile the theme. This can be done by running the `npm run build` command. This will generate the zip file.

## Make Dark Mode as Default
Sapphire theme comes with three color modes – “Light”, “Dark”, “Warm”, which users can change by clicking the color modes icon on the bottom left-hand side. 

Light mode is the default for the theme, but you can change the defaults by making the following changes: 

1. Edit `default.hbs` and add class `color-scheme—-dark` or `color-scheme--warm` to HTML tag as shown below.
```html
<html lang="{{@site.locale}}" class="color-scheme--dark">
```
2. Edit `assets/js/main.js` and change the `colorSchemes` array to set the sequence of color schemes that users will see.
```css
/* Dark Mode */
const colorSchemes = ['dark', 'light', 'warm']
```

Recompile the theme.

## Comments
The theme supports comments from services like  [Disqus](https://disqus.com/) ,  [Commento](https://commento.io/) , etc. 

Look for the following space in the `post.hbs` file:

```html
{{!--  
<div class="post-widget post-comments-widget post-widget--no-margin">
    If you want to embed comments, this is a good place to do it!
</div>
--}}
```

### Disqus
Create a Disqus account and retrieve embed code for your site. Paste the embed code inside the space left for it. 

```html
<div class="post-widget post-comments-widget post-widget--no-margin">
    
    <!-- Disqus Embed Code -->
    <div id="disqus_thread"></div>
    <script>
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
        
        var disqus_config = function () {
        // this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = "ghost-{{comment_id}}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        
        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://sapphire-2.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

</div>
```

## Add Social Media Icons
Twitter, Facebook, and RSS feed icon are already implemented in the theme. To add more icons follow these steps: 
1. Download SVG of the icon from  [Simple Icons](https://simpleicons.org/) . 
2. In `partials/icons/` paste SVG file and change its extension to .hbs (instead of .svg)
3. Next, edit `partials/social-media-icons.hbs` and add the icon
```html
 <ul class="social-media-icons">
    ...other icons
    
    <li>
       <a href="https://pinterest.com/" title="Pinterest" target="_blank" rel="noopener">{{> "icons/pinterest"}}</a>
   </li>
</ul>
```

## Language Translations
The theme is translation ready and includes translation files for English (en) and German (de). To add a translation for any other language, create the translation file in `locales/` directory.

To add a new language, follow these steps:
1. Create a new file in the theme’s `locales` folder with the language  [ISO Code](https://www.w3schools.com/tags/ref_language_codes.asp)  code. So, if the new language is Spanish, the new file name will be `es.json`.
2. Copy the `en.json` file content into your new file and start to translate each line. The key is plain English that exists in all translation files and **should not be** changed. You should change only the value.

To set the language in Ghost, Go to **Admin > General > PUBLICATION INFO > Publication Language** and enter the language code (es in this example).

## Add Custom Bio Section in Sidebar
To add the custom author bio section in the header, edit `partials/header.hbs` and un-comment the following line.

```
{{!-- {{> "header-bio"}} --}}
``` 

Next, edit `partials/header-bio.hbs` and change the slug author’s slug.

```html
{{!-- Change the slug below!! --}}
{{#get "authors" filter="slug:jane" }}
    
    {{#foreach authors}}
        <div class="header-bio">
            <img src="{{profile_image}}" alt="{{name}}" />
            <p>
                {{!-- Add bio here --}}
                This section is optional. You can use this to introduce yourself as the author of this blog.
                
                {{!-- Un-comment the below line if you want to show author's bio from Ghost here --}}
                {{!-- {{bio}} --}}
            </p>
        </div>
    {{/foreach}}
    
{{/get}}
```
## Sources and Credits
Thanks to the following services and libraries used in building this theme: 

*  [Ghost](http://ghost.org/)  the open-source publication platform. 
*  [Unsplash](https://unsplash.com/)  for stock images on demo site.
*  [Google Fonts](https://fonts.google.com/)  for fonts. 
*  [PrismJs](https://prismjs.com/)  for code highlighting. 
*  [Simple Icons](https://simpleicons.org/)  for social media brand icons.
*  [Feather Icons](https://feathericons.com/)  for icons.

## Support
Thank you for using our themes. If you have any questions that are beyond the scope of this documentation, please feel free to email us at  [support@stylesheets.dev](mailto:support@stylesheets.dev) . We’ll do our best to assist you. 

Thanks so much!
