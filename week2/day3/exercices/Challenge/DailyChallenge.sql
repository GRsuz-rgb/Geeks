--Part I
--1 Create 2 tables : Customer and Customer profile. They have a One to One relationship.
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100) NOT NULL
);

CREATE TABLE Customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER UNIQUE REFERENCES Customer(id)
);

--2 Insert customers
INSERT INTO Customer (first_name, last_name)
VALUES ('John', 'Doe'),
       ('Jerome', 'Lalu'),
       ('Lea', 'Rive');

--3 Insert those customer profiles, use subqueries
INSERT INTO Customer_profile (isLoggedIN, customer_id)
VALUES 
    (true, (SELECT id FROM customer WHERE first_name = 'John')),
    (false, (SELECT id FROM customer WHERE first_name = 'Jerome'));

--4 
 --The first_name of the LoggedIn customers
SELECT c.first_name
FROM Customer c
JOIN Customer_profile cu ON c.id = cu.id
WHERE cu.isLoggedIN = true;
 --All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT c.first_name, cu.isLoggedIN
FROM Customer c 
LEFT JOIN Customer_profile cu ON c.id = cu.id;
 --The number of customers that are not LoggedIn
SELECT COUNT(c.first_name) as not_loggedIn_customers
FROM Customer c
LEFT JOIN Customer_profile cu ON c.id = cu.id
WHERE cu.isLoggedIN IS NULL
      OR cu.isLoggedIN = false;

--Part II:
--1 Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(100) NOT NULL
);
--2 Insert books
INSERT INTO Book (title, author) VALUES
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To kill a mockingbird', 'Harper Lee');
--3 Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);
--4 Insert those students
INSERT INTO Student (name, age) VALUES
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
	('Bob', 14);
--5	Create a table named Library
CREATE TABLE Library (
    book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);
--6 Add 4 records in the junction table, use subqueries.
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) 
VALUES (
         (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
         (SELECT student_id FROM Student WHERE name = 'John'),
         '15/02/2022'
       ),
	(
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '03/03/2021' 
	),
	(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '23/05/2021'
	),
	(
	(SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '12/08/2021'
	)
	;
--7 
  -- Select all the columns from the junction table
SELECT * FROM Library;
  -- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title
FROM Library l 
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;
  -- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(s.age) as children_average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';
  -- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM Student 
WHERE student_id = 1;
    --result : due to ON Delete cascade , all records corresponding to the student (student_id =1) in Library table are deleted .







