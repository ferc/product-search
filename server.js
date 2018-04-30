const express = require('express');
const next = require('next');
const withSass = require('@zeit/next-sass');

const port = parseInt(process.env.PORT, 10) || 3000;
const conf = withSass();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ conf, dev });
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
      app.render(req, res, '/posts', { id: req.params.id })
    );

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    })
  });
