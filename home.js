const express = require('express')

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/index', (req, res) => {
    res.send("Welcome to landing page of Employee API")
});

// mock for database.
const employeeList = [{
    firstname: "balaji", lastname: "ravichandran", id: 1
}, {
    firstname: "bala", lastname: "ravi", id:2
}];

app.get("/employees", (req, res) => {
    res.json(employeeList)
});

app.post("/employee", (req, res) =>{
    const bodyVal = req.body;
    employeeList.push(bodyVal);
    res.send("Employee added to database successfully");
});

app.get('/employee/:id1/:id2', (req, res) => {
    var selectedId = req.params.id1;
    console.log(req.params.id1);
    const selectedEmployee = employeeList.find(r=>r.id == selectedId);
    console.log(req.params.id2);
  res.json(selectedEmployee);  
});

app.listen(3000, () => {
    console.log("server started at port 3000")
});
