function createTagElement(className, tag, text, attribute, value) {
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
        element.innerHTML = text;
    }
    if (attribute) {
        element.setAttribute(attribute, value);
    }
    return element;
}

function createOptions(arrayOptions) {
    let filterFormat = [];
    for (let i = 0; i < arrayOptions.length; i++) {
        filterFormat.push(createTagElement(arrayOptions[i].toLowerCase(), "option", `${arrayOptions[i]}`));
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
let mainContainer = createTagElement("main-container", "main");
let searchContainer = createTagElement("search-container", "section");
let filtersContainer = createTagElement("filters");

container.appendChild(mainContainer)
    .appendChild(searchContainer)
    .appendChild(filtersContainer)
    .appendChild(createTagElement("filter filters__format", "select"))
    .append(...createOptions(["Movie", "Series", "Сartoon"]));

filtersContainer.appendChild(createTagElement("filter filters__genre", "select"))
    .append(...createOptions(["Horror", "Drama", "Comedy", "Thriller"]));

filtersContainer.appendChild(createTagElement("filter filters__year", "select"))
    .append(...createOptions(createArrayOfYears()));

function createArrayOfYears() {
    let array = [];
    for (let i = 1905; i < 2019; i++) {
        array.push(i.toString());
    }
    return array.reverse();
}


searchContainer
    .appendChild(createTagElement("search"))
    .appendChild(createTagElement("search__field", "input", "", "placeholder", "Search"))
    .after(createTagElement("search__button", "button", "Search"))

let table = createTagElement("table-movies", "table");
mainContainer
    .appendChild(createTagElement("list-movies", "section"))
    .appendChild(table)
    .appendChild(createTagElement("field", "tr"))
    .append(
        createTagElement("picture-movie", "th"),
        createTagElement("title-movie", "th", "Title"),
        createTagElement("format-movie", "th", "Format"),
        createTagElement("genre-movie", "th", "Genre"),
        createTagElement("year-movie", "th", "Year"),
        createTagElement("rating-movie", "th", "Rating")
    );
for (let i = 0; i < 4; i++) {
    table.appendChild(createTagElement("field", "tr"))
        .append(
            createTagElement("", "td"),
            createTagElement("", "td", "Some"),
            createTagElement("", "td", "Movies"),
            createTagElement("", "td", "Drama"),
            createTagElement("", "td", "1987"),
            createTagElement("", "td", "3")
        );
}

let navBtns=[];
for(let i = 0;i<6;i++) {
    navBtns.push(createTagElement("nav-btn page-num","div",i.toString()))
}

mainContainer.appendChild(createTagElement("nav-wrapper"))
    .appendChild(createTagElement("nav-pages"))
    .append(createTagElement("nav-btn prev-page","div","<<"),
    ...navBtns,
    createTagElement("nav-btn next-page","div",">>"));

document.body.append(header, headerUser, container);

