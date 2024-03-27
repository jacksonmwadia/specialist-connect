import { Router } from "express";
import { verifyToken } from "../Middleware/verifyToken";
import { createExpertProfile, deleteExpertProfile, getExpertProfiles, getOneExpertProfile, updateExpertProfile } from "../contollers/expertProfile.controller";


const expertProfileRoute = Router();

expertProfileRoute.post('/:id', createExpertProfile); 
expertProfileRoute.get('/', getExpertProfiles); 
expertProfileRoute.put('/update/:id', verifyToken, updateExpertProfile); 
expertProfileRoute.delete('/delete/:id', verifyToken, deleteExpertProfile); 
expertProfileRoute.get('/:id', getOneExpertProfile); 

export default expertProfileRoute;
