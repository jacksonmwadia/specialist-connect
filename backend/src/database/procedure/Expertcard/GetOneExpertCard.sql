CREATE OR ALTER PROCEDURE GetOneExpertCard 
    @card_id VARCHAR(255)
AS
BEGIN
    -- SELECT * FROM ExpertCards WHERE card_id = @card_id
    SELECT u.user_id, name, email, role, image, e.banner, e.description, e.salary FROM Users u
INNER JOIN ExpertCards e
ON u.user_id =  e.user_id
 WHERE u.user_id = @card_id
END

SELECT * FROM ExpertCards