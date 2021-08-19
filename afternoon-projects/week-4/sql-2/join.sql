select * 
from invoice i
join invoice_line il on i.invoice_id = il.invoice_id
where il.unit_price > .99;

select i.invoice_date, c.first_name, c.last_name, i.total
from invoice i
join invoice_line il on i.invoice_id = il.invoice_id
join customer c on i.customer_id = c.customer_id;

select c.first_name AS "Customer First Name", c.last_name AS customerLastName, e.first_name, e.last_name
from customer c
join employee e on c.support_rep_id = e.employee_id;

select a.title, ar.name
from album a
join artist ar
on a.artist_id = ar.artist_id;

select pt.track_id
from playlist_track pt
join playlist p on pt.playlist_id = p.playlist_id
where p.name = 'Music';

select t.name
from track t
join playlist_track pt on t.track_id = pt.track_id;

select t.name, p.name as playlist
from track t
join playlist_track pt on t.track_id = pt.track_id
join playlist p on pt.playlist_id = p.playlist_id;

select t.name, a.title as album
from track t
join album a on t.album_id = a.album_id
join genre g on t.genre_id = g.genre_id
where g.name = 'Alternative & Punk';