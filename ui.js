function UI(){

}

UI.prototype.drawAnimes = (anime) => {
   let out = '';
   out+= `<div class="anime-card col-md-4 p-2">
<div class="card">
        <img class="card-img-top" src=${anime.attributes.posterImage.medium?anime.attributes.posterImage.medium:anime.attributes.coverImage.medium} alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${(anime.attributes.titles.en)?anime.attributes.titles.en:anime.attributes.titles.ja_jp}</h5>
        <p class="card-text">${anime.attributes.synopsis.split('.')[0]}.</p>
        <a href="#" data=${anime.id} class="btn btn-primary">View More</a>
        </div>
</div>
</div>`;


document.querySelector('#cards').innerHTML += out;
}


UI.prototype.clear = () => {
        document.querySelector('#cards').innerHTML = '';
}

UI.prototype.drawAnime = (anime) => {
    let out = '';
    out+=`<div class='row'>
                    <div class="col-md-12 ">
                        <img class='anime-image thumbnail' src='${anime.attributes.coverImage?anime.attributes.coverImage.small:anime.attributes.posterImage.small}' alt="">
                    </div>
                    </div>
                    <div class='row mt-4'>
                    <div class="col-md-6 ">
                            <ul class="list-group">
                                    <li class="list-group-item">Number of views: ${anime.attributes.userCount}</li>
                                    <li class="list-group-item">Average Rating: ${anime.attributes.averageRating}</li>
                                    <li class="list-group-item">Popularity Rank: ${anime.attributes.popularityRank}</li>
                                    <li class="list-group-item">Name: ${anime.attributes.titles.ja_jp}</li>
                                    <li class="list-group-item">Name: ${anime.attributes.titles.en}</li>
                                    <li class="list-group-item">Rating: ${anime.attributes.ageRatingGuide}</li>
                                  </ul>
                                  </div>
                                  <div class="col-md-6">
                                  <h3>Synopsis</h3>
                                  <p class='lead'>${anime.attributes.synopsis}</p>      
                                  </div>
                                        </div>
                                  `


    document.querySelector('#cards').innerHTML = out;
}