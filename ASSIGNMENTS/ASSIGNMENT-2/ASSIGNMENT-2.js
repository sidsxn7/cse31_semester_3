// Problem Statement- Create a Node.js program to maintain the information of a student using a text file named 'student.txt'.
// Tasks-
// Perform the following operations:
// 1. Create/Write: Create student.txt and store the student's:
// Name, Roll Number, Branch, Semester
// 2. Read: Read the file and display all student details on the console.
// 3. Update: Add the following information to the existing file:
// Subject, Marks, Attendance
// 4. Read Again: Read the file again and display the complete updated student information.
// Display a suitable message after each successful operation.

const fs = require("fs");

// 1. create/write
fs.writeFileSync("sid_student.txt", "Name: Sid.\nRoll Number: 1152\nBranch: CSE\nSemester: 3rd");
console.log("file successfully created");

// 2. read
fs.readFileSync("sid_student.txt");
console.log("reading a file content");

// 3. update
fs.appendFileSync("sid_student.txt", "\nSubject: Full Stack Development\nMarks: 92\nAttendance: 97%");
console.log("file successfully updated");

// 4. read again
fs.readFileSync("sid_student.txt");
console.log("reading updated file content");