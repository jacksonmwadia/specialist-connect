import { Request, Response } from "express";
import { v4 } from 'uuid';

import { sqlConfig } from "../config/sql.config";
import mssql from "mssql";
import { Appointment } from "../interface/booking-appointment.interface";
// import { createAppointmentSchema } from "../validators/appointment.validators";

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const id = v4();
        const { appointment_date, appointment_time, expert_profile_id }: Appointment = req.body;

        // Validate request body
        // const { error } = createAppointmentSchema.validate(req.body);
        // if (error) {
        //     return res.status(400).json({ error: error.details[0].message });
        // }

        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request()
            .input("appointment_id", mssql.VarChar, id)
            .input("appointment_date", mssql.VarChar, appointment_date)
            .input("appointment_time", mssql.VarChar, appointment_time)
            .input("expert_profile_id", mssql.VarChar, expert_profile_id)
            .execute("CreateAppointment");

        return res.status(201).json({
            message: "Appointment created successfully",
            appointment: {
                appointment_id: id,
                appointment_date,
                appointment_time,
                expert_profile_id
            }
        });
    } catch (error) {
        console.error("Error creating appointment:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request().execute("GetAllAppointments");
        const appointments = result.recordset;

        return res.status(200).json({ appointments });
    } catch (error) {
        console.error("Error retrieving appointments:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const updateAppointment = async (req: Request, res: Response) => {
    try {
        const { appointment_id } = req.params;
        const { appointment_date, appointment_time, expert_profile_id }: Appointment = req.body;

        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request()
            .input("appointment_id", mssql.VarChar, appointment_id)
            .input("appointment_date", mssql.VarChar, appointment_date)
            .input("appointment_time", mssql.VarChar, appointment_time)
            .input("expert_profile_id", mssql.VarChar, expert_profile_id)
            .execute("UpdateAppointment");

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ error: "Appointment not found" });
        }

        return res.status(200).json({ message: "Appointment updated successfully" });
    } catch (error) {
        console.error("Error updating appointment:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteAppointment = async (req: Request, res: Response) => {
    try {
        const { appointment_id } = req.params;

        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request()
            .input("appointment_id", mssql.VarChar, appointment_id)
            .execute("DeleteAppointment");

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ error: "Appointment not found" });
        }

        return res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error("Error deleting appointment:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
