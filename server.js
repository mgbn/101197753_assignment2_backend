const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
var cors = require('cors')

const app = express();
app.use(express.json()); // Make sure it comes back as json
app.use(cors())

//TODO - Replace you Connection String here

mongoose.connect('mongodb+srv://Mustafa:m1g2b3n4@cluster0.zf9udrk.mongodb.net/101197753_assignment2',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });



app.use(employeeRouter);




const port = process.env.PORT || 9090
app.listen(port, () => { console.log('Server is running http://localhost:9090/') })