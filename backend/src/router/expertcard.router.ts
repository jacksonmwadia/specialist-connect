import { Router } from "express";
import { verifyToken } from "../Middleware/verifyToken";
import { createExpertCard, deleteExpertCard, getExpertCard, getExpertCards, getOneExpertCard, updateExpertCard } from "../contollers/expertcard.controller";



const expertCardRoute = Router();

expertCardRoute.post('/:id', createExpertCard); 
expertCardRoute.get('/', getExpertCards); 
expertCardRoute.put('/update/:id', verifyToken, updateExpertCard); 
expertCardRoute.delete('/delete/:id', verifyToken, deleteExpertCard); 
expertCardRoute.get('/one/:id', verifyToken, getOneExpertCard); 


expertCardRoute.get('/card/:card_id', getExpertCard); 



export default expertCardRoute;
