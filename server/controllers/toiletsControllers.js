const { fetchToilets } = require("../models");

exports.getToilets = ({ queries }, res, next) => {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://thunderbox.herokuapp.com/"
      : "*";
  fetchToilets(queries)
    .then(toilets => {
      res.set({
        ["Access-Control-Allow-Origin"]: url
      });
      res.status(200).send({ toilets });
    })
    .catch(next);
};
const { fetchToilets, fetchBiggestToilet } = require('../models') 


exports.getToilets = ({ query }, res, next) => {
    // const url = process.env.NODE_ENV === 'production' ? 'https://thunderbox.herokuapp.com/' : '*'
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
    return fetchBiggestToilet(params)
        .then((result) => {
            res.status(200).send(result[0])
        })
        .catch(next)
}
