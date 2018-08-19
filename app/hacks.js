import axios from 'axios';

axios.get('https://www.rottentomatoes.com/api/private/v2.0/search/', {
  params: {
    limit: 1,
    q: "Christopher Robin"
  }
}).then((response) => {
  const movie = response.data.movies[0];
  console.log({
    rtScore: movie.meterScore,
    rtClass: movie.meterClass
  });
})
