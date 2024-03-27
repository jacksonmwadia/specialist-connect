CREATE OR ALTER  PROCEDURE CreateExpertProfile
    @expert_profile_id VARCHAR(255),
    @card_id VARCHAR(255),
    @recent_work VARCHAR(MAX),
    @about VARCHAR(MAX),
    @delivery VARCHAR(MAX),
    @user_id VARCHAR(255)
AS
BEGIN
    INSERT INTO Expert_Profile (expert_profile_id, recent_work, about, delivery, user_id)
    VALUES (@expert_profile_id, @recent_work, @about, @delivery, @user_id);
END;


DROP PROCEDURE CreateExpertProfile