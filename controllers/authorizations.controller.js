'use strict';

const authServices = require('../services/authorizations.services');
const { authErrorHandler } = require('../errors/authorizations.errors');


class AuthorizationsController {

    async getAuth(_req, res) {
        try {
            const response = await authServices.getAuthorization();
            res.json({ token: response.token });
        } catch (error) {
            authErrorHandler(error, res);
        }
    }

    async all(_req, res) {
        try {
            const response = await authServices.getAll();
            res.json({ response });
        } catch (error) {
            authErrorHandler(error, res);
        }
    }

    async create(req, res) {
        try {
            const response = await authServices.createAuth(req.body);
            res.json({ response });
        } catch (error) {
            authErrorHandler(error, res);
        }
    }

    async info(req, res) {
        try {
            const response = await authServices.getAuthInfo(req.params);
            res.json({ response })
        } catch (error) {
            authErrorHandler(error, res);
        }
    }

    async update(req, res) {
        try {
            const response = await authServices.updateAuth(req.body, req.params);
            res.json({ response });
        } catch (error) {
            authErrorHandler(error, res);
        }
    }

    async delete(req, res) {
        try {
            const response = await authServices.deleteAuth(req.params);
            res.json({ response });
        } catch (error) {
            authErrorHandler(error, res);
        }
    }
}

module.exports = new AuthorizationsController();
