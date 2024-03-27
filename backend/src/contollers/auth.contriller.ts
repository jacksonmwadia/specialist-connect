 import { Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../config/sql.config";

import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken";
import dotenv from "dotenv"
import { ExtendedUserRequest } from "../Middleware/verifyToken";
import { loginUserSchema } from "../validators/auth.validators";





export const loginUser = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        let {error} = loginUserSchema.validate(req.body)

        if(error){
            return res.json({
                error: error.details[0].message
            })
        }
        
        const pool = await mssql.connect(sqlConfig);
        
        
        let result = await pool.request()
            .input("email", email)
            .input("password", password)
            .execute("loginUser");
        let user = result.recordset[0]; 

        console.log( user );

        
        if (!user) {
            // If no user is found
            return res.json({ error: "User not found" });
        }
        
        // If user is found
        const correct_pwd = await bcrypt.compare(password, user.password);
        if (!correct_pwd) {
            
            return res.json({ error: "Incorrect password or email" });
        }
        
        
        const loginCredentials = {
            id: user.user_id, 
            email: user.email,
            role: user.role 
        };
        const maxAge = 3 * 24 * 60 * 60;
        const token = Jwt.sign(loginCredentials, process.env.SECRET as string, {
            expiresIn: maxAge 
        });
        
        
        return res.status(200).json({
            message: "Logged in successfully",
            token
     
        });
        
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const checkUserDetails = async(req: ExtendedUserRequest, res: Response)=>{
    if(req.info){
        return res.json({
            info: req.info
        })
    }
}

export const resetPassword = async(req:Request, res: Response)=>{
    try {
        const {email,password} = req.body

        const pool = await mssql.connect(sqlConfig)

        let hashedPwd = await bcrypt.hash(password, 5)

        let result = (await pool.request()
        .input("email", email)
        .input("Password", hashedPwd)
        .execute("resetPassword")).rowsAffected

        console.log(result)
    

        if(result[0] < 1){
            return res.json({
                message: "User not found"
            })
        }else{
            return res.json({
                message: "Password updated successfully"
            })
        }
        
    } catch (error) {
        return res.sendStatus(501).json({
            error: error
        })
    }
}
