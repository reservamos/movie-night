import express from 'express';
import path from 'path';
import { getTodaysMovies } from 'cinepolis';
import { getRottenTomatoesData } from 'rotten';

// Create Express App
const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const buildMovies = () => {
  return getTodaysMovies().then((movies) => {
    let promises = []
    movies.forEach((movie) => {
      promises.push(buildMovie(movie));
    });
    return Promise.all(promises);
  });
}

const buildMovie = (movie) => {
  return getRottenTomatoesData(movie.originalTitle).then((data) => {
    movie.rtScore = data.rtScore;
    movie.rtClass = data.rtClass;
    return movie;
  });
}

app.get('/',  (req, res) => {
  buildMovies().then((movies) => {
    res.render('index', { movies: movies })
  });
});

// Listens
app.listen(3000, () => console.log('Starting server at http://localhost:3000'));
