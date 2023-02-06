import { Request, Response } from "express";
import { compare, hash } from "bcrypt";
import userModel from "../models/user.model";
import jwt from "jsonwebtoken";

export const loginHandler = async (req: Request, res: Response) => {
  // req.body
  const username = req.body.username;
  const password = req.body.password;

  // validation - express-validator
  if (!username || !password)
    return res.status(401).json({
      message: "Unauthorized",
    });

  // store in database
  const userData = await userModel.findOne({
    username,
  });

  if (!userData)
    return res.status(401).json({
      message: "Unauthorized",
    });

  const result = await compare(password, userData.password || "");

  if (!result)
    return res.status(401).json({
      message: "Unauthorized",
    });

  // generate token
  const token = jwt.sign(
    {
      username: userData.username,
      displayName: userData.displayName,
      avatarURL: userData.avatarURL,
    },
    process.env.SECRET || "secret",
    { expiresIn: "2d" }
  );

  return res.json({
    token,
  });
};

export const profileHandler = (req: Request, res: Response) => {
  // profile
};
