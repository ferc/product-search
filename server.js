const axios = require('axios');
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

    server.get('/api/items', async (req, res) => {
      const query = req.query.q || '';

      let response;
      try {
        response = await axios.get('https://api.mercadolibre.com/sites/MLA/search', {
          params: {
            q: query,
            limit: 4
          }
        });
      }
      catch(e) {
        return res.send(e.message, 500);
      }

      const { data: { filters, results }} = response;

      const items = results.map(result => {
        const [priceAmount, priceDecimals] = result.price.toString().split('.').map(n => parseInt(n, 10));

        return {
          condition: result.condition,
          id: result.id,
          free_shipping: result.shipping.free_shipping,
          picture: result.thumbnail,
          price: {
            amount: priceAmount,
            currency: result.currency_id,
            decimals: priceDecimals
          },
          title: result.title
        };
      });

      let categories = [];
      const categoryFilter = filters.find(filter => filter.id === 'category');

      if (categoryFilter && categoryFilter.values[0]) {
        categories = categoryFilter.values[0].path_from_root.map(path => path.name);
      }

      res.json({
        author: {
          name: 'Fernando',
          lastname: 'Carril'
        },
        categories,
        items
      });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    })
  });
