import { getProducts } from '../repositories/productRepository.js';

async function receiveProducts(req, res) {
  const products = await getProducts.getBalance();

  if (products) return res.status(200).send(products);
  return res.sendStatus(204);
}

export { receiveProducts };
