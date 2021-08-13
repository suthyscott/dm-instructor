create table album(
title
VARCHAR (160),
artist_id
INTEGER,
album_id
INTEGER);

create table artist(
name
VARCHAR (120),
artist_id
INTEGER);

create table customer(
state
VARCHAR (40),
country
VARCHAR (40),
postal_code
VARCHAR (10),
phone
VARCHAR (24),
fax
VARCHAR (24),
email
VARCHAR (60),
support_rep_id
INTEGER,
first_name
VARCHAR (40),
customer_id
INTEGER,
last_name
VARCHAR (40),
company
VARCHAR (80),
address
VARCHAR (70),
city
VARCHAR (40));

create table employee (
email
VARCHAR (60),
employee_id
INTEGER,
last_name
VARCHAR (20),
first_name
VARCHAR (20),
title
VARCHAR (30),
reports_to
INTEGER,
birth_date
TIMESTAMP,
hire_date
TIMESTAMP,
address
VARCHAR (70),
city
VARCHAR (40),
state
VARCHAR (40),
country
VARCHAR (40),
postal_code
VARCHAR (10),
phone
VARCHAR (24),
fax
VARCHAR (24));

create table genre(
name
VARCHAR (120),
genre_id
INTEGER);

create table invoice(
invoice_id
INTEGER,
customer_id
INTEGER,
invoice_date
TIMESTAMP,
billing_address
VARCHAR (70),
billing_city
VARCHAR (40),
billing_state
VARCHAR (40),
billing_postal_code
VARCHAR (10),
billing_country
VARCHAR (40),
total
NUMERIC);

create table invoice_line(
track_id
INTEGER,
quantity
INTEGER,
invoice_line_id
INTEGER,
invoice_id
INTEGER,
unit_price
NUMERIC);

create table media_type (
media_type_id
INTEGER,
name
VARCHAR (120));

create table playlist(
playlist_id
INTEGER,
name
VARCHAR (120));

create table playlist_track(
track_id
INTEGER,
playlist_track_id
INTEGER,
playlist_id
INTEGER);

create table track(
media_type_id
INTEGER,
genre_id
INTEGER,
composer
VARCHAR (220),
milliseconds
INTEGER,
bytes
INTEGER,
unit_price
NUMERIC,
track_id
INTEGER,
name
VARCHAR (200),
album_id INTEGER);