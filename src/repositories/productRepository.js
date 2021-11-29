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

async function insertProduct(product) {
  try {
    const result = await connection.query(
      'INSERT INTO product (name, description, value, image, type) VALUES ($1, $2, $3, $4, $5);',
      [
        product.name,
        product.description,
        product.value,
        product.image,
        product.type,
      ],
    );

    return result.rows[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getProducts, insertProduct };
