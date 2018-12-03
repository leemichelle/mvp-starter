DROP DATABASE IF EXISTS typeracer;

CREATE DATABASE typeracer;

\c typeracer;

CREATE TABLE tests (
  id INT SERIAL,
  skill TEXT,
  words TEXT,
  PRIMARY KEY (ID)
);

-- copy easy level words
\COPY tests (skill, words) FROM '/Users/leemur/Documents/hrsF104/hrsf104-mvp-starter/database-postgres/word.tsv' WITH (FORMAT CSV, DELIMITER E'\t');

-- -- copy medium level words
-- \COPY tests (skill, words) FROM '/Users/leemur/Documents/hrsF104/hrsf104-mvp-starter/typeracer.tsv' WITH (FORMAT CSV, DELIMITER E'\t');

-- -- copy hard level words 
-- \COPY tests (skill, words) FROM '/Users/leemur/Documents/hrsF104/hrsf104-mvp-starter/typeracer.tsv' WITH (FORMAT CSV, DELIMITER E'\t');

