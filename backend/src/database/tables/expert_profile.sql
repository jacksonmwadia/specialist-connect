CREATE TABLE Expert_Profile (
    expert_profile_id VARCHAR(255)PRIMARY KEY,
    card_id VARCHAR(255) FOREIGN KEY REFERENCES ExpertCards(card_id),
    user_id VARCHAR(255) FOREIGN KEY REFERENCES Users(user_id),
    recent_work VARCHAR(MAX),
    about VARCHAR(MAX),
    delivery VARCHAR(MAX)
);

select * from Expert_Profile

drop table Expert_Profile

DELETE FROM  Expert_Profile;


UPDATE Expert_Profile
ADD card_id VARCHAR(255)
ADD CONSTRAINT fk_card_id FOREIGN KEY (card_id) REFERENCES ExpertCards(card_id);



ALTER TABLE Expert_Profile
ADD card_id VARCHAR(255);


ALTER TABLE Expert_Profile
ADD CONSTRAINT fk_card_id FOREIGN KEY (card_id) REFERENCES ExpertCards(card_id);
