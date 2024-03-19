CREATE OR ALTER PROCEDURE GetOneExpertCard 
    @card_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM ExpertCards WHERE card_id = @card_id
END
