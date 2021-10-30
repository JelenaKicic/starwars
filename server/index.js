const express = require('express');
const app = express();
const port = 3000;
const charactersController = require('./controllers/characterController');
const planetController = require('./controllers/planetController');
const movieController = require('./controllers/movieController');
const climateController = require('./controllers/climateController');

app.get('/movies/:id/characters', charactersController.getMovieCharacters);

app.get('/movies', movieController.getAllMovies);

app.get('/climates/:id/planets', planetController.getClimatePlanets);

app.get('/climates', climateController.getAllClimates);

app.get('/', (req, res) => {
  res.send('Welcome to Star Wars fanclub!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});