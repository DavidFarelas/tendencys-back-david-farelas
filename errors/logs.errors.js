const logsErrorHandler = (error, res) => {
    
    switch (error.message) {
        case 'There is no information associated with this ID':
            res.status(400).json({message: error.message});
            break;    
        case 'Item not found':
            res.status(404).json({message: error.message});
            break;    
        default:
            res.status(409).json({ message: 'An unexpected error has happend' });
            break;
    }
}

module.exports = {
    logsErrorHandler,
}