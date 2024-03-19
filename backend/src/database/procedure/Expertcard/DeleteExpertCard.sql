CREATE PROCEDURE DeleteExpertCard 
    @card_id VARCHAR(255)
AS
BEGIN
    DELETE FROM ExpertCards WHERE card_id = @card_id
END
