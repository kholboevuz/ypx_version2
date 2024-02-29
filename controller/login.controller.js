const User = require('../models/users.models');

const UserLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ EmailAddress: email });

        if (!user) {

            return res.render('login', {
                validation: true,
                login: true
            })

        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.render('login', {
                validation: false,
                login: true
            })
        }

        return res.redirect('/dashboard/main')
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = UserLoginController;
