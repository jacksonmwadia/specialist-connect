CREATE PROCEDURE DeleteAppointment
    @appointment_id VARCHAR(255)
AS
BEGIN
    DELETE FROM Appointment
    WHERE appointment_id = @appointment_id;
END;