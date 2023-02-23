const knex = require('knex')(require('../configs/database'));

const UserTable = knex.schema.createTable('usertable', (table) => {
  table.increments('id').primary();
  table.string('userName', 200).notNullable();
  table.string('pswd', 200).notNullable();
  table.string('email', 200).notNullable();
});

module.exports = UserTable;