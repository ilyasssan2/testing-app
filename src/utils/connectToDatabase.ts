import { createConnection } from "typeorm";
import connectionOptions from "../config/database.config";

const connectToDatabase = async ()=>{
  try {
       await createConnection(connectionOptions);
       console.log(`connected to db`);
  } catch  {
  }
}

export default connectToDatabase