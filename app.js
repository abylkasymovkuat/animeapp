let http = new EasyHttp;
let ui = new UI;
document.querySelector('section').addEventListener('click', (e)=>{
    if(e.target.className.includes('btn')){
         http.getMovie(e.target.getAttribute('data')).then(x=>{ui.drawAnime(x)})
    }
   })

document.addEventListener("DOMContentLoaded", () => {

http.getMovies('https://kitsu.io/api/edge/anime?page[limit]=20/').then(x=>{x.data.forEach(element => {
    ui.drawAnimes(element);
    console.log(element)
});});
} );

document.querySelector('#logo img').addEventListener('onmouseover', (e)=>
{
    this.setAttribute('src', 'http://www.youloveit.ru/uploads/posts/2017-05/1494861649_youloveit_ru_kot_pushin02.png');
})
   

document.querySelector('#movieName').addEventListener('input', (e)=> {
    ui.clear();
    http.getMovies(`https://kitsu.io/api/edge/anime?filter[text]=${e.target.value}`)
    .then(x=>{x.data.forEach(element => {
        ui.drawAnimes(element);
        console.log(element)
    });});;
})


