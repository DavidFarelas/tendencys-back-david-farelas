const Joi = require('joi');

class authValidator {
    createAuthValidator = (req, res, next) => {
        const { application_id } = req.body;
        const createAuthValidatorSchema = Joi.object({
            application_id: Joi.string().length(24).required(),
        });
    
        const { error } = createAuthValidatorSchema.validate({application_id});
        if( error ) return res.status(400).json({message: error.details[0].message});
    
        next();
    }
    
    updateAuthValidator = (req, res, next) => {
        const { id } = req.params;
        const { application_id } = req.body;
        const updateAuthValidatorSchema = Joi.object({
            application_id: Joi.string().length(24).required(),
            id: Joi.string().length(24).required(),
        });
    
        const { error } = updateAuthValidatorSchema.validate({ application_id, id});
    
        if( error ) return res.status(400).json({message: error.details[0].message});
    
        next();
    
    }
}

module.exports = new authValidator();