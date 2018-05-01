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
      app.render(req, res, '/product', { id: req.params.id })
    );

    server.get('/api/items', async (req, res) => {
      const query = req.query.q || '';

      let currenciesResponse;
      let searchResponse;

      try {
        [currenciesResponse, searchResponse] = await Promise.all([
          axios.get('https://api.mercadolibre.com/currencies'),
          axios.get('https://api.mercadolibre.com/sites/MLA/search', {
            params: {
              q: query,
              limit: 4,
            }
          }),
        ]);
      }
      catch(e) {
        return res.status(500).send(e.message);
      }

      const { data: { filters, results }} = searchResponse;

      const items = results.map(result => {
        const [priceAmount, priceDecimals] = result.price.toString().split('.').map(n => parseInt(n, 10));
        const currency = currenciesResponse.data.find(currency => currency.id === result.currency_id);

        return {
          condition: result.condition,
          id: result.id,
          free_shipping: result.shipping.free_shipping,
          picture: result.thumbnail,
          price: {
            amount: priceAmount,
            currency: currency.symbol,
            decimals: priceDecimals,
          },
          title: result.title,
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
          lastname: 'Carril',
        },
        categories,
        items,
      });
    });

    server.get('/api/items/:id', async (req, res) => {
      let currenciesResponse;
      let categoriesResponse;
      let descriptionResponse;
      let itemResponse;

      try {
        [currenciesResponse, descriptionResponse, itemResponse] = await Promise.all([
          axios.get('https://api.mercadolibre.com/currencies'),
          axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`),
          axios.get(`https://api.mercadolibre.com/items/${req.params.id}`),
        ]);

        categoriesResponse = await axios.get(`https://api.mercadolibre.com/categories/${itemResponse.data.category_id}`);
      }
      catch(e) {
        return res.status(500).send(e.message);
      }

      const { data } = itemResponse;
      const [priceAmount, priceDecimals] = data.price.toString().split('.').map(n => parseInt(n, 10));
      const categories = categoriesResponse.data.path_from_root.map(path => path.name);
      const currency = currenciesResponse.data.find(currency => currency.id === data.currency_id);

      res.json({
        author: {
          name: 'Fernando',
          lastname: 'Carril'
        },
        categories,
        item: {
          condition: data.condition,
          description: descriptionResponse.data.plain_text,
          free_shipping: data.shipping.free_shipping,
          id: data.id,
          picture: data.thumbnail,
          price: {
           amount: priceAmount,
           currency: currency.symbol,
           decimals: priceDecimals,
          },
          sold_quantity: data.sold_quantity,
          title: data.title,
        },
      });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    })
  });
