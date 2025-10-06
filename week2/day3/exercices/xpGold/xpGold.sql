--Exercise 1 : DVD Rentals
--1.Get a list of all rentals which are out (have not been returned). 
SELECT * FROM rental
WHERE return_date IS NULL;

--2.Get a list of all customers who have not returned their rentals
SELECT c.customer_id, c.first_name, c.last_name, COUNT(r.rental_id) AS rentals_out
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY rentals_out DESC;

--3.Get a list of all the Action films with Joe Swank.
SELECT f.title FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Action'
  AND a.first_name = 'Joe'
  AND a.last_name = 'Swank';

--
CREATE VIEW active_rentals AS
SELECT r.*, c.first_name, c.last_name, f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL;



--Exercise 2 – Happy Halloween
--1. 
SELECT s.store_id, ci.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;
--2.
SELECT s.store_id,
       SUM(f.length) AS total_minutes,
       ROUND(SUM(f.length) / 60.0, 2) AS total_hours
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL OR r.return_date IS NULL AND r.rental_id IS NULL
GROUP BY s.store_id;
--3.
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city_id IN (
    SELECT ci.city_id
    FROM store s
    JOIN address a2 ON s.address_id = a2.address_id
    JOIN city ci ON a2.city_id = ci.city_id
);
--4.
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country_id IN (
    SELECT co.country_id
    FROM store s
    JOIN address a2 ON s.address_id = a2.address_id
    JOIN city ci2 ON a2.city_id = ci2.city_id
    JOIN country co ON ci2.country_id = co.country_id
);
--5.
SELECT f.title, f.length
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name != 'Horror'
  AND LOWER(f.title) NOT LIKE '%beast%'
  AND LOWER(f.title) NOT LIKE '%monster%'
  AND LOWER(f.title) NOT LIKE '%ghost%'
  AND LOWER(f.title) NOT LIKE '%dead%'
  AND LOWER(f.title) NOT LIKE '%zombie%'
  AND LOWER(f.title) NOT LIKE '%undead%';
--6.
--general list
SELECT 
    SUM(length) AS total_minutes,
    ROUND(SUM(length) / 60.0, 2) AS total_hours,
    ROUND(SUM(length) / 1440.0, 2) AS total_days
FROM film;

--safe list 
SELECT 
    SUM(f.length) AS total_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
    ROUND(SUM(f.length) / 60.0 / 24.0, 2) AS total_days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name != 'Horror'
  AND LOWER(f.title) NOT LIKE '%beast%'
  AND LOWER(f.title) NOT LIKE '%monster%'
  AND LOWER(f.title) NOT LIKE '%ghost%'
  AND LOWER(f.title) NOT LIKE '%dead%'
  AND LOWER(f.title) NOT LIKE '%zombie%'
  AND LOWER(f.title) NOT LIKE '%undead%';




















