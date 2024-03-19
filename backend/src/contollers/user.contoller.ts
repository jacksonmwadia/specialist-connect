import { Request, Response } from "express";
import { v4 } from 'uuid'
import { User } from "../interface/user";
import { sqlConfig } from "../config/sql.config";
import mssql from "mssql"
import bcrypt from "bcrypt"
import { registerUserSchema } from "../validators/user.validators";

const users: User[] = []

export const createUser = async (req: Request, res: Response) => {
    try {
        const id = v4()
        const { name, email, phone_no, password,image, role,  }: User = req.body;

        const hashed_pwd = await bcrypt.hash(password, 4)

        // let {error} = registerUserSchema.validate(req.body)

        // if(error){
        //     return res.status(404).json({
        //         error: error.details[0].message
        //     })
        // }

        /* const newUser: User = {
            user_id: id,
            name,
            email,
            phone_no,
            role,
            password: hashed_pwd
        }; */

        const pool = await mssql.connect(sqlConfig)
        let results = (await pool.request()

        
            .input("user_id", mssql.VarChar, id)
            
            .input("name", mssql.VarChar, name)
            .input("phone_no", mssql.VarChar, phone_no)
            .input("email", mssql.VarChar, email)
            .input("role", mssql.VarChar, role)
            .input("image", mssql.VarChar, image)

            .input("password", mssql.VarChar, hashed_pwd)
            .execute("CreateUser")).rowsAffected

        console.log(results);

        return res.json({
            message: "Account Created Successfully",
            // user: newUser
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        /* return res.json({
            users
        }); */
        const pool = await mssql.connect(sqlConfig);
        let allUsers = (await pool.request().execute("GetAllUsers")).recordset

        return res.status(200).json({
            users: allUsers
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const getOneUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        // /* const singleUser = users.filter(user=>user.user_id==id) */
        const pool = await mssql.connect(sqlConfig);
        let user = (await pool.request().input("user_id", id).execute("GetOneUser")).recordset
        return res.json({ user })
    } catch (error) {
        return res.json({ error });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { name, email, phone_no, role, image }: User = req.body;

        const pool = await mssql.connect(sqlConfig);
        let results = (await pool.request()
            .input("user_id", mssql.VarChar, id)
            .input("name", mssql.VarChar, name)
            .input("email", mssql.VarChar, email)
            .input("image", mssql.VarChar, image)
            .input("phone_no", mssql.VarChar, phone_no)
            .input("role", mssql.VarChar, role)
            .execute("UpdateUser")).rowsAffected

        return res.status(200).json({
            message: "User Updated Successfully"
        });

        /* const updatedUser: User = {
            user_id: id,
            name,
            email,
            phone_no,
            role
        };

        const user_index = users.findIndex(user => user.user_id == id)

        if (user_index < 0) {
            return res.json({ message: "User not found" })
        } else {
            users[user_index] = updatedUser
            return res.json({ message: "User updated", updatedUser })

        } */
    } catch (error) {
        return res.json({ error });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig);
        let results = (await pool.request().input("user_id", mssql.VarChar, id).execute("DeleteUser")).rowsAffected

        console.log(results[0]);
        if (results[0] == 0) {
            return res.status(201).json({
                error: "User not found"
            })
        } else {
            return res.status(200).json({
                message: "Account deleted successfully"
            })
        }
    }
    /*  let user_index = users.findIndex(user => user.user_id==id)

     if(user_index<0)
     {
         return res.json({message: "User not found"})
     }else {
         users.splice(user_index,1)
         return res.json({message: "User deleted successfully"})

     } */

    catch (error) {
        return res.json({ error });
    }
}
