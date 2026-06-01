import mongoose from 'mongoose';

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connect to db');
    } catch (err) {
        console.error(`database face  error ${err} `)
    }

}