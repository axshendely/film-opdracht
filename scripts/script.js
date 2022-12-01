const get_ul = document.getElementById('Movies-Catalog')
const AddMovies = function (een_lijst) {
    for(let i=0; i<een_lijst.length; i++){
        const item = een_lijst[i]
        const get_li = document.createElement("li");
        const get_poster = document.createElement("img")
        const get_title = document.createElement("h3")
        const make_button = document.createElement('button')
        const get_href = document.createElement('a')
        const make_paraf = document.createElement("h5")
        const url = `https://www.imdb.com/title/${item.imdbID}/`
        get_title.append(item.title)
        make_paraf.append(item.year)
        get_poster.setAttribute('src', item.poster)
        make_button.setAttribute('type', 'submit')
        get_href.setAttribute('href', url)
        get_href.setAttribute('target', '_blank')
        get_href.appendChild(get_poster)
        make_button.appendChild(get_title)
        make_button.appendChild(make_paraf)
        get_href.appendChild(make_button)
        get_li.append(get_href)
        get_ul.appendChild(get_li);
    }
}

const Send_to_name = function () {
    return change_up(document.getElementById('search-box').value.toLowerCase())
}
const RemoveMovies = function () {
    document.querySelectorAll('li').forEach(element => element.remove())
}
const filters_by_latest = function (movies){
    return movies.year > 2014
}
const filters_by_marvel = function (movies) {
    return movies.title.toLowerCase().match('avenger')
}
const filters_by_xmen = function (movies) {
    return movies.title.toLowerCase().match('x-men')
}
const filters_by_princess = function (movies) {
    return movies.title.toLowerCase().match('princess')
}
const filters_by_batman = function (movies) {
    return movies.title.toLowerCase().match('batman')
}
const change_up = function (event_value) {
    RemoveMovies()
    switch (event_value){
        case 'latest':
            return AddMovies(movies.filter(filters_by_latest))
        case 'marvel':
            return AddMovies(movies.filter(filters_by_marvel))
        case 'xmen':
            return AddMovies(movies.filter(filters_by_xmen))
        case 'princess':
            return AddMovies(movies.filter(filters_by_princess))
        case 'batman':
            return AddMovies(movies.filter(filters_by_batman))
    }
}
const Luisteraar = function () {
    AddMovies(movies)
    document.getElementsByName('filter_by').forEach(element => element.addEventListener(
        "change", function (elements) {
            return change_up(elements.target.value)
        })
    )
}
Luisteraar()

