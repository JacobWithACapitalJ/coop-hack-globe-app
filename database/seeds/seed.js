const toiletData = require("../toiletDatabase/data.json");
exports.seed = function(knex, Promise) {
  // const toiletsInsertions = knex("toilets").insert(toiletData);
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("toilets").insert(toiletData);
    })
    .catch(console.log);
};
