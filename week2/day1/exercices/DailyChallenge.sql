SELECT * FROM actors;
--1 Count how many actors are in the table.
SELECT COUNT (*) AS actor_count
FROM actors;
--2 Try to add a new actor with some blank fields. What do you think the outcome will be ?
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Alexander','','', 0);
     --The outcome : Error because all columns are NOT NULL .


