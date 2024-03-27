CREATE OR ALTER PROCEDURE GetOneExperCard
    @card_id VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT *
    FROM ExpertCards
    WHERE card_id = @card_id;
END