document.addEventListener('DOMContentLoaded', () => {

   /*********************************************************
    ! lightense-images v1.0.17 | © Tunghsiao Liu | MIT
    **********************************************************/
    !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Lightense=t():e.Lightense=t()}(this,(function(){return e={352:e=>{function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){"use strict";var e,t={time:300,padding:40,offset:40,keyboard:!0,cubicBezier:"cubic-bezier(.2, 0, .1, 1)",background:"var(--bg-color-80, rgba(255, 255, 255, .98))",zIndex:1e6,beforeShow:void 0,afterShow:void 0,beforeHide:void 0,afterHide:void 0},r={};function o(e){var t=r[e];if(t){if("function"!=typeof t)throw"config.".concat(e," must be a function!");Reflect.apply(t,r,[r])}}function a(e){switch(i(e)){case"undefined":throw"You need to pass an element!";case"string":return document.querySelectorAll(e);case"object":return e}}function c(e){var t=e.length;if(t)for(var n=0;n<t;n++)s(e[n]);else s(e)}function s(e){e.src&&!e.classList.contains("lightense-target")&&(e.classList.add("lightense-target"),e.addEventListener("click",(function(i){if(r.keyboard&&(i.metaKey||i.ctrlKey))return window.open(e.src,"_blank");!function(e){if(r.target=e,r.target.classList.contains("lightense-open"))return g();o("beforeShow"),r.scrollY=window.scrollY,function(e,t,n){e.addEventListener(t,(function r(i){Reflect.apply(n,this,i),e.removeEventListener(t,r)}))}(r.target,"transitionend",(function(){o("afterShow")}));var i=new Image;i.onload=function(){!function(e){var n=e.width,i=e.height,o=window.pageYOffset||document.documentElement.scrollTop||0,a=window.pageXOffset||document.documentElement.scrollLeft||0,c=r.target.getBoundingClientRect(),s=n/c.width,d=window.innerWidth||document.documentElement.clientWidth||0,l=window.innerHeight||document.documentElement.clientHeight||0,u=r.target.getAttribute("data-lightense-padding")||r.target.getAttribute("data-padding")||r.padding,g=d>u?d-u:d-t.padding,p=l>u?l-u:l-t.padding,f=n/i,b=g/p;r.scaleFactor=n<g&&i<p?s:f<b?p/i*s:g/n*s;var h=d/2,m=o+l/2,v=c.left+a+c.width/2,y=c.top+o+c.height/2;r.translateX=Math.round(h-v),r.translateY=Math.round(m-y)}(this),function(){r.target.classList.add("lightense-open"),r.wrap=document.createElement("div"),r.wrap.className="lightense-wrap",setTimeout((function(){r.target.style.transform="scale("+r.scaleFactor+")"}),20),r.target.parentNode.insertBefore(r.wrap,r.target),r.wrap.appendChild(r.target),setTimeout((function(){r.wrap.style.transform="translate3d("+r.translateX+"px, "+r.translateY+"px, 0)"}),20);var e={cubicBezier:r.target.getAttribute("data-lightense-cubic-bezier")||r.cubicBezier,background:r.target.getAttribute("data-lightense-background")||r.target.getAttribute("data-background")||r.background,zIndex:r.target.getAttribute("data-lightense-z-index")||r.zIndex},t=n(n({},r),e);d("lightense-images-css-computed","\n    :root {\n      --lightense-z-index: ".concat(t.zIndex-1,";\n      --lightense-backdrop: ").concat(t.background,";\n      --lightense-duration: ").concat(t.time,"ms;\n      --lightense-timing-func: ").concat(t.cubicBezier,";\n    }")),r.container.style.visibility="visible",setTimeout((function(){r.container.style.opacity="1"}),20)}(),window.addEventListener("keyup",f,!1),window.addEventListener("scroll",p,!1),r.container.addEventListener("click",g,!1)},i.src=r.target.src}(this)}),!1))}function d(e,t){var n=document.head||document.getElementsByTagName("head")[0];document.getElementById(e)&&document.getElementById(e).remove();var r=document.createElement("style");r.id=e,r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t)),n.appendChild(r)}function l(){d("lightense-images-css","\n:root {\n  --lightense-z-index: ".concat(r.zIndex-1,";\n  --lightense-backdrop: ").concat(r.background,";\n  --lightense-duration: ").concat(r.time,"ms;\n  --lightense-timing-func: ").concat(r.cubicBezier,";\n}\n\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: calc(var(--lightense-z-index) - 1);\n  padding: 0;\n  margin: 0;\n  transition: opacity var(--lightense-duration) ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: var(--lightense-backdrop);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    -webkit-backdrop-filter: blur(30px);\n  }\n}\n\n@supports (backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  z-index: var(--lightense-z-index);\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}"))}function u(){null===document.querySelector(".lightense-backdrop")?(r.container=document.createElement("div"),r.container.className="lightense-backdrop",document.body.appendChild(r.container)):r.container=document.querySelector(".lightense-backdrop")}function g(){o("beforeHide"),window.removeEventListener("keyup",f,!1),window.removeEventListener("scroll",p,!1),r.container.removeEventListener("click",g,!1),r.target.classList.remove("lightense-open"),r.wrap.style.transform="",r.target.style.transform="",r.target.classList.add("lightense-transitioning"),r.container.style.opacity="",setTimeout((function(){o("afterHide"),r.container.style.visibility="",r.container.style.backgroundColor="",r.wrap.parentNode.replaceChild(r.target,r.wrap),r.target.classList.remove("lightense-transitioning")}),r.time)}function p(){Math.abs(r.scrollY-window.scrollY)>=r.offset&&g()}function f(e){e.preventDefault(),27===e.keyCode&&g()}return function(i){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=a(i),r=n(n({},t),o),l(),u(),c(e)}}();e.exports=o}},t={},function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(352);var e,t}));

    /* Custom settings on lightense-images*/
    window.addEventListener('load', () => {
        Lightense('.entry__content img:not(.kg-bookmark-card img, .similar-post__item img)');
    }, false);

    /*Gallery post page*/
    const images = document.querySelectorAll('.kg-gallery-image img');

    images.forEach(function (image) {
        let container = image.closest('.kg-gallery-image');
        let width = image.attributes.width.value;
        let height = image.attributes.height.value;
        let ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
    });


    /* Copy link in share buttons block */
    const copyLinkBtn = document.querySelector('.share__item--link'),
    inputValue = document.querySelector('.input-link');

    copyLinkBtn.addEventListener('click', () => {
        window.navigator.clipboard.writeText(inputValue.value);
        copyLinkBtn.classList.add('copied');
        setTimeout(() => {
            copyLinkBtn.classList.remove('copied');
        }, 5000);
    });


  /*
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/
  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018
*/
!function(e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():e()}(function(){var a="undefined"!=typeof window?window:this,e=a.Glider=function(e,t){var o=this;if(e._glider)return e._glider;if(o.ele=e,o.ele.classList.add("glider"),(o.ele._glider=o).opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,easing:function(e,t,o,i,r){return i*(t/=r)*t+o}},t),o.animate_id=o.page=o.slide=0,o.arrows={},o._opt=o.opt,o.opt.skipTrack)o.track=o.ele.children[0];else for(o.track=document.createElement("div"),o.ele.appendChild(o.track);1!==o.ele.children.length;)o.track.appendChild(o.ele.children[0]);o.track.classList.add("glider-track"),o.init(),o.resize=o.init.bind(o,!0),o.event(o.ele,"add",{scroll:o.updateControls.bind(o)}),o.event(a,"add",{resize:o.resize})},t=e.prototype;return t.init=function(e,t){var o=this,i=0,r=0;o.slides=o.track.children,[].forEach.call(o.slides,function(e,t){e.classList.add("glider-slide"),e.setAttribute("data-gslide",t)}),o.containerWidth=o.ele.clientWidth;var s=o.settingsBreakpoint();if(t||(t=s),"auto"===o.opt.slidesToShow||void 0!==o.opt._autoSlide){var l=o.containerWidth/o.opt.itemWidth;o.opt._autoSlide=o.opt.slidesToShow=o.opt.exactWidth?l:Math.max(1,Math.floor(l))}"auto"===o.opt.slidesToScroll&&(o.opt.slidesToScroll=Math.floor(o.opt.slidesToShow)),o.itemWidth=o.opt.exactWidth?o.opt.itemWidth:o.containerWidth/o.opt.slidesToShow,[].forEach.call(o.slides,function(e){e.style.height="auto",e.style.width=o.itemWidth+"px",i+=o.itemWidth,r=Math.max(e.offsetHeight,r)}),o.track.style.width=i+"px",o.trackWidth=i,o.isDrag=!1,o.preventClick=!1,o.opt.resizeLock&&o.scrollTo(o.slide*o.itemWidth,0),(s||t)&&(o.bindArrows(),o.buildDots(),o.bindDrag()),o.updateControls(),o.emit(e?"refresh":"loaded")},t.bindDrag=function(){var t=this;t.mouse=t.mouse||t.handleMouse.bind(t);var e=function(){t.mouseDown=void 0,t.ele.classList.remove("drag"),t.isDrag&&(t.preventClick=!0),t.isDrag=!1},o={mouseup:e,mouseleave:e,mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.mouseDown=e.clientX,t.ele.classList.add("drag")},mousemove:t.mouse,click:function(e){t.preventClick&&(e.preventDefault(),e.stopPropagation()),t.preventClick=!1}};t.ele.classList.toggle("draggable",!0===t.opt.draggable),t.event(t.ele,"remove",o),t.opt.draggable&&t.event(t.ele,"add",o)},t.buildDots=function(){var e=this;if(e.opt.dots){if("string"==typeof e.opt.dots?e.dots=document.querySelector(e.opt.dots):e.dots=e.opt.dots,e.dots){e.dots.innerHTML="",e.dots.classList.add("glider-dots");for(var t=0;t<Math.ceil(e.slides.length/e.opt.slidesToShow);++t){var o=document.createElement("button");o.dataset.index=t,o.setAttribute("aria-label","Page "+(t+1)),o.setAttribute("role","tab"),o.className="glider-dot "+(t?"":"active"),e.event(o,"add",{click:e.scrollItem.bind(e,t,!0)}),e.dots.appendChild(o)}}}else e.dots&&(e.dots.innerHTML="")},t.bindArrows=function(){var o=this;o.opt.arrows?["prev","next"].forEach(function(e){var t=o.opt.arrows[e];t&&("string"==typeof t&&(t=document.querySelector(t)),t&&(t._func=t._func||o.scrollItem.bind(o,e),o.event(t,"remove",{click:t._func}),o.event(t,"add",{click:t._func}),o.arrows[e]=t))}):Object.keys(o.arrows).forEach(function(e){var t=o.arrows[e];o.event(t,"remove",{click:t._func})})},t.updateControls=function(e){var d=this;e&&!d.opt.scrollPropagate&&e.stopPropagation();var t=d.containerWidth>=d.trackWidth;d.opt.rewind||(d.arrows.prev&&(d.arrows.prev.classList.toggle("disabled",d.ele.scrollLeft<=0||t),d.arrows.prev.setAttribute("aria-disabled",d.arrows.prev.classList.contains("disabled"))),d.arrows.next&&(d.arrows.next.classList.toggle("disabled",Math.ceil(d.ele.scrollLeft+d.containerWidth)>=Math.floor(d.trackWidth)||t),d.arrows.next.setAttribute("aria-disabled",d.arrows.next.classList.contains("disabled")))),d.slide=Math.round(d.ele.scrollLeft/d.itemWidth),d.page=Math.round(d.ele.scrollLeft/d.containerWidth);var c=d.slide+Math.floor(Math.floor(d.opt.slidesToShow)/2),h=Math.floor(d.opt.slidesToShow)%2?0:c+1;1===Math.floor(d.opt.slidesToShow)&&(h=0),d.ele.scrollLeft+d.containerWidth>=Math.floor(d.trackWidth)&&(d.page=d.dots?d.dots.children.length-1:0),[].forEach.call(d.slides,function(e,t){var o=e.classList,i=o.contains("visible"),r=d.ele.scrollLeft,s=d.ele.scrollLeft+d.containerWidth,l=d.itemWidth*t,n=l+d.itemWidth;[].forEach.call(o,function(e){/^left|right/.test(e)&&o.remove(e)}),o.toggle("active",d.slide===t),c===t||h&&h===t?o.add("center"):(o.remove("center"),o.add([t<c?"left":"right",Math.abs(t-(t<c?c:h||c))].join("-")));var a=Math.ceil(l)>=Math.floor(r)&&Math.floor(n)<=Math.ceil(s);o.toggle("visible",a),a!==i&&d.emit("slide-"+(a?"visible":"hidden"),{slide:t})}),d.dots&&[].forEach.call(d.dots.children,function(e,t){e.classList.toggle("active",d.page===t)}),e&&d.opt.scrollLock&&(clearTimeout(d.scrollLock),d.scrollLock=setTimeout(function(){clearTimeout(d.scrollLock),.02<Math.abs(d.ele.scrollLeft/d.itemWidth-d.slide)&&(d.mouseDown||d.trackWidth>d.containerWidth+d.ele.scrollLeft&&d.scrollItem(d.getCurrentSlide()))},d.opt.scrollLockDelay||250))},t.getCurrentSlide=function(){var e=this;return e.round(e.ele.scrollLeft/e.itemWidth)},t.scrollItem=function(e,t,o){o&&o.preventDefault();var i=this,r=e;if(++i.animate_id,!0===t)e*=i.containerWidth,e=Math.round(e/i.itemWidth)*i.itemWidth;else{if("string"==typeof e){var s="prev"===e;if(e=i.opt.slidesToScroll%1||i.opt.slidesToShow%1?i.getCurrentSlide():i.slide,s?e-=i.opt.slidesToScroll:e+=i.opt.slidesToScroll,i.opt.rewind){var l=i.ele.scrollLeft;e=s&&!l?i.slides.length:!s&&l+i.containerWidth>=Math.floor(i.trackWidth)?0:e}}e=Math.max(Math.min(e,i.slides.length),0),i.slide=e,e=i.itemWidth*e}return i.scrollTo(e,i.opt.duration*Math.abs(i.ele.scrollLeft-e),function(){i.updateControls(),i.emit("animated",{value:r,type:"string"==typeof r?"arrow":t?"dot":"slide"})}),!1},t.settingsBreakpoint=function(){var e=this,t=e._opt.responsive;if(t){t.sort(function(e,t){return t.breakpoint-e.breakpoint});for(var o=0;o<t.length;++o){var i=t[o];if(a.innerWidth>=i.breakpoint)return e.breakpoint!==i.breakpoint&&(e.opt=Object.assign({},e._opt,i.settings),e.breakpoint=i.breakpoint,!0)}}var r=0!==e.breakpoint;return e.opt=Object.assign({},e._opt),e.breakpoint=0,r},t.scrollTo=function(t,o,i){var r=this,s=(new Date).getTime(),l=r.animate_id,n=function(){var e=(new Date).getTime()-s;r.ele.scrollLeft=r.ele.scrollLeft+(t-r.ele.scrollLeft)*r.opt.easing(0,e,0,1,o),e<o&&l===r.animate_id?a.requestAnimationFrame(n):(r.ele.scrollLeft=t,i&&i.call(r))};a.requestAnimationFrame(n)},t.removeItem=function(e){var t=this;t.slides.length&&(t.track.removeChild(t.slides[e]),t.refresh(!0),t.emit("remove"))},t.addItem=function(e){this.track.appendChild(e),this.refresh(!0),this.emit("add")},t.handleMouse=function(e){var t=this;t.mouseDown&&(t.isDrag=!0,t.ele.scrollLeft+=(t.mouseDown-e.clientX)*(t.opt.dragVelocity||3.3),t.mouseDown=e.clientX)},t.round=function(e){var t=1/(this.opt.slidesToScroll%1||1);return Math.round(e*t)/t},t.refresh=function(e){this.init(!0,e)},t.setOption=function(t,e){var o=this;o.breakpoint&&!e?o._opt.responsive.forEach(function(e){e.breakpoint===o.breakpoint&&(e.settings=Object.assign({},e.settings,t))}):o._opt=Object.assign({},o._opt,t),o.breakpoint=0,o.settingsBreakpoint()},t.destroy=function(){var e=this,t=e.ele.cloneNode(!0),o=function(t){t.removeAttribute("style"),[].forEach.call(t.classList,function(e){/^glider/.test(e)&&t.classList.remove(e)})};t.children[0].outerHTML=t.children[0].innerHTML,o(t),[].forEach.call(t.getElementsByTagName("*"),o),e.ele.parentNode.replaceChild(t,e.ele),e.event(a,"remove",{resize:e.resize}),e.emit("destroy")},t.emit=function(e,t){var o=new a.CustomEvent("glider-"+e,{bubbles:!this.opt.eventPropagate,detail:t});this.ele.dispatchEvent(o)},t.event=function(e,t,o){var i=e[t+"EventListener"].bind(e);Object.keys(o).forEach(function(e){i(e,o[e])})},e});

