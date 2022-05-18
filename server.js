const express = require('express');
const res = require('express/lib/response');
const Budget = require('./models/budget');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const budget = require('./models/budget');

//Mount Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

//Index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', { Budget });
});

//New
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs");
});

//Create
app.post('/budgets', (req, res) => {
    console.log(req.body)
    budget.push(req.body)
    res.redirect("/budgets")
});

//Show
app.get('/budgets/:id', (req, res) => {
    res.render("show.ejs", {
        budgets: Budget[req.params.id]
    });
});

//default test
app.get('/', (req, res) => {
    res.send('Budgtr is online');
});

app.listen(port, () =>{
    console.log(`Listening on port`, port);
});