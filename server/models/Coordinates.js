const { Schema } = require('mongoose');

const coordinatesSchema = new Schema(
    {
        longitude: {
            type: String,
            required: true
        },
        latitude: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = coordinatesSchema;