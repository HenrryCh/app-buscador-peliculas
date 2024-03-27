document.getElementById('searchButton').addEventListener('click', searchMovies);

const apiKey = '1fb124c813ff29c75f52f4344e21f7e0';
const urlBase = 'https://api.themoviedb.org/3/search/movie';
const urlImg = 'https://image.tmdb.org/t/p/w200';
const resultContainer = document.getElementById('results');

function searchMovies() {
    resultContainer.innerHTML = 'Cargando...';

    const searchInput = document.getElementById('searchInput').value;

    fetch(`${urlBase}?api_key=${apiKey}&query=${searchInput}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results));
}

function displayMovies(movies) {
    resultContainer.innerHTML = '';

    if (movies.length === 0) {
        resultContainer.innerHTML = '<p>No se encontraron resultados para tu búsqueda</p>';
        return;
    }

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = 'Fecha de lanzamiento: ' + movie.release_date;

        const overview = document.createElement('p');
        overview.textContent = movie.overview;

        const posterPath = movie.poster_path ? urlImg + movie.poster_path : 'https://via.placeholder.com/100';

        const poster = document.createElement('img');
        poster.src = posterPath;
        poster.alt = movie.title;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);

        resultContainer.appendChild(movieDiv);
    });
}
