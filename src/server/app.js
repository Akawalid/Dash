const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const participants = require('./model/participants.js')
const cors = require('cors')
mongoose.connect('mongodb+srv://TEAM12:'+'GDGTEAM12'+'@cluster0.fyemcog.mongodb.net/');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
//Cors header editing
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');    
//     if(res.mathod === "OPTIONS") {
//         res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// })
app.use(cors())

app.get("/api/send_emails", (req, res, next) => {
    participants.find()
    .then(users_list => {
        return res.status(200).json({
            users:users_list
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
})
app.post('/api/registrations', (req, res, next) => {
    const newUser = req.body;

    // Check if user with the given email already exists
    participants.find({email: newUser.email})
        .then(existingUser => {
            if (existingUser.length > 0 ) {
                
                // User with the email already exists, return an error
                return res.status(400).json({
                    error: 'User with the provided email already exists.'
                });
            } else {
                console.log(newUser)
                // User doesn't exist, insert the new user
                newUser._id = new mongoose.Types.ObjectId()
                const toInsert = new participants({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name, 
                    last_name:req.body.last_name,
                    email: req.body.email,
                    telephone: req.body.telephone,
                    company_name: req.body.company_name,
                    level: req.body.level
                })
                return toInsert.save();
            }
        })
        .then(insertedUser => {
            return res.status(201).json({
                user: insertedUser,
                message: "inserted succesfully"
            });
        })
        .catch(err => {

            return res.status(500).json({ error: err });
        });
});

app.use((req, res, next) => {
    const error = new Error("Not found X(");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(500).json(error);
});

const PORT = process.env.PORT || 5000; // Use the provided PORT or fallback to 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
