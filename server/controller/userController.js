const db = require("../db");

class UserController {
    async createUser(req, res) {
        const { email, password } = req.body;
        const newUser = await db.query(
            `INSERT INTO users (email, password) values ($1, $2) RETURNING id, email`,
            [email, password]
        );
        res.json(newUser.rows[0]);
    }
}

module.exports = new UserController();
