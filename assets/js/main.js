$(function () {
    /* Dark Mode */
    const colorSchemes = ['light', 'dark', 'warm']
    let currentColorScheme = localStorage.getItem('colorScheme')
    if (!currentColorScheme) {
        currentColorScheme = colorSchemes[0]
        localStorage.setItem('colorScheme', currentColorScheme)
    }
    $(`.color-scheme-icon--${currentColorScheme}`).addClass('is-active')
    $('.color-scheme-toggle').on('click', function () {
        $('html').removeClass(`color-scheme--${currentColorScheme}`)
        $('.color-scheme-toggle span').removeClass('is-active')

        let pointer = colorSchemes.indexOf(currentColorScheme)
        currentColorScheme =
            pointer === colorSchemes.length - 1
                ? colorSchemes[0]
                : colorSchemes[pointer + 1]
        localStorage.setItem('colorScheme', currentColorScheme)

        $('html').addClass(`color-scheme--${currentColorScheme}`)
        $(`.color-scheme-icon--${currentColorScheme}`).addClass('is-active')
    })

    /* Hamburger Menu */
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active')
        $('.hamburger-menu').toggleClass('is-active')
    })

    resizeFullWidthImages()
    $(window).on('resize', resizeFullWidthImages)
})

/* Resize full width images */
function resizeFullWidthImages() {
    let fullWidthImages = $('.kg-image-card.kg-width-full')
    if (fullWidthImages.length > 0) {
        let mainAreaWidth = $('.site-main').width()
        let postContentWidth = $('.post-content .container--boxed').width()
        let marginToOffset = (mainAreaWidth / 2 - postContentWidth / 2) * -1
        fullWidthImages.css({
            marginLeft: `${marginToOffset}px`,
            marginRight: `${marginToOffset}px`,
        })
    }
}
