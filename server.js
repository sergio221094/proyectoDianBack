const express = require("express");
const bodyParser = require('body-parser');
var colors = require('colors');
const path = require('path');

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

const person = require("./routes/personsRoutes");
const documentTypes = require("./routes/documentTypesRoutes");
const centerOfAttention = require("./routes/centerOfAttentionRoutes");
const appointment = require("./routes/appointmentRoutes");
const employee = require("./routes/employeeRoutes");

app.use("/api/person", person);
app.use("/api/documentTypes", documentTypes);
app.use("/api/centerOfAttention", centerOfAttention);
app.use("/api/appointment", appointment);
app.use("/api/employee", employee);


app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, 'public', 'index.html')
    );
});

var server = app.listen(8081, function() {
    var port = server.address().port;
    console.log(colors.yellow("Servidor escuchando en http://localhost:" + port));
});