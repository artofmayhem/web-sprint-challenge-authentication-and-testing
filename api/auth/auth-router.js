const router = require("express").Router();
//don't forget your users model
const Users = require("./users/users-model");

//bring in middleware
const {
  checkIfUnique,
  checkIfPayload,
  checkIfUserNameExists,
} = require("../middleware/users-middleware");

//bring in token handling imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../auth/secrets/secrets");

router.post(
  "/register",
  checkIfPayload,
  checkIfUnique,
  async (req, res, next) => {//eslint-disable-line
    //res.end('implement register, please!');
    /*
    IMPLEMENT
    You are welcome to build additional middlewares to help with the endpoint's functionality.
    DO NOT EXCEED 2^8 ROUNDS OF HASHING!
    1- In order to register a new account the client must provide `username` and `password`:
      {
        "username": "Captain Marvel", // must not exist already in the `users` table
        "password": "foobar"          // needs to be hashed before it's saved
      }
    2- On SUCCESSFUL registration,
      the response body should have `id`, `username` and `password`:
      {
        "id": 1,
        "username": "Captain Marvel",
        "password": "2a$08$jG.wIGR2S4hxuyWNcBf9MuoC4y0dNy7qC/LbmtuFBSdIhWks2LhpG"
      }
    3- On FAILED registration due to `username` or `password` missing from the request body,
      the response body should include a string exactly as follows: "username and password required".
    4- On FAILED registration due to the `username` being taken,
      the response body should include a string exactly as follows: "username taken".
  */

    try {
      //to register a new users i need to pass both username and password into a newUser
      //object that i can then save into the database
      const username = req.body.username;
      const password = req.body.password;
      const newUser = await Users.create({
        username,
        password: await bcrypt.hash(password, 8), //using bcrypt to hash the password 8 rounds max
      });

      //if the user is created successfully, return the user object
      res.status(201).json({ newUser: newUser });
    } catch (err) {
      //if there is an error, return the error message
      res.status(400).json({ error: err.message });
    }
  }
);

router.post(
  "/login",
  checkIfPayload,
  checkIfUserNameExists,
  async (req, res, next) => {//eslint-disable-line
    res.end("implement login, please!");
    /*
    IMPLEMENT
    You are welcome to build additional middlewares to help with the endpoint's functionality.
    1- In order to log into an existing account the client must provide `username` and `password`:
      {
        "username": "Captain Marvel",
        "password": "foobar"
      }
    2- On SUCCESSFUL login,
      the response body should have `message` and `token`:
      {
        "message": "welcome, Captain Marvel",
        "token": "eyJhbGciOiJIUzI ... ETC ... vUPjZYDSa46Nwz8"
      }
    3- On FAILED login due to `username` or `password` missing from the request body,
      the response body should include a string exactly as follows: "username and password required".
    4- On FAILED login due to `username` not existing in the db, or `password` being incorrect,
      the response body should include a string exactly as follows: "invalid credentials".
  */
    try {
      const options = {
        expires: "1d",
        issueAt: new Date(),
      };
      const payload = {
        username: req.body.username,
        subject: req.user.id,
      };
      const token = jwt.sign(payload, JWT_SECRET, options);
      res.status(200).json({
        message: "welcome, " + req.body.username,
        token,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
);

module.exports = router;
