const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "Invalid email or password",
            error: "Missing email or password in request"
        });
    }

    next();
}

module.exports = {
    validateUserAuth
}