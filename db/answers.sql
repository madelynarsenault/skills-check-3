ALTER TABLE house
ADD column price_id INT REFERENCES price(price_id)

SELECT * FROM house 