import { Router } from "express";
import { verifyToken } from "../Middleware/verifyToken";
import { createExpertCard, deleteExpertCard, getExpertCards, getOneExpertCard, updateExpertCard } from "../contollers/expertcard.controller";


const expertCardRoute = Router();

expertCardRoute.post('/', createExpertCard); 
expertCardRoute.get('/', getExpertCards); 
expertCardRoute.put('/update/:id', verifyToken, updateExpertCard); 
expertCardRoute.delete('/delete/:id', verifyToken, deleteExpertCard); 
expertCardRoute.get('/:id', verifyToken, getOneExpertCard); 

export default expertCardRoute;
