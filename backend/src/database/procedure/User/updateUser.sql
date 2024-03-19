CREATE OR ALTER PROCEDURE UpdateUser
    @user_id VARCHAR(255),
    @name VARCHAR(255),
    @phone_no VARCHAR(15),
    @email VARCHAR(255),
    @role VARCHAR(50),
    @image VARCHAR(255)

AS
BEGIN
    UPDATE Users
    SET name = @name,
        phone_no = @phone_no,
        email = @email,
        role = @role,
        image = @image
        
    WHERE user_id = @user_id;
END;