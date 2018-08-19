import { getRottenTomatoesData } from 'rotten';
import { getTodaysMovies } from 'cinepolis';

const buildMovies = () => {
  return getTodaysMovies().then((movies) => {
    let promises = []
    movies.forEach((movie) => {
      promises.push(getRottenTomatoesData(movie.originalTitle).then((data) => {
        movie.rtScore = data.rtScore;
        movie.rtClass = data.rtClass;
        return movie;
      }));
    });
    return Promise.all(promises);
  });
}


buildMovies().then((data) => {
  console.log(data);
});
