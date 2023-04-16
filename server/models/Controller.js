const { User } = require('./dataSchema');
const bcrypt = require('bcryptjs');

exports.usersLogin = async(req, res) => {
    const { email, password } = req.body;
    try {
        const userExist = await User.findOne({ email });

        if (userExist) {
            const result = await bcrypt.compare(password, userExist.password);
            // console.log(userExist);
            result
                ?
                res.send(userExist).status(201) :
                res.send({ error: 'Invalid detailes' });
        } else {
            res.send({ error: 'Invalid detailes' });
        }
    } catch (error) {
        // console.log(error.message);
    }
};
exports.signup = async(req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        {
            // console.log('userExist');
            res.send({ message: 'User Already Exist' });
            return;
        }
    }
    try {
        // console.log(name, email, password);
        const register = new User({
            name,
            email,
            password,
        });
        const CreateUser = await register.save();
        // console.log(CreateUser);
        res.send(CreateUser);
    } catch (error) {
        res.send({ error: 'server Error' });
        // console.log(error);
    }
};