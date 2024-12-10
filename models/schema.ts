import mongoose, {Schema , Document,Model} from "mongoose"

interface Note extends Document {
    note : string ;
}


const DBschema : Schema = new mongoose.Schema({   
    note :{
        type: String,
        required : true ,
    }
})

const Note: Model<Note> = mongoose.model<Note>("Note" , DBschema , "notes")


export default Note
