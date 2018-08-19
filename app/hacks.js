import axios from 'axios';

function getRottenTomatoesData(movieName) {
  return axios.get('https://www.rottentomatoes.com/api/private/v2.0/search/', {
    params: {
      limit: 1,
      q: movieName
    }
  }).then((response) => {
    const movie = response.data.movies[0];
    return {
      rtScore: movie.meterScore,
      rtClass: movie.meterClass
    };
  })
}

getRottenTomatoesData("Mission Impossible v").then((data) => {
  console.log(data);
});
