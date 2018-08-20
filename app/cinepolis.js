import axios from 'axios';

const findMovieIndex = (movies, key) => {
  return movies.findIndex((movie) => {
    return movie.key === key
  });
}


const extractTimes = (apiMovie) => {
  let result = []
  apiMovie.Formats.forEach((format) => {
    let formatTimes = `${format.Language}:`;
    format.Showtimes.forEach((showtime) => {
      formatTimes += `${showtime.Time},`;
    });
    result.push(formatTimes);
  });
  return result;
}

const extractMovies = (apiTheaters) => {
  let movies = [];
  apiTheaters.forEach((apiTheater) => {
    apiTheater.Dates[0].Movies.forEach((apiMovie) => {
      let movieIndex = findMovieIndex(movies, apiMovie.Key);
      if (movieIndex !== -1) {
        movies[movieIndex].theaters.push({
          name: apiTheater.Name,
          times: extractTimes(apiMovie)
        });
      } else {
        movies.push({
          "image": apiMovie.Poster,
          "title": apiMovie.Title,
          "originalTitle": apiMovie.OriginalTitle,
          "key": apiMovie.Key,
          "theaters": [{
            name: apiTheater.Name,
            times: extractTimes(apiMovie)
          }],
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
