--Exercise 1 : Bonus Public Database
--1 Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
SELECT first_name, last_name FROM customers
ORDER BY first_name ASC
LIMIT 2 OFFSET (SELECT COUNT(*) - 2 FROM customers WHERE (SELECT COUNT(*) FROM customers) >= 2);
--2 Use SQL to delete all purchases made by Scott.
DELETE FROM purchases
WHERE customer_id = (SELECT customer_id FROM customers WHERE first_name = 'Scott' OR last_name = 'Scott');
--3 Does Scott still exist in the customers table, even though he has been deleted? Try and find him.
SELECT first_name, last_name FROM customers
WHERE first_name = 'Scott' OR last_name = 'Scott';
  --it still exists because we deleted only his purchases.
--4  
SELECT p.id, p.customer_id, p.item_id, p.quantity_purchased, c.first_name, c.last_name
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.customer_id;
--5 
SELECT p.id, p.customer_id, p.item_id, p.quantity_purchased, c.first_name, c.last_name
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.customer_id;
