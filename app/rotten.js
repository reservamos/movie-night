import axios from 'axios';

const cleanMovieName = (name) => {
  return name.replace(/\(.+/, "");
}

export const getRottenTomatoesData = (movieName) => {
  return axios.get('https://www.rottentomatoes.com/api/private/v2.0/search/', {
    params: {
      limit: 1,
      q: cleanMovieName(movieName)
    }
  }).then((response) => {
    const movie = response.data.movies[0];
    if (movie) {
      return {
        rtScore: movie.meterScore,
        rtClass: movie.meterClass
      };
    }
    return {};
  })
}
