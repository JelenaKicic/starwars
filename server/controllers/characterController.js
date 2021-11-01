const db = require("../models");
const movieController = require('./movieController');
const Character = db.Character;
const MovieCharacter = db.MovieCharacter;

exports.getMovieCharacters = async (req, res) => {
    try {
        const movie = await movieController.getMovieById(req.params.id);
        if(movie == null) {
            res.status(404).send({ message: 'Movie does not exist' });
            return;
        }

        let whereParams = {};
        if(req.query.gender != null) {
            whereParams = {
                gender: req.query.gender
            };
        }

        let orderParams = new Array();
        if(req.query.height != null) {
            if(req.query.height === 'ASC' || req.query.height === 'DESC') {
                orderParams.push(['height', req.query.height]);
            } else {
                res.status(400).send({ message: 'Height sort query param must be ASC or DESC!' });
                return;
            }
        }
        if(req.query.age != null) {
            if(req.query.age === 'ASC' || req.query.age === 'DESC') {
                orderParams.push(['age', req.query.age]);
            } else {
                res.status(400).send({ message: 'Age sort query param must be ASC or DESC!' });
                return;
            }
        }

        const characters = await Character.findAndCountAll({
            include: [{
                model: MovieCharacter,
                attributes: ['movieId'],
                where: {
                    movieId: req.params.id,
                }
            }],
            where: whereParams,
            order: orderParams,
            offset: req.query.offset,
            limit: req.query.limit
        });
        
        res.status(200).send({
            offset: req.query.offset,
            ...characters
        });
    } catch(err) {
        res.status(500).send({ message: err.message });
    }
}