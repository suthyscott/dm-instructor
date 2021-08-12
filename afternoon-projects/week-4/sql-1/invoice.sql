SELECT count(*)
FROM invoice
WHERE billing_country = 'USA'

SELECT MAX(total)
FROM invoice

SELECT MIN(total)
FROM invoice

SELECT *
FROM invoice
WHERE total > 5

SELECT count(*)
FROM invoice
WHERE total < 5

SELECT count(*)
FROM invoice
WHERE billing_state 
IN ('CA', 'TX', 'AZ')

SELECT avg(total)
FROM invoice


SELECT sum(total)
FROM invoice

UPDATE invoice
SET total = 24
WHERE invoice_id = 1

-- Necessary for next query to work correctly
-- DELETE FROM invoice_line
-- WHERE invoice_id = 1

DELETE FROM invoice
WHERE invoice_id = 1