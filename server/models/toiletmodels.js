const connection = require("../../database/connection");

exports.fetchToilets = city => {
  return connection("toilets")
    .select("toilets.*")
    .modify(query => {
      if (city) query.where({ city });
    });
};
