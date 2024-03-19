CREATE TABLE ExpertCards (
    card_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    banner VARCHAR(255) NOT NULL,
    profile_image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    salary VARCHAR(255) NOT NULL,
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

select * from ExpertCards


--  drop table ExpertCards