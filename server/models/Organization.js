const mongoose = require('mongoose');

const { Schema } = mongoose;

const organSchema = new Schema({
    image: {
        type: String
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    site: {
        type: String,
        required: true
    },
    Category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
});

const Organization = mongoose.model('Organization', organSchema);

module.exports = Organization;