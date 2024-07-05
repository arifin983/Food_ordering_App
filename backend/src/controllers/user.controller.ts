import {  Request, Response } from "express";
import User from "../model/user.model.ts";

const createUser = async (req: Request, res: Response) => {
	try {
		const { auth0Id } = req.body;
		const existingUser = await User.findOne({auth0Id});
		if (existingUser) return res.status(200).send();
		const newUser = new User(req.body);
		await newUser.save();
		res.status(201).json(newUser.toObject());
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: "Error creating user" });
	}
};
const getUser = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const updateUser =async (req:Request,res:Response) => {
	try {
		const {name,city,country,addressLine1} = req.body;
		const user = await User.findById(req.userId);
		if(!user)return res.status(404).json({message:"User not found"});
		user.name = name;
		user.city = city;
		user.country = country;
		user.addressLine1 = addressLine1;
		await user.save()
		res.send(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({message:"Error while updating user"})
	}
}
export default {
  createUser,
	getUser,
	updateUser
}