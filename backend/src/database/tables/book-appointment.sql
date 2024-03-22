CREATE TABLE Appointment (
    appointment_id VARCHAR(255) PRIMARY KEY,
    appointment_date VARCHAR(255),
    appointment_time VARCHAR(255),
    expert_profile_id VARCHAR(255) FOREIGN KEY REFERENCES Expert_Profile(expert_profile_id),
    -- FOREIGN KEY (expert_profile_id) REFERENCES Expert_Profile(expert_profile_id)
);


SELECT * FROM Appointment
DROP TABLE Appointment

-- user_id VARCHAR(255) FOREIGN KEY REFERENCES Users(user_id),