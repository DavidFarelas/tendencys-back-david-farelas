'use strict'

const Authorizations = require('../models/authorizations.model');
const Applications = require('../models/applications.model');
const { v4: uuidV4 } = require('uuid');

class AuthorizationsServices {
    async getAuthorization() {
        const apps = await Applications.find();
        if (apps.length === 0) {
            const newApp = new Applications({
                name: 'First Application',
            });
            const savedApp = await newApp.save();
            const newAuth = new Authorizations({
                application_id: savedApp._id,
                token: uuidV4(),
            });
            return await newAuth.save();
        }

        const maxRand = apps.length;

        const selectedApp = Math.floor(Math.random() * maxRand);

        const appId = apps[selectedApp]._id.toString();

        const prevAuth = await Authorizations.findOne({ application_id: appId });

        if (!prevAuth) {
            const newAuth = new Authorizations({
                application_id: apps[selectedApp]._id,
                token: uuidV4(),
            });

            const savedAuth = await newAuth.save();
            return savedAuth;
        }

        return prevAuth;

    }

    async getAll() {
        return await Authorizations.find();
    }

    async createAuth(body) {
        const { application_id } = body;
        const prevAuth = await Authorizations.findOne({ application_id });

        if (!prevAuth) {
            const newAuth = new Authorizations({
                application_id,
                token: uuidV4(),
            });
            return await newAuth.save();
        }

        throw new Error('ID already in use');
    }

    async getAuthInfo(params) {
        const { id } = params;
        const authInfo = await Authorizations.findById(id);
        if (!authInfo) throw new Error('There is no information associated with this ID');

        return authInfo;
    }

    async updateAuth(body, params) {
        const { application_id } = body;
        const { id } = params;
        const prevAuth = await Authorizations.findById(id);

        if (!prevAuth) throw new Error('There is no information associated with this ID');
        const prevApp = await Authorizations.find({application_id});
        
        if(prevApp) throw new Error('ID already in use');

        prevAuth.application_id = application_id;

        return await prevAuth.save();
    }

    async deleteAuth(params) {
        const { id } = params;
        const authInfo = await Authorizations.findById(id);

        if (authInfo) {
            await Authorizations.findByIdAndDelete(id);
            return 'Item deleted';
        }

        throw new Error('Item not found');        
    }
}

module.exports = new AuthorizationsServices();