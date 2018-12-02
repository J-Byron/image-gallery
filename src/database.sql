-- Database name: gallery

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	imgPath VARCHAR(200),
	description varchar(140),
	likes INTEGER
);