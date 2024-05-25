import app from './server';  // Ensure you include the '.js' extension
import * as dotenv from 'dotenv'
dotenv.config()
import config from './config';

app.listen(config.port, () => {
  console.log(`hello on http://localhost:${config.port}`);
});
