const { Schema } = require('mongoose');
const UserSchema = require('./User')
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `Donation` array in User.js
const itemSchema = new Schema({
    title: {
        type: String,
        allowNull: false,
        required: true,
        validate: {
            len: [3]
        }
    },
    description: {
        type: String,
        required: true,
        validate: {
            len: [10]
        }
    },
    image: {
        type: String,
        
    },
    status: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }});

module.exports = itemSchema;
