// dbMiddleware.js
const connectDB = require('../Config/db');

async function dbMiddleware(req, res, next) {
  try {
    const db = await connectDB(); // Get the database connection
    req.db = db; // Attach it to the request object so it's available in the route
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    res.status(500).json({ message: 'Failed to connect to DB', success: false });
  }
}

module.exports = dbMiddleware;
