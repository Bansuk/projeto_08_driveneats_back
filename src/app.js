import express from 'express';
import cors from 'cors';

import { receiveProducts } from './controllers/productController.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/products/:type', receiveProducts);

export default app;
