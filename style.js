function addStyles(el, styles) {
    el = document.querySelector(el);
    for (let key in styles) {
        el.style[key] = styles[key];
    }

}
