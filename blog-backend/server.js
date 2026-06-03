import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import { connectToDB } from './config/db.js';
import userRoute from './routes/auth.routes.js'
import contactRoute from './routes/contact.routes.js'
import blogRouter from './routes/blog.routes.js'
dotenv.config();
const app = express();
console.log("CLOUD_NAME:", process.env.CLOUD_NAME);


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://tsblog.onrender.com"],

    credentials: true

}));
connectToDB();

app.get('/', (req, res) => {
    res.send('hallo world');
});

app.use(cookieParser());
app.use('/users', userRoute);
app.use('/blogs', blogRouter);
app.use('/contacts', contactRoute);

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});

