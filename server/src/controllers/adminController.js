import bcrypt from "bcrypt";

import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { adminModel, bankModel } from "../models/Schema.js";


export async function adminRegister(req, res) {
  try {
        const hashedPass = await bcrypt.hash(req.body.password, 12);

    const existingAdmin = await adminModel.findOne({
      rmail: req.body.email,
      password: req.body.password,
    });

    if (existingAdmin) {
      return res.status(400).json({ message: "admin already exists" });
    } else {
      const admin = new adminModel({...req.body,school: req.body.adminID,password: hashedPass,});
      const result = await admin.save();
      result.password = undefined;
      return res.status(201).json(result);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}

export async function adminLogin(request, response) {
  try {
    //If email is matched then plane password will be compared with bcrypted password
    const admin = await adminModel.findOne({ email: request.body.email });
    if (admin) {
      if (bcrypt.compareSync(request.body.password, admin.password)) {
        const token = jwt.sign({ id: admin._id }, "tanishka123");
        response.status(StatusCodes.OK).json({ token: token, id: admin._id  });
      } else {
        response
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Invalid password" });
      }
    } else {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid email" });
    }
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
}

export async function saveBank(req, res){
  try {
      const bank = new bankModel(req.body);
      const saveBank = await bank.save();
      res.status( StatusCodes.CREATED).json(saveBank);
  } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
}

