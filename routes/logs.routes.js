'use strict';

const router = require('express').Router();
const prefix = '/logs';

const controller = require('../controllers/logs.controller');
const validateToken = require('../middlewares/validateToken');
const validator = require('../middlewares/validations/logs.validator');

router.get(`${prefix}/`, validateToken, controller.all);
router.post(`${prefix}/`, validateToken, validator.createLogsValidator, controller.create);
router.get(`${prefix}/:id`, validateToken, controller.info);
router.put(`${prefix}/:id`, validateToken, validator.updateLogsValidator, controller.update);
router.delete(`${prefix}/:id`, validateToken, controller.delete);

module.exports = router;