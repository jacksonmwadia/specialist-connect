
CREATE OR ALTER PROCEDURE GetOneAppointment
    @appointment_id VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM Appointment
    WHERE appointment_id = @appointment_id;
END;

