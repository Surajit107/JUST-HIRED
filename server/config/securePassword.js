const bcryptjs = require('bcryptjs');
// SecurePassword
const securePassword = async (password) => {
    const hashPassword = await bcryptjs.hash(password, 10)
    // console.log(hashPassword);
    return hashPassword;
}

module.exports = securePassword;