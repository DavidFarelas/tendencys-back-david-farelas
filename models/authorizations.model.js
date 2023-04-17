const { Schema, model } = require('mongoose');

const authorizationsSchema = new Schema({
    application_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    token: {
        type: String,
        required: true,
    }
}, {
    collection: 'authorizations',
    timestamps: {
        createdAt: true,
        updatedAt: true,
    }
});

module.exports = model('authorizations', authorizationsSchema);