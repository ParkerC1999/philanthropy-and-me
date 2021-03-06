const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
    organizations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Organization'
        }
    ]
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;