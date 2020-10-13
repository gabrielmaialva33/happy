import 'dotenv/config';

import './database/connection';
import app from './app';

app.listen(process.env.HTTP_PORT || 3333, () => {
  console.log(` 🚀  Servidor iniciado. `);
});
