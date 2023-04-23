const express = require("express");
const cors=require('cors');
const signup = require("./Routes/signup")
const signIn = require("./Routes/signIn")
const notes = require("./Routes/notes")
const getConn = require("./connection/conn")
const app = express();
const port = 8000;
//const uri = 'mongodb+srv://root:Ashutosh@cluster0.5tscpdi.mongodb.net/test'
// async function getConnection(){
//     try {
//         await mongoose.connect(uri);
//         console.log("Connected to MongoDB Successfully")
//     } catch (error) {
//         console.log("Connection to mongoDB Failed")
//     }
// }
getConn()
app.use(cors())
app.use(express.json())
app.use(signup)
app.use(signIn)
app.use(notes)
// getConnection();
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use (bodyParser.json());
// //define the user schema
// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//         },
//         password: {
//             type: String,
//             required: true
//             },
//             confirmPassword: {
//                 type: String,
//                 required: true
//                 },
//             }
        
//         );

// const User=mongoose.model('User',userSchema);
// //sign-up routes
// app.post('/Register', function(req, res) {
//     const {email,password}=req.body;
//     // bcrypt.genSalt(10, (err, salt) => {
//     //     bcrypt.hash(password, salt, (err, hash) => {
//     //         const user={email,password,hash};
//     //         user.save((err) => {
//     //             if(err) {
//     //                 res.status(500).send(err);
//     //                 }
//     //             else {
//     //                 res.status(200).send(user);
                
//     //            }
//     //user already exist
//     //const userExist=User.exists((user)=>user.email===email);
//     if(User.email===email){
//         res.status(500).send('User already exist');
//         }
//                });
               app.listen(port,()=>(console.log("Server is running Successfully")))