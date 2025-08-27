-- Exercise 2 : DVD Rental
--1 Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'Frensh')
WHERE title IN ('The Scarlet Bullet');
--2 Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
  --fkey : address_id references the address table
 -- les valeurs insérées dans les cles etrangeres doivent correspondre à des valeurs existantes dans les tables référencées, donc une cohérence des donnees est garantie
--3 We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;
  --we need checking due to foreign key dependencies, address table references customer by address_id
--4 Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(rental_id) as rentals_count
FROM rental 
WHERE return_date IS NULL; 
--5 Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

--6 
--6-1-The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.title, f.description, f.replacement_cost
FROM film f
JOIN film_actor fi ON f.film_id = fi.film_id
JOIN actor ac ON fi.actor_id = ac.actor_id
WHERE ac.first_name = 'Penelope' AND ac.last_name = 'Monroe'
     AND f.description ILIKE '%sumo wrestler%';
--6-2-The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT f.title, c.name, f.length, f.rating, f.replacement_cost
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name IN ('Documentary', 'documentary')
      AND f.length < 60
	  AND f.rating = 'R';
--6-3-The 3rd film : 
SELECT f.title, p.amount, r.return_date, f.replacement_cost
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
     AND p.amount > 4.00
	 AND r.return_date BETWEEN '28/07/2005' AND '01/08/2005';
--6-4-The 4th film :
SELECT f.title, f.description, f.replacement_cost
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
      AND (f.title LIKE '%boat%') OR (f.description LIKE '%boat%')
ORDER BY f.replacement_cost DESC;



