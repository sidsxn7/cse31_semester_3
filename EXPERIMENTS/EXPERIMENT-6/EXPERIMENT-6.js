const express = require('express');
const app = express();
// middleware
app.use(express.json());
// sample student records (in memory data)
let students = [
    {
        id: 1,
        name: "Rahul Sharma",
        rollNumber: "2026001",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Priya Singh",
        rollNumber: "2026002",
        branch: "IT"
    },
    {
        id: 3,
        name: "Aman Verma",
        rollNumber: "2026003",
        branch: "ECE"
    }
];
// 1. GET - retrieve all students
app.get('/students', (req, res) => {
    res.status(200).json(students);
});
// 2. GET - retrieve student by ID
app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    res.status(200).json(student);
});
// 3. POST - add new student
app.post('/students', (req, res) => {
    const { id, name, rollNumber, branch } = req.body;
    if ( id == null ||
         !name ||
         !rollNumber ||
         !branch ) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    if (students.some(s => s.id === Number(id))) {
        return res.status(400).json({
            message: "Student ID already exists"
        });
    }
    const newStudent = {
        id: Number(id),
        name,
        rollNumber,
        branch
    };
    students.push(newStudent);
    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});
// 4. PUT - Update student details
app.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    const { name, rollNumber, branch } = req.body;
    if (!name || !rollNumber || !branch) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    student.name = name;
    student.rollNumber = rollNumber;
    student.branch = branch;
    res.status(200).json({
        message: "Student updated successfully",
        student: student
    });
});
// 5. DELETE - delete student
app.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    const deletedStudent = students.splice(index, 1);
    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});
// invalid route
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});
// start server
app.listen(3000, () => {
    console.log("Express Server running at http://localhost:3000");
});