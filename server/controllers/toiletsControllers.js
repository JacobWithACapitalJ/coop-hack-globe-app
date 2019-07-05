const { fetchToilets } = require('../models') 

exports.getToilets = ({ queries }, res, next) => {
    fetchToilets(queries)
        .then((toilets)=> {
            res.status(200).send({toilets})
        })
        .catch(next)
}
