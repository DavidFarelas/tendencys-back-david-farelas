'use strict';

const appServices = require('../services/applications.services');
const { appsErrorHandler } = require('../errors/applications.errors');

class ApplicationsController {

    async all(_req, res) {
        try {
            const response = await appServices.getAll();
            res.json({ response });
        } catch (error) {
            appsErrorHandler(error, res);
        }
    }

    async create(req, res) {
        try {
            const response = await appServices.createApp(req.body);
            res.json({ response });
        } catch (error) {
            appsErrorHandler(error, res);
        }
    }

    async info(req, res) {
        try {
            const response = await appServices.getAppInfo(req.params);
            res.json({ response })
        } catch (error) {
            appsErrorHandler(error, res);
        }
    }

    async update(req, res) {
        try {
            const response = await appServices.updateApp(req.body, req.params);
            res.json({ response });
        } catch (error) {
            appsErrorHandler(error, res);
        }
    }

    async delete(req, res) {
        try {
            const response = await appServices.deleteApp(req.params);
            res.json({ response });
        } catch (error) {
            appsErrorHandler(error, res);
        }
    }
}

module.exports = new ApplicationsController();
