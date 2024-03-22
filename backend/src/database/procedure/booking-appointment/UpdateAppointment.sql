CREATE OR ALTER PROCEDURE UpdateAppointment
    @appointment_id VARCHAR(255),
    @appointment_date VARCHAR(255),
    @appointment_time VARCHAR(255),
    @expert_profile_id VARCHAR(255)
AS
BEGIN
    UPDATE Appointment
    SET appointment_date = @appointment_date,
        appointment_time = @appointment_time,
        expert_profile_id = @expert_profile_id
    WHERE appointment_id = @appointment_id;
END;