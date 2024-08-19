import express from 'express'
import dotenv from 'dotenv'
import router from './routes/userRoutes.js'
import {errorHandler, notfound} from './middleware/errorHandler.js';

const app = express();
dotenv.config();
const port = process.env.port || 8000;

app.get('/', (req, res)=>{
   res.send('Server is ready')
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/',router);

app.use(notfound)
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`)
})


