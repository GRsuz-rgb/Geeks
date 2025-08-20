--EXERCICE 2
SELECT first_name, last_name, birth_date FROM students;

--1 Fetch the first four students. You have to order the four students alphabetically by last_nam
SELECT first_name, last_name, birth_date 
FROM students
ORDER BY last_name ASC
LIMIT 4;
--2 Fetch the details of the youngest student.
SELECT first_name, last_name, birth_date 
FROM students
WHERE birth_date = ( SELECT MAX (birth_date) FROM students );
--3 Fetch three students skipping the first two students.
SELECT first_name, last_name, birth_date 
FROM students
LIMIT 3 OFFSET 2;