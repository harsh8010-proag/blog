import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from "dotenv"
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadCloudinary = async (localFilePath) => {
    console.log(cloudinary.config());

    try {
        if (!localFilePath) { return null }
        //upload the file cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: 'auto' });
        //file uploded succsesfully

        return response;
    } catch (error) {

        console.log(error);
        fs.unlinkSync(localFilePath);//remove the locally saved temporary
        //  file as the upload operation 
    }
}

export default uploadCloudinary;