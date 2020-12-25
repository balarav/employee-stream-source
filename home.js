const express = require('express')

const app = express();

app.get('/', (req, res) =>{
    res.send("Welcome to landing page of Employee API")
});

// mock for database.
const employeeList = [{
    firstname: "balaji", lastname: "ravichandran"
}, {
    firstname: "bala", lastname: "ravi"
}];


app.get("/employees", (req, res) =>{
    res.json(employeeList)
});

app.listen(3000, () =>{
    console.log("server started at port 3000")
})