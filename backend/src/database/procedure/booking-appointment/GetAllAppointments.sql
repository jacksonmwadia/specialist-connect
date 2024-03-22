CREATE OR ALTER PROCEDURE GetAllAppointments
AS
BEGIN
    -- SELECT * FROM Appointment;
    SELECT a.appointment_id, u.name, u.phone_no, a.appointment_date, a.appointment_time
FROM Appointment a
INNER JOIN Expert_Profile ep ON a.expert_profile_id = ep.expert_profile_id
INNER JOIN Users u ON ep.user_id = u.user_id;

END;