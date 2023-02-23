const knex = require('knex')(require('../configs/database'));

const MerchantTable = knex.schema.createTable('merchanttable', (table) => {
  table.increments('id').primary();
  table.string('merchantName', 200).notNullable();
  table.string('pswd', 200).notNullable();
  table.string('email', 200).notNullable();
});

module.exports = MerchantTable;