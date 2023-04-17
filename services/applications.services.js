'use strict'

const Applications = require('../models/applications.model');

class ApplicationsServices {
    async getAll() {
        return await Applications.find();
    }

    async createApp(body) {
        const { name } = body;
        const prevApp = await Applications.findOne({ name });

        if (!prevApp) {
            const newApp = new Applications({name})
            return await newApp.save();
        }

        throw new Error('Name already in use');
    }

    async getAppInfo(params) {
        const { id } = params;
        const appInfo = await Applications.findById(id);
        if (!appInfo) throw new Error('There is no information associated with this ID');

        return appInfo;
    }

    async updateApp(body, params) {
        const { name } = body;
        const { id } = params;
        const prevApp = await Applications.findById(id);
        if (!prevApp) throw new Error('There is no information associated with this ID');
        const prevName = await Applications.find({name});
        if(prevName) throw new Error('Name already in use');
        prevApp.name = name;

        return await prevApp.save();
    }

    async deleteApp(params) {
        const { id } = params;
        const appInfo = await Applications.findById(id);

        if (appInfo) {
            await Applications.findByIdAndDelete(id);
            return 'Item deleted';
        }

        throw new Error('Item not found');
    }
}

module.exports = new ApplicationsServices();