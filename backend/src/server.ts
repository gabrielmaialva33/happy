import 'reflect-metadata';
import 'dotenv/config';
import './database/connection';
import 'express-async-errors';

import app from './app';

app.listen(process.env.HTTP_PORT || 3333, () => {
  console.log(` 🚀  Servidor iniciado. `);
});
