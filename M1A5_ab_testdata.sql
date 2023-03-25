CREATE TABLE IF NOT EXISTS ab_testdata (
                                           id int8 PRIMARY KEY,
                                           ab_testname VARCHAR(80) UNIQUE NOT NULL
);

INSERT INTO ab_testdata (id, ab_testname) VALUES (1, 'Fotokamera'), (2, 'Blitzlicht');
