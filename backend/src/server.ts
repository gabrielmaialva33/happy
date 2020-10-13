import 'dotenv/config';
import express from 'express';

const app = express();

app.listen(process.env.HTTP_PORT || 3333, () => {
  console.log(` 🚀  Servidor iniciado. `);
});
