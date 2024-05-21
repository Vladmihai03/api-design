import express from 'express';
import router from './router';
import morgan from 'morgan'
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';

const app = express();

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use((req,res,next) =>{
  req.secret = 'doggy'
  next();
})


app.get('/', (req, res) => {
  console.log('hello from express');
  res.status(200).json({ message: 'hello' , client: 'vlad'});
});

app.use('/api',protect, router);

app.post('/user', createNewUser)
app.post('/signin', signin);

export default app;
