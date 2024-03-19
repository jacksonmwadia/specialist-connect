CREATE OR ALTER PROCEDURE DeleteUser
    @user_id VARCHAR(255) 
AS
BEGIN
    DELETE FROM Users WHERE user_id = @user_id;
END;