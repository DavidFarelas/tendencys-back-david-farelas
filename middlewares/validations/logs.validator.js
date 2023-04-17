const Joi = require('joi');

class logsValidator {
    createLogsValidator = (req, res, next) => {
        const { 
            application_id,
            type,
            priority,
            path,
            message,
            request,
            response,
         } = req.body;
        const createLogsValidatorSchema = Joi.object({
            application_id: Joi.string().length(24).required(),
            type: Joi.string().valid(...['error', 'info', 'warning']).required(),
            priority: Joi.string().valid(...['lowest', 'low', 'medium', 'high', 'highest']).required(),
            path: Joi.string().required(),
            message: Joi.string().required(),
            request: Joi.any().required(),
            response: Joi.any().required(),
        });
    
        const { error } = createLogsValidatorSchema
            .validate(
                {
                    application_id, 
                    type, 
                    priority,
                    path,
                    message,
                    request,
                    response,
                }
            );
        if( error ) return res.status(400).json({message: error.details[0].message});
    
        next();
    }

    updateLogsValidator = (req, res, next) => {
        const { id } = req.params;
        const { 
            application_id,
            type,
            priority,
            path,
            message,
            request,
            response,
         } = req.body;
        const updateLogsValidatorSchema = Joi.object({
            id: Joi.string().length(24).required(),
            application_id: Joi.string().length(24).required(),
            type: Joi.string().valid(...['error', 'info', 'warning']).required(),
            priority: Joi.string().valid(...['lowest', 'low', 'medium', 'high', 'highest']).required(),
            path: Joi.string().required(),
            message: Joi.string().required(),
            request: Joi.any().required(),
            response: Joi.any().required(),
        });
    
        const { error } = updateLogsValidatorSchema
            .validate(
                {
                    id,
                    application_id, 
                    type, 
                    priority,
                    path,
                    message,
                    request,
                    response,
                }
            );
        if( error ) return res.status(400).json({message: error.details[0].message});
    
        next();
    }
}

module.exports = new logsValidator()