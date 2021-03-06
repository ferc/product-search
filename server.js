require('dotenv').config();

const express = require('express');
const next = require('next');
const withSass = require('@zeit/next-sass');

const port = parseInt(process.env.PORT, 10) || 3000;
const conf = withSass();
const app = next({ conf, dev: true });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) =>
      app.render(req, res, '/', req.query)
    );

    server.get('/items', (req, res) =>
      app.render(req, res, '/items', req.query)
    );

    server.get('/items/:id', (req, res) =>
      app.render(req, res, '/product', { id: req.params.id })
    );

    server.get('/api/items', require('./server/get-items'));

    server.get('/api/items/:id', require('./server/get-item'));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    })
  });
