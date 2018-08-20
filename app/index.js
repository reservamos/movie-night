import express from 'express';
import path from 'path';
import { getTodaysMovies } from 'cinepolis';

// Create Express App
const app = express();

app.use(express.static('public'))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',  (req, res) => {
  getTodaysMovies().then((movies) => {
    res.render('index', { movies: movies})
  });
});

// Listens
app.listen(3000, () => console.log('Starting server at http://localhost:3000'));
