CREATE PROCEDURE UpdateExpertCard 
    @card_id VARCHAR(255),
    @name VARCHAR(255),
    @banner VARCHAR(255),
    @profile_image VARCHAR(255),
    @description VARCHAR(255),
    @salary VARCHAR(255)
AS
BEGIN
    UPDATE ExpertCards 
    SET name = @name, banner = @banner, profile_image = @profile_image, description = @description, salary = @salary
    WHERE card_id = @card_id
END
