const { fetchToilets } = require('../models') 


exports.getToilets = ({ query }, res, next) => {
    const url = process.env.NODE_ENV === 'production' ? 'https://thunderbox.herokuapp.com/' : '*'
    fetchToilets(query)
        .then((toilets)=> {
            res.set({
                ['Access-Control-Allow-Origin']: '*'
            })
            res.status(200).send({toilets})
        })
        .catch(next)
}
