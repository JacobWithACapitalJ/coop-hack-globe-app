
exports.up = function(knex) {
    return knex.schema.alterTable('toilets', table => {
        table.string('city').alter();
    }); 
};

exports.down = function(knex) {
    return knex.schema.alterTable('toilets', table => {
        table.string('city').notNullable().defaultTo('').alter();
    }); 
};
