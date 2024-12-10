import express , {Request , Response , NextFunction }  from "express"
import Note from "../models/schema";
import connect_to_database from "../config/database"

connect_to_database();

const router = express.Router();

router.get("/",async ( req ,res,next)=>{
    try {
        
        res.render("html",{
            pagetitle: 'The_Form',
        })
    }
    catch (error) {
        console.error("There is an error ", error);
        res.status(500).send("Error happen when going to home page");
    }
})

router.post('/', async (req : Request , res: Response, next : NextFunction) => {
    try {
        const note : string | undefined = req.body.note

        if(!note){
            res.redirect("/");
            return;
        }

        const newnote = new Note ({
            note : note
        })

        await newnote.save();

        const All_Notes = await Note.find()
        res.render("html2" ,{
            Notes : All_Notes,
            pagetitle: "Notes"
        }
)}
    catch (err) {
        console.error("error note ", err);
        res.status(500).send("Error saving note");
    }
})

export default router
