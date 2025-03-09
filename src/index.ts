import app from './app';
import config from './config';

const PORT = config.port;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running in ${config.nodeEnv} mode on port ${PORT}`);
  console.log(`API is accessible at http://localhost:${PORT}/api`);
});