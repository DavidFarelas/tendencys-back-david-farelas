'use strict'

class MainServices {
    getAll(_req, res) {

        return res.json({ message: 'Hola mundo' });
    }
}

module.exports = new MainServices();