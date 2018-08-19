import axios from 'axios';

let movies = [];

axios.post('http://www.cinepolis.com/Cartelera.aspx/GetNowPlayingByCity', {
  claveCiudad: "monterrey-sur",
  esVIP: false
}).then((response) => {
  response.data.d.Cinemas.forEach((theater) => {
    theater.Dates[0].Movies.forEach((movie) => {
      console.log({
        "title": movie.Title,
        "originalTitle": movie.OriginalTitle,
        "key": movie.Key
      })
    });
  })
})
