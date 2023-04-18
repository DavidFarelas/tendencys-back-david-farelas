'use strict';

const { logsErrorHandler } = require('../errors/logs.errors');
const logsServices = require('../services/logs.services');

class LogsController {

    async all(_req, res) {
        try {
            const response = await logsServices.getAll();
            res.json({ response });
        } catch (error) {
            logsErrorHandler(error, res);
        }
    }

    async create(req, res) {
        try {
            const response = await logsServices.createLog(req.body);
            res.json({ response });
        } catch (error) {
            logsErrorHandler(error, res);
        }
    }

    async info(req, res) {
        try {
            const response = await logsServices.getLogInfo(req.params);
            res.json({ response })
        } catch (error) {
            logsErrorHandler(error, res);
        }
    }

    async update(req, res) {
        try {
            const response = await logsServices.updateLog(req.body, req.params);
            res.json({ response });
        } catch (error) {
            logsErrorHandler(error, res);
        }
    }

    async delete(req, res) {
        try {
            const response = await logsServices.deleteLog(req.params);
            res.json({ response });
        } catch (error) {
            logsErrorHandler(error, res);
        }
    }
}

module.exports = new LogsController();
