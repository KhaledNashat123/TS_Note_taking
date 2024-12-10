const mongoose = require("mongoose")

const MongoURL : string = "mongodb://localhost:27017/My_Notes"

const connect_to_database = async ():Promise<void> => {
    try{
        await mongoose.connect(MongoURL)
        console.log("connect databse successfully")
    }catch(err){
        console.error("Error connecting to MongoDB:", err)
    }
    
} 

export default connect_to_database;