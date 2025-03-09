import { Router } from 'express';
import { apiKeyAuth } from '../middleware/auth.middleware';

const router = Router();

// Apply API key authentication to all routes
router.use(apiKeyAuth);

// Health check endpoint (no authentication required)
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Example protected endpoint
router.get('/data', (req, res) => {
  res.json({
    message: 'Protected data from the API',
    timestamp: new Date().toISOString()
  });
});

// Example POST endpoint
router.post('/data', (req, res) => {
  const data = req.body;
  
  // Process the data (in a real app, you might save it to a database)
  res.status(201).json({
    message: 'Data received successfully',
    data,
    timestamp: new Date().toISOString()
  });
});

export default router;