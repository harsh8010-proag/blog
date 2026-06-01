import userModel from "../models/User.js";
import jwt from 'jsonwebtoken'


export const authUser = async (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);

        req.user = user
        next();
    } catch (err) {
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
}