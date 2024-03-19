import { Request, Response } from "express";
import { v4 } from 'uuid'

import { sqlConfig } from "../config/sql.config";
import mssql from "mssql"
import bcrypt from "bcrypt"
import { registerUserSchema } from "../validators/user.validators";
import { ExpertCard } from "../interface/expertcard.interface";

const expertCards: ExpertCard[] = []

export const createExpertCard = async (req: Request, res: Response) => {
    try {
        const id = v4()
        const { name, banner, profile_image, description, salary, user_id }: ExpertCard = req.body;

        const pool = await mssql.connect(sqlConfig)
        const results = (await pool.request()
            .input("card_id", mssql.VarChar, id)
            .input("name", mssql.VarChar, name)
            .input("banner", mssql.VarChar, banner)
            .input("profile_image", mssql.VarChar, profile_image)
            .input("description", mssql.VarChar, description)
            .input("salary", mssql.VarChar, salary)
            .input("user_id", mssql.VarChar, user_id)
            .execute("CreateExpertCard")).rowsAffected

        console.log(results);

        return res.json({
            message: "Expert Card Created Successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const getExpertCards = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        const allExpertCards = (await pool.request().execute("GetAllExpertCards")).recordset

        return res.status(200).json({
            expertCards: allExpertCards
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const getOneExpertCard = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig);
        const expertCard = (await pool.request().input("card_id", id).execute("GetOneExpertCard")).recordset
        return res.json({ expertCard })
    } catch (error) {
        return res.json({ error });
    }
}

export const updateExpertCard = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { name, banner, profile_image, description, salary }: ExpertCard = req.body;

        const pool = await mssql.connect(sqlConfig);
        const results = (await pool.request()
            .input("card_id", mssql.VarChar, id)
            .input("name", mssql.VarChar, name)
            .input("banner", mssql.VarChar, banner)
            .input("profile_image", mssql.VarChar, profile_image)
            .input("description", mssql.VarChar, description)
            .input("salary", mssql.Decimal, salary)
            .execute("UpdateExpertCard")).rowsAffected

        return res.status(200).json({
            message: "Expert Card Updated Successfully"
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const deleteExpertCard = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig);
        const results = (await pool.request().input("card_id", mssql.VarChar, id).execute("DeleteExpertCard")).rowsAffected

        console.log(results[0]);
        if (results[0] == 0) {
            return res.status(201).json({
                error: "Expert Card not found"
            })
        } else {
            return res.status(200).json({
                message: "Expert Card deleted successfully"
            })
        }
    } catch (error) {
        return res.json({ error });
    }
}
