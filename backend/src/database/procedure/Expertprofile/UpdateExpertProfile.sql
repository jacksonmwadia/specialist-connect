CREATE PROCEDURE UpdateExpertProfile
    @expert_profile_id VARCHAR(255),
    @card_id VARCHAR(255),
    @recent_work VARCHAR(MAX),
    @about VARCHAR(MAX),
    @delivery VARCHAR(MAX)
AS
BEGIN
    UPDATE Expert_Profile
    SET card_id = @card_id,
        recent_work = @recent_work,
        about = @about,
        delivery = @delivery
    WHERE expert_profile_id = @expert_profile_id;
END;
