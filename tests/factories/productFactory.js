import faker from 'faker/locale/pt_BR';
import { insertProduct } from '../../src/repositories/productRepository';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function createProduct() {
  const types = ['dish', 'beverage', 'desert'];
  const body = {
    name: faker.commerce.productName(),
    description: faker.commerce.productAdjective(),
    value: faker.commerce.price(1, 100, 2),
    image: faker.image.food(),
    type: types[getRandomInt(0, 2)],
  };

  await insertProduct({
    name: body.name,
    description: body.description,
    value: body.value,
    image: body.image,
    type: body.type,
  });

  return body;
}

export { createProduct };
