import express, {NextFunction, Request, Response, json} from 'express';
import userRoute from './router/user.router';
import cors from 'cors'
import auth_router from './router/auth.routh';
import expertCardRoute from './router/expertcard.router';
import expertProfileRoute from './router/expertProfile.router';
import appointmentRoute from './router/book-appointment';


const app = express();

app.use(json())
app.use(cors())
app.use("/users", userRoute)
app.use('/auth', auth_router)
app.use("/expertcards", expertCardRoute) 
app.use("/expertProfileRoute", expertProfileRoute)
app.use("/appointments", appointmentRoute)


app.use((error:Error, req:Request, res:Response, next:NextFunction)=>{
res.json({
    message:error.message
})
})

let port:number = 4100;
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
    
})
