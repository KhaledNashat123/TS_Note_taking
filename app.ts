import express from "express"
import {Request , Response , NextFunction }  from "express"
// import http from "http"
import bodyParser from "body-parser" 
import path from "path"
import router from "./routes/index"

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'statics')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);


// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     console.error(err.stack);
//     res.status(500).send("Something wrong ");
// });

app.listen(3000,()=> console.log("server is run")
);

export default app ;
