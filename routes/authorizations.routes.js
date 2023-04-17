'use strict';

const router = require('express').Router();
const prefix = '/authorizations';

const controller = require('../controllers/authorizations.controller');
const validateToken = require('../middlewares/validateToken');
const validator = require('../middlewares/validations/authorizations.validator')

router.get(`${prefix}/auth`, controller.getAuth);
router.get(`${prefix}/`, validateToken, controller.all);
router.post(`${prefix}/`, validateToken, validator.createAuthValidator, controller.create);
router.get(`${prefix}/:id`, validateToken, controller.info);
router.put(`${prefix}/:id`, validateToken, validator.updateAuthValidator, controller.update);
router.delete(`${prefix}/:id`, validateToken, controller.delete);

module.exports = router;