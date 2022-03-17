import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import secret from "../config/jwtsecret";
import User from "../models/User";

export default class UserController {
    static store = async (req: Request, res: Response) => {
        const { email, name, password } = req.body;
        
        try {

            const userExists = await User.findOne({ email });

            if (userExists) {
                return res.status(400).json({ error: "User already exists" });
            }

            const passwordHash = bcrypt.hashSync(password, 10);

            await User.create({ name, email, password: passwordHash });

            return res.status(200).json({ message: "User registered successfully" });

        } catch (err) {
            return res.status(400).json({ error: "User registration failed" });
        }
    }

    static login = async (req: Request, res: Response) => {

        const { email, password } = req.body;
        try {

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }

            const passwordCompare = bcrypt.compareSync(password, user.password);

            if (passwordCompare) {
                const token = await jwt.sign({email: user.email, id: user._id }, secret, {
                    expiresIn: "1h"
                });;

                return res.status(200).json({token});
            } else {
                return res.status(400).json({ error: "Password is not matched" });
            }
        } catch (error) {
            return res.status(401).json({ error: "User authentication failed" });
        }
    }
}