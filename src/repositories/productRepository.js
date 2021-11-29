import connection from '../database/database.js';

async function getProducts() {
  try {
    const result = await connection.query('SELECT * FROM product;');

    return result.rows;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getProducts };
