const db = require('../configs/database');

class AdminTableModel {
  static async createTable() {
    try {
      await db.schema.createTable('admin', (table) => {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.timestamps(false, true);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = AdminTableModel;