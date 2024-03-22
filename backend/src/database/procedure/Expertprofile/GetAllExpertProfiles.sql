CREATE OR ALTER PROCEDURE GetAllExpertProfiles
AS
BEGIN
    -- SELECT * FROM Expert_Profile;SELECT EP.recent_work, EP.about, EP.delivery,
SELECT EP.expert_profile_id, U.name, EP.recent_work, EP.about, EP.delivery,
       EC.profile_image, EC.salary, EC.description
       
FROM Expert_Profile EP
INNER JOIN ExpertCards EC ON EP.user_id = EC.user_id
INNER JOIN Users U ON EC.user_id = U.user_id;

END;

