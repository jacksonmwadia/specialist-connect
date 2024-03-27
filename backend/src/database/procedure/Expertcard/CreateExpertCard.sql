
CREATE OR ALTER PROCEDURE CreateExpertCard 
    @card_id VARCHAR(255),
    @banner VARCHAR(255),
    @profile_image VARCHAR(255),
    @description VARCHAR(255),
    @salary VARCHAR(255),
    @user_id VARCHAR(255),
    @recent_work VARCHAR(255),
    @about VARCHAR(255),
    @delivery VARCHAR(255)
AS
BEGIN
    INSERT INTO ExpertCards (card_id, banner, profile_image, description, salary, recent_work, about, delivery, user_id)
    VALUES (@card_id, @banner, @profile_image, @description, @salary, @recent_work, @about, @delivery, @user_id)
END



