const express = require('express');
const app = express();
const session = require('express-session');
const User = require('./Schemas/User');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://209x1a2814:Nick123@nutri.hlhp1c2.mongodb.net/ibmUsers", {
    useNewUrlParser : true,
}).then(() => {
    console.log("Database Connection established");
})
.catch( (err) => {
    console.log(err);
})

const db = mongoose.connection;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.post('/login', async(req,res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email: email});
    if(!user)
        return res.status(400).json({ message: 'User does not exist' });
    const isCorrect = await bcrypt.compare(password, user.password);
    if(isCorrect)
        return res.status(200).json({ name: user.name });
    else
        
    return res.status(201).json({ message: "Invalid credentials "});
})

app.post("/signup", async (req,res) => {
    const { email, name, age, height, weight,  password } = req.body;
    let user = await User.findOne({email});
    if(user) return res.status(400).json({message: "User already exists"});
    
    let hashedPassword = await bcrypt.hash(password, 12);
    user = new User({
        email,
        name,
        age,
        height,
        weight,
        password: hashedPassword
    });
    
    await user.save();
    res.status(200).json({message : "Sign Up successful"});
})

app.put("/update", async( req, res) => {

    try {
        const { id , email , name , age , height , weight} = req.body;
    const user = await User.findOne({email : id});
    user.email = email;
    user.age = age;
    user.height = height;
    user.weight = weight;
    user.name = name;
    await user.save();
        res.json({ message: 'User details updated successfully' });
      } catch (error) {
        console.error('Error updating user details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }

})


app.post("/profile", async(req,res) => {
    const {email} = req.body
    const user = await User.findOne({email : email});
    return res.json(user);
})


app.listen(5000,() => {
    console.log("App listening on port 5000");
})