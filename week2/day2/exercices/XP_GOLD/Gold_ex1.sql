--Exercise 1: DVD Rental
--1 Find out how many films there are for each rating.
SELECT rating, COUNT(rating) as rating_films
FROM film
GROUP BY rating;
--2 Get a list of all the movies that have a rating of G or PG-13
SELECT title, rating
FROM film
WHERE rating IN ('G', 'PG-13') 
ORDER BY title ASC;
--2-1 Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13') 
      AND length < 120 
	  AND rental_rate < 3.00
ORDER BY title ASC;
--3 Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
UPDATE customer 
SET first_name = 'Roba',
    last_name = 'Salhi'
WHERE customer_id = 599
RETURNING customer_id,
          first_name,
          last_name;
--4 Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
UPDATE address 
SET address = 'ٌ107 Rue Morgue',
    postal_code = '10109',
	phone = '111-0000'
WHERE address_id = (SELECT address_id FROM customer WHERE customer_id = 599)
RETURNING address_id,
		  address,
		  postal_code,
		  phone;






