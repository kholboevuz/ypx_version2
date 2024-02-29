const mongoose = require('mongoose') 
const uri = "mongodb+srv://varioustechnology2024:2xdbaVpHh7y3H8Xg@cluster0.twnfvhd.mongodb.net/scienses?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async ()=>{ 
    const  connectingusers = await mongoose.connect(uri) 
    console.log(`MongoDB connected to: ${connectingusers.connection.host}`); 
} 
 
 
module.exports = {  
    connectDB 
}