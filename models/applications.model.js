const { Schema, model } = require('mongoose');

const applicationsSchema = new Schema({
	name: {
		type: String,
		required: true
	}
}, {
	collection: 'applications',
	timestamps: {
		createdAt: true,
		updatedAt: true,
	}
});

module.exports = model("applications", applicationsSchema);