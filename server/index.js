import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import * as url from 'url';

import { getCards, getCard, postCard } from './controller/card.controller.js';
import { getUser } from './controller/user.controller.js';

const PORT = process.env.PORT | 4000;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const fileStorage = multer.diskStorage({
  destination: __dirname + 'storage/',
  filename: (req, file, cb) => {
    req.body.file = file.originalname
    cb(null, file.originalname);
  }
});

const uploadImage = multer({
  storage: fileStorage,
  limits: {
    fileSize: 1000000
  },
})

mongoose.connect('mongodb://db/metaphorical-cards', (err, db) => {
  if(err) console.log('database is not connected');
  else console.log('database is connected');
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/admin', getUser);

app.get('/cards', getCards);
app.get('/cards/:deck', getCard);
app.post('/cards', uploadImage.array('file', 100), postCard);
app.get('/:filename', (req, res) => {
  const filePath = req.params.filename;
  res.sendFile(path.resolve(`${__dirname}storage/${filePath}`));
});

app.listen(PORT, () => {
  console.log(`App listen ${ PORT }`);
});
