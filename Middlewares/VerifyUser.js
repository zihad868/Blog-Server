const jwt = require('jsonwebtoken');

const ensureAuthentication = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: 'Unauthorized, JWT Token Required'
        });
    }

    const token = authHeader.split(' ')[1];  // Extract the token

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Attach decoded information to the request object
        next();
    } catch (error) {
        return res.status(403).json({
            message: 'Unauthorized, JWT Token Wrong or Expired'
        });
    }
};


module.exports = ensureAuthentication;