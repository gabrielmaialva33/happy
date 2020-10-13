import { createConnection } from 'typeorm';

createConnection()
  .then(() => {
    console.log(' 💾  Banco de dados conectado. ');
  })
  .catch(err => {
    console.log(
      '\x1b[33m',
      '❌  Erro ao conectar com o banco de dados.',
      '\x1b[31m',
      `\n ❌  ${err}`,
      '\x1b[0m',
    );
  });
