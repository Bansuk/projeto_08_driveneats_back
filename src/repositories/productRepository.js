import connection from '../database/database.js';

async function getProducts(type) {
  try {
    const result = await connection.query(
      'SELECT * FROM product WHERE type = $1;',
      [type],
    );

    return result.rows;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getProducts };
