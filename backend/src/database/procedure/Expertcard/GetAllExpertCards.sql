CREATE OR ALTER PROCEDURE GetAllExpertCards
AS
BEGIN
    SELECT e.card_id, u.user_id, name, email, role, image, e.banner, e.description, e.salary
    FROM Users u
        INNER JOIN ExpertCards e
        ON u.user_id =  e.user_id
END
