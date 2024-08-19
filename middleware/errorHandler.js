const errorHandler = (err, req, res, next) =>{
    res.status(500).json({message : err.message})
    next(err)
}

const notfound = (req, res, next) => {
    const error = new Error(`Error in accessing the link ${req.originalurl}`)
    res.status(404).json({message : 'NotFound: Error 404 not found'})
    next(error)
}
export {errorHandler, notfound}