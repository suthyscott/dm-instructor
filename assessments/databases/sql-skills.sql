INSERT INTO artist(name)
VALUES ('Kanye'),('Drake'),('The Script');

SELECT * FROM artist
ORDER BY name 
LIMIT 5;

SELECT first_name, last_name FROM employee
WHERE city = 'Calgary';

SELECT count(*) FROM employee
WHERE city = 'Lethbridge';

SELECT count(*) FROM invoice
WHERE billing_country = 'USA';

SELECT max(total) FROM invoice;

SELECT min(total) FROM invoice;

SELECT * FROM invoice
WHERE total > 5;

SELECT count(*) FROM invoice
WHERE total < 5;

SELECT sum(total) FROM invoice;

SELECT * FROM invoice i
JOIN invoice_line il ON i.invoice_id = il.invoice_id
WHERE il.unit_price > .99;

SELECT i.invoice_date, c.first_name, c.last_name, i.total FROM invoice i
JOIN customer c ON i.customer_id = c.customer_id;

SELECT c.first_name AS customer, c.last_name AS customer, e.first_name employee, e.last_name employee
FROM customer c
JOIN employee e ON c.support_rep_id = e.employee_id;

SELECT a.title, ar.name FROM artist ar
JOIN album a ON a.artist_id = ar.artist_id;


-- Extra credit

SELECT * FROM artist
ORDER BY name DESC
LIMIT 10;

SELECT * FROM artist
WHERE name LIKE 'Black%';

SELECT * FROM artist
WHERE name LIKE '%Black%';

SELECT min(birth_date) FROM employee;

SELECT max(birth_date) FROM employee;

SELECT count(*) FROM invoice
WHERE billing_state IN ('CA', 'TX', 'AZ');

SELECT avg(total) FROM invoice;

SELECT track_id FROM playlist_track pt
JOIN playlist p ON pt.playlist_id = p.playlist_id
WHERE p.name = 'Music';

SELECT t.name FROM track t
JOIN playlist_track pt ON t.track_id = pt.track_id
WHERE pt.playlist_id = 5;

SELECT t.name, a.title FROM track t
JOIN album a ON a.album_id = t.album_id
JOIN genre g ON g.genre_id = t.genre_id
WHERE g.name = 'Alternative & Punk';