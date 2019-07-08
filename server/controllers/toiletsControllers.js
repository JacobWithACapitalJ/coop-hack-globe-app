const { fetchToilets, fetchBiggestToilet } = require("../models");

exports.getToilets = ({ query }, res, next) => {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://thunderbox.herokuapp.com/"
      : "*";
  Promise.all([fetchToilets(query), fetchBiggestToilet({ property: 'total_records' })])
    .then(([ toilets, biggestToilet ]) => {
      const max_count = biggestToilet[0].max;
      res.set({
        ["Access-Control-Allow-Origin"]: url
      });
      res.status(200).send({ toilets, max_count });
    })
    .catch(next);
};

exports.getBiggestToilet = ({params}, res, next) => {
    fetchBiggestToilet(params)
        .then((result) => {
            res.status(200).send(result[0])
        })
        .catch(next)
}
