import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';


dotenv.config();   
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    credentials:true
}


// Database Connection
mongoose.set("strictQuery" , false);
const connect = async() =>
{
    try{
          await mongoose.connect(process.env.MONGO_URI ,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true

          } )

          console.log('MongoDB Connected Successfully');
    }
    catch(err)
    {
        console.log("MongoDB Databse Conection Failed" , err);

    }
};



//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/auth',authRoute);   //Authentication Controller routes
app.use('/tours',tourRoute);   //Tour Controller routes
app.use('/users',userRoute);   //Users Controller routes
app.use('/review',reviewRoute); //Review Controller routes
app.use('/booking',bookingRoute);  //Booking Controller routes


//Server Listen in this port
app.listen(port , ()=>
{
    connect();                                //Call database Connection
    console.log("Server listening on Port",port);
});
