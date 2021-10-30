const db = require("../models");
const Climate = db.Climate;

exports.getClimateById = async (id) => {
    return await Climate.findOne({
        where: {
            id: id
        }
    })
}

exports.getAllClimates = async (req, res) => {
    try {
        const climates = await Climate.findAll();
        
        res.status(200).send(climates);
    } catch(err) {
        res.status(500).send({ message: err.message });
    }
}