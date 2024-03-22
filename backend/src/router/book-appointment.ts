import { Router } from "express";

import { verifyToken } from "../Middleware/verifyToken";
import { createAppointment, deleteAppointment, getAppointments, updateAppointment } from "../contollers/booking-appointment.controller";

const appointmentRoute = Router();
appointmentRoute.post('/', createAppointment);
appointmentRoute.get('/', verifyToken, getAppointments);
appointmentRoute.put('/update/:appointment_id', verifyToken, updateAppointment);
appointmentRoute.delete('/delete/:appointment_id', verifyToken, deleteAppointment);
appointmentRoute.get('/:appointment_id', verifyToken, getAppointments);

export default appointmentRoute;
