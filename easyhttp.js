function EasyHttp () {

}

EasyHttp.prototype.getMovies = async (url) => {

    let data = await fetch(url);
    let films = await data.json();
    return films;
}


EasyHttp.prototype.getMovie = async (id) => {

    let data = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
    let film = await data.json();
    
    
    return film.data;
}