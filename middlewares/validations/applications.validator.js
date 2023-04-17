const Joi = require('joi');

class appsValidator {
    createAppValidator = (req, res, next) => {
        const { name } = req.body;
        const createAppValidatorSchema = Joi.object({
            name: Joi.string().required(),
        });
    
        const { error } = createAppValidatorSchema.validate({name});
        if( error ) return res.status(400).json({message: error.details[0].message});
    
        next();
    }
    
    updateAppValidator = (req, res, next) => {
        const { id } = req.params;
        const { name } = req.body;
        const updateAppValidatorSchema = Joi.object({
            name: Joi.string().required(),
            id: Joi.string().length(24).required(),
        });
    
        const { error } = updateAppValidatorSchema.validate({ name, id});
    
        if( error ) return res.status(400).json({message: error.details[0].message});
    
        next();
    
    }
}

module.exports = new appsValidator();