/* Glider slider initial*/
if (document.querySelector('.post-slider__posts')) {
  new Glider(document.querySelector('.post-slider__posts'), {
      slidesToScroll: 1,
      slidesToShow: 1.5,
      scrollLock: false,
      resizeLock: false,
      draggable: true,
      rewind: true,
      scrollPropagate: true,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.5,
            }
        }, {
          breakpoint: 1024,
            settings: {
              slidesToShow: 3.5,
            }
        }, {
          breakpoint: 1280,
            settings: {
              slidesToShow: 4.5,
            }
        }, {
          breakpoint: 1400,
            settings: {
              slidesToShow: 5.5,
            }
        }
    ],
      // dots: '.dots',
      arrows: {
        prev: '.post-slider__prev',
        next: '.post-slider__next'
      }
  });

  /*Glider Slider margin left-right*/
	let leftItem = document.querySelector('.post-slider__item:first-child');

	let rightItem = document.querySelector('.post-slider__item:last-child');

	let widthScreen = document.documentElement.clientWidth;

	let widthWrap = document.querySelector('.wrapper').getBoundingClientRect();

	let padding = (widthScreen - (widthWrap.width)) / 2;

	leftItem.style.marginLeft = padding + 'px';

	rightItem.style.marginRight = padding + 'px';
}


	/*Progress-bar in posts */
	let scrollPercentage = () => {
		let scrollProgress = document.querySelector('.progress-bar__circle'),
			content = document.querySelector('.entry__content'),
			contentBox = content.getBoundingClientRect(),
			midPoint = window.innerHeight / 2;

		if (contentBox.top > midPoint) {
			scrollValue = 125;
		}

		if (contentBox.top < midPoint) {
			scrollValue = 0;
		}

		if (contentBox.top <= midPoint && contentBox.bottom >= midPoint) {
			scrollValue = 125 - Math.abs(contentBox.top - midPoint) / contentBox.height * 125;
		}

		scrollProgress.setAttribute ('stroke-dashoffset', scrollValue);
	}
	window.addEventListener('scroll', scrollPercentage);
	window.addEventListener('load', scrollPercentage);

  /*Post external links*/
  const domain = location.host.replace('www.', '');
  const postLinks = document.querySelectorAll('.entry__content a');

  postLinks.forEach((link) => {
    if(!link.href.includes(domain)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noreferrer noopener');
    }
  });

});
