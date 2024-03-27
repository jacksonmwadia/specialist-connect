CREATE OR ALTER PROCEDURE GetOneExperCard
    @card_id VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT EC.*,
           EP.recent_work,
           EP.about,
           EP.delivery,
           U.name,
           U.image,
           U.phone_no,
           U.email
    FROM ExpertCards EC
    INNER JOIN Expert_Profile EP ON EC.user_id = EP.user_id
    INNER JOIN Users U ON EP.user_id = U.user_id
    WHERE EC.card_id = @card_id;
END;
