const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3500;

const cors = require("cors");
app.use(cors());

mongoose.connect(
    "mongodb://127.0.0.1:27017/FoodStore"
).then(() => {
    console.log('Database created successfully');
    app.listen(PORT, () => {
        console.log(`API Running on ${PORT}`);
    });
}).catch((err) => {
    console.error(err);
});

// const express = require('express')
// const app = express();
// app.use(express.json());
// //const userRoute = require('./routes/UserRoute')
// // const itemRoute = require('./routes/ItemRoute')
// // const adminRoute = require('./routes/AdminRoute')
// const mongoose = require('mongoose')
// const PORT = 3500;

// const cors = require("cors")
// app.use(cors());

// mongoose.connect(
//     "mongodb://127.0.0.1:27017/FoodStore")
//     .then(() => {
//         console.log("Connected to MongoDB");

//         // Define a Mongoose schema
//         const userSchema = new mongoose.Schema({
//             name: String,
//             email: String,
//            password: String
//         });



//         // Create a Mongoose model
//         const User = mongoose.model('User', userSchema);

//         // Insert a document into the 'users' collection
//         return User.create({ name: 'nimesh', email: 'nimeshdenuwan2000@gmail.com', password:'nimesh@123' });
//     })
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`API Running on ${PORT}`)
//         })
//     }).catch((err) => {
//         console.error(err)
//     });
