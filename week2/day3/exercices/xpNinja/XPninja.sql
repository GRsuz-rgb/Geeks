--Exercise 1 : DVD Rentals

--1.
SELECT DISTINCT f.film_id, f.title, f.rating
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE f.rating IN ('G', 'PG')
  AND (r.return_date IS NOT NULL OR r.rental_id IS NULL);

--2.
CREATE TABLE children_waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    child_name VARCHAR(50) NOT NULL,
    film_id INT NOT NULL REFERENCES film(film_id),
    request_date TIMESTAMP DEFAULT NOW()
);

--3.
SELECT f.film_id, f.title, COUNT(w.waiting_id) AS number_waiting
FROM film f
LEFT JOIN children_waiting_list w ON f.film_id = w.film_id
WHERE f.rating IN ('G', 'PG')
GROUP BY f.film_id, f.title
ORDER BY number_waiting DESC;

--test
INSERT INTO children_waiting_list (child_name, film_id)
VALUES
('Alice', 5),
('Bob', 5),
('Charlie', 10);

 













