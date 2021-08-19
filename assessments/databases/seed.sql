CREATE TABLE animals(
  animal_id SERIAL PRIMARY KEY,
  species_id INT NOT NULL REFERENCES animal_species(species_id),
  animal_name VARCHAR(20), 
  animal_age INT,
  animal_weight INT, 
  animal_color VARCHAR(20)
);

CREATE TABLE animal_species(
  species_id SERIAL PRIMARY KEY,
  species_name VARCHAR(20)
);

CREATE TABLE owners(
  owner_id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  phone VARCHAR(30)
);

CREATE TABLE adoptions(
  adoption_id SERIAL PRIMARY KEY,
  owner_id INT NOT NULL REFERENCES owners(owner_id),
  animal_id INT NOT NULL REFERENCES animals(animal_id)
);