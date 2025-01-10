const { response } = require("express");
const userModels = require("../models/userModels")
const bcrypt = require("bcrypt")

const handleSignup = async (req, res) => {
    console.log(req.body);

    try {
        const { name, email, password } = req.body
       
        if (name.trim().length === 0 && email.trim().length === 0 && password.trim().length === 0) {
            return res.status(401).json({ errmsg:"Please fill out all the fields" })
        }
        else if (name.trim().length === 0) {
            return res.status(401).json({ errmsg: "Please enter your name" })
        }
        else if (email.trim().length === 0) {
            return res.status(401).json({ errmsg: "Please enter your email" })
        }
        else if (password.trim().length === 0) {
            return res.status(401).json({ errmsg: "Please enter password" })
        }
        else if (password.trim().length < 8) {
            return res.status(401).json({ errmsg: "Password must be at least 8 characters" })
        }

        const user = await userModels.findOne({ email })
        if (user) {
            return res.status(401).json({ errmsg: "Email already exist" })
        }


        const salt = await bcrypt.genSalt(6)
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword);

        const newUser = new userModels({
            name: name,
            email: email,
            password: hashedPassword
        })
        await newUser.save()
        console.log("user afer saving", newUser);
        return res.status(201).json({ message: "Your registration has been successful" })


    } catch (error) {
        console.log(error);
        res.status(500).json({ errmsg: "Something went wrong at registration" })

    }

}


module.exports = {
    handleSignup
}