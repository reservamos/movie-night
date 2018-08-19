import { getTodaysMovies } from 'cinepolis';

// We hacked cinepolis! 
getTodaysMovies().then((movies) => {
  console.log(movies);
});
