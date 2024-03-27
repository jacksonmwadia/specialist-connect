CREATE TABLE ExpertCards (
    card_id VARCHAR(255) PRIMARY KEYVARCHAR(255),
    banner VARCHAR(255) NOT NULLVARCHAR(255),
    profile_image VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    salary VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users (user_id)

);

ALTER TABLE ExpertCards
ADD COLUMN recent_work VARCHAR(255),
ADD COLUMN about VARCHAR(255),
ADD COLUMN delivery VARCHAR(255);


ALTER TABLE ExpertCards
ADD recent_work  VARCHAR(255),
    about  VARCHAR(255),
    delivery  VARCHAR(255)






select * from ExpertCards


--  drop table ExpertCards

ALTER TABLE ExpertCards
ADD CONSTRAINT user_id

select * from ExpertCards where user_id = '83414a60-e1e3-4bbc-82df-1342bb90ba45'


ALTER TABLE ExpertCards
ADD CONSTRAINT FK_UserID FOREIGN KEY (user_id) REFERENCES Users (user_id);
