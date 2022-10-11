import "reflect-metadata";
import "dotenv/config";
import express from "express";

import connectToDatabase from "./utils/connectToDatabase";

(()=>{
    const app = express();
    connectToDatabase();
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => console.log(`server up and running on ${PORT}`));
})()