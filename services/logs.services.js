'use strict'

const Logs = require('../models/logs.model');

class LogsServices {
    async getAll() {
        return await Logs.find();
    }

    async createLog(body) {
        const {
            application_id,
            message,
            path,
            priority,
            request,
            response,
            type
        } = body;
        try {
            const newLog = new Logs({
                application_id,
                message,
                path,
                priority,
                request,
                response,
                type
            })

            const savedLog = newLog.save();
            return savedLog;
        } catch (error) {
            throw new Error(error.message);
        }

    }

    async getLogInfo(params) {
        const { id } = params;
        const appInfo = await Logs.findById(id);
        if (!appInfo) throw new Error('There is no information associated with this ID');

        return appInfo;
    }

    async updateLog(body, params) {
        const { id } = params;
        let prevApp = await Logs.findById(id);
        if (!prevApp) throw new Error('There is no information associated with this ID');
        prevApp = Object.assign(prevApp, body);

        return await prevApp.save();
    }

    async deleteLog(params) {
        const { id } = params;
        const appInfo = await Logs.findById(id);

        if (appInfo) {
            await Logs.findByIdAndDelete(id);
            return 'Item deleted';
        }

        throw new Error('Item not found');
    }
}

module.exports = new LogsServices();