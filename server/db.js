const Pool = require("pg").Pool;
const config = require("config");

const pool = new Pool({
    user: `${config.get("userDb")}`,
    password: `${config.get("passwordDb")}`,
    host: `${config.get("hostDb")}`,
    port: `${config.get("portDb")}`,
    database: `${config.get("nameDb")}`,
});

module.exports = pool;
