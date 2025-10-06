
--1️.TABLE USERS 
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100)
);

--2.PRODUCT_ORDERS TABLE
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT NOW(),
    user_id INT,
    CONSTRAINT fk_user FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE SET NULL
);

--.ITEMS TABLE 
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES product_orders(order_id)
        ON DELETE CASCADE,
    item_name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0)
);

--3.FUNCTION : TOTAL ORDER
CREATE OR REPLACE FUNCTION get_order_total(p_order_id INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC(10,2);
BEGIN
    SELECT COALESCE(SUM(price), 0)
    INTO total
    FROM items
    WHERE order_id = p_order_id;

    RETURN total;
END;
$$ LANGUAGE plpgsql;


--4.BONUS : TOTAL OF ORDER FOR THE USER
CREATE OR REPLACE FUNCTION get_user_order_total(p_user_id INT, p_order_id INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC(10,2);
BEGIN
    SELECT COALESCE(SUM(i.price), 0)
    INTO total
    FROM items i
    JOIN product_orders o ON i.order_id = o.order_id
    WHERE o.order_id = p_order_id
      AND o.user_id = p_user_id;

    RETURN total;
END;
$$ LANGUAGE plpgsql;

--TEST INSERTION 
INSERT INTO users (username, email)
VALUES ('Alice', 'alice@example.com'),
       ('Bob', 'bob@example.com');

INSERT INTO product_orders (user_id)
VALUES (1), (1), (2);  -- Alice: 2 orders, Bob: 1 order

INSERT INTO items (order_id, item_name, price)
VALUES 
(1, 'Book', 10.50),
(1, 'Pen', 2.30),
(2, 'Headphones', 49.99),
(3, 'Keyboard', 25.00),
(3, 'Mouse', 15.00);

--7️.TESTS DES FONCTIONS
-- Total de la commande 1
SELECT get_order_total(1);          -- => 12.80
-- Total de la commande 3 (Bob)
SELECT get_order_total(3);          -- => 40.00
-- Total de la commande 1 pour Alice
SELECT get_user_order_total(1, 1);  -- => 12.80
-- Total de la commande 1 pour Bob (devrait être 0)
SELECT get_user_order_total(2, 1);  -- => 0
