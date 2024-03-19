CREATE OR ALTER PROCEDURE GetOneUser
    @user_id VARCHAR(255) 
AS
BEGIN
    SELECT * FROM Users WHERE user_id = @user_id;
END;