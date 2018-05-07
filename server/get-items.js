const axios = require('axios');

module.exports = async (req, res) => {
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
      name: process.env.AUTHOR_NAME,
      lastname: process.env.AUTHOR_LAST_NAME,
    },
    categories,
    items,
  });
};
