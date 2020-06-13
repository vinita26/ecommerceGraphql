const User = require('../models');
const registerNewUser = async (req, res) => {
    const {name, email, password, age} = req.body;
    try {
       // mongoose model
       const newUser = new User({
           name,
           email,
           password,
           age
       })
       const user = await newUser.save();
       res.status(201).send(user);
    } catch (e) {
      console.error('---Error registering user ----',e);
      res.status(500).send({message: 'Error registering new user'});
    }
}

module.exports = {registerNewUser};