// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

import mongoose, { connect } from "mongoose";
import { DB_Name } from "./constant.js";
import express from "express";

dotenv.config({
  path: "./.env"
})

connectDB();

// const app = express()
// ;(async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_Name}`)
//         app.on("error", () => {
//             console.log("ERRPR:", error);
//             throw error

//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);

//         })
//     } catch (error) {
//         console.log("ERROR:",error);
//         throw error
//     }
// })()
