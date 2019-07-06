const { fetchToilets, fetchBiggestToilet } = require('../models') 


exports.getToilets = ({ query }, res, next) => {
    const url = process.env.NODE_ENV === 'production' ? 'https://thunderbox.herokuapp.com/' : '*'
    fetchToilets(query)
        .then((toilets)=> {
            res.set({
                ['Access-Control-Allow-Origin']: 'https://thunderbox.herokuapp.com/'
            })
            res.status(200).send({toilets})
        })
        .catch(next)
}

exports.getBiggestToilet = ({params}, res, next) => {
    fetchBiggestToilet(params)
        .then(([{toilets:[toilet]})=>
        res.status(200).send(toilet[params.propery])
        .catch(next)
}

