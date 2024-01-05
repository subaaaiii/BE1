const logRequest = (req, res, next)=>{
    console.log("Terjadi Request ke path : ", req.path);
    next();
}

module.exports = logRequest;