const fileURLToPath = require('url');
const dirname = require('path');
const bcrypt = require('bcrypt');


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Implementamos  Bcrypt
export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const isValidPassword = (user, password) =>{
    return bcrypt.compareSync(password, user.password)
}

module.exports = __dirname;