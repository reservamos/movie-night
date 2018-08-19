import axios from 'axios';

let movies = [];

axios.post('http://www.cinepolis.com/Cartelera.aspx/GetNowPlayingByCity', {
  claveCiudad: "monterrey-sur",
  esVIP: false
}).then((response) => {
  response.data.d.Cinemas.forEach((theater) => {
    console.log(theater.Name);
  })
})
