--Exercice1
CREATE TABLE students(
 student_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 birth_date DATE NOT NULL
)

INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Marc', 'Benichou', '02/11/1998'),
        ('Yoan', 'Cohen', '03/12/2010'),
		('Lea', 'Benichou', '27/07/1987'),
		('Amelia', 'Dux', '07/04/1996'),
		('David', 'Grez', '14/06/2003'),
		('Omer', 'Simpson', '03/10/1980')

INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Roba', 'Salhi', '18/01/2005');

--Fetch all of the data from the table.		
SELECT * FROM students;
--Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students;
--For the following questions, only fetch the first_names and last_names of the students
--1 Fetch the student which id is equal to 2.
SELECT first_name, last_name 
FROM students
WHERE student_id = 2;
--2 Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name 
FROM students
WHERE first_name = 'Marc' AND last_name = 'Benichou';

--3 Fetch the students whose last_names are Benichou OR first_names are Marc
SELECT first_name, last_name 
FROM students
WHERE first_name = 'Marc' OR last_name = 'Benichou';
--4 Fetch the students whose first_names contain the letter a
SELECT first_name, last_name 
FROM students
WHERE first_name LIKE '%a%';
--5 Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name 
FROM students
WHERE first_name LIKE 'a%';
--6 Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name 
FROM students
WHERE first_name LIKE '%a';
--7 Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name 
FROM students
WHERE first_name LIKE '%a_';
--8 Fetch the students whose id’s are equal to 1 AND 3 .
SELECT first_name, last_name 
FROM students
WHERE student_id = 1 AND student_id = 3;
--Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT first_name, last_name 
FROM students
WHERE birth_date >= '01/01/2000';





