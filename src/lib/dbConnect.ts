import mongoose from "mongoose";

// Type definition
type ConnectionObject = {
    isConnected?: number;
}

// Initialize the connection object
const connection: ConnectionObject = {};

// Function to connect to the database
async function dbConnect(): Promise<void> {
    // Check if the connection is already established
    if (connection.isConnected) {
        console.log('Already Connected');
        return
    } 

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '')
        connection.isConnected = db.connections[0].readyState
        console.log('DB Connected Sucessfully');
    } catch(error) {
        console.log('Database Connections failed',error);
        process.exit(1);
    }
}

export default dbConnect;
