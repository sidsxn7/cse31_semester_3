// C - create a file and write 
const fs = require("fs");
fs.writeFileSync("student.txt", "this is the student text file")
    console.log("file successfully created");


// R - reading a file content
fs.readFileSync("student.txt");
    console.log("reading a file content"); 
    console.log(data);


// U - update a file content
fs.appendFileSync("student.txt", " for CSE-31 batch-2");
    console.log("file successfully updated");


// delete a file
fs.unlinkSync("student.txt");
    console.log("file successfully deleted");