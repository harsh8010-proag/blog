import userModel from "../models/User.js";


export const registerUser = async (req, res) => {

    const { name, email, password } = req.body;


    if (!name.trim() || !password.trim() || !email.trim()) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    if (password.length < 6) {
        res.status(400).json({
            message: 'password must atlest 6 carecter long'
        })
    }
    try {
        const isAlreadyExist = await userModel.findOne({ email });

        if (isAlreadyExist) {
            return res.status(400).json({
                message: 'user already exist'
            })
        }
        const hashPassword = await userModel.hashPassword(password);

        const user = await userModel.create({
            name, email, password: hashPassword
        })
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
};


export const login = async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'all feilds are requerd'
        })
    }

    try {
        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                message: 'Invlaid email or password'
            })
        }
        user.password = undefined;

        const token = user.generateAuthToken();

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
        });

        res.status(200).json({ user });


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const getUserProfile = async (req, res) => {

    res.status(200).json(req.user);

}

export const logout = async (req, res) => {
    res.clearCookie('token', { httpOnly: true });
    res.status(200).json({ message: 'user logout succsefully' })
}