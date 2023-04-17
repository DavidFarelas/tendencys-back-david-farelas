const { Schema, model } = require('mongoose');

const logsSchema = new Schema({
    application_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    type: {
        type: String,
        enum: ['error', 'info', 'warning'],
        required: true,
    },
    priority: {
        type: String,
        enum: ['lowest', 'low', 'medium', 'high', 'highest'],
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    request: {
        type: Schema.Types.Mixed,
        required: true,
    },
    response: {
        type: Schema.Types.Mixed,
        required: true,
    }
}, {
    collection: 'logs',
    timestamps: {
        createdAt: true,
        updatedAt: true,
    }
});

module.exports = model('logs', logsSchema);