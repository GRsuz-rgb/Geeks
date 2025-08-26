CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
);
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')
;
SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id integer 
);
INSERT INTO SecondTab VALUES
(5),
(NULL)
;
SELECT * FROM SecondTab;

--1 What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
   --output => column :count with the value 0
--2 What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
   --output => column :count with the value 2
--3 What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
   --output => column :count with the value 0
--4 What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
   --output => column :count with the value 2
   

