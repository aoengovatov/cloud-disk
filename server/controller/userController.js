class UserController {
    async createUser(req, res) {
        const { email, password } = req.body;
    }
}

module.exports = new UserController();
