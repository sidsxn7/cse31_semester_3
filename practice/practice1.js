// To study and implement JavaScript objects and arrays, access and modify object properties, 
// store multiple objects in an array, display data using console.log() and console.table(), 
// and use loops, conditional statements, and template literals to process and display student and product information.
let Student = {
    name : "sid.",
    roll : 67,
    cgpa : 9.83,
    ispass : true
};
Student.name = "sid";
console.log(Student.name);
let marks = [7, 31, 49, 57, 29];
console.log("marks: ", marks[0]);

let info = [
    {
        name : 'Amit',
        city : 'Delhi',
        cgpa : 7.5,
    },
    {
        name : 'Rahul',
        city : 'Ghaziabad',
        cgpa : 9.8,
    },
    {
        name : 'Prateek',
        city : 'Mumbai',
        cgpa : 8.8,
    },
    {
        name : 'Rohit',
        city : 'Delhi',
        cgpa : 7.8,
    },
    {
        name : 'Ramesh',
        city : 'Mumbai',
        cgpa : 8.5,
    },
    {
        name : 'Ram',
        city : 'Mumbai',
        cgpa : 8.2,
    },
    {
        name : 'Ravi',
        city : 'Delhi',
        cgpa : 7.9,
    },
    {
        name : 'Rakesh',
        city : 'Ghaziabad',
        cgpa : 8.9,
    },
    {
        name : 'Mohit',
        city : 'Noida',
        cgpa : 9.1,
    },
    {
        name : 'Suresh',
        city : 'Noida',
        cgpa : 8.1,
    }
]
console.table(info);
console.log("city at zero-th index: ")
console.table(info[0].city);
for(let i = 0; i < info.length; i++){
    if (info[i].cgpa >= 8 && info[i].city == "Mumbai"){
        console.log("Person with cgpa more than 8 and is from Mumbai: ", info[i].name, '\n');
    }
}

let obj = {
    name : "pen",
    price : 10
}
console.log("the cost of", obj.name, "is", obj.price);
console.log(`the cost of ${obj.name} is ${obj.price}`);
console.log(`product of 3*5 is ${3*5}`);