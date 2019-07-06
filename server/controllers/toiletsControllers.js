const { fetchToilets } = require('../models') 

exports.getToilets = ({ queries }, res, next) => {
    fetchToilets(queries)
        .then((toilets)=> {
            res.set({
                ['Access-Control-Allow-Origin']: 'https://thunderbox.herokuapp.com/'
            })
            res.status(200).send({toilets})
        })
        .catch(next)
}
