CREATE TABLE person(
    person_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT, 
    height INT,
    city VARCHAR(50),
    favorite_color VARCHAR(20)
)

INSERT INTO person 
(name, age, height, city, favorite_color)
VALUES
('Scott', 23, 182, 'Lehi', 'Blue'),
('Doug', 24, 183, 'Orem', 'Gray'),
('Bob', 25, 184, 'Provo', 'Red'),
('Don', 25, 185, 'Layton', 'Yellow'),
('John', 25, 186, 'Saratoga Springs', 'Green')

SELECT * FROM person
ORDER BY height

SELECT * FROM person
ORDER BY height DESC

SELECT * FROM person
ORDER BY age DESC 

SELECT * FROM person
WHERE age > 20

SELECT * FROM person
WHERE age = 18

SELECT * FROM person
WHERE age < 20 OR age > 30

SELECT * FROM person
WHERE age != 27

SELECT * FROM person
WHERE favorite_color != 'Red'

SELECT * FROM person
WHERE favorite_color = 'Orange' OR favorite_color = 'Green'

SELECT * FROM person
WHERE favorite_color IN ('Orange', 'Green', 'Blue')

SELECT * FROM person
WHERE favorite_color IN ('Purple', 'Yellow')