import axios from 'axios';

let movies = [];

function includesMovie(movies, key) {
  return movies.find((movie) => {
    return movie.key === key
  });
}

function extractMovies(cinemas) {
  let movies = [];
  cinemas.forEach((theater) => {
    theater.Dates[0].Movies.forEach((movie) => {
      if (!includesMovie(movies, movie.Key)) {
        movies.push({
          "title": movie.Title,
          "originalTitle": movie.OriginalTitle,
          "key": movie.Key,
          "theaters": [theater.Name]
        });
      }
    });
  });
  return movies
}

axios.post('http://www.cinepolis.com/Cartelera.aspx/GetNowPlayingByCity', {
  claveCiudad: "monterrey-sur",
  esVIP: false
}).then((response) => {
  console.log(extractMovies(response.data.d.Cinemas));
})
