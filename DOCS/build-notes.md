#Build Notes

##order of operations 
    - First... (breathe...)
    -(Lowest hanging fruits) Set up index.js and server.js files with a sanity check to ensure serve is working

        server.get("/", (req, res) => {
            res.status(200).json({ apiStatus: "All 200's and Blue Skies" })
        })

    - install dependencies
        - npm i bcrypt i jsonwebtoken

    - (Get your bearings) Scaffold out the project so you know what you need to be thinking about right away
        - create secrets folder in auth with secrets.js
        - create users folder in auth with users-model.js
        - users-middleware in the middleware folder
    - Use secrets template to complete task

        module.exports = {
            JWT_SECRET: process.env.JWT_SECRET || "keep it secret keep it safe",
        }

    (These two are logical to access the data from the db and set the logical framework of the restrictions needed)
    - Complete SQL theory and build users model logic
    - Build middlewares logic
    (Close it out with router and test)
    - Build routes logic
    - test and debug
