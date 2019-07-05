const knex = require("knex");
const dbconfig = require("../knexfile");

const ENV = process.env.NODE_ENV || 'development';
const config =
  ENV === 'production'
    ? { client: 'pg', connection: process.env.DATABASE_URL }
    : require('../knexfile');

const connection = knex(dbconfig);
module.exports = require('knex')(config);