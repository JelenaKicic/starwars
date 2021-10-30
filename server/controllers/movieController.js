const db = require("../models");
const Movie = db.Movie;

exports.getMovieById = async (id) => {
    return await Movie.findOne({
        where: {
            id: id
        }
    })
}