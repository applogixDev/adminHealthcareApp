import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";
import { validateEmail } from "../utils/Validate_Email";
import { validatePassword } from "../utils/Validate_Password";

export const register = async (req, res) => {
  //console.log(req.body);
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName) {
      return res.status(400).send("First Name is required");
    }
    if (!lastName) {
      return res.status(400).send("Last Name is required");
    }
    if (!email) {
      return res.status(400).send("Email is required");
    }
    if (!email || !validateEmail(email.trim())) {
      return res.status(400).json("Please enter a valid email");
    }
    if (!password || !validatePassword(password.trim())) {
      return resres
        .status(400)
        .send(
          "Password is required and should contain minimum 8 characters and contain atleast one capital letter and special character"
        );
    }

    const exist = await User.findOne({ email });

    if(exist)
      {
          return res.status(400).send("Email exists already")
      }
    const hashedPassword = await hashPassword(password);

    //register
    const user = await new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again");
  }
};

export const login = async (req, res) => {
  try {
    //console.log(req.body);
    
    const user = await User.findOne({ email: req.body.email });
    //check user
    if (!user) {
      return res.status(400).json("No User Exists With That Email");
        
    }
    
    if (user === null) {
      return res.status(400).json("Please enter a valid email");
    }
    
    //check password
    const match = await comparePassword(req.body.password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong Password",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const { password, ...rest } = user._doc;

    res.json({
      token,
      user: rest,
    });
  } catch (err) {
    console.error(err);
  }
};
