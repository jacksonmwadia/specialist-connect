CREATE OR ALTER PROCEDURE CreateExpertCard 
    @card_id VARCHAR(255),
    @name VARCHAR(255),
    @banner VARCHAR(255),
    @profile_image VARCHAR(255),
    @description VARCHAR(255),
    @salary VARCHAR(255),
    @user_id VARCHAR(255)
AS
BEGIN
    INSERT INTO ExpertCards (card_id, name, banner, profile_image, description, salary, user_id)
    VALUES (@card_id, @name, @banner, @profile_image, @description, @salary, @user_id)
END