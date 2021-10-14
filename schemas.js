const Joi = require('joi');

// This is going to validate our data before it even attempt to save it with Mongoose:
module.exports.campgroundSchema = Joi.object({
    // We are expecting this to be an object and also to be required:
    campground: Joi.object({
        title: Joi.string().required(),
        location: Joi.string().required(),
        image: Joi.string().required(),
        price: Joi.number().required().min(0),
        description: Joi.string().required()
    }).required()
});