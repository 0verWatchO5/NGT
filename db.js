const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/chetana_tybscit";

//Make DB Connectivity
mongoose.connect(uri).then(() => {
    console.log("DB Connected");
}).catch((err) => {
    console.log(err);
});

//Creating a schema 
const StudentSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String
});
//Creating a model
const Student = mongoose.model("student", StudentSchema);

//Insert a Single Value
// Student.collection.insertOne(
//     {fname:'Chetana',lname:'College',email:'admin@chetanacollege.edu.in',password:'chetana@123'}
// ).then(function(){
//     console.log("Data Inserted");
// }).catch(function(error){
//     console.log("Error Occured: ", error)
// });


// //Insert Multiple Values
// Student.collection.insertMany([
//     {fname:'Chetana',lname:'College',email:'admin@chetanacollege.edu.in',password:'chetana@123'},
//     {fname:'Chetana',lname:'College',email:'admin@chetanacollege.edu.in',password:'chetana@123'},
//     {fname:'Chetana',lname:'College',email:'admin@chetanacollege.edu.in',password:'chetana@123'},
//     {fname:'Chetana',lname:'College',email:'admin@chetanacollege.edu.in',password:'chetana@123'},
//     {fname:'Chetana',lname:'College',email:'admin@chetanacollege.edu.in',password:'chetana@123'}
// ]).then(function(){
//    console.log("Data Inserted"); 
// }).catch(function(error){
//     console.log("Error Occured: ", error)
// });

// //Fetch All The Data
// Student.find({}).exec()
// .then((students)=>{
//     students.forEach(studentRecord => console.log(studentRecord));
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //Fetch Only Specific Data
// Student.find({fname:"Chetana"}).exec()
// .then((students)=>{
//     students.forEach(studentRecord => console.log(studentRecord));
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //Total Count of Data Fetched 
// Student.find({}).countDocuments().exec()
// .then((count)=>{
//     console.log(count);
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //To Find First document which matches the given value
// Student.findOne({fname:"Chetana"}).exec()
// .then((student)=>{
//     console.log(student);
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //To find Last document which matches the given value
// Student.findOne({fname:"Chetana"}).sort({fname:1}).exec()
// .then((student)=>{
//     console.log(student);
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //To update one record based on condition
// Student.updateOne({fname:"Chetana"},{$set:{fname:"Chetan"}}).exec()
// .then((student)=>{
//     console.log("Data Updated:", student);
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //Use of findoneandupdate
// Student.findOneAndUpdate({fname:"Chetana"},{$set:{fname:"Chetan"}}).exec()
// .then((student)=>{
//     console.log("Data Updated:", student);
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //To delete one record based on condition
// Student.deleteOne({fname:"Chetana"}).exec()
// .then((student)=>{
//     console.log("Data Deleted:", student);
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //To findoneanddelete
// Student.findOneAndDelete({fname:"Chetana"}).exec()
// .then((student)=>{
//     console.log("Data Deleted:", student);
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //To deleteMany
// Student.deleteMany({fname:"Chetana"}).exec()
// .then((student)=>{
//     console.log("Data Deleted:", student);
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });

// //Save data using create method
// Student.create({
//     fname:"Chetana 123",
//     lname:"College",
//     email:"admin@chetanacollege.edu.in",
//     password:"chetana@123"
// }).then((student)=>{
//     console.log("Data Inserted:", student);
// }).catch((error)=>{
//     console.log("Error Occured: ", error)
// });