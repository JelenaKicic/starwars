const db = require("../models");
const Climate = db.Climate;

exports.getClimateById = async (id) => {
    return await Climate.findOne({
        where: {
            id: id
        }
    })
}