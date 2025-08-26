--Exercise 3 : Items and customers
--Part I
--1 Create a table named purchases.
CREATE TABLE purchases(
 id SERIAL PRIMARY KEY,
 customer_id INTEGER REFERENCES customers(customer_id),
 item_id INTEGER REFERENCES items(item_id),
 quantity_purchased INTEGER NOT NULL
)

--2 Insert purchases for the customers
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT item_id FROM items WHERE item = 'Fan'),
    1
),
(
    (SELECT customer_id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT item_id FROM items WHERE item = 'Large Desk'),
    10
),
(
    (SELECT customer_id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT item_id FROM items WHERE item = 'Small Desk'),
    2
);
--Part II
--1 All purchases. Is this information useful to us?
SELECT * FROM purchases;
--2 All purchases, joining with the customers table
SELECT * FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id;
--3 Purchases of the customer with the ID equal to 5.
SELECT * FROM purchases
WHERE customer_id = 5;
--4 Purchases for a large desk AND a small desk
SELECT * FROM purchases p
JOIN items i ON p.item_id = i.item_id
WHERE i.item IN ('Large Desk', 'Small Desk');

-- Use SQL to show all the customers who have made a purchase.
SELECT c.first_name, c.last_name, i.item FROM customers c
JOIN purchases p ON p.customer_id = c.customer_id
JOIN items i on i.item_id = p.item_id;
--Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (1, null , 5);
  --It works , because we didn't specified if it's nullable or not when we have created the table.
