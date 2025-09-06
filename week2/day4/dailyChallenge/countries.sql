CREATE TABLE countries (
      id SERIAL PRIMARY KEY,
	  name VARCHAR(100),
	  capital VARCHAR(100),
	  flag VARCHAR(10),
	  subregion VARCHAR(100),
	  population BIGINT
);

--les donnees sont inserees a la table a travers de l'API {https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population}

SELECT * FROM countries;