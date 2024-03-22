CREATE TABLE ExpertCards (
    card_id VARCHAR(255) PRIMARY KEY,
    banner VARCHAR(255) NOT NULL,
    profile_image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    salary VARCHAR(255) NOT NULL,
    user_id VARCHAR(255)
);

select * from ExpertCards


--  drop table ExpertCards

ALTER TABLE ExpertCards
DROP CONSTRAINT user_id

select * from ExpertCards where user_id = '83414a60-e1e3-4bbc-82df-1342bb90ba45'