CREATE TABLE orders(
  order_id SERIAL PRIMARY KEY,
  person_id INT,
  product_name VARCHAR(50),
  product_price DECIMAL,
  quantity INT
 )

INSERT INTO orders
(quantity, product_price, person_id, product_name)
VALUES
(3, 5.99, 1, 'Remembrall'),
(12, 2000.87, 2, 'Firebolt'),
(4, 19, 3, 'Dress Robes'),
(20, 13, 4, 'Caulrons'),
(1, 7.9, 5, 'Hogwarts: A history')


SELECT * FROM orders

SELECT sum(quantity)
FROM orders

SELECT sum(product_price)
FROM orders

SELECT sum(product_price * quantity)
FROM orders 
WHERE order_id = 1