CREATE OR ALTER PROCEDURE CreateUser(
    @user_id VARCHAR(255),
    @name VARCHAR(255),
    @phone_no VARCHAR(15),
    @email VARCHAR(255),
    @role VARCHAR(50),
    @image VARCHAR(255),
    @password VARCHAR(255))
AS
BEGIN
    INSERT INTO Users (user_id, name, phone_no, email, role,  image, password)
    VALUES (@user_id, @name, @phone_no, @email, @role,  @image, @password);
END;

SELECT * FROM Users;
use connect_specialist;