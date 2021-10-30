const db = require("../models");
const Movie = db.Movie;

exports.getMovieById = async (id) => {
    return await Movie.findOne({
        where: {
            id: id
        }
    })
}

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        
        res.status(200).send(movies);
    } catch(err) {
        res.status(500).send({ message: err.message });
    }
}