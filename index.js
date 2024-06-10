import express from 'express';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';

import { PORT, mongoDBURL } from './config.js';

const app = express();
//middleware for parsing req body
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Welcome To Mern Stack Tuto');
});

app.use('/books', booksRoute); // on peut enelver les books dans bookRoute /books delete

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('DB connected successfuly!');
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log('app is running ');
});
