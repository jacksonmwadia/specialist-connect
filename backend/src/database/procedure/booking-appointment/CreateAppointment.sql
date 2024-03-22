-- Procedure to create a new appointment
CREATE OR ALTER PROCEDURE CreateAppointment
    @appointment_id VARCHAR(255),
    @appointment_date VARCHAR(255),
    @appointment_time VARCHAR(255),
    @expert_profile_id VARCHAR(255)
AS
BEGIN
    INSERT INTO Appointment (appointment_id, appointment_date, appointment_time, expert_profile_id)
    VALUES (@appointment_id, @appointment_date, @appointment_time, @expert_profile_id);
END;