 require('../models/admin');

class AdminController {

    async createAdminTable(req, res) {
        try {
            await knex.createTable();
            console.log('Admin table created successfully');
            res.status(200).json({ message: 'Admin table created successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    }
    // GET all admin data
    async getAllAdmins(req, res) {
        try {
            const admins = await knex('admintable').select('*');
            res.status(200).json(admins);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // GET a single admin by ID
    async getAdminById(req, res) {
        try {
            const admin = await knex('admintable').select('*').where('id', req.params.id).first();
            if (admin) {
                res.status(200).json(admin);
            } else {
                res.status(404).json({ message: 'Admin not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async createAdmin(req, res) {
        const adminData = {
            username: req.body.username,
            password: req.body.password,
        };

        try {
            const newAdminId = await knex('admintable').insert(adminData);
            const newAdmin = await knex('admintable').select('*').where('id', newAdminId).first();
            res.status(201).json(newAdmin);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: error.message });
        }
    }

    async updateAdmin(req, res) {
        try {
            const updatedCount = await knex('admintable').where('id', req.params.id).update(adminData);
            if (updatedCount > 0) {
                const updatedAdmin = await knex('admintable').select('*').where('id', req.params.id).first();
                res.status(200).json(updatedAdmin);
            } else {
                res.status(404).json({ message: 'Admin not found' });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // DELETE an admin by ID
    async deleteAdmin(req, res) {
        try {
            const deletedCount = await knex('admintable').where('id', req.params.id).del();
            if (deletedCount > 0) {
                res.status(200).json({ message: 'Admin deleted successfully' });
            } else {
                res.status(404).json({ message: 'Admin not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new AdminController();