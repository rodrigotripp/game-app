const express = require("express")
const bcrypt = require("bcrypt")
var cors = require('cors')
const jwt = require("jsonwebtoken")
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("./database.json");
var db = low(adapter);

// Initialize Express app
const app = express()

// Define a JWT secret key. This should be isolated by using env variables for security
const jwtSecretKey = "dsfdsfsdfdsvcsvdfgefg"

// Set up CORS and JSON middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic home route for the API
app.get("/", (_req, res) => {
    res.send("Auth API.\nPlease use POST /auth & POST /verify for authentication")
})

// The auth endpoint that creates a new user record or logs a user based on an existing record
app.post("/auth", (req, res) => {
    
    const { username, password } = req.body;

    // Look up the user entry in the database
    const user = db.get("users").value().filter(user => username === user.username)

    // If found, compare the hashed passwords and generate the JWT token for the user
    if (user.length === 1) {
        bcrypt.compare(password, user[0].password, function (_err, result) {
            if (!result) {
                return res.status(401).json({ message: "Invalid password" });
            } else {
                let loginData = {
                    username,
                    signInTime: Date.now(),
                };

                const token = jwt.sign(loginData, jwtSecretKey);
                res.status(200).json({ message: "success", token });
            }
        });
    // If no user is found, hash the given password and create a new entry in the auth db with the username and hashed password
    } else if (user.length === 0) {
        bcrypt.hash(password, 10, function (_err, hash) {
            console.log({ username, password: hash })
            db.get("users").push({ username, password: hash }).write()

            let loginData = {
                username,
                signInTime: Date.now(),
            };

            const token = jwt.sign(loginData, jwtSecretKey);
            res.status(200).json({ message: "success", token });
        });
    }
})

// The verify endpoint that checks if a given JWT token is valid
app.post('/verify', (req, res) => {
    const tokenHeaderKey = "jwt-token";
    const authToken = req.headers[tokenHeaderKey];
    try {
      const verified = jwt.verify(authToken, jwtSecretKey);
      if (verified) {
        return res
          .status(200)
          .json({ status: "logged in", message: "success" });
      } else {
        // Access Denied
        return res.status(401).json({ status: "invalid auth", message: "error" });
      }
    } catch (error) {
      // Access Denied
      return res.status(401).json({ status: "invalid auth", message: "error" });
    }

})

// An endpoint to see if there's an existing account for a given username
app.post('/check-account', (req, res) => {
    const { username } = req.body

    console.log('request body', req.body)

    const user = db.get("users").value().filter(user => username === user.username)

    console.log(user)
    
    res.status(200).json({
        status: user.length === 1 ? "User exists" : "User does not exist", userExists: user.length === 1
    })
})

app.listen(3080)