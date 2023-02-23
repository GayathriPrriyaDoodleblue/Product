const knex = require('knex')(require('../configs/database'));

const DeliveryTable = knex.schema.createTable('deliverytable', (table) => {
  table.increments('id').primary();
  table.string('deliveryPersonName', 200).notNullable();
  table.string('pswd', 200).notNullable();
  table.string('email', 200).notNullable();
});

module.exports = DeliveryTable;