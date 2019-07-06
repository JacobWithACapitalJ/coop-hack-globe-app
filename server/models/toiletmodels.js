const connection = require("../../database/connection");

<<<<<<< HEAD
exports.fetchToilets = city => {
  return connection("toilets")
    .select("toilets.*")
    .modify(query => {
      if (city) query.where({ city });
    });
};
=======
exports.fetchToilets = ({city}) => {
    return connection('toilets')
        .select('toilets.*')
        .modify((query)=> {
            if (city) query.where({city})
        })
}

exports.fetchBiggestToilet = ({property}) => {
    return connection('toilets')
        .max(property)
        .returning('*')
}
>>>>>>> f0b4868875affd7f1316c0d32611d11326e55a6e
