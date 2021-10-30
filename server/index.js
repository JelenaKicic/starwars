const express = require('express');
const app = express();
const port = 3000;
const charactersController = require('./controllers/charactersController');
const planetController = require('./controllers/planetController');

app.get('/movie/:id/characters', charactersController.getMovieCharacters);

app.get('/climate/:id/planets', planetController.getClimatePlanets);

app.get('/', (req, res) => {
  res.send('Welcome to Star Wars fanclub!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});