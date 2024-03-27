document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key='1fb124c813ff29c75f52f4344e21f7e0'
const urlBase ='https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'


let resultContainer = document.getElementById('results')
    
function searchMovies(){
    resultContainer.innerHTML = 'Cargando..'

    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML='<p>No se ecnontraron reultados para tu busqueda</p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La feca de lanzamiento fue: '+ movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path

        let poster = document.createElement('img')
        poster.src = posterPath
        
        resultContainer.appendChild(movieDiv)
        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        
    

    });

}