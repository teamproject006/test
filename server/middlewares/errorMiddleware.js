const errorMiddleware = (err, req, res, next) => {

  
    // Handle specific errors and send appropriate response
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({ error: 'Unauthorized' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = errorMiddleware;
  