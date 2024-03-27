
import { getExpertCards } from './expertcard.controller';
import { Request, Response } from "express";
import { v4 } from 'uuid'

import { sqlConfig } from "../config/sql.config";
import mssql from "mssql"
import bcrypt from "bcrypt"
import { registerUserSchema } from "../validators/user.validators";
import { ExpertProfile } from "../interface/ExpertProfile";


const expertProfiles: ExpertProfile[] = []

export const createExpertProfile = async (req: Request, res: Response) => {
    try {
        const id = v4();
        const user_id = req.params.id;
        const { recent_work, about, delivery, card_id }: ExpertProfile = req.body;

        const pool = await mssql.connect(sqlConfig)
        const results = (await pool.request()
            .input("expert_profile_id", mssql.VarChar, id)
            .input("card_id", mssql.VarChar, card_id)
            .input("recent_work", mssql.VarChar, recent_work)
            .input("about", mssql.VarChar, about)
            .input("delivery", mssql.VarChar, delivery)
            .input("user_id", mssql.VarChar, user_id)
            .execute("CreateExpertProfile")).rowsAffected

        console.log(results);

        return res.json({
            message: "Expert Profile Created Successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const getExpertProfiles = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        const message = (await pool.request().execute("GetAllExpertProfiles")).recordset

        return res.status(200).json({
            message
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const getOneExpertProfile = async (req: Request, res: Response) => {
    try {
        const card_id= req.params.card_id

        const pool = await mssql.connect(sqlConfig);
        const expertProfile = (await pool.request().input("card_id", card_id).execute("GetOneExpertProfiles")).recordset
        return res.json({ expertProfile })
    } catch (error) {
        return res.json({ error });
    }
}

export const updateExpertProfile = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { recent_work, about, delivery }: ExpertProfile = req.body;

        const pool = await mssql.connect(sqlConfig);
        const results = (await pool.request()
            .input("expert_profile_id", mssql.VarChar, id)
            .input("recent_work", mssql.VarChar, recent_work)
            .input("about", mssql.VarChar, about)
            .input("delivery", mssql.VarChar, delivery)
            .execute("UpdateExpertProfile")).rowsAffected

        return res.status(200).json({
            message: "Expert Profile Updated Successfully"
        });
    } catch (error) {
        return res.json({ error });
    }
}

export const deleteExpertProfile = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig);
        const results = (await pool.request().input("expert_profile_id", mssql.VarChar, id).execute("DeleteExpertProfile")).rowsAffected

        console.log(results[0]);
        if (results[0] == 0) {
            return res.status(201).json({
                error: "Expert Profile not found"
            })
        } else {
            return res.status(200).json({
                message: "Expert Profile deleted successfully"
            })
        }
    } catch (error) {
        return res.json({ error });
    }
}


