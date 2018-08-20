import express from 'express';
import path from 'path';

// Create Express App
const app = express();

app.use(express.static('public'))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',  (req, res) => {
  res.render('index')
});

// Listens
app.listen(3000, () => console.log('Starting server at http://localhost:3000'));
