//middleware requires Users model and bcrypt
const Users = require("../auth/users/users-model");
const bcrypt = require("bcrypt");


//check to see if user name requested is unique//
const checkIfUnique = async (req, res, next) => {//eslint-disable-line no-unused-vars
  try {
    //brings in the username from the request
    const username = req.body.username;

    //looks for the username in the database
    const user = await Users.findByUserName({ username: username });

    //if user already exists in the db display message: "User already exists"
    if (user) {
      res.status(400).json({
        message: "User already exists",
      });
    } else {
      // otherwise continue to next middleware
      return next();
    }
  } catch (err) {
    return next(err);
  }
};


//check to see if payload contains username and password on login or register//
const checkIfPayload = async (req, res, next) => {
  //eslint-disable-line no-unused-vars
  //for this we bring in username and password from the request
  const username = req.body.username;
  const password = req.body.password;

  //if username and password are not in the payload, return error message: "Missing username or password"
  if (!username || !password) {
    return res.status(404).json({
      message: "Missing username or password",
    });
  } else {
    //return registration success message: "You've been successfully registered"
     res.status(200).json({ message: "You've been successfully registered" });
  }
    return next();
};


//check to see if username already exists in the db on login//
const checkIfUserNameExists = async (req, res, next) => {//eslint-disable-line no-unused-vars
        //bring in the username from the request
        const username = req.body.username;
        //looks for the username in the database
        const user = await Users.findByUserName({ username: username });
            try { 

                //if user already exists in the db display message: "User already exists"
                if (user) {
                    res.status(400).json({
                        message: "User already exists",
                    });
                }   

                //validate the password next
                const validatePassword = await bcrypt.compare(req.body.password, user.password);
                //if password is incorrect display message: "Incorrect password"
                if (!validatePassword) {
                    res.status(400).json({
                        message: "Incorrect password",
                    });
                }

                //sets the req.user to the user object
                req.user = user;
                return next();
            } catch (err) {
                return next(err);
            }
};



//don't forget to export the middleware
module.exports = {
  checkIfUnique: checkIfUnique,
  checkIfPayload: checkIfPayload,
  checkIfUserNameExists: checkIfUserNameExists,
};
