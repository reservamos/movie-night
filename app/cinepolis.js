import axios from 'axios';

const findMovieIndex = (movies, key) => {
  return movies.findIndex((movie) => {
    return movie.key === key
  });
}

const extractMovies = (apiTheaters) => {
  let movies = [];
  apiTheaters.forEach((apiTheater) => {
    apiTheater.Dates[0].Movies.forEach((apiMovie) => {
      let movieIndex = findMovieIndex(movies, apiMovie.Key);
      if (movieIndex !== -1) {
        movies[movieIndex].theaters.push(apiTheater.Name);
      } else {
        movies.push({
          "title": apiMovie.Title,
          "originalTitle": apiMovie.OriginalTitle,
          "key": apiMovie.Key,
          "theaters": [apiTheater.Name]
        });
      }
    });
  });
  return movies;
}

export const getTodaysMovies = () => {
  return axios.post('http://www.cinepolis.com/Cartelera.aspx/GetNowPlayingByCity', {
    claveCiudad: "monterrey-sur",
    esVIP: false
  }).then((response) => {
    return extractMovies(response.data.d.Cinemas);
  });
}
