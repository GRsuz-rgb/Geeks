--Exercise 1: DVD Rental
--1 Get a list of all the languages, from the language table.
SELECT * FROM language;
--2 Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT f.title, f.description, l.name FROM film f
JOIN language l ON f.language_id = l.language_id;
--3 Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name
SELECT f.title, f.description, l.name FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;
--4 Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
     id SERIAL PRIMARY KEY, 
     name VARCHAR(100)
);
 
INSERT INTO new_film (name)
VALUES ('The Million-dollar Pentagram'),
       ('Black Iron Mystery Train'),
	   ('The Scarlet Bullet');

--5 
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY ,
    film_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    title VARCHAR(300) NOT NULL,
    score INTEGER CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

--6 Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES
        ((SELECT id FROM new_film WHERE name = 'The Million-dollar Pentagram'), (SELECT language_id FROM language WHERE name = 'English'), 'Great Action  Crime  Mystery !', 10, 'Enjoyed the innovative concepts and action'),  
   ((SELECT id FROM new_film WHERE name = 'Black Iron Mystery Train'), (SELECT language_id FROM language WHERE name = 'English'), 'Great Action and Mystery!', 9, 'Enjoyed the mystry and action')
;		
--7 Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film
WHERE name = 'Black Iron Mystery Train';
  --The reviews link to 'Black Iron Mystery Train' are deleted automatically because of DELETE CASCADE

