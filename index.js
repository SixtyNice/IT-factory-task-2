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

function createOptions(arrayFilters) {
    let filterFormat = [];
    for (let i = 0; i < arrayFilters.length; i++) {
        filterFormat.push(createTagElement(arrayFilters[i].toLowerCase(), "option", `${arrayFilters[i]}`));
    }
    return filterFormat;
}


function createLink() {

}

function createImg() {

}


let header = createTagElement('header', 'header');

header.appendChild(createTagElement("header-inner"))
    .appendChild(createTagElement("header-nav", "nav"))
    .append(
        createTagElement("header__link header__link-search", "a", "Search"),
        createTagElement("header__link header__link-my-movies", "a", "My Movies"));

let headerUser = createTagElement('header__user');
headerUser.append(createTagElement("header__username", "span", "Dima Skibin"),
    createTagElement("header__user-avatar", "img"));

let container = createTagElement("container");
// createTagElement("main-container", "main")
container.appendChild(
    document.createElement("div")
    .appendChild(createTagElement("search-container", "section"))
    .appendChild(createTagElement("filters"))
    .appendChild(createTagElement("filter filters__format", "select"))
    .append(...createOptions(["Movie", "Series", "Сartoon"])), 

    createTagElement("filter filters__genre", "select")
    .append(...createOptions(["Horror", "Drama", "Comedy", "Thriller"])));





document.body.append(header, headerUser, container);

