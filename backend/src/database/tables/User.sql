CREATE TABLE Users (
    user_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_no VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(50) NOT NULL,
    image VARCHAR(255), 
    password VARCHAR(255) NOT NULL
);


select * from Users
--  drop table Users

update Users set role = 'expert' where name = 'expert'