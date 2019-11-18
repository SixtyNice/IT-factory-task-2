function createTagElement(className, tag, text) {
    let element;
    if (tag) {
        element = document.createElement(tag);
    }
    else {
        element = document.createElement("div");
    }
    if (className) {
        element.classList = className;
    }
    if (text) {
        element.innerText = text;
    }
    return element;
}


let header = createTagElement('header', 'header');

header.appendChild(createTagElement("header-inner"))
    .appendChild(createTagElement("header-nav", "nav"))
    .append(
        createTagElement("header__link header__link-search", "a", "Search"),
        createTagElement("header__link header__link-my-movies", "a", "My Movies"))

let headerUser = createTagElement('header__user');
headerUser.append(createTagElement("header__username", "span", "Dima Skibin"),
    createTagElement("header__user-avatar", "img"));

let container = createTagElement("container");
container.appendChild(createTagElement("main-container", "main"))
    .appendChild(createTagElement("search-container", "section"))
    .appendChild(createTagElement("filters"))
    .append(createTagElement("filter filters__format", "select"))

let filtersFormatArray = ["Movie", "Series", "Сartoon"];
let filterFormat;
for (let i = 0; i < filtersFormatArray.length; i++) {
    filterFormat = 
}

document.body.append(header, header__user, container);

