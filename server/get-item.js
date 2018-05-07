const axios = require('axios');

module.exports = async (req, res) => {
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
      name: process.env.AUTHOR_NAME,
      lastname: process.env.AUTHOR_LAST_NAME,
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
};
