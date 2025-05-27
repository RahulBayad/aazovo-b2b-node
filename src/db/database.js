import mysql from "mysql2";

const dbConnection = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOSTNAME || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "Rahul@123",
      database: process.env.DB_DATABASE || "aazovo",
    }).promise();

    return db
    
  } catch (error) {
    console.log("Error while connection to database,", error);
  }
};

export default dbConnection;
