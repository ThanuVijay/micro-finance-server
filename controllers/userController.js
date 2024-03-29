const userModel = require('../models/userModel');
const bcrypt = require("bcryptjs")


const loginController  = async (req, res, next) => {
    const { username, password } = req.body;
  
  // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      });
    }

    try {
      const user = await userModel.findOne({ username, password });
  
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        });
      } else {
        res.status(200).json({
          message: "Login successful",
          user,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      });
    }
  };
  

  const registerController = async (req, res, next) => {
    const { username, email, password, role } = req.body;
  
    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({ message: "Password less than 6 characters" });
    }
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create user in the database
      const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
        role,
      });
  
      // Respond with success
      res.status(200).json({
        message: "User successfully created",
        user,
      });
    } catch (err) {
      // Respond with error
      res.status(401).json({
        message: "User not successfully created",
        error: err.message,
      });
    }
  };
  

  const updateUserController = async (req, res, next) => {
    const { role, id } = req.body;
    // First - Verifying if role and id is presnt
    if (role && id) {
      // Second - Verifying if the value of role is admin
      if (role === "admin") {
        // Finds the user with the id
        await userModel.findById(id)
          .then((user) => {
            // Third - Verifies the user is not an admin
            if (user.role !== "admin") {
              user.role = role;
              user.save((err) => {
                //Monogodb error checker
                if (err) {
                  res
                    .status("400")
                    .json({ message: "An error occurred", error: err.message });
                  process.exit(1);
                }
                res.status("201").json({ message: "Update successful", user });
              });
            } else {
              res.status(400).json({ message: "User is already an Admin" });
            }
          })
          .catch((error) => {
            res
              .status(400)
              .json({ message: "An error occurred", error: error.message });
          });
        }
    }
}


const deleteUserController = async (req, res, next) => {
    const { id } = req.body
    await userModel.findById(id)
      .then(user => user.deleteOne())
      .then(user =>
        res.status(201).json({ message: "User successfully deleted", user })
      )
      .catch(error =>
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message })
      )
  }

  


  
module.exports = { loginController,registerController, updateUserController, deleteUserController };