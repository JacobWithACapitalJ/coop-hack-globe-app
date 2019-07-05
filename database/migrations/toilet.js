exports.up = function(knex, Promise) {
  return knex.schema.createTable("toilets", toiletsTable => {
    toiletsTable.increments("ID").primary();
    toiletsTable.float("longitude").unique();
    toiletsTable.float("latitude").unique();
    toiletsTable.integer("total_records").defaultTo(0);
    toiletsTable.integer("accessible_count").defaultTo(0);
    toiletsTable.integer("unisex_count").defaultTo(0);
    toiletsTable.integer("changing_table_count").defaultTo(0);
    toiletsTable.string("city").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("toilets");
};
