import axios from 'axios';

axios.get('https://www.rottentomatoes.com/api/private/v2.0/search/', {
  params: {
    limit: 1,
    q: "Christopher Robin"
  }
}).then((response) => {
  console.log(response.data);
})
