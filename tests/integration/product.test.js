import '../../src/setup.js';
import supertest from 'supertest';
import app from '../../src/app.js';
import { clearDatabase, closeConnection } from '../utils/database.js';
import { createProduct } from '../factories/productFactory.js';

beforeEach(async () => {
  await clearDatabase('product');
});

afterAll(async () => {
  await clearDatabase('product');
  await closeConnection();
});

describe('GET /balance', () => {
  test("should return 204 when there aren't available products", async () => {
    const result = await supertest(app).get('/products/dish');

    expect(result.status).toEqual(204);
  });

  test('should return 200 when there are available products', async () => {
    const product = await createProduct();
    const result = await supertest(app).get(`/products/${product.type}`);

    expect(result.status).toEqual(200);
  });
});
