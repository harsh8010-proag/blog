import contactModel from "../models/Contact.js";


export const createContact = async (req, res) => {

    const { name, email, mobileno, message } = req.body;

    if (!name || !email || !mobileno || !message) {
        return res.status(400).json({
            message: 'all feilds are required'
        })
    }
    try {
        const isExist = await contactModel.findOne({ email });
        if (isExist) {
            return res.status(400).json({ message: 'contact email already exist' });
        };

        const contact = await contactModel.create({
            name, email, mobileno, message
        })

        res.status(201).json({ contact })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }

}