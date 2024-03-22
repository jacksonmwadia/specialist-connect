CREATE PROCEDURE DeleteExpertProfile
    @expert_profile_id VARCHAR(255)
AS
BEGIN
    DELETE FROM Expert_Profile WHERE expert_profile_id = @expert_profile_id;
END;
