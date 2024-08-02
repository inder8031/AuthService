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

const validateIsAdmin = (req, res, next) => {
    if(req.params.id.length == 0 || isNaN(req.params.id)) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "Invalid user id",
            error: "req has invalid user id"
        });
    }

    next();
}

module.exports = {
    validateUserAuth,
    validateIsAdmin
}