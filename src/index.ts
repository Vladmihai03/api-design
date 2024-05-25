import app from './server';  // Ensure you include the '.js' extension
import * as dotenv from 'dotenv'
dotenv.config()

app.listen(3002, () => {
  console.log('hello on http://localhost:3002');
});
