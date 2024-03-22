CREATE PROCEDURE GetOneExpertProfile
    @expert_profile_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Expert_Profile WHERE expert_profile_id = @expert_profile_id;
END;
