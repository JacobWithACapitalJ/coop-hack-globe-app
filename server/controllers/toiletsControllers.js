const { fetchToilets } = require('../models') 


exports.getToilets = ({ queries }, res, next) => {
    const url = process.env.NODE_ENV === 'production' ? 'https://thunderbox.herokuapp.com/' : '*'
    fetchToilets(queries)
        .then((toilets)=> {
            res.set({
                ['Access-Control-Allow-Origin']: url
            })
            res.status(200).send({toilets})
        })
        .catch(next)
}
