'use strict';

const router = require('express').Router();
const prefix = '/applications';

const controller = require('../controllers/applications.controller');
const validateToken = require('../middlewares/validateToken');

const validator = require('../middlewares/validations/applications.validator')

router.get(`${prefix}/`, validateToken, controller.all);
router.post(`${prefix}/`, validateToken, validator.createAppValidator, controller.create);
router.get(`${prefix}/:id`, validateToken, controller.info);
router.put(`${prefix}/:id`, validateToken, validator.updateAppValidator, controller.update);
router.delete(`${prefix}/:id`, validateToken, controller.delete);

module.exports = router;