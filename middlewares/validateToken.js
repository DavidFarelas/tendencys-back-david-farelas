const Authorizations = require('../models/authorizations.model');
const { validate } = require('uuid');

async function validateToken(req, res, next) {
    const receivedToken = req.header('auth-token');
    if (!receivedToken) return res.status(401).json({ mensaje: 'Token es requerido' });
    if (!validate(receivedToken)) return res.status(401).json({ mensaje: 'Token debe ser valido' });
    const tokenExists = await Authorizations.findOne({ token: receivedToken });
    if (!tokenExists) return res.status(401).json({ mensaje: 'Token no valido' });

    next();
}

module.exports = validateToken;