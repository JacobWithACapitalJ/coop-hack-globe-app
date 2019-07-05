// const { <insert data here to require in>} = require("<enter path here>")

// exports.seed = function(knex, Promise) {
//   return knex.migrate
//     .rollback()
//     .then(() => knex.migrate.latest())
//     .then(() => {
//       const toiletsInsertions = knex("toilets").insert(<enter toilets data here>)
//       return Promise.all(toiletsInsertions).then(()=>{
//         return knex("toilets").returning("*")
//       })
//     });
// };
