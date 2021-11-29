import * as productRepository from '../repositories/productRepository.js';

async function receiveProducts(req, res) {
  const { type } = req.params;
  const products = await productRepository.getProducts(type);

  if (products.length) return res.status(200).send(products);
  return res.sendStatus(204);
}

export { receiveProducts };
