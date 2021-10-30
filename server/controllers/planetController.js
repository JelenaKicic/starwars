const db = require("../models");
const climateController = require('./climateController');
const Character = db.Character;
const Planet = db.Planet;
const PlanetClimate = db.PlanetClimate;

exports.getClimatePlanets = async (req, res) => {
    try {
        const climate = await climateController.getClimateById(req.params.id);
        if(climate == null) {
            res.status(404).send({ message: 'Climate does not exist' });
            return;
        }

        const planets = await Planet.findAll({
            include: [{
                model: PlanetClimate,
                attributes: [],
                where: {
                    climateId: req.params.id,
                }
            },
            {
                model: Character,
                where: {
                    hairColor: 'dark',
                },
                required: false
            }],
        });
        
        res.status(200).send(planets);
    } catch(err) {
        res.status(500).send({ message: err.message });
    }
}