let http = new EasyHttp;
let ui = new UI;
document.querySelector('section').addEventListener('click', (e)=>{
    if(e.target.className.includes('btn')){
         http.getMovie(e.target.getAttribute('data')).then(x=>{ui.drawAnime(x)})
    }
   })
   
http.getMovies('https://kitsu.io/api/edge/anime?page[limit]=20/').then(x=>{x.data.forEach(element => {
    ui.drawAnimes(element);
    console.log(element)
});});

document.querySelector('#movieName').addEventListener('input', (e)=> {
    ui.clear();
    http.getMovies(`https://kitsu.io/api/edge/anime?filter[text]=${e.target.value}`)
    .then(x=>{x.data.forEach(element => {
        ui.drawAnimes(element);
        console.log(element)
    });});;
})


