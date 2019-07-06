
exports.up = function(knex) {
    return knex.schema.alterTable('toilets', table => {
        table.string('city').nullable().alter();
    }); 
};

exports.down = function(knex) {
    return knex.schema.alterTable('toilets', table => {
        table.string('city').defaultTo('').notNullable().alter();
    }); 
};